import React from 'react';
import TrustedSiteLogo from '../../../components/asset/trustedsite.svg';

export function NavigationButtons({ currentStep, totalSteps, onBack, onContinue }) {
  return (
    <div className="relative mt-6">
      {/* Gray background container */}
      <div className="mx-auto h-[79.7px] w-[499.55px] bg-[#E4E4E4]">
        {/* Green button container */}
        <div className="absolute left-0 h-full w-[331.03px] bg-[#80C600]">
          <button
            onClick={onContinue}
            className="absolute left-[93.72px] top-[18.35px] text-[29px] font-normal text-white"
          >
            {currentStep === totalSteps ? 'Submit' : 'Continue'}
          </button>
        </div>

        {/* TrustedSite logo */}
        <div className="absolute right-[7px] top-[7.21px]">
          <img src={TrustedSiteLogo} alt="TrustedSite Certified" className="h-[63px] w-[152px]" />
        </div>
      </div>
    </div>
  );
}
