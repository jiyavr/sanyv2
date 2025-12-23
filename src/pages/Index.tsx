import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import FeaturesSection from '@/components/FeaturesSection';
import TechnologySection from '@/components/TechnologySection';
import ProductsSection from '@/components/ProductsSection';
import ComparisonSection from '@/components/ComparisonSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import SustainabilitySection from '@/components/SustainabilitySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <TechnologySection />
        <ProductsSection />
        <ComparisonSection />
        <TestimonialsSection />
        <SustainabilitySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
