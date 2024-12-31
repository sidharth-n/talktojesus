import React from 'react';
import { CheckCircle, Phone } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onStartCall: () => void;
}

export default function PaymentSuccessModal({ isOpen, onStartCall }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-md bg-gradient-to-br from-gray-800/95 to-purple-800/95 rounded-xl p-6 text-center">
        <div className="mb-6">
          <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-400" />
          <h3 className="text-xl font-semibold text-white mb-2">Payment Successful!</h3>
          <p className="text-gray-300">
            We're ready to connect you with Jesus. Make sure you're in a quiet place.
          </p>
        </div>

        <button
          onClick={onStartCall}
          className="w-full py-3 px-6 rounded-lg font-semibold bg-gradient-to-r from-yellow-400 to-purple-500 text-white hover:opacity-90 transition-opacity"
        >
          <span className="flex items-center justify-center gap-2">
            <Phone className="w-5 h-5" />
            I'm Ready for the Call
          </span>
        </button>
      </div>
    </div>
  );
}