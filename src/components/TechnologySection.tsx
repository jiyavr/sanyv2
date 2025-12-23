import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Cpu, Radio, ShieldCheck, BarChart3, Wifi, Fingerprint, LucideIcon } from 'lucide-react';

const technologies = [
  {
    id: 'battery',
    icon: Cpu,
    title: 'Smart Battery Management',
    description: 'AI-powered thermal management and cell balancing for maximum lifespan and performance.',
    stats: ['15 Years Lifespan', '800+ Cycles', 'Real-time Monitoring'],
    color: 'hsl(190, 95%, 55%)',
  },
  {
    id: 'telematics',
    icon: Radio,
    title: 'Advanced Telematics',
    description: 'Live tracking, predictive maintenance alerts, and fleet optimization insights.',
    stats: ['GPS Tracking', 'OTA Updates', 'Driver Analytics'],
    color: 'hsl(140, 95%, 55%)',
  },
  {
    id: 'safety',
    icon: ShieldCheck,
    title: 'Autonomous Safety',
    description: 'Level 2+ ADAS with collision prevention, lane keeping, and adaptive cruise control.',
    stats: ['360° Cameras', 'Radar + LiDAR', 'Emergency Braking'],
    color: 'hsl(30, 95%, 55%)',
  },
  {
    id: 'analytics',
    icon: BarChart3,
    title: 'Fleet Intelligence',
    description: 'Cloud-based analytics dashboard for operational efficiency and cost optimization.',
    stats: ['Route Optimization', 'TCO Analysis', 'Carbon Reports'],
    color: 'hsl(280, 95%, 60%)',
  },
  {
    id: 'connectivity',
    icon: Wifi,
    title: '5G Connectivity',
    description: 'Ultra-low latency communication for V2X and remote diagnostics capabilities.',
    stats: ['V2V Communication', 'Edge Computing', 'Cloud Sync'],
    color: 'hsl(220, 95%, 60%)',
  },
  {
    id: 'security',
    icon: Fingerprint,
    title: 'Cybersecurity',
    description: 'Enterprise-grade encryption and multi-layer authentication for fleet protection.',
    stats: ['End-to-End Encryption', 'Biometric Auth', 'Intrusion Detection'],
    color: 'hsl(350, 95%, 60%)',
  },
];

const Card = ({
  icon: Icon,
  title,
  description,
  stats,
  color,
  index
}: {
  icon: LucideIcon,
  title: string,
  description: string,
  stats: string[],
  color: string,
  index: number
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['12.5deg', '-12.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-12.5deg', '12.5deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;

    const { left, top, width, height } = (ref.current as HTMLDivElement).getBoundingClientRect();
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
      className="group relative h-96 w-full rounded-3xl bg-background/80 border border-border overflow-hidden"
    >
      <div
        style={{
          transform: 'translateZ(75px)',
          transformStyle: 'preserve-3d',
        }}
        className="absolute inset-4 grid place-content-center rounded-3xl bg-background border border-border/50 shadow-lg"
      >
        <Icon 
          style={{
            transform: 'translateZ(50px)',
            color: color
          }}
          className="w-16 h-16 mb-4 text-primary transition-colors duration-500 group-hover:text-primary"
        />
        <h3 
          style={{
            transform: 'translateZ(50px)',
          }}
          className="font-display text-2xl text-center text-foreground transition-colors duration-500"
        >
          {title}
        </h3>
      </div>
      
      {/* Description and stats overlay */}
      <motion.div 
        className="absolute inset-0 bg-background/95 backdrop-blur-sm p-8"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div 
          style={{
            transform: 'translateZ(50px)',
          }}
        >
          <Icon className="w-12 h-12 mb-4" style={{ color }} />
          <h3 className="font-display text-2xl text-foreground mb-3">{title}</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2">
            {stats.map((stat, i) => (
              <span
                key={stat}
                className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs border border-border"
              >
                {stat}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Glow effect */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0,
          background: `radial-gradient(circle at center, ${color} 0%, transparent 80%)`,
        }}
        whileHover={{ opacity: 0.2 }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
};


const TechnologySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden bg-secondary text-secondary-foreground">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full"
          animate={{ 
            scale: [1, 1.5, 1],
            x: ['0%', '50%', '0%'],
            y: ['0%', '25%', '0%']
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            x: ['0%', '-50%', '0%'],
            y: ['0%', '-25%', '0%']
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Innovation Hub</span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 mb-6 text-secondary-foreground">
            Core Technology Stack
          </h2>
          <p className="text-secondary-foreground/70 text-lg">
            A symphony of advanced systems delivering an unparalleled electric trucking experience. Hover over a card to explore.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {technologies.map((tech, index) => (
            <Card 
              key={tech.id} 
              index={index}
              {...tech} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
