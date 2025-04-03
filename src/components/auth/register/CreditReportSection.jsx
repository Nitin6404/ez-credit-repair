import PropTypes from 'prop-types';

export function CreditReportSection({ formData, handleInputChange }) {
  return (
    <div className="w-full">
      {/* Blue background */}
      <div className="h-auto w-full bg-[#15549A] py-8 md:h-[100%]">
        <div className="mx-auto max-w-[1439px] px-4 py-8">
          {/* Title */}
          <h2 className="mb-3 text-center text-[30px] font-bold text-white md:text-[50px]">
            Getting Your Credit Reports
          </h2>

          {/* Description */}
          <p className="mx-auto mb-8 max-w-[984px] text-center text-base font-normal text-white md:text-xl">
            Upon signup we will assist you in getting your free credit reports. Credit reports are
            from third-party providers, and getting them will never harm your scores.
          </p>

          {/* Checkbox Container */}
          <div className="flex w-full flex-row items-center justify-center gap-2 md:flex-row lg:gap-4">
            <div className="sm:w-[10%] md:w-auto">
              <input
                type="checkbox"
                name="addSecondaryMember"
                checked={formData.addSecondaryMember}
                onChange={handleInputChange}
                className="mx-0 h-8 w-8 cursor-pointer appearance-none rounded-full border-2 border-[#767676] bg-[#F2F2F2] checked:border-[#767676] checked:bg-black sm:block md:mx-2 md:h-8 md:w-8 md:border-4"
              />
            </div>

            <label className="text-base font-semibold text-white md:text-2xl">
              Yes, I understand I am required to obtain my credit reports to begin the process.
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

CreditReportSection.propTypes = {
  formData: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};
