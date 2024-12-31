import React from 'react';
import { Phone } from 'lucide-react';

export default function CallToAction() {
  const scrollToOnboarding = () => {
    const onboardingSection = document.getElementById('onboarding-section');
    if (onboardingSection) {
      const offset = -40; // Adjust this value to fine-tune the scroll position
      const elementPosition = onboardingSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <button 
      onClick={scrollToOnboarding}
      className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400/80 to-purple-500/80 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
    >
      <span className="relative z-10 flex items-center gap-2">
        <Phone className="w-5 h-5" />
        Begin Your Sacred Journey
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
    </button>
  );
}