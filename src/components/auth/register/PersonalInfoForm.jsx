import React from 'react';
import { SecurityNotice } from '../../ui/SecurityNotice';

export function PersonalInfoForm({ formData, handleInputChange }) {
  return (
    <>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="mb-2 block text-sm font-medium uppercase text-gray-700">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full rounded-lg border border-gray-200 bg-gray-50 p-3 focus:border-[#15549A] focus:outline-none"
            placeholder="First name"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium uppercase text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full rounded-lg border border-gray-200 bg-gray-50 p-3 focus:border-[#15549A] focus:outline-none"
            placeholder="Last Name"
          />
        </div>
      </div>

      <div className="mt-4">
        <label className="mb-2 block text-sm font-medium uppercase text-gray-700">
          Street Address
        </label>
        <input
          type="text"
          name="streetAddress"
          value={formData.streetAddress}
          onChange={handleInputChange}
          className="w-full rounded-lg border border-gray-200 bg-gray-50 p-3 focus:border-[#15549A] focus:outline-none"
          placeholder="Street Address"
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block text-sm font-medium uppercase text-gray-700">
          Apt, Unit, Floor
        </label>
        <input
          type="text"
          name="aptUnit"
          value={formData.aptUnit}
          onChange={handleInputChange}
          className="w-full rounded-lg border border-gray-200 bg-gray-50 p-3 focus:border-[#15549A] focus:outline-none"
          placeholder="Apt, Unit, Floor"
        />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-6">
        <div>
          <label className="mb-2 block text-sm font-medium uppercase text-gray-700">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="w-full rounded-lg border border-gray-200 bg-gray-50 p-3 focus:border-[#15549A] focus:outline-none"
            placeholder="Enter City"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium uppercase text-gray-700">State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            className="w-full rounded-lg border border-gray-200 bg-gray-50 p-3 focus:border-[#15549A] focus:outline-none"
            placeholder="Select State"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium uppercase text-gray-700">Zip Code</label>
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleInputChange}
            className="w-full rounded-lg border border-gray-200 bg-gray-50 p-3 focus:border-[#15549A] focus:outline-none"
            placeholder="Zip Code"
          />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-6">
        <div>
          <label className="mb-2 block text-sm font-medium uppercase text-gray-700">
            Mobile Number
          </label>
          <input
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleInputChange}
            className="w-full rounded-lg border border-gray-200 bg-gray-50 p-3 focus:border-[#15549A] focus:outline-none"
            placeholder="Enter Mobile Num"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium uppercase text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleInputChange}
            className="w-full rounded-lg border border-gray-200 bg-gray-50 p-3 focus:border-[#15549A] focus:outline-none"
            placeholder="Email ID"
          />
        </div>
      </div>

      <SecurityNotice />

      <div className="mt-4 flex items-center space-x-2">
        <input
          type="checkbox"
          name="couplesMembership"
          checked={formData.couplesMembership}
          onChange={handleInputChange}
          className="h-4 w-4 rounded border-gray-300"
        />
        <label className="text-sm text-gray-700">
          Yes, I would like to add a secondary member at just $60/month.
        </label>
      </div>
    </>
  );
}
