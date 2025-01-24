import React from 'react';

export function CreditReportSection({ formData, handleInputChange }) {
  return (
    <div className="w-full">
      {/* Blue background */}
      <div className="h-[283px] w-full bg-[#15549A]">
        <div className="mx-auto max-w-[1439px] px-4 py-8">
          {/* Title */}
          <h2 className="mb-3 text-center text-[50px] font-bold text-white">
            Getting Your Credit Reports
          </h2>

          {/* Description */}
          <p className="mx-auto mb-8 max-w-[984px] text-center text-xl font-normal text-white">
            Upon signup we will assist you in getting your free credit reports. Credit reports are
            from third-party providers, and getting them will never harm your scores.
          </p>

          {/* Checkbox Container */}
          <div className="flex items-center justify-center gap-4">
            <input
              type="checkbox"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleInputChange}
              className="h-9 w-9 appearance-none rounded-full border-4 border-[#767676] bg-[#F2F2F2]"
            />
            <label className="text-2xl font-semibold text-white">
              Yes, I understand I am required to obtain my credit reports to begin the process.
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
