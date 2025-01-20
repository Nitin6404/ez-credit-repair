import credit1 from '../components/asset/phone.svg';
import credit2 from '../components/asset/mail.png';
import credit3 from '../components/asset/earth.png';
import credit4 from '../components/asset/map.png';
import credit10 from '../components/asset/map1.png';
import credit11 from '../components/asset/sign.png';
import AboutUs from '../components/asset/AboutUsbackground.png';
import socialLinks from '../components/asset/socialLinks.svg';

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
          <div className="mt-[50px] flex max-w-screen-lg font-inter text-2xl font-bold leading-7">
            <span className="ml-10">Home</span>
            <span className="mx-1">|</span>
            <span>Contact Us</span>
          </div>
        </div>
      </div>
      {/* Apply credit0 as background */}
      <div className="flex w-full justify-center">
        <div className="mx-5 mt-20 flex h-[705px] w-[1375px] justify-center bg-[url('/src/components/asset/rctangle.svg')]">
          <div className="flex w-full flex-col px-20 py-7 text-white md:flex-row">
            <div className="w-1/2">
              {/* Left Section - Form */}
              <div className="mt-[15px] flex-1 md:mr-8">
                <h2 className="w-[568px] font-inter text-5xl font-bold leading-[60px]">
                  We are here to help you
                </h2>
                <p className="my-5 w-[513px] font-montserrat text-lg font-normal leading-6">
                  We specialize in helping individuals and families regain control of their finances
                  by repairing and improving their credit scores.
                </p>
                <form className="mt-[30px] grid gap-3">
                  <div className="grid w-[513px] grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="text-[#052B3E h-12] bg-white p-2"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="text-[#052B3E h-12] bg-white p-2"
                    />
                  </div>
                  <div className="grid w-[513px] grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="text-[#052B3E h-12] bg-white p-2"
                    />
                    <input
                      type="text"
                      placeholder="Subject"
                      className="text-[#052B3E h-12] bg-white p-2"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Current Credit Score"
                    className="h-12 w-[513px] gap-2 bg-white p-2 text-black"
                  />
                  <input
                    type="text"
                    placeholder="Reason for Credit Repair"
                    className="h-12 w-[513px] gap-2 bg-white p-2 text-black"
                  />
                  <textarea
                    type="text"
                    placeholder="How Soon?"
                    className="h-[120px] w-[513px] gap-2 bg-white p-1 text-black"
                  />
                  <button className="h-12 w-[30%] bg-[#46CC02] p-2 font-montserrat text-lg font-normal text-white">
                    Sign Up Now
                  </button>
                </form>
              </div>
            </div>

            {/* Right Section - Contact Information */}
            <div className="flex flex-col">
              <div className="ml-[50px] mt-[20px] md:w-[70%]">
                <h2 className="mb-4 font-inter text-5xl font-bold leading-[60px]">Contact Us</h2>
                <ul className="space-y-8 font-montserrat text-3xl font-normal leading-9">
                  <li className="flex items-center">
                    <img src={credit1} alt="Credit Report" className="mr-2 h-[40px] w-[40px]" />
                    0000-00-0000
                  </li>
                  <li className="flex items-center">
                    <img
                      src={credit2}
                      alt="Credit Report"
                      className="mr-2 inline-block h-[25px] w-[33px]"
                    />
                    info@ezecreditrepair.com
                  </li>
                  <li className="flex items-center">
                    <img
                      src={credit3}
                      alt="Credit Report"
                      className="mr-2 inline-block h-[38px] w-[38px]"
                    />
                    ezecreditrepair.com
                  </li>
                  <li className="flex items-center">
                    <img
                      src={credit4}
                      alt="Credit Report"
                      className="mr-2 inline-block h-[51px] w-[31px]"
                    />
                    120 Double Street, Texas, Houston, USA
                  </li>
                </ul>
                <div className="mt-8 flex space-x-4 text-2xl">
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
                <img src={socialLinks} alt="socialLinks" className="ml-[50px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-1">
        <div className="mt-16 font-montserrat">
          <div className="absolute ml-[440px] mt-[295px] h-[93px] w-[260px] bg-white px-3 py-1 text-lg leading-6 text-black">
            <div className="font-bold">Eze Credit Repair</div>{' '}
            <div className="font-normal text-[#232323]">120 Double Street, Texas, Houston USA </div>
          </div>
          <img src={credit10} alt="map" className="mb-[30px]" />
          <img
            src={credit11}
            alt="map"
            className="mb-[350px] ml-[550px] mt-[-450px] h-[90px] w-[50px]"
          />
        </div>
      </div>
    </div>
  );
}
