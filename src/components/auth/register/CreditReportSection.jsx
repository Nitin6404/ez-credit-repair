import PropTypes from 'prop-types';

export function CreditReportSection({ formData, handleInputChange }) {
  return (
    <div className="w-full">
      {/* Blue background */}
      <div className="h-auto w-full bg-[#15549A] py-8 md:h-[283px]">
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
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <input
              type="checkbox"
              name="addSecondaryMember"
              checked={formData.addSecondaryMember}
              onChange={handleInputChange}
              className="mx-2 h-8 w-8 cursor-pointer appearance-none rounded-full border-4 border-[#767676] bg-[#F2F2F2] checked:border-[#767676] checked:bg-black sm:block"
            />

            <label className="text-lg font-semibold text-white md:text-2xl">
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
