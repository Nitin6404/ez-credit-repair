import AboutUs from '../components/asset/AboutUsbackground.png';
import credit from '../components/asset/Rectangle.png';
import credit2 from '../components/asset/Rectangle1.png';
import credit4 from '../components/asset/Rectangle2.png';
import credit3 from '../components/asset/Rectangle4.png';
import dispute from '../components/asset/dispute.svg';
import disputeBg from '../components/asset/dispute-bg.svg';
import { FaqAbout } from '../components/common/FAQSection';
import { Testimonial } from '../components/common/Testimonial';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// Program cards data
const programCards = [
  {
    number: '1',
    title: 'Credit Report Analysis',
    image: credit,
    description: 'Establish a plan to identify roadblocks and inaccuracies impacting your score',
    details:
      'We begin by evaluating your current credit situation and identifying the obstacles affecting your score. To ensure nothing is overlooked, we obtain your credit reports from all three major bureaus. Each case is unique, but our expertise lies in detecting inaccuracies and other harmful factors that shouldn’t be on your report. Together, well create a customized plan to improve your credit score.',
  },
  {
    number: '2',
    title: 'Dispute & Escalations',
    image: credit2,
    description: 'Challenge and Dispute negative items until they are removed',
    details:
      'Like the A-Team, we will be your advocates, challenging inaccuracies and disputing negative items until they are removed. Our EzeCredit experts understand your rights and are dedicated to eliminating incorrect information, Inquiries, late payments, collections, and other factors that unfairly impact your score.',
  },
  {
    number: '3',
    title: 'Credit Recovery',
    image: credit3,
    nestedImage: credit4,
    description: 'Take action to boost your credit score to reach your desired score range',
    details:
      'Derogatory information will prevent your score from going up. However, after we remove the negatives, more may be needed to build your score to be able to utilize your credit to its full potential. We then create a path to get you beyond the 700 range which will impact to the level needed Removing all of the derogatory will only get us half way there.',
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
        <div className="ml-5 mt-[50px] flex max-w-screen-lg font-inter text-lg font-bold leading-7 sm:ml-[80px] sm:text-2xl">
          <span className="ml-3 sm:ml-10">
            <Link to="/">Home</Link>
          </span>
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
    <div className="mt-[80px] flex w-full max-w-[1300px] flex-col items-center justify-center px-4 text-center">
      <p className="w-full text-start font-inter text-[22px] font-normal leading-7 text-[#434343]">
        For the past 15 years, we've been dedicated to helping thousands of individuals repair their
        credit and reclaim financial control. At EzeCredit, we fight for every consumer's right to
        an accurate, fair, and substantiated credit report.
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
function ProgramCard({ number, title, image, description, nestedImage, isActive, onClick }) {
  return (
    <div className="mb-6 cursor-pointer hover:shadow-lg" onClick={onClick}>
      {/* Header */}
      <div className="h-[56.48px] w-full max-w-[430px] bg-[#46CC02] text-white">
        <div className="flex items-center">
          <div className="ml-2 mr-3 mt-2 flex h-11 w-11 items-center justify-center rounded-lg bg-white font-montserrat text-[25px] font-bold leading-[30px] text-[#15549A]">
            {number.padStart(2, '0')}
          </div>
          <h3 className="font-montserrat text-[21px] font-bold leading-[30px]">{title}</h3>
        </div>
      </div>

      {/* Content */}
      <div
        className={`flex h-[150px] items-center justify-center rounded-b-lg p-3 transition-colors ${
          isActive ? 'bg-[#15549A] text-white' : 'bg-[#ECF6FF] text-[#9A9A9A]'
        }`}
      >
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
  const [selectedCard, setSelectedCard] = useState(programCards[1]); // Default active card

  return (
    <div className="mt-12 flex w-full max-w-[1300px] flex-col gap-8 px-4 lg:flex-row">
      {/* Left side - Program Cards */}
      <div className="flex w-full flex-col lg:w-[407px]">
        {programCards.map(card => (
          <ProgramCard
            key={card.number}
            isActive={selectedCard.number === card.number}
            onClick={() => setSelectedCard(card)}
            {...card}
          />
        ))}
      </div>

      {/* Right side - Details with Image */}
      <div className="flex-1">
        <div className="relative h-[672px] w-full max-w-[837px] overflow-hidden md:w-[837px]">
          <img
            src={disputeBg}
            alt="Dispute Process Background"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative z-10 pl-8 pt-3 md:pl-8 md:pt-4">
            <img
              src={dispute}
              alt="Dispute Process"
              className="h-[292px] w-full object-cover md:w-[795px]"
            />
            <div className="pt-3">
              <h4 className="mb-6 font-inter text-[27px] font-bold leading-[32px] text-[#07284F]">
                {selectedCard.title}
              </h4>
              <p className="m-3 mb-3 max-w-[600px] font-inter text-[22px] font-normal leading-[30px] text-[#173455]">
                {selectedCard.details}
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
      <div className="mx-4 flex flex-col items-center justify-center bg-white lg:mx-16">
        <IntroSection />
        <ProgramSection />
      </div>
      <FaqAbout />
      <Testimonial />
    </div>
  );
}
