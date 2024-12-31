import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorks from './components/HowItWorks';
import OnboardingSection from './components/onboarding/OnboardingSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <OnboardingSection />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;