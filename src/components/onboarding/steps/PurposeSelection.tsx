import React from 'react';
import { Heart, Briefcase, Book, MessageCircle, HelpCircle } from 'lucide-react';
import { OnboardingState, PurposeType } from '../types';

interface Props {
  state: OnboardingState;
  updateField: (field: keyof OnboardingState, value: any) => void;
}

const purposes = [
  { icon: Heart, label: "Emotional Support", value: "emotional_support" },
  { icon: Briefcase, label: "Career Guidance", value: "career_guidance" },
  { icon: HelpCircle, label: "Life Struggles", value: "life_struggles" },
  { icon: MessageCircle, label: "Casual Talk", value: "casual_talk" },
  { icon: Book, label: "Biblical Knowledge", value: "biblical_knowledge" }
] as const;

export default function PurposeSelection({ state, updateField }: Props) {
  const handleSelect = (value: PurposeType) => {
    updateField('purpose', value);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <h3 className="text-xl font-semibold text-white mb-4">Why Would You Like to Talk to Jesus?</h3>
      
      <div className="grid grid-cols-1 gap-4">
        {purposes.map((purpose) => (
          <button
            key={purpose.value}
            onClick={() => handleSelect(purpose.value as PurposeType)}
            className={`flex items-center gap-4 p-4 rounded-lg transition-colors text-left ${
              state.purpose === purpose.value
                ? 'bg-gradient-to-r from-yellow-400/20 to-purple-500/20 border-2 border-yellow-400/50'
                : 'bg-white/5 hover:bg-white/10'
            }`}
          >
            <purpose.icon className={`w-6 h-6 ${
              state.purpose === purpose.value ? 'text-yellow-400' : 'text-gray-400'
            }`} />
            <span className="text-white">{purpose.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}