import pricingPageBoi from '../asset/pricingPageBoi.svg';
import pricingPageBar from '../asset/pricingPageBar.svg';

export function CreditServices() {
  const services = [
    {
      title: 'Credit Line Recommendations:',
      description: 'Guidance on securing credit lines that positively impact your score.',
    },
    {
      title: 'Authorized User Tradelines:',
      description: 'Add tradelines to your credit report for a quick boost.',
    },
    {
      title: 'Credit Utilization Strategy:',
      description: 'Tailored advice on managing credit limits for optimal score improvement.',
    },
    {
      title: 'Secured Credit Card Options:',
      description: 'Access to secured credit cards to build positive credit history.',
    },
    {
      title: 'Score Monitoring Tools:',
      description: 'Ongoing monitoring services to track your credit score improvements.',
    },
  ];

  return (
    <div className="my-28 flex justify-center items-center">
      <div className="w-[1260px] h-[659px] space-x-2 flex items-center bg-[url('/src/components/asset/pricingPageBg2.svg')]">
        <div className="mb-8">
          <img src={pricingPageBoi} alt="" />
        </div>
        <div className="space-y-4 mb-20">
          {services.map((service, index) => (
            <div key={index} className="flex items-start">
              <div className="text-2xl mr-2 mt-1">
                <img src={pricingPageBar} alt="" />
              </div>
              <div className="font-inter font-bold text-white">
                <p className="text-3xl leading-8">{service.title}</p>
                <p className="text-xl leading-6">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
