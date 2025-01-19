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
      <div className="bg-[#ECF5FF] flex  w-full h-[462px]">
        <div className="lg:pt-16 md:pt-8 lg:pl-32 md:pl-8 ">
          <h1 className="text-[#15549A] font-bold font-inter mb-3 text-2xl leading-[32px]">
            YOUR PATH TO BETTER CREDIT,
          </h1>
          <p className="text-[#04284F] font-inter text-start text-[55px] pt-2 leading-[60px] font-bold">
            MADE EASY
          </p>
          <p className="text-[#737373] text-[26px] leading-[31px] mb-4 font-inter font-bold">
            Let's Fix Your Credit and Raise Your Score
          </p>
          <p className="text-[#626161] font-[400] font-inter text-[20px] leading-[28px] pt-3">
            Unlock financial freedom with a better credit score.
          </p>
          <p className="text-[#626161] font-[400] font-inter text-[20px] leading-[28px] mt-2">
            Our easy-to-follow approach helps you improve your
          </p>
          <p className="text-[#626161] mb-6 font-[400] font-inter text-[20px] leading-[28px] mt-2">
            credit for better rates, loans and peace of mind.
          </p>
          <button className="w-[220px] h-[47px] bg-[#15549A] font-inter font-bold text-2xl text-white px-4 py-1 rounded-xl hover:bg-[#1a65b8] transition-colors duration-300">
            SIGN UP NOW
          </button>
        </div>
        <div className="w-[398px] h-[509px] z-10 right-[140px] absolute pt-20 pl-5 px-[20px]">
          <img src={rectangle11} alt="Eze Credit Repair Logo" className="object-cover" />
        </div>
      </div>
      {/* get started section  */}
      <div className="bg-blue-800 h-[779px] relative w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
        <img src={creditRepair} className="object-cover w-full h-full" alt="" />
        <div className="w-[997px] h-[530px] rounded-md absolute top-[230px] border-white left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src={rectangle10} alt="Eze Credit Repair Logo" className="object-cover" />
        </div>
        <div className="absolute text-center left-1/2 transform -translate-x-1/2 bottom-5">
          <div className="text-white w-[900px] font-inter text-xl font-bold mb-[50px] space-y-4">
            <div className="mb-2">
              Achieving a better credit score is key to unlocking financial freedom and accessing
              life's biggest opportunities.
            </div>
            <div className="mb-2">
              With our EzeCredit Repair Program, our services will change your path to a brighter
              and improving credit profile,
            </div>
            <div>so you can secure better rates, loans, and financial peace of mind.</div>
          </div>
          <button className="mb-10 bg-[#F30000] font-bold font-inter text-3xl text-white px-1 py-1 rounded-md w-[248px] h-[52px] hover:bg-[#ff1a1a] transition-colors duration-300">
            <div className="flex justify-center gap-2">
              <span>GET STARTED </span>
              <img src={pauseIcon} alt="pause-icon" />
            </div>
          </button>
        </div>
      </div>
      {/* About us section */}
      <div className="flex flex-col justify-center md:flex-row items-start py-8 pl-20 pr-14 font-sans">
        {/* Text Content */}
        <div className="flex-1 ">
          <h1 className="text-[50.04px] leading-[60.57px] font-bold text-[#15549A] font-inter">
            About Us
          </h1>
          <p className="text-[22.92px] leading-[27.73px] text-[#2E2F31] font-inter font-[550] ">
            For the past 15 years, we've been dedicated to helping thousands of individuals repair
            their credit and reclaim financial control. At <strong>EzeCredit</strong>, we fight for
            every consumer's right to an accurate, fair, and substantiated credit report.
          </p>

          <h2 className="text-[29px] leading-[35px] font-bold text-[#529400] font-Montserrat mt-2">
            Target Area
          </h2>
          <ul className="list-none pl-0 text-[22.91px] tracking-tight leading-[27.73px] text-[#2E2F31] font-inter font-bold w-[736px] space-y-4">
            <li>
              <div className="flex h-full w-full items-start">
                <div className="w-14 pt-1.5 flex-shrink-0">
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
                <div className="pt-1.5 mr-1.5">
                  <img height={20} width={20} src={layer} alt="Layer Icon" />
                </div>
                <div>Credit Evaluation - In-depth assessment of your credit report</div>
              </div>
            </li>
            <li>
              <div className="flex h-full w-full items-start">
                <div className="pt-1.5 mr-1.5">
                  <img height={20} width={20} src={layer} alt="Layer Icon" />
                </div>
                <div>Unlimited Disputes: We challenge any number of inaccuracies</div>
              </div>
            </li>
            <li>
              <div className="flex h-full w-full items-start">
                <div className="pt-1.5 mr-1.5">
                  <img height={20} width={20} src={layer} alt="Layer Icon" />
                </div>
                <div>Debt & Inquiry Verification and Removal: We verify and dispute</div>
              </div>
            </li>
            <li>
              <div className="flex h-full w-full items-start">
                <div className="w-14 pt-1.5 mr-1.5">
                  <img height={20} width={20} src={layer} alt="Layer Icon" />
                </div>
                <div>
                  Escalation of Disputes for Fast Removal: We escalate disputes when necessary
                  Recommendations to Boost Score: Personalized strategies fo help raise your credit
                  score.
                </div>
              </div>
            </li>
          </ul>
          <div className="flex group">
            <button className="bg-[#15549A] font-inter font-bold text-[27px] text-center leading-[32px] w-[200px] h-[51px] text-white rounded-l-xl mt-6 p-[10px] flex items-center justify-center group-hover:bg-[#1a65b8] transition-colors duration-300">
              READ MORE
            </button>
            <span className="ml-[2px] h-[51px] text-[35px] text-center justify-center items-center mt-[24px] w-[45px] bg-[#15549A] rounded-r-xl text-white group-hover:bg-[#1a65b8] transition-colors duration-300">
              →
            </span>
          </div>
        </div>

        {/* Image Placeholder */}
        <div className="flex-1 flex justify-end items-center mt-[50px] md:pl-6">
          <div className="w-[474px] h-[459px] flex justify-center items-center text-sm italic rounded-lg">
            <img
              src={creditImprove}
              alt="Recovery Icon"
              className="inline-block mr-2 object-contained"
            />
          </div>
        </div>
      </div>
      <div className="absolute right-0 w-[837px] h-[580px] z-0">
        <img src={basketBallNet} alt="" />
      </div>
      {/* What we do section*/}
      <div className="flex flex-col h-[695px] w-full items-center border-2 border-b-[#E8EEF5] bg-[#15549A] text-white p-6 font-sans">
        {/* Main Container with Flex */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full space-x-0 md:space-x-10">
          {/* Left Side - What We Do Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 ml-[20px] ">
            {/* Main Title */}
            <h1 className="text-[50px] leading-[60px] mt-[20px] font-bold text-[#78B6F6] font-inter">
              What We Do
            </h1>

            {/* Description */}
            <p className="text-[29px] leading-[35px] font-inter font-[400]">
              Empowering You to Seize New Opportunities, <br />
              Because Everyone Deserves a Second Chance.
            </p>
            <p className="text-[#31FF01] font-inter font-[400] text-[29.16px] leading-[35.29px] italic">
              When opportunity knocks, will your credit stand in the way?
            </p>

            {/* Services Header */}
            <div className="flex items-center space-x-3 mb-4">
              {' '}
              {/* Flex container with spacing */}
              {/* Placeholder for Logo Image */}
              <div className="w-24 h-10 flex items-center justify-center rounded">
                <img
                  src={logo}
                  alt="Eze Credit Repair Logo"
                  className="h-[54px] w-[143px] ml-[20px] "
                />
              </div>
              {/* Services Benefits Heading */}
              <h2 className="text-[50px] leading-[60.51px] font-bold text-white font-inter">
                Services Benefits:
              </h2>
            </div>

            {/* Benefits List */}
            <ul className="text-base space-y-3 mx-16">
              <li className="flex items-center font-inter font-bold text-[22px] leading-[27px]">
                <span className="text-green-400 mr-2 items-center ">
                  <img src={tick} className="w-[29px] h-[50px]" />
                </span>
                Strong credit score opens doors to financial freedom.
              </li>
              <li className="flex items-center font-inter font-bold text-[22px] leading-[27px]">
                <span className="text-green-400 mr-2 items-center ">
                  <img src={tick} className="w-[40px] h-[50px]" />
                </span>
                Easy path to better credit, to be ready for every opportunity that comes your way.
              </li>
              <li className="flex items-center font-inter font-bold text-[22px] leading-[27px]">
                <span className="text-green-400 mr-2 items-center ">
                  <img src={tick} className="w-[40px] h-[50px]" />
                </span>
                Fast track repair and boost your score by 50-100 points* within 30 to 60 days.
              </li>
            </ul>

            {/* Get Started Button */}
            <button className="bg-[#46CC02] text-white font-semibold  rounded-2xl w-[244px] h-[52px] flex items-center justify-center gap-3">
              <span className="font-inter font-bold text-[27px] leading-[32px]">GET STARTED</span>
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
          <div className="flex flex-col w-1/2 items-center justify-center mt-[50px] z-10">
            {/* <img src={basket} className="object-cover" alt="" /> */}
            {/* Basketball Image Placeholder */}
            <div className="w-[506px] h-[477px]  flex items-center justify-center mb-4">
              <img
                src={rectangle0}
                alt="Eze Credit Repair Logo"
                className="object-cover ml-[20px] w-[506px] h-[477px] "
              />
            </div>

            {/* Text beside the Basketball Image */}
            <p className="font-inter font-[400] text-[26.36px] leading-[31.9px] md:text-left mt-[30px]">
              Don’t Let Your Credit Block Opportunities <br />
              <p className="font-inter font-[400] text-[26.36px] leading-[31.9px] ml-[30px]">
                Start Building a Better Score Today!
              </p>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#3F8FC4] w-[640px] h-[713px] ml-[80px] bg-opacity-[10%]">
        <FAQSection />
      </div>
      <Contactform></Contactform>

      {/* progressive correct and recovery plan */}
      <Program></Program>
      <Testimonial />

      {/* News Blog section */}
      <div className="w-full mt-[90px]">
        {/* Main Content Header */}
        <div className="text-center mb-5">
          <h1 className="text-[50px] leading-[60px] font-inter font-bold text-[#15549A]">
            News & Blog
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] w-full bg-[#15549A] bg-opacity-[10%] p-2">
          {/* Credit Repair Section */}
          <div className="space-y-4 p-5 ml-[50px] mt-[10px]">
            <h2 className="text-[#15549A] text-[25px] leading-[30px] font-bold font-inter ml-[20px]">
              Credit Repair:
              <span className="font-inter font-bold text-[20px] leading-[25px]">
                {' '}
                What It Is, How It Works, Related...
              </span>
            </h2>

            {/* Credit Repair Card 1 */}
            <div className=" relative rounded-lg overflow-hidden w-[540px] h-[191px]">
              <img src={hands} alt="Credit Repair 1" className="w-[540px] h-[191px] object-cover" />
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <span className="absolute top-4 text-center left-5 bg-[#059C4B] font-inter font-[400] text-white px-2 py-1 rounded-lg border-2 border-white text-[10px] leading-[12px] w-[93px] h-[25px]">
                  August 29, 2024
                </span>
              </div>
            </div>

            {/* Credit Repair Card 2 */}
            <h2 className="text-[#15549A]  text-[25px] leading-[30px] font-bold font-inter ml-[20px]">
              Credit Repair:{' '}
              <span className="font-inter font-bold text-[20px] leading-[25px]">
                {' '}
                How Credit Repair Works{' '}
              </span>
            </h2>
            <div className="relative rounded-lg overflow-hidden w-[540px] h-[191px]">
              <img
                src={mobile}
                alt="Credit Repair 2"
                className="w-[535px] h-[189px] object-cover rounded-lg mt-[-20px]"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <span className="absolute top-2 text-center left-2 bg-[#059C4B] font-inter font-[400] text-white px-2 py-1 rounded-lg border-2 border-white text-[10px] leading-[12px] w-[93px] h-[25px]">
                  August 29, 2024
                </span>
              </div>
            </div>
          </div>
          <div className="hidden lg:block h-[500px] mt-[50px] w-[1px] bg-gray-300 mx-4"></div>
          {/* Related Articles Section */}
          <div className="space-y-6 p-6 rounded-lg mr-[20px]">
            <h2 className="text-[29px] leading-[35px] font-bold text-[#4B4B4B] font-inter">
              Related Articles
            </h2>

            {/* Article 1 */}
            <div className="flex items-start space-x-4 pb-4">
              <img
                src={woman}
                alt="Common Things"
                className="w-[148px] h-[111px] object-cover rounded-md"
              />
              <div>
                <h3 className="font-bold font-inter text-[20px] leading-[25px]  text-[#15549A]">
                  Common Things That Improve or Lower Scores
                </h3>
                <p className="text-[18px] leading-[22px] font-inter font-[400] text-[#424242]">
                  A secured credit card is a type of credit card that is backed by a cash deposit,
                  which serves as collateral should you default on payments. A secured card can
                  rebuild credit.
                </p>
              </div>
            </div>

            {/* Article 2 */}
            <div className="flex items-start space-x-4  border-gray-300 pb-4">
              <img
                src={rectangle3}
                alt="Average Outstanding Balance"
                className="w-[148px] h-[111px] object-cover rounded-md"
              />
              <div>
                <h3 className="font-bold font-inter text-[20px] leading-[25px]  text-[#15549A]">
                  Average Outstanding Balance on Credit Cards: How It Works and Calculation
                </h3>
                <p className="text-[18px] leading-[22px] font-inter font-[400] text-[#424242]">
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
                className="w-[148px] h-[111px] object-cover rounded-md"
              />
              <div>
                <h3 className="font-bold font-inter text-[20px] leading-[25px]  text-[#15549A]">
                  What Is a Secured Credit Card? How It Works and Benefits
                </h3>
                <p className="text-[18px] leading-[22px] font-inter font-[400] text-[#424242]">
                  A fair credit score falls in the range between poor and good. A fair FICO credit
                  score is 580 to 669, and the equivalent near-prime VantageScore is 601 to 660.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

function Program() {
  return (
    <div>
      <div className="p-6 bg-white max-w-screen-xl mx-auto  rounded">
        {/* Header Section */}
        <div className="text-center mb-8">
          <p className="text-[#15549A] font-inter mt-[-240px] font-bold text-[50px] leading-[60px]">
            Progressive Corrective & Recovery Plan
          </p>
        </div>

        {/* Program Cards Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:space-x-1 mb-6">
          {/* Card 1 */}
          <div className="bg-[#46CC02] text-white rounded-lg flex-1 mb-4 md:mb-0 w-[407px] h-[56.48px] hover:shadow-[0_4px_7px_rgba(0,0,0,0.7)]">
            <div className="flex p-2 items-center">
              <div className="bg-white text-[#15549A] font-montserrat text-[25px] leading-[30px] font-bold rounded w-8 h-8 flex items-center justify-center">
                01
              </div>
              <h3 className="font-bold font-montserrat text-[25px] leading-[30px] ml-[10px]">
                Credit Report Analysis
              </h3>
            </div>

            <div className="bg-[#ECF6FF]  p-2 flex rounded text-[#9A9A9A] justify-center items-center hover:bg-[#15549A] h-[150px] hover:text-white">
              <div className="relative inline-block mr-[20px]">
                <img
                  src={rectangle}
                  alt="Credit Report Icon"
                  className="inline-block w-[77px] h-[106px] mr-[80px] ml-[30px]"
                />
              </div>
              <p className="font-montserrat font-bold text-[20px] leading-[25px] ">
                Establish a plan to identify roadblocks and inaccuracies impacting your score
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#46CC02] text-white rounded-lg flex-1 mb-4 md:mb-0 w-[407px] h-[56.48px] hover:shadow-[0_4px_7px_rgba(0,0,0,0.7)]">
            <div className="flex p-2 items-center">
              <div className="bg-white text-[#15549A] font-montserrat text-[25px] leading-[30px] font-bold rounded w-8 h-8 flex items-center justify-center mr-3">
                02
              </div>
              <h3 className="font-bold font-montserrat text-[25px] leading-[30px]">
                Dispute & Escalations
              </h3>
            </div>
            <div className="bg-[#ECF6FF]  p-3 flex rounded text-[#9A9A9A] h-[150px] justify-center items-center hover:bg-[#15549A] hover:text-white">
              <img
                src={rectangle1}
                alt="Dispute Icon"
                className="inline-block mr-2 w-[95px] h-[99px] ml-[30px]"
              />
              <p className="font-montserrat font-bold text-[20px] leading-[25px] ml-[20px]">
                Challenge and Dispute negative items until they are removed
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#46CC02] text-white rounded-lg flex-1 mb-4 md:mb-0 w-[407px] h-[56.48px] hover:shadow-[0_4px_7px_rgba(0,0,0,0.7)]">
            <div className="flex p-2 items-center">
              <div className="bg-white text-[#15549A] font-montserrat text-[25px] leading-[30px] font-bold rounded w-8 h-8 flex items-center justify-center mr-3">
                03
              </div>
              <h3 className="font-bold font-montserrat text-[25px] leading-[30px]">
                Credit Recovery
              </h3>
            </div>

            {/* Similar Inner Card as Card 2 */}
            <div className="bg-[#ECF6FF] text-[#9A9A9A]  p-3 flex rounded justify-center items-center h-[150px] hover:bg-[#15549A] hover:text-white">
              <div className="relative inline-block mr-3">
                {/* Image for Credit 3 */}
                <img src={rectangle4} alt="Recovery Icon" className=" inline-block ml-[17px]" />
                {/* Image for Credit 4 inside Credit 3 */}
                <img
                  src={rectangle2}
                  alt="Nested Icon"
                  className="absolute w-[40px] h-[40px] top-[20px] left-[3px] ml-[30px]"
                />
              </div>
              <p className="font-montserrat font-bold text-[20px] leading-[25px] ml-[20px]">
                Take action to boost your credit score to reach your desired score range
              </p>
            </div>
          </div>
        </div>

        {/* Dispute & Escalation Details */}
        <h1 className="ml-[600px] text-7xl mt-[130px]">↓</h1>
        <div className="bg-blue-100 py-6 px-4 border-[#4054B2] border-[1px] mt-[10px] w-[1230px] h-[208px]">
          <h4 className="text-[27px] leading-[32px] font-inter font-bold text-[#07284F] mb-2">
            Dispute & Escalation
          </h4>
          <p className="text-[#173455] font-opensans font-bold text-[24px] leading-[32px]">
            We start by assessing your current credit situation and identifying the roadblocks
            impacting your score. Each case is unique, but we specialize in spotting inaccuracies
            and other factors that should not be in your report damaging to credit reputation.
            Together, we’ll map out a plan to a better credit score.
          </p>
        </div>
      </div>
    </div>
  );
}

function Contactform() {
  return (
    <div>
      <div className="flex justify-center ml-[660px] mt-[-713px] mb-[300px]">
        <div className=" w-[533px] h-[720px] p-6 bg-[url('/src/components/asset/faqbg.png')] flex flex-col md:flex-row">
          <div className="flex-1 md:mr-8 mt-[-10px]">
            <h2 className="text-[45px] leading-[54.46px] font-[400] text-[#FFFFFF] font-inter">
              Start Your Recovery
            </h2>
            <form className="grid gap-4 mt-[25px]">
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="First Name"
                  className="p-4 font-montserrat bg-[#496480] font-[400] text-[18px] leading-[22px]"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="p-4 font-montserrat bg-[#496480] font-[400] text-[18px] leading-[22px]"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="p-4 font-montserrat bg-[#496480] font-[400] text-[18px] leading-[22px]"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="p-4 font-montserrat bg-[#496480] font-[400] text-[18px] leading-[22px]"
                />
              </div>
              <input
                type="text"
                placeholder="Current Credit Score"
                className="p-4 font-montserrat bg-[#496480] font-[400] text-[18px] leading-[22px]"
              />
              <input
                type="text"
                placeholder="Reason for Credit Repair"
                className="p-4 font-montserrat bg-[#496480] font-[400] text-[18px] leading-[22px]"
              />
              <textarea
                placeholder="How Soon?"
                className="p-3 font-montserrat bg-[#496480] font-[400] text-[18px] leading-[22px] h-[250px]"
              ></textarea>
              <button className="p-3 w-[186px] h-[54px] bg-[#46CC02]  text-white font-[400] font-inter text-[18px] leading-[22px]">
                Sign Up Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
