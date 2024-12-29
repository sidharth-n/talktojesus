import React from 'react';

export default function CallToAction() {
  const scrollToOnboarding = () => {
    const onboardingSection = document.getElementById('onboarding');
    if (onboardingSection) {
      onboardingSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
      <button 
        onClick={scrollToOnboarding}
        className="bg-[#FFC107] hover:bg-[#FFB300] text-white font-semibold py-4 px-8 rounded-full shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
      >
        Start My Call Now
      </button>
    </div>
  );
}