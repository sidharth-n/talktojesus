import { useState } from 'react';

export function useOnboarding() {
  const [currentStep, setCurrentStep] = useState(0);

  const goToNextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 6));
  };

  const goToPreviousStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  return {
    currentStep,
    goToNextStep,
    goToPreviousStep,
  };
}