import { motion } from 'motion/react';
import { Button } from '../components/Button';
import { Home as HomeIcon, CheckCircle2, Heart, Shield, ArrowRight } from 'lucide-react';

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
        <div className="absolute inset-0 z-0 opacity-20 filter grayscale">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
            alt="Residential home"
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
              RESIDENTIAL EDITION
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Protecting Your Family<span className="text-kr-red">.</span>
            </h1>
            <p className="text-xl text-kr-muted leading-relaxed mb-10">
              Mega Fire Protection provides reliable, code-compliant residential fire sprinkler systems designed to save lives and minimize property damage in the event of a fire.
            </p>
            <Button href="/contact" size="lg" className="group">
              Request a Residential Quote <ArrowRight size={16} className="ml-3 group-hover:translate-x-1 transition-transform" />
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
                Peace of Mind for Homeowners
              </h2>
              <div className="space-y-6 text-lg text-kr-muted leading-relaxed mb-12">
                <p>
                  A residential fire sprinkler system is the most effective way to protect your family and your home from the devastating effects of a fire. Modern residential sprinklers are designed to respond quickly to heat, controlling or extinguishing a fire before the fire department arrives.
                </p>
                <p>
                  Whether you are building a custom home, managing a multi-family complex, or need repairs on an existing system, Mega Fire Protection delivers professional, unobtrusive installations that blend seamlessly with your home's interior design.
                </p>
              </div>
              
              <div className="bg-kr-panel p-10 border border-kr-border">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Heart className="text-kr-red" /> Why Residential Sprinklers Matter
                </h3>
                <p className="text-kr-muted mb-8">
                  According to the NFPA, the risk of dying in a home fire is reduced by 85% when fire sprinklers are present. Furthermore, property damage is significantly lower in homes equipped with sprinklers.
                </p>
                <Button href="/contact" variant="outline" className="w-full sm:w-auto group">
                  Schedule an Inspection <ArrowRight size={16} className="ml-3 group-hover:translate-x-1 transition-transform" />
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
                  <Shield className="text-kr-red" size={40} />
                  Residential Services
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
                  <p className="text-xs text-kr-muted mb-4 uppercase tracking-[0.2em] font-bold">Need immediate assistance?</p>
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
