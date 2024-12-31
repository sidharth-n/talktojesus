import React, { useState } from 'react';
import { useOnboarding } from './useOnboarding';
import { useOnboardingState } from './useOnboardingState';
import PrivacyNotice from './steps/PrivacyNotice';
import PersonalDetails from './steps/PersonalDetails';
import PurposeSelection from './steps/PurposeSelection';
import PurposeDetails from './steps/PurposeDetails';
import LanguageSelection from './steps/LanguageSelection';
import ContactDetails from './steps/ContactDetails';
import PlanSelection from './steps/PlanSelection';
import StepIndicator from './StepIndicator';
import NavigationButtons from './NavigationButtons';
import ConfirmationModal from '../modals/ConfirmationModal';
import PaymentSuccessModal from '../modals/PaymentSuccessModal';
import { formatOnboardingData } from './utils/formatData';
import { getPlanDuration } from './utils/planUtils';
import { initiateCall } from '../../services/callService';

export default function OnboardingSection() {
  const { currentStep, goToNextStep, goToPreviousStep } = useOnboarding();
  const { state, updateField, validateStep, errors } = useOnboardingState();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);
  const [isInitiatingCall, setIsInitiatingCall] = useState(false);

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep === steps.length - 1) {
        setShowConfirmation(true);
      } else {
        goToNextStep();
      }
    }
  };

  const handleConfirmCall = () => {
    // Here you would integrate with Stripe
    // For now, we'll simulate payment success
    setShowConfirmation(false);
    setShowPaymentSuccess(true);
  };

  const handleStartCall = async () => {
    try {
      setIsInitiatingCall(true);
      const callData = await initiateCall(state);
      setShowPaymentSuccess(false);
      // Show success message
      alert('Hope you find what you are seeking with our AI Jesus call.');
    } catch (error) {
      alert('Failed to initiate call. Please try again.');
    } finally {
      setIsInitiatingCall(false);
    }
  };

  const steps = [
    { component: PrivacyNotice, title: "Privacy Notice" },
    { component: PersonalDetails, title: "Personal Details" },
    { component: PurposeSelection, title: "Purpose of Call" },
    { component: PurposeDetails, title: "Additional Details" },
    { component: LanguageSelection, title: "Language Preference" },
    { component: ContactDetails, title: "Contact Details" },
    { component: PlanSelection, title: "Select Plan" }
  ];

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <section 
      id="onboarding-section"
      className="min-h-screen py-20 bg-gradient-to-br from-purple-900/90 via-indigo-900/90 to-blue-900/90 flex items-center justify-center"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-8 text-white">
          Begin Your Sacred Journey
        </h2>
        
        <StepIndicator currentStep={currentStep} totalSteps={steps.length} />

        <div className="max-w-md mx-auto bg-white/10 backdrop-blur-lg rounded-xl p-8 mt-8">
          <CurrentStepComponent 
            state={state} 
            updateField={updateField}
            errors={errors}
          />
          <NavigationButtons 
            currentStep={currentStep} 
            totalSteps={steps.length}
            onNext={handleNext}
            onPrevious={goToPreviousStep}
            startLabel={currentStep === 0 ? "Start" : undefined}
          />
        </div>
      </div>

      <ConfirmationModal
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        onConfirm={handleConfirmCall}
        planDuration={getPlanDuration(state.selectedPlan)}
      />

      <PaymentSuccessModal
        isOpen={showPaymentSuccess}
        onStartCall={handleStartCall}
      />
    </section>
  );
}