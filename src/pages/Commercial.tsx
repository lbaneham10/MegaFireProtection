import { motion } from 'motion/react';
import { Button } from '../components/Button';
import { Building2, CheckCircle2, HardHat, ShieldAlert, ArrowRight, Phone } from 'lucide-react';
import { fadeUp, stagger } from '../lib/animations';

export default function Commercial() {
  const features = [
    'New Construction Design & Installation',
    'Tenant Improvements (TI)',
    'High-Rise Fire Protection',
    'Warehouse & Industrial Systems',
    'Retail Space Retrofits',
    'NFPA Code Compliance Upgrades',
    'Annual Inspections & Testing',
    '24/7 Emergency Repair Service'
  ];

  return (
    <div className="pt-24 pb-20 bg-kr-bg">
      {/* Header */}
      <section className="bg-kr-bg text-white py-20 md:py-32 relative overflow-hidden border-b border-kr-border">
        <div className="absolute inset-0 z-0 opacity-20 filter grayscale">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="Modern commercial building"
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
              COMMERCIAL SERIES
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold mb-6 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Protecting Your Business<span className="text-kr-red">.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-kr-muted leading-relaxed mb-10 max-w-2xl">
              Mega Fire Protection partners with general contractors, property managers, and developers to deliver robust, code-compliant fire safety systems for commercial properties.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button href="/contact" size="lg" className="group">
                Request a Commercial Quote <ArrowRight size={16} className="ml-3 group-hover:translate-x-1.5 transition-transform duration-200" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-28 md:py-36">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
            >
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Expertise for Complex Projects
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-6 text-lg text-kr-muted leading-relaxed mb-12">
                <p>
                  Commercial fire protection requires a deep understanding of complex building codes, occupancy classifications, and specialized hazard requirements. Our engineering team designs systems that not only meet NFPA standards but are optimized for your specific facility.
                </p>
                <p>
                  Whether you are building a new warehouse, retrofitting an older office building, or managing tenant improvements in a retail space, we provide the technical expertise and project management skills to ensure your fire sprinkler system is installed correctly, on time, and within budget.
                </p>
              </motion.div>
              
              <motion.div variants={fadeUp} className="bg-kr-panel p-8 md:p-10 border border-kr-border hover:border-kr-border-hover transition-colors duration-300">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  <div className="w-10 h-10 rounded-sm bg-kr-red/10 flex items-center justify-center">
                    <HardHat size={20} className="text-kr-red" />
                  </div>
                  For Contractors & Developers
                </h3>
                <p className="text-kr-muted mb-8 leading-relaxed">
                  We understand the critical path of construction. Our crews coordinate seamlessly with other trades, ensuring that our installation phases align with your project schedule to prevent delays and cost overruns.
                </p>
                <Button href="/contact" variant="outline" className="w-full sm:w-auto group">
                  Partner With Us <ArrowRight size={16} className="ml-3 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="bg-[#070707] border border-kr-border p-8 md:p-14 text-white h-full flex flex-col">
                <h3 className="text-3xl font-bold mb-10 flex items-center gap-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  <div className="w-14 h-14 rounded-sm bg-kr-red/10 flex items-center justify-center">
                    <ShieldAlert className="text-kr-red" size={28} />
                  </div>
                  Commercial Services
                </h3>
                <ul className="space-y-5 flex-1">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4 group cursor-default">
                      <CheckCircle2 className="text-kr-red shrink-0 mt-0.5" size={20} />
                      <span className="text-kr-text text-[15px] group-hover:text-white transition-colors duration-200">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-12 pt-10 border-t border-kr-border">
                  <p className="text-xs text-kr-muted mb-3 uppercase tracking-[0.2em] font-bold">Ready to discuss your project?</p>
                  <a href="tel:+18005550199" className="text-3xl md:text-4xl font-bold text-white hover:text-kr-red transition-colors duration-200 tracking-tight inline-flex items-center gap-3 cursor-pointer">
                    <Phone size={24} className="text-kr-red" />
                    (800) 555-0199
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
