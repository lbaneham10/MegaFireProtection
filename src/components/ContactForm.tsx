import React, { useState } from 'react';
import { Button } from './Button';
import { ArrowRight, CheckCircle2, Loader2, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [aiResponse, setAiResponse] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      company: formData.get('company'),
      service: formData.get('service'),
      message: formData.get('message'),
    };

    try {
      // 1. Submit to database
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Submission failed');

      // 2. Optional: Get AI Assistant response
      const aiRes = await fetch('/api/ai-quote-assist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: data.message, service: data.service }),
      });

      if (aiRes.ok) {
        const aiData = await aiRes.json();
        setAiResponse(aiData.ai_response);
      }

      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full px-4 py-4 bg-kr-bg border border-kr-border focus:border-kr-red focus:ring-1 focus:ring-kr-red/30 transition-all duration-200 text-white outline-none rounded-sm placeholder:text-kr-muted/50";

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="bg-kr-panel border border-kr-border p-10 text-center"
      >
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-kr-red/15 flex items-center justify-center">
          <CheckCircle2 size={32} className="text-kr-red" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>Message Sent Successfully</h3>
        <p className="text-kr-muted mb-8 max-w-md mx-auto">
          Thank you for contacting Mega Fire Protection. Our team will review your request and respond within 24 hours.
        </p>

        {aiResponse && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8 p-6 bg-kr-bg border-l-2 border-kr-red text-left relative overflow-hidden group"
          >
            <div className="flex items-center gap-2 mb-3 text-kr-red text-[10px] font-bold uppercase tracking-widest">
              <Bot size={14} />
              Instant AI Assistant Analysis
            </div>
            <p className="text-kr-text text-sm italic leading-relaxed relative z-10">"{aiResponse}"</p>
            <div className="absolute top-0 right-0 w-24 h-24 bg-kr-red/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          </motion.div>
        )}

        <Button 
          variant="outline" 
          onClick={() => {
            setIsSuccess(false);
            setAiResponse(null);
          }}
        >
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label htmlFor="name" className="text-xs font-bold tracking-widest uppercase text-kr-muted">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className={inputClass}
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="company" className="text-xs font-bold tracking-widest uppercase text-kr-muted">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            className={inputClass}
            placeholder="Company Name"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label htmlFor="email" className="text-xs font-bold tracking-widest uppercase text-kr-muted">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={inputClass}
            placeholder="john@example.com"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-xs font-bold tracking-widest uppercase text-kr-muted">Phone *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className={inputClass}
            placeholder="(555) 000-0000"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="service" className="text-xs font-bold tracking-widest uppercase text-kr-muted">Service Needed</label>
        <select
          id="service"
          name="service"
          className={`${inputClass} cursor-pointer appearance-none`}
          defaultValue=""
          required
        >
          <option value="" disabled>Select a service</option>
          <option value="Fire Sprinkler Design">Fire Sprinkler Design</option>
          <option value="System Installation">System Installation</option>
          <option value="Maintenance & Inspection">Maintenance & Inspection</option>
          <option value="Leak & Emergency Repair">Leak & Emergency Repair</option>
          <option value="Pipe Retrofit & Upgrade">Pipe Retrofit & Upgrade</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-xs font-bold tracking-widest uppercase text-kr-muted">Project Details</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className={`${inputClass} resize-none`}
          placeholder="Tell us about your project, property type, and timeline..."
        ></textarea>
      </div>

      <div className="pt-2">
        <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto group">
          {isSubmitting ? (
            <>
              <Loader2 size={16} className="mr-3 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Submit Request
              <ArrowRight size={16} className="ml-3 group-hover:translate-x-1.5 transition-transform duration-200" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
