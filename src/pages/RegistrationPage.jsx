import React, { useState } from 'react';
import AboutUs from '../components/asset/AboutUsbackground.png';
import trustedSite from '../components/asset/trustedsite.svg';
import { BillingInfoForm } from '../components/auth/register/BillingInfoForm';
import { CreditReportSection } from '../components/auth/register/CreditReportSection';
import { NavigationButtons } from '../components/auth/register/NavigationButtons';
import { PersonalInfoForm } from '../components/auth/register/PersonalInfoForm';
import { PricingPlan } from '../components/auth/register/PricingPlan';
import { ProgressSteps } from '../components/ui/ProgressSteps';

const steps = [
  {
    id: 1,
    title: 'Your Info',
  },
  {
    id: 2,
    title: 'Billing Info',
  },
  {
    id: 3,
    title: 'Credit Report',
  },
];

export function RegistrationPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Your Info
    firstName: '',
    lastName: '',
    streetAddress: '',
    aptUnit: '',
    city: '',
    state: '',
    zipCode: '',
    mobileNumber: '',
    emailAddress: '',
    couplesMembership: false,
    acceptTerms: false,
    // Billing Info
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: '',
    billingAddress: '',
    billingApt: '',
    billingCity: '',
    billingState: '',
    billingZip: '',
    sameAsPersonal: false,
  });

  const handleInputChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // If sameAsPersonal is checked, copy personal info to billing info
    if (name === 'sameAsPersonal' && checked) {
      setFormData(prev => ({
        ...prev,
        billingAddress: prev.streetAddress,
        billingApt: prev.aptUnit,
        billingCity: prev.city,
        billingState: prev.state,
        billingZip: prev.zipCode,
      }));
    }
  };

  const handleContinue = () => {
    setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfoForm formData={formData} handleInputChange={handleInputChange} />;
      case 2:
        return <BillingInfoForm formData={formData} handleInputChange={handleInputChange} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section with Background */}
      <div className="relative mt-3 p-2">
        <img
          src={AboutUs}
          alt="About Us Background"
          className="absolute inset-0 mt-[30px] h-full w-full object-cover opacity-100"
        />
        <div className="relative flex h-[130px] items-center p-2 text-white">
          <div className="ml-[80px] mt-[50px] flex max-w-screen-lg font-inter text-2xl font-bold leading-7">
            <span className="ml-10">Home</span>
            <span className="mx-1">|</span>
            <span>Registration</span>
          </div>
        </div>
      </div>

      <main className="container mx-auto mb-8 mt-16 max-w-4xl px-4">
        <ProgressSteps steps={steps} currentStep={currentStep} />

        {/* Form */}
        <div className="bg-white p-8">
          {renderCurrentStep()}
          <PricingPlan />
          <CreditReportSection formData={formData} handleInputChange={handleInputChange} />
          <NavigationButtons
            currentStep={currentStep}
            totalSteps={steps.length}
            onBack={handleBack}
            onContinue={handleContinue}
          />

          {/* TrustedSite Logo */}
          <div className="mt-4 flex justify-center">
            <img src={trustedSite} alt="Trusted Site" className="h-12" />
          </div>

          {/* Form Fields */}
          <form className="space-y-6">
            {/* Form fields will be conditionally rendered based on currentStep */}
            {currentStep === 1 && (
              <PersonalInfoForm formData={formData} handleInputChange={handleInputChange} />
            )}
            {currentStep === 2 && (
              <BillingInfoForm formData={formData} handleInputChange={handleInputChange} />
            )}
            {currentStep === 3 && (
              <CreditReportSection formData={formData} handleInputChange={handleInputChange} />
            )}
            {/* Navigation Buttons */}
            <div className="mt-8 flex justify-between">
              <button
                type="button"
                // onClick={handlePrevious}
                className={`rounded-lg px-6 py-2 font-medium ${
                  currentStep === 1
                    ? 'invisible'
                    : 'border-2 border-[#15549A] text-[#15549A] hover:bg-[#15549A] hover:text-white'
                }`}
              >
                Previous
              </button>
              <button
                type="button"
                // onClick={handleNext}
                className="rounded-lg bg-[#15549A] px-6 py-2 font-medium text-white hover:bg-[#15549A]/90"
              >
                {currentStep === steps.length ? 'Submit' : 'Next'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
