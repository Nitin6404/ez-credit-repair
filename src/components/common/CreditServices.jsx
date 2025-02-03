import pricingPageBar from '../asset/pricingPageBar.svg';

export function CreditServices() {
  const services = [
    {
      title: 'Credit Bureau Disputes',
      description: 'Expert handling of inaccuracies and errors on your credit report.',
    },
    {
      title: 'One-on-One Consultations',
      description: 'Personalized guidance tailored to your unique credit situation.',
    },
    {
      title: 'Score Tracker',
      description: 'Stay informed with tools to monitor your credit score progress.',
    },
    {
      title: '24/7 Access to Client Portal',
      description: 'Convenient access to your credit repair journey at any time.',
    },
    {
      title: '45-Day Credit Updates',
      description: 'Regular updates to keep you informed on your progress.',
    },
    {
      title: 'Credit Builder Too',
      description: 'Resources to help you establish and strengthen your credit profile.',
    },
    {
      title: 'Debt Validation Letters',
      description: 'Challenging the legitimacy of debts to ensure accuracy.',
    },
    {
      title: 'Cease and Desist Letters',
      description: 'Protect yourself from harassment by debt collectors.',
    },
    {
      title: 'Personal Information Correction Letters',
      description: 'Rectifying incorrect personal details on your credit report.',
    },
    {
      title: 'Monthly Inquiry Disputes',
      description: 'Addressing and disputing unnecessary credit inquiries each month.',
    },
    {
      title: 'Creditor Interventions',
      description: 'We negotiate and communicate directly with creditors on your behalf.',
    },
  ];

  return (
    <div className="my-16 flex items-center justify-center">
      <div className="flex flex-col items-center space-x-2 bg-[url('/src/components/asset/pricingPageBg2.svg')] bg-cover bg-center px-4 py-10 md:px-16">
        <div className="my-7 w-full text-center">
          <h1 className="font-inter text-3xl font-bold text-white md:text-[50px]">
            What's Included in Our Service
          </h1>
        </div>
        <div className="mb-20 flex flex-col md:flex-row">
          <div className="flex flex-col space-y-3">
            {services.slice(0, 6).map((service, index) => (
              <div key={index} className="flex items-start space-x-2">
                <div className="text-2xl">
                  <img src={pricingPageBar} alt="" />
                </div>
                <div className="font-inter text-white">
                  <p className="text-xl font-semibold leading-8 md:text-3xl">{service.title}</p>
                  <p className="text-lg font-normal leading-6">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col space-y-3 md:ml-10 md:mt-0">
            {services.slice(6).map((service, index) => (
              <div key={index} className="flex items-start space-x-2">
                <div className="text-2xl">
                  <img src={pricingPageBar} alt="" />
                </div>
                <div className="font-inter text-white">
                  <p className="text-xl font-semibold leading-8 md:text-3xl">{service.title}</p>
                  <p className="text-lg font-normal leading-6">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
