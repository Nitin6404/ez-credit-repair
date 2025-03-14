import pricingPageBar from '../asset/pricingPageBar.svg';
import { services } from '../../data/creditServiceData';

export function CreditServices() {
  return (
    <div className="mb-8 flex items-center justify-center">
      <div className="flex flex-col items-center space-x-2 rounded-lg bg-[url('/src/components/asset/pricingPageBg2.svg')] bg-cover bg-center px-4 py-10 md:px-16">
        <div className="mb-7 w-full text-center">
          <h1 className="font-inter text-3xl font-bold text-white md:text-[50px]">
            What&apos;s Included in Our Service
          </h1>
        </div>
        <div className="flex flex-col md:mb-0 md:flex-row">
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
