import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';


const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center bottom, hsl(0 85% 50% / 0.15) 0%, transparent 60%)'
        }}
      />

      {/* Main Content */}
      <div className="container mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-sm font-medium">India's Leading EV Truck Manufacturer</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight">
              <span className="text-secondary-foreground">THE FUTURE OF</span>
              <br />
              <span className="text-primary">HEAVY-DUTY</span>
              <br />
              <span className="text-secondary-foreground">TRANSPORT</span>
            </h1>

            <p className="text-secondary-foreground/80 text-lg md:text-xl max-w-xl leading-relaxed">
              Zero emissions. Maximum power. SANY Electric Trucks deliver uncompromising 
              performance with sustainable technology for India's evolving logistics landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl">
                Explore Models
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="xl">
                <Play className="w-5 h-5" />
                Watch Video
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-secondary-foreground/20">
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
            </div>
          </div>

          {/* Truck Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Glow Effect */}
              <div 
                className="absolute inset-0 blur-3xl opacity-50"
                style={{
                  background: 'radial-gradient(ellipse at center, hsl(0 85% 50% / 0.3) 0%, transparent 70%)'
                }}
              />
              <img
                src="https://www.sanyglobal.com/images/product/20230628105022715_en.jpg"
                alt="SANY Heavy-Duty Electric Truck"
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-xl p-4 shadow-xl z-20 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-xl">⚡</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">100% Electric</div>
                  <div className="text-sm text-muted-foreground">Zero Emissions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse">
        <span className="text-secondary-foreground/70 text-sm">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-secondary-foreground/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
