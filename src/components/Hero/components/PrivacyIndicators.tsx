import React from 'react';
import { Lock, Server, Shield } from 'lucide-react';

const privacyFeatures = [
  { icon: Lock, text: "End-to-end encrypted" },
  { icon: Server, text: "No data storage" },
  { icon: Shield, text: "100% Private calls" }
];

export default function PrivacyIndicators() {
  return (
    <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
      {privacyFeatures.map(({ icon: Icon, text }) => (
        <div key={text} className="flex items-center gap-2">
          <Icon className="w-4 h-4 text-[#FFC107]" />
          <span>{text}</span>
        </div>
      ))}
    </div>
  );
}