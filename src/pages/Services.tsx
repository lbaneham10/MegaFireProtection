import { motion } from 'motion/react';
import { Button } from '../components/Button';
import { FileCheck2, Droplets, Wrench, RefreshCw, AlertTriangle, ShieldCheck, ArrowRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

export default function Services() {
  const services = [
    {
      id: 'design',
      icon: <FileCheck2 size={36} className="text-kr-red" />,
      title: 'Fire Sprinkler Design',
      for: 'New constructions, major renovations, and tenant improvements.',
      desc: 'Our engineering team utilizes advanced software to design custom fire sprinkler layouts. We perform rigorous hydraulic calculations to ensure optimal water pressure and coverage, guaranteeing that the system meets all NFPA standards and local building codes before a single pipe is cut.',
    },
    {
      id: 'installation',
      icon: <Droplets size={36} className="text-kr-red" />,
      title: 'System Installation',
      for: 'Commercial buildings, residential complexes, and industrial facilities.',
      desc: 'Expert installation of pipes, valves, fire pumps, and sprinkler heads. Our certified technicians work efficiently alongside other trades to install your system precisely according to the engineered plans, connecting seamlessly to the municipal water supply.',
    },
    {
      id: 'maintenance',
      icon: <ShieldCheck size={36} className="text-kr-red" />,
      title: 'System Maintenance & Inspection',
      for: 'Property managers, facility owners, and HOAs.',
      desc: 'Regular maintenance is critical for system reliability and code compliance. We provide comprehensive inspections, testing of alarms and flow switches, and routine maintenance to ensure your system is always ready to perform in an emergency.',
    },
    {
      id: 'repairs',
      icon: <AlertTriangle size={36} className="text-kr-red" />,
      title: 'Leak & Emergency Repairs',
      for: 'Any property experiencing system faults or leaks.',
      desc: 'A leaking sprinkler system can cause significant water damage. We offer rapid response repair services to fix leaks, replace damaged pipes, and restore your system to full functionality quickly and safely.',
    },
    {
      id: 'valves',
      icon: <Wrench size={36} className="text-kr-red" />,
      title: 'Valve & Head Replacement',
      for: 'Aging systems, damaged components, or recalled parts.',
      desc: 'Over time, valves can corrode and sprinkler heads can become painted over, damaged, or obsolete. We expertly replace faulty control valves, check valves, and sprinkler heads to maintain system integrity.',
    },
    {
      id: 'retrofits',
      icon: <RefreshCw size={36} className="text-kr-red" />,
      title: 'Pipe Retrofits & Upgrades',
      for: 'Historic buildings, change-of-use properties, and code compliance updates.',
      desc: 'When a building changes its purpose or fire codes are updated, your system must adapt. We specialize in retrofitting older buildings with modern fire protection systems and upgrading existing infrastructure to meet current NFPA safety standards.',
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-kr-bg">
      {/* Header */}
      <section className="bg-kr-bg text-white py-20 md:py-32 relative overflow-hidden border-b border-kr-border">
        <div className="absolute inset-0 z-0 opacity-15 filter grayscale">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356f58?q=80&w=2070&auto=format&fit=crop"
            alt="Fire sprinkler pipe system"
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
              CAPABILITIES
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold mb-6 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Comprehensive <br />
              Services<span className="text-kr-red">.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-kr-muted leading-relaxed max-w-2xl">
              From sophisticated engineering design to emergency leak repairs, Mega Fire Protection provides end-to-end solutions to keep your property safe and compliant.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-28 md:py-36">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="space-y-6"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                id={service.id}
                variants={fadeUp}
                className="bg-kr-panel border border-kr-border p-8 md:p-14 flex flex-col lg:flex-row gap-10 items-start hover:border-kr-border-hover transition-all duration-300 group"
              >
                <div className="lg:w-1/3">
                  <div className="w-16 h-16 rounded-sm bg-kr-red/10 flex items-center justify-center mb-6 group-hover:bg-kr-red/20 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>{service.title}</h2>
                  <div className="inline-block bg-kr-bg border border-kr-border text-kr-muted text-xs font-semibold px-3 py-1.5 uppercase tracking-widest mb-6 rounded-sm">
                    For: {service.for}
                  </div>
                </div>
                <div className="lg:w-2/3 flex flex-col h-full justify-between">
                  <p className="text-lg text-kr-muted leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  <div className="mt-auto">
                    <Button href="/contact" variant="outline" className="group/btn">
                      Request Service <ArrowRight size={16} className="ml-3 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
