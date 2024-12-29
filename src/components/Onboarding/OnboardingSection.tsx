import React, { useState } from 'react';
import Welcome from './steps/Welcome';
import BasicInfo from './steps/BasicInfo';
import TopicSelection from './steps/TopicSelection';
import DetailedInfo from './steps/DetailedInfo';
import ReviewPricing from './steps/ReviewPricing';
import Payment from './steps/Payment';
import type { UserInfo } from './types';

const initialUserInfo: UserInfo = {
  name: '',
  age: 0,
  occupation: '',
  selectedTopics: [],
  details: {},
};

export default function OnboardingSection() {
  const [step, setStep] = useState(1);
  const [userInfo, setUserInfo] = useState<UserInfo>(initialUserInfo);

  const updateUserInfo = (info: Partial<UserInfo>) => {
    setUserInfo(prev => ({ ...prev, ...info }));
  };

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  const renderStep = () => {
    const props = { onNext: handleNext, onBack: handleBack, updateUserInfo, userInfo };
    
    switch (step) {
      case 1:
        return <Welcome {...props} />;
      case 2:
        return <BasicInfo {...props} />;
      case 3:
        return <TopicSelection {...props} />;
      case 4:
        return <DetailedInfo {...props} />;
      case 5:
        return <ReviewPricing {...props} />;
      case 6:
        return <Payment {...props} />;
      default:
        return null;
    }
  };

  return (
    <section id="onboarding" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-2xl mx-auto px-4">
        <div className="mb-8">
          <div>
            <h2 className="font-serif text-xl text-center mb-4">Step {step} of 6</h2>
            <div className="w-full bg-gray-200 h-1 rounded-full">
              <div 
                className="bg-[#FFC107] h-1 rounded-full transition-all duration-300"
                style={{ width: `${(step / 6) * 100}%` }}
              />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {renderStep()}
        </div>
      </div>
    </section>
  );
}