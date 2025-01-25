import React, { useState, useEffect } from 'react';

export const BillingInfoForm = ({
  formData,
  handleChange,
  handleCheckboxChange,
  onShowContractChange,
}) => {
  const [showContract, setShowContract] = useState(false);

  // Notify parent when contract visibility changes
  useEffect(() => {
    onShowContractChange?.(showContract);
  }, [showContract, onShowContractChange]);

  const handleContractClose = () => {
    setShowContract(false);
  };

  return (
    <div className="billing-info-section mx-auto w-full max-w-7xl px-4 font-inter sm:w-[1260px]">
      {showContract ? (
        // Contract
        <div className="flex items-center justify-center">
          <div className="relative w-full border-2 border-[#04284F] bg-white p-3 sm:border-4 sm:p-6">
            {/* Close Button */}
            <button
              onClick={handleContractClose}
              className="absolute -right-4 -top-4 h-12 w-12 rounded-full bg-[#04284F] text-center font-montserrat text-2xl font-bold text-white sm:-right-8 sm:-top-8 sm:h-16 sm:w-16 sm:text-[40px]"
            >
              X
            </button>

            {/* Contract Content */}
            <div className="">
              <h2 className="mb-4 bg-[#15549A] p-2 text-xl font-bold text-white sm:p-4 sm:text-[32px]">
                Credit Repair Contract, Electronic Signature, & Limited Power of Attorney
              </h2>

              <div className="space-y-3 text-[#04284F] sm:space-y-4">
                <p className="text-base font-normal sm:text-lg">
                  Agreement Overview: You have engaged EzeCredit Repair ("EzeCredit") to provide
                  credit bureau dispute management services and credit score evaluation. This is a
                  month-to-month agreement with no long-term obligation. Services are billed
                  immediately after the initial review and at the end of each service month. You may
                  cancel at any time without further obligation or charges.
                </p>

                <h3 className="text-xl font-bold sm:text-2xl">
                  Terms of Service In consideration of EzeCredit's services, you agree to:
                </h3>
                <ol className="list-decimal pl-4 text-lg font-bold sm:pl-6 sm:text-xl">
                  <li>
                    Provide Credit Reports:{' '}
                    <p className="inline font-normal">
                      Submit your credit reports to EzeCredit to initiate the process.
                    </p>
                  </li>
                  <li>
                    Participate Actively:{' '}
                    <p className="inline font-normal">
                      Collaborate in reviewing your credit history and identifying inaccurate or
                      questionable items.
                    </p>
                  </li>
                  <li>
                    Share Correspondence:{' '}
                    <p className="inline font-normal">
                      Provide copies of correspondence or updated reports from credit bureaus to
                      monitor progress.
                    </p>
                  </li>
                  <li>Pay Fees:</li>
                  <ul className="list-disc pl-8 font-normal">
                    <li>
                      Individual Pricing: $99.00 for the initial review/first work and $99.00 per
                      month thereafter.
                    </li>
                    <li>
                      Couples Pricing: $149.00 for the initial review/first work and $149.00 per
                      month thereafter.
                    </li>
                  </ul>
                  <li>
                    Authorize Payments:{' '}
                    <p className="inline font-normal">
                      {' '}
                      Permit EzeCredit to withdraw fees from your credit card or bank account.
                    </p>
                  </li>
                  <li>
                    Update Contact Information:{' '}
                    <p className="inline font-normal">
                      {' '}
                      Notify EzeCredit of changes to your name, address, or contact details.
                    </p>
                  </li>
                </ol>

                <h3 className="text-xl font-extrabold sm:text-2xl">Service Details</h3>
                <ol className="list-decimal pl-4 text-lg font-bold sm:pl-6 sm:text-xl">
                  <li>
                    Initial Review and First Work:{' '}
                    <p className="inline font-normal">
                      Includes analysis of your credit reports, identification of inaccuracies or
                      questionable items, credit score recommendations, and preparation for the
                      dispute process.
                    </p>
                  </li>
                  <li>
                    Dispute Process:{' '}
                    <p className="inline font-normal">
                      Systematic preparation and mailing of dispute letters to credit bureaus, sent
                      on your behalf. Updates on actions taken will be provided during each billing
                      period.
                    </p>
                  </li>
                  <li>
                    Active Participation Required:{' '}
                    <p className="inline font-normal">
                      Failure to comply with terms (e.g., providing required documents) may result
                      in the termination of services.
                    </p>
                  </li>
                  <li>Fee Adjustments for Couples:</li>
                  <ul className="list-disc pl-6 font-normal">
                    <li>Adding a secondary member changes pricing to couples rates.</li>
                    <li>
                      Termination of one member's services reverts pricing to individual rates.
                    </li>
                  </ul>
                </ol>

                {/* 90-Day Satisfaction Guarantee Box */}
                <div className="my-4 w-full bg-[#15549A] p-2 sm:my-6">
                  <div className="border-2 border-white bg-[#15549A] p-3 sm:border-4 sm:p-6">
                    <p className="text-center text-base font-bold leading-tight text-white sm:text-[22px]">
                      90-Day Satisfaction Guarantee If you are unsatisfied, notify EzeCredit within
                      90 days of enrollment for a refund. This guarantee applies only to services
                      rendered within the first 90 days and does not guarantee specific outcomes.
                      Refunds will not exceed the amount paid within this period.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-extrabold sm:text-2xl">State-Specific Disclosures</h3>
                <ol className="list-decimal pl-4 text-lg font-bold sm:pl-6 sm:text-xl">
                  <li>
                    California:
                    <ul className="list-disc pl-8 font-normal">
                      <li>Maximum agreement duration: 180 days.</li>
                      <li>
                        Access to communications within two business days via the customer portal.
                      </li>
                      <li>
                        Surety bond information: Hartford Fire Insurance Company, 690 Asylum Avenue,
                        Hartford, CT 06115.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Florida, North Carolina, Pennsylvania, Texas, Virginia:
                    <ul className="list-disc pl-8 font-normal">
                      <li>
                        Details on your right to proceed against EzeCredit's Surety Bond for
                        violations of applicable state law.
                      </li>
                    </ul>
                  </li>
                </ol>

                {/* Cancellation Policy Box */}
                <div className="my-4 w-full bg-[#15549A] p-2 sm:my-6">
                  <div className="border-2 border-white bg-[#15549A] p-3 sm:border-4 sm:p-6">
                    <p className="text-center text-base font-bold leading-tight text-white sm:text-[22px]">
                      Cancellation Policy You may cancel this agreement at any time without penalty
                      or restriction by notifying EzeCredit. You may also exercise your statutory
                      right to cancel before midnight of the fifth working day after signing this
                      contract by submitting a written cancellation notice. Payments made will be
                      refunded within 10 days of cancellation.
                    </p>
                  </div>
                </div>

                <h3 className="text-lg font-bold sm:text-xl">
                  Electronic Signature & Limited Power of Attorney By checking the designated box on
                  our application form, you:
                </h3>
                <ol className="list-decimal pl-4 text-lg font-bold sm:pl-6 sm:text-xl">
                  <li>
                    <p className="font-normal">Certify that you are at least 19 years old.</p>
                  </li>
                  <li>
                    <p className="font-normal">
                      Acknowledge that you have read and accepted all terms and conditions of this
                      agreement.
                    </p>
                  </li>
                  <li>
                    <p className="font-normal">
                      Grant EzeCredit Limited Power of Attorney to represent you in preparing,
                      signing, and sending dispute letters on your behalf.
                    </p>
                  </li>
                  <li>
                    <p className="font-normal">
                      May revoke this authorization at any time by notifying EzeCredit via email.
                      Revocation will terminate this agreement.
                    </p>
                  </li>
                </ol>

                <h3 className="text-xl font-extrabold text-[#F40123] sm:text-2xl">
                  Important Consumer Notices
                </h3>
                <ol className="list-decimal pl-4 text-lg font-bold sm:pl-6 sm:text-xl">
                  <li>
                    Credit Report Access:{' '}
                    <span className="font-normal">Obtain a free annual credit report at </span>
                    <a
                      href="http://www.AnnualCreditReport.com"
                      className="text-[#0600F1] underline"
                    >
                      www.AnnualCreditReport.com
                    </a>
                    .
                  </li>
                  <li>
                    Credit Disputes:{' '}
                    <span className="font-normal">
                      You have the right to dispute inaccuracies directly with credit reporting
                      agencies. Accurate information cannot be removed legally.
                    </span>
                  </li>
                  <li>
                    Your Rights:{' '}
                    <span className="font-normal">
                      You may cancel this contract within five working days without obligation.
                      Misleading practices by a credit repair organization may entitle you to legal
                      recourse.
                    </span>
                  </li>
                  <li>
                    Complaints:
                    <ul className="list-disc pl-8 font-normal">
                      <li>
                        California residents may contact the Attorney General's office for
                        assistance.
                      </li>
                      <li>
                        The Federal Trade Commission regulates credit bureaus and credit repair
                        organizations.
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
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
                    <label className="mb-2 block text-xl font-extrabold text-[#04284F]">
                      EXP DATE
                    </label>
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
                Your Social Security number and date of birth are needed for our communications with
                the credit bureaus.
              </p>
            </div>

            {/* Legal Section */}
            <div className="flex w-full items-center justify-between bg-[#03284E] px-4 py-3">
              <h3 className="text-4xl font-bold text-white">
                Contract, Information Statement, and Legal Disclosures
              </h3>
              <button
                onClick={() => setShowContract(true)}
                className="bg-[#15549A] px-7 py-4 text-[29px] font-bold text-white"
              >
                Click to Read
              </button>
            </div>

            {/* Disclaimer for Contract */}
            <div className="mx-10 my-5 w-full">
              <h3 className="mb-4 text-2xl font-normal text-[#04284F]">
                Please Check the Box Below:
              </h3>
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  className="peer relative h-9 w-9 cursor-pointer appearance-none rounded-full border-4 border-[#767676] bg-[#F2F2F2] checked:bg-[#04284F]"
                />
                <p>By checking this box you agree to statement</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
