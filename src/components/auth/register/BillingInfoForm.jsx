import React from 'react';

export function BillingInfoForm({ formData, handleInputChange }) {
  return (
    <div className="space-y-6">
      <div>
        <label className="mb-2 block text-sm font-medium uppercase text-gray-700">
          Card Number
        </label>
        <input
          type="text"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleInputChange}
          className="w-full rounded-lg border border-gray-200 bg-gray-50 p-3 focus:border-[#15549A] focus:outline-none"
          placeholder="Card Number"
        />
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div>
          <label className="mb-2 block text-sm font-medium uppercase text-gray-700">
            Expiry Date
          </label>
          <input
            type="text"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleInputChange}
            className="w-full rounded-lg border border-gray-200 bg-gray-50 p-3 focus:border-[#15549A] focus:outline-none"
            placeholder="MM/YY"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium uppercase text-gray-700">CVV</label>
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleInputChange}
            className="w-full rounded-lg border border-gray-200 bg-gray-50 p-3 focus:border-[#15549A] focus:outline-none"
            placeholder="CVV"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium uppercase text-gray-700">
            Name on Card
          </label>
          <input
            type="text"
            name="nameOnCard"
            value={formData.nameOnCard}
            onChange={handleInputChange}
            className="w-full rounded-lg border border-gray-200 bg-gray-50 p-3 focus:border-[#15549A] focus:outline-none"
            placeholder="Name on Card"
          />
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="sameAsPersonal"
          checked={formData.sameAsPersonal}
          onChange={handleInputChange}
          className="h-4 w-4 rounded border-gray-300"
        />
        <label className="text-sm text-gray-700">Billing address same as personal address</label>
      </div>

      {!formData.sameAsPersonal && (
        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium uppercase text-gray-700">
              Billing Address
            </label>
            <input
              type="text"
              name="billingAddress"
              value={formData.billingAddress}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-200 bg-gray-50 p-3 focus:border-[#15549A] focus:outline-none"
              placeholder="Billing Address"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium uppercase text-gray-700">
              Apt, Unit, Floor
            </label>
            <input
              type="text"
              name="billingApt"
              value={formData.billingApt}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-200 bg-gray-50 p-3 focus:border-[#15549A] focus:outline-none"
              placeholder="Apt, Unit, Floor"
            />
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div>
              <label className="mb-2 block text-sm font-medium uppercase text-gray-700">City</label>
              <input
                type="text"
                name="billingCity"
                value={formData.billingCity}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-gray-200 bg-gray-50 p-3 focus:border-[#15549A] focus:outline-none"
                placeholder="City"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium uppercase text-gray-700">
                State
              </label>
              <input
                type="text"
                name="billingState"
                value={formData.billingState}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-gray-200 bg-gray-50 p-3 focus:border-[#15549A] focus:outline-none"
                placeholder="State"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium uppercase text-gray-700">
                Zip Code
              </label>
              <input
                type="text"
                name="billingZip"
                value={formData.billingZip}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-gray-200 bg-gray-50 p-3 focus:border-[#15549A] focus:outline-none"
                placeholder="Zip Code"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
