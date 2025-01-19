import { useState } from 'react';
import comma from '../asset/comma.png';

const testimonials = [
  {
    image: '/src/components/asset/jack.svg',
    name: 'Jack D',
    date: 'August 28th, 2024 / Raleigh, NC',
    text: 'I’m very pleased with the service I received from the A-Team, my credit was in terrible shape. Could not get a decent rate on anything. The transformation saved us thousands. I’m about to close on a house. The service is excellent and fast.',
  },
  {
    image: '/src/components/asset/mathew.svg',
    name: 'Mathew S.',
    date: 'June 17, 2024 / Brooklyn, NY',
    text: 'I’m very pleased with the service I received from the A-Team, my credit was in terrible shape. Could not get a decent rate on anything. The transformation saved us thousands. I’m about to close on a house. The service is excellent and fast.',
  },
  {
    image: '/src/components/asset/susan.svg',
    name: 'Susan S.',
    date: 'July 10, 2024 / New York, NY',
    text: 'I’m very pleased with the service I received from the A-Team, my credit was in terrible shape. Could not get a decent rate on anything. The transformation saved us thousands. I’m about to close on a house. The service is excellent and fast.',
  },
];

// Component for the testimonial image and user info
function TestimonialProfile({ image, name, date, size = 'small' }) {
  const imageSize = size === 'large' ? { width: 184, height: 220 } : { width: 152, height: 165 };
  const nameSize = size === 'large' ? 'text-xl' : 'text-base';

  return (
    <div className="flex flex-col items-center justify-center space-y-1 font-inter text-[#292929]">
      <img src={image} alt={name} {...imageSize} className="rounded-3xl border-[#B8B8B8]" />
      <p className={`px-3 text-center font-inter ${nameSize} font-normal leading-6`}>{name}</p>
      <p className="text-center text-[9px] font-bold leading-3">{date}</p>
    </div>
  );
}

// Component for the testimonial text with quotes
function TestimonialText({ text, size = 'small' }) {
  const containerSize = size === 'large' ? 'h-[196px] w-[251px]' : 'h-[120px] w-[170px]';
  const quoteSize = size === 'large' ? 'h-8 w-8' : 'h-5 w-5';
  const textSize = size === 'large' ? 'text-sm' : 'text-[11px]';

  return (
    <div className="my-10">
      <div className={`flex ${containerSize} flex-col items-center justify-center`}>
        <div className="flex w-full justify-start">
          <img src={comma} alt="Quote" className={`mr-2 ${quoteSize}`} />
        </div>
        <p className={`my-4 text-center font-inter ${textSize} font-bold leading-4`}>{text}</p>
        <div className="flex w-full justify-end">
          <img src={comma} alt="Quote" className={`ml-2 ${quoteSize} rotate-180`} />
        </div>
      </div>
    </div>
  );
}

// Component for a single testimonial card
function TestimonialCard({ testimonial, position = 'center' }) {
  const isCenter = position === 'center';
  const dimensions = isCenter ? 'h-[527px] w-[543px] z-20' : 'h-[465px] w-[471px]';
  const positioning = {
    left: 'absolute left-36',
    center: '',
    right: 'absolute right-36',
  };

  return (
    <div
      className={`${dimensions} ${positioning[position]} flex scale-110 transform items-center justify-center border-[10px] border-[#002464] bg-[#E2E3E3] transition-all duration-300`}
      style={{ zIndex: isCenter ? 3 : 1 }}
    >
      <div className="flex justify-between space-x-5">
        <TestimonialProfile {...testimonial} size={isCenter ? 'large' : 'small'} />
        <TestimonialText text={testimonial.text} size={isCenter ? 'large' : 'small'} />
      </div>
    </div>
  );
}

// Navigation buttons component
function NavigationButtons({ onPrev, onNext }) {
  return (
    <div className="my-10 flex w-full justify-end gap-10 pr-20 pt-10">
      <button
        onClick={onPrev}
        className="rounded bg-[#15549A] px-6 py-3 font-semibold text-white shadow transition-all hover:bg-[#003977]"
      >
        Previous
      </button>
      <button
        onClick={onNext}
        className="rounded bg-[#15549A] px-6 py-3 font-semibold text-white shadow transition-all hover:bg-[#003977]"
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
    <div className="relative flex flex-col items-center bg-white py-10">
      {/* Header Section */}
      <div className="mb-5 text-center">
        <h2 className="mt-[-10px] font-inter text-[50px] font-bold leading-[60px] text-[#15549A]">
          What Our Customers Say?
        </h2>
      </div>

      {/* Background Container */}
      <div className="flex h-[283px] w-full justify-center bg-[#15549A]">
        <div className="mt-16 h-[410px] w-[1300px] rounded-3xl bg-white shadow-2xl" />
      </div>

      {/* Testimonials Section */}
      <div className="mx-12 -mt-32 flex w-full flex-col">
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
