import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronLeft, ChevronRight, Grid, Clock } from 'lucide-react';
import AboutUs from '../components/asset/AboutUsbackground.png';

const courses = [
  {
    id: 1,
    title: 'Algebra Skills Enhance Course',
    description:
      'Credit repair is the process of fixing a credit history that has one of more problems, such as errors, identity',
    image: '/src/components/asset/badCredits.svg',
    duration: '30Hrs 45 Mins',
    theme: 'light',
  },
  {
    id: 2,
    title: 'Atmospheric Chemistry Courses',
    description:
      'Credit repair is the process of fixing a credit history that has one of more problems, such as errors, identity',
    image: '/src/components/asset/badCredits.svg',
    duration: '30Hrs 45 Mins',
    theme: 'dark',
  },
  {
    id: 3,
    title: 'Biomathematics Courses',
    description:
      'Credit repair is the process of fixing a credit history that has one of more problems, such as errors, identity',
    image: '/src/components/asset/badCredits.svg',
    duration: '30Hrs 45 Mins',
    theme: 'light',
  },
  {
    id: 4,
    title: 'Biological Chemistry Courses',
    description:
      'Credit repair is the process of fixing a credit history that has one of more problems, such as errors, identity',
    image: '/src/components/asset/badCredits.svg',
    duration: '30Hrs 45 Mins',
    theme: 'dark',
  },
  {
    id: 5,
    title: 'Course With Featured Video',
    description:
      'Credit repair is the process of fixing a credit history that has one of more problems, such as errors, identity',
    image: '/src/components/asset/badCredits.svg',
    duration: '30Hrs 45 Mins',
    theme: 'light',
  },
  {
    id: 6,
    title: 'Data Analysis Course',
    description:
      'Credit repair is the process of fixing a credit history that has one of more problems, such as errors, identity',
    image: '/src/components/asset/badCredits.svg',
    duration: '30Hrs 45 Mins',
    theme: 'dark',
  },
  {
    id: 7,
    title: 'Data Science Courses',
    description:
      'Credit repair is the process of fixing a credit history that has one of more problems, such as errors, identity',
    image: '/src/components/asset/badCredits.svg',
    duration: '30Hrs 45 Mins',
    theme: 'light',
  },
  {
    id: 8,
    title: 'Digital Marketing Course',
    description:
      'Credit repair is the process of fixing a credit history that has one of more problems, such as errors, identity',
    image: '/src/components/asset/badCredits.svg',
    duration: '30Hrs 45 Mins',
    theme: 'dark',
  },
  {
    id: 9,
    title: 'General Chemistry Courses',
    description:
      'Credit repair is the process of fixing a credit history that has one of more problems, such as errors, identity',
    image: '/src/components/asset/badCredits.svg',
    duration: '30Hrs 45 Mins',
    theme: 'light',
  },
  {
    id: 10,
    title: 'GIS Specialist',
    description:
      'Credit repair is the process of fixing a credit history that has one of more problems, such as errors, identity',
    image: '/src/components/asset/badCredits.svg',
    duration: '30Hrs 45 Mins',
    theme: 'dark',
  },
  {
    id: 11,
    title: 'Holistic Health Courses',
    description:
      'Credit repair is the process of fixing a credit history that has one of more problems, such as errors, identity',
    image: '/src/components/asset/badCredits.svg',
    duration: '30Hrs 45 Mins',
    theme: 'light',
  },
  {
    id: 12,
    title: 'Math Fundamentals Course',
    description:
      'Credit repair is the process of fixing a credit history that has one of more problems, such as errors, identity',
    image: '/src/components/asset/badCredits.svg',
    duration: '30Hrs 45 Mins',
    theme: 'dark',
  },
];

function CourseCard({ title, description, image, duration, theme = 'light' }) {
  return (
    <div
      className={`group relative h-[280px] w-[250px] transform cursor-pointer overflow-hidden rounded-[10px] border border-gray-200 transition-all duration-300 hover:shadow-lg ${
        theme === 'dark' ? 'bg-[#041E3E]' : 'bg-white'
      }`}
    >
      {/* Image Container */}
      <div className="h-[150px] w-full overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>

      {/* Content */}
      <div className={`p-4 ${theme === 'dark' ? 'text-white' : 'text-[#041E3E]'}`}>
        <h3 className="mb-2 font-inter text-[18px] font-bold leading-tight">{title}</h3>
        <p
          className={`mb-4 text-sm leading-tight ${theme === 'dark' ? 'text-white/80' : 'text-gray-600'}`}
        >
          {description}
        </p>

        {/* Duration */}
        <div className="flex items-center text-[#F30000]">
          <Clock className="mr-1 h-4 w-4" />
          <span className="text-sm font-medium">{duration}</span>
        </div>
      </div>
    </div>
  );
}

export function LearningCenter() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 8;

  // Filter courses based on search term
  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get current courses for pagination
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  // Calculate total pages
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="relative mt-3 p-2">
        <img
          src={AboutUs}
          alt="About Us Background"
          className="absolute inset-0 mt-[30px] h-full w-full object-cover opacity-100"
        />
        <div className="relative flex h-[130px] items-center p-2 text-white">
          <div className="ml-[80px] mt-[50px] flex max-w-screen-lg font-inter text-2xl font-bold leading-7">
            <span className="ml-10">
              <Link to="/" className="hover:text-[#15549A]">
                Home
              </Link>
            </span>
            <span className="mx-1">|</span>
            <span>Learning Center</span>
          </div>
        </div>
      </div>

      {/* Search and Sort Section */}
      <div className="mx-auto mb-8 max-w-7xl px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Short By</span>
            <button className="flex h-8 w-8 items-center justify-center rounded border border-gray-300 hover:bg-gray-50">
              <Grid className="h-4 w-4" />
            </button>
          </div>
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-64 rounded-lg border border-gray-300 px-4 py-1 focus:border-[#15549A] focus:outline-none"
            />
            <button className="ml-2 rounded bg-gray-200 px-4 py-1 text-sm hover:bg-gray-300">
              Go
            </button>
          </div>
        </div>
      </div>

      {/* Course Grid */}
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {currentCourses.map(course => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="mx-auto mt-8 flex max-w-7xl justify-center space-x-2 px-4">
        <div className="flex items-center space-x-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F30000] text-white">
            1
          </span>
          <button className="flex h-8 w-8 items-center justify-center rounded-full text-gray-600 hover:bg-gray-200">
            2
          </button>
          <button className="flex items-center justify-center text-gray-600 hover:text-gray-800">
            &gt;&gt;
          </button>
        </div>
      </div>

      {/* Bottom Image */}
      <div className="mt-8 w-full">
        <img
          src="/src/components/asset/badCredits.svg"
          alt="Bad Credit Help"
          className="h-[200px] w-full object-cover"
        />
      </div>
    </div>
  );
}
