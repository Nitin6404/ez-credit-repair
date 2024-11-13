import React from 'react';
import { Footer } from '../common/Footer';
import { Testinomial } from '../common/Testinomial';

export function Service()  {
  return (
    <div>
        <div class="bg-blue-900 text-white p-2 flex items-center h-[80px] mt-3">
  <div class="flex justify-start max-w-screen-lg ml-10">
    <span class="font-semibold ml-10">Home</span>
    <span class="mx-1">|</span>
    <span class="font-semibold">Services</span>
  </div>
</div>
    <div className="w-full flex flex-col md:flex-row items-start justify-between p-6 bg-white">
      {/* Left Column - Services List */}
      <div className="md:w-[300px] mb-4 md:mb-0">
        <h2 className="text-3xl font-bold mb-4 text-blue-800">Our Services</h2>
        <div className="space-y-2">
          <div className="flex items-center p-4 bg-green-500 text-white rounded">
            <span className="bg-white text-green-500 font-bold rounded-sm w-5 h-5 flex items-center justify-center mr-3">01</span>
            <span>Credit Report Analysis</span>
          </div>
          <div className="flex items-center p-4 bg-green-500 text-white rounded">
            <span className="bg-white text-green-500 font-bold rounded-full w-5 h-5 flex items-center justify-center mr-3">02</span>
            <span>Dispute & Escalations</span>
          </div>
          <div className="flex items-center p-4 bg-green-500 text-white rounded">
            <span className="bg-white text-green-500 font-bold rounded-full w-5 h-5 flex items-center justify-center mr-3">03</span>
            <span>Credit Recovery</span>
          </div>
        </div>
      </div>
      
      {/* Right Column - Image and Description */}
      <div className="md:w-2/3 mt-[100px]">
        <img 
          src="https://via.placeholder.com/400x150" 
          alt="Credit Report Analysis" 
          className="w-full h-auto mb-4 rounded shadow-md bg-black"
        />
        <h3 className="text-xl font-bold mb-2 text-blue-800">Credit Report Analysis</h3>
        <p className="text-gray-700">
          We start by assessing your current credit situation and identifying the roadblocks impacting your score. Each case is unique, but we specialize in spotting inaccuracies and other factors that should not be in your report damaging to credit reputation. Together, we’ll map out a plan to a better credit score.
        </p>
      </div>
      
    </div>
    <div className="w-[1050px] min-h-[400px] mt-[100px] mb-2 mx-auto flex items-center justify-between p-6 bg-gray-100">
  {/* Right Side Image */}
  <div className="w-1/2 max-w-xs">
    <img 
      src='' 
      alt="Placeholder" 
      className="w-full h-auto rounded"
    />
  </div>

  {/* Left Side Text */}
  <div className="max-w-md">
    <h1 className="text-3xl font-bold mb-4 mr-10">Better Credits awaits,</h1>
    <h2 className="text-2xl ">And It's easir than you think.</h2>
    <h2 className="text-2xl">We Are Ready to Help</h2>
    
    <button className="mt-5 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Sign Up Now</button>
  </div>
</div>
<Testinomial></Testinomial>
    <Footer></Footer>
    </div>
   
  
    
    
  );
};


