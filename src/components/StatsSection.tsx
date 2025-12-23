import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { TrendingUp, Users, MapPin, Award } from 'lucide-react';

const stats = [
  { icon: TrendingUp, value: 15000, suffix: '+', label: 'Trucks Deployed', description: 'Across India' },
  { icon: Users, value: 850, suffix: '+', label: 'Fleet Partners', description: 'Growing Network' },
  { icon: MapPin, value: 28, suffix: '', label: 'States Covered', description: 'Pan-India Presence' },
  { icon: Award, value: 99.2, suffix: '%', label: 'Uptime Rate', description: 'Industry Leading' },
];

const CountUp = ({ end, suffix, inView }: { end: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!inView) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current * 10) / 10);
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [end, inView]);
  
  return (
    <span>
      {typeof end === 'number' && end % 1 !== 0 ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      
      {/* Floating Particles */}
      <motion.div 
        className="absolute top-20 left-[10%] w-3 h-3 rounded-full bg-primary/40"
        animate={{ 
          y: [0, -30, 0], 
          opacity: [0.4, 1, 0.4],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-40 right-[15%] w-2 h-2 rounded-full bg-accent/60"
        animate={{ 
          y: [0, 25, 0], 
          opacity: [0.6, 1, 0.6] 
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div 
        className="absolute bottom-32 left-[20%] w-4 h-4 rounded-full bg-primary/30"
        animate={{ 
          y: [0, -20, 0], 
          x: [0, 10, 0] 
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Our Impact</span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 mb-6 text-foreground">
            DRIVING THE REVOLUTION
          </h2>
          <p className="text-muted-foreground text-lg">
            Numbers that reflect our commitment to transforming India's logistics landscape with clean energy.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ 
                y: -10, 
                transition: { duration: 0.3 } 
              }}
              className="group relative"
            >
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-card via-card to-muted border border-border overflow-hidden shadow-lg">
                {/* Animated Border Glow */}
                <motion.div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, hsl(0 85% 50% / 0.08) 0%, transparent 50%, hsl(0 75% 60% / 0.08) 100%)'
                  }}
                />
                
                {/* Icon with Pulse Effect */}
                <motion.div 
                  className="relative w-16 h-16 mb-6"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-primary/20 animate-pulse-glow" />
                  <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                </motion.div>

                {/* Counter */}
                <div className="font-display text-5xl md:text-6xl text-gradient mb-2">
                  <CountUp end={stat.value} suffix={stat.suffix} inView={isInView} />
                </div>

                <h3 className="font-display text-xl text-foreground mb-1">{stat.label}</h3>
                <p className="text-muted-foreground text-sm">{stat.description}</p>

                {/* Bottom Accent Line */}
                <motion.div 
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '100%' } : {}}
                  transition={{ duration: 1, delay: 0.5 + index * 0.15 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
