import { Leaf, TreePine, Factory, CloudOff } from 'lucide-react';

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

const SustainabilitySection = () => {
  return (
    <section id="sustainability" className="py-24 relative overflow-hidden bg-secondary text-secondary-foreground">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse at center, hsl(0 85% 50% / 0.1) 0%, transparent 50%)'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Sustainability</span>
            <h2 className="font-display text-4xl md:text-6xl text-secondary-foreground leading-tight">
              DRIVING<br />
              <span className="text-primary">TOWARDS A</span><br />
              GREENER FUTURE
            </h2>
            <p className="text-secondary-foreground/70 text-lg leading-relaxed">
              At SANY, sustainability isn't just a feature—it's our mission. Every electric truck 
              we produce represents our commitment to cleaner air, reduced carbon footprint, 
              and a sustainable future for India's transportation industry.
            </p>

            <div className="space-y-4">
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
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="font-display text-4xl text-foreground mb-1">{stat.value}</div>
                <div className="font-semibold text-foreground text-sm mb-2">{stat.label}</div>
                <div className="text-muted-foreground text-xs">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
