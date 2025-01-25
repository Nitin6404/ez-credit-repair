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
  const [showingContract, setShowingContract] = useState(false);
  const [formData, setFormData] = useState({
    // Personal Info fields
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
    // Billing Info fields
    cardNumber: '',
    expDate: '',
    cvv: '',
    sameAsPersonal: false,
    addSecondaryMember: false,
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = e => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleContinue = () => {
    // Validate current step before proceeding
    if (currentStep === 1) {
      // Validate personal info
      if (!formData.firstName || !formData.lastName /* add other required fields */) {
        alert('Please fill in all required fields');
        return;
      }
    } else if (currentStep === 2) {
      // Validate billing info
      if (!formData.cardNumber || !formData.expDate || !formData.cvv) {
        alert('Please fill in all required payment information');
        return;
      }
    }

    if (currentStep < steps.length) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <PersonalInfoForm
              formData={formData}
              handleChange={handleChange}
              handleCheckboxChange={handleCheckboxChange}
            />

            <div className="w-full overflow-hidden">
              <PricingPlan />
            </div>
          </>
        );
      case 2:
        return (
          <BillingInfoForm
            formData={formData}
            handleChange={handleChange}
            handleCheckboxChange={handleCheckboxChange}
            onShowContractChange={isShowing => setShowingContract(isShowing)}
          />
        );
      case 3:
        return <CreditReportSection formData={formData} handleChange={handleChange} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col">
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

      <main className="mb-8 mt-16 flex w-full flex-1 flex-col items-center justify-center gap-4 px-4">
        <ProgressSteps steps={steps} currentStep={currentStep} />

        {/* Form */}
        <div className="flex w-full flex-col items-center justify-center bg-white">
          {renderStep()}
          {!(currentStep === 2 && showingContract) && (
            <NavigationButtons
              currentStep={currentStep}
              totalSteps={steps.length}
              onBack={handleBack}
              onContinue={handleContinue}
            />
          )}
        </div>
      </main>
    </div>
  );
}
