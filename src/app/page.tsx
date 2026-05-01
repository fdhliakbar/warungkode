import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import PricingSection from '@/components/sections/PricingSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import FAQSection from '@/components/sections/FAQSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow">
        <HeroSection />
        <PricingSection />
        <TestimonialSection />
        <FAQSection />
        <Footer />
      </main>
    </div>
  );
}
