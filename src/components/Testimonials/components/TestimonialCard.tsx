import React from 'react';
import { Quote, Star } from 'lucide-react';
import type { TestimonialItem } from '../types';

export default function TestimonialCard({ quote, author, location, image, rating, tags }: TestimonialItem) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg relative">
      <Quote className="absolute top-4 right-4 w-8 h-8 text-[#FFC107] opacity-20" />
      
      <div className="flex items-center gap-4 mb-4">
        <img 
          src={image} 
          alt={author} 
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold">{author}</h3>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>

      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[#FFC107] text-[#FFC107]" />
        ))}
      </div>

      <p className="text-gray-700 mb-4 italic">"{quote}"</p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span 
            key={index}
            className="text-xs bg-[#FFF9E6] text-[#B8860B] px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}