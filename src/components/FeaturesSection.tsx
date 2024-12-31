import React from 'react';
import { Heart, Globe, BookOpen, Phone } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Emotionally Intelligent AI',
    description: 'Conversations filled with empathy and care'
  },
  {
    icon: Globe,
    title: 'Multi-language Support',
    description: 'Speak in your preferred language for a deeply personal experience'
  },
  {
    icon: BookOpen,
    title: 'Personalized Guidance',
    description: 'Conversations tailored to your input, rooted in Bible references'
  },
  {
    icon: Phone,
    title: 'Instant Connection',
    description: 'Get connected to Jesus in moments with a single click'
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900/90 via-purple-900/90 to-pink-900/90">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 text-white">
          Why Choose TaktoJesus?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-yellow-400/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}