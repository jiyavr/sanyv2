import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Fuel, TrendingDown, TrendingUp, Volume2, VolumeX, Wrench, Settings, Leaf, Cloud } from 'lucide-react';

const comparisons = [
  {
    metric: 'Fuel Cost (per km)',
    electric: { value: '₹4.5', percentage: 75 },
    diesel: { value: '₹18', percentage: 100 },
    savings: '75% Lower',
    icon: { electric: Zap, diesel: Fuel },
  },
  {
    metric: 'Maintenance Cost',
    electric: { value: '₹1.2/km', percentage: 40 },
    diesel: { value: '₹3/km', percentage: 100 },
    savings: '60% Lower',
    icon: { electric: Settings, diesel: Wrench },
  },
  {
    metric: 'Noise Level',
    electric: { value: '65 dB', percentage: 35 },
    diesel: { value: '95 dB', percentage: 100 },
    savings: 'Near Silent',
    icon: { electric: VolumeX, diesel: Volume2 },
  },
  {
    metric: 'CO₂ Emissions',
    electric: { value: '0 g/km', percentage: 0 },
    diesel: { value: '850 g/km', percentage: 100 },
    savings: '100% Clean',
    icon: { electric: Leaf, diesel: Cloud },
  },
];

const ComparisonSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden bg-muted">
      {/* Decorative Elements */}
      <motion.div 
        className="absolute top-1/4 -left-20 w-40 h-40 border border-primary/20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute bottom-1/4 -right-20 w-60 h-60 border border-accent/20 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">The Clear Choice</span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 mb-6 text-foreground">
            ELECTRIC VS DIESEL
          </h2>
          <p className="text-muted-foreground text-lg">
            See why industry leaders are making the switch to SANY Electric Trucks.
          </p>
        </motion.div>

        {/* VS Badge */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
        >
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-primary">
              <span className="font-display text-2xl text-primary-foreground">VS</span>
            </div>
            <motion.div 
              className="absolute inset-0 rounded-full border-2 border-primary"
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* Legend */}
        <motion.div 
          className="flex justify-center gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent" />
            <span className="text-foreground font-medium">SANY Electric</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-muted-foreground/50" />
            <span className="text-muted-foreground">Traditional Diesel</span>
          </div>
        </motion.div>

        {/* Comparison Bars */}
        <div className="max-w-4xl mx-auto space-y-8">
          {comparisons.map((item, index) => (
            <motion.div
              key={item.metric}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
              className="relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors group"
            >
              {/* Metric Header */}
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-display text-xl text-foreground">{item.metric}</h3>
                <motion.span 
                  className="px-4 py-1 rounded-full bg-accent/20 text-accent font-semibold text-sm"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 1 + index * 0.15, type: "spring" }}
                >
                  {item.savings}
                </motion.span>
              </div>

              {/* Electric Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <item.icon.electric className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground text-sm">Electric</span>
                  </div>
                  <span className="font-display text-lg text-primary">{item.electric.value}</span>
                </div>
                <div className="h-3 rounded-full bg-secondary overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${Math.max(item.electric.percentage, 5)}%` } : {}}
                    transition={{ duration: 1.5, delay: 0.8 + index * 0.15, ease: "easeOut" }}
                  />
                </div>
              </div>

              {/* Diesel Bar */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <item.icon.diesel className="w-5 h-5 text-muted-foreground" />
                    <span className="text-muted-foreground text-sm">Diesel</span>
                  </div>
                  <span className="font-display text-lg text-muted-foreground">{item.diesel.value}</span>
                </div>
                <div className="h-3 rounded-full bg-secondary overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-muted-foreground/50"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${item.diesel.percentage}%` } : {}}
                    transition={{ duration: 1.5, delay: 0.9 + index * 0.15, ease: "easeOut" }}
                  />
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at center, hsl(0 85% 50% / 0.03) 0%, transparent 70%)'
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <p className="text-muted-foreground mb-4">
            Ready to see the difference in your fleet?
          </p>
          <motion.div 
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <TrendingDown className="w-5 h-5 text-primary" />
            <span className="text-foreground font-medium">Calculate Your Savings</span>
            <TrendingUp className="w-5 h-5 text-accent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;
