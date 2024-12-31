import React from 'react';
import GradientBackground from './hero/GradientBackground';
import PrivacyBadges from './hero/PrivacyBadges';
import CallToAction from './hero/CallToAction';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20">
      <GradientBackground />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-text">
          Experience a Moment of Comfort
        </h1>
        
        <div className="space-y-6 mb-8">
          <p className="text-xl md:text-2xl text-gray-200 font-serif">
            Talk to Jesus—Powered by AI
          </p>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            In just one click, receive a personal call from an AI-driven voice of Jesus. 
            Find solace, wisdom, and emotional support anytime.
          </p>
        </div>

        <CallToAction />
        <PrivacyBadges />
      </div>
    </section>
  );
}