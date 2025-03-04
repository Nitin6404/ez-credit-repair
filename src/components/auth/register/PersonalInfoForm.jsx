import PropTypes from 'prop-types';

export function PersonalInfoForm({ formData, handleInputChange }) {
  return (
    <div className="mb-8 w-full max-w-[95%] space-y-4 px-2 sm:mb-20 sm:w-[1272px] sm:space-y-6 sm:px-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
        <div>
          <label className="mb-2 block font-inter text-base font-bold text-[#04284F] sm:text-[20px]">
            FIRST NAME
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="First name"
            className="h-[50px] w-full rounded-xl bg-[#F2F2F2] px-4 font-inter text-base font-normal text-gray-700 placeholder:text-gray-400 focus:outline-none sm:h-[65px] sm:w-[618px] sm:text-[20px]"
          />
        </div>
        <div>
          <label className="mb-2 block font-inter text-base font-bold text-[#04284F] sm:text-[20px]">
            LAST NAME
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Last Name"
            className="h-[50px] w-full rounded-xl bg-[#F2F2F2] px-4 font-inter text-base font-normal text-gray-700 placeholder:text-gray-400 focus:outline-none sm:h-[65px] sm:w-[618px] sm:text-[20px]"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block font-inter text-base font-bold text-[#04284F] sm:text-[20px]">
          STREET ADDRESS
        </label>
        <input
          type="text"
          name="streetAddress"
          value={formData.streetAddress}
          onChange={handleInputChange}
          placeholder="Street Address"
          className="h-[50px] w-full rounded-xl bg-[#F2F2F2] px-4 font-inter text-base font-normal text-gray-700 placeholder:text-gray-400 focus:outline-none sm:h-[65px] sm:text-[20px]"
        />
      </div>

      <div>
        <input
          type="text"
          name="aptUnit"
          value={formData.aptUnit}
          onChange={handleInputChange}
          placeholder="Apt. Unit, Floor, Ect"
          className="h-[50px] w-full rounded-xl bg-[#F2F2F2] px-4 font-inter text-base font-normal text-gray-700 placeholder:text-gray-400 focus:outline-none sm:h-[65px] sm:text-[20px]"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
        <div>
          <label className="mb-2 block font-inter text-base font-bold text-[#04284F] sm:text-[20px]">
            CITY
          </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            placeholder="Select City"
            className="h-[50px] w-full rounded-xl bg-[#F2F2F2] px-4 font-inter text-base font-normal text-gray-700 placeholder:text-gray-400 focus:outline-none sm:h-[65px] sm:w-[407px] sm:text-[20px]"
          />
        </div>
        <div>
          <label className="mb-2 block font-inter text-base font-bold text-[#04284F] sm:text-[20px]">
            State
          </label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            placeholder="Select State"
            className="h-[50px] w-full rounded-xl bg-[#F2F2F2] px-4 font-inter text-base font-normal text-gray-700 placeholder:text-gray-400 focus:outline-none sm:h-[65px] sm:w-[407px] sm:text-[20px]"
          />
        </div>
        <div>
          <label className="mb-2 block font-inter text-base font-bold text-[#04284F] sm:text-[20px]">
            ZIP CODE
          </label>
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleInputChange}
            placeholder="Zip Code"
            className="h-[50px] w-full rounded-xl bg-[#F2F2F2] px-4 font-inter text-base font-normal text-gray-700 placeholder:text-gray-400 focus:outline-none sm:h-[65px] sm:w-[407px] sm:text-[20px]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
        <div>
          <label className="mb-2 block font-inter text-base font-bold text-[#04284F] sm:text-[20px]">
            MOBILE NUMBER
          </label>
          <input
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleInputChange}
            placeholder="Enter Mobile Num:"
            className="h-[50px] w-full rounded-xl bg-[#F2F2F2] px-4 font-inter text-base font-normal text-gray-700 placeholder:text-gray-400 focus:outline-none sm:h-[65px] sm:w-[618px] sm:text-[20px]"
          />
        </div>
        <div>
          <label className="mb-2 block font-inter text-base font-bold text-[#04284F] sm:text-[20px]">
            EMAIL ADDRESS
          </label>
          <input
            type="email"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleInputChange}
            placeholder="Email ID"
            className="h-[50px] w-full rounded-xl bg-[#F2F2F2] px-4 font-inter text-base font-normal text-gray-700 placeholder:text-gray-400 focus:outline-none sm:h-[65px] sm:w-[618px] sm:text-[20px]"
          />
        </div>
      </div>

      {/* Security Notice */}
      <div className="flex h-auto w-full items-center justify-center bg-[#04284F] px-4 py-4 sm:h-[148px] sm:px-8 sm:py-6">
        <div className="flex flex-col items-center justify-center text-center text-white">
          <p className="font-inter text-lg font-semibold sm:text-[25px]">
            Your Information is Secure & Private.
          </p>
          <p className="font-inter text-lg font-semibold sm:text-[25px]">
            This site is Certified Secure. We never share your information.{' '}
            <a href="/privacy-policy" className="underline hover:text-white/90">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-col sm:mt-8 sm:flex-row">
        <p className="mb-2 font-inter text-xl font-normal text-[#04284F] sm:mb-4 sm:text-[31px]">
          Couples Membership
        </p>
        <label className="mb-4 flex items-center sm:flex-row">
          <div className="relative ml-0 mr-2 mt-0 flex sm:ml-20 sm:mr-4">
            <input
              type="checkbox"
              name="couplesMembership"
              checked={formData.couplesMembership}
              onChange={handleInputChange}
              className="h-6 w-6 appearance-none rounded-full border-4 border-[#767676] bg-[#F2F2F2] text-[#04284F] checked:border-[#04284F] checked:bg-[#04284F] focus:ring-0 sm:h-8 sm:w-8"
            />
          </div>
          <span className="font-inter text-lg font-normal text-[#04284F] sm:text-[25px]">
            Yes, I would like to add a secondary member at just $60/month
          </span>
        </label>
      </div>
    </div>
  );
}

PersonalInfoForm.propTypes = {
  formData: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};
