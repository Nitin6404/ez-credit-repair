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
import playbackYoutube from '../components/learning-center/playback-youtube.svg';

export function LearningCenter() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSection, setExpandedSection] = useState('Understanding a Good Credit Score');

  const videoTopics = [
    {
      title: 'Understanding a Good Credit Score',
      items: [
        'What defines a good credit score, and...',
        'FICO vs. VantageScore: What You Ne...',
        'Ways to Improve Your Credit Score...',
        'The Importance of Having a Good Cr...',
        'Ways to Check Your Credit Score',
      ],
    },
    {
      title: 'Understanding a Credit Report',
      items: [
        'What defines a good credit score, and...',
        'FICO vs. VantageScore: What You Ne...',
        'Ways to Improve Your Credit Score...',
        'The Importance of Having a Good Cr...',
        'Ways to Check Your Credit Score',
      ],
    },
    {
      title: 'A Guide to Understanding Your Cre...',
      items: [
        'What defines a good credit score, and...',
        'FICO vs. VantageScore: What You Ne...',
        'Ways to Improve Your Credit Score...',
        'The Importance of Having a Good Cr...',
        'Ways to Check Your Credit Score',
      ],
    },
    {
      title: 'Effective Ways to Build Your Credit',
      items: [
        'What defines a good credit score, and...',
        'FICO vs. VantageScore: What You Ne...',
        'Ways to Improve Your Credit Score...',
        'The Importance of Having a Good Cr...',
        'Ways to Check Your Credit Score',
      ],
    },
    {
      title: 'Best Credit Cards for Bad Credit',
      items: [
        'What defines a good credit score, and...',
        'FICO vs. VantageScore: What You Ne...',
        'Ways to Improve Your Credit Score...',
        'The Importance of Having a Good Cr...',
        'Ways to Check Your Credit Score',
      ],
    },
    {
      title: 'Can a Personal Loan Help You Deal...',
      items: [
        'What defines a good credit score, and...',
        'FICO vs. VantageScore: What You Ne...',
        'Ways to Improve Your Credit Score...',
        'The Importance of Having a Good Cr...',
        'Ways to Check Your Credit Score',
      ],
    },
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

  const toggleSection = title => {
    setExpandedSection(expandedSection === title ? null : title);
  };

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
          <div className="absolute right-[84px] top-1/2 hidden w-full -translate-y-1/2 lg:block lg:w-[350px]">
            <div className="flex w-full justify-end">
              <select
                className="w-1/2 rounded-lg border-[1px] border-[#04284F] bg-white px-4 py-2 text-sm font-semibold text-[#04284F] outline-none"
                onChange={e => setSortBy(e.target.value)}
                defaultValue="Sort by"
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="a-z">A-Z</option>
                <option value="z-a">Z-A</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-6 max-w-full px-4 py-8 lg:mx-16">
        <div className="flex flex-col gap-4 lg:flex-row">
          {/* Left Column - Video Topics */}
          <div className="w-full lg:w-1/4">
            <div className="rounded-lg bg-white">
              <h3 className="mb-2 text-2xl font-bold text-[#04284F]">VIDEO TOPIC</h3>

              {videoTopics.map(topic => (
                <div key={topic.title} className="mb-3">
                  <button
                    onClick={() => toggleSection(topic.title)}
                    className="flex w-full items-center justify-between rounded-md border-[1px] border-[#919191] bg-gradient-to-b from-[#E0E0E0] to-[#FCFCFC] p-3 text-left"
                  >
                    <span className="text-md font-semibold text-[#04284F]">{topic.title}</span>
                    <span className="text-xs text-[#04284F]">
                      {expandedSection === topic.title ? '▼' : '▼'}
                    </span>
                  </button>
                  {expandedSection === topic.title && topic.items.length > 0 && (
                    <ul className="space-y-1 bg-white px-4 py-2">
                      {topic.items.map((item, index) => (
                        <>
                          <li key={index} className="text-md flex items-center text-[#04284F]">
                            <span className="mr-2 text-lg">•</span>
                            <p className="text-md">{item}</p>
                          </li>
                          {/* Horizontal Divider */}
                          <div className="my-2 h-[0.5px] w-full bg-[#E6E6E6]"></div>
                        </>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Bad Credit Image */}
            <div className="mt-6">
              <img src={badCreditNew} alt="Bad Credit" className="w-full" />
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
                  className="relative aspect-video w-full overflow-hidden rounded-2xl border-[1px] border-[#919191] bg-[#04284F]"
                >
                  <img
                    src={content.image}
                    alt={content.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="h-12 w-16 rounded-2xl bg-[#8B8B8B] text-6xl text-white opacity-80 hover:opacity-100">
                      <img src={playbackYoutube} alt="Play" className="h-12 w-16" />
                    </button>
                  </div>
                  <div className="absolute bottom-2 left-0 right-0 w-3/4 rounded-r-lg bg-black p-4 text-white opacity-60 lg:bottom-5 lg:w-2/3">
                    <h3 className="text-md font-semibold lg:text-lg">{content.title}</h3>
                    <p className="mt-1 text-xs lg:text-sm">{content.description}</p>
                  </div>
                </div>
              ))}

              {/* Article Grid */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {featuredContent.slice(1).map((content, index) => (
                  <>
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-lg border-[1px] border-[#919191] bg-white p-2 shadow-sm"
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
                      <div className="relative mb-9 text-[#04284F]">
                        <h4 className="text-md mb-1 line-clamp-2 font-bold">{content.title}</h4>
                        <p className="mb-1 line-clamp-2 text-sm">{content.description}</p>
                      </div>
                      <div className="absolute bottom-2 right-1 rounded px-2 py-1 text-xs font-bold text-red-500">
                        <div className="flex items-center">
                          <Clock className="mr-1 h-5 w-5" />
                          {content.duration}
                        </div>
                      </div>
                    </div>
                  </>
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
              <h2 className="mb-2 text-2xl font-bold text-[#04284F]">Related Articles/ Videos</h2>
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
                <h3 className="mb-3 text-xl font-bold text-[#04284F]">Follow us</h3>
                <img src={followUsSocial} alt="Follow us" className="w-3/4 rounded-lg" />
              </div>
            </div>
          </div>
        </div>

        {/* Related Videos Section */}
        <div className="mt-[150px]">
          {/* Blue Header */}
          <div className="mb-6 bg-[#15549A] px-4 py-3">
            <h2 className="font-montserrat text-xl font-bold text-white">Related Video</h2>
          </div>
          {/* Video Cards Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {[
              {
                title: 'Ways to Improve Your Credit Score',
                description:
                  'Credit repair is the process of fixing a credit history that has one of more problems, such as errors, identity',
                duration: '30Hrs 45 Mins',
                image: course4,
              },
              {
                title: 'The Importance of Having a Good Credit Score',
                description:
                  'Credit repair is the process of fixing a credit history that has one of more problems, such as errors, identity',
                duration: '30Hrs 45 Mins',
                image: course5,
              },
              {
                title: 'Ways to Improve Your Credit Score',
                description:
                  'Credit repair is the process of fixing a credit history that has one of more problems, such as errors, identity',
                duration: '30Hrs 45 Mins',
                image: course4,
              },
              {
                title: 'The Importance of Having a Good Credit Score',
                description:
                  'Credit repair is the process of fixing a credit history that has one of more problems, such as errors, identity',
                duration: '30Hrs 45 Mins',
                image: course5,
              },
            ].map((video, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border-[1px] border-[#919191] bg-white p-2 shadow-sm"
              >
                {/* Video Thumbnail Container */}
                <div className="relative aspect-video">
                  <img
                    src={video.image}
                    alt={video.title}
                    className="h-full w-full rounded-md object-cover"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
                    <button className="text-4xl text-white">
                      <img src={playbackYoutube} alt="Play" className="h-8 w-12" />
                    </button>
                  </div>
                </div>
                {/* Video Info */}
                <div className="relative mb-9 text-[#04284F]">
                  <h4 className="text-md mb-1 line-clamp-2 font-bold">{video.title}</h4>
                  <p className="mb-1 line-clamp-2 text-sm">{video.description}</p>
                </div>
                <div className="absolute bottom-2 right-1 rounded px-2 py-1 text-xs font-bold text-red-500">
                  <div className="flex items-center">
                    <Clock className="mr-1 h-5 w-5" />
                    {video.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
