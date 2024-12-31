import React from 'react';
import { Clock, Star, Sparkles, Shield } from 'lucide-react';
import { OnboardingState } from '../types';

interface Props {
  state: OnboardingState;
  updateField: (field: keyof OnboardingState, value: any) => void;
}

const plans = [
  {
    id: 'basic',
    name: 'Quick Connect',
    duration: '5 minutes',
    price: '$4.99',
    description: 'Brief guidance for a single topic',
    benefits: [
      'One focused conversation',
      'Quick guidance'
    ]
  },
  {
    id: 'standard',
    name: 'Essential Connect',
    duration: '15 minutes',
    price: '$9.99',
    description: 'Perfect for meaningful conversations',
    benefits: [
      'Extended conversation',
      'Multiple topics covered'
    ],
    recommended: true
  },
  {
    id: 'premium',
    name: 'Deep Connect',
    duration: '30 minutes',
    price: '$19.99',
    description: 'In-depth guidance and support',
    benefits: [
      'Comprehensive conversation',
      'Detailed guidance',
      'Multiple topics explored'
    ]
  }
] as const;

export default function PlanSelection({ state, updateField }: Props) {
  const handleSelect = (planId: string) => {
    updateField('selectedPlan', planId);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <h3 className="text-xl font-semibold text-white mb-4">Select Your Talk Time</h3>
      
      <div className="space-y-4">
        {plans.map((plan) => (
          <button
            key={plan.id}
            onClick={() => handleSelect(plan.id)}
            className={`w-full p-6 rounded-lg transition-all duration-300 text-left ${
              state.selectedPlan === plan.id
                ? 'bg-gradient-to-r from-yellow-400/20 to-purple-500/20 border-2 border-yellow-400/50 scale-[1.02]'
                : 'bg-white/5 hover:bg-white/10 hover:scale-[1.01]'
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2">
                  {plan.id === 'basic' && <Star className="w-5 h-5 text-yellow-400" />}
                  {plan.id === 'standard' && <Sparkles className="w-5 h-5 text-yellow-400" />}
                  {plan.id === 'premium' && <Shield className="w-5 h-5 text-yellow-400" />}
                  <span className="text-lg font-semibold text-white">{plan.name}</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-300">{plan.duration}</span>
                </div>
                <p className="text-sm text-gray-300 mt-1">{plan.description}</p>
              </div>
              <span className="text-xl font-bold text-white">{plan.price}</span>
            </div>
            
            <ul className="space-y-2">
              {plan.benefits.map((benefit, index) => (
                <li key={index} className="text-sm text-gray-300 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/60" />
                  {benefit}
                </li>
              ))}
            </ul>
            
            {plan.recommended && (
              <span className="inline-block mt-4 px-3 py-1 text-xs bg-yellow-400/20 text-yellow-400 rounded-full">
                Most Popular Choice
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}