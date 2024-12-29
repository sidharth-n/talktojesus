import React from 'react';
import StepCard from './components/StepCard';
import { stepsData } from './steps-data';

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">
          How Does Talking to AI Jesus Work?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stepsData.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </div>
        
        <p className="text-center mt-12 text-gray-600">
          No sign-ups or long forms—just a simple process to get the comfort you need right away.
        </p>
      </div>
    </section>
  );
}