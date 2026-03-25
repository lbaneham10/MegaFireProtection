import express from 'express';
import { GoogleGenAI } from '@google/genai';
import Database from 'better-sqlite3';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// ── CORS ──
app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  if (_req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

app.use(express.json({ limit: '50kb' }));

// ── Database ──
const db = new Database('megafire.db');
db.prepare(`
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    company TEXT,
    service TEXT,
    message TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`).run();

// ── Simple In-Memory Rate Limiter ──
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 10;  // max requests
const RATE_WINDOW = 60_000; // per 60 seconds

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

// ── Input Validation Helpers ──
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(str: unknown): string {
  if (typeof str !== 'string') return '';
  return str.trim().slice(0, 1000); // cap at 1000 chars
}

// ── API: Contact Form Submission ──
app.post('/api/contact', (req, res) => {
  const name = sanitize(req.body.name);
  const email = sanitize(req.body.email);
  const phone = sanitize(req.body.phone);
  const company = sanitize(req.body.company);
  const service = sanitize(req.body.service);
  const message = sanitize(req.body.message);

  // Validate required fields
  if (!name || !email || !phone) {
    return res.status(400).json({ success: false, error: 'Name, email, and phone are required.' });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ success: false, error: 'Please provide a valid email address.' });
  }

  try {
    const stmt = db.prepare(`
      INSERT INTO messages (name, email, phone, company, service, message)
      VALUES (?, ?, ?, ?, ?, ?)
    `);
    stmt.run(name, email, phone, company, service, message);

    res.json({ success: true, message: 'Message received and stored.' });
  } catch (error) {
    console.error('Database Error:', error);
    res.status(500).json({ success: false, error: 'Failed to save message.' });
  }
});

// ── API: AI Quote Assistant ──
app.post('/api/ai-quote-assist', async (req, res) => {
  const clientIp = req.ip || 'unknown';
  if (isRateLimited(clientIp)) {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  }

  const message = sanitize(req.body.message);
  const service = sanitize(req.body.service);

  if (!process.env.GEMINI_API_KEY) {
    return res.status(500).json({ error: 'AI API Key not configured.' });
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const prompt = `
      You are an expert fire protection engineer at Mega Fire Protection.
      A potential client has requested a quote for "${service}".
      Client Message: "${message}"
      
      Provide a brief (max 3 sentences) professional acknowledgement that addresses their specific need and mentions a relevant NFPA code (like NFPA 13 for sprinklers or NFPA 25 for inspection) to build trust.
      Keep it high-level and encouraging.
    `;

    const result = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: prompt,
    });

    const text = result.text ?? 'Thank you for your inquiry. Our team will review your request and respond shortly.';

    res.json({ ai_response: text });
  } catch (error) {
    console.error('AI Error:', error);
    res.status(500).json({ error: 'Failed to generate AI response.' });
  }
});

// ── Serve frontend in production ──
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
}

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
