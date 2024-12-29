import React, { useState } from 'react';
import { X } from 'lucide-react';
import Welcome from './steps/Welcome';
import BasicInfo from './steps/BasicInfo';
import TopicSelection from './steps/TopicSelection';
import DetailedInfo from './steps/DetailedInfo';
import ReviewPricing from './steps/ReviewPricing';
import Payment from './steps/Payment';
import type { UserInfo } from './types';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const initialUserInfo: UserInfo = {
  name: '',
  age: 0,
  occupation: '',
  selectedTopics: [],
  details: {},
};

export default function OnboardingModal({ isOpen, onClose }: OnboardingModalProps) {
  const [step, setStep] = useState(1);
  const [userInfo, setUserInfo] = useState<UserInfo>(initialUserInfo);

  if (!isOpen) return null;

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
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center rounded-t-2xl">
          <div>
            <h2 className="font-serif text-xl">Step {step} of 6</h2>
            <div className="w-full bg-gray-200 h-1 mt-2 rounded-full">
              <div 
                className="bg-[#FFC107] h-1 rounded-full transition-all duration-300"
                style={{ width: `${(step / 6) * 100}%` }}
              />
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6">
          {renderStep()}
        </div>
      </div>
    </div>
  );
}