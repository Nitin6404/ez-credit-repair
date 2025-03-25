import AboutUs from '../components/asset/AboutUsbackground.png';
// import pricingPageAero from '../components/asset/pricingPageAero.svg';
// import pricingPageCircleBlue from '../components/asset/pricingPageCircleBlue.svg';
import pricingBoiWithTransparency from '../components/asset/pricing-boi-with-transparency.svg';
import { CreditServices } from '../components/common/CreditServices';
import { Link } from 'react-router-dom';
export function Pricing() {
  return (
    <div className="flex w-full flex-col">
      <div className="relative mt-3 p-2">
        {/* Background Image */}
        <img
          src={AboutUs}
          alt="About Us Background"
          className="absolute inset-0 mt-8 h-full w-full object-cover opacity-100"
        />

        {/* Inner Div with Background Image */}
        <div className="relative flex h-32 items-center p-2 text-white">
          <div className="ml-5 mt-[50px] flex max-w-screen-lg font-inter text-lg font-bold leading-7 sm:ml-[80px] sm:text-2xl">
            <span className="ml-3 sm:ml-10">
              <Link to="/">Home</Link>
            </span>
            <span className="mx-1">|</span>
            <span>Pricing</span>
          </div>
        </div>
      </div>
      <div className="mx-4 mb-10 mt-[58px] flex justify-center text-center md:mx-16 md:mb-8">
        <div className="w-full max-w-7xl text-start font-inter text-2xl font-semibold leading-7">
          <h1 className="font-inter text-3xl font-bold text-[#15549A] md:text-5xl md:leading-[60px]">
            We only have 1 plan – A Comprehensive Service Plan
          </h1>
          <h4 className="font-inter text-lg font-medium leading-[22px] text-[#173455] md:text-[16px]">
            We are committed to providing you with the full support you need. When you come to us,
            we understand that you&apos;re seeking the best possible assistance. That’s why we never
            hold back we strive to ensure your satisfaction every step of the way.
          </h4>
          <h2 className="font-inter text-xl font-bold text-[#04284F] md:text-3xl">
            Comprehensive Plan: $99/mo
          </h2>
        </div>
      </div>
      <div className="flex h-auto w-full items-center justify-center bg-[url('/src/components/asset/pricingBg.svg')] bg-cover bg-center py-10 md:h-[535px]">
        <div className="flex flex-col items-center text-center font-inter">
          <div className="w-full text-nowrap text-2xl font-bold leading-[35px] text-white md:text-[40px] md:leading-[55px]">
            <p>How Much Does EzeCredit Repair Cost </p>
            <p>($99/mo)</p>
          </div>
          <div className="my-4">
            <div className="text-lg font-normal leading-7 text-white md:text-[29px] md:leading-9">
              Find a solution that works for you
            </div>
          </div>
          <div className="mt-1 flex w-full items-center justify-center px-4 md:px-10">
            <button className="rounded-xl bg-[#46CC02] px-4 py-2 text-lg font-extrabold text-white md:text-2xl">
              GET STARTED
            </button>
          </div>
        </div>
      </div>
      <div className="relative mx-auto mt-10 w-full overflow-visible bg-white px-4 md:mt-0 md:px-0">
        <div className="flex flex-col items-start justify-center md:flex-row md:px-3">
          <div className="h-full max-w-full md:h-[485px] md:max-w-4xl">
            <div className="flex h-full w-full flex-col justify-center">
              <h2 className="mb-8 font-inter text-3xl font-bold leading-[40px] text-[#15549A] md:text-[50px] md:leading-[60px]">
                At EzeCredit Repair, Transparency and Results Are Our Priority
              </h2>
              <p className="w-full font-inter text-lg font-normal leading-7 text-[#173455] md:w-[740px] md:text-[22px] md:leading-[32px]">
                We don&apos;t believe in confusing monthly plans or piling on extra fees. Instead,
                we provide every client with the same dedicated approach and unwavering effort. Our
                team works quickly and efficiently to deliver tangible improvements to your credit
                score without unnecessary delays. With EzeCredit Repair, there are no hidden costs
                just real results you can trust.
              </p>
            </div>
          </div>
          <div className="relative mt-16 h-72 w-full md:mt-0 md:h-[485px] md:w-[304px]">
            <img
              src={pricingBoiWithTransparency}
              alt="Pricing Representative"
              className="absolute -top-3 right-0 h-full w-full overflow-visible object-contain lg:-top-0 lg:left-10 lg:object-cover"
            />
          </div>
        </div>
      </div>
      <CreditServices />
      <LastHeading />
    </div>
  );
}

