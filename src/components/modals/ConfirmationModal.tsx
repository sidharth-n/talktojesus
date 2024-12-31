import React, { useState } from 'react';
import { X, Phone, AlertTriangle } from 'lucide-react';
import { OnboardingState } from '../onboarding/types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  planDuration: string;
}

export default function ConfirmationModal({ isOpen, onClose, onConfirm, planDuration }: Props) {
  const [termsAccepted, setTermsAccepted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-gradient-to-br from-gray-800/95 to-purple-800/95 rounded-xl p-6 shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-400/20 flex items-center justify-center">
            <Phone className="w-8 h-8 text-yellow-400" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Ready to Talk to Jesus?</h3>
          <p className="text-gray-300">
            You'll receive a call from our AI-generated number after successful payment
          </p>
        </div>

        <div className="space-y-4 mb-6">
          <div className="p-4 rounded-lg bg-white/10">
            <h4 className="font-semibold text-white mb-2">Before We Connect</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Your call will last {planDuration}</li>
              <li>• Find a quiet, comfortable space</li>
              <li>• Ensure good phone reception</li>
            </ul>
          </div>

          <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-400/20">
            <div className="flex gap-2">
              <AlertTriangle className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <p className="text-sm text-blue-300">
                This is an AI-powered experience. While we aim to provide comfort and guidance, 
                please seek appropriate support for medical concerns.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className="mt-1 text-purple-500 border-gray-600 rounded focus:ring-purple-500 focus:ring-offset-gray-800"
            />
            <span className="text-sm text-gray-300 group-hover:text-gray-200">
              I understand this is an AI experience and agree to the terms and privacy policy
            </span>
          </label>

          <button
            onClick={onConfirm}
            disabled={!termsAccepted}
            className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
              termsAccepted
                ? 'bg-gradient-to-r from-yellow-400 to-purple-500 text-white hover:opacity-90'
                : 'bg-gray-700 text-gray-400 cursor-not-allowed'
            }`}
          >
            Get Your Call
          </button>
        </div>
      </div>
    </div>
  );
}