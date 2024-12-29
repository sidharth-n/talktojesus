import React from 'react';
import type { FeatureItem } from '../types';

export default function FeatureCard({ icon: Icon, title, description }: FeatureItem) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="mb-6">
        <Icon className="w-10 h-10 text-[#FFC107]" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}