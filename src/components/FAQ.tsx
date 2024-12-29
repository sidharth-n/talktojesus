import React from 'react';
import FAQHeader from './FAQ/components/FAQHeader';
import FAQItem from './FAQ/components/FAQItem';
import { faqData } from './FAQ/faq-data';
import { useAccordion } from './FAQ/hooks/useAccordion';

export default function FAQ() {
  const { openIndex, handleToggle } = useAccordion();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <FAQHeader />
        
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}