import React from 'react';

export const BillingInfoForm = ({ formData, handleChange, handleCheckboxChange }) => {
  return (
    <div className="billing-info-section mx-auto w-[1260px] max-w-7xl font-inter">
      {/* Header Section */}
      <div className="w-full bg-[#03284E] p-4">
        <h2 className="text-[37px] font-bold text-white">Your Credit or Debit Card</h2>
      </div>

      {/* Form Content */}
      <div className="py-6">
        <div className="flex justify-between">
          {/* Card Details Section */}
          <div className="mb-8">
            <div className="mb-4">
              <label className="mb-2 block text-xl font-extrabold text-[#04284F]">
                CARD NUMBER
              </label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="0000-0000-0000-0000"
                className="h-[65px] w-[672px] bg-[#F2F2F2] p-3 text-xl font-normal"
              />
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="mb-2 block text-xl font-extrabold text-[#04284F]">EXP DATE</label>
                <input
                  type="text"
                  name="expDate"
                  value={formData.expDate}
                  onChange={handleChange}
                  placeholder="MM/YY"
                  className="h-[65px] w-[327px] bg-[#F2F2F2] p-3 text-xl font-normal"
                />
              </div>
              <div className="flex-1">
                <label className="mb-2 block text-xl font-extrabold text-[#04284F]">CVV</label>
                <input
                  type="text"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  placeholder="000"
                  className="h-[65px] w-[327px] bg-[#F2F2F2] p-3 text-xl font-normal"
                />
              </div>
            </div>
          </div>

          {/* Pricing Plans - Positioned Absolutely */}
          <div className="relative w-full">
            <div className="absolute right-0">
              <div className="mb-2 h-[114px] w-[408px] bg-[#15549A] p-2 text-start">
                <div className="border-4 border-white bg-[#15549A] px-2 py-1 text-white">
                  <p className="text-[33px] font-bold">$99.00/per month</p>
                  <p className="text-[22px] font-bold">Individual Pricing Plan</p>
                </div>
              </div>
              <div className="h-[114px] w-[408px] bg-[#15549A] p-2 text-start">
                <div className="border-4 border-white bg-[#15549A] px-2 py-1 text-white">
                  <p className="text-[33px] font-bold">$149.00/per month</p>
                  <p className="text-[22px] font-bold">Couples Pricing Plan</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Billing Info Checkbox */}
        <div className="mb-4">
          <h3 className="mb-2 text-[31px] font-extrabold text-[#04284F]">
            BILLING INFO SAME AS PERSONAL INFO
          </h3>
          <div className="border-4 border-[#767676] p-4">
            <div className="w-[1228px] bg-[#F1F1F1]">
              <label className="flex items-center py-4 text-2xl font-normal text-black">
                <input
                  type="checkbox"
                  name="addSecondaryMember"
                  checked={formData.addSecondaryMember}
                  onChange={handleCheckboxChange}
                  className="mx-2 h-8 w-8 appearance-none rounded-full border-4 border-[#767676] bg-[#F2F2F2] fill-blue-500"
                />
                <span>Yes, I would like to add a secondary member at just $50/month.</span>
              </label>
              <p className="ml-12 pb-10 pt-7 text-2xl font-bold text-[#04284F]">
                Test address, 110 SE 6th Street, Florida FL, 33301
              </p>
            </div>
          </div>
        </div>

        {/* SSN and DOB Section */}
        <div className="mb-12">
          <h3 className="mb-4 text-[37px] font-bold">
            Your Social Security Number and Date of Birth
          </h3>
          <div className="mb-2 flex w-[936px] gap-4">
            <div className="flex-1 text-xl font-extrabold text-[#04284F]">
              <label className="mb-2 block">Social Security Number</label>
              <input
                type="text"
                name="ssn"
                value={formData.ssn}
                onChange={handleChange}
                placeholder="__ | __ | __"
                className="w-full rounded-[10px] bg-[#F2F2F2] p-5 font-normal"
              />
            </div>
            <div className="flex-1 text-xl font-extrabold text-[#04284F]">
              <label className="mb-2 block">Date of Birth</label>
              <input
                type="text"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                placeholder="MM/DD/YY"
                className="w-full rounded-[10px] bg-[#F2F2F2] p-5 font-normal"
              />
            </div>
          </div>
          <p className="text-[22px] font-bold">
            Your Social Security number and date of birth are needed for our communications with the
            credit bureaus.
          </p>
        </div>

        {/* Legal Section */}
        <div className="flex w-full items-center justify-between bg-[#03284E] px-4 py-3">
          <h3 className="text-4xl font-bold text-white">
            Contract, Information Statement, and Legal Disclosures
          </h3>
          <button className="bg-[#15549A] px-7 py-4 text-[29px] font-bold text-white">
            Click to Read
          </button>
        </div>

        {/* Disclaimer for Contract */}
        <div className="mx-10 my-5 w-full">
          <h3 className="mb-4 text-2xl font-normal text-[#04284F]">Please Check the Box Below:</h3>
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              className="peer relative h-9 w-9 cursor-pointer appearance-none rounded-full border-4 border-[#767676] bg-[#F2F2F2] checked:bg-[#04284F]"
            />
            <p>By checking this box you agree to statement</p>
          </div>
        </div>
      </div>
    </div>
  );
};
