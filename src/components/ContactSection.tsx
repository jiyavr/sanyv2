import { useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    fleet: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for your inquiry! Our team will contact you within 24 hours.');
    setFormData({ name: '', company: '', email: '', phone: '', fleet: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative bg-background">
      {/* Background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse at center, hsl(0 85% 50% / 0.05) 0%, transparent 50%)'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <span className="text-primary font-semibold text-sm tracking-widest uppercase">Get in Touch</span>
              <h2 className="font-display text-4xl md:text-6xl mt-4 mb-6 text-foreground">
                READY TO GO<br />
                <span className="text-gradient">ELECTRIC?</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Contact our team for personalized consultations, fleet assessments, 
                and exclusive pricing for your business needs.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-muted-foreground text-sm">Headquarters</div>
                  <div className="text-foreground font-medium">Pune, Maharashtra, India</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-muted-foreground text-sm">Sales Hotline</div>
                  <div className="text-foreground font-medium">1800-SANY-EV</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-muted-foreground text-sm">Email</div>
                  <div className="text-foreground font-medium">ev@sany-india.com</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-muted-foreground mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2">Company Name *</label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground transition-all"
                  placeholder="Your Company"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-muted-foreground mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground transition-all"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground transition-all"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-muted-foreground mb-2">Fleet Size</label>
              <select
                value={formData.fleet}
                onChange={(e) => setFormData({ ...formData, fleet: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground transition-all"
              >
                <option value="">Select fleet size</option>
                <option value="1-10">1-10 trucks</option>
                <option value="11-50">11-50 trucks</option>
                <option value="51-100">51-100 trucks</option>
                <option value="100+">100+ trucks</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-muted-foreground mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground transition-all resize-none"
                placeholder="Tell us about your requirements..."
              />
            </div>

            <Button variant="hero" size="xl" className="w-full">
              Submit Inquiry
              <Send className="w-5 h-5" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
