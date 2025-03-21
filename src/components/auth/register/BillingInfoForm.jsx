import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const BillingInfoForm = ({
  formData,
  handleInputChange,
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
    <div className="billing-info-section mx-auto w-full max-w-7xl px-4 font-inter sm:px-6 lg:px-8">
      {showContract ? (
        // Contract
        <div className="flex items-center justify-center">
          <div className="relative w-full border-4 border-[#04284F] bg-white p-6">
            {/* Close Button */}

            <button
              onClick={handleContractClose}
              className="absolute -right-8 -top-8 h-16 w-16 rounded-full bg-[#04284F] text-center font-montserrat text-[40px] font-bold text-white"
            >
              X
            </button>

            {/* Contract Content */}
            <div className="">
              <h2 className="mb-4 bg-[#15549A] p-4 text-[32px] font-bold text-white">
                Credit Repair Contract, Electronic Signature, & Limited Power of Attorney
              </h2>

              <div className="space-y-4 text-sm text-[#04284F] sm:text-base">
                <p className="text-lg font-normal">
                  Agreement Overview: You have engaged EzeCredit Repair (&quot;EzeCredit&quot;) to
                  provide credit bureau dispute management services and credit score evaluation.
                  This is a month-to-month agreement with no long-term obligation. Services are
                  billed immediately after the initial review and at the end of each service month.
                  You may cancel at any time without further obligation or charges.
                </p>

                <h3 className="text-2xl font-bold">
                  Terms of Service In consideration of EzeCredit&apos;s services, you agree to:
                </h3>
                <ol className="list-decimal pl-6 text-xl font-bold">
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

                <h3 className="text-2xl font-extrabold">Service Details</h3>
                <ol className="list-decimal pl-6 text-xl font-bold">
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
                      Termination of one member&apos;s services reverts pricing to individual rates.
                    </li>
                  </ul>
                </ol>

                {/* 90-Day Satisfaction Guarantee Box */}
                <div className="my-6 w-full bg-[#15549A] p-2">
                  <div className="border-4 border-white bg-[#15549A] p-6">
                    <p className="text-center text-[22px] font-bold leading-tight text-white">
                      90-Day Satisfaction Guarantee If you are unsatisfied, notify EzeCredit within
                      90 days of enrollment for a refund. This guarantee applies only to services
                      rendered within the first 90 days and does not guarantee specific outcomes.
                      Refunds will not exceed the amount paid within this period.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-extrabold">State-Specific Disclosures</h3>
                <ol className="list-decimal pl-6 text-xl font-bold">
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
                        Details on your right to proceed against EzeCredit&apos;s Surety Bond for
                        violations of applicable state law.
                      </li>
                    </ul>
                  </li>
                </ol>

                {/* Cancellation Policy Box */}
                <div className="my-6 w-full bg-[#15549A] p-2">
                  <div className="border-4 border-white bg-[#15549A] p-6">
                    <p className="text-center text-[22px] font-bold leading-tight text-white">
                      Cancellation Policy You may cancel this agreement at any time without penalty
                      or restriction by notifying EzeCredit. You may also exercise your statutory
                      right to cancel before midnight of the fifth working day after signing this
                      contract by submitting a written cancellation notice. Payments made will be
                      refunded within 10 days of cancellation.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-bold">
                  Electronic Signature & Limited Power of Attorney By checking the designated box on
                  our application form, you:
                </h3>
                <ol className="list-decimal pl-6 text-xl font-bold">
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

                <h3 className="text-2xl font-extrabold text-[#F40123]">
                  Important Consumer Notices
                </h3>
                <ol className="list-decimal pl-6 text-xl font-bold">
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
                        California residents may contact the Attorney General&apos;s office for
                        assistance.
                      </li>
                      <li>
                        The Federal Trade Commission regulates credit bureaus and credit repair
                        organizations.
                      </li>
                    </ul>
                  </li>
                </ol>

                <h3 className="mt-8 text-xl font-bold">Contact Information EzeCredit Repair:</h3>
                <p className="mb-4 text-xl font-bold">
                  _______________________ uthorized Agents for Service of Process:
                </p>
                <ol className="list-decimal pl-6 text-xl font-bold">
                  <li>
                    California:{' '}
                    <p className="inline font-normal">
                      Jay Rockey PC, 23586 Calabasas Road, Suite 200, Calabasas, CA 91302.
                    </p>
                  </li>
                  <li>
                    Pennsylvania:{' '}
                    <p className="inline font-normal">
                      Registered Agent, 502 W 7th St, Ste 100, Erie, PA 16502.
                    </p>
                  </li>
                  <li>
                    Virginia:{' '}
                    <p className="inline font-normal">
                      Registered Agents Inc., 4445 Corporation Ln, Ste 264, Virginia Beach, VA
                      23462.
                    </p>
                  </li>
                </ol>

                <div className="pt-6">
                  <h3 className="text-2xl font-bold text-[#F40123]">Notice of Cancellation</h3>
                  <div className="text-[19px] font-bold">
                    <p>
                      You may cancel this contract without penalty before midnight of the fifth
                      working day after signing.
                    </p>
                    <p>
                      Submit a signed, dated cancellation notice to EzeCredit Repair at _____ within
                      this period. Refunds will be processed within 10 days of receipt.
                    </p>

                    <div className="mt-4 flex space-x-2">
                      <div className="flex gap-4">
                        <span className="font-bold">Date: ____________________________</span>
                      </div>
                      <div className="flex gap-4">
                        <span className="font-bold">Signature: _____________________________</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-24 flex h-[103.66px] w-full items-center justify-center bg-[#46CC02]">
                <p className="text-center text-sm font-bold text-white sm:text-xl">
                  Acknowledgment By signing or electronically acknowledging this agreement,
                  <br />
                  you affirm understanding and acceptance of its terms and conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Header Section */}
          <div className="w-full bg-[#03284E] p-4">
            <h2 className="text-[24px] font-bold text-white sm:text-[37px]">
              Your Credit or Debit Card
            </h2>
          </div>

          {/* Form Content */}
          <div className="py-6">
            <div className="flex flex-col justify-between lg:flex-row">
              {/* Card Details Section */}
              <div className="mb-8 w-full lg:w-2/3">
                {/* <div className="mb-4">
                  <label className="mb-2 block text-xl font-extrabold text-[#04284F]">
                    CARD NUMBER
                  </label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    placeholder="0000-0000-0000-0000"
                    className="mr-4 h-[65px] w-full bg-[#F2F2F2] p-3 pr-3 text-xl font-normal"
                  />
                </div> */}

                {/* <div className="flex flex-col gap-4 sm:flex-row">
                  <div className="flex-1">
                    <label className="mb-2 block text-xl font-extrabold text-[#04284F]">
                      EXP DATE
                    </label>
                    <input
                      type="text"
                      name="expDate"
                      value={formData.expDate}
                      onChange={handleInputChange}
                      placeholder="MM/YY"
                      className="h-[65px] w-full bg-[#F2F2F2] p-3 text-xl font-normal"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="mb-2 block text-xl font-extrabold text-[#04284F]">CVV</label>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      placeholder="000"
                      className="h-[65px] w-full bg-[#F2F2F2] p-3 text-xl font-normal"
                    />
                  </div>
                </div> */}
              </div>

              {/* Pricing Plans - Positioned Absolutely */}
              {/* <div className="relative mt-8 w-full lg:mt-0 lg:w-1/3">
                <div className="relative flex flex-col items-start gap-4">
                  <div className="h-auto w-full bg-[#15549A] p-2 text-start">
                    <div className="border-4 border-white bg-[#15549A] px-2 py-1 text-white">
                      <p className="text-xl font-bold sm:text-[28px]">$99.00/per month</p>
                      <p className="text-lg font-bold sm:text-[20px]">Individual Pricing Plan</p>
                    </div>
                  </div>
                  <div className="h-auto w-full bg-[#15549A] p-2 text-start">
                    <div className="border-4 border-white bg-[#15549A] px-2 py-1 text-white">
                      <p className="text-xl font-bold sm:text-[28px]">$149.00/per month</p>
                      <p className="text-lg font-bold sm:text-[20px]">Couples Pricing Plan</p>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>

            {/*new div starting*/}
            <div className="md:flex">
              <div className="md:w-[65%]">
                <div className="mb-8">
                  <label className="mb-2 block text-xl font-extrabold text-[#04284F]">
                    CARD NUMBER
                  </label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    placeholder="0000-0000-0000-0000"
                    className="mr-4 h-[65px] w-full bg-[#F2F2F2] p-3 pr-3 text-xl font-normal"
                  />
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <div className="flex-1">
                    <label className="mb-2 block text-xl font-extrabold text-[#04284F]">
                      EXP DATE
                    </label>
                    <input
                      type="text"
                      name="expDate"
                      value={formData.expDate}
                      onChange={handleInputChange}
                      placeholder="MM/YY"
                      className="h-[65px] w-full bg-[#F2F2F2] p-3 text-xl font-normal"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="mb-2 block text-xl font-extrabold text-[#04284F]">CVV</label>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      placeholder="000"
                      className="h-[65px] w-full bg-[#F2F2F2] p-3 text-xl font-normal"
                    />
                  </div>
                </div>
              </div>

              {/* Right side div takes up remaining width */}
              <div className="ml-3 flex-1 md:mt-8">
                <div className="relative mt-8 w-full lg:mt-0">
                  <div className="relative flex flex-col items-start gap-4">
                    {/* Individual Pricing Plan */}
                    <div className="absolute -top-5 hidden h-auto w-full bg-[#15549A] p-2 text-center lg:block">
                      <div className="border-4 border-white bg-[#15549A] px-2 py-1 text-white">
                        <p className="text-xl font-bold sm:text-[28px]">$99.00/per month</p>
                        <p className="text-lg font-bold sm:text-[20px]">Individual Pricing Plan</p>
                      </div>
                    </div>

                    {/* Couples Pricing Plan */}
                    <div className="absolute top-28 hidden h-auto w-full bg-[#15549A] p-2 text-center lg:block">
                      <div className="border-4 border-white bg-[#15549A] px-2 py-1 text-white">
                        <p className="text-xl font-bold sm:text-[28px]">$149.00/per month</p>
                        <p className="text-lg font-bold sm:text-[20px]">Couples Pricing Plan</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Billing Info Checkbox */}
            <div className="mb-4 mt-6">
              <h3 className="mb-2 text-[24px] font-extrabold text-[#04284F] sm:text-[31px]">
                BILLING INFO SAME AS PERSONAL INFO
              </h3>
              <div className="border-4 border-[#767676] p-4">
                <div className="w-full bg-[#F1F1F1]">
                  <label className="flex items-center py-4 text-2xl font-normal text-black">
                    <input
                      type="checkbox"
                      name="addSecondaryMember"
                      checked={formData.addSecondaryMember}
                      onChange={handleCheckboxChange}
                      className="mx-2 hidden h-8 w-8 appearance-none rounded-full border-4 border-[#767676] bg-[#F2F2F2] checked:border-[#04284F] checked:bg-[#04284F] sm:block"
                    />

                    <span>Yes, I would like to add a secondary member at just $50/month.</span>
                  </label>
                  <p className="pb-10 pt-7 text-2xl font-bold text-[#04284F] md:ml-12">
                    Test address, 110 SE 6th Street, Florida FL, 33301
                  </p>
                </div>
              </div>
            </div>

            {/* SSN and DOB Section */}
            <div className="mb-12">
              <h3 className="mb-4 text-[24px] font-bold sm:text-[37px]">
                Your Social Security Number and Date of Birth
              </h3>
              <div className="mb-2 flex w-full flex-col gap-4 sm:flex-row">
                <div className="flex-1 text-xl font-extrabold text-[#04284F]">
                  <label className="mb-2 block">Social Security Number</label>
                  <input
                    type="text"
                    name="ssn"
                    value={formData.ssn}
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
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
            <div className="flex w-full flex-col items-center justify-between bg-[#03284E] px-4 py-3 lg:flex-row">
              <h3 className="text-[24px] font-bold text-white sm:text-4xl">
                Contract, Information Statement, and Legal Disclosures
              </h3>
              <button
                onClick={() => setShowContract(true)}
                className="mt-4 rounded-xl bg-[#15549A] px-7 py-4 text-[20px] font-bold text-white sm:text-[29px] lg:mt-0"
              >
                Click to Read
              </button>
            </div>

            {/* Disclaimer for Contract */}
            <div className="my-5 w-full text-start">
              <h3 className="mb-4 text-start text-2xl font-normal text-[#04284F]">
                Please Check the Box Below:
              </h3>
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  className="peer relative h-7 w-7 cursor-pointer appearance-none rounded-full border-4 border-[#767676] bg-[#F2F2F2] checked:bg-[#04284F] sm:h-9 sm:w-9"
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

BillingInfoForm.propTypes = {
  formData: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
  onShowContractChange: PropTypes.func.isRequired,
};
