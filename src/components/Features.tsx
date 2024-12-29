import React from 'react';
import FeatureCard from './Features/components/FeatureCard';
import { featuresData } from './Features/features-data';

export default function Features() {
  return (
    <section className="py-20 bg-[#F5F2FF]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}