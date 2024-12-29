import React, { useState } from 'react';
import { Shield, X } from 'lucide-react';

export default function PrivacyBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:max-w-md bg-white p-4 rounded-lg shadow-lg z-50 animate-slide-up">
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
      >
        <X className="w-4 h-4" />
      </button>
      <div className="flex items-start gap-3">
        <Shield className="w-5 h-5 text-[#FFC107] flex-shrink-0 mt-1" />
        <div>
          <h4 className="font-semibold text-sm mb-1">Your Privacy Matters</h4>
          <p className="text-sm text-gray-600">
            All conversations are end-to-end encrypted. We never store or record your personal data or conversations.
          </p>
        </div>
      </div>
    </div>
  );
}