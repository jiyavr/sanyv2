import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Fleet Director',
    company: 'TransIndia Logistics',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    content: 'Switching to SANY Electric Trucks has reduced our operational costs by 40%. The reliability and support have been exceptional.',
    rating: 5,
    savings: '₹45L/year saved',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'CEO',
    company: 'GreenMove Express',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    content: 'The SE-3500 has transformed our regional operations. Zero emissions, lower maintenance, and our drivers love the comfort.',
    rating: 5,
    savings: '2000+ tons CO₂ reduced',
  },
  {
    id: 3,
    name: 'Amit Patel',
    role: 'Operations Head',
    company: 'FastTrack Cargo',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
    content: 'We were skeptical about electric trucks for heavy hauls. SANY proved us wrong. 500km range and consistent performance daily.',
    rating: 5,
    savings: '99.5% uptime achieved',
  },
  {
    id: 4,
    name: 'Sunita Reddy',
    role: 'Sustainability Lead',
    company: 'EcoFreight India',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    content: 'SANY helped us achieve our carbon neutrality goals 2 years ahead of schedule. A true partner in green logistics.',
    rating: 5,
    savings: 'Carbon Neutral 2023',
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const navigate = (dir: number) => {
    setDirection(dir);
    setCurrentIndex((prev) => {
      if (dir === 1) return (prev + 1) % testimonials.length;
      return prev === 0 ? testimonials.length - 1 : prev - 1;
    });
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with Gradient Mesh */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      {/* Animated Quote Marks Background */}
      <motion.div 
        className="absolute top-20 left-[5%] text-primary/5"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <Quote className="w-40 h-40" />
      </motion.div>
      <motion.div 
        className="absolute bottom-20 right-[5%] text-accent/5 rotate-180"
        animate={{ y: [0, 20, 0], rotate: [180, 175, 180] }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      >
        <Quote className="w-32 h-32" />
      </motion.div>

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Success Stories</span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 mb-6 text-foreground">
            TRUSTED BY LEADERS
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from fleet operators who have transformed their operations with SANY Electric Trucks.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-20 rounded-full w-12 h-12 border-border hover:border-primary hover:bg-primary/10"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-20 rounded-full w-12 h-12 border-border hover:border-primary hover:bg-primary/10"
            onClick={() => navigate(1)}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Testimonial Card */}
          <div className="relative h-[400px] md:h-[320px] overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div className="h-full p-8 md:p-12 rounded-3xl bg-gradient-to-br from-card via-card to-muted border border-border shadow-lg">
                  <div className="flex flex-col md:flex-row gap-8 h-full">
                    {/* Author Info */}
                    <div className="flex flex-col items-center md:items-start md:w-48 shrink-0">
                      <motion.div 
                        className="relative"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/50">
                          <img 
                            src={testimonials[currentIndex].image} 
                            alt={testimonials[currentIndex].name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                          <Quote className="w-3 h-3 text-accent-foreground" />
                        </div>
                      </motion.div>
                      
                      <div className="mt-4 text-center md:text-left">
                        <h4 className="font-display text-xl text-foreground">{testimonials[currentIndex].name}</h4>
                        <p className="text-muted-foreground text-sm">{testimonials[currentIndex].role}</p>
                        <p className="text-primary text-sm font-medium">{testimonials[currentIndex].company}</p>
                      </div>

                      {/* Rating */}
                      <div className="flex gap-1 mt-4">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>

                    {/* Quote Content */}
                    <div className="flex-1 flex flex-col justify-center">
                      <Quote className="w-10 h-10 text-primary/30 mb-4 hidden md:block" />
                      <p className="text-foreground text-lg md:text-xl leading-relaxed italic">
                        "{testimonials[currentIndex].content}"
                      </p>
                      
                      {/* Savings Badge */}
                      <motion.div 
                        className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 w-fit"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <span className="text-primary font-semibold">{testimonials[currentIndex].savings}</span>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`relative h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-muted-foreground/30'
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
