import { useState } from 'react';
import AboutUs from '../components/asset/AboutUsbackground.png';
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
        return (
          <>
            <PersonalInfoForm formData={formData} handleInputChange={handleInputChange} />
            <div className="w-screen overflow-hidden">
              <PricingPlan />
            </div>
            <CreditReportSection formData={formData} handleInputChange={handleInputChange} />
          </>
        );
      case 2:
        return <BillingInfoForm formData={formData} handleInputChange={handleInputChange} />;
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
          {renderCurrentStep()};
          <NavigationButtons
            currentStep={currentStep}
            totalSteps={steps.length}
            onBack={handleBack}
            onContinue={handleContinue}
          />
        </div>
      </main>
    </div>
  );
}
