import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { Button } from '../components/Button';
import { ArrowRight, Building2, Home as HomeIcon, ShieldCheck, Clock, Award, Flame, Phone, Star, CheckCircle2, Users } from 'lucide-react';
import { fadeUp, stagger } from '../lib/animations';

/* ── animated counter ── */
function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const dur = 2000;
    const step = Math.ceil(target / (dur / 16));
    const id = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(id); }
      else setCount(start);
    }, 16);
    return () => clearInterval(id);
  }, [inView, target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-kr-bg">
      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden border-b border-kr-border">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop"
            alt="Fire protection industrial facility"
            className="w-full h-full object-cover opacity-15 filter grayscale"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-kr-bg via-kr-bg/95 to-kr-bg/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-kr-bg via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="text-kr-muted text-xs font-bold tracking-[0.25em] uppercase mb-6 flex items-center gap-3">
                <span className="w-10 h-[2px] bg-kr-red" />
                GLENDALE'S TRUSTED FIRE SAFETY CONTRACTOR
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white leading-[1.05] tracking-tight mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Powerful protection
                <br />
                made simple<span className="text-kr-red">.</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-lg md:text-xl text-kr-muted max-w-2xl leading-relaxed mb-10">
                We design, install, and maintain code-compliant fire sprinkler systems for commercial and residential properties across Glendale and Greater Los Angeles.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" size="lg" className="group">
                  Get a Free Quote
                  <ArrowRight size={16} className="ml-3 group-hover:translate-x-1.5 transition-transform duration-200" />
                </Button>
                <Button href="/services" variant="outline" size="lg">
                  Explore Our Services
                </Button>
                <a 
                  href="tel:+18005550199" 
                  className="inline-flex items-center justify-center h-14 px-6 gap-2 text-white hover:text-kr-red transition-colors duration-200 cursor-pointer"
                >
                  <Phone size={18} className="text-kr-red" />
                  <span className="text-sm font-semibold tracking-wider">(800) 555-0199</span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ STATS BAR ═══════ */}
      <section className="border-b border-kr-border bg-kr-panel">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-kr-border"
          >
            {[
              { value: 15, suffix: '+', label: 'Years of Experience', icon: <Award size={20} className="text-kr-red" /> },
              { value: 2500, suffix: '+', label: 'Systems Installed', icon: <Flame size={20} className="text-kr-red" /> },
              { value: 24, suffix: '/7', label: 'Emergency Service', icon: <Clock size={20} className="text-kr-red" /> },
              { value: 100, suffix: '%', label: 'Code Compliant', icon: <ShieldCheck size={20} className="text-kr-red" /> },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeUp} className="py-10 px-6 md:px-10 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  {stat.icon}
                  <span className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </span>
                </div>
                <p className="text-xs font-semibold text-kr-muted uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════ PRODUCTS ═══════ */}
      <section className="py-28 md:py-36 border-b border-kr-border relative">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-8"
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight max-w-2xl leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              The most versatile <span className="text-kr-red">fire protection</span> systems on the market<span className="text-kr-red">.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-kr-muted max-w-md text-lg leading-relaxed">
              Engineered for precision. Built for absolute safety. Our systems integrate seamlessly into any environment.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Commercial Card */}
            <motion.div
              variants={fadeUp}
              className="group relative bg-kr-panel border border-kr-border overflow-hidden flex flex-col h-[550px] md:h-[600px] cursor-pointer hover:border-kr-border-hover transition-all duration-500"
            >
              <div className="p-8 md:p-10 flex-1 z-10 relative flex flex-col">
                <Building2 size={28} className="text-kr-red mb-6" />
                <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>Commercial Series</h3>
                <p className="text-kr-muted max-w-sm mb-8 leading-relaxed">
                  Five models. Unmatched flexibility. Designed for warehouses, high-rises, and retail.
                </p>
                <div className="mt-auto">
                  <Button href="/commercial" variant="primary" className="group/btn">
                    Explore <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </Button>
                </div>
              </div>
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-kr-panel via-kr-panel/80 to-transparent z-10" />
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                  alt="Modern commercial building requiring fire protection"
                  className="w-full h-full object-cover opacity-30 filter grayscale group-hover:scale-105 group-hover:opacity-50 transition-all duration-700 ease-out"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Residential Card */}
            <motion.div
              variants={fadeUp}
              className="group relative bg-kr-panel border border-kr-border overflow-hidden flex flex-col h-[550px] md:h-[600px] cursor-pointer hover:border-kr-border-hover transition-all duration-500"
            >
              <div className="p-8 md:p-10 flex-1 z-10 relative flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <HomeIcon size={28} className="text-kr-red" />
                  <span className="bg-kr-red/15 text-kr-red text-[10px] font-bold px-3 py-1 tracking-widest uppercase rounded-sm">New</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>Residential Edition</h3>
                <p className="text-kr-muted max-w-sm mb-8 leading-relaxed">
                  More compact. More flexible. Unobtrusive protection for modern homes.
                </p>
                <div className="mt-auto">
                  <Button href="/residential" variant="primary" className="group/btn">
                    Explore <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </Button>
                </div>
              </div>
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-kr-panel via-kr-panel/80 to-transparent z-10" />
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
                  alt="Residential home with fire sprinkler protection"
                  className="w-full h-full object-cover opacity-30 filter grayscale group-hover:scale-105 group-hover:opacity-50 transition-all duration-700 ease-out"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ WHY CHOOSE US ═══════ */}
      <section className="py-28 md:py-36 border-b border-kr-border bg-[#070707]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-20"
          >
            <motion.div variants={fadeUp} className="text-kr-muted text-xs font-bold tracking-[0.25em] uppercase mb-4">
              ENGINEERED EXCELLENCE
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Meet the ultimate standard<span className="text-kr-red">.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-kr-border"
          >
            {[
              { num: '01', title: 'Comprehensive Coverage', desc: 'Experience unmatched flexibility and precision for properties of all sizes.' },
              { num: '02', title: 'Robust & Durable', desc: 'Solid construction using industrial-grade materials for exceptional longevity.' },
              { num: '03', title: 'Seamless Integration', desc: 'Designed to make retrofitting and new installations efficient and unobtrusive.' },
              { num: '04', title: 'Cost Effective', desc: 'Our systems quickly pay for themselves by preventing catastrophic damage.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="p-8 md:p-10 border-r border-b border-kr-border bg-kr-bg hover:bg-kr-panel transition-colors duration-300 cursor-pointer group"
              >
                <div className="text-kr-red text-sm font-bold tracking-widest mb-8 group-hover:tracking-[0.3em] transition-all duration-300">{item.num}</div>
                <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>{item.title}</h3>
                <p className="text-kr-muted text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      <section className="py-28 md:py-36 border-b border-kr-border">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-20"
          >
            <motion.div variants={fadeUp} className="text-kr-muted text-xs font-bold tracking-[0.25em] uppercase mb-4">
              CLIENT TESTIMONIALS
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Trusted by property owners<span className="text-kr-red">.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                quote: "Mega Fire Protection retrofitted our entire 50-unit apartment complex on time and under budget. Their knowledge of NFPA code is second to none.",
                name: "David Chen",
                role: "Property Manager, Glendale Heights Apartments",
              },
              {
                quote: "We needed a sprinkler system designed for our new warehouse facility. Their engineering team delivered flawless hydraulic calculations and the installation was seamless.",
                name: "Sarah Mitchell",
                role: "VP Operations, Pacific Logistics Inc.",
              },
              {
                quote: "When our sprinkler system leaked at 2 AM, their emergency crew was on-site within the hour. They saved us from thousands in water damage. Truly reliable.",
                name: "James Rodriguez",
                role: "Facility Director, Glendale Galleria",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-kr-panel border border-kr-border p-8 md:p-10 flex flex-col hover:border-kr-border-hover transition-colors duration-300"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="text-kr-red fill-kr-red" />
                  ))}
                </div>
                <p className="text-kr-text leading-relaxed mb-8 flex-1 text-[15px]">"{t.quote}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-kr-border">
                  <div className="w-10 h-10 rounded-full bg-kr-red/15 flex items-center justify-center">
                    <Users size={18} className="text-kr-red" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-kr-muted text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════ SERVICE AREAS ═══════ */}
      <section className="py-20 border-b border-kr-border bg-kr-panel">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <motion.div variants={fadeUp}>
              <p className="text-xs font-bold text-kr-muted uppercase tracking-widest mb-2">Proudly Serving</p>
              <p className="text-white font-semibold text-lg">Glendale · Burbank · Pasadena · Los Angeles · Eagle Rock · La Cañada</p>
            </motion.div>
            <motion.div variants={fadeUp} className="flex items-center gap-6">
              {['Licensed', 'Bonded', 'Insured', 'NFPA Certified'].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-xs font-semibold text-kr-muted-light uppercase tracking-wider">
                  <CheckCircle2 size={14} className="text-kr-red" />
                  {badge}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="py-28 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-kr-red" />
        <div 
          className="absolute inset-0 opacity-10 mix-blend-multiply bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop')" }}
        />
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Protect what matters most.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/85 text-xl mb-10 max-w-xl leading-relaxed">
              Contact our engineering team for a free consultation and personalized fire protection proposal for your property.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" className="bg-kr-bg text-white hover:bg-black border-none text-sm h-14 px-10">
                Request a Free Quote
              </Button>
              <a 
                href="tel:+18005550199" 
                className="inline-flex items-center justify-center h-14 px-8 gap-2 border border-white/30 text-white hover:bg-white/10 transition-colors duration-200 text-sm font-semibold uppercase tracking-wider cursor-pointer rounded-sm"
              >
                <Phone size={16} /> Call Now
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
