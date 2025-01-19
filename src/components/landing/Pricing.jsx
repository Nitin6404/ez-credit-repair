import AboutUs from '../asset/AboutUsbackground.png';
import pricingPageAero from '../asset/pricingPageAero.svg';
import pricingPageCircleBlue from '../asset/pricingPageCircleBlue.svg';
import { CreditServices } from '../common/CreditServices';
import { Footer } from '../common/Footer';

export function Pricing() {
  return (
    <div className="flex w-full flex-col">
      <div className="relative mt-3 p-2">
        {/* Background Image */}
        <img
          src={AboutUs}
          alt="About Us Background"
          className="absolute inset-0 mt-[30px] h-full w-full object-cover opacity-100"
        />

        {/* Inner Div with Background Image */}
        <div className="relative flex h-[130px] items-center p-2 text-white">
          <div className="ml-[80px] mt-[50px] flex max-w-screen-lg font-inter text-2xl font-bold leading-7">
            <span className="ml-10">Home</span>
            <span className="mx-1">|</span>
            <span>Pricing</span>
          </div>
        </div>
      </div>
      <div className="mx-16 mb-10 mt-20 flex justify-center text-center">
        <div className="w-[1300px] text-start font-inter text-2xl font-semibold leading-7">
          <h1 className="font-inter text-5xl font-bold text-[#15549A]">
            We only have 1 plan – A Comprehensive Service Plan
          </h1>
          <h4 className="font-inter text-[22px] font-medium text-[#173455]">
            We are committed to providing you with the full support you need. When you come to us,
            we understand that you're <br /> seeking the best possible assistance. That’s why we
            never hold back we strive to ensure your satisfaction every step <br /> of the way.
          </h4>
          <h2 className="font-inter text-3xl font-bold text-[#04284F]">
            Comprehensive Plan: $99/mo
          </h2>
        </div>
      </div>
      <div className="flex h-[535px] w-full items-center justify-center bg-[url('/src/components/asset/pricingBg.svg')]">
        <div className="flex flex-col items-center text-center font-inter">
          <div className="w-full text-[40px] font-bold leading-[55px] text-white">
            <p>How Much Does</p>
            <p>EzeCredit Repair Cost</p>
            <p>($99/mo)</p>
          </div>
          <div className="my-4">
            <div className="text-[29px] font-normal leading-9 text-white">
              Find a solution that works for you
            </div>
          </div>
          <div className="mt-1 flex w-full items-center justify-center px-10">
            <button className="rounded-xl bg-[#46CC02] px-4 py-2 text-2xl font-extrabold text-white">
              GET STARTED
            </button>
          </div>
        </div>
      </div>
      <div className="relative mx-auto mt-10 w-full max-w-[1300px] overflow-visible bg-white">
        <div className="flex items-start justify-between px-3">
          <div className="max-w-[900px]">
            <h2 className="mb-8 font-inter text-[50px] font-bold leading-[60px] text-[#15549A]">
              At EzeCredit Repair, Transparency and Results Are Our Priority
            </h2>
            <p className="w-[740px] font-inter text-[22px] font-normal leading-[32px] text-[#173455]">
              We don't believe in confusing monthly plans or piling on extra fees. Instead, we
              provide every client with the same dedicated approach and unwavering effort. Our team
              works quickly and efficiently to deliver tangible improvements to your credit score
              without unnecessary delays. With EzeCredit Repair, there are no hidden costs just real
              results you can trust.
            </p>
          </div>
          <div className="relative h-[485px] w-[304px]">
            <img
              src="/src/components/asset/pricing-boi-with-transparency.svg"
              alt="Pricing Representative"
              className="absolute -top-16 right-0 h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
      <CreditServices />
      {/* <CreditRepairProcess /> */}
      <LastHeading />
      <Footer />
    </div>
  );
}

function LastHeading() {
  return (
    <div className="-mb-8 flex w-full items-center justify-center bg-[#46CC02] font-inter font-bold">
      <div className="mx-20 my-16">
        <div className="heading-9 px-56 text-center text-3xl text-white">
          With our fast and efficient process, we guarantee <br /> results and a clearer path to
          financial freedom.
        </div>
      </div>
    </div>
  );
}

function CreditRepairProcess() {
  const steps = [
    {
      title: 'Credit Assessment & Target Identification',
      description: [
        'We begin by pulling your credit report from all three major bureaus—TransUnion, Experian, and Equifax.',
        'Our experts conduct a comprehensive assessment to identify all negative and derogatory items impacting your score.',
        'These identified issues are detailed in our service agreement, ensuring transparency and clarity on the items we will target for removal.',
        'We also provide your current FICO and Vantage Score as part of this report.',
      ],
    },
    {
      title: 'Item Removal Process',
      description: [
        'Once the service agreement is finalized, we go to work on removing the negative items.',
        'We focus on inaccuracies, unverified information, late payments, collections, and other derogatory items listed in your agreement.',
        'We handle all disputes and interventions with the bureaus and creditors to ensure your credit report is cleaned up as quickly as possible.',
      ],
    },
    {
      title: 'Timely Progress Updates',
      description: [
        'Throughout the process, you’ll receive timely updates as each negative item is removed from your credit profile.',
        'Our member dashboard allows you to track real-time progress and view the improvements on all three credit reports.',
      ],
    },
    {
      title: 'Post-Cleanup Score Boost Options',
      description: [
        'Once all targeted items are removed, we’ll provide options to help boost your score further.',
        'This may include credit line recommendations, secured credit cards, or other strategies to help you reach your desired FICO score range.',
      ],
    },
    {
      title: 'Ongoing Monitoring & Maintenance',
      description: [
        'To ensure long-term success, we offer ongoing credit monitoring services.',
        'We’ll track your credit score improvements, helping you maintain a strong credit standing.',
      ],
    },
  ];

  return (
    <div className="mx-28 my-10">
      <p className="mb-8 text-center text-5xl font-normal leading-[60px] text-[#15549A]">
        EzeCredit Repair Service Recap
      </p>
      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="rounded-b-2xl bg-[#ECF6FF]">
            <div className="flex w-full items-center justify-start space-x-5 bg-[#15549A] px-2 py-2 font-inter text-3xl leading-9">
              <div className="rounded-tl-[30px] bg-white px-3 py-2 font-bold text-[#15549A]">
                Step {index + 1}
              </div>
              <div className="font-normal text-white">{step.title}</div>
            </div>
            <div className="px-10 py-5">
              <ul className="list-none space-y-3">
                {step.description.map((desc, idx) => (
                  <li key={idx} className="flex h-full items-start text-lg text-[#555]">
                    <img
                      src={pricingPageCircleBlue}
                      alt="Bullet"
                      width={47}
                      height={47}
                      className="mr-2"
                    />
                    <img
                      src={pricingPageAero}
                      alt="Arrow"
                      width={22}
                      height={27}
                      className="absolute ml-3.5 mt-3"
                    />
                    <div className="flex h-full w-full items-center text-2xl leading-7 text-[#1C2228] lg:mt-2">
                      {desc}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
