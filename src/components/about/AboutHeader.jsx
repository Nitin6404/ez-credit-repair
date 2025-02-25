import { Link } from 'react-router-dom';
import AboutUs from '../asset/AboutUsbackground.png';

export function AboutHeader() {
  return (
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
          <span>About Us</span>
        </div>
      </div>
    </div>
  );
}
