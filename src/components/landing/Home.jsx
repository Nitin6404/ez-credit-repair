import basketBallNet from '../asset/basketballNet.svg';
import consultant from '../asset/chingchong.png';
import creditRepair from '../asset/creditrapiring.jpg';
import hands from '../asset/hands.png';
import creditImprove from '../asset/improvecs3.png';
import layer from '../asset/Layer 1002 copy.png';
import logo from '../asset/logo.png';
import mobile from '../asset/mobile.png';
import pauseIcon from '../asset/pauseIcon.svg';
import rectangle3 from '../asset/REct3.png';
import woman from '../asset/Rectangle 20.png';
import rectangle from '../asset/Rectangle.png';
import rectangle0 from '../asset/Rectangle0.png';
import rectangle1 from '../asset/Rectangle1.png';
import rectangle10 from '../asset/Rectangle10.png';
import rectangle11 from '../asset/Rectangle11.png';
import rectangle2 from '../asset/Rectangle2.png';
import rectangle4 from '../asset/Rectangle4.png';
import tick from '../asset/whatwedotick.png';
import { FAQSection } from '../common/FAQSection';
import { Footer } from '../common/Footer';
import { Testimonial } from '../common/Testimonial';

export function Home() {
  return (
    <>
      <div className="flex h-[462px] w-full bg-[#ECF5FF]">
        <div className="md:pl-8 md:pt-8 lg:pl-32 lg:pt-16">
          <h1 className="font-inter text-[26px] font-bold leading-[32px] text-[#15549A]">
            YOUR PATH TO BETTER CREDIT,
          </h1>
          <p className="mt-4 text-start font-inter text-[73px] font-bold leading-[60px] text-[#04284F]">
            MADE EASY
          </p>
          <p className="font-inter text-[26px] font-bold leading-[31px] text-[#737373]">
            Let's Fix Your Credit and Raise Your Score
          </p>
          <p className="font-inter text-[20px] font-normal leading-[28px] text-[#626161]">
            Unlock financial freedom with a better credit score.
          </p>
          <p className="font-inter text-[20px] font-normal leading-[28px] text-[#626161]">
            Our easy-to-follow approach helps you improve your
          </p>
          <p className="mb-6 font-inter text-[20px] font-normal leading-[28px] text-[#626161]">
            credit for better rates, loans and peace of mind.
          </p>
          <button className="h-[47px] w-[220px] rounded-lg bg-[#15549A] px-1 py-1 font-inter text-2xl font-normal text-white transition-colors duration-300 hover:bg-[#1a65b8]">
            SIGN UP NOW
          </button>
        </div>
        <div className="absolute right-[140px] z-10 h-[509px] w-[398px] px-[20px] pl-5 pt-20">
          <img src={rectangle11} alt="Eze Credit Repair Logo" className="object-cover" />
        </div>
      </div>
      {/* get started section  */}
      <div className="relative h-[779px] w-full bg-blue-800">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
        <img src={creditRepair} className="h-full w-full object-cover object-top" alt="" />
        <div className="absolute left-1/2 top-[230px] h-[530px] w-[997px] -translate-x-1/2 -translate-y-1/2 transform rounded-md border-white">
          <img src={rectangle10} alt="Eze Credit Repair Logo" className="object-cover" />
        </div>
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 transform text-center">
          <div className="mb-[50px] w-[1220px] font-inter text-xl font-semibold text-white">
            <div className="">
              Achieving a better credit score is key to unlocking financial freedom and accessing
              life's biggest opportunities.
            </div>
            <div className="">
              With our EzeCredit Repair Program, our services will change your path to a brighter
              and improving credit profile,
            </div>
            <div>so you can secure better rates, loans, and financial peace of mind.</div>
          </div>
          <button className="mb-10 h-[52px] w-[248px] rounded-md bg-[#F30000] px-1 py-1 font-inter text-[27px] font-bold text-white transition-colors duration-300 hover:bg-[#ff1a1a]">
            <div className="flex justify-center gap-2">
              <span>GET STARTED </span>
              <img src={pauseIcon} alt="pause-icon" />
            </div>
          </button>
        </div>
      </div>
      {/* About us section */}
      <div className="flex flex-col items-start justify-center py-8 pl-20 pr-14 font-sans md:flex-row">
        {/* Text Content */}
        <div className="flex-1">
          <h1 className="font-inter text-[50.04px] font-bold leading-[60.57px] text-[#15549A]">
            About Us
          </h1>
          <p className="font-inter text-[22.92px] font-bold leading-[27.73px] text-[#2E2F31]">
            For the past 15 years, we've been dedicated to helping thousands of individuals repair
            their credit and reclaim financial control. At <strong>EzeCredit</strong>, we fight for
            every consumer's right to an accurate, fair, and substantiated credit report.
          </p>

          <h2 className="font-Montserrat mt-2 text-[29px] font-bold leading-[35px] text-[#529400]">
            Target Area
          </h2>
          <ul className="w-[736px] list-none space-y-4 pl-0 font-inter text-[22.91px] font-bold leading-[27.73px] tracking-tight text-[#2E2F31]">
            <li>
              <div className="flex h-full w-full items-start">
                <div className="mr-1.5 pt-1.5">
                  <img height={20} width={20} src={layer} alt="Layer Icon" />
                </div>
                <div className="flex-1">
                  Like the A-Team, we become your trusted advocates, challenging inaccuracies and
                  disputing negative items until they are removed.
                </div>
              </div>
            </li>
            <li>
              <div className="flex h-full w-full items-start">
                <div className="mr-1.5 pt-1.5">
                  <img height={20} width={20} src={layer} alt="Layer Icon" />
                </div>
                <div className="flex-1">
                  Credit Evaluation - In-depth assessment of your credit report
                </div>
              </div>
            </li>
            <li>
              <div className="flex h-full w-full items-start">
                <div className="mr-1.5 pt-1.5">
                  <img height={20} width={20} src={layer} alt="Layer Icon" />
                </div>
                <div className="flex-1">
                  Unlimited Disputes: We challenge any number of inaccuracies
                </div>
              </div>
            </li>
            <li>
              <div className="flex h-full w-full items-start">
                <div className="mr-1.5 pt-1.5">
                  <img height={20} width={20} src={layer} alt="Layer Icon" />
                </div>
                <div className="flex-1">
                  Debt & Inquiry Verification and Removal: We verify and dispute
                </div>
              </div>
            </li>
            <li>
              <div className="flex h-full w-full items-start">
                <div className="mr-1.5 pt-1.5">
                  <img height={20} width={20} src={layer} alt="Layer Icon" />
                </div>
                <div className="flex-1">
                  Escalation of Disputes for Fast Removal: We escalate disputes when necessary
                  Recommendations to Boost Score: Personalized strategies fo help raise your credit
                  score.
                </div>
              </div>
            </li>
          </ul>
          <div className="group flex">
            <button className="mt-6 flex h-[51px] w-[200px] items-center justify-center rounded-l-lg bg-[#15549A] p-[10px] text-center font-inter text-[27px] font-normal leading-[32px] text-white">
              READ MORE
            </button>
            <span className="ml-[2px] mt-[24px] flex h-[51px] w-[45px] items-center justify-center rounded-r-lg bg-[#15549A] text-center text-[35px] text-white">
              →
            </span>
          </div>
        </div>

        {/* Image Placeholder */}
        <div className="mt-[50px] flex flex-1 items-center justify-end md:pl-6">
          <div className="flex h-[459px] w-[474px] items-center justify-center rounded-lg text-sm italic">
            <img
              src={creditImprove}
              alt="Recovery Icon"
              className="object-contained mr-2 inline-block"
            />
          </div>
        </div>
      </div>
      <div className="absolute right-0 z-0 h-[580px] w-[837px]">
        <img src={basketBallNet} alt="" />
      </div>
      {/* What we do section*/}
      <div className="flex h-[695px] w-full flex-col items-center border-2 border-b-[#E8EEF5] bg-[#15549A] p-6 font-sans text-white">
        {/* Main Container with Flex */}
        <div className="flex w-full flex-col items-center justify-center space-x-0 md:flex-row md:space-x-10">
          {/* Left Side - What We Do Section */}
          <div className="ml-[20px] flex flex-col items-center space-y-4 text-center md:items-start md:text-left">
            {/* Main Title */}
            <h1 className="mt-[20px] font-inter text-[50px] font-bold leading-[60px] text-[#78B6F6]">
              What We Do
            </h1>

            {/* Description */}
            <p className="font-inter text-[29px] font-[400] leading-[35px]">
              Empowering You to Seize New Opportunities, <br />
              Because Everyone Deserves a Second Chance.
            </p>
            <p className="font-inter text-[29.16px] font-[400] italic leading-[35.29px] text-[#31FF01]">
              When opportunity knocks, will your credit stand in the way?
            </p>

            {/* Services Header */}
            <div className="mb-4 flex items-center space-x-3">
              {' '}
              {/* Flex container with spacing */}
              {/* Placeholder for Logo Image */}
              <div className="flex h-10 w-24 items-center justify-center rounded">
                <img
                  src={logo}
                  alt="Eze Credit Repair Logo"
                  className="ml-[20px] h-[54px] w-[143px]"
                />
              </div>
              {/* Services Benefits Heading */}
              <h2 className="font-inter text-[50px] font-bold leading-[60.51px] text-white">
                Services Benefits:
              </h2>
            </div>

            {/* Benefits List */}
            <ul className="mx-16 space-y-3 text-base">
              <li className="flex items-center font-inter text-[22px] font-bold leading-[27px]">
                <span className="mr-2 flex flex-shrink-0 items-center justify-center text-green-400">
                  <img
                    src={tick}
                    alt="tick-icon"
                    className="h-[50px] w-[40px] object-contain"
                    style={{ maxWidth: '40px' }}
                  />
                </span>
                Strong credit score opens doors to financial freedom.
              </li>
              <li className="flex items-center font-inter text-[22px] font-bold leading-[27px]">
                <span className="mr-2 flex flex-shrink-0 items-center justify-center text-green-400">
                  <img
                    src={tick}
                    alt="tick-icon"
                    className="h-[50px] w-[40px] object-contain"
                    style={{ maxWidth: '40px' }}
                  />
                </span>
                Easy path to better credit, to be ready for every opportunity that comes your way.
              </li>
              <li className="flex items-center font-inter text-[22px] font-bold leading-[27px]">
                <span className="mr-2 flex flex-shrink-0 items-center justify-center text-green-400">
                  <img
                    src={tick}
                    alt="tick-icon"
                    className="h-[50px] w-[40px] object-contain"
                    style={{ maxWidth: '40px' }}
                  />
                </span>
                Fast track repair and boost your score by 50-100 points* within 30 to 60 days.
              </li>
            </ul>

            {/* Get Started Button */}
            <button className="flex h-[52px] w-[244px] items-center justify-center gap-3 rounded-2xl bg-[#46CC02] font-semibold text-white">
              <span className="font-inter text-[27px] font-bold leading-[32px]">GET STARTED</span>
              <img
                width={20}
                height={23}
                className="h-[23px] w-[20px]"
                src={pauseIcon}
                alt="pause-icon"
              />
            </button>
          </div>
          {/* Right Side - Basketball Image and Text */}
          <div className="z-10 mt-[50px] flex w-1/2 flex-col items-center justify-center">
            {/* <img src={basket} className="object-cover" alt="" /> */}
            {/* Basketball Image Placeholder */}
            <div className="mb-4 flex h-[477px] w-[506px] items-center justify-center">
              <img
                src={rectangle0}
                alt="Eze Credit Repair Logo"
                className="ml-[20px] h-[477px] w-[506px] object-cover"
              />
            </div>

            {/* Text beside the Basketball Image */}
            <p className="mt-[30px] font-inter text-[26.36px] font-[400] leading-[31.9px] md:text-left">
              Don’t Let Your Credit Block Opportunities <br />
              <p className="ml-[30px] font-inter text-[26.36px] font-[400] leading-[31.9px]">
                Start Building a Better Score Today!
              </p>
            </p>
          </div>
        </div>
      </div>
      <div className="ml-[80px] h-[713px] w-[640px] bg-[#3F8FC4] bg-opacity-[10%]">
        <FAQSection />
      </div>
      <Contactform />

      {/* progressive correct and recovery plan */}
      <Program />
      <Testimonial />

      {/* News Blog section */}
      <div className="mt-[90px] w-full">
        {/* Main Content Header */}
        <div className="mb-5 text-center">
          <h1 className="font-inter text-[50px] font-bold leading-[60px] text-[#15549A]">
            News & Blog
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid w-full grid-cols-1 bg-[#15549A] bg-opacity-[10%] p-2 lg:grid-cols-[1fr_auto_1fr]">
          {/* Credit Repair Section */}
          <div className="ml-[50px] mt-[10px] space-y-4 p-5">
            <h2 className="ml-[20px] font-inter text-[25px] font-bold leading-[30px] text-[#15549A]">
              Credit Repair:
              <span className="font-inter text-[20px] font-bold leading-[25px]">
                {' '}
                What It Is, How It Works, Related...
              </span>
            </h2>

            {/* Credit Repair Card 1 */}
            <div className="relative h-[191px] w-[540px] overflow-hidden rounded-lg">
              <img src={hands} alt="Credit Repair 1" className="h-[191px] w-[540px] object-cover" />
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <span className="absolute left-5 top-4 h-[25px] w-[93px] rounded-lg border-2 border-white bg-[#059C4B] px-2 py-1 text-center font-inter text-[10px] font-[400] leading-[12px] text-white">
                  August 29, 2024
                </span>
              </div>
            </div>

            {/* Credit Repair Card 2 */}
            <h2 className="ml-[20px] font-inter text-[25px] font-bold leading-[30px] text-[#15549A]">
              Credit Repair:{' '}
              <span className="font-inter text-[20px] font-bold leading-[25px]">
                {' '}
                How Credit Repair Works{' '}
              </span>
            </h2>
            <div className="relative h-[191px] w-[540px] overflow-hidden rounded-lg">
              <img
                src={mobile}
                alt="Credit Repair 2"
                className="mt-[-20px] h-[189px] w-[535px] rounded-lg object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <span className="absolute left-2 top-2 h-[25px] w-[93px] rounded-lg border-2 border-white bg-[#059C4B] px-2 py-1 text-center font-inter text-[10px] font-[400] leading-[12px] text-white">
                  August 29, 2024
                </span>
              </div>
            </div>
          </div>
          <div className="mx-4 mt-[50px] hidden h-[500px] w-[1px] bg-gray-300 lg:block"></div>
          {/* Related Articles Section */}
          <div className="mr-[20px] space-y-6 rounded-lg p-6">
            <h2 className="font-inter text-[29px] font-bold leading-[35px] text-[#4B4B4B]">
              Related Articles
            </h2>

            {/* Article 1 */}
            <div className="flex items-start space-x-4 pb-4">
              <img
                src={woman}
                alt="Common Things"
                className="h-[111px] w-[148px] rounded-md object-cover"
              />
              <div>
                <h3 className="font-inter text-[20px] font-bold leading-[25px] text-[#15549A]">
                  Common Things That Improve or Lower Scores
                </h3>
                <p className="font-inter text-[18px] font-[400] leading-[22px] text-[#424242]">
                  A secured credit card is a type of credit card that is backed by a cash deposit,
                  which serves as collateral should you default on payments. A secured card can
                  rebuild credit.
                </p>
              </div>
            </div>

            {/* Article 2 */}
            <div className="flex items-start space-x-4 border-gray-300 pb-4">
              <img
                src={rectangle3}
                alt="Average Outstanding Balance"
                className="h-[111px] w-[148px] rounded-md object-cover"
              />
              <div>
                <h3 className="font-inter text-[20px] font-bold leading-[25px] text-[#15549A]">
                  Average Outstanding Balance on Credit Cards: How It Works and Calculation
                </h3>
                <p className="font-inter text-[18px] font-[400] leading-[22px] text-[#424242]">
                  Credit history is the ongoing documentation of your financial information,
                  including repayment of your debts. Your credit history is an essential part of
                  your credit report.
                </p>
              </div>
            </div>

            {/* Article 3 */}
            <div className="flex items-start space-x-4 pb-4">
              <img
                src={consultant}
                alt="What is a Secured Credit Card?"
                className="h-[111px] w-[148px] rounded-md object-cover"
              />
              <div>
                <h3 className="font-inter text-[20px] font-bold leading-[25px] text-[#15549A]">
                  What Is a Secured Credit Card? How It Works and Benefits
                </h3>
                <p className="font-inter text-[18px] font-[400] leading-[22px] text-[#424242]">
                  A fair credit score falls in the range between poor and good. A fair FICO credit
                  score is 580 to 669, and the equivalent near-prime VantageScore is 601 to 660.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

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

function Program() {
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

function Contactform() {
  return (
    <div>
      <div className="mb-[300px] ml-[660px] mt-[-713px] flex justify-center">
        <div className="flex h-[720px] w-[533px] flex-col bg-[url('/src/components/asset/faqbg.png')] p-6 md:flex-row">
          <div className="mt-[-10px] flex-1 md:mr-8">
            <h2 className="font-inter text-[45px] font-[400] leading-[54.46px] text-[#FFFFFF]">
              Start Your Recovery
            </h2>
            <form className="mt-[25px] grid gap-4">
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="First Name"
                  className="bg-[#496480] p-4 font-montserrat text-[18px] font-[400] leading-[22px]"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="bg-[#496480] p-4 font-montserrat text-[18px] font-[400] leading-[22px]"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="bg-[#496480] p-4 font-montserrat text-[18px] font-[400] leading-[22px]"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="bg-[#496480] p-4 font-montserrat text-[18px] font-[400] leading-[22px]"
                />
              </div>
              <input
                type="text"
                placeholder="Current Credit Score"
                className="bg-[#496480] p-4 font-montserrat text-[18px] font-[400] leading-[22px]"
              />
              <input
                type="text"
                placeholder="Reason for Credit Repair"
                className="bg-[#496480] p-4 font-montserrat text-[18px] font-[400] leading-[22px]"
              />
              <textarea
                placeholder="How Soon?"
                className="h-[250px] bg-[#496480] p-3 font-montserrat text-[18px] font-[400] leading-[22px]"
              ></textarea>
              <button className="h-[54px] w-[186px] bg-[#46CC02] p-3 font-inter text-[18px] font-[400] leading-[22px] text-white">
                Sign Up Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
