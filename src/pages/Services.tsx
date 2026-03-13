import { motion } from 'motion/react';
import { Button } from '../components/Button';
import { FileCheck2, Droplets, Wrench, RefreshCw, AlertTriangle, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 'design',
      icon: <FileCheck2 size={40} className="text-kr-red" />,
      title: 'Fire Sprinkler Design',
      for: 'New constructions, major renovations, and tenant improvements.',
      desc: 'Our engineering team utilizes advanced software to design custom fire sprinkler layouts. We perform rigorous hydraulic calculations to ensure optimal water pressure and coverage, guaranteeing that the system meets all NFPA standards and local building codes before a single pipe is cut.',
    },
    {
      id: 'installation',
      icon: <Droplets size={40} className="text-kr-red" />,
      title: 'System Installation',
      for: 'Commercial buildings, residential complexes, and industrial facilities.',
      desc: 'Expert installation of pipes, valves, fire pumps, and sprinkler heads. Our certified technicians work efficiently alongside other trades to install your system precisely according to the engineered plans, connecting seamlessly to the municipal water supply.',
    },
    {
      id: 'maintenance',
      icon: <ShieldCheck size={40} className="text-kr-red" />,
      title: 'System Maintenance & Inspection',
      for: 'Property managers, facility owners, and HOAs.',
      desc: 'Regular maintenance is critical for system reliability and code compliance. We provide comprehensive inspections, testing of alarms and flow switches, and routine maintenance to ensure your system is always ready to perform in an emergency.',
    },
    {
      id: 'repairs',
      icon: <AlertTriangle size={40} className="text-kr-red" />,
      title: 'Leak & Emergency Repairs',
      for: 'Any property experiencing system faults or leaks.',
      desc: 'A leaking sprinkler system can cause significant water damage. We offer rapid response repair services to fix leaks, replace damaged pipes, and restore your system to full functionality quickly and safely.',
    },
    {
      id: 'valves',
      icon: <Wrench size={40} className="text-kr-red" />,
      title: 'Valve & Head Replacement',
      for: 'Aging systems, damaged components, or recalled parts.',
      desc: 'Over time, valves can corrode and sprinkler heads can become painted over, damaged, or obsolete. We expertly replace faulty control valves, check valves, and sprinkler heads to maintain system integrity.',
    },
    {
      id: 'retrofits',
      icon: <RefreshCw size={40} className="text-kr-red" />,
      title: 'Pipe Retrofits & Upgrades',
      for: 'Historic buildings, change-of-use properties, and code compliance updates.',
      desc: 'When a building changes its purpose or fire codes are updated, your system must adapt. We specialize in retrofitting older buildings with modern fire protection systems and upgrading existing infrastructure to meet current NFPA safety standards.',
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-kr-bg">
      {/* Header */}
      <section className="bg-kr-bg text-white py-20 md:py-32 relative overflow-hidden border-b border-kr-border">
        <div className="absolute inset-0 z-0 opacity-20 filter grayscale">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356f58?q=80&w=2070&auto=format&fit=crop"
            alt="Fire sprinkler pipes"
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
              CAPABILITIES
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Comprehensive <br />
              Services<span className="text-kr-red">.</span>
            </h1>
            <p className="text-xl text-kr-muted leading-relaxed">
              From sophisticated engineering design to emergency leak repairs, Mega Fire Protection provides end-to-end solutions to keep your property safe and compliant.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="bg-kr-panel border border-kr-border p-10 md:p-16 flex flex-col lg:flex-row gap-12 items-start hover:border-kr-muted transition-colors group"
              >
                <div className="lg:w-1/3">
                  <div className="mb-8">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">{service.title}</h2>
                  <div className="inline-block bg-kr-bg border border-kr-border text-kr-muted text-xs font-bold px-3 py-1 uppercase tracking-widest mb-6">
                    For: {service.for}
                  </div>
                </div>
                <div className="lg:w-2/3 flex flex-col h-full justify-between">
                  <p className="text-lg text-kr-muted leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  <div className="mt-auto">
                    <Button href="/contact" variant="outline" className="group/btn">
                      Request Service <ArrowRight size={16} className="ml-3 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
