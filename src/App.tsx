import React from 'react';
import Hero from './components/Hero';
import OnboardingSection from './components/Onboarding/OnboardingSection';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <HowItWorks />
       <Testimonials />
      <OnboardingSection />
      <Features />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}