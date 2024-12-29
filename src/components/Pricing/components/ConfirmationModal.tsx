import React from 'react';
import { X } from 'lucide-react';
import type { PricingPlan } from '../types';

interface ConfirmationModalProps {
  plan: PricingPlan;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function ConfirmationModal({ plan, isOpen, onClose, onConfirm }: ConfirmationModalProps) {
  const [consent, setConsent] = React.useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Confirm Your Call</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold mb-2">{plan.name}</h4>
          <p className="text-gray-600">{plan.duration} - {plan.price}</p>
        </div>

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
            onClick={onConfirm}
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
    </div>
  );
}