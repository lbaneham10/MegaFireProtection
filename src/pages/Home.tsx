import { motion } from 'motion/react';
import { Button } from '../components/Button';
import { ArrowRight, Building2, Home as HomeIcon } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-kr-bg">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden border-b border-kr-border">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop"
            alt="Industrial background"
            className="w-full h-full object-cover opacity-20 filter grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-kr-bg via-kr-bg/90 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="text-kr-muted text-xs font-bold tracking-[0.2em] uppercase mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-kr-red"></span>
                STRONG. FAST. COMPLIANT.
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight mb-8">
                Powerful protection
                <br />
                made simple<span className="text-kr-red">.</span>
              </h1>
              <div className="flex flex-col sm:flex-row gap-6 mt-12">
                <Button href="/contact" size="lg" className="group">
                  Contact Us
                  <ArrowRight size={16} className="ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button href="/services" variant="outline" size="lg">
                  Explore Systems
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products / Services Section */}
      <section className="py-32 border-b border-kr-border relative">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight max-w-2xl leading-tight">
              The most versatile <span className="text-kr-red">fire protection</span> systems on the market<span className="text-kr-red">.</span>
            </h2>
            <p className="text-kr-muted max-w-md text-lg">
              Engineered for precision. Built for absolute safety. Our systems integrate seamlessly into any environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Commercial Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative bg-kr-panel border border-kr-border overflow-hidden flex flex-col h-[600px]"
            >
              <div className="p-10 flex-1 z-10 relative flex flex-col">
                <Building2 size={32} className="text-kr-red mb-6" />
                <h3 className="text-3xl font-bold mb-4">Commercial Series</h3>
                <p className="text-kr-muted max-w-sm mb-8">
                  Five models. Unmatched flexibility. Designed for warehouses, high-rises, and retail.
                </p>
                <div className="mt-auto">
                  <Button href="/commercial" variant="primary" className="group/btn">
                    Explore <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-kr-panel via-kr-panel/80 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                  alt="Commercial" 
                  className="w-full h-full object-cover opacity-40 filter grayscale group-hover:scale-105 group-hover:opacity-60 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            {/* Residential Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative bg-kr-panel border border-kr-border overflow-hidden flex flex-col h-[600px]"
            >
              <div className="p-10 flex-1 z-10 relative flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <HomeIcon size={32} className="text-kr-red" />
                  <span className="bg-kr-border text-xs font-bold px-3 py-1 tracking-widest uppercase">New</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">Residential Edition</h3>
                <p className="text-kr-muted max-w-sm mb-8">
                  More compact. More flexible. Unobtrusive protection for modern homes.
                </p>
                <div className="mt-auto">
                  <Button href="/residential" variant="primary" className="group/btn">
                    Explore <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-kr-panel via-kr-panel/80 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop" 
                  alt="Residential" 
                  className="w-full h-full object-cover opacity-40 filter grayscale group-hover:scale-105 group-hover:opacity-60 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32 border-b border-kr-border bg-[#080808]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-24">
            <div className="text-kr-muted text-xs font-bold tracking-[0.2em] uppercase mb-4">
              ENGINEERED EXCELLENCE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Meet the ultimate standard<span className="text-kr-red">.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-t border-l border-kr-border">
            {[
              {
                num: '01',
                title: 'Comprehensive Coverage',
                desc: 'Experience unmatched flexibility and precision for properties of all sizes.'
              },
              {
                num: '02',
                title: 'Robust & Durable',
                desc: 'Solid construction using industrial-grade materials for exceptional longevity.'
              },
              {
                num: '03',
                title: 'Seamless Integration',
                desc: 'Designed to make retrofitting and new installations efficient and unobtrusive.'
              },
              {
                num: '04',
                title: 'Cost Effective',
                desc: 'Our systems quickly pay for themselves by preventing catastrophic damage.'
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-10 border-r border-b border-kr-border bg-kr-bg hover:bg-kr-panel transition-colors"
              >
                <div className="text-kr-red text-sm font-bold tracking-widest mb-8">{item.num}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-kr-muted text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-kr-red"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop')] opacity-10 mix-blend-multiply bg-cover bg-center"></div>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              Interested in our solution?
            </h2>
            <p className="text-white/80 text-xl mb-12 max-w-xl">
              Contact our engineering team to get more information about our systems and request a personalized consultation.
            </p>
            <Button href="/contact" className="bg-kr-bg text-white hover:bg-black border-none text-lg h-16 px-10">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
