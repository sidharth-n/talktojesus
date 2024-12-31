import React from 'react';
import { UserCircle, Globe2, Clock, PhoneCall, MessageCircle } from 'lucide-react';

const steps = [
  {
    icon: UserCircle,
    title: 'Enter Details',
    description: `Provide your name, age, job, and the topic you'd like to discuss with Jesus`
  },
  {
    icon: Globe2,
    title: 'Choose a Language',
    description: 'Select your preferred language for Jesus to speak to you'
  },
  {
    icon: Clock,
    title: 'Select Talk-Time Plan',
    description: 'Pick a plan that suits your needs'
  },
  {
    icon: PhoneCall,
    title: 'Receive a Call',
    description: 'Get an instant personalized call from Jesus'
  },
  {
    icon: MessageCircle,
    title: 'Engage in Conversation',
    description: 'Enjoy a meaningful conversation based on your input and Bible references'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900/90 via-purple-900/90 to-indigo-900/90">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 text-white">
          How to Connect with Jesus?
        </h2>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-center gap-6 mb-8 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400/20 to-purple-500/20 flex items-center justify-center">
                <step.icon className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-white">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}