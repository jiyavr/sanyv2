import { Leaf, TreePine, Factory, CloudOff } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  {
    icon: CloudOff,
    value: '100%',
    label: 'Zero Tailpipe Emissions',
    description: 'Complete elimination of direct CO2 emissions',
  },
  {
    icon: TreePine,
    value: '150+',
    label: 'Tons CO2 Saved',
    description: 'Per truck annually compared to diesel',
  },
  {
    icon: Factory,
    value: '60%',
    label: 'Lower Operating Cost',
    description: 'Reduced fuel and maintenance expenses',
  },
  {
    icon: Leaf,
    value: '2030',
    label: 'Carbon Neutral Goal',
    description: 'Full production carbon neutrality target',
  },
];

const contentVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.2, 0.65, 0.3, 0.9],
      staggerChildren: 0.15
    }
  }
};

const childVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 }
  }
};

const statCardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: 5 },
    visible: (i: number) => ({
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
            duration: 0.5,
            delay: i * 0.1,
            ease: "easeOut"
        }
    })
};

const SustainabilitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  return (
    <section ref={ref} id="sustainability" className="py-24 relative overflow-hidden bg-secondary text-secondary-foreground">
      {/* Background Elements */}
      <motion.div
        className="absolute inset-0 opacity-30"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.3 } : {}}
        transition={{ duration: 1 }}
        style={{
          background: 'radial-gradient(ellipse at center, hsl(var(--primary) / 0.1) 0%, transparent 60%)'
        }}
      />
      <motion.div
        className="absolute top-1/4 left-10"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Leaf className="w-24 h-24 text-primary/10 -rotate-12" />
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 right-10"
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <TreePine className="w-32 h-32 text-primary/10 rotate-12" />
      </motion.div>


      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div 
            className="space-y-8"
            variants={contentVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.span variants={childVariants} className="text-primary font-semibold text-sm tracking-widest uppercase">Sustainability</motion.span>
            <motion.h2 variants={childVariants} className="font-heading text-4xl md:text-6xl text-secondary-foreground leading-tight">
              DRIVING<br />
              <span className="text-primary">TOWARDS A</span><br />
              GREENER FUTURE
            </motion.h2>
            <motion.p variants={childVariants} className="text-secondary-foreground/70 text-lg leading-relaxed">
              At SANY, sustainability isn't just a feature—it's our mission. Every electric truck 
              we produce represents our commitment to cleaner air, reduced carbon footprint, 
              and a sustainable future for India's transportation industry.
            </motion.p>

            <motion.div variants={childVariants} className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Leaf className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-foreground mb-1">Renewable Energy Manufacturing</h4>
                  <p className="text-secondary-foreground/70 text-sm">Our facilities are powered by 80% renewable energy sources</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Leaf className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-foreground mb-1">Battery Recycling Program</h4>
                  <p className="text-secondary-foreground/70 text-sm">Comprehensive end-of-life battery recycling and repurposing</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                custom={index}
                variants={statCardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{
                    scale: 1.05,
                    y: -5,
                    boxShadow: "0px 10px 20px -5px hsl(var(--primary) / 0.15)",
                    transition: { duration: 0.3 }
                }}
                className="p-6 rounded-2xl bg-background border border-border transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="font-heading text-4xl text-foreground mb-1">{stat.value}</div>
                <div className="font-semibold text-foreground text-sm mb-2">{stat.label}</div>
                <div className="text-muted-foreground text-xs">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
