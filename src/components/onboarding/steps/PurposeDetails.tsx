import React from 'react';
import { OnboardingState } from '../types';

interface Props {
  state: OnboardingState;
  updateField: (field: keyof OnboardingState, value: any) => void;
}

export default function PurposeDetails({ state, updateField }: Props) {
  const getPrompt = () => {
    switch (state.purpose) {
      case 'emotional_support':
        return "What's troubling you? Share your feelings and emotions...";
      case 'career_guidance':
        return "Tell us about your career situation and what guidance you're seeking...";
      case 'life_struggles':
        return "What challenges are you facing? How can Jesus help you?";
      case 'casual_talk':
        return "What would you like to discuss with Jesus?";
      case 'biblical_knowledge':
        return "What aspects of biblical teachings would you like to explore?";
      default:
        return "Please share more details about what you'd like to discuss...";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <h3 className="text-xl font-semibold text-white mb-4">Share More Details</h3>
      
      <div>
        <label className="block text-sm font-medium text-gray-200 mb-1">
          {getPrompt()}
        </label>
        <textarea
          value={state.additionalDetails}
          onChange={(e) => updateField('additionalDetails', e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          rows={4}
          required
        />
      </div>
    </div>
  );
}