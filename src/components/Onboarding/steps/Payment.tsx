import React, { useEffect } from 'react';
import { Phone, Check } from 'lucide-react';

export default function Payment() {
  useEffect(() => {
    // Simulate payment processing
    const timer = setTimeout(() => {
      // Here we'll integrate actual payment processing later
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-center space-y-6">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
        <Check className="w-8 h-8 text-green-500" />
      </div>
      
      <h3 className="text-xl font-semibold">Payment Successful!</h3>
      
      <div className="bg-[#FFF9E6] border border-[#FFC107] rounded-lg p-6">
        <Phone className="w-6 h-6 text-[#FFC107] mx-auto mb-3" />
        <p className="text-gray-700">
          You will receive a call within the next few moments.
          Please ensure your phone is ready to receive the call.
        </p>
      </div>
      
      <p className="text-sm text-gray-600">
        Your call will come from a randomly generated number.
        Stay in a quiet place and prepare for a meaningful conversation.
      </p>
    </div>
  );
}