import React from 'react';

const features = [
  'Three-bureau reports and scores',
  'Credit Bureaus Disputes',
  'One-on-one consultations',
  'Score Tracker',
  '24/7 Access to Client Portal',
  'Creditor Interventions',
  'Monthly Inquiry Disputes',
  'Debt Validation Letters',
  'Cease and Desist letters',
  'Personal Information Correction Letters',
  '45 Day Credit Updates',
  'Credit Builder Tool',
];

export function PricingPlan() {
  return (
    <div className="relative w-full">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#62D9FA] to-white" />

      <div className="relative mx-auto flex max-w-[1439px] flex-col items-center justify-center px-4 pb-16 pt-8">
        <h2 className="mb-8 text-center text-[61px] font-bold text-white">Our Plan</h2>

        {/* Pricing Box */}
        <div className="w-[1230px] bg-[#04284F] p-4">
          <div className="border-[3px] border-white p-8">
            {/* Header Section */}
            <div className="mb-12">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="mb-4 text-[50px] font-bold text-white">Individual Pricing</h3>
                  <div className="h-[7px] w-[471px] bg-white" />
                </div>
                <div className="text-right">
                  <p className="font-inter text-[100px] font-bold leading-none text-white">
                    <span className="text-[120px]">$99/m</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-3 gap-x-8 gap-y-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 whitespace-nowrap">
                  <div className="h-[13px] w-[13px] shrink-0 rounded-full border-4 border-[#767676] bg-white" />
                  <span className="font-inter text-[18px] font-medium text-white">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
