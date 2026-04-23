import React from 'react';
import LandingNav from './components/LandingNav';
import HeroSection from './components/HeroSection';
import HowItWorksSection from './components/HowItWorksSection';
import BenefitsSection from './components/BenefitsSection';
import UseCasesSection from './components/UseCasesSection';
import DemoMessageSection from './components/DemoMessageSection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import FinalCTASection from './components/FinalCTASection';
import LandingFooter from './components/LandingFooter';

export default function MarketingLandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <LandingNav />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <BenefitsSection />
        <UseCasesSection />
        <DemoMessageSection />
        <TestimonialsSection />
        <PricingSection />
        <FinalCTASection />
      </main>
      <LandingFooter />
    </div>
  );
}