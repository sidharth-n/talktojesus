import React from 'react';
import { Shield, Lock, Database } from 'lucide-react';

export default function PrivacyBadges() {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-8">
      {[
        { icon: Shield, text: "100% Private calls" },
        { icon: Lock, text: "No Login Required" },
        { icon: Database, text: "No data stored" }
      ].map((badge, index) => (
        <div
          key={index}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
        >
          <badge.icon className="w-4 h-4 text-yellow-400" />
          <span className="text-sm text-gray-200">{badge.text}</span>
        </div>
      ))}
    </div>
  );
}