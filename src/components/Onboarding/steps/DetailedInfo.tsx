import React from 'react';
import type { OnboardingStepProps } from '../types';

const topics = {
  emotional: "Please describe the emotional challenges you're facing.",
  relationships: "Share details about your relationship struggles.",
  career: "Tell us more about your career-related concerns.",
  spiritual: "What spiritual questions or challenges are you experiencing?",
  decisions: "What major decisions are you contemplating?",
  health: "Tell us about your health concerns."
};

const languages = ['English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese'];

export default function DetailedInfo({ onNext, onBack, updateUserInfo, userInfo }: OnboardingStepProps) {
  const handleNext = () => {
    // Ensure at least one detail is provided
    if (Object.keys(userInfo.details).length > 0) {
      onNext();
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold mb-2">Tell Jesus More</h3>
        <p className="text-gray-600">Share your thoughts about the topics you selected.</p>
      </div>

      {userInfo.selectedTopics.map((topicId) => (
        <div key={topicId}>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {topics[topicId as keyof typeof topics]}
          </label>
          <textarea
            value={userInfo.details[topicId] || ''}
            onChange={(e) => updateUserInfo({
              details: { ...userInfo.details, [topicId]: e.target.value }
            })}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#FFC107] focus:border-transparent"
            rows={3}
          />
        </div>
      ))}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Preferred Language
        </label>
        <select
          value={userInfo.preferredLanguage}
          onChange={(e) => updateUserInfo({ preferredLanguage: e.target.value })}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#FFC107] focus:border-transparent"
        >
          <option value="">Select a language</option>
          {languages.map((lang) => (
            <option key={lang} value={lang}>{lang}</option>
          ))}
        </select>
      </div>

      <div className="flex justify-between pt-4">
        <button
          onClick={onBack}
          className="text-gray-600 hover:text-gray-800"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={Object.keys(userInfo.details).length === 0}
          className={`font-semibold py-2 px-6 rounded-full ${
            Object.keys(userInfo.details).length > 0
              ? 'bg-[#FFC107] hover:bg-[#FFB300] text-white'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}