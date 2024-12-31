import React from 'react';

export default function GradientBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544989164-31dc3c645987?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-15"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-purple-500/20 to-blue-500/20 animate-gradient"></div>
    </div>
  );
}