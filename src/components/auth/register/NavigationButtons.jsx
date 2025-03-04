import PropTypes from 'prop-types';
import TrustedSiteLogo from '../../../components/asset/trustedsite.svg';

export function NavigationButtons({ currentStep, totalSteps, handleContinue }) {
  return (
    <>
      <div className="relative mt-6 w-full px-4 md:hidden">
        {/* Gray background container */}
        <div className="mx-auto h-auto w-full max-w-[600px] p-4 sm:h-[79.7px] sm:w-[600px] sm:p-0">
          {/* Green button container */}
          <div className="bg-[#80C600] p-6 sm:absolute sm:left-0 sm:flex sm:h-full sm:w-[70%] sm:items-center sm:justify-center sm:p-0 md:w-1/4">
            <button
              onClick={handleContinue}
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

      <div className="relative mt-6 hidden md:block">
        {/* Gray background container */}
        <div className="mx-auto h-[79.7px] w-[499.55px] bg-[#E4E4E4]">
          {/* Green button container */}
          <div className="absolute left-0 h-full w-[331.03px] bg-[#80C600]">
            <button
              onClick={handleContinue}
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
    </>
  );
}

NavigationButtons.propTypes = {
  currentStep: PropTypes.number.isRequired,
  totalSteps: PropTypes.number.isRequired,
  handleContinue: PropTypes.func.isRequired,
};
