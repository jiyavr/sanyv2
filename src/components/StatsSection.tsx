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
    if (!inView) {
      setCount(0);
      return;
    }

    let animationFrameId: number;
    const duration = 2000;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    const increment = end / totalFrames;
    let current = 0;
    let frame = 0;

    const counter = () => {
      frame++;
      current += increment;

      if (frame === totalFrames) {
        setCount(end);
      } else {
        setCount(current);
        animationFrameId = requestAnimationFrame(counter);
      }
    };

    animationFrameId = requestAnimationFrame(counter);

    return () => cancelAnimationFrame(animationFrameId);

  }, [end, inView]);

  return (
    <span>
      {count % 1 !== 0 ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </span>
  );
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.15,
      ease: [0.2, 0.65, 0.3, 0.9],
      staggerChildren: 0.15
    }
  })
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] }
  }
};


const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-blob animation-delay-2000" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Our Impact</span>
          <h2 className="font-heading text-4xl md:text-6xl mt-4 mb-6 text-foreground">
            DRIVING THE REVOLUTION
          </h2>
          <p className="text-muted-foreground text-lg">
            Numbers that reflect our commitment to transforming India's logistics landscape with clean energy.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{
                y: -10,
                scale: 1.03,
                boxShadow: "0px 20px 40px -10px hsl(var(--primary) / 0.2)",
                transition: { duration: 0.3, ease: "circOut" }
              }}
              className="group relative transform-gpu [transform-style:preserve-3d]"
            >
              <div className="relative p-8 rounded-3xl bg-card border border-border overflow-hidden shadow-xl transition-shadow duration-300 group-hover:shadow-2xl">
                {/* Shiny Effect */}
                <motion.div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), hsl(var(--primary) / 0.1), transparent 80%)",
                  }}
                  onMouseMove={(e: React.MouseEvent) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
                  }}
                />

                {/* Animated Border */}
                <div className="absolute inset-0 border-2 border-transparent rounded-3xl pointer-events-none
                  group-hover:border-primary/30 transition-all duration-300
                  [mask:radial-gradient(400px_circle_at_var(--mouse-x)_var(--mouse-y),#000,transparent_80%)]"
                />

                {/* Icon */}
                <motion.div variants={childVariants} className="relative w-16 h-16 mb-6">
                  <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center border border-border">
                    <stat.icon className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </motion.div>

                {/* Counter */}
                <motion.div variants={childVariants} className="font-heading text-5xl md:text-6xl text-primary mb-2">
                  <CountUp end={stat.value} suffix={stat.suffix} inView={isInView} />
                </motion.div>

                {/* Text */}
                <motion.h3 variants={childVariants} className="font-heading text-xl text-foreground mb-1">{stat.label}</motion.h3>
                <motion.p variants={childVariants} className="text-muted-foreground text-sm">{stat.description}</motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
