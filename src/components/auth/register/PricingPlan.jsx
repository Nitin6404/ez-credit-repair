import React from 'react';

export function PricingPlan() {
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

  return (
    <div className="relative mt-20">
      <div className="absolute inset-x-0 h-[537px] w-full bg-gradient-to-b from-[#62D9FA] from-0% to-[#FFFFFF] to-100%">
        <div className="mx-auto h-full max-w-[1439px]">
          <div className="flex h-full flex-col items-center justify-center">
            <h2 className="mb-12 font-inter text-[50px] font-bold text-white">Our Plan</h2>

            {/* Inner box: 1230x395 with border */}
            <div className="h-[395px] w-[1230px] rounded-[20px] border border-white bg-[#04284F] p-12">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-inter text-[40px] font-bold text-white">
                    Individual Pricing
                  </h3>
                  <div className="mt-2 h-0.5 w-[300px] bg-white"></div>
                </div>
                <div>
                  <p className="whitespace-nowrap font-inter text-[80px] font-bold text-white">
                    <span className="text-[100px]">$</span>99
                    <span className="text-[40px]">/m</span>
                  </p>
                </div>
              </div>

              {/* Features Grid */}
              <div className="mt-12 grid grid-cols-3 gap-x-8 gap-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-white opacity-70"></div>
                    <span className="font-inter text-[20px] text-white">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Placeholder to maintain height */}
      <div className="h-[537px]"></div>
    </div>
  );
}
