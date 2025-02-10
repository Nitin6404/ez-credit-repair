import { Link } from 'react-router-dom';
import register from '../components/asset/step-1-register.svg';
import AboutUs from '../components/asset/AboutUsbackground.png';
import audit from '../components/asset/step-2-audit.svg';
import dispute from '../components/asset/step-3-dispute.svg';
import boost from '../components/asset/step-4-boost.svg';
import { ArrowRight } from 'lucide-react';
import horizontalLine from '../components/asset/how-it-work-horizontal-rule.svg';

export function HowItWorks() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative mt-3 p-2">
        <img
          src={AboutUs}
          alt="About Us Background"
          className="absolute inset-0 mt-[30px] h-full w-full object-cover opacity-100"
        />
        <div className="relative flex h-[130px] items-center p-2 text-white">
          <div className="ml-5 mt-[50px] flex max-w-screen-lg font-inter text-lg font-bold leading-7 sm:ml-[80px] sm:text-2xl">
            <span className="ml-3 sm:ml-10">
              <Link to="/">Home</Link>
            </span>
            <span className="mx-1">|</span>
            <span>How It Works</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative mx-auto w-full max-w-screen-xl px-4 py-8">
        {/* Step One */}
        <div className="relative mb-16 mt-10 flex w-full flex-col items-center sm:mt-20 sm:flex-row sm:items-start">
          <div className="w-full pr-0 sm:w-1/2 sm:pr-8">
            <h2 className="font-inter text-xl sm:text-2xl">
              <span className="block text-[30px] font-extrabold text-[#04080C] sm:text-[41px]">
                STEP ONE
              </span>
              <span className="mt-2 block text-3xl font-bold text-[#40BA0C] sm:text-5xl">
                Register
              </span>
            </h2>
            <p className="my-4 text-[18px] font-semibold text-[#04080C] sm:my-6 sm:text-[22px]">
              Getting started is simple! Just complete our easy signup form, then use the provided
              link to access your free credit report and upload your most current credit report to
              establish baseline and identification in our system.
            </p>
            <button className="flex items-center gap-x-3 rounded-full border-[3px] border-[#04284F] bg-white px-5 py-2 text-[#04284F] transition-colors sm:px-6">
              <p className="font-inter text-lg font-bold">Get Started</p>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#04284F]">
                <ArrowRight strokeWidth={2} stroke="#FFFFFF" size={20} className="ml-1" />
              </div>
            </button>
          </div>
          <div className="mt-6 flex w-full justify-center sm:mt-0 sm:w-1/2">
            <img
              src={register}
              width={320}
              height={260}
              alt="Registration Form"
              className="w-full max-w-sm sm:max-w-md"
            />
          </div>
        </div>

        <img src={horizontalLine} alt="Horizontal Line" className="hidden w-full sm:block" />

        {/* Step Two */}
        <div className="relative mb-16 mt-10 flex w-full flex-col items-center sm:mt-20 sm:flex-row sm:items-start">
          <div className="w-full pr-0 sm:w-1/2 sm:pr-8">
            <h2 className="font-inter text-xl sm:text-2xl">
              <span className="block text-[30px] font-extrabold text-[#04080C] sm:text-[41px]">
                STEP TWO
              </span>
              <span className="mt-2 block text-3xl font-bold text-[#40BA0C] sm:text-5xl">
                Audit & Assessment
              </span>
            </h2>
            <p className="my-4 text-[18px] font-semibold text-[#04080C] sm:my-6 sm:text-[22px]">
              We will conduct a line-by-line review and assessment of your credit report, document a
              targeted list of items for disputes and areas for improvement, and present the
              identified dispute candidates for your review.
            </p>
          </div>
          <div className="mt-6 flex w-full justify-center sm:mt-0 sm:w-1/2">
            <img
              src={audit}
              width={320}
              height={260}
              alt="Audit Process"
              className="w-full max-w-sm sm:max-w-md"
            />
          </div>
        </div>

        <img src={horizontalLine} alt="Horizontal Line" className="hidden w-full sm:block" />

        {/* Step Three */}
        <div className="relative mb-16 mt-10 flex w-full flex-col items-center sm:mt-20 sm:flex-row sm:items-start">
          <div className="w-full pr-0 sm:w-1/2 sm:pr-8">
            <h2 className="font-inter text-xl sm:text-2xl">
              <span className="block text-[30px] font-extrabold text-[#04080C] sm:text-[41px]">
                STEP THREE
              </span>
              <span className="mt-2 block text-3xl font-bold text-[#40BA0C] sm:text-5xl">
                The Dispute Process
              </span>
            </h2>
            <p className="my-4 text-[18px] font-semibold text-[#04080C] sm:my-6 sm:text-[22px]">
              We will handle the process of challenging inaccurate and questionable items on your
              credit report directly with the credit bureaus. If any items remain uncorrected, we
              will automatically send customized re-disputes tailored to maximize the likelihood of
              achieving the desired outcome.
            </p>
          </div>
          <div className="mt-6 flex w-full justify-center sm:mt-0 sm:w-1/2">
            <img
              src={dispute}
              width={320}
              height={260}
              alt="Dispute Process"
              className="w-full max-w-sm sm:max-w-md"
            />
          </div>
        </div>

        <img src={horizontalLine} alt="Horizontal Line" className="hidden w-full sm:block" />

        {/* Step Four */}
        <div className="relative mb-16 mt-10 flex w-full flex-col items-center sm:mt-20 sm:flex-row sm:items-start">
          <div className="w-full pr-0 sm:w-1/2 sm:pr-8">
            <h2 className="font-inter text-xl sm:text-2xl">
              <span className="block text-[30px] font-extrabold text-[#04080C] sm:text-[41px]">
                STEP FOUR
              </span>
              <span className="mt-2 block text-3xl font-bold text-[#40BA0C] sm:text-5xl">
                Boost Your Score
              </span>
            </h2>
            <p className="my-4 text-[18px] font-semibold text-[#04080C] sm:my-6 sm:text-[22px]">
              Enjoy the most user-friendly customer interface in the industry; track your progress,
              update personal and billing information, upload documents, communicate with us, and
              even pause your membership if you need a break.
            </p>
          </div>
          <div className="mt-6 flex w-full justify-center sm:mt-0 sm:w-1/2">
            <img
              src={boost}
              width={320}
              height={260}
              alt="Boost Score"
              className="w-full max-w-sm sm:max-w-md"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="mx-auto mt-20 flex h-auto w-full max-w-[1368px] flex-col items-center justify-center rounded-3xl bg-[url('/src/components/asset/how-it-work-take-action.svg')] bg-cover bg-center px-4 py-8 sm:mt-32 sm:h-[323px] sm:px-8 sm:py-0">
          <div className="text-center font-inter">
            <h3 className="text-2xl font-bold text-white sm:text-[45px]">
              Are you ready to take action?
            </h3>
            <p className="mb-5 text-xl font-bold text-white sm:text-[41px]">
              We are ready to help.
            </p>
          </div>
          <button className="rounded-2xl bg-[#46CC02] px-5 py-2 text-xl font-bold text-white sm:text-[28px]">
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
}
