import { motion } from 'motion/react';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock, AlertTriangle } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-24 pb-20 bg-kr-bg">
      {/* Header */}
      <section className="bg-kr-bg text-white py-20 md:py-32 relative overflow-hidden border-b border-kr-border">
        <div className="absolute inset-0 z-0 opacity-20 filter grayscale">
          <img
            src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2070&auto=format&fit=crop"
            alt="Contact us"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="text-kr-muted text-xs font-bold tracking-[0.2em] uppercase mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-kr-red"></span>
              GET IN TOUCH
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Contact Us<span className="text-kr-red">.</span>
            </h1>
            <p className="text-xl text-kr-muted leading-relaxed">
              Get in touch for a consultation, request a quote, or schedule emergency service. We are ready to protect your property.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1 space-y-8"
            >
              <div className="bg-kr-panel p-10 border border-kr-border">
                <h2 className="text-3xl font-bold text-white mb-10">Contact Details</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 mt-1">
                      <Phone className="text-kr-red" size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-kr-muted uppercase tracking-widest mb-2">Phone</p>
                      <a href="tel:+18005550199" className="text-xl font-bold text-white hover:text-kr-red transition-colors">
                        (800) 555-0199
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="shrink-0 mt-1">
                      <Mail className="text-kr-red" size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-kr-muted uppercase tracking-widest mb-2">Email</p>
                      <a href="mailto:info@megafireprotection.com" className="text-lg font-medium text-white hover:text-kr-red transition-colors">
                        info@megafireprotection.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="shrink-0 mt-1">
                      <MapPin className="text-kr-red" size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-kr-muted uppercase tracking-widest mb-2">Office</p>
                      <p className="text-lg font-medium text-white">
                        123 Safety Blvd, Suite 100<br />
                        Glendale, CA 91203
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="shrink-0 mt-1">
                      <Clock className="text-kr-red" size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-kr-muted uppercase tracking-widest mb-2">Hours</p>
                      <p className="text-lg font-medium text-white">
                        Mon - Fri: 7:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Banner */}
              <div className="bg-kr-red p-10 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle size={32} className="text-white" />
                  <h3 className="text-2xl font-bold">24/7 Emergency</h3>
                </div>
                <p className="text-white/90 mb-8 text-lg">
                  Experiencing a leak or system failure? We provide round-the-clock emergency repairs.
                </p>
                <a 
                  href="tel:+18005550199" 
                  className="inline-flex items-center justify-center w-full bg-kr-bg text-white font-bold py-4 px-6 hover:bg-black transition-colors uppercase tracking-widest text-sm"
                >
                  Call Emergency Line
                </a>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-[#080808] p-10 md:p-16 border border-kr-border h-full">
                <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Request a Quote</h2>
                <p className="text-kr-muted mb-12 text-lg">
                  Fill out the form below with your project details, and our team will get back to you promptly to discuss your fire protection needs.
                </p>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
