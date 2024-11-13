// import React from "react";
// import Matthew from "../asset/Matthew.png";
// import Jack from "../asset/Jack.png";
// import Susan from "../asset/manS.png";

// export function Testinomial() {
//   return (
//     <div className="bg-white relative py-10 flex flex-col items-center">
//       {/* Header Section */}
//       <div className="text-center mb-8">
//         <h2 className="text-3xl text-blue-600 font-semibold">
//           What Our Customers Say?
//         </h2>
//       </div>

//       {/* Slate Background Section (Positioned Below Cards) */}
//       <div className="absolute top-[100px] w-full bg-blue-800 h-[200px] z-0"></div>
//       <div className="absolute top-[125px] w-[1100px] bg-white shadow-xl h-[250px] rounded-md z-5"></div>

//       {/* Stacked Card Container */}
//       <div className="relative flex justify-center top-[50px] items-center w-full max-w-4xl h-[400px]">
//         {/* Left Card */}
//         <div className="absolute w-[330px] h-[330px] bg-white shadow-lg border-4 border-blue-800 z-10 left-[10px] top-[25px] flex flex-col p-4">
//           <div className="flex items-start">
//             <div className="flex-shrink-0 w-[120px] h-[120px] mr-4">
//               <img
//                 src={Matthew}
//                 alt="Customer 1"
//                 className="w-full h-full rounded object-cover"
//               />
//             </div>
//             <div className="flex flex-col">
//               <p className="text-sm text-gray-700 leading-tight">
//                 "I'm very pleased with the service I received from the A-Team. My
//                 credit was in terrible shape and I couldn't get a decent rate on
//                 anything. The transformation saved us thousands. I'm about to close
//                 on a house. The service is excellent and fast."
//               </p>
//               <div className="mt-4">
//                 <span className="text-md font-semibold text-gray-600">Mathew S.</span>
//                 <p className="text-xs text-gray-500">June 17, 2024 / Brooklyn, NY</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Center Card */}
//         <div className="absolute w-[330px] h-[370px] bg-white shadow-lg border-4 border-blue-800 z-20 top-[10px] flex flex-col p-4">
//           <div className="flex items-start">
//             <div className="flex-shrink-0 w-[120px] h-[120px] mr-4">
//               <img
//                 src={Jack}
//                 alt="Customer 2"
//                 className="w-full h-full rounded object-cover"
//               />
//             </div>
//             <div className="flex flex-col">
//               <p className="text-sm text-gray-700 leading-tight">
//                 "I'm very pleased with the service I received from the A-Team. My
//                 credit was in terrible shape and I couldn't get a decent rate on
//                 anything. The transformation saved us thousands. I'm about to close
//                 on a house. The service is excellent and fast."
//               </p>
//               <div className="mt-4">
//                 <span className="text-md font-semibold text-gray-600">Jack D.</span>
//                 <p className="text-xs text-gray-500">July 10, 2024 / San Francisco, CA</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Card */}
//         <div className="absolute w-[330px] h-[330px] bg-white shadow-lg border-4 border-blue-800 z-10 right-[10px] top-[25px] flex flex-col p-4">
//           <div className="flex items-start">
//             <div className="flex-shrink-0 w-[120px] h-[120px] mr-4">
//               <img
//                 src={Susan}
//                 alt="Customer 3"
//                 className="w-full h-full rounded object-cover"
//               />
//             </div>
//             <div className="flex flex-col">
//               <p className="text-sm text-gray-700 leading-tight">
//                 "I'm very pleased with the service I received from the A-Team. My
//                 credit was in terrible shape and I couldn't get a decent rate on
//                 anything. The transformation saved us thousands. I'm about to close
//                 on a house. The service is excellent and fast."
//               </p>
//               <div className="mt-4">
//                 <span className="text-md font-semibold text-gray-600">Susan A.</span>
//                 <p className="text-xs text-gray-500">August 5, 2024 / Chicago, IL</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";
import Matthew from "../asset/Matthew.png";
import Jack from "../asset/Jack.png";
import Susan from "../asset/manS.png";
import comma from "../asset/comma.png";

