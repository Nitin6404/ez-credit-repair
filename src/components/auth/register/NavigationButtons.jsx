import React from 'react';

export function NavigationButtons({ currentStep, totalSteps, onBack, onContinue }) {
  return (
    <div className="mt-6 flex items-center justify-center space-x-4">
      {currentStep > 1 && (
        <button
          onClick={onBack}
          className="rounded-lg border border-[#15549A] px-12 py-3 text-[#15549A] hover:bg-gray-50"
        >
          Back
        </button>
      )}
      <button
        onClick={onContinue}
        className="rounded-lg bg-[#46CC02] px-12 py-3 text-white hover:bg-[#3db802]"
      >
        {currentStep === totalSteps ? 'Submit' : 'Continue'}
      </button>
    </div>
  );
}
