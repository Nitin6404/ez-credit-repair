import React from 'react';
import { Navbar } from '../components/common/Navbar';

export function Tradelines() {
  const tradelines = [
    {
      name: 'Premium Credit Builder',
      creditLimit: '15,000',
      ageOfAccount: '8 years',
      paymentHistory: '100%',
      price: '799',
      features: ['Perfect Payment History', 'Low Utilization', 'Long Credit Age'],
    },
    {
      name: 'Elite Credit Booster',
      creditLimit: '25,000',
      ageOfAccount: '12 years',
      paymentHistory: '100%',
      price: '999',
      features: ['High Credit Limit', 'Excellent Account Age', 'Zero Late Payments'],
    },
    {
      name: 'Executive Credit Line',
      creditLimit: '50,000',
      ageOfAccount: '15 years',
      paymentHistory: '100%',
      price: '1,499',
      features: ['Maximum Impact', 'Oldest Account Age', 'Premium Credit Line'],
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-white">
        <div className="bg-[#15549A] py-16">
          <div className="mx-auto max-w-[1200px] px-4">
            <h1 className="text-center text-4xl font-bold text-white">Tradelines</h1>
            <p className="mt-4 text-center text-lg text-white">
              Boost your credit score with our premium tradeline options
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-[1200px] px-4 py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {tradelines.map((tradeline, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg transition-transform hover:-translate-y-1"
              >
                <h2 className="mb-4 text-2xl font-bold text-[#15549A]">{tradeline.name}</h2>
                <div className="mb-6 space-y-3 text-[#4B4B4B]">
                  <div className="flex justify-between">
                    <span>Credit Limit:</span>
                    <span className="font-semibold">${tradeline.creditLimit}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Account Age:</span>
                    <span className="font-semibold">{tradeline.ageOfAccount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Payment History:</span>
                    <span className="font-semibold">{tradeline.paymentHistory}</span>
                  </div>
                </div>
                <div className="mb-6">
                  <ul className="space-y-2">
                    {tradeline.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-[#4B4B4B]">
                        <svg
                          className="mr-2 h-5 w-5 text-[#46CC02]"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center">
                  <div className="mb-4 text-3xl font-bold text-[#15549A]">${tradeline.price}</div>
                  <button className="w-full rounded-lg bg-[#46CC02] py-3 font-semibold text-white transition-colors hover:bg-[#3db802]">
                    Select Tradeline
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