export function Testinomial() {
  return (
    <div className="bg-white relative py-10 flex flex-col items-center">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl text-blue-600 font-semibold">
          What Our Customers Say?
        </h2>
      </div>

      {/* Background Section (Behind Cards) */}
      <div className="absolute top-[100px] w-full bg-blue-800 h-[200px] z-0"></div>
      <div className="absolute top-[125px] w-[1100px] bg-white shadow-xl h-[250px] rounded-md z-5"></div>

      {/* Testimonial Cards Container */}
      <div className="relative flex justify-center top-[50px] items-center w-full max-w-4xl h-[400px]">
        {/* Left Card */}
        <div className="absolute  w-[330px] h-[330px] bg-white shadow-lg border-4 border-blue-800 z-10 left-[10px] top-[25px] flex flex-col items-center p-4">
          {/* Image Section */}
          <img
            src={Matthew}
            alt="Customer 1"
            className="w-[120px] h-[120px] rounded object-cover mb-2"
          />
          {/* Name and Date Section */}
          <span className="text-md font-semibold text-gray-600">Mathew S.</span>
          <p className="text-xs text-gray-500 mb-4">June 17, 2024 / Brooklyn, NY</p>
          {/* Feedback Section */}
          <p className="text-[10px] font-bold text-gray-700 leading-tight text-center">
            <img src={comma} alt="comma" className="w-[20px] h-[20px] "/>
            "I'm very pleased with the service I received from the A-Team. My
            credit was in terrible shape and I couldn't get a decent rate on
            anything. The transformation saved us thousands. I'm about to close
            on a house. The service is excellent and fast."
            <img src={comma} alt="comma" className="w-[20px] h-[20px] transform rotate-180 ml-2 inline-block align-bottom"/>
          </p>
        </div>

        {/* Center Card (Slightly Bigger) */}
        <div className="absolute w-[360px] h-[360px] bg-white shadow-lg border-4 border-blue-800 z-20 flex top-3 flex-col items-center p-4">
          {/* Image Section */}
          <img
            src={Jack}
            alt="Customer 2"
            className="w-[130px] h-[130px] rounded object-cover mb-2"
          />
          {/* Name and Date Section */}
          <span className="text-md font-semibold text-gray-600">Jack D.</span>
          <p className="text-xs text-gray-500 mb-4">July 10, 2024 / San Francisco, CA</p>
          {/* Feedback Section */}
          <p className="text-[10px] font-bold text-gray-700 leading-tight text-center">
            <img src={comma} alt="comma" className="w-[20px] h-[20px]"/>
            "I'm very pleased with the service I received from the A-Team. My
            credit was in terrible shape and I couldn't get a decent rate on
            anything. The transformation saved us thousands. I'm about to close
            on a house. The service is excellent and fast."
            <img src={comma} alt="comma" className="w-[20px] h-[20px] transform rotate-180 ml-2 inline-block align-bottom"/>
          </p>
        </div>

        {/* Right Card */}
        <div className="absolute w-[330px] h-[330px] bg-white shadow-lg border-4 border-blue-800 z-10 right-[10px] top-[25px] flex flex-col items-center p-4">
          {/* Image Section */}
          <img
            src={Susan}
            alt="Customer 3"
            className="w-[120px] h-[120px] rounded object-cover mb-2"
          />
          {/* Name and Date Section */}
          <span className="text-md font-semibold text-gray-600">Susan A.</span>
          <p className="text-xs text-gray-500 mb-4">August 5, 2024 / Chicago, IL</p>
          {/* Feedback Section */}
            <p className="text-[10px] font-bold text-gray-700 leading-tight text-center">
            <img src={comma} alt="comma" className="w-[20px] h-[20px]"/>
            "I'm very pleased with the service I received from the A-Team. My
            credit was in terrible shape and I couldn't get a decent rate on
            anything. The transformation saved us thousands. I'm about to close
            on a house. The service is excellent and fast."
            <img src={comma} alt="comma" className="w-[20px] h-[20px] transform rotate-180 ml-2 inline-block align-bottom"/>
          </p>
        </div>
      </div>
    </div>
  );
}
