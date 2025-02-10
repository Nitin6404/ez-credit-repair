import rectangle from '../asset/Rectangle.png';
import rectangle1 from '../asset/Rectangle1.png';
import rectangle2 from '../asset/Rectangle2.png';
import rectangle4 from '../asset/Rectangle4.png';
import { MoveDown } from 'lucide-react';
import { useState } from 'react';

function ProgramCard({ number, title, image, description, nestedImage, onClick }) {
  return (
    <div className="mb-6 w-full hover:shadow-lg md:mb-0 md:flex-1" onClick={onClick}>
      {/* Header */}
      <div className="h-[56.48px] w-full bg-[#46CC02] text-white md:w-[407px]">
        <div className="flex items-center p-2">
          <div className="mr-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white font-montserrat text-[20px] font-bold leading-[24px] text-[#15549A] md:h-11 md:w-11 md:text-[25px] md:leading-[30px]">
            {number.padStart(2, '0')}
          </div>
          <h3 className="font-montserrat text-[20px] font-bold leading-[24px] md:text-[25px] md:leading-[30px]">
            {title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="flex min-h-[120px] items-center justify-center rounded-b-lg bg-[#ECF6FF] p-3 text-[#9A9A9A] transition-colors hover:bg-[#15549A] hover:text-white md:h-[150px]">
        <div className="relative mr-[10px] inline-block md:mr-[20px]">
          <img
            src={image}
            alt={`${title} Icon`}
            className="inline-block h-[60px] w-[60px] object-contain md:h-auto md:w-auto"
          />
          {nestedImage && (
            <img
              src={nestedImage}
              alt="Nested Icon"
              className="absolute left-[3px] top-[15px] ml-[5px] h-[30px] w-[30px] md:top-[20px] md:ml-[10px] md:h-[40px] md:w-[40px]"
            />
          )}
        </div>
        <p className="font-montserrat text-[16px] font-bold leading-[20px] md:text-[20px] md:leading-[25px]">
          {description}
        </p>
      </div>
    </div>
  );
}

export function Program() {
  const [selectedCard, setSelectedCard] = useState(null);

  const programCards = [
    {
      number: '1',
      title: 'Credit Report Analysis',
      image: rectangle,
      description: 'Establish a plan to identify roadblocks and inaccuracies impacting your score',
      data: 'We start by assessing your current credit situation and identify the roadblocks impacting your score. Each case is unique, but we specialize in spotting inaccuracies and other factors that should not be in your report damaging to credit reputation. Together, we’ll map out a plan to a better credit score.',
    },
    {
      number: '2',
      title: 'Dispute & Escalations',
      image: rectangle1,
      description: 'Challenge and Dispute negative items until they are removed',
      data: 'Like the A-Team, well be your advocates, challenging inaccuracies and disputing negative items until they re removed. Our EzeCredit experts understand your rights and are dedicated to eliminating incorrect information, Inquiries, late payments, collections, and other factors that unfairly impact your score.',
    },
    {
      number: '3',
      title: 'Credit Recovery',
      image: rectangle4,
      nestedImage: rectangle2,
      description: 'Take action to boost your credit score to reach your desired score range',
      data: 'Derogatory information will prevent your score from going up.  However, after we remove the negatives, more may be needed to build your score to be able to utilize your credit to its full potential.  We then create a path to get you beyond the 700 range which will impact to the level needed Removing all of the derogatory will only get us haft way there.',
    },
  ];

  return (
    <div className="px-4 md:px-0">
      <div className="mx-auto max-w-screen-xl rounded bg-white p-4 md:p-6">
        {/* Header Section */}
        <div className="mb-6 text-center md:mb-8">
          <p className="mt-4 font-inter text-[32px] font-bold leading-[40px] text-[#15549A] md:mt-[-240px] md:text-[50px] md:leading-[60px]">
            Progressive Corrective & Recovery Plan
          </p>
        </div>

        {/* Program Cards Section */}
        <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-5">
          {programCards.map(card => (
            <ProgramCard key={card.number} {...card} onClick={() => setSelectedCard(card)} />
          ))}
        </div>

        {/* Down Arrow - Hidden on mobile */}
        <h1 className="ml-[600px] hidden text-7xl md:block">
          <MoveDown size={70} className="p-2" />
        </h1>

        {/* Dispute & Escalation Details */}
        <div className="mt-6 min-h-[208px] w-full border-[1px] border-[#4054B2] bg-blue-100 px-4 py-4 md:mt-[10px] md:w-[1230px] md:py-6">
          {selectedCard ? (
            <>
              <h4 className="mb-2 font-inter text-[22px] font-bold leading-[28px] text-[#07284F] md:text-[27px] md:leading-[32px]">
                {selectedCard.title}
              </h4>
              <p className="font-opensans text-[16px] font-bold leading-[24px] text-[#173455] md:text-[24px] md:leading-[32px]">
                {selectedCard.data}
              </p>
            </>
          ) : (
            <div>
              <h4 className="mb-2 font-inter text-[22px] font-bold leading-[28px] text-[#07284F] md:text-[27px] md:leading-[32px]">
                Dispute & Escalation
              </h4>
              <p className="font-opensans text-[16px] font-bold leading-[24px] text-[#173455] md:text-[24px] md:leading-[32px]">
                Like the A-Team, well be your advocates, challenging inaccuracies and disputing
                negative items until they re removed. Our EzeCredit experts understand your rights
                and are dedicated to eliminating incorrect information, Inquiries, late payments,
                collections, and other factors that unfairly impact your score.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
