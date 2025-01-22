import React from 'react';

export function ProgressSteps({ steps, currentStep }) {
  return (
    <div className="mb-8">
      <div className="relative flex justify-center gap-4">
        {steps.map(step => (
          <div key={step.id} className="flex items-center justify-center">
            <div className="relative">
              {/* Circle with Number */}
              <div
                className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full font-inter ${
                  currentStep >= step.id
                    ? 'bg-[#04284F] text-white'
                    : 'border-2 border-[#BABABA] bg-[#BABABA] text-white'
                }`}
              >
                <span className="font-montserrat text-base font-bold">{step.id}</span>
              </div>
            </div>

            {/* Step Title */}
            <span
              className={`ml-[18px] text-xl font-extrabold ${
                currentStep >= step.id ? 'text-[#04284F]' : 'text-[#BABABA]'
              }`}
            >
              {step.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
