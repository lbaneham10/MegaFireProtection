import { motion } from 'motion/react';
import { ShieldCheck, Target, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24 pb-20 bg-kr-bg">
      {/* Header */}
      <section className="bg-kr-bg text-white py-20 md:py-32 relative overflow-hidden border-b border-kr-border">
        <div className="absolute inset-0 z-0 opacity-20 filter grayscale">
          <img
            src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
            alt="Construction site"
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
              OUR STORY
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Engineering safety<span className="text-kr-red">.</span>
            </h1>
            <p className="text-xl text-kr-muted leading-relaxed">
              Glendale's premier fire safety contractor, dedicated to protecting lives and property through expert engineering, precise installation, and unwavering compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-32 border-b border-kr-border">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                Experience. Precision. <br />
                <span className="text-kr-red">Peace of Mind.</span>
              </h2>
              <div className="space-y-6 text-lg text-kr-muted leading-relaxed">
                <p>
                  At Mega Fire Protection, we don't just install pipes and sprinklers; we engineer life-saving systems. Based in Glendale, California, we serve the surrounding communities with a commitment to technical excellence and absolute reliability.
                </p>
                <p>
                  Whether you are a commercial developer constructing a new high-rise, a property manager retrofitting an older building, or a homeowner seeking to protect your family, our team brings the same level of rigorous attention to detail to every project.
                </p>
                <p>
                  We navigate the complex landscape of NFPA standards and local fire codes so you don't have to. Our goal is to ensure your property is not only compliant but genuinely safe.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop"
                  alt="Engineering plans"
                  className="w-full h-48 object-cover filter grayscale opacity-80 hover:opacity-100 transition-opacity border border-kr-border"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356f58?q=80&w=2070&auto=format&fit=crop"
                  alt="Installation work"
                  className="w-full h-64 object-cover filter grayscale opacity-80 hover:opacity-100 transition-opacity border border-kr-border"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop"
                  alt="Commercial building"
                  className="w-full h-64 object-cover filter grayscale opacity-80 hover:opacity-100 transition-opacity border border-kr-border"
                  referrerPolicy="no-referrer"
                />
                <div className="bg-kr-panel border border-kr-border p-6 text-white h-48 flex flex-col justify-center">
                  <ShieldCheck size={40} className="mb-4 text-kr-red" />
                  <h3 className="text-xl font-bold mb-2">Fully Licensed</h3>
                  <p className="text-kr-muted text-sm">Bonded & Insured for your protection.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Our Core Values<span className="text-kr-red">.</span></h2>
            <p className="text-lg text-kr-muted">
              The principles that drive our business and ensure the quality of our work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck size={32} className="text-kr-red" />,
                title: 'Uncompromising Safety',
                desc: 'We never cut corners. Every system we design and install is built to perform flawlessly when it matters most.'
              },
              {
                icon: <Target size={32} className="text-kr-red" />,
                title: 'Technical Precision',
                desc: 'From hydraulic calculations to pipe fitting, our work is exact, code-compliant, and engineered for longevity.'
              },
              {
                icon: <Users size={32} className="text-kr-red" />,
                title: 'Professional Integrity',
                desc: 'We communicate clearly, price fairly, and stand behind our workmanship on every single project.'
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-kr-panel p-10 border border-kr-border hover:border-kr-muted transition-colors"
              >
                <div className="mb-8">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-kr-muted leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
