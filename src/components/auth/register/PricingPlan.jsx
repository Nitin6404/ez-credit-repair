const features = [
  'Three-bureau reports and scores',
  'Credit Bureaus Disputes',
  'One-on-one consultations',
  'Score Tracker',
  '24/7 Access to Client Portal',
  'Creditor Interventions',
  'Monthly Inquiry Disputes',
  'Debt Validation Letters',
  'Cease and Desist letters',
  'Personal Information Correction Letters',
  '45 Day Credit Updates',
  'Credit Builder Tool',
];

export function PricingPlan() {
  return (
    <div className="relative mb-12 w-full">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#62D9FA] to-white" />

      <div className="relative mx-auto flex max-w-[1439px] flex-col items-center justify-center px-4 pb-8 pt-4 sm:pb-16 sm:pt-12">
        <h2 className="mb-4 text-center text-3xl font-bold text-white sm:mb-12 sm:text-[61px]">
          Our Plan
        </h2>

        {/* Pricing Box */}
        <div className="w-full bg-[#04284F] p-2 sm:w-[1230px] sm:p-4">
          <div className="border-[2px] border-white p-4 sm:border-[3px] sm:p-8">
            {/* Header Section */}
            <div className="mb-6 sm:mb-12">
              <div className="flex flex-col items-center justify-between sm:flex-row sm:items-start">
                <div className="mb-4 text-center sm:mb-0 sm:text-left">
                  <h3 className="-center mb-2 flex items-center text-2xl font-bold text-white sm:mb-4 sm:text-[50px]">
                    Individual Pricing
                  </h3>
                  <div className="mt-6 h-[3px] w-[200px] bg-white sm:h-[7px] sm:w-[100%]" />
                </div>
                <div className="text-center sm:text-right">
                  <p className="font-inter text-4xl font-bold leading-none text-white sm:text-[100px]">
                    <span className="text-6xl sm:text-[120px]">$99/m</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-3">
                  <div className="h-[10px] w-[10px] shrink-0 rounded-full border-2 border-[#767676] bg-white sm:h-[13px] sm:w-[13px] sm:border-4" />
                  <span className="font-inter text-base font-medium text-white sm:text-[18px]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
