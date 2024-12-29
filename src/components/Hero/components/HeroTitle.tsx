import React from 'react';
import { Sparkles } from 'lucide-react';

export default function HeroTitle() {
  return (
    <>
      <div className="mb-8">
        <Sparkles className="inline-block w-12 h-12 text-[#FFC107] mb-6" />
      </div>
      
      <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#B8860B] to-[#DAA520]">
        Experience a Moment of Comfort. Talk to Jesus—Powered by AI.
      </h1>
      
      <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        In just one click, receive a personal call from an AI-driven voice of Jesus. Find solace, wisdom, and emotional support anytime.
      </p>
    </>
  );
}