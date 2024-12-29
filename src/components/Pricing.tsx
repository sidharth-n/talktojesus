import React, { useState } from 'react';
import PricingCard from './Pricing/components/PricingCard';
import ConfirmationModal from './Pricing/components/ConfirmationModal';
import { pricingPlans } from './Pricing/pricing-data';
import type { PricingPlan } from './Pricing/types';

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleChoosePlan = (plan: PricingPlan) => {
    setSelectedPlan(plan);
    setShowModal(true);
  };

  const handleConfirm = () => {
    // Here we'll integrate payment processing later
    setShowModal(false);
    // Show payment success and call initiation screen
  };

  return (
    <section className="py-20 bg-[#F5F2FF]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">
          Simple & Transparent Pricing
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard 
              key={index} 
              {...plan} 
              onChoose={() => handleChoosePlan(plan)}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600">Secure, encrypted transactions. No personal data stored.</p>
          <div className="mt-4 space-x-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-8 inline-block" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-8 inline-block" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-8 inline-block" />
          </div>
        </div>
      </div>

      {selectedPlan && (
        <ConfirmationModal
          plan={selectedPlan}
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onConfirm={handleConfirm}
        />
      )}
    </section>
  );
}