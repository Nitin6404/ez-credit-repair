import React, { useState } from "react";
import { Footer } from "../common/Footer";
import { Testinomial } from "../common/Testinomial";
import credit from "../asset/Rectangle.png";
import credit2 from "../asset/Rectangle1.png";
import credit3 from "../asset/Rectangle4.png";
import credit4 from "../asset/Rectangle2.png";
import about from '../asset/about.png';

export function About() {
  return (
    <div>
      <div class="bg-blue-900 text-white p-2 flex items-center h-[80px] mt-3">
        <div class="flex justify-start max-w-screen-lg ml-10">
          <span class="font-semibold ml-10">Home</span>
          <span class="mx-1">|</span>
          <span class="font-semibold">About Us</span>
        </div>
      </div>
      <div className="p-6 bg-white max-w-screen-lg mx-auto shadow-md rounded">
        {/* Header Section */}
        <div className="text-center mb-8">
          <p className="text-gray-700 mb-2">
            For the past 15 years, we've been dedicated to helping thousands of
            individuals repair their credit and reclaim financial control. At
            EzeCredit, we fight for every consumer’s right to an accurate, fair,
            and substantiated credit report.
          </p>
          <h2 className="text-3xl font-bold text-blue-800">Our Program</h2>
          <p className="text-gray-600">
            Progressive Corrective & Recovery Plan
          </p>
        </div>

        {/* Program Cards Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:space-x-4 mb-6">
          {/* Card 1 */}
          <div className="bg-green-500 text-white rounded p-4 flex-1 mb-4 md:mb-0">
            <div className="flex items-center">
              <div className="bg-white text-green-500 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                01
              </div>
              <h3 className="font-semibold">Credit Report Analysis</h3>
            </div>
            <div className="mt-2 bg-blue-100 text-gray-700 p-3 rounded">
              <img
                src={credit}
                alt="Credit Report"
                className="inline-block mr-2 w-[50px] h-[50px]"
              />
              Establish plan to identify roadblocks and inaccuracies impacting
              your score
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-green-500 text-white rounded p-4 flex-1 mb-4 md:mb-0">
            <div className="flex items-center">
              <div className="bg-white text-green-500 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                02
              </div>
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
              <div className="bg-white text-green-500 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                03
              </div>
              <h3 className="font-semibold">Credit Recovery</h3>
            </div>
            <div className="mt-2 ml-[5px] bg-blue-100 text-gray-700 p-3 rounded relative">
              <img
                src={credit4}
                alt="Recovery Icon"
                className="inline-block mr-2 w-[40px] h-[45px]"
              />
              <img
                src={credit3}
                alt="Recovery Icon"
                className="inline-block mr-2 w-[60px] h-[60px] absolute left-[3px] top-[0px]"
              />
              Take action to boost your credit score to reach your desired score
              range
            </div>
          </div>
        </div>

        {/* Dispute & Escalation Details */}
        <h1 className="ml-[475px] text-7xl mt-[-40px]">↓</h1>
        <div className="bg-blue-100 p-4 rounded shadow-md">
          <h4 className="text-lg font-bold text-blue-800 mb-2">
            Dispute & Escalation
          </h4>
          <p className="text-gray-700">
            We start by assessing your current credit situation and identifying
            the roadblocks impacting your score. Each case is unique, but we
            specialize in spotting inaccuracies and other factors that should
            not be in your report damaging to credit reputation. Together, we’ll
            map out a plan to a better credit score.
          </p>
        </div>
      </div>
      <FeQ1></FeQ1>
      <Testinomial></Testinomial>

      <Footer></Footer>
    </div>
  );
}

// export function FeQ1() {
//   // Use useEffect to handle DOM manipulation
//   useEffect(() => {
//     const items = document.querySelectorAll('.accordion-title');
//     items.forEach(item => {
//       const handleClick = () => {
//         const content = item.nextElementSibling;
//         const icon = item.querySelector('.plus-minus-icon');

//         item.classList.toggle('bg-gray-300');
//         if (content.classList.contains('hidden')) {
//           content.classList.remove('hidden');
//           icon.textContent = '-';
//         } else {
//           content.classList.add('hidden');
//           icon.textContent = '+';
//         }
//       };

//       // Attach click event listener
//       item.addEventListener('click', handleClick);

//       // Cleanup listener on component unmount
//       return () => {
//         item.removeEventListener('click', handleClick);
//       };
//     });
//   }, []);

