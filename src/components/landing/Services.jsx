import AboutUs from '../asset/AboutUsbackground.png';
import creditReportAnalysisServices from '../asset/creditReportAnalysisServices.svg';
import Rectangle10 from '../asset/Rectangle10.png';

export function Services() {
  return (
    <div>
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
            <span>Our Services</span>
          </div>
        </div>
      </div>
      <div className="my-8 flex w-full flex-col items-start justify-evenly -space-x-12 overflow-hidden bg-white pt-10 md:flex-row">
        {/* Left Column - Services List */}
        <div className="mb-4 w-[410px] md:mb-0">
          <h2 className="mb-4 font-inter text-[50px] font-bold leading-[60px] text-[#15549A]">
            Our Services
          </h2>
          <div className="space-y-2">
            <div className="flex items-center rounded bg-[#46CC02] p-4 text-white">
              <span className="mr-3 flex h-11 w-11 items-center justify-center rounded-lg bg-white font-montserrat text-2xl font-bold leading-8 text-[#15549A]">
                01
              </span>
              <span className="font-montserrat text-2xl font-bold leading-7">
                Credit Report Analysis
              </span>
            </div>
            <div className="flex items-center rounded bg-[#46CC02] p-4 text-white">
              <span className="mr-3 flex h-11 w-11 items-center justify-center rounded-lg bg-white font-montserrat text-2xl font-bold leading-8 text-[#15549A]">
                02
              </span>
              <span className="font-montserrat text-2xl font-bold leading-7">
                Dispute & Escalations
              </span>
            </div>
            <div className="flex items-center rounded bg-[#46CC02] p-4 text-white">
              <span className="mr-3 flex h-11 w-11 items-center justify-center rounded-lg bg-white font-montserrat text-2xl font-bold leading-8 text-[#15549A]">
                03
              </span>
              <span className="font-montserrat text-2xl font-bold leading-7">Credit Recovery</span>
            </div>
          </div>
        </div>

        {/* Right Column - Image and Description */}
        <div className="h-[560px] w-[812px] border bg-[#F3F3F3] p-2">
          <img
            src={creditReportAnalysisServices}
            alt="Credit Report Analysis"
            className="mb-4 h-auto rounded bg-black shadow-md"
          />
          <div className="w-[795px]">
            <h3 className="mb-2 font-montserrat text-2xl font-bold leading-8 text-[#15549A]">
              Credit Report Analysis
            </h3>
            <p className="font-inter text-2xl font-medium leading-7 text-[#173455]">
              We start by assessing your current credit situation and identifying the roadblocks
              impacting your score. Each case is unique, but we specialize in spotting inaccuracies
              and other factors that should not be in your report damaging to credit reputation.
              Together, we’ll map out a plan to a better credit score.
            </p>
          </div>
        </div>
      </div>
      <div className="mb-2 mt-[100px] flex h-[565px] min-h-[400px] w-full items-center justify-evenly bg-[url('/src/components/asset/betterCreditsAwaitServices.svg')] p-6 px-24">
        {/* Right Side Image */}
        <div className="flex w-1/2 items-center justify-center">
          <img src={Rectangle10} alt="Placeholder" className="h-auto w-full rounded" />
        </div>
        {/* Left Side Text */}
        <div className="flex w-1/2 flex-col items-center font-inter">
          <div className="mb-4 w-full pl-10 text-[40px] font-bold leading-[55px] text-white">
            <p>Better credits awaits,</p>
            <p className="w-full">and it's easir than you think.</p>
          </div>

          <div className="w-full justify-start px-10">
            <button className="mt-5 rounded-xl bg-[#46CC02] px-4 py-2 text-2xl font-extrabold text-white">
              SIGN UP NOW
            </button>
          </div>
        </div>
      </div>
      <Testinomial />
    </div>
  );
}
