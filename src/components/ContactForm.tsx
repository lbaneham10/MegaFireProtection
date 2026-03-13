import React, { useState } from 'react';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="bg-kr-panel border border-kr-border p-10">
        <h3 className="text-2xl font-bold text-white mb-4">Message Sent.</h3>
        <p className="text-kr-muted mb-8">
          Thank you for contacting Mega Fire Protection. Our team will review your request and respond shortly.
        </p>
        <Button 
          variant="outline" 
          onClick={() => setIsSuccess(false)}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-xs font-bold tracking-widest uppercase text-kr-muted">Full Name *</label>
          <input
            type="text"
            id="name"
            required
            className="w-full px-4 py-4 bg-kr-bg border border-kr-border focus:border-kr-red focus:ring-1 focus:ring-kr-red transition-colors text-white outline-none"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="company" className="text-xs font-bold tracking-widest uppercase text-kr-muted">Company</label>
          <input
            type="text"
            id="company"
            className="w-full px-4 py-4 bg-kr-bg border border-kr-border focus:border-kr-red focus:ring-1 focus:ring-kr-red transition-colors text-white outline-none"
            placeholder="Company Name"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="email" className="text-xs font-bold tracking-widest uppercase text-kr-muted">Email *</label>
          <input
            type="email"
            id="email"
            required
            className="w-full px-4 py-4 bg-kr-bg border border-kr-border focus:border-kr-red focus:ring-1 focus:ring-kr-red transition-colors text-white outline-none"
            placeholder="john@example.com"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-xs font-bold tracking-widest uppercase text-kr-muted">Phone *</label>
          <input
            type="tel"
            id="phone"
            required
            className="w-full px-4 py-4 bg-kr-bg border border-kr-border focus:border-kr-red focus:ring-1 focus:ring-kr-red transition-colors text-white outline-none"
            placeholder="+1 (555) 000-0000"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-xs font-bold tracking-widest uppercase text-kr-muted">Message</label>
        <textarea
          id="message"
          rows={5}
          className="w-full px-4 py-4 bg-kr-bg border border-kr-border focus:border-kr-red focus:ring-1 focus:ring-kr-red transition-colors text-white outline-none resize-none"
          placeholder="Write a message..."
        ></textarea>
      </div>

      <div className="pt-4">
        <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto group">
          {isSubmitting ? 'Submitting...' : 'Submit Request'}
          {!isSubmitting && <ArrowRight size={16} className="ml-3 group-hover:translate-x-1 transition-transform" />}
        </Button>
      </div>
    </form>
  );
}
