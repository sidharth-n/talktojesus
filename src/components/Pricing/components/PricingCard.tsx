import React from 'react';
import { Clock, Shield } from 'lucide-react';
import type { PricingPlan } from '../types';

interface PricingCardProps extends PricingPlan {
  onChoose: () => void;
}

export default function PricingCard({ name, duration, price, features, onChoose }: PricingCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold mb-2">{name}</h3>
        <div className="flex items-center justify-center text-gray-600 mb-4">
          <Clock className="w-5 h-5 mr-2" />
          <span>{duration}</span>
        </div>
        <div className="text-3xl font-bold text-[#FFC107]">{price}</div>
      </div>
      
      <ul className="space-y-4 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center text-gray-600">
            <Shield className="w-5 h-5 mr-2 text-[#FFC107]" />
            {feature}
          </li>
        ))}
      </ul>
      
      <button 
        onClick={onChoose}
        className="w-full bg-[#FFC107] hover:bg-[#FFB300] text-white font-semibold py-3 px-6 rounded-full transition-colors"
      >
        Choose Plan
      </button>
    </div>
  );
}