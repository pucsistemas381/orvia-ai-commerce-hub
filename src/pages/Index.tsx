import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProblemsSection from '@/components/ProblemsSection';
import EcosystemSection from '@/components/EcosystemSection';
import ResultsSection from '@/components/ResultsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProblemsSection />
        <EcosystemSection />
        <ResultsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;