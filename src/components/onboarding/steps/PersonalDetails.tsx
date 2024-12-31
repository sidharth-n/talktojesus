import React from 'react';
import { OnboardingState, ValidationErrors } from '../types';

interface Props {
  state: OnboardingState;
  updateField: (field: keyof OnboardingState, value: any) => void;
  errors: ValidationErrors;
}

export default function PersonalDetails({ state, updateField, errors }: Props) {
  return (
    <div className="space-y-6 animate-fade-in">
      <h3 className="text-xl font-semibold text-white mb-4">Tell Us About Yourself</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-1">Name</label>
          <input
            type="text"
            value={state.name}
            onChange={(e) => updateField('name', e.target.value)}
            className={`w-full px-4 py-2 rounded-lg bg-white/5 border ${
              errors.name ? 'border-red-500' : 'border-white/10'
            } text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500`}
            placeholder="Your name"
            required
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-400">{errors.name}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-200 mb-1">Age</label>
          <input
            type="number"
            value={state.age}
            onChange={(e) => updateField('age', e.target.value)}
            min="13"
            max="120"
            className={`w-full px-4 py-2 rounded-lg bg-white/5 border ${
              errors.age ? 'border-red-500' : 'border-white/10'
            } text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500`}
            placeholder="Your age"
            required
          />
          {errors.age && (
            <p className="mt-1 text-sm text-red-400">{errors.age}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-200 mb-1">Occupation</label>
          <input
            type="text"
            value={state.occupation}
            onChange={(e) => updateField('occupation', e.target.value)}
            className={`w-full px-4 py-2 rounded-lg bg-white/5 border ${
              errors.occupation ? 'border-red-500' : 'border-white/10'
            } text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500`}
            placeholder="Your occupation"
            required
          />
          {errors.occupation && (
            <p className="mt-1 text-sm text-red-400">{errors.occupation}</p>
          )}
        </div>
      </div>
    </div>
  );
}