import React from 'react';

export function PersonalInfoForm({ formData, handleChange }) {
  return (
    <div className="mb-20 h-[802px] w-[1272px] space-y-6 px-4">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <label className="mb-2 block font-inter text-[20px] font-bold text-[#04284F]">
            FIRST NAME
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First name"
            className="h-[65px] w-[618px] rounded-xl bg-[#F2F2F2] px-4 font-inter text-[20px] font-normal text-gray-700 placeholder:text-gray-400 focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-2 block font-inter text-[20px] font-bold text-[#04284F]">
            LAST NAME
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="h-[65px] w-[618px] rounded-xl bg-[#F2F2F2] px-4 font-inter text-[20px] font-normal text-gray-700 placeholder:text-gray-400 focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block font-inter text-[20px] font-bold text-[#04284F]">
          STREET ADDRESS
        </label>
        <input
          type="text"
          name="streetAddress"
          value={formData.streetAddress}
          onChange={handleChange}
          placeholder="Street Address"
          className="h-[65px] w-full rounded-xl bg-[#F2F2F2] px-4 font-inter text-[20px] font-normal text-gray-700 placeholder:text-gray-400 focus:outline-none"
        />
      </div>

      <div>
        <input
          type="text"
          name="aptUnit"
          value={formData.aptUnit}
          onChange={handleChange}
          placeholder="Apt. Unit, Floor, Ect"
          className="h-[65px] w-full rounded-xl bg-[#F2F2F2] px-4 font-inter text-[20px] font-normal text-gray-700 placeholder:text-gray-400 focus:outline-none"
        />
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div>
          <label className="mb-2 block font-inter text-[20px] font-bold text-[#04284F]">CITY</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Select City"
            className="h-[65px] w-[407px] rounded-xl bg-[#F2F2F2] px-4 font-inter text-[20px] font-normal text-gray-700 placeholder:text-gray-400 focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-2 block font-inter text-[20px] font-bold text-[#04284F]">
            State
          </label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="Select State"
            className="h-[65px] w-[407px] rounded-xl bg-[#F2F2F2] px-4 font-inter text-[20px] font-normal text-gray-700 placeholder:text-gray-400 focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-2 block font-inter text-[20px] font-bold text-[#04284F]">
            ZIP CODE
          </label>
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            placeholder="Zip Code"
            className="h-[65px] w-[407px] rounded-xl bg-[#F2F2F2] px-4 font-inter text-[20px] font-normal text-gray-700 placeholder:text-gray-400 focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div>
          <label className="mb-2 block font-inter text-[20px] font-bold text-[#04284F]">
            MOBILE NUMBER
          </label>
          <input
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            placeholder="Enter Mobile Num:"
            className="h-[65px] w-[618px] rounded-xl bg-[#F2F2F2] px-4 font-inter text-[20px] font-normal text-gray-700 placeholder:text-gray-400 focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-2 block font-inter text-[20px] font-bold text-[#04284F]">
            EMAIL ADDRESS
          </label>
          <input
            type="email"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            placeholder="Email ID"
            className="h-[65px] w-[618px] rounded-xl bg-[#F2F2F2] px-4 font-inter text-[20px] font-normal text-gray-700 placeholder:text-gray-400 focus:outline-none"
          />
        </div>
      </div>

      {/* Security Notice */}
      <div className="flex h-[148px] w-full items-center justify-center bg-[#04284F] px-8 py-6">
        <div className="flex flex-col items-center justify-center text-center text-white">
          <p className="font-inter text-[25px] font-semibold">
            Your Information is Secure & Private.
          </p>
          <p className="font-inter text-[25px] font-semibold">
            This site is Certified Secure. We never share your information.{' '}
            <a href="/privacy-policy" className="underline hover:text-white/90">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>

      <div className="mt-8 flex">
        <p className="mb-4 font-inter text-[31px] font-normal text-[#04284F]">Couples Membership</p>
        <label className="mb-4 flex items-center justify-center">
          <div className="relative ml-20 mr-4">
            <input
              type="checkbox"
              name="couplesMembership"
              checked={formData.couplesMembership}
              onChange={handleChange}
              className="h-8 w-8 appearance-none rounded-full border-4 border-[#767676] bg-[#F2F2F2] text-[#04284F] checked:border-[#04284F] checked:bg-[#04284F] focus:ring-0"
            />
          </div>
          <span className="font-inter text-[25px] font-normal text-[#04284F]">
            Yes, I would like to add a secondary member at just $60/month
          </span>
        </label>
      </div>
    </div>
  );
}
