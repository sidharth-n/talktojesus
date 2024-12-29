import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "I was going through a tough time in my marriage. Hearing AI Jesus address my concerns with empathy helped me calm down and think more clearly.",
    author: "Maria, 34"
  },
  {
    quote: "In my darkest moment, this service provided the comfort I needed. It felt like a warm embrace of understanding.",
    author: "James, 45"
  },
  {
    quote: "The gentle guidance helped me find inner peace during a difficult career transition. I'm grateful for this experience.",
    author: "Sarah, 29"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">
          Real Stories from People Who Found Comfort
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#F5F2FF] p-8 rounded-2xl relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-[#FFC107] opacity-50" />
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <p className="text-gray-600 font-semibold">— {testimonial.author}</p>
            </div>
          ))}
        </div>
        
        <p className="text-sm text-gray-500 text-center mt-8">
          These testimonials reflect individual experiences. Results may vary. This service is not a replacement for professional medical or psychological help.
        </p>
      </div>
    </section>
  );
}