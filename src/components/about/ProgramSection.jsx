import { ProgramCard } from './ProgramCards';
import { useState } from 'react';
import { programCards } from '../../data/programCardsData';
import dispute from '../asset/dispute.svg';
import disputeBg from '../asset/dispute-bg.svg';

export function ProgramSection() {
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
