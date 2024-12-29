import React from 'react';
import HeroTitle from './components/HeroTitle';
import CallToAction from './components/CallToAction';
import PrivacyIndicators from './components/PrivacyIndicators';
import PrivacyBanner from './components/PrivacyBanner';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#FFF9E6] to-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501493870936-9c2e41625521?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <HeroTitle />
        <CallToAction />
        <PrivacyIndicators />
      </div>
      
      <PrivacyBanner />
    </div>
  );
}