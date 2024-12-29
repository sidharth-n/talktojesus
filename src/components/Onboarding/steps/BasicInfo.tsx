import React, { useState } from 'react';
import type { OnboardingStepProps } from '../types';

export default function BasicInfo({ onNext, onBack, updateUserInfo, userInfo }: OnboardingStepProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Record<string, string> = {};
    if (!userInfo.name) newErrors.name = 'Name is required';
    if (!userInfo.age) newErrors.age = 'Age is required';
    if (!userInfo.occupation) newErrors.occupation = 'Occupation is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-serif mb-2">Let Jesus Know About You</h2>
        <p className="text-gray-600">Share a bit about yourself to personalize your conversation.</p>
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          value={userInfo.name}
          onChange={(e) => updateUserInfo({ name: e.target.value })}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#FFC107] focus:border-transparent"
          placeholder="Enter your name"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
          Your Age
        </label>
        <input
          type="number"
          id="age"
          value={userInfo.age || ''}
          onChange={(e) => updateUserInfo({ age: parseInt(e.target.value) })}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#FFC107] focus:border-transparent"
          placeholder="Enter your age"
        />
        {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
      </div>

      <div>
        <label htmlFor="occupation" className="block text-sm font-medium text-gray-700 mb-1">
          Your Occupation
        </label>
        <input
          type="text"
          id="occupation"
          value={userInfo.occupation}
          onChange={(e) => updateUserInfo({ occupation: e.target.value })}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#FFC107] focus:border-transparent"
          placeholder="Enter your occupation"
        />
        {errors.occupation && <p className="text-red-500 text-sm mt-1">{errors.occupation}</p>}
      </div>

      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={onBack}
          className="text-gray-600 hover:text-gray-800"
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-[#FFC107] hover:bg-[#FFB300] text-white font-semibold py-2 px-6 rounded-full"
        >
          Next
        </button>
      </div>
    </form>
  );
}