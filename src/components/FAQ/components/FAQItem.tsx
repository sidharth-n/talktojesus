import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border rounded-lg transition-all duration-200 hover:border-[#FFC107]">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="font-semibold">{question}</span>
        <span className="transition-transform duration-200">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-[#FFC107]" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </span>
      </button>
      
      <div 
        className={`grid transition-all duration-200 ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-4 text-gray-600">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}