import React from 'react';
import { Heart, Users, Briefcase, Star, Compass, Activity } from 'lucide-react';
import type { OnboardingStepProps } from '../types';

const topics = [
  { id: 'emotional', label: 'Emotional Support', icon: Heart, description: 'Grief, anxiety, depression' },
  { id: 'relationships', label: 'Relationship Issues', icon: Users, description: 'Marriage, family, friendships' },
  { id: 'career', label: 'Career Guidance', icon: Briefcase, description: 'Job stress, career changes' },
  { id: 'spiritual', label: 'Spiritual Growth', icon: Star, description: 'Faith, purpose, meaning' },
  { id: 'decisions', label: 'Life Decisions', icon: Compass, description: 'Major life changes, crossroads' },
  { id: 'health', label: 'Health Concerns', icon: Activity, description: 'Illness, wellness, healing' },
];

export default function TopicSelection({ onNext, onBack, updateUserInfo, userInfo }: OnboardingStepProps) {
  const toggleTopic = (topicId: string) => {
    const newTopics = userInfo.selectedTopics.includes(topicId)
      ? userInfo.selectedTopics.filter(id => id !== topicId)
      : [...userInfo.selectedTopics, topicId];
    
    updateUserInfo({ selectedTopics: newTopics });
  };

  const handleNext = () => {
    if (userInfo.selectedTopics.length > 0) {
      onNext();
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold mb-2">Choose Your Topics</h3>
        <p className="text-gray-600">Please select the areas you'd like to discuss with Jesus.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {topics.map(({ id, label, icon: Icon, description }) => (
          <button
            key={id}
            onClick={() => toggleTopic(id)}
            className={`p-4 rounded-lg border-2 text-left transition-all ${
              userInfo.selectedTopics.includes(id)
                ? 'border-[#FFC107] bg-[#FFF9E6]'
                : 'border-gray-200 hover:border-[#FFC107]'
            }`}
          >
            <Icon className={`w-6 h-6 mb-2 ${
              userInfo.selectedTopics.includes(id) ? 'text-[#FFC107]' : 'text-gray-400'
            }`} />
            <h4 className="font-semibold">{label}</h4>
            <p className="text-sm text-gray-600">{description}</p>
          </button>
        ))}
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
          disabled={userInfo.selectedTopics.length === 0}
          className={`font-semibold py-2 px-6 rounded-full ${
            userInfo.selectedTopics.length > 0
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