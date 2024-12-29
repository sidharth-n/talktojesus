import React from 'react';
import type { StepItem } from '../types';

export default function StepCard({ icon: Icon, title, description }: StepItem) {
  return (
    <div className="text-center">
      <div className="mb-6 flex justify-center">
        <Icon className="w-12 h-12 text-[#FFC107]" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}