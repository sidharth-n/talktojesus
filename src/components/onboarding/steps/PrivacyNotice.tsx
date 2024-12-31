import React from 'react';
import { Shield, Trash, Clock } from 'lucide-react';

export default function PrivacyNotice() {
  return (
    <div className="space-y-6 animate-fade-in">
      <h3 className="text-xl font-semibold text-white mb-4">Your Privacy Matters</h3>
      
      <div className="space-y-4">
        {[
          {
            icon: Shield,
            title: "100% Private Conversations",
            description: "All calls are completely private and secure"
          },
          {
            icon: Trash,
            title: "No Data Storage",
            description: "All information is deleted immediately after your call"
          },
          {
            icon: Clock,
            title: "Instant Connection",
            description: "Get connected right after completing these details"
          }
        ].map((item, index) => (
          <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-white/5">
            <item.icon className="w-6 h-6 text-yellow-400 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-white">{item.title}</h4>
              <p className="text-gray-300 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}