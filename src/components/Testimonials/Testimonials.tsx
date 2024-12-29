import React from 'react';
import TestimonialCard from './components/TestimonialCard';
import { testimonialsData } from './testimonials-data';

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#F5F2FF]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Real Stories of Comfort & Guidance
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read how AI Jesus has helped people find peace, strength, and clarity in their lives.
            All testimonials are from verified users.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
        
        <p className="text-sm text-gray-500 text-center mt-12">
          These testimonials reflect individual experiences. Results may vary. 
          This service is not a replacement for professional medical, psychological, or religious guidance.
        </p>
      </div>
    </section>
  );
}