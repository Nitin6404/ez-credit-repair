import { useState } from 'react';
import comma from '../asset/comma.png';
import jack from '../asset/jack.svg';
import mathew from '../asset/mathew.svg';
import susan from '../asset/susan.svg';

const testimonials = [
  {
    image: jack,
    name: 'Jack D',
    date: 'August 28th, 2024 / Raleigh, NC',
    text: `I'm very pleased with the service I received from the A-Team, my credit was in terrible shape. Could not get a decent rate on anything. The transformation saved us thousands. I'm about to close on a house. The service is excellent and fast.`,
  },
  {
    image: mathew,
    name: 'Mathew S.',
    date: 'June 17, 2024 / Brooklyn, NY',
    text: `I'm very pleased with the service I received from the A-Team, my credit was in terrible shape. Could not get a decent rate on anything. The transformation saved us thousands. I'm about to close on a house. The service is excellent and fast.`,
  },
  {
    image: susan,
    name: 'Susan S.',
    date: 'July 10, 2024 / New York, NY',
    text: `I'm very pleased with the service I received from the A-Team, my credit was in terrible shape. Could not get a decent rate on anything. The transformation saved us thousands. I'm about to close on a house. The service is excellent and fast.`,
  },
];

// Component for the testimonial image and user info
function TestimonialProfile({ image, name, date, size = 'small' }) {
  const imageSize = size === 'large' ? { width: 184, height: 220 } : { width: 152, height: 165 };

  const mobileImageSize =
    size === 'large' ? { width: 120, height: 144 } : { width: 100, height: 120 };

  return (
    <div className="flex flex-col items-center justify-center space-y-1 font-inter text-[#292929]">
      <img
        src={image}
        alt={name}
        className="h-[120px] w-[100px] rounded-3xl border-[#B8B8B8] md:h-[165px] md:w-[152px] lg:h-[220px] lg:w-[184px]"
      />
      <p className="px-3 text-center font-inter text-[14px] font-normal leading-6 md:text-base lg:text-xl">
        {name}
      </p>
      <p className="text-center text-[8px] font-bold leading-3 md:text-[9px]">{date}</p>
    </div>
  );
}

// Component for the testimonial text with quotes
function TestimonialText({ text, size = 'small' }) {
  return (
    <div className="my-4 md:my-10">
      <div className="flex h-auto w-full flex-col items-center justify-center md:h-[120px] md:w-[170px] lg:h-[196px] lg:w-[251px]">
        <div className="flex w-full justify-start">
          <img src={comma} alt="Quote" className="mr-2 h-4 w-4 md:h-5 md:w-5 lg:h-8 lg:w-8" />
        </div>
        <p className="my-2 px-2 text-center font-inter text-[10px] font-bold leading-4 md:my-4 md:px-0 md:text-[11px] lg:text-sm">
          {text}
        </p>
        <div className="flex w-full justify-end">
          <img
            src={comma}
            alt="Quote"
            className="ml-2 h-4 w-4 rotate-180 md:h-5 md:w-5 lg:h-8 lg:w-8"
          />
        </div>
      </div>
    </div>
  );
}

// Component for a single testimonial card
function TestimonialCard({ testimonial, position = 'center' }) {
  const isCenter = position === 'center';

  return (
    <div
      className={` ${
        isCenter
          ? 'z-20 h-[400px] w-[300px] md:h-[465px] md:w-[471px] lg:h-[527px] lg:w-[543px]'
          : 'hidden h-[465px] w-[471px] md:flex'
      } ${position === 'left' ? 'md:absolute md:left-36' : ''} ${position === 'right' ? 'md:absolute md:right-36' : ''} flex scale-100 transform items-center justify-center border-[5px] border-[#002464] bg-[#E2E3E3] transition-all duration-300 md:scale-110 md:border-[10px]`}
      style={{ zIndex: isCenter ? 3 : 1 }}
    >
      <div className="flex flex-col justify-between space-y-2 p-2 md:flex-row md:space-x-5 md:space-y-0 md:p-0">
        <TestimonialProfile {...testimonial} size={isCenter ? 'large' : 'small'} />
        <TestimonialText text={testimonial.text} size={isCenter ? 'large' : 'small'} />
      </div>
    </div>
  );
}

// Navigation buttons component
function NavigationButtons({ onPrev, onNext }) {
  return (
    <div className="my-6 flex w-full justify-center gap-4 px-4 pt-4 md:my-10 md:justify-end md:gap-10 md:pr-20 md:pt-10">
      <button
        onClick={onPrev}
        className="rounded bg-[#15549A] px-4 py-2 text-sm font-semibold text-white shadow transition-all hover:bg-[#003977] md:px-6 md:py-3 md:text-base"
      >
        Previous
      </button>
      <button
        onClick={onNext}
        className="rounded bg-[#15549A] px-4 py-2 text-sm font-semibold text-white shadow transition-all hover:bg-[#003977] md:px-6 md:py-3 md:text-base"
      >
        Next
      </button>
    </div>
  );
}

export function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getTestimonialIndex = offset => {
    return (currentIndex + offset + testimonials.length) % testimonials.length;
  };

  const prevTestimonial = () => {
    setCurrentIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  };

  return (
    <div className="relative flex flex-col items-center bg-white py-6 md:py-10">
      {/* Header Section */}
      <div className="mb-4 px-4 text-center md:mb-5 md:px-0">
        <h2 className="mt-2 font-inter text-[32px] font-bold leading-[40px] text-[#15549A] md:mt-[-10px] md:text-[50px] md:leading-[60px]">
          What Our Customers Say?
        </h2>
      </div>

      {/* Background Container */}
      <div className="flex h-[200px] w-full justify-center bg-[#15549A] md:h-[283px]">
        <div className="mx-4 mt-8 h-[350px] w-full rounded-xl bg-white shadow-2xl md:mx-0 md:mt-16 md:h-[410px] md:w-[1300px] md:rounded-3xl" />
      </div>

      {/* Testimonials Section */}
      <div className="mx-4 -mt-[250px] flex w-full flex-col md:mx-12 md:-mt-32">
        <div className="relative flex w-full items-center justify-center">
          <TestimonialCard testimonial={testimonials[getTestimonialIndex(-1)]} position="left" />
          <TestimonialCard testimonial={testimonials[currentIndex]} position="center" />
          <TestimonialCard testimonial={testimonials[getTestimonialIndex(1)]} position="right" />
        </div>

        <NavigationButtons onPrev={prevTestimonial} onNext={nextTestimonial} />
      </div>
    </div>
  );
}
