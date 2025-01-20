import React from 'react';

export function CreditReportSection({ formData, handleInputChange }) {
  return (
    <div className="mt-8 rounded-lg bg-[#15549A] p-6 text-white">
      <h2 className="mb-4 text-center text-2xl font-bold">Getting Your Credit Reports</h2>
      <p className="mb-4 text-center">
        Upon signup we will assist you in getting your free credit reports. Credit reports are from
        third-party providers, and getting them will never harm your scores.
      </p>
      <div className="mb-4 flex items-center justify-center space-x-2">
        <input
          type="checkbox"
          name="acceptTerms"
          checked={formData.acceptTerms}
          onChange={handleInputChange}
          className="h-4 w-4 rounded border-gray-300"
        />
        <label className="text-sm">
          Yes, I understand I am required to obtain my credit reports to begin the process.
        </label>
      </div>
    </div>
  );
}
