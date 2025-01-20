import React from 'react';

export function ProgressSteps({ steps, currentStep }) {
  return (
    <div className="mb-8 flex justify-center space-x-4">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full ${
              currentStep >= step.id ? 'bg-[#15549A] text-white' : 'bg-gray-200 text-gray-600'
            }`}
          >
            {step.id}
          </div>
          <span className={`ml-2 ${currentStep >= step.id ? 'text-[#15549A]' : 'text-gray-600'}`}>
            {step.title}
          </span>
          {index < steps.length - 1 && <div className="mx-2 mt-4 h-[2px] w-16 bg-gray-300"></div>}
        </div>
      ))}
    </div>
  );
}
