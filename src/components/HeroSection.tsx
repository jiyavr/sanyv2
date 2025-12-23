import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.2, 0.65, 0.3, 0.9]
    }
  }
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, x: 50 },
    visible: {
        opacity: 1,
        scale: 1,
        x: 0,
        transition: {
            duration: 1,
            ease: [0.2, 0.65, 0.3, 0.9]
        }
    }
};

const HeroSection = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-300, 300], [10, -10]);
  const rotateY = useTransform(x, [-300, 300], [-10, 10]);

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary">
      {/* Background Grid & Gradient */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center bottom, hsl(var(--primary) / 0.15) 0%, transparent 60%)'
        }}
      />

      {/* Main Content */}
      <motion.div 
        className="container mx-auto px-6 pt-24 pb-12 relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div className="space-y-8" variants={containerVariants}>
            <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-primary via-primary/90 to-accent shadow-lg">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/80 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
              <span className="text-white text-sm font-semibold tracking-wide">
                India's Premier EV Truck Manufacturer
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="font-display text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight">
              <span className="text-secondary-foreground">THE EVOLUTION OF</span>
              <br />
              <span className="text-primary">HEAVY-DUTY</span>
              <br />
              <span className="text-secondary-foreground">TRANSPORT</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-secondary-foreground/80 text-lg md:text-xl max-w-xl leading-relaxed">
              From diesel to electric, SANY Electric Trucks lead the shift with smarter energy, lower costs, Zero emissions and uncompromising power.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl">
                Explore Models
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="xl">
                <Play className="w-5 h-5" />
                Watch Video
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-8 pt-8 border-t border-secondary-foreground/20">
              <div>
                <div className="font-display text-4xl text-primary">500+</div>
                <div className="text-secondary-foreground/70 text-sm">KM Range</div>
              </div>
              <div>
                <div className="font-display text-4xl text-primary">45 min</div>
                <div className="text-secondary-foreground/70 text-sm">Fast Charging</div>
              </div>
              <div>
                <div className="font-display text-4xl text-primary">40 Ton</div>
                <div className="text-secondary-foreground/70 text-sm">Payload Capacity</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Truck Image */}
          <motion.div
            variants={imageVariants}
            className="relative"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div
              style={{ rotateX, rotateY }}
              className="relative transition-transform duration-300 ease-out"
            >
              <div className="absolute inset-0 blur-3xl opacity-50" style={{ background: 'radial-gradient(ellipse at center, hsl(var(--primary) / 0.3) 0%, transparent 70%)'}} />
              <img
                src="https://sanyglobal-img.sany.com.cn/prod/20250507/%E9%95%BF%E7%BB%AD%E8%88%AA_175540.jpg"
                alt="SANY Heavy-Duty Electric Truck"
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
            
            <motion.div
              className="absolute -bottom-8 -left-8 bg-background/80 border border-border/80 backdrop-blur-sm rounded-xl p-4 shadow-xl z-20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, transition: { delay: 0.5, duration: 0.5 } }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-xl">⚡</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">100% Electric</div>
                  <div className="text-sm text-muted-foreground">Zero Emissions</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1, duration: 0.5 } }}
        whileHover={{ y: -5 }}
      >
        <span className="text-secondary-foreground/70 text-sm">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-secondary-foreground/50 flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-primary rounded-full"
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