//   return (
//     <div>
//     <div className="max-w-4xl ml-[400px] p-6 mt-[10px]">
//     <h1 className="text-3xl font-bold mb-4 text-blue-700">
//       Frequently Asked Questions
//     </h1>
//     </div>
//     <div className="bg-gray-100 font-sans p-[10px]">
//       <div className="w-4/5 mx-auto mt-[10px] bg-white border border-gray-300 rounded-lg overflow-hidden shadow-md">
//         <div className="border-b border-gray-300 mt-">
//           <div className="accordion-title flex justify-between items-center px-6 py-4 bg-white-100 cursor-pointer font-semibold hover:bg-gray-200">
//             Can any credit be repaired?
//             <span className="plus-minus-icon">+</span>
//           </div>
//           <div className="accordion-content px-6 py-4 hidden bg-gray-100">
//             <img 
//             src={about}
//             alt="Recovery Icon"
//             className=""
//             />
//             <p>
//               Credit repair involves resolving any questionable negative items
//               that may be damaging your credit profile. If the credit bureaus or
//               your creditors cannot provide proof that these items are fair,
//               accurate, and verified, they are legally required to remove them.
//             </p>
//           </div>
//         </div>
//         <div className="border-b border-gray-300">
//           <div className="accordion-title flex justify-between items-center px-6 py-4 bg-white-100 cursor-pointer font-semibold hover:bg-gray-200">
//             How long can this process take?
//             <span className="plus-minus-icon">+</span>
//           </div>
//           <div className="accordion-content px-6 py-4 hidden bg-gray-100">
//             <p>
//               The length of the credit repair process varies depending on the
//               number of items disputed and the responsiveness of the creditors
//               or credit bureaus.
//             </p>
//           </div>
//         </div>
//         <div className="border-b border-gray-300">
//           <div className="accordion-title flex justify-between items-center px-6 py-4 bg-white-100 cursor-pointer font-semibold hover:bg-gray-200">
//             What type of items can be removed on my credit report?
//             <span className="plus-minus-icon">+</span>
//           </div>
//           <div className="accordion-content px-6 py-4 hidden bg-gray-100">
//             <p>
//               Items such as late payments, charge-offs, collections, and
//               foreclosures can potentially be removed if they are found to be
//               inaccurate, unverifiable, or unfair.
//             </p>
//           </div>
//         </div>
//         <div className="border-b border-gray-300">
//           <div className="accordion-title flex justify-between items-center px-6 py-4 bg-white-100 cursor-pointer font-semibold hover:bg-gray-200">
//             If I just pay off my bills will that restore my good credit?
//             <span className="plus-minus-icon">+</span>
//           </div>
//           <div className="accordion-content px-6 py-4 hidden bg-gray-100">
//             <p>
//               Paying off bills is important, but it may not immediately improve
//               your credit score. Credit repair may still be necessary for
//               inaccurate items.
//             </p>
//           </div>
//         </div>
//         <div className="border-b border-gray-300">
//           <div className="accordion-title flex justify-between items-center px-6 py-4 bg-white-100 cursor-pointer font-semibold hover:bg-gray-200">
//             What is a good credit score?
//             <span className="plus-minus-icon">+</span>
//           </div>
//           <div className="accordion-content px-6 py-4 hidden bg-gray-100">
//             <p>
//               A good credit score generally ranges from 670 to 739. Higher
//               scores reflect better creditworthiness.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }


export function FeQ1() {
  // State to track which accordion index is open
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle function to handle accordion state
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: 'Can any credit be repaired?',
      content: (
        <>
          <img
            src={about} // Replace with your image URL or imported image
            alt="Recovery Icon"
            className="mb-4 w-[70px] h-[60px] absolute" // Optional: Add some styling (e.g., margin)
          />
          <p className="ml-[100px]">
            Credit repair involves resolving any questionable negative items that may be damaging your credit profile.
            If the credit bureaus or your creditors cannot provide proof that these items are fair, accurate, and
            verified, they are legally required to remove them.
          </p>
        </>
      ),
    },
    {
      title: 'How long can this process take?',
      content:
        'The length of the credit repair process varies depending on the number of items disputed and the responsiveness of the creditors or credit bureaus.',
    },
    {
      title: 'What type of items can be removed on my credit report?',
      content:
        'Items such as late payments, charge-offs, collections, and foreclosures can potentially be removed if they are found to be inaccurate, unverifiable, or unfair.',
    },
    {
      title: 'If I just pay off my bills will that restore my good credit?',
      content:
        'Paying off bills is important, but it may not immediately improve your credit score. Credit repair may still be necessary for inaccurate items.',
    },
    {
      title: 'What is a good credit score?',
      content: 'A good credit score generally ranges from 670 to 739. Higher scores reflect better creditworthiness.',
    },
  ];

  return (
    <div>
      <div className="max-w-4xl ml-[400px] p-6 mt-[10px]">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">Frequently Asked Questions</h1>
      </div>
      <div className="bg-white-100 font-sans p-[10px]">
        <div className="w-4/5 mx-auto mt-[10px] bg-white border border-gray-300 rounded-lg overflow-hidden shadow-md">
          {accordionData.map((item, index) => (
            <div key={index} className="border-b border-gray-300">
              <div
                className="accordion-title flex justify-between items-center px-6 py-4 bg-white-100 cursor-pointer font-semibold hover:bg-gray-200"
                onClick={() => toggleAccordion(index)}
              >
                {item.title}
                <span className="plus-minus-icon">{openIndex === index ? '-' : '+'}</span>
              </div>
              <div className={`accordion-content px-6 py-4 ${openIndex === index ? '' : 'hidden'} bg-gray-100`}>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}