import React from 'react';

export const BillingInfoForm = ({ formData, handleChange, handleCheckboxChange }) => {
  return (
    <div className="billing-info-section mx-auto max-w-3xl">
      {/* Card Details Section */}
      <div className="card-section mb-8">
        <h2 className="text-navy-800 mb-6 text-2xl">Your Credit or Debit Card</h2>

        <div className="mb-6">
          <label className="text-navy-800 mb-2 block">Card Number</label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder="0000-0000-0000-0000"
            className="w-full rounded border border-gray-300 bg-gray-100 p-4"
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="text-navy-800 mb-2 block">Exp Date</label>
            <input
              type="text"
              name="expDate"
              value={formData.expDate}
              onChange={handleChange}
              placeholder="MM/YY"
              className="w-full rounded border border-gray-300 bg-gray-100 p-4"
            />
          </div>
          <div>
            <label className="text-navy-800 mb-2 block">CVV</label>
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              placeholder="000"
              className="w-full rounded border border-gray-300 bg-gray-100 p-4"
            />
          </div>
        </div>
      </div>

      {/* Billing Address Section */}
      <div className="billing-address mb-8">
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="sameAsPersonal"
            name="sameAsPersonal"
            checked={formData.sameAsPersonal}
            onChange={handleCheckboxChange}
            className="mr-2 h-5 w-5"
          />
          <label htmlFor="sameAsPersonal" className="text-navy-800">
            Billing address same as personal info
          </label>
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="pricing-plans space-y-4">
        <div className="plan-card relative rounded bg-blue-600 p-6 text-white">
          <div className="text-2xl font-bold">$99.00/per month</div>
          <div>Individual Pricing Plan</div>
        </div>

        <div className="plan-card relative rounded bg-blue-600 p-6 text-white">
          <div className="text-2xl font-bold">$149.00/per month</div>
          <div>Couples Pricing Plan</div>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="addSecondaryMember"
            name="addSecondaryMember"
            checked={formData.addSecondaryMember}
            onChange={handleCheckboxChange}
            className="mr-2 h-5 w-5"
          />
          <label htmlFor="addSecondaryMember" className="text-navy-800">
            Yes, I would like to add a secondary member
          </label>
        </div>
      </div>
    </div>
  );
};
