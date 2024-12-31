import React from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { OnboardingState } from '../types';

interface Props {
  state: OnboardingState;
  updateField: (field: keyof OnboardingState, value: any) => void;
}

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
  { code: 'de', name: 'German', flag: '🇩🇪' },
  { code: 'ja', name: 'Japanese', flag: '🇯🇵' }
] as const;

export default function LanguageSelection({ state, updateField }: Props) {
  return (
    <div className="space-y-6 animate-fade-in">
      <h3 className="text-xl font-semibold text-white mb-4">Select Your Preferred Language</h3>
      
      <div className="relative">
        <select
          value={state.language}
          onChange={(e) => updateField('language', e.target.value)}
          className="w-full appearance-none px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white 
            focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer hover:bg-white/10 transition-colors"
        >
          <option value="" disabled>Choose a language...</option>
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code} className="bg-gray-900">
              {lang.flag} {lang.name}
            </option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none flex items-center gap-2">
          <Globe className="w-5 h-5 text-gray-400" />
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
      </div>
      
      <p className="text-sm text-gray-400 mt-2">
        More languages coming soon. Your selected language will be used throughout the conversation.
      </p>
    </div>
  );
}