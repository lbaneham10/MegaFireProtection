import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import Database from 'better-sqlite3';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Initialize Database
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

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

app.use(express.json());

// API: Contact Form Submission
app.post('/api/contact', (req, res) => {
  const { name, email, phone, company, service, message } = req.body;
  
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

// API: AI Quote Assistant
app.post('/api/ai-quote-assist', async (req, res) => {
  const { message, service } = req.body;
  
  if (!process.env.GEMINI_API_KEY) {
    return res.status(500).json({ error: 'AI API Key not configured.' });
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `
      You are an expert fire protection engineer at Mega Fire Protection.
      A potential client has requested a quote for "${service}".
      Client Message: "${message}"
      
      Provide a brief (max 3 sentences) professional acknowledgement that addresses their specific need and mentions a relevant NFPA code (like NFPA 13 for sprinklers or NFPA 25 for inspection) to build trust.
      Keep it high-level and encouraging.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    res.json({ ai_response: text });
  } catch (error) {
    console.error('AI Error:', error);
    res.status(500).json({ error: 'Failed to generate AI response.' });
  }
});

// Serve frontend in production (optional, for local we use Vite dev)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
}

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
