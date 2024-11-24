import AboutUs from "../asset/AboutUsbackground.png";
import { Footer } from "../common/Footer";
import CreditServices from "../common/CreditServices";

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
          At EzeCredit, we believe in transparency and results. We don’t nickel
          and dime you with monthly fees for our services. Instead, we offer a
          straightforward, fixed price of $799 for the complete credit repair
          process. We work fast and efficiently to deliver real improvements to
          your credit score without dragging out the process. No hidden costs,
          just results you can count on.
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
            <div className="font-normal text-xl text-white leading-6">
              or sign up online »
            </div>
          </div>
        </div>
      </div>
      <div className="mx-16 my-10 flex justify-center items-center">
        <div className="flex flex-col font-inter text-start font-bold">
          <div className="text-5xl text-[#15549A] leading-[60px] ">
            Additional Services for Fast Credit Score Boost
          </div>
          <div className="text-3xl leading-8 text-[#07284F]">
            Once your credit is repaired, we offer additional services to help
            you quickly elevate your score even further
          </div>
          <div className="font-semibold text-[#173455] text-2xl leading-7 mt-3">
            We start by assessing your current credit situation and identify the
            roadblocks impacting your score. Each case is unique, but we
            specialize in spotting inaccuracies and other factors that should
            not be in your report damaging to credit reputation. Together, we’ll
            map out a plan to a better credit score.
          </div>
        </div>
      </div>
      <CreditServices />
      <Footer />
    </div>
  );
}
