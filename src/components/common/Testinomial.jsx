import { useState } from "react";
import comma from "../asset/comma.png"; // Import the comma image

const testimonials = [
  {
    image: "/src/components/asset/jack.svg",
    name: "Jack D",
    date: "August 28th, 2024 / Raleigh, NC",
    text: "I’m very pleased with the service I received from the A-Team, my credit was in terrible shape. Could not get a decent rate on anything. The transformation saved us thousands. I’m about to close on a house. The service is excellent and fast.",
  },
  {
    image: "/src/components/asset/mathew.svg",
    name: "Mathew S.",
    date: "June 17, 2024 / Brooklyn, NY",
    text: "I’m very pleased with the service I received from the A-Team, my credit was in terrible shape. Could not get a decent rate on anything. The transformation saved us thousands. I’m about to close on a house. The service is excellent and fast.",
  },
  {
    image: "/src/components/asset/susan.svg",
    name: "Susan S.",
    date: "July 10, 2024 / New York, NY",
    text: "I’m very pleased with the service I received from the A-Team, my credit was in terrible shape. Could not get a decent rate on anything. The transformation saved us thousands. I’m about to close on a house. The service is excellent and fast.",
  },
];

export function Testinomial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-white relative py-10 flex flex-col items-center">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-[50px] leading-[60px] text-[#15549A] font-inter font-bold mb-[70px] mt-[-10px]">
          What Our Customers Say?
        </h2>
      </div>
      <div className="w-full h-[283px] bg-[#15549A] flex justify-center">
        <div className="bg-white h-[410px] w-[1300px] rounded-3xl shadow-2xl mt-16"></div>
      </div>
      <div className="w-full flex flex-col -mt-32 mx-12">
        <div className="relative flex justify-center items-center w-full">
          {/* Left Testimonial */}
          <div
            className="absolute left-36 border-[10px] border-[#002464] bg-[#E2E3E3] w-[471px] h-[465px] flex items-center justify-center transform scale-110 transition-all duration-300"
            style={{ zIndex: 1 }}
          >
            <div className="flex justify-between space-x-2">
              <div className="flex flex-col justify-center items-center font-inter text-[#292929] space-y-1">
                <img
                  src={
                    testimonials[
                      (currentIndex - 1 + testimonials.length) %
                        testimonials.length
                    ].image
                  }
                  alt={
                    testimonials[
                      (currentIndex - 1 + testimonials.length) %
                        testimonials.length
                    ].name
                  }
                  width={152}
                  height={165}
                  className="rounded-3xl border-[#B8B8B8]"
                />
                <p className="font-normal font-inter text-base leading-6 text-center px-3">
                  {
                    testimonials[
                      (currentIndex - 1 + testimonials.length) %
                        testimonials.length
                    ].name
                  }
                </p>
                <p className="font-bold text-[9px] text-center leading-3">
                  {
                    testimonials[
                      (currentIndex - 1 + testimonials.length) %
                        testimonials.length
                    ].date
                  }
                </p>
              </div>
              <div className="my-10">
                <div className="flex flex-col justify-center items-center w-[170px] h-[120px]">
                  <div className="w-full flex justify-start">
                    <img src={comma} alt="Quote" className="w-5 h-w-5 mr-2" />
                  </div>
                  <p className="font-inter font-bold text-[11px] leading-4 text-center my-4">
                    {
                      testimonials[
                        (currentIndex - 1 + testimonials.length) %
                          testimonials.length
                      ].text
                    }
                  </p>
                  <div className="w-full flex justify-end">
                    <img
                      src={comma}
                      alt="Quote"
                      className="w-5 h-5 ml-2 rotate-180"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Center Testimonial */}
          <div
            className="border-[10px] border-[#002464] bg-[#E2E3E3] w-[543px] h-[527px] flex items-center justify-center transform scale-110 z-20 transition-all duration-300"
            style={{ zIndex: 3 }}
          >
            <div className="flex justify-between space-x-5">
              <div className="flex flex-col justify-center items-center font-inter text-[#292929] space-y-1">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  width={184}
                  height={220}
                  className="rounded-3xl border-[#B8B8B8]"
                />
                <p className="font-normal font-inter text-xl leading-6 text-center px-3">
                  {testimonials[currentIndex].name}
                </p>
                <p className="font-bold text-xs text-center leading-3">
                  {testimonials[currentIndex].date}
                </p>
              </div>
              <div className="my-10">
                <div className="flex flex-col justify-center items-center w-[251px] h-[196px]">
                  <div className="w-full flex justify-start">
                    <img src={comma} alt="Quote" className="w-8 h-8 mr-2" />
                  </div>
                  <p className="font-inter font-bold text-sm leading-4 text-center my-4">
                    {testimonials[currentIndex].text}
                  </p>
                  <div className="w-full flex justify-end">
                    <img
                      src={comma}
                      alt="Quote"
                      className="w-8 h-8 ml-2 rotate-180"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Testimonial */}
          <div
            className="absolute right-36 border-[10px] border-[#002464] bg-[#E2E3E3] w-[471px] h-[465px] flex items-center justify-center transform scale-110 transition-all duration-300"
            style={{ zIndex: 1 }}
          >
            <div className="flex justify-between space-x-5">
              <div className="flex flex-col justify-center items-center font-inter text-[#292929] space-y-1">
                <img
                  src={
                    testimonials[
                      (currentIndex + 1 + testimonials.length) %
                        testimonials.length
                    ].image
                  }
                  alt={
                    testimonials[
                      (currentIndex + 1 + testimonials.length) %
                        testimonials.length
                    ].name
                  }
                  width={152}
                  height={165}
                  className="rounded-3xl border-[#B8B8B8]"
                />
                <p className="font-normal font-inter text-base leading-6 text-center px-3">
                  {
                    testimonials[
                      (currentIndex + 1 + testimonials.length) %
                        testimonials.length
                    ].name
                  }
                </p>
                <p className="font-bold text-[9px] text-center leading-3">
                  {
                    testimonials[
                      (currentIndex + 1 + testimonials.length) %
                        testimonials.length
                    ].date
                  }
                </p>
              </div>
              <div className="my-10">
                <div className="flex flex-col justify-center items-center w-[170px] h-[120px]">
                  <div className="w-full flex justify-start">
                    <img src={comma} alt="Quote" className="w-5` h-5 mr-2" />
                  </div>
                  <p className="font-inter font-bold text-[11px] leading-4 text-center my-4">
                    {
                      testimonials[
                        (currentIndex + 1 + testimonials.length) %
                          testimonials.length
                      ].text
                    }
                  </p>
                  <div className="w-full flex justify-end">
                    <img
                      src={comma}
                      alt="Quote"
                      className="w-5` h-5 ml-2 rotate-180"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="flex justify-end w-full gap-10 my-10 pr-20 pt-10">
            <button
              onClick={prevTestimonial}
              className="bg-[#15549A] text-white px-6 py-3 rounded font-semibold shadow hover:bg-[#003977] transition-all"
            >
              Previous
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-[#15549A] text-white px-6 py-3 rounded font-semibold shadow hover:bg-[#003977] transition-all"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
