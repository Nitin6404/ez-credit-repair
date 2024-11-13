import React, {useState} from "react"
import { Testinomial } from "../common/Testinomial";
import { Footer } from "../common/Footer";
import credit9 from '../asset/improvecs3.png';
import credit0 from '../asset/logo.png';
import credit8 from '../asset/Rectangle0.png';
import credit10 from '../asset/Rectangle10.png';
import credit11 from '../asset/Rectangle11.png';
import credit from '../asset/Rectangle.png';
import credit2 from '../asset/Rectangle1.png';
import credit3 from '../asset/Rectangle4.png';
import credit4 from '../asset/Rectangle2.png';
import hands from '../asset/hands.png';
import mobile from '../asset/mobile.png';
import wemen from '../asset/Rectangle 20.png';
import rect3 from '../asset/REct3.png';
import chingchong from '../asset/chingchong.png';
export function Home() {
    return (
        // div of the woman 
    <>
        <div className="bg-zinc-100/20 flex  h-[430px] w-full">
            <div className="p-[60px]">
                <h2 className="text-blue-600  mb-1 text-2xl">YOUR PATH TO BETTER CREDIT,</h2>
                <h1 className="text-blue-900 text-4xl font-bold">MADE EASY</h1>
                <p className="text-zinc-600 text-xl mb-3 font-semibold">Let's Fix Your Credit and Raise Your Score</p>
                <p className="text-zinc-600 font-semibold">Unlock financial freedom with a better credit score.</p>
                <p className="text-zinc-600 font-semibold"> Our easy-to-follow approach helps you improve your </p>
                <p className="text-zinc-600 mb-5 font-semibold">credit for better rates,loans and peace of mind.</p>
                <button className="bg-blue-600 text-white px-4 py-1 rounded-md">SIGN UP NOW</button>
            </div>
            <div className=" w-[350px] z-10 right-[300px] absolute p-[20px]">
            <img 
                        src={credit11}
                        alt="Eze Credit Repair Logo" 
                        className="object-cover"
                    />
            </div>
        </div>
        {/* get started section  */}
        <div className="bg-blue-800 h-[500px] relative  w-full">
            <div className="bg-slate-500 w-1/2 h-[340px]  rounded-md absolute top-[100px] border-2 border-white left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img 
                        src={credit10}
                        alt="Eze Credit Repair Logo" 
                        className="object-cover"
                    /></div>
            <div className="absolute text-center left-1/2 transform -translate-x-1/2  bottom-5">
            
            <p className="text-white w-[900px] text-lg mb-[20px]">Achieving a better credit score is key to unlocking financial freedom and accessing life's biggest opportunities.With our EzeCredit Repair Program, our services will change your path to a brighter and improving credit profile,so you can secure better rates, loans, and financial peace of mind.</p>
            <button className="bg-red-600 font-bold text-xl text-white px-4 py-1 rounded-md ">Get Started</button>
            </div>
        </div>
        {/* About us section */}
        <div className="flex flex-col md:flex-row items-start py-8 px-12 font-sans">
      {/* Text Content */}
      <div className="flex-1 ">
        <h1 className="text-3xl font-bold text-blue-800">About Us</h1>
        <p className="text-base text-gray-800 mt-4 leading-relaxed">
          For the past 15 years, we've been dedicated to helping thousands of
          individuals repair their credit and reclaim financial control.
          At <strong>EzeCredit</strong>, we fight for every consumer's right to an accurate, fair,
          and substantiated credit report.
        </p>

        <h2 className="text-xl font-bold text-green-700 mt-6">Target Area</h2>
        <ul className="list-none pl-0 text-base text-gray-800 mt-4 space-y-2 leading-relaxed">
          <li>
            <span role="img" aria-label="check">✔️</span> Like the A-Team, we become your trusted advocates,
            challenging inaccuracies and disputing negative items until they are removed.
          </li>
          <li>
            <span role="img" aria-label="check">✔️</span> Credit Evaluation - In-depth assessment of your credit report
          </li>
          <li>
            <span role="img" aria-label="check">✔️</span> Unlimited Disputes: We challenge any number of inaccuracies
          </li>
          <li>
            <span role="img" aria-label="check">✔️</span> Debt & Inquiry Verification and Removal: We verify and dispute unauthorized inquiries
          </li>
          <li>
            <span role="img" aria-label="check">✔️</span> Escalation of Disputes for Fast Removal: We escalate disputes
            when necessary. Recommendations to Boost Score: Personalized strategies to help raise your credit score.
          </li>
        </ul>

        <button className="bg-blue-800 text-white px-4 py-2 rounded mt-6 text-sm flex items-center hover:bg-blue-900">
          READ MORE <span className="ml-2">→</span>
        </button>
      </div>

      {/* Image Placeholder */}
      <div className="flex-1 flex justify-center items-center mt-[50px] md:pl-6">
        <div className="w-[450px] h-80 flex justify-center items-center text-sm italic rounded-lg">
        <img 
              src={credit9}
              alt="Recovery Icon" 
              className="inline-block mr-2 object-contained"
            />
        </div>
      </div>
    </div>
    {/* What we do section*/}
    <div className="flex flex-col items-center bg-blue-900 text-white p-6 font-sans">
      
      {/* Main Container with Flex */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full space-x-0 md:space-x-10">
        
        {/* Left Side - What We Do Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 max-w-md">
          {/* Main Title */}
          <h1 className="text-3xl font-bold text-blue-200">What We Do</h1>
          
          {/* Description */}
          <p className="text-lg">
            Empowering You to Seize New Opportunities, <br />
            Because Everyone Deserves a Second Chance.
          </p>
          <p className="text-green-400 italic">
            When opportunity knocks, will your credit stand in the way?
          </p>
          
          {/* Services Header */}
          <div className="flex items-center space-x-3 mb-4"> {/* Flex container with spacing */}
  {/* Placeholder for Logo Image */}
  <div className="w-24 h-10 flex items-center justify-center rounded">
  <img 
                        src={credit0}
                        alt="Eze Credit Repair Logo" 
                        className="h-[60px] ml-[20px] "
                    />
  </div>
  
  {/* Services Benefits Heading */}
  <h2 className="text-2xl font-bold text-white">Services Benefits:</h2>
</div>
          
          {/* Benefits List */}
          <ul className="text-base space-y-3">
            <li className="flex items-start">
              <span className="text-green-400 mr-2">➡️</span> 
              Strong credit score opens doors to financial freedom.
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">➡️</span> 
              Easy path to better credit, to be ready for every opportunity that comes your way.
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">➡️</span> 
              Fast track repair and boost your score by 50-100 points* within 30 to 60 days.
            </li>
          </ul>

          {/* Get Started Button */}
          <button className="bg-green-500 text-white font-semibold px-6 py-2 rounded mt-4 hover:bg-green-600">
            GET STARTED
          </button>
        </div>

        {/* Right Side - Basketball Image and Text */}
        <div className="flex flex-col items-center justify-center mt-6 md:mt-0">
          {/* Basketball Image Placeholder */}
          <div className="w-[300px] h-[200px]  flex items-center justify-center mb-4">
          <img 
                        src={credit8}
                        alt="Eze Credit Repair Logo" 
                        className="object-cover ml-[20px] "
                    />
          </div>
          
          {/* Text beside the Basketball Image */}
          <p className="text-sm text-center md:text-left mt-[70px]">
            Don’t Let Your Credit Block Opportunities <br />
            Start Building a Better Score Today!
          </p>
        </div>

      </div>
    </div> 
           {/* faq section */}
           <FeQ3></FeQ3>
           <Contactform></Contactform>
           
           {/* progressive correct and recovery plan */}
           <Program></Program>
           {/* testimonials */}
           <Testinomial></Testinomial>


           {/* News Blog section */}
           <div className="p-8 bg-gray-100 min-h-screen">
        
        {/* Main Content Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-700">News & Blog</h1>
        </div>
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Credit Repair Section */}
          <div className="space-y-8">
            <h2 className="text-blue-700 text-xl font-bold">Credit Repair: What It Is, How It Works, Related...</h2>

            {/* Credit Repair Card 1 */}
            <div className=" relative rounded-lg shadow-md overflow-hidden">
              <img 
                src={hands} 
                alt="Credit Repair 1"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-sm border-2 border-white text-xs w-fit">August 29, 2024</span>
              </div>
            </div>

            {/* Credit Repair Card 2 */}
            <h2 className="text-blue-700 text-xl font-bold">Credit Repair: How Credit Repair Works</h2>
            <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={mobile} 
                alt="Credit Repair 2"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-sm border-2 border-white text-xs w-fit">August 29, 2024</span>
              </div>
            </div>
          </div>
          
          {/* Related Articles Section */}
          <div className="space-y-6 bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-700">Related Articles</h2>

            {/* Article 1 */}
            <div className="flex items-start space-x-4 border-b border-gray-300 pb-4">
              <img 
                src={wemen} 
                alt="Common Things"
                className="w-20 h-20 object-cover rounded-md"
              />
              <div>
                <h3 className="font-bold text-blue-700">Common Things That Improve or Lower Scores</h3>
                <p className="text-sm text-gray-600">
                  A secured credit card is a type of credit card that is backed by a cash deposit, which serves as collateral should you default on payments. A secured card can rebuild credit.
                </p>
              </div>
            </div>

            {/* Article 2 */}
            <div className="flex items-start space-x-4 border-b border-gray-300 pb-4">
              <img 
                src={rect3} 
                alt="Average Outstanding Balance"
                className="w-20 h-20 object-cover rounded-md"
              />
              <div>
                <h3 className="font-bold text-blue-700">Average Outstanding Balance on Credit Cards: How It Works and Calculation</h3>
                <p className="text-sm text-gray-600">
                  Credit history is the ongoing documentation of your financial information, including repayment of your debts. Your credit history is an essential part of your credit report.
                </p>
              </div>
            </div>

            {/* Article 3 */}
            <div className="flex items-start space-x-4 pb-4">
              <img 
                src={chingchong} 
                alt="What is a Secured Credit Card?"
                className="w-20 h-20 object-cover rounded-md"
              />
              <div>
                <h3 className="font-bold text-blue-700">What Is a Secured Credit Card? How It Works and Benefits</h3>
                <p className="text-sm text-gray-600">
                  A fair credit score falls in the range between poor and good. A fair FICO credit score is 580 to 669, and the equivalent near-prime VantageScore is 601 to 660.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
        
        
    )
}


function FeQ3  ()  {
    const [selectedQuestion, setSelectedQuestion] = useState('Can any credit be repaired?');
    
    const questions = [
      { question: 'Can any credit be repaired?', answer: 'Credit repair involves resolving any questionable negative items that may be damaging your credit profile. If the credit bureaus or your creditors cannot provide proof that these items are fair, accurate, and verified, they are legally required to remove them.' },
      { question: 'How long can this process take?', answer: 'The time varies depending on your unique credit situation, but results can often be seen within a few months.' },
      { question: 'What type of items can be removed on my credit report?', answer: 'Items such as late payments, collections, charge-offs, and other inaccurate or unfair items may be disputed and removed if applicable.' },
      { question: 'If I just pay off my bills will that restore my good credit?', answer: 'Paying off bills can help, but removing negative items and building positive credit history are key for credit restoration.' },
      { question: 'What is a good credit score?', answer: 'A good credit score typically ranges from 700 to 749, with higher scores reflecting better creditworthiness.' },
    ];
  
    const handleQuestionClick = (question) => {
      setSelectedQuestion(question);
    };
    return (
    <div>
     
      <div className="max-w-4xl ml-[1px] p-6">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">Frequently Asked Questions</h1>
        <div className="flex">
          <div className="w-1/4 border-4 mt-3 bg-gray-100 rounded-2xl border-white">
            {questions.map((q) => (
              <button
                key={q.question}
                onClick={() => handleQuestionClick(q.question)}
                className={`block w-full text-left p-4 border-b ${selectedQuestion === q.question ? 'bg-white border-l-4 border-blue-600 font-bold' : ''} hover:bg-white`}
              >
                {q.question}
              </button>
            ))}
          </div>
          <div className="w-1/3 p-4 mt-3 bg-white rounded-2xl border-4 border-black">
            <p>{questions.find((q) => q.question === selectedQuestion)?.answer}</p>
          </div>
        </div>
        </div>
        </div>
        )
        }


        function Program() {
            return (
                <div>
                     
    <div className="p-6 bg-white max-w-screen-lg mx-auto shadow-md rounded">
      {/* Header Section */}
      <div className="text-center mb-8">
        <p className="text-gray-700 mb-2">
          For the past 15 years, we've been dedicated to helping thousands of individuals repair their credit and reclaim financial control. At EzeCredit, we fight for every consumer’s right to an accurate, fair, and substantiated credit report.
        </p>
        <h2 className="text-3xl font-bold text-blue-800">Our Program</h2>
        <p className="text-gray-600">Progressive Corrective & Recovery Plan</p>
      </div>

      {/* Program Cards Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:space-x-4 mb-6">
        {/* Card 1 */}
        <div className="bg-green-500 text-white rounded p-4 flex-1 mb-4 md:mb-0">
          <div className="flex items-center">
            <div className="bg-white text-green-500 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">01</div>
            <h3 className="font-semibold">Credit Report Analysis</h3>
          </div>
          <div className="mt-2 bg-blue-100 text-gray-700 p-3 rounded">
          <img 
              src={credit}
              alt="Credit Report" 
              className="inline-block mr-2 w-[50px] h-[50px]"
            />
            Establish plan to identify roadblocks and inaccuracies impacting your score
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-green-500 text-white rounded p-4 flex-1 mb-4 md:mb-0">
          <div className="flex items-center">
            <div className="bg-white text-green-500 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">02</div>
            <h3 className="font-semibold">Dispute & Escalations</h3>
          </div>
          <div className="mt-2 bg-blue-100 text-gray-700 p-3 rounded">
          <img 
              src={credit2}
              alt="Dispute Icon" 
              className="inline-block mr-2 w-[50px] h-[50px]"
            />
            Challenge and Dispute negative items until they are removed
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-green-500 text-white rounded p-4 flex-1">
          <div className="flex items-center">
            <div className="bg-white text-green-500 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">03</div>
            <h3 className="font-semibold">Credit Recovery</h3>
          </div>
          <div className="mt-2 ml-[3px] bg-blue-100 text-gray-700 p-3 rounded relative">
            <img 
              src={credit4}
              alt="Recovery Icon" 
              className="inline-block mr-2 w-[38px] h-[42px]"
            />
            <img 
              src={credit3}
              alt="Recovery Icon" 
              className="inline-block mr-2 w-[55px] h-[58px] absolute left-[3px] top-[1px]"
            />

            Take action to boost your credit score to reach your desired score range
          </div>
        </div>
      </div>

      {/* Dispute & Escalation Details */}
      <h1 className='ml-[475px] text-7xl mt-[-40px]'>↓</h1>
      <div className="bg-blue-100 p-4 rounded shadow-md">
        <h4 className="text-lg font-bold text-blue-800 mb-2">Dispute & Escalation</h4>
        <p className="text-gray-700">
          We start by assessing your current credit situation and identifying the roadblocks impacting your score. Each case is unique, but we specialize in spotting inaccuracies and other factors that should not be in your report damaging to credit reputation. Together, we’ll map out a plan to a better credit score.
        </p>
      </div>
    </div>
                </div>
            )
        }


        function Contactform() {
            return (
                <div>
                       <div class="bg-blue-900 text-white p-2 flex items-center h-[80px] mt-3">
    <div className="flex justify-center mt-[-650px] px-4 py-6 bg-blue-700 rounded-2xl border-8 border-blue-800 w-[500px] h-[550px] mx-auto mb-1  ml-[700px] ">
      <div className="bg-blue-800 text-white w-full p-6 rounded-lg flex flex-col md:flex-row">
        {/* Left Section - Form */}
        <div className="flex-1 md:mr-8 mt-[-15px]">
          <h2 className="text-2xl font-bold">Start Your Recovery</h2>
          <form className="grid gap-3 mt-[25px]">
            <div className="grid grid-cols-2 gap-1">
              <input type="text" placeholder="First Name" className="p-3 rounded bg-white text-black" />
              <input type="text" placeholder="Last Name" className="p-3 rounded bg-white text-black" />
            </div>
            <input type="text" placeholder="Phone Number" className="p-3 rounded bg-white text-black" />
            <input type="text" placeholder="Subject" className="p-3 rounded bg-white text-black" />
            <input type="text" placeholder="Current Credit Score" className="p-3 rounded bg-white text-black" />
            <input type="text" placeholder="Reason for Credit Repair" className="p-3 rounded bg-white text-black" />
            <textarea placeholder="How Soon?" className="p-3 rounded bg-white text-black h-10"></textarea>
            <button className="p-3 rounded bg-green-500 text-white font-bold">Sign Up Now</button>
          </form>
        </div>
                </div>
                </div>
                </div>
                </div>
            )
        }