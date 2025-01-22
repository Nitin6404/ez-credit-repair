import React from 'react';

export function PersonalInfoForm({ formData, handleInputChange }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="mb-2 block font-inter text-[15px] font-bold uppercase tracking-wide text-[#04284F]">
            FIRST NAME
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="First name"
            className="w-full rounded-[4px] bg-[#F8F8F8] p-3 text-[15px] text-gray-500 placeholder:text-gray-400 focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-2 block font-inter text-[15px] font-bold uppercase tracking-wide text-[#04284F]">
            LAST NAME
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Last Name"
            className="w-full rounded-[4px] bg-[#F8F8F8] p-3 text-[15px] text-gray-500 placeholder:text-gray-400 focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block font-inter text-[15px] font-bold uppercase tracking-wide text-[#04284F]">
          STREET ADDRESS
        </label>
        <input
          type="text"
          name="streetAddress"
          value={formData.streetAddress}
          onChange={handleInputChange}
          placeholder="Street Address"
          className="w-full rounded-[4px] bg-[#F8F8F8] p-3 text-[15px] text-gray-500 placeholder:text-gray-400 focus:outline-none"
        />
      </div>

      <div>
        <input
          type="text"
          name="aptUnit"
          value={formData.aptUnit}
          onChange={handleInputChange}
          placeholder="Apt. Unit, Floor, Ect"
          className="w-full rounded-[4px] bg-[#F8F8F8] p-3 text-[15px] text-gray-500 placeholder:text-gray-400 focus:outline-none"
        />
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div>
          <label className="mb-2 block font-inter text-[15px] font-bold uppercase tracking-wide text-[#04284F]">
            CITY
          </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            placeholder="Select City"
            className="w-full rounded-[4px] bg-[#F8F8F8] p-3 text-[15px] text-gray-500 placeholder:text-gray-400 focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-2 block font-inter text-[15px] font-bold uppercase tracking-wide text-[#04284F]">
            State
          </label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            placeholder="Select State"
            className="w-full rounded-[4px] bg-[#F8F8F8] p-3 text-[15px] text-gray-500 placeholder:text-gray-400 focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-2 block font-inter text-[15px] font-bold uppercase tracking-wide text-[#04284F]">
            ZIP CODE
          </label>
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleInputChange}
            placeholder="Zip Code"
            className="w-full rounded-[4px] bg-[#F8F8F8] p-3 text-[15px] text-gray-500 placeholder:text-gray-400 focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="mb-2 block font-inter text-[15px] font-bold uppercase tracking-wide text-[#04284F]">
            MOBILE NUMBER
          </label>
          <input
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleInputChange}
            placeholder="Enter Mobile Num:"
            className="w-full rounded-[4px] bg-[#F8F8F8] p-3 text-[15px] text-gray-500 placeholder:text-gray-400 focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-2 block font-inter text-[15px] font-bold uppercase tracking-wide text-[#04284F]">
            EMAIL ADDRESS
          </label>
          <input
            type="email"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleInputChange}
            placeholder="Email ID"
            className="w-full rounded-[4px] bg-[#F8F8F8] p-3 text-[15px] text-gray-500 placeholder:text-gray-400 focus:outline-none"
          />
        </div>
      </div>

      <div className="mt-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="couplesMembership"
            checked={formData.couplesMembership}
            onChange={handleInputChange}
            className="mr-2 h-4 w-4 rounded border-gray-300 text-[#04284F]"
          />
          <span className="text-sm text-gray-600">
            Yes, I would like to add a secondary member at just $60/month
          </span>
        </label>
      </div>
    </div>
  );
}
