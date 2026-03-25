import { motion } from 'motion/react';
import { ShieldCheck, Target, Users, Award, CheckCircle2 } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export default function About() {
  return (
    <div className="pt-24 pb-20 bg-kr-bg">
      {/* Header */}
      <section className="bg-kr-bg text-white py-20 md:py-32 relative overflow-hidden border-b border-kr-border">
        <div className="absolute inset-0 z-0 opacity-15 filter grayscale">
          <img
            src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
            alt="Construction site with fire protection systems"
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
              OUR STORY
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold mb-6 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Engineering safety<span className="text-kr-red">.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-kr-muted leading-relaxed max-w-2xl">
              Glendale's premier fire safety contractor, dedicated to protecting lives and property through expert engineering, precise installation, and unwavering compliance.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-28 md:py-36 border-b border-kr-border">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
            >
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Experience. Precision. <br />
                <span className="text-kr-red">Peace of Mind.</span>
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-6 text-lg text-kr-muted leading-relaxed">
                <p>
                  At Mega Fire Protection, we don't just install pipes and sprinklers; we engineer life-saving systems. Based in Glendale, California, we serve the surrounding communities with a commitment to technical excellence and absolute reliability.
                </p>
                <p>
                  Whether you are a commercial developer constructing a new high-rise, a property manager retrofitting an older building, or a homeowner seeking to protect your family, our team brings the same level of rigorous attention to detail to every project.
                </p>
                <p>
                  We navigate the complex landscape of NFPA standards and local fire codes so you don't have to. Our goal is to ensure your property is not only compliant but genuinely safe.
                </p>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <motion.img variants={fadeUp}
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop"
                  alt="Fire protection system engineering blueprints"
                  className="w-full h-48 object-cover filter grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-500 border border-kr-border"
                  loading="lazy"
                />
                <motion.img variants={fadeUp}
                  src="https://images.unsplash.com/photo-1504307651254-35680f356f58?q=80&w=2070&auto=format&fit=crop"
                  alt="Fire sprinkler installation work"
                  className="w-full h-64 object-cover filter grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-500 border border-kr-border"
                  loading="lazy"
                />
              </div>
              <div className="space-y-4 pt-8">
                <motion.img variants={fadeUp}
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop"
                  alt="Commercial building with fire protection"
                  className="w-full h-64 object-cover filter grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-500 border border-kr-border"
                  loading="lazy"
                />
                <motion.div variants={fadeUp} className="bg-kr-panel border border-kr-border p-6 text-white h-48 flex flex-col justify-center hover:border-kr-border-hover transition-colors duration-300">
                  <Award size={36} className="mb-4 text-kr-red" />
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Fully Licensed</h3>
                  <p className="text-kr-muted text-sm">Bonded & Insured for your complete protection.</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-28 md:py-36">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our Core Values<span className="text-kr-red">.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-kr-muted">
              The principles that drive our business and ensure the quality of our work.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: <ShieldCheck size={28} className="text-kr-red" />,
                title: 'Uncompromising Safety',
                desc: 'We never cut corners. Every system we design and install is built to perform flawlessly when it matters most.'
              },
              {
                icon: <Target size={28} className="text-kr-red" />,
                title: 'Technical Precision',
                desc: 'From hydraulic calculations to pipe fitting, our work is exact, code-compliant, and engineered for longevity.'
              },
              {
                icon: <Users size={28} className="text-kr-red" />,
                title: 'Professional Integrity',
                desc: 'We communicate clearly, price fairly, and stand behind our workmanship on every single project.'
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="bg-kr-panel p-8 md:p-10 border border-kr-border hover:border-kr-border-hover transition-all duration-300 cursor-pointer group"
              >
                <div className="w-14 h-14 rounded-sm bg-kr-red/10 flex items-center justify-center mb-8 group-hover:bg-kr-red/20 transition-colors duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>{value.title}</h3>
                <p className="text-kr-muted leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
