import AboutUs from '../asset/AboutUsbackground.png';
import credit from '../asset/Rectangle.png';
import credit2 from '../asset/Rectangle1.png';
import credit4 from '../asset/Rectangle2.png';
import credit3 from '../asset/Rectangle4.png';
import { FaqAbout } from '../common/FAQSection';
import { Testimonial } from '../common/Testimonial';

// Program cards data
const programCards = [
  {
    number: '1',
    title: 'Credit Report Analysis',
    image: credit,
    description: 'Establish a plan to identify roadblocks and inaccuracies impacting your score',
  },
  {
    number: '2',
    title: 'Dispute & Escalations',
    image: credit2,
    description: 'Challenge and Dispute negative items until they are removed',
  },
  {
    number: '3',
    title: 'Credit Recovery',
    image: credit3,
    nestedImage: credit4,
    description: 'Take action to boost your credit score to reach your desired score range',
  },
];

// Header component with navigation
function AboutHeader() {
  return (
    <div className="relative mt-3 p-2">
      <img
        src={AboutUs}
        alt="About Us Background"
        className="absolute inset-0 mt-[30px] h-full w-full object-cover opacity-100"
      />
      <div className="relative flex h-[130px] items-center p-2 text-white">
        <div className="ml-[80px] mt-[50px] flex max-w-screen-lg font-inter text-2xl font-bold leading-7">
          <span className="ml-10">Home</span>
          <span className="mx-1">|</span>
          <span>About Us</span>
        </div>
      </div>
    </div>
  );
}

// Introduction section component
function IntroSection() {
  return (
    <div className="mt-[80px] flex w-[1300px] flex-col items-center justify-center text-center">
      <p className="w-full font-inter text-[22px] font-normal leading-7 text-[#434343]">
        For the past 15 years, we've been dedicated to helping thousands of individuals repair their
        credit and reclaim{' '}
        <div>
          financial control. At EzeCredit, we fight for every consumer's right to an accurate, fair,
          and substantiated credit report.
        </div>
      </p>
      <h2 className="mt-[50px] font-inter text-[50px] font-bold leading-[60px] text-[#15549A]">
        Our Program
      </h2>
      <p className="mt-2 font-inter text-[29px] font-bold leading-[35px] text-[#4B4B4B]">
        Progressive Corrective & Recovery Plan
      </p>
    </div>
  );
}

// Single program card component
function ProgramCard({ number, title, image, description, nestedImage }) {
  return (
    <div className="mb-4 hover:shadow-lg">
      {/* Header */}
      <div className="h-[56.48px] w-[407px] bg-[#46CC02] text-white">
        <div className="flex items-center p-2">
          <div className="mr-3 flex h-11 w-11 items-center justify-center rounded-lg bg-white font-montserrat text-[25px] font-bold leading-[30px] text-[#15549A]">
            {number.padStart(2, '0')}
          </div>
          <h3 className="font-montserrat text-[25px] font-bold leading-[30px]">{title}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="flex h-[150px] items-center justify-center rounded-b-lg bg-[#ECF6FF] p-3 text-[#9A9A9A] transition-colors hover:bg-[#15549A] hover:text-white">
        <div className="relative mr-[20px] inline-block">
          <img src={image} alt={`${title} Icon`} className="inline-block" />
          {nestedImage && (
            <img
              src={nestedImage}
              alt="Nested Icon"
              className="absolute left-[3px] top-[20px] ml-[10px] h-[40px] w-[40px]"
            />
          )}
        </div>
        <p className="font-montserrat text-[20px] font-bold leading-[25px]">{description}</p>
      </div>
    </div>
  );
}

// Program section with cards and details
function ProgramSection() {
  return (
    <div className="mt-12 flex w-[1300px] gap-8">
      {/* Left side - Program Cards */}
      <div className="flex w-[407px] flex-col">
        {programCards.map(card => (
          <ProgramCard key={card.number} {...card} />
        ))}
      </div>

      {/* Right side - Details with Image */}
      <div className="flex-1">
        <div className="relative h-[672px] w-[837px] overflow-hidden rounded-lg">
          {/* Background Image */}
          <img
            src="/src/components/asset/dispute-bg.svg"
            alt="Dispute Process Background"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* Content Overlay */}
          <div className="relative z-10 pl-8 pt-3">
            {/* Top Image */}
            <img
              src="/src/components/asset/dispute.svg"
              alt="Dispute Process"
              className="h-[292px] w-[795px] object-cover"
            />
            <div className="pt-3">
              <h4 className="mb-6 font-inter text-[27px] font-bold leading-[32px] text-[#07284F]">
                Dispute & Escalation
              </h4>
              <p className="max-w-[600px] font-inter text-[22px] font-normal leading-[30px] text-[#173455]">
                We start by assessing your current credit situation and identifying the roadblocks
                impacting your score. Each case is unique, but we specialize in spotting
                inaccuracies and other factors that should not be in your report damaging to credit
                reputation. Together, we'll map out a plan to a better credit score.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main About component
export function About() {
  return (
    <div>
      <AboutHeader />
      <div className="mx-16 flex flex-col items-center justify-center bg-white">
        <IntroSection />
        <ProgramSection />
      </div>
      <FaqAbout />
      <Testimonial />
    </div>
  );
}
