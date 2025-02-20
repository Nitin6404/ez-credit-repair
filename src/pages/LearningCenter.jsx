import { Clock, LayoutGrid } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AboutUs from '../components/asset/AboutUsbackground.png';
import badCredits from '../components/asset/badCredits.svg';
import badCreditLatest from '../components/asset/badCreditLatest.jpg';

const courses = [
  {
    id: 1,
    title: 'Algebra Skills Enhance Course',
    description:
      'Credit repair is the process of fixing a credit history that has one of more problems, such as errors, identity',
    image:
      'https://fastly.picsum.photos/id/1060/200/300.jpg?hmac=xYtFmeYcfydIF3-Qybnra-tMwklX69T52EtGd-bacBI',
    duration: '30Hrs 45 Mins',
  },
  {
    id: 2,
    title: 'Atmospheric Chemistry Courses',
    description:
      'Credit repair is the process of fixing a credit history that has one of more problems, such as errors, identity',
    image:
      'https://fastly.picsum.photos/id/1060/200/300.jpg?hmac=xYtFmeYcfydIF3-Qybnra-tMwklX69T52EtGd-bacBI',
    duration: '30Hrs 45 Mins',
  },
  {
    id: 3,
    title: 'Biomathematics Courses',
    description:
      'Credit repair is the process of fixing a credit history that has one of more problems, such as errors, identity',
    image:
      'https://fastly.picsum.photos/id/1060/200/300.jpg?hmac=xYtFmeYcfydIF3-Qybnra-tMwklX69T52EtGd-bacBI',
    duration: '30Hrs 45 Mins',
  },
  {
    id: 4,
    title: 'Biological Chemistry Courses',
    description:
      'Credit repair is the process of fixing a credit history that has one of more problems, such as errors, identity',
    image:
      'https://fastly.picsum.photos/id/1060/200/300.jpg?hmac=xYtFmeYcfydIF3-Qybnra-tMwklX69T52EtGd-bacBI',
    duration: '30Hrs 45 Mins',
  },
  {
    id: 5,
    title: 'Course With Featured Video',
    description:
      'Credit repair is the process of fixing a credit history that has one of more problems, such as errors, identity',
    image:
      'https://fastly.picsum.photos/id/1060/200/300.jpg?hmac=xYtFmeYcfydIF3-Qybnra-tMwklX69T52EtGd-bacBI',
    duration: '30Hrs 45 Mins',
  },
  {
    id: 6,
    title: 'Data Analysis Course',
    description:
      'Credit repair is the process of fixing a credit history that has one of more problems, such as errors, identity',
    image:
      'https://fastly.picsum.photos/id/1060/200/300.jpg?hmac=xYtFmeYcfydIF3-Qybnra-tMwklX69T52EtGd-bacBI',
    duration: '30Hrs 45 Mins',
  },
  {
    id: 7,
    title: 'Data Science Courses',
    description:
      'Credit repair is the process of fixing a credit history that has one of more problems, such as errors, identity',
    image:
      'https://fastly.picsum.photos/id/1060/200/300.jpg?hmac=xYtFmeYcfydIF3-Qybnra-tMwklX69T52EtGd-bacBI',
    duration: '30Hrs 45 Mins',
  },
  {
    id: 8,
    title: 'Digital Marketing Course',
    description:
      'Credit repair is the process of fixing a credit history that has one of more problems, such as errors, identity',
    image:
      'https://fastly.picsum.photos/id/1060/200/300.jpg?hmac=xYtFmeYcfydIF3-Qybnra-tMwklX69T52EtGd-bacBI',
    duration: '30Hrs 45 Mins',
  },
  {
    id: 9,
    title: 'General Chemistry Courses',
    description:
      'Credit repair is the process of fixing a credit history that has one of more problems, such as errors, identity',
    image:
      'https://fastly.picsum.photos/id/1060/200/300.jpg?hmac=xYtFmeYcfydIF3-Qybnra-tMwklX69T52EtGd-bacBI',
    duration: '30Hrs 45 Mins',
  },
  {
    id: 10,
    title: 'GIS Specialist',
    description:
      'Credit repair is the process of fixing a credit history that has one of more problems, such as errors, identity',
    image:
      'https://fastly.picsum.photos/id/1060/200/300.jpg?hmac=xYtFmeYcfydIF3-Qybnra-tMwklX69T52EtGd-bacBI',
    duration: '30Hrs 45 Mins',
  },
  {
    id: 11,
    title: 'Holistic Health Courses',
    description:
      'Credit repair is the process of fixing a credit history that has one of more problems, such as errors, identity',
    image:
      'https://fastly.picsum.photos/id/1060/200/300.jpg?hmac=xYtFmeYcfydIF3-Qybnra-tMwklX69T52EtGd-bacBI',
    duration: '30Hrs 45 Mins',
  },
  {
    id: 12,
    title: 'Math Fundamentals Course',
    description:
      'Credit repair is the process of fixing a credit history that has one of more problems, such as errors, identity',
    image:
      'https://fastly.picsum.photos/id/1060/200/300.jpg?hmac=xYtFmeYcfydIF3-Qybnra-tMwklX69T52EtGd-bacBI',
    duration: '30Hrs 45 Mins',
  },
];

