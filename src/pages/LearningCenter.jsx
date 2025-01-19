import React from 'react';
import { Footer } from '../components/common/Footer';
import { Navbar } from '../components/common/Navbar';

export function LearningCenter() {
  const articles = [
    {
      title: 'Understanding Your Credit Score',
      description:
        'Learn about the factors that influence your credit score and how to improve it.',
      category: 'Credit Basics',
    },
    {
      title: 'Disputing Credit Report Errors',
      description:
        'A step-by-step guide to identifying and disputing errors on your credit report.',
      category: 'Credit Repair',
    },
    {
      title: 'Building Credit from Scratch',
      description: 'Essential tips for establishing credit when you have no credit history.',
      category: 'Credit Building',
    },
    {
      title: 'Debt Management Strategies',
      description: 'Effective strategies for managing and reducing your debt.',
      category: 'Debt Management',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-white">
        <div className="bg-[#15549A] py-16">
          <div className="mx-auto max-w-[1200px] px-4">
            <h1 className="text-center text-4xl font-bold text-white">Learning Center</h1>
            <p className="mt-4 text-center text-lg text-white">
              Expand your knowledge about credit repair and financial wellness
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-[1200px] px-4 py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {articles.map((article, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="mb-2 inline-block rounded-full bg-[#46CC02] px-3 py-1 text-sm text-white">
                  {article.category}
                </span>
                <h2 className="mb-3 text-2xl font-semibold text-[#15549A]">{article.title}</h2>
                <p className="text-[#4B4B4B]">{article.description}</p>
                <button className="mt-4 text-[#15549A] hover:underline">Read More →</button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
