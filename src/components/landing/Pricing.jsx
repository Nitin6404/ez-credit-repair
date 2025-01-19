import AboutUs from '../asset/AboutUsbackground.png';
import { Footer } from '../common/Footer';
import { CreditServices } from '../common/CreditServices';
import pricingPageAero from '../asset/pricingPageAero.svg';
import pricingPageCircleBlue from '../asset/pricingPageCircleBlue.svg';

export function Pricing() {
  return (
    <div className="w-full flex flex-col">
      <div className="relative p-2 mt-3">
        {/* Background Image */}
        <img
          src={AboutUs}
          alt="About Us Background"
          className="absolute inset-0 w-full h-full object-cover opacity-100 mt-[30px]"
        />

        {/* Inner Div with Background Image */}
        <div className="relative text-white p-2 items-center flex h-[130px]">
          <div className="flex max-w-screen-lg ml-[80px] mt-[50px] font-inter font-bold text-2xl leading-7">
            <span className="ml-10">Home</span>
            <span className="mx-1">|</span>
            <span>Pricing</span>
          </div>
        </div>
      </div>
      <div className="mx-16 mt-20 mb-10 flex justify-center text-center">
        <div className="font-inter font-semibold text-start text-2xl text-[#173455] leading-7">
          At EzeCredit, we believe in transparency and results. We don’t nickel and dime you with
          monthly fees for our services. Instead, we offer a straightforward, fixed price of $799
          for the complete credit repair process. We work fast and efficiently to deliver real
          improvements to your credit score without dragging out the process. No hidden costs, just
          results you can count on.
        </div>
      </div>
      <div className="w-full h-[535px] flex justify-center items-center bg-[url('/src/components/asset/pricingBg.svg')]">
        <div className="flex flex-col items-center font-inter text-center">
          <div className="w-full leading-[55px] font-bold text-white text-[40px]">
            <p>Would you like to market our</p>
            <p>credit repair service?</p>
          </div>
          <div className="my-4">
            <div className="font-normal text-3xl text-white leading-9">
              Find a solution that works for you
            </div>
          </div>
          <div className="w-full mt-4 px-10 flex justify-center items-center">
            <button className="px-4 py-2 bg-[#46CC02] font-extrabold text-2xl text-white rounded-xl ">
              GET STARTED
            </button>
          </div>
          <div className="py-3 mt-2">
            <div className="font-normal text-xl text-white leading-6">or sign up online »</div>
          </div>
        </div>
      </div>
      <div className="mx-16 my-10 flex justify-center items-center">
        <div className="flex flex-col font-inter text-start font-bold">
          <div className="text-5xl text-[#15549A] leading-[60px] ">
            Additional Services for Fast Credit Score Boost
          </div>
          <div className="text-3xl leading-8 text-[#07284F]">
            Once your credit is repaired, we offer additional services to help you quickly elevate
            your score even further
          </div>
          <div className="font-semibold text-[#173455] text-2xl leading-7 mt-3">
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
    <div className="w-full -mb-8 bg-[#46CC02] flex justify-center items-center font-inter font-bold">
      <div className="mx-20 my-16">
        <div className=" px-56 text-white text-3xl text-center lLastHeadingeading-9 ">
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
      <p className="text-5xl text-[#15549A] leading-[60px] font-normal text-center mb-8">
        EzeCredit Repair Service Recap
      </p>
      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="bg-[#ECF6FF] rounded-b-2xl">
            <div className="w-full bg-[#15549A] flex justify-start items-center space-x-5 font-inter text-3xl leading-9 py-2 px-2">
              <div className="bg-white font-bold text-[#15549A] py-2 px-3  rounded-tl-[30px]">
                Step {index + 1}
              </div>
              <div className="font-normal text-white">{step.title}</div>
            </div>
            <div className="px-10 py-5">
              <ul className="list-none space-y-3">
                {step.description.map((desc, idx) => (
                  <li key={idx} className="h-full flex items-start text-lg text-[#555]">
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
                      className="ml-3.5 mt-3 absolute"
                    />
                    <div className="w-full h-full flex items-center lg:mt-2 text-2xl text-[#1C2228] leading-7">
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
