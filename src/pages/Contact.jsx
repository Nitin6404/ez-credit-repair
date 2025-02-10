import credit1 from '../components/asset/phone.svg';
import credit2 from '../components/asset/mail.png';
import credit3 from '../components/asset/earth.png';
import credit4 from '../components/asset/map.png';
import credit10 from '../components/asset/map1.png';
import credit11 from '../components/asset/sign.png';
import AboutUs from '../components/asset/AboutUsbackground.png';
import socialLinks from '../components/asset/socialLinks.svg';
import { Link } from 'react-router-dom';
export function Contact() {
  return (
    <div className="w-full">
      <div className="relative mt-3 p-2">
        {/* Background Image */}
        <img
          src={AboutUs}
          alt="About Us Background"
          className="absolute inset-0 mt-[30px] h-full w-full object-cover opacity-100"
        />

        {/* Inner Div with Background Image */}
        <div className="relative flex h-[130px] items-center p-2 text-white">
          <div className="ml-5 mt-[50px] flex max-w-screen-lg font-inter text-lg font-bold leading-7 sm:ml-[80px] sm:text-2xl">
            <span className="ml-3 sm:ml-10">
              <Link to="/">Home</Link>
            </span>
            <span className="mx-1">|</span>
            <span>Contact Us</span>
          </div>
        </div>
      </div>
      {/* Apply credit0 as background */}
      <div className="flex w-full justify-center">
        <div className="mx-5 mt-20 flex h-auto w-full max-w-screen-xl justify-center bg-[url('/src/components/asset/rctangle.svg')] bg-cover bg-center bg-no-repeat">
          <div className="flex w-full flex-col px-5 py-7 text-white md:flex-row md:px-20">
            <div className="w-full md:w-1/2">
              {/* Left Section - Form */}
              <div className="mt-[15px] flex-1 md:mr-8">
                <h2 className="w-full font-inter text-3xl font-bold leading-[40px] md:text-5xl md:leading-[60px]">
                  We are here to help you
                </h2>
                <p className="my-5 w-full font-montserrat text-base font-normal leading-6 md:text-lg">
                  We specialize in helping individuals and families regain control of their finances
                  by repairing and improving their credit scores.
                </p>
                <form className="mt-[30px] grid gap-3 font-montserrat text-base font-normal text-[#052B3E] md:text-lg">
                  <div className="grid w-full grid-cols-1 gap-2 md:w-[513px] md:grid-cols-2">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="h-12 bg-white p-2 text-[#052B3E]"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="h-12 bg-white p-2 text-[#052B3E]"
                    />
                  </div>
                  <div className="grid w-full grid-cols-1 gap-2 md:w-[513px] md:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="h-12 bg-white p-2 text-[#052B3E]"
                    />
                    <input
                      type="text"
                      placeholder="Subject"
                      className="h-12 bg-white p-2 text-[#052B3E]"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Current Credit Score"
                    className="h-12 w-full bg-white p-2 text-black md:w-[513px]"
                  />
                  <input
                    type="text"
                    placeholder="Reason for Credit Repair"
                    className="h-12 w-full bg-white p-2 text-black md:w-[513px]"
                  />
                  <textarea
                    type="text"
                    placeholder="How Soon?"
                    className="h-[120px] w-full bg-white p-2 text-black md:w-[513px]"
                  />
                  <button className="h-12 w-full bg-[#46CC02] p-2 font-montserrat text-base font-normal text-white md:w-[30%] md:text-lg">
                    Sign Up Now
                  </button>
                </form>
              </div>
            </div>

            {/* Right Section - Contact Information */}
            <div className="mt-10 flex flex-col md:mt-0">
              <div className="ml-0 mt-[20px] md:ml-[50px] md:w-[70%]">
                <h2 className="mb-4 font-inter text-3xl font-bold leading-[40px] md:text-5xl md:leading-[60px]">
                  Contact Us
                </h2>
                <ul className="space-y-8 font-montserrat text-xl font-normal leading-9 md:text-3xl">
                  <li className="flex items-center">
                    <img
                      src={credit1}
                      alt="Credit Report"
                      className="mr-2 h-[30px] w-[30px] md:h-[40px] md:w-[40px]"
                    />
                    0000-00-0000
                  </li>
                  <li className="flex items-center">
                    <img
                      src={credit2}
                      alt="Credit Report"
                      className="mr-2 inline-block h-[20px] w-[25px] md:h-[25px] md:w-[33px]"
                    />
                    info@ezecreditrepair.com
                  </li>
                  <li className="flex items-center">
                    <img
                      src={credit3}
                      alt="Credit Report"
                      className="mr-2 inline-block h-[30px] w-[30px] md:h-[38px] md:w-[38px]"
                    />
                    ezecreditrepair.com
                  </li>
                  <li className="flex items-center">
                    <img
                      src={credit4}
                      alt="Credit Report"
                      className="mr-2 inline-block h-[40px] w-[25px] text-nowrap md:h-[51px] md:w-[31px]"
                    />
                    120 Double Street, Texas, Houston, USA
                  </li>
                </ul>
                <div className="mt-8 flex space-x-4 text-xl md:text-2xl">
                  <a href="#" className="text-white">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#" className="text-white">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-white">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="text-white">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
              <div>
                <img src={socialLinks} alt="socialLinks" className="ml-0 md:ml-[50px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-1">
        <div className="relative mt-16 font-montserrat">
          <div className="absolute left-1/2 h-[93px] w-[260px] -translate-x-1/2 transform bg-white px-3 py-1 text-lg leading-6 text-black md:ml-[440px] md:mt-[325px]">
            <div className="font-bold">Eze Credit Repair</div>{' '}
            <div className="font-normal text-[#232323]">120 Double Street, Texas, Houston USA </div>
          </div>
          <img src={credit10} alt="map" className="mb-[30px]" />
          <img
            src={credit11}
            alt="map"
            className="mb-[350px] ml-0 mt-[-450px] hidden h-[90px] w-[50px] md:ml-[550px] md:block md:h-[90px] md:w-[50px]"
          />
        </div>
      </div>
    </div>
  );
}
