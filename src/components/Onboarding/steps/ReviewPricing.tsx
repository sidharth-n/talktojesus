import React, { useState } from 'react';
import { Clock, Check } from 'lucide-react';
import type { OnboardingStepProps } from '../types';

const plans = [
  {
    name: 'Basic Call',
    duration: '5 minutes',
    price: '$9.99',
    features: ['Personal greeting', 'Focused conversation', 'Basic guidance']
  },
  {
    name: 'Extended Call',
    duration: '15 minutes',
    price: '$24.99',
    features: ['In-depth discussion', 'Personalized advice', 'Extended reflection time']
  },
  {
    name: 'Peaceful Session',
    duration: '30 minutes',
    price: '$39.99',
    features: ['Complete guidance', 'Multiple topics', 'Extended spiritual support']
  }
];

export default function ReviewPricing({ onNext, onBack }: OnboardingStepProps) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);
  const [consent, setConsent] = useState(false);

  const handlePlanSelect = (index: number) => {
    setSelectedPlan(index);
    setShowConfirmation(true);
  };

  const handleConfirm = () => {
    if (consent) {
      // Here we'll show success screen instead of payment for now
      onNext();
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold mb-2">Choose Your Call Duration</h3>
        <p className="text-gray-600">Select the time that best suits your needs.</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {plans.map((plan, index) => (
          <button
            key={plan.name}
            onClick={() => handlePlanSelect(index)}
            className={`p-6 rounded-lg border-2 transition-all text-left ${
              selectedPlan === index 
                ? 'border-[#FFC107] bg-[#FFF9E6]' 
                : 'border-gray-200 hover:border-[#FFC107]'
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="font-semibold text-lg">{plan.name}</h4>
                <div className="flex items-center text-gray-600 mt-1">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{plan.duration}</span>
                </div>
              </div>
              <span className="text-2xl font-bold text-[#FFC107]">{plan.price}</span>
            </div>
            <ul className="space-y-2">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center text-gray-600">
                  <Check className="w-4 h-4 mr-2 text-[#FFC107]" />
                  {feature}
                </li>
              ))}
            </ul>
          </button>
        ))}
      </div>

      {showConfirmation && (
        <div className="mt-6 p-6 bg-[#F5F2FF] rounded-lg">
          <h4 className="font-semibold mb-4">Confirm Your Call</h4>
          <div className="space-y-4">
            <label className="flex items-start gap-2">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1"
              />
              <span className="text-sm text-gray-700">
                I understand and agree that this is an AI-generated call. I consent to
                receiving this call and agree to the Terms of Service and Privacy Policy.
                I am prepared to receive an immediate call after payment.
              </span>
            </label>
            
            <button
              onClick={handleConfirm}
              disabled={!consent}
              className={`w-full py-3 rounded-full font-semibold ${
                consent
                  ? 'bg-[#FFC107] hover:bg-[#FFB300] text-white'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      )}

      <div className="flex justify-between pt-4">
        <button
          onClick={onBack}
          className="text-gray-600 hover:text-gray-800"
        >
          Back
        </button>
      </div>
    </div>
  );
}