import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const trucks = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1591768793355-74d04bb6608f?q=80&w=1000&auto=format&fit=crop",
    title: "Electric Concrete Mixer",
    category: "Construction",
    specs: "350kWh Battery"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1000&auto=format&fit=crop",
    title: "Heavy Duty Dump Truck",
    category: "Mining",
    specs: "50 Ton Payload"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop",
    title: "Electric Port Tractor",
    category: "Logistics",
    specs: "Zero Emissions"
  }
];

const TruckShowcase = () => {
  return (
    <section className="py-24 bg-background overflow-hidden" id="products">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-heading tracking-wide mb-4">
            Our Electric <span className="text-gradient">Fleet</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Experience the future of heavy machinery with our cutting-edge electric trucks designed for performance and sustainability.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {trucks.map((truck, index) => (
            <div 
              key={truck.id} 
              className="group relative rounded-2xl overflow-hidden border border-border bg-card hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={truck.image} 
                  alt={truck.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary text-white text-xs font-bold mb-2 tracking-wider">
                    {truck.category}
                  </span>
                  <h3 className="text-2xl font-heading text-white mb-1">{truck.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{truck.specs}</p>
                  <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white hover:text-black transition-colors">
                    View Details <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
              
              {/* Default State Content (Visible when not hovering) */}
              <div className="p-6 group-hover:opacity-0 transition-opacity duration-300 absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent md:bg-none md:static md:from-transparent">
                <h3 className="text-xl font-bold text-foreground md:text-foreground text-white">{truck.title}</h3>
                <p className="text-primary font-medium text-sm mt-1">{truck.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TruckShowcase;