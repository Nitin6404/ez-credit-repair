import { ProgramCard } from './ProgramCards';
import { useState } from 'react';
import { programCards } from '../../data/programCardsData';
import report from '../asset/report.jpg';
import dispute from '../asset/dispute.jpg';
import recovery from '../asset/recovery.jpg';

// import disputeBg from '../asset/dispute-bg.svg';

export function ProgramSection() {
  const [selectedCard, setSelectedCard] = useState(programCards[1]); // Default active card

  const trianglePosition = () => {
    switch (selectedCard.number) {
      case '1':
        return 'top-[90px]';
      case '2':
        return 'top-[265px]';
      case '3':
        return 'top-[430px]';
      default:
        return 'top-[180px]';
    }
  };

  return (
    <div className="mt-12 flex w-full max-w-[1300px] flex-col gap-8 px-4 lg:flex-row">
      {/* Left side - Program Cards */}
      <div className="flex w-full flex-col space-y-4 lg:w-[407px]">
        {programCards.map(card => (
          <ProgramCard
            key={card.number}
            isActive={selectedCard.number === card.number}
            onClick={() => setSelectedCard(card)}
            {...card}
          />
        ))}
      </div>

      {/* Right side - Details Section */}
      <div className="relative flex-1">
        {/* Triangle Indicator */}
        <div className="absolute hidden md:block" style={{ left: '-13px' }}>
          <div
            className={`absolute ${trianglePosition()} left-3.5 z-50 h-6 w-6 -translate-x-1/2 -rotate-45 border-l border-t border-[#4054B2] bg-blue-100`}
          ></div>
        </div>

        {/* Content Box */}
        <div className="min-h-[500px] w-full border-[1px] border-[#4054B2] bg-blue-100 px-8 py-6">
          <div className="pb-6">
            <img
              src={`${selectedCard.number === '1' ? report : selectedCard.number === '2' ? dispute : recovery}`}
              alt="dispute box image"
            />
          </div>
          <h4 className="mb-1 font-inter text-[27px] font-bold leading-[32px] text-[#07284F]">
            {selectedCard.title}
          </h4>
          <p className="font-inter text-lg font-normal leading-[22px] text-[#173455]">
            {selectedCard.details}
          </p>
        </div>
      </div>
    </div>
  );
}
