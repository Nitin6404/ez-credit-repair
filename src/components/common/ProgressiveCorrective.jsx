import rectangle from '../asset/Rectangle.png';
import rectangle1 from '../asset/Rectangle1.png';
import rectangle2 from '../asset/Rectangle2.png';
import rectangle4 from '../asset/Rectangle4.png';

function ProgramCard({ number, title, image, description, nestedImage }) {
  return (
    <div className="flex-1 hover:shadow-lg md:mb-0">
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

export function Program() {
  const programCards = [
    {
      number: '1',
      title: 'Credit Report Analysis',
      image: rectangle,
      description: 'Establish a plan to identify roadblocks and inaccuracies impacting your score',
    },
    {
      number: '2',
      title: 'Dispute & Escalations',
      image: rectangle1,
      description: 'Challenge and Dispute negative items until they are removed',
    },
    {
      number: '3',
      title: 'Credit Recovery',
      image: rectangle4,
      nestedImage: rectangle2,
      description: 'Take action to boost your credit score to reach your desired score range',
    },
  ];

  return (
    <div>
      <div className="mx-auto max-w-screen-xl rounded bg-white p-6">
        {/* Header Section */}
        <div className="mb-8 text-center">
          <p className="mt-[-240px] font-inter text-[50px] font-bold leading-[60px] text-[#15549A]">
            Progressive Corrective & Recovery Plan
          </p>
        </div>

        {/* Program Cards Section */}
        <div className="mb-6 flex flex-col items-start justify-between md:flex-row md:space-x-5">
          {programCards.map(card => (
            <ProgramCard key={card.number} {...card} />
          ))}
        </div>

        {/* Down Arrow */}
        <h1 className="ml-[600px] text-7xl">↓</h1>

        {/* Dispute & Escalation Details */}
        <div className="mt-[10px] h-[208px] w-[1230px] border-[1px] border-[#4054B2] bg-blue-100 px-4 py-6">
          <h4 className="mb-2 font-inter text-[27px] font-bold leading-[32px] text-[#07284F]">
            Dispute & Escalation
          </h4>
          <p className="font-opensans text-[24px] font-bold leading-[32px] text-[#173455]">
            We start by assessing your current credit situation and identifying the roadblocks
            impacting your score. Each case is unique, but we specialize in spotting inaccuracies
            and other factors that should not be in your report damaging to credit reputation.
            Together, we'll map out a plan to a better credit score.
          </p>
        </div>
      </div>
    </div>
  );
}
