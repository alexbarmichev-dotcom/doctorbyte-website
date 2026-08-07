import Header from '@/components/site/Header';
import Hero from '@/components/site/Hero';
import HowItWorks from '@/components/site/HowItWorks';
import Features from '@/components/site/Features';
import Articles from '@/components/site/Articles';
import Reviews from '@/components/site/Reviews';
import Security from '@/components/site/Security';
import Pricing from '@/components/site/Pricing';
import Faq from '@/components/site/Faq';
import CallToAction from '@/components/site/CallToAction';
import Footer from '@/components/site/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Articles />
        <Reviews />
        <Security />
        <Pricing />
        <Faq />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
