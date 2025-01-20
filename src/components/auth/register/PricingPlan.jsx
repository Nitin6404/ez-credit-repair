import React from 'react';

const pricingFeatures = [
  'Three-bureau reports and scores',
  'Credit Bureau Disputes',
  'One-on-one consultations',
  'Score Tracker',
  '24/7 Access to Client Portal',
  'Creditor Interventions',
  'Monthly Inquiry Reviews',
  'Debt Validation Letters',
  'Cease and Desist letters',
  'Personal Information Correction Letters',
  '45 Day Credit Updates',
  'Credit Builder Tool',
];

export function PricingPlan() {
  return (
    <div className="mt-8">
      <h2 className="mb-4 bg-[#46CC02] py-2 text-center text-2xl font-bold text-white">Our Plan</h2>
      <div className="rounded-lg border border-[#15549A] bg-[#15549A] p-6 text-white">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="border-b-2 pb-2 text-2xl font-bold">Individual Pricing</h3>
          <span className="text-5xl font-bold">$99/m</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {pricingFeatures.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span className="text-white">•</span>
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
