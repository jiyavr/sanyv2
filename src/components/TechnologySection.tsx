import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Cpu, Radio, ShieldCheck, BarChart3, Wifi, Fingerprint } from 'lucide-react';

const technologies = [
  {
    id: 'battery',
    icon: Cpu,
    title: 'Smart Battery Management',
    description: 'AI-powered thermal management and cell balancing for maximum lifespan and performance.',
    stats: ['15 Years Lifespan', '800+ Cycles', 'Real-time Monitoring'],
    color: 'from-primary to-cyan-400',
  },
  {
    id: 'telematics',
    icon: Radio,
    title: 'Advanced Telematics',
    description: 'Live tracking, predictive maintenance alerts, and fleet optimization insights.',
    stats: ['GPS Tracking', 'OTA Updates', 'Driver Analytics'],
    color: 'from-accent to-emerald-400',
  },
  {
    id: 'safety',
    icon: ShieldCheck,
    title: 'Autonomous Safety',
    description: 'Level 2+ ADAS with collision prevention, lane keeping, and adaptive cruise control.',
    stats: ['360° Cameras', 'Radar + LiDAR', 'Emergency Braking'],
    color: 'from-orange-500 to-amber-400',
  },
  {
    id: 'analytics',
    icon: BarChart3,
    title: 'Fleet Intelligence',
    description: 'Cloud-based analytics dashboard for operational efficiency and cost optimization.',
    stats: ['Route Optimization', 'TCO Analysis', 'Carbon Reports'],
    color: 'from-purple-500 to-pink-400',
  },
  {
    id: 'connectivity',
    icon: Wifi,
    title: '5G Connectivity',
    description: 'Ultra-low latency communication for V2X and remote diagnostics capabilities.',
    stats: ['V2V Communication', 'Edge Computing', 'Cloud Sync'],
    color: 'from-blue-500 to-indigo-400',
  },
  {
    id: 'security',
    icon: Fingerprint,
    title: 'Cybersecurity',
    description: 'Enterprise-grade encryption and multi-layer authentication for fleet protection.',
    stats: ['End-to-End Encryption', 'Biometric Auth', 'Intrusion Detection'],
    color: 'from-red-500 to-rose-400',
  },
];

const TechnologySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 relative overflow-hidden bg-secondary text-secondary-foreground">
      {/* Animated Circuit Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
        <motion.path
          d="M0 200 Q 200 100 400 200 T 800 200"
          stroke="url(#circuit-gradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        <motion.path
          d="M0 400 Q 300 300 600 400 T 1200 400"
          stroke="url(#circuit-gradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(0 85% 50%)" />
            <stop offset="100%" stopColor="hsl(0 75% 60%)" />
          </linearGradient>
        </defs>
      </svg>

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Innovation Hub</span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 mb-6 text-secondary-foreground">
            TECHNOLOGY THAT LEADS
          </h2>
          <p className="text-secondary-foreground/70 text-lg">
            Cutting-edge systems working in harmony to deliver the most advanced electric trucking experience.
          </p>
        </motion.div>

        {/* Tech Grid with Hexagonal Feel */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setActiveIndex(index)}
              onHoverEnd={() => setActiveIndex(null)}
              className="group cursor-pointer"
            >
              <motion.div 
                className="relative h-full p-8 rounded-3xl bg-background border border-border overflow-hidden"
                animate={{ 
                  borderColor: activeIndex === index ? 'hsl(0 85% 50% / 0.5)' : 'hsl(220 13% 91%)',
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient Overlay on Hover */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0`}
                  animate={{ opacity: activeIndex === index ? 0.05 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Floating Icon */}
                <motion.div 
                  className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${tech.color} p-0.5 mb-6`}
                  animate={{ 
                    y: activeIndex === index ? -5 : 0,
                    rotate: activeIndex === index ? 5 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                    <tech.icon className="w-8 h-8 text-secondary" />
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="font-display text-2xl text-foreground mb-3">{tech.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{tech.description}</p>

                {/* Stats Tags */}
                <div className="flex flex-wrap gap-2">
                  {tech.stats.map((stat, i) => (
                    <motion.span
                      key={stat}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs border border-border"
                    >
                      {stat}
                    </motion.span>
                  ))}
                </div>

                {/* Corner Accent */}
                <motion.div 
                  className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${tech.color} opacity-0 blur-2xl`}
                  animate={{ opacity: activeIndex === index ? 0.3 : 0 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
