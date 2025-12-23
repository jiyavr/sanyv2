import { Battery, Gauge, Leaf, Shield, Truck, Zap } from 'lucide-react';

const features = [
  {
    icon: Battery,
    title: 'Extended Range',
    description: 'Industry-leading 500+ km range on a single charge for uninterrupted operations.',
  },
  {
    icon: Zap,
    title: 'Rapid Charging',
    description: '0-80% charge in just 45 minutes with DC fast charging capability.',
  },
  {
    icon: Truck,
    title: 'Heavy Payload',
    description: 'Up to 40 tons payload capacity without compromising on efficiency.',
  },
  {
    icon: Gauge,
    title: 'Peak Performance',
    description: '600+ HP electric powertrain delivering instant torque and smooth acceleration.',
  },
  {
    icon: Shield,
    title: 'Advanced Safety',
    description: 'AI-powered collision avoidance, lane assist, and 360° monitoring systems.',
  },
  {
    icon: Leaf,
    title: 'Zero Emissions',
    description: 'Complete elimination of tailpipe emissions for a sustainable future.',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative bg-background">
      {/* Background Accent */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-1/2 opacity-30 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top right, hsl(0 85% 50% / 0.1) 0%, transparent 60%)'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Why Choose SANY</span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 mb-6 text-foreground">
            ENGINEERED FOR THE FUTURE
          </h2>
          <p className="text-muted-foreground text-lg">
            Every SANY Electric Truck is built with cutting-edge technology to deliver 
            unmatched performance, efficiency, and sustainability.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at center, hsl(0 85% 50% / 0.05) 0%, transparent 70%)'
                }}
              />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
