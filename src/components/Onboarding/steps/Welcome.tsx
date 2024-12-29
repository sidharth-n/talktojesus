import React from 'react';
import { Sparkles, Phone, Shield, Lock, Heart } from 'lucide-react';
import type { OnboardingStepProps } from '../types';

export default function Welcome({ onNext }: OnboardingStepProps) {
  return (
    <div className="text-center">
      <div className="mb-8">
        <div className="relative inline-block">
          <Sparkles className="w-14 h-14 text-[#FFC107]" />
          <Heart className="w-6 h-6 text-[#FFC107] absolute -right-2 -bottom-2 animate-pulse" />
        </div>
      </div>
      
      <h1 className="text-3xl font-serif font-bold mb-6 bg-gradient-to-r from-[#B8860B] to-[#DAA520] bg-clip-text text-transparent">
        Welcome to Talk to Jesus
      </h1>
      
      <div className="relative bg-gradient-to-b from-[#FFF9E6] to-white rounded-2xl p-8 shadow-lg mb-8 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFC107] via-[#FFD700] to-[#FFC107]" />
        
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="bg-white p-3 rounded-full shadow-md">
            <Shield className="w-6 h-6 text-[#FFC107]" />
          </div>
          <div className="bg-white p-3 rounded-full shadow-md">
            <Lock className="w-6 h-6 text-[#FFC107]" />
          </div>
        </div>

        <h3 className="font-serif text-xl mb-4 text-gray-800">Your Privacy & Call Experience</h3>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="text-gray-700">
              Your conversation is completely private. All details are instantly generated 
              and automatically deleted after your call - nothing is stored.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Phone className="w-5 h-5 text-[#FFC107]" />
              <span className="font-semibold text-gray-800">Instant Connection</span>
            </div>
            <p className="text-gray-700">
              You'll receive an immediate call from our AI system through a secure line.
              Find a quiet, comfortable space where you can speak freely.
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={onNext}
        className="bg-[#FFC107] hover:bg-[#FFB300] text-white font-semibold py-4 px-8 rounded-full shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
      >
        Begin Your Journey
      </button>
    </div>
  );
}