import { motion } from 'motion/react';
import { Button } from '../components/Button';
import { Building2, CheckCircle2, HardHat, ShieldAlert, ArrowRight } from 'lucide-react';

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
        <div className="absolute inset-0 z-0 opacity-30 filter grayscale">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="Commercial building"
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
              COMMERCIAL SERIES
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Protecting Your Business<span className="text-kr-red">.</span>
            </h1>
            <p className="text-xl text-kr-muted leading-relaxed mb-10">
              Mega Fire Protection partners with general contractors, property managers, and developers to deliver robust, code-compliant fire safety systems for commercial properties.
            </p>
            <Button href="/contact" size="lg" className="group">
              Request a Commercial Quote <ArrowRight size={16} className="ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                Expertise for Complex Projects
              </h2>
              <div className="space-y-6 text-lg text-kr-muted leading-relaxed mb-12">
                <p>
                  Commercial fire protection requires a deep understanding of complex building codes, occupancy classifications, and specialized hazard requirements. Our engineering team designs systems that not only meet NFPA standards but are optimized for your specific facility.
                </p>
                <p>
                  Whether you are building a new warehouse, retrofitting an older office building, or managing tenant improvements in a retail space, we provide the technical expertise and project management skills to ensure your fire sprinkler system is installed correctly, on time, and within budget.
                </p>
              </div>
              
              <div className="bg-kr-panel p-10 border border-kr-border">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <HardHat className="text-kr-red" /> For Contractors & Developers
                </h3>
                <p className="text-kr-muted mb-8">
                  We understand the critical path of construction. Our crews coordinate seamlessly with other trades, ensuring that our installation phases align with your project schedule to prevent delays and cost overruns.
                </p>
                <Button href="/contact" variant="outline" className="w-full sm:w-auto group">
                  Partner With Us <ArrowRight size={16} className="ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-[#080808] border border-kr-border p-10 md:p-16 text-white h-full flex flex-col">
                <h3 className="text-3xl font-bold mb-10 flex items-center gap-4">
                  <ShieldAlert className="text-kr-red" size={40} />
                  Commercial Services
                </h3>
                <ul className="space-y-6 flex-1">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <CheckCircle2 className="text-kr-red shrink-0 mt-1" size={24} />
                      <span className="text-kr-text text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-12 pt-10 border-t border-kr-border">
                  <p className="text-xs text-kr-muted mb-4 uppercase tracking-[0.2em] font-bold">Ready to discuss your project?</p>
                  <a href="tel:+18005550199" className="text-4xl font-bold text-white hover:text-kr-red transition-colors tracking-tight">
                    (800) 555-0199
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
