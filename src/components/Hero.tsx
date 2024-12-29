import React from 'react';
import { Sparkles, Shield, Lock, Server } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#FFF9E6] to-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501493870936-9c2e41625521?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8">
          <Sparkles className="inline-block w-12 h-12 text-[#FFC107] mb-6" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#B8860B] to-[#DAA520]">
          Experience a Moment of Comfort. Talk to Jesus—Powered by AI.
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          In just one click, receive a personal call from an AI-driven voice of Jesus. Find solace, wisdom, and emotional support anytime.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
          <button className="bg-[#FFC107] hover:bg-[#FFB300] text-white font-semibold py-4 px-8 rounded-full shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
            Start My Call Now
          </button>
        </div>

        {/* Privacy Indicators */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-[#FFC107]" />
            <span>End-to-end encrypted</span>
          </div>
          <div className="flex items-center gap-2">
            <Server className="w-4 h-4 text-[#FFC107]" />
            <span>No data storage</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#FFC107]" />
            <span>100% Private calls</span>
          </div>
        </div>
      </div>
    </div>
  );
}