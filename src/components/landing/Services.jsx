import { Footer } from "../common/Footer";
import { Testinomial } from "../common/Testinomial";
import AboutUs from "../asset/AboutUsbackground.png";
import creditReportAnalysisServices from "../asset/creditReportAnalysisServices.svg";
import Rectangle10 from "../asset/Rectangle10.png";

export function Service() {
  return (
    <div>
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
            <span>Our Services</span>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-start justify-evenly pt-10 my-8 bg-white overflow-hidden -space-x-12">
        {/* Left Column - Services List */}
        <div className="mb-4 md:mb-0 w-[410px]">
          <h2 className="text-[50px] font-bold font-inter mb-4 text-[#15549A] leading-[60px]">
            Our Services
          </h2>
          <div className="space-y-2">
            <div className="flex items-center p-4 bg-[#46CC02] text-white rounded">
              <span className="h-11 w-11 bg-white text-[#15549A] text-2xl leading-8 font-montserrat font-bold rounded-lg flex items-center justify-center mr-3">
                01
              </span>
              <span className="text-2xl leading-7 font-bold font-montserrat">
                Credit Report Analysis
              </span>
            </div>
            <div className="flex items-center p-4 bg-[#46CC02] text-white rounded">
              <span className="h-11 w-11 bg-white text-[#15549A] text-2xl leading-8 font-montserrat font-bold rounded-lg flex items-center justify-center mr-3">
                02
              </span>
              <span className="text-2xl leading-7 font-bold font-montserrat">
                Dispute & Escalations
              </span>
            </div>
            <div className="flex items-center p-4 bg-[#46CC02] text-white rounded">
              <span className="h-11 w-11 bg-white text-[#15549A] text-2xl leading-8 font-montserrat font-bold rounded-lg flex items-center justify-center mr-3">
                03
              </span>
              <span className="text-2xl leading-7 font-bold font-montserrat">
                Credit Recovery
              </span>
            </div>
          </div>
        </div>

        {/* Right Column - Image and Description */}
        <div className="w-[812px] h-[560px] border p-2 bg-[#F3F3F3]">
          <img
            src={creditReportAnalysisServices}
            alt="Credit Report Analysis"
            className="h-auto mb-4 rounded shadow-md bg-black"
          />
          <div className="w-[795px]">
            <h3 className="text-2xl leading-8 font-bold font-montserrat mb-2 text-[#15549A] ">
              Credit Report Analysis
            </h3>
            <p className="text-[#173455] text-2xl leading-7 font-inter font-medium ">
              We start by assessing your current credit situation and
              identifying the roadblocks impacting your score. Each case is
              unique, but we specialize in spotting inaccuracies and other
              factors that should not be in your report damaging to credit
              reputation. Together, we’ll map out a plan to a better credit
              score.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[565px] min-h-[400px] mt-[100px] mb-2 px-24 flex items-center justify-evenly p-6 bg-[url('/src/components/asset/betterCreditsAwaitServices.svg')]">
        {/* Right Side Image */}
        <div className="w-1/2 flex justify-center items-center">
          <img
            src={Rectangle10}
            alt="Placeholder"
            className="w-full h-auto rounded"
          />
        </div>
        {/* Left Side Text */}
        <div className="w-1/2 flex flex-col items-center font-inter">
          <div className="w-full pl-10 mb-4 leading-[55px] font-bold text-white text-[40px]">
            <p>Better credits awaits,</p>
            <p className="w-full">and it's easir than you think.</p>
          </div>

          <div className="w-full justify-start px-10">
            <button className="mt-5 px-4 py-2 bg-[#46CC02] font-extrabold text-2xl text-white rounded-xl ">
              SIGN UP NOW
            </button>
          </div>
        </div>
      </div>
      <Testinomial></Testinomial>
      <Footer></Footer>
    </div>
  );
}
