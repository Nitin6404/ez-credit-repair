import React from 'react';
import TrustedSiteLogo from '../../../components/asset/trustedsite.svg';

export function NavigationButtons({ currentStep, totalSteps, onBack, onContinue }) {
  return (
    <div className="relative mt-6 w-full px-4">
      {/* Gray background container */}
      <div className="mx-auto h-auto w-full max-w-[600px] p-4 sm:h-[79.7px] sm:w-[600px] sm:p-0">
        {/* Green button container */}
        <div className="w-full bg-[#80C600] p-6 sm:absolute sm:left-0 sm:flex sm:h-full sm:w-[70%] sm:items-center sm:justify-center sm:p-0">
          <button
            onClick={onContinue}
            className="w-full text-[22px] font-semibold text-white sm:w-[200px] sm:px-4 sm:text-[29px]"
          >
            {currentStep === totalSteps ? 'Submit' : 'Continue'}
          </button>
        </div>

        {/* TrustedSite logo */}
        <div className="mt-6 flex justify-center sm:absolute sm:right-[7px] sm:top-[7.21px] sm:mt-0">
          <img
            src={TrustedSiteLogo}
            alt="TrustedSite Certified"
            className="h-[50px] w-[120px] sm:h-[63px] sm:w-[152px]"
          />
        </div>
      </div>
    </div>
  );
}
