import { useState } from 'react';
import creditRepair from '../asset/creditrapiring.jpg';
import pauseIcon from '../asset/pauseIcon.svg';

export function GetStartedSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoToggle = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };
  return (
    <div className="relative w-full">
      {/* Background image */}
      <img
        src={creditRepair}
        className="h-full w-full object-cover object-center md:object-top"
        alt="Credit Repair Background"
      />

      {/* YouTube Video - Hidden on mobile */}
      <div className="absolute left-1/2 top-[230px] hidden h-[545px] w-[1009px] -translate-x-1/2 -translate-y-1/2 transform overflow-hidden rounded-md md:block">
        {isVideoPlaying ? (
          <div className="relative h-full w-full">
            <iframe
              src="https://www.youtube.com/embed/Ts-qq_0qtbg"
              title="EzeCredit Repair Video"
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <button onClick={handleVideoToggle}>
            <div className="flex items-center justify-center gap-2">
              <img
                src="https://img.youtube.com/vi/Ts-qq_0qtbg/maxresdefault.jpg"
                alt="EzeCredit Repair Video"
                className="h-full w-full"
              />
            </div>
          </button>
        )}
      </div>

      {/* Bottom content section */}
      <div className="absolute bottom-0 left-0 right-0 pt-[40px] sm:pt-[60px] md:top-[400px] md:px-10 md:pt-[80px] lg:px-20 lg:pt-[100px]">
        <div className="mx-auto mb-6 max-w-[1220px] px-4 md:mb-[50px] md:px-0">
          <div className="space-y-3 text-start font-inter text-[14px] font-semibold text-white md:space-y-1 md:text-xl">
            <div className="leading-tight sm:mt-80 sm:text-[20px] md:mt-0 md:leading-normal">
              <br></br>
            </div>
            <div className="mt-4 leading-tight md:leading-normal">
              Achieving a better credit score is key to unlocking finan- cial freedom and accessing
              life&apos;s biggest opportunities. With our EzeCredit Repair Program, our services
              will change your path to a brighter and improving credit profile, so you can secure
              better rates, loans, and finan- cial peace of mind.
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="mb-8 flex justify-center md:mb-10">
          <button className="h-[40px] w-[200px] rounded-md bg-[#F30000] px-1 py-1 font-inter text-[20px] font-bold text-white transition-colors duration-300 hover:bg-[#ff1a1a] md:h-[52px] md:w-[248px] md:text-[27px]">
            <div className="flex items-center justify-center gap-2">
              <span>GET STARTED</span>
              <img src={pauseIcon} alt="pause-icon" className="h-5 w-5 md:h-6 md:w-6" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