function CourseCard({ title, description, image, duration }) {
  return (
    <div className="group relative h-[378px] w-full transform cursor-pointer overflow-hidden rounded-[10px] border-2 border-[#6E6E6E] bg-white shadow-sm transition-colors duration-300 hover:bg-[#04284F] sm:w-[300px]">
      {/* Image Container with padding */}
      <div className="h-[187px] w-full overflow-hidden p-1 pt-2">
        {/* Image wrapper with exact dimensions */}
        <div className="mx-auto h-[176px] w-full overflow-hidden bg-[#F1F1F1] p-1 sm:w-[268px]">
          <img src={image} alt={title} className="h-full w-full object-cover" />
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="mb-2 font-inter text-[18px] font-bold leading-tight text-[#04284F] transition-colors duration-300 group-hover:text-white">
          {title}
        </h3>
        <p className="mb-4 font-inter text-sm leading-tight text-[#292929] transition-colors duration-300 group-hover:text-white">
          {description}
        </p>

        {/* Duration */}
        <div className="absolute bottom-6 left-6 flex items-center text-[#F30000]">
          <Clock className="mr-2 h-5 w-5 transition-colors duration-300 group-hover:text-white" />
          <span className="text-sm font-bold transition-colors duration-300 group-hover:text-white">
            {duration}
          </span>
        </div>
      </div>
    </div>
  );
}

export function LearningCenter() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen pt-8">
      <div className="relative mt-3 p-2">
        <img
          src={AboutUs}
          alt="About Us Background"
          className="absolute inset-0 mt-[30px] h-full w-full object-cover opacity-100"
        />
        <div className="relative flex h-[130px] items-center p-2 text-white">
          <div className="ml-5 mt-[50px] flex max-w-screen-lg font-inter text-lg font-bold leading-7 sm:ml-[80px] sm:text-2xl">
            <span className="ml-3 sm:ml-10">
              <Link to="/">Home</Link>
            </span>
            <span className="mx-1">|</span>
            <span>Learning Center</span>
          </div>
        </div>
      </div>

      {/* Search and Sort Section */}
      <div className="mx-auto mb-8 mt-20 max-w-7xl px-4">
        <div className="flex flex-col items-start justify-start gap-4 md:flex-row">
          {/* Sort By Button (Aligned to Start) */}
          <div className="flex w-full flex-col items-start">
            <button className="flex h-[54px] w-[210px] items-center justify-between rounded-full border-2 border-[#6E6E6E] px-6 hover:border-[#04284F]">
              <span className="flex items-center text-xl font-normal text-[#242424]">Sort By</span>
              <LayoutGrid size={25} fill="#9C9C9C" className="text-[#9C9C9C]" />
            </button>
          </div>

          {/* Search Input and Go Button */}
          <div className="flex w-full flex-col items-start gap-3 sm:flex-row sm:justify-start md:justify-end">
            <div className="relative w-full sm:w-[398px]">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="flex h-[53px] w-full items-center rounded-full border-2 border-[#6E6E6E] px-6 text-xl font-normal leading-none text-[#242424] placeholder:text-[#242424] focus:border-[#04284F] focus:outline-none"
              />
            </div>
            <button className="flex h-[53px] w-[78px] items-center justify-center rounded-full border-2 border-[#6E6E6E]/80 bg-[#6E6E6E]/80 text-xl font-normal leading-none text-white">
              Go
            </button>
          </div>
        </div>
      </div>

      {/* Course Grid */}
      <div className="mx-auto mb-10 max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {courses.map(course => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>

      {/* Bottom Image Section */}
      <div className="relative hidden h-[444px] w-full overflow-hidden md:block">
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${badCreditLatest})` }}
        >
          {/*<div className="relative h-full w-full">*/}
          {/*  /!* Bad *!/*/}
          {/*  <div className="absolute right-[10%] top-[10%] hidden md:right-[30%] md:top-[20%] md:block lg:right-[35%]">*/}
          {/*    <h2 className="font-inter text-[60px] font-bold text-[#013044] [transform:rotate(-5deg)] md:text-[90px]">*/}
          {/*      Bad*/}
          {/*    </h2>*/}
          {/*  </div>*/}
          {/*  /!* CREDIT? *!/*/}
          {/*  <div className="absolute right-[5%] top-[15%] hidden md:right-[10%] md:top-[25%] md:block lg:right-[15%]">*/}
          {/*    <h1 className="font-inter text-[80px] font-extrabold uppercase text-[#013044] [transform:rotate(-5deg)] md:text-[142px]">*/}
          {/*      Credit*/}
          {/*      <span className="ml-4 text-[100px] md:text-[170px]">?</span>*/}
          {/*    </h1>*/}
          {/*  </div>*/}
          {/*  /!* We can help! *!/*/}
          {/*  <div className="absolute right-[20%] top-[60%] hidden md:right-[25%] md:top-[70%] md:block lg:right-[30%]">*/}
          {/*    <p className="font-inter text-[40px] font-bold text-[#013044] [transform:rotate(-4deg)] md:text-[57px]">*/}
          {/*      we can help!*/}
          {/*    </p>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  );
}
