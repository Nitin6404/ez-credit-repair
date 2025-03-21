import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Clock } from 'lucide-react';

// Asset imports
import AboutUs from '../components/asset/AboutUsbackground.png';
import badCreditNew from '../components/asset/badCreditNew.svg';

// Learning center imports
import relatedArticlesImage1 from '../components/learning-center/related-article-1.svg';
import relatedArticlesImage2 from '../components/learning-center/related-article-2.svg';
import relatedArticlesImage3 from '../components/learning-center/related-article-3.svg';
import relatedArticlesImage4 from '../components/learning-center/related-article-4.svg';
import followUsSocial from '../components/learning-center/follow-us-social.svg';
import course1 from '../components/learning-center/course-1.svg';
import course2 from '../components/learning-center/course-2.svg';
import course3 from '../components/learning-center/course-3.svg';
import course4 from '../components/learning-center/course-4.svg';
import course5 from '../components/learning-center/course-5.svg';
import course6 from '../components/learning-center/course-6.svg';

export function LearningCenter() {
  const [searchTerm, setSearchTerm] = useState('');

  const videoTopics = [
    'Understanding a Good Credit Score',
    'What affects your credit score',
    'FCRA vs FDCPA vs what are your rights',
    'Ways to Improve Your Credit Score',
    'The Importance of Having a Good Credit Score',
    'Ways to Check Your Credit Score',
    'Steps to Understanding Credit Reports',
    'The Best Ways To Remove Credit',
    'Bad Credit Guide to Best Credit',
    'Data Protection Laws Help You Win',
  ];

  const featuredContent = [
    {
      title: 'Data Science Courses',
      description:
        'Credit repair is the process of fixing a credit history that has one of more problems, such as errors, identity',
      image: course1,
      duration: null,
      type: 'video',
    },
    {
      title: 'What defines a good credit score, and how can you achieve it?',
      description:
        'Credit repair is the process of fixing a credit history that has one of more problems, such as errors, identity',
      image: course2,
      duration: '30Hrs 45 Mins',
      type: 'article',
    },
    {
      title: 'FICO vs. VantageScore: What You Need to Know',
      description:
        'Credit repair is the process of fixing a credit history that has one of more problems, such as errors, identity',
      image: course3,
      duration: '30Hrs 45 Mins',
      type: 'article',
    },
    {
      title: 'Ways to Improve Your Credit Score',
      description:
        'Credit repair is the process of fixing a credit history that has one of more problems, such as errors, identity',
      image: course4,
      duration: '30Hrs 45 Mins',
      type: 'article',
    },
    {
      title: 'The Importance of Having a Good Credit Score',
      description:
        'Credit repair is the process of fixing a credit history that has one of more problems, such as errors, identity',
      image: course5,
      duration: '30Hrs 45 Mins',
      type: 'article',
    },
    {
      title: 'Ways to Check Your Credit Score',
      description:
        'Credit repair is the process of fixing a credit history that has one of more problems, such as errors, identity',
      image: course6,
      duration: '30Hrs 45 Mins',
      type: 'article',
    },
  ];

  const relatedArticles = [
    {
      title: 'Atmospheric Chemistry Courses',
      description:
        'Credit repair is the process of fixing a credit history that has one of more problems, such as errors, identity',
      image: relatedArticlesImage1,
    },
    {
      title: 'Atmospheric Chemistry Courses',
      description:
        'Credit repair is the process of fixing a credit history that has one of more problems, such as errors, identity',
      image: relatedArticlesImage2,
    },
    {
      title: 'Atmospheric Chemistry Courses',
      description:
        'Credit repair is the process of fixing a credit history that has one of more problems, such as errors, identity',
      image: relatedArticlesImage3,
    },
    {
      title: 'Atmospheric Chemistry Courses',
      description:
        'Credit repair is the process of fixing a credit history that has one of more problems, such as errors, identity',
      image: relatedArticlesImage4,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="relative">
        <img
          src={AboutUs}
          alt="About Us Background"
          className="absolute inset-0 h-[130px] w-full object-cover"
        />
        <div className="relative flex h-[130px] items-center text-white">
          <div className="ml-5 flex font-inter text-lg font-bold sm:ml-[80px] sm:text-2xl">
            <Link to="/">Home</Link>
            <span className="mx-2">|</span>
            <span>Learning Center</span>
          </div>
        </div>
      </div>

      <div className="mx-16 max-w-full px-4 py-8">
        <div className="flex flex-col gap-4 lg:flex-row">
          {/* Left Column - Video Topics */}
          <div className="w-full lg:w-1/4">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 font-bold text-[#0c3b5e]">VIDEO TOPIC</h3>

              {/* Understanding a Good Credit Score Section */}
              <div className="mb-4">
                <button className="flex w-full items-center justify-between text-left">
                  <span className="font-semibold text-[#0c3b5e]">
                    Understanding a Good Credit Score
                  </span>
                  <span className="text-sm">▼</span>
                </button>
                <ul className="mt-2 space-y-2 pl-4">
                  <li className="text-sm text-gray-700">
                    What defines a good credit score, and...
                  </li>
                  <li className="text-sm text-gray-700">FICO vs. VantageScore: What You Ne...</li>
                  <li className="text-sm text-gray-700">Ways to Improve Your Credit Score...</li>
                  <li className="text-sm text-gray-700">The Importance of Having a Good Cr...</li>
                  <li className="text-sm text-gray-700">Ways to Check Your Credit Score</li>
                </ul>
              </div>

              {/* Understanding a Credit Report Section */}
              <div className="mb-4">
                <button className="flex w-full items-center justify-between text-left">
                  <span className="font-semibold text-[#0c3b5e]">
                    Understanding a Credit Report
                  </span>
                  <span className="text-sm">▼</span>
                </button>
              </div>

              {/* Guide to Understanding Your Credit Section */}
              <div className="mb-4">
                <button className="flex w-full items-center justify-between text-left">
                  <span className="font-semibold text-[#0c3b5e]">
                    A Guide to Understanding Your Cre...
                  </span>
                  <span className="text-sm">▼</span>
                </button>
              </div>

              {/* Effective Ways Section */}
              <div className="mb-4">
                <button className="flex w-full items-center justify-between text-left">
                  <span className="font-semibold text-[#0c3b5e]">
                    Effective Ways to Build Your Credit
                  </span>
                  <span className="text-sm">▼</span>
                </button>
              </div>

              {/* Best Credit Cards Section */}
              <div className="mb-4">
                <button className="flex w-full items-center justify-between text-left">
                  <span className="font-semibold text-[#0c3b5e]">
                    Best Credit Cards for Bad Credit
                  </span>
                  <span className="text-sm">▼</span>
                </button>
              </div>

              {/* Personal Loan Section */}
              <div className="mb-4">
                <button className="flex w-full items-center justify-between text-left">
                  <span className="font-semibold text-[#0c3b5e]">
                    Can a Personal Loan Help You Deal...
                  </span>
                  <span className="text-sm">▼</span>
                </button>
              </div>
            </div>

            {/* Bad Credit Image */}
            <div className="mt-8">
              <img src={badCreditNew} alt="Bad Credit" className="w-full rounded-lg shadow-sm" />
            </div>
          </div>

          {/* Middle Column - Main Content */}
          <div className="w-full lg:w-1/2">
            {/* Featured Content Grid */}
            <div className="grid grid-cols-1 gap-6">
              {/* Main Video */}
              {featuredContent.slice(0, 1).map((content, index) => (
                <div
                  key={index}
                  className="relative aspect-video w-full overflow-hidden rounded-lg border-[1px] border-[#919191] bg-[#0c3b5e]"
                >
                  <img
                    src={content.image}
                    alt={content.title}
                    className="h-full w-full object-cover opacity-50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="text-6xl text-white opacity-80 hover:opacity-100">▶</button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                    <h3 className="text-lg font-semibold">{content.title}</h3>
                    <p className="mt-1 text-sm opacity-90">{content.description}</p>
                  </div>
                </div>
              ))}

              {/* Article Grid */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {featuredContent.slice(1).map((content, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-lg border-[1px] border-[#919191] bg-white p-2 pb-6 shadow-sm"
                  >
                    {/* Video Thumbnail Container */}
                    <div className="relative aspect-video">
                      <img
                        src={content.image}
                        alt={content.title}
                        className="h-full w-full rounded-md object-cover"
                      />
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
                        <button className="text-4xl text-white">▶</button>
                      </div>
                    </div>
                    {/* Video Info */}
                    <div className="relative">
                      <h4 className="mb-1 line-clamp-2 font-semibold text-[#0c3b5e]">
                        {content.title}
                      </h4>
                      <p className="mb-1 line-clamp-2 text-xs text-gray-600">
                        {content.description}
                      </p>
                      {/* Duration Badge */}
                      {content.duration && (
                        <div className="bottom-2right-1 absolute rounded px-2 py-1 text-xs font-bold text-red-500">
                          <div className="flex items-center">
                            <Clock className="mr-1 h-5 w-5" />
                            {content.duration}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Related Articles and Search */}
          <div className="w-full lg:w-1/4">
            {/* Search Section */}
            <div className="mb-6 rounded-md bg-[#EFEFEF] p-3 text-black">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full rounded-md border border-gray-300 bg-white p-3 shadow-sm placeholder:text-black focus:border-blue-500 focus:outline-none"
              />
              <button className="mt-2 w-full rounded-md bg-[#9C9C9C] py-2">Find Video</button>
            </div>

            {/* Related Articles */}
            <div className="rounded-lg">
              <h2 className="mb-3 text-2xl font-bold text-[#0c3b5e]">Related Articles/ Videos</h2>
              <div className="space-y-4 rounded-md border-[1px] border-[#919191] bg-[#E2E2E2]">
                {relatedArticles.map((article, index) => (
                  <div
                    key={index}
                    className="flex cursor-pointer items-start gap-3 rounded-md p-3 transition-all"
                  >
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-16 w-16 rounded object-cover"
                    />
                    <div>
                      <h4 className="mb-1 text-xs font-bold text-[#04284F]">{article.title}</h4>
                      <p className="text-[10px] text-[#04284F]">{article.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Follow us section */}
              <div className="mt-8">
                <h3 className="mb-3 text-xl font-bold text-[#0c3b5e]">Follow us</h3>
                <img src={followUsSocial} alt="Follow us" className="w-3/4 rounded-lg" />
              </div>
            </div>
          </div>
        </div>

        {/* Related Videos Section */}
        <div className="mt-12">
          <div className="mb-6 bg-[#0c3b5e] px-4 py-2">
            <h2 className="text-xl font-bold text-white">Related Video</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            <div className="overflow-hidden rounded-lg bg-white shadow-sm">
              <img
                src={course4}
                alt="Ways to Improve Your Credit Score"
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h4 className="mb-2 font-semibold text-[#0c3b5e]">
                  Ways to Improve Your Credit Score
                </h4>
                <p className="text-sm text-gray-600">
                  Credit repair is the process of fixing a credit history that has one of more
                  problems, such as errors, identity
                </p>
                <div className="mt-2 text-xs text-red-600">30Hrs 45 Mins</div>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-white shadow-sm">
              <img
                src={course5}
                alt="The Importance of Having a Good Credit Score"
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h4 className="mb-2 font-semibold text-[#0c3b5e]">
                  The Importance of Having a Good Credit Score
                </h4>
                <p className="text-sm text-gray-600">
                  Credit repair is the process of fixing a credit history that has one of more
                  problems, such as errors, identity
                </p>
                <div className="mt-2 text-xs text-red-600">30Hrs 45 Mins</div>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-white shadow-sm">
              <img
                src={course4}
                alt="Ways to Improve Your Credit Score"
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h4 className="mb-2 font-semibold text-[#0c3b5e]">
                  Ways to Improve Your Credit Score
                </h4>
                <p className="text-sm text-gray-600">
                  Credit repair is the process of fixing a credit history that has one of more
                  problems, such as errors, identity
                </p>
                <div className="mt-2 text-xs text-red-600">30Hrs 45 Mins</div>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-white shadow-sm">
              <img
                src={course5}
                alt="The Importance of Having a Good Credit Score"
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h4 className="mb-2 font-semibold text-[#0c3b5e]">
                  The Importance of Having a Good Credit Score
                </h4>
                <p className="text-sm text-gray-600">
                  Credit repair is the process of fixing a credit history that has one of more
                  problems, such as errors, identity
                </p>
                <div className="mt-2 text-xs text-red-600">30Hrs 45 Mins</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
