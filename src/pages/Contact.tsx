import { motion } from 'motion/react';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock, AlertTriangle, ShieldCheck } from 'lucide-react';
import { fadeUp, stagger } from '../lib/animations';

export default function Contact() {
  return (
    <div className="pt-24 pb-20 bg-kr-bg">
      {/* Header */}
      <section className="bg-kr-bg text-white py-20 md:py-32 relative overflow-hidden border-b border-kr-border">
        <div className="absolute inset-0 z-0 opacity-15 filter grayscale">
          <img
            src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2070&auto=format&fit=crop"
            alt="Contact Mega Fire Protection"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-kr-bg via-kr-bg/90 to-kr-bg/50 z-[1]" />
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden" animate="visible" variants={stagger}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} className="text-kr-muted text-xs font-bold tracking-[0.25em] uppercase mb-6 flex items-center gap-3">
              <span className="w-10 h-[2px] bg-kr-red" />
              GET IN TOUCH
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold mb-6 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Contact Us<span className="text-kr-red">.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-kr-muted leading-relaxed max-w-2xl">
              Get in touch for a consultation, request a quote, or schedule emergency service. We are ready to protect your property.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-28 md:py-36">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Info */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="lg:col-span-1 space-y-6"
            >
              <motion.div variants={fadeUp} className="bg-kr-panel p-8 md:p-10 border border-kr-border">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-10" style={{ fontFamily: 'Poppins, sans-serif' }}>Contact Details</h2>
                
                <div className="space-y-8">
                  {[
                    { icon: <Phone size={20} className="text-kr-red" />, label: 'Phone', value: '(800) 555-0199', href: 'tel:+18005550199', isLink: true },
                    { icon: <Mail size={20} className="text-kr-red" />, label: 'Email', value: 'info@megafireprotection.com', href: 'mailto:info@megafireprotection.com', isLink: true },
                    { icon: <MapPin size={20} className="text-kr-red" />, label: 'Office', value: '123 Safety Blvd, Suite 100\nGlendale, CA 91203', isLink: false },
                    { icon: <Clock size={20} className="text-kr-red" />, label: 'Hours', value: 'Mon - Fri: 7:00 AM - 6:00 PM', isLink: false },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-sm bg-kr-red/10 flex items-center justify-center mt-0.5">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-kr-muted uppercase tracking-widest mb-1.5">{item.label}</p>
                        {item.isLink ? (
                          <a href={item.href} className="text-lg font-semibold text-white hover:text-kr-red transition-colors duration-200 cursor-pointer">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-lg font-medium text-white whitespace-pre-line">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Emergency Banner */}
              <motion.div variants={fadeUp} className="bg-kr-red p-8 md:p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle size={28} className="text-white" />
                    <h3 className="text-2xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>24/7 Emergency</h3>
                  </div>
                  <p className="text-white/90 mb-8 leading-relaxed">
                    Experiencing a leak or system failure? We provide round-the-clock emergency repairs.
                  </p>
                  <a 
                    href="tel:+18005550199" 
                    className="inline-flex items-center justify-center w-full bg-kr-bg text-white font-bold py-4 px-6 hover:bg-black transition-colors duration-200 uppercase tracking-widest text-sm cursor-pointer rounded-sm"
                  >
                    <Phone size={16} className="mr-3" />
                    Call Emergency Line
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="lg:col-span-2"
            >
              <motion.div variants={fadeUp} className="bg-[#070707] p-8 md:p-14 border border-kr-border h-full">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>Request a Quote</h2>
                <p className="text-kr-muted mb-10 text-lg leading-relaxed">
                  Fill out the form below with your project details, and our team will get back to you within 24 hours.
                </p>
                <ContactForm />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