function LastHeading() {
  return (
    <div className="-mb-2 flex w-full items-center justify-center bg-[#46CC02] font-inter font-bold">
      <div className="mx-4 my-16 md:mx-20">
        <div className="heading-9 text-center text-xl text-white md:px-56 md:text-3xl">
          With our fast and efficient process, we guarantee <br className="hidden md:block" />{' '}
          results and a clearer path to financial freedom.
        </div>
      </div>
    </div>
  );
}

// function CreditRepairProcess() {
//   const steps = [
//     {
//       title: 'Credit Assessment & Target Identification',
//       description: [
//         'We begin by pulling your credit report from all three major bureaus—TransUnion, Experian, and Equifax.',
//         'Our experts conduct a comprehensive assessment to identify all negative and derogatory items impacting your score.',
//         'These identified issues are detailed in our service agreement, ensuring transparency and clarity on the items we will target for removal.',
//         'We also provide your current FICO and Vantage Score as part of this report.',
//       ],
//     },
//     {
//       title: 'Item Removal Process',
//       description: [
//         'Once the service agreement is finalized, we go to work on removing the negative items.',
//         'We focus on inaccuracies, unverified information, late payments, collections, and other derogatory items listed in your agreement.',
//         'We handle all disputes and interventions with the bureaus and creditors to ensure your credit report is cleaned up as quickly as possible.',
//       ],
//     },
//     {
//       title: 'Timely Progress Updates',
//       description: [
//         'Throughout the process, you’ll receive timely updates as each negative item is removed from your credit profile.',
//         'Our member dashboard allows you to track real-time progress and view the improvements on all three credit reports.',
//       ],
//     },
//     {
//       title: 'Post-Cleanup Score Boost Options',
//       description: [
//         'Once all targeted items are removed, we’ll provide options to help boost your score further.',
//         'This may include credit line recommendations, secured credit cards, or other strategies to help you reach your desired FICO score range.',
//       ],
//     },
//     {
//       title: 'Ongoing Monitoring & Maintenance',
//       description: [
//         'To ensure long-term success, we offer ongoing credit monitoring services.',
//         'We’ll track your credit score improvements, helping you maintain a strong credit standing.',
//       ],
//     },
//   ];

//   return (
//     <div className="mx-4 my-10 md:mx-28">
//       <p className="mb-8 text-center text-3xl font-normal leading-[40px] text-[#15549A] md:text-5xl md:leading-[60px]">
//         EzeCredit Repair Service Recap
//       </p>
//       <div className="space-y-8">
//         {steps.map((step, index) => (
//           <div key={index} className="rounded-b-2xl bg-[#ECF6FF]">
//             <div className="flex w-full flex-col items-start justify-start space-y-2 bg-[#15549A] px-2 py-2 font-inter text-xl leading-7 md:flex-row md:items-center md:space-x-5 md:space-y-0 md:text-3xl md:leading-9">
//               <div className="rounded-tl-[30px] bg-white px-3 py-2 font-bold text-[#15549A]">
//                 Step {index + 1}
//               </div>
//               <div className="font-normal text-white">{step.title}</div>
//             </div>
//             <div className="px-4 py-5 md:px-10">
//               <ul className="list-none space-y-3">
//                 {step.description.map((desc, idx) => (
//                   <li
//                     key={idx}
//                     className="flex h-full items-start text-base text-[#555] md:text-lg"
//                   >
//                     <img
//                       src={pricingPageCircleBlue}
//                       alt="Bullet"
//                       width={30}
//                       height={30}
//                       className="mr-2 md:mr-4 md:h-[47px] md:w-[47px]"
//                     />
//                     <img
//                       src={pricingPageAero}
//                       alt="Arrow"
//                       width={15}
//                       height={18}
//                       className="absolute ml-2 mt-2 md:ml-3.5 md:mt-3"
//                     />
//                     <div className="flex h-full w-full items-center text-lg leading-7 text-[#1C2228] md:text-2xl md:leading-7 lg:mt-2">
//                       {desc}
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
