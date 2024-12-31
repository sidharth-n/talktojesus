import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface NavigationButtonsProps {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrevious: () => void;
  startLabel?: string;
}

export default function NavigationButtons({
  currentStep,
  totalSteps,
  onNext,
  onPrevious,
  startLabel
}: NavigationButtonsProps) {
  const getButtonLabel = () => {
    if (startLabel && currentStep === 0) return startLabel;
    if (currentStep === totalSteps - 1) return 'Complete';
    return 'Next';
  };

  return (
    <div className="flex justify-between mt-8">
      {currentStep > 0 && (
        <button
          onClick={onPrevious}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
      )}
      
      <button
        onClick={onNext}
        className="flex items-center gap-2 px-6 py-2 ml-auto rounded-lg bg-gradient-to-r from-yellow-400 to-purple-500 hover:opacity-90 transition-opacity"
      >
        {getButtonLabel()}
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}