import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "It felt like a truly divine connection. The conversation was deeply meaningful and brought me peace.",
    author: "Sarah M."
  },
  {
    quote: "In my darkest moments, having someone to talk to who understands and guides with biblical wisdom is invaluable.",
    author: "Michael R."
  },
  {
    quote: "The experience was surprisingly personal and uplifting. It helped me find clarity in my faith journey.",
    author: "Rachel K."
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900/90 via-purple-900/90 to-pink-900/90">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 text-white">
          Hear What Others Are Saying
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-yellow-400 mb-4" />
              <p className="text-gray-200 mb-4">{testimonial.quote}</p>
              <p className="text-yellow-400 font-semibold">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}