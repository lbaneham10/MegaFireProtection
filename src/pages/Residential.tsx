import { motion } from 'motion/react';
import { Button } from '../components/Button';
import { Home as HomeIcon, CheckCircle2, Heart, Shield, ArrowRight, Phone } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export default function Residential() {
  const features = [
    'Single-Family Home Sprinkler Systems',
    'Multi-Family & Apartment Complexes',
    'System Repairs and Leak Fixes',
    'Sprinkler Head Replacement',
    'Annual Maintenance & Testing',
    'Code Compliance Upgrades',
    'Custom Home Design Integration',
    '24/7 Emergency Service'
  ];

  return (
    <div className="pt-24 pb-20 bg-kr-bg">
      {/* Header */}
      <section className="bg-kr-bg text-white py-20 md:py-32 relative overflow-hidden border-b border-kr-border">
        <div className="absolute inset-0 z-0 opacity-15 filter grayscale">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
            alt="Residential home exterior"
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
              RESIDENTIAL EDITION
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold mb-6 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Protecting Your Family<span className="text-kr-red">.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-kr-muted leading-relaxed mb-10 max-w-2xl">
              Mega Fire Protection provides reliable, code-compliant residential fire sprinkler systems designed to save lives and minimize property damage in the event of a fire.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button href="/contact" size="lg" className="group">
                Request a Residential Quote <ArrowRight size={16} className="ml-3 group-hover:translate-x-1.5 transition-transform duration-200" />
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
                Peace of Mind for Homeowners
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-6 text-lg text-kr-muted leading-relaxed mb-12">
                <p>
                  A residential fire sprinkler system is the most effective way to protect your family and your home from the devastating effects of a fire. Modern residential sprinklers are designed to respond quickly to heat, controlling or extinguishing a fire before the fire department arrives.
                </p>
                <p>
                  Whether you are building a custom home, managing a multi-family complex, or need repairs on an existing system, Mega Fire Protection delivers professional, unobtrusive installations that blend seamlessly with your home's interior design.
                </p>
              </motion.div>
              
              <motion.div variants={fadeUp} className="bg-kr-panel p-8 md:p-10 border border-kr-border hover:border-kr-border-hover transition-colors duration-300">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  <div className="w-10 h-10 rounded-sm bg-kr-red/10 flex items-center justify-center">
                    <Heart size={20} className="text-kr-red" />
                  </div>
                  Why Residential Sprinklers Matter
                </h3>
                <p className="text-kr-muted mb-8 leading-relaxed">
                  According to the NFPA, the risk of dying in a home fire is reduced by 85% when fire sprinklers are present. Furthermore, property damage is significantly lower in homes equipped with sprinklers.
                </p>
                <Button href="/contact" variant="outline" className="w-full sm:w-auto group">
                  Schedule an Inspection <ArrowRight size={16} className="ml-3 group-hover:translate-x-1 transition-transform duration-200" />
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
                    <Shield className="text-kr-red" size={28} />
                  </div>
                  Residential Services
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
                  <p className="text-xs text-kr-muted mb-3 uppercase tracking-[0.2em] font-bold">Need immediate assistance?</p>
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
