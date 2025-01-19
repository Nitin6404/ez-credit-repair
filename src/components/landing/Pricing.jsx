import AboutUs from '../asset/AboutUsbackground.png';
import { Footer } from '../common/Footer';
import { CreditServices } from '../common/CreditServices';
import pricingPageAero from '../asset/pricingPageAero.svg';
import pricingPageCircleBlue from '../asset/pricingPageCircleBlue.svg';

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
        <div className="text-start font-inter text-2xl font-semibold leading-7 text-[#173455]">
          At EzeCredit, we believe in transparency and results. We don’t nickel and dime you with
          monthly fees for our services. Instead, we offer a straightforward, fixed price of $799
          for the complete credit repair process. We work fast and efficiently to deliver real
          improvements to your credit score without dragging out the process. No hidden costs, just
          results you can count on.
        </div>
      </div>
      <div className="flex h-[535px] w-full items-center justify-center bg-[url('/src/components/asset/pricingBg.svg')]">
        <div className="flex flex-col items-center text-center font-inter">
          <div className="w-full text-[40px] font-bold leading-[55px] text-white">
            <p>Would you like to market our</p>
            <p>credit repair service?</p>
          </div>
          <div className="my-4">
            <div className="text-3xl font-normal leading-9 text-white">
              Find a solution that works for you
            </div>
          </div>
          <div className="mt-4 flex w-full items-center justify-center px-10">
            <button className="rounded-xl bg-[#46CC02] px-4 py-2 text-2xl font-extrabold text-white">
              GET STARTED
            </button>
          </div>
          <div className="mt-2 py-3">
            <div className="text-xl font-normal leading-6 text-white">or sign up online »</div>
          </div>
        </div>
      </div>
      <div className="mx-16 my-10 flex items-center justify-center">
        <div className="flex flex-col text-start font-inter font-bold">
          <div className="text-5xl leading-[60px] text-[#15549A]">
            Additional Services for Fast Credit Score Boost
          </div>
          <div className="text-3xl leading-8 text-[#07284F]">
            Once your credit is repaired, we offer additional services to help you quickly elevate
            your score even further
          </div>
          <div className="mt-3 text-2xl font-semibold leading-7 text-[#173455]">
            We start by assessing your current credit situation and identify the roadblocks
            impacting your score. Each case is unique, but we specialize in spotting inaccuracies
            and other factors that should not be in your report damaging to credit reputation.
            Together, we’ll map out a plan to a better credit score.
          </div>
        </div>
      </div>
      <CreditServices />
      <CreditRepairProcess />
      <LastHeading />
      <Footer />
    </div>
  );
}

function LastHeading() {
  return (
    <div className="-mb-8 flex w-full items-center justify-center bg-[#46CC02] font-inter font-bold">
      <div className="mx-20 my-16">
        <div className="lLastHeadingeading-9 px-56 text-center text-3xl text-white">
          With our fast and efficient process, we guarantee results and a clearer path to financial
          freedom.
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
