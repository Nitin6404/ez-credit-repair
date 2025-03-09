import { useState } from 'react';
import comma from '../asset/comma.png';
import jack from '../asset/jack.svg';
import mathew from '../asset/mathew.svg';
import susan from '../asset/susan.svg';
import PropTypes from 'prop-types';

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

// Component for testimonial image and user info
function TestimonialProfile({ image, name, date, size }) {
  const isLarge = size === 'large';

  return (
    <div className="flex flex-col items-center justify-center space-y-1 font-inter text-[#292929]">
      <img
        src={image}
        alt={`${name}'s testimonial image`}
        className={`h-[120px] w-[100px] rounded-3xl border-[#B8B8B8] md:h-[165px] md:w-[152px] ${isLarge ? 'lg:h-[200px] lg:w-[164px]' : 'lg:h-[150px] lg:w-[110px]'} `}
      />
      <p
        className={`px-3 text-center font-inter text-[14px] font-normal leading-6 md:text-base ${isLarge ? 'lg:text-xl' : 'lg:text-lg'}`}
      >
        {name}
      </p>
      <p
        className={`text-center ${isLarge ? 'text-[8px]' : 'text-[4px]'} font-bold leading-3 md:text-[9px]`}
      >
        {date}
      </p>
    </div>
  );
}

TestimonialProfile.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'large']),
};

// Component for testimonial text with quotes
function TestimonialText({ text, size }) {
  const isLarge = size === 'large';

  return (
    <div className="my-4 md:my-10">
      <div className="flex h-auto w-full flex-col items-center justify-center md:h-[120px] md:w-[170px] lg:h-[196px] lg:w-[251px]">
        <div className="flex w-full justify-start">
          <img
            src={comma}
            alt="Opening quote"
            className={`mr-2 h-4 w-4 md:h-5 md:w-5 ${isLarge ? 'lg:h-8 lg:w-8' : 'lg:h-6 lg:w-6'}`}
          />
        </div>
        <p
          className={`my-2 px-2 text-center font-inter text-[10px] font-bold leading-4 md:my-4 md:px-0 md:text-[11px] ${isLarge ? 'lg:text-sm' : 'lg:text-[12px]'}`}
        >
          {text}
        </p>
        <div className="flex w-full justify-end">
          <img
            src={comma}
            alt="Closing quote"
            className={`ml-2 h-4 w-4 rotate-180 md:h-5 md:w-5 ${isLarge ? 'lg:h-8 lg:w-8' : 'lg:h-6 lg:w-6'}`}
          />
        </div>
      </div>
    </div>
  );
}

TestimonialText.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'large']),
};

// Component for a single testimonial card
// In TestimonialCard component, add onClick prop
function TestimonialCard({ testimonial, position = 'center', onClick }) {
  const isCenter = position === 'center';
  let size = 'large';
  if (position !== 'center') {
    size = 'small';
  }

  return (
    <div
      onClick={onClick}
      className={`${
        isCenter
          ? 'z-20 h-[400px] w-[300px] md:h-[465px] md:w-[471px] lg:h-[527px] lg:w-[543px]'
          : 'hidden h-[465px] w-[471px] cursor-pointer hover:scale-105 md:flex'
      } ${position === 'left' ? 'md:absolute md:left-48' : ''} ${position === 'right' ? 'md:absolute md:right-48' : ''} flex items-center justify-center border-[5px] border-[#002464] bg-[#E2E3E3] transition-all duration-300 md:scale-110 md:border-[10px]`}
      style={{ zIndex: isCenter ? 3 : 1 }}
    >
      <div className="flex flex-col justify-between space-y-2 p-2 md:flex-row md:space-x-5 md:space-y-0 md:p-0">
        <TestimonialProfile {...testimonial} size={size} />
        <TestimonialText text={testimonial.text} size={size} />
      </div>
    </div>
  );
}
// Fix PropTypes validation
TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  position: PropTypes.oneOf(['left', 'center', 'right']),
  onClick: PropTypes.func,
};

// In the Testimonial component, update the testimonials section
export function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getTestimonialIndex = offset =>
    (currentIndex + offset + testimonials.length) % testimonials.length;

  const handleCardClick = position => {
    if (position === 'left') {
      setCurrentIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
    } else if (position === 'right') {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }
  };

  return (
    <div className="relative flex flex-col items-center bg-white py-6 md:py-6">
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
          <TestimonialCard
            testimonial={testimonials[getTestimonialIndex(-1)]}
            position="left"
            onClick={() => handleCardClick('left')}
          />
          <TestimonialCard testimonial={testimonials[currentIndex]} position="center" />
          <TestimonialCard
            testimonial={testimonials[getTestimonialIndex(1)]}
            position="right"
            onClick={() => handleCardClick('right')}
          />
        </div>
      </div>
    </div>
  );
}
