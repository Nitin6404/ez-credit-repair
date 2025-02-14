import hands from '../asset/hands.png';
import mobile from '../asset/mobile.png';
import woman from '../asset/Rectangle 20.png';
import rectangle3 from '../asset/REct3.png';
import consultant from '../asset/chingchong.png';

export function NewsAndBlog() {
  return (
    <div className="mt-[40px] w-full px-4 md:px-0">
      {/* Main Content Header */}
      <div className="mb-4 text-center md:mb-5">
        <h1 className="font-inter text-[32px] font-bold leading-[40px] text-[#15549A] md:text-[50px] md:leading-[60px]">
          News & Blog
        </h1>
      </div>

      {/* Main Content Grid */}
      <div className="grid w-full grid-cols-1 bg-[#15549A] bg-opacity-[10%] p-2 lg:grid-cols-[1fr_auto_1fr]">
        {/* Credit Repair Section */}
        <div className="ml-0 mt-[10px] space-y-4 p-2 md:ml-[50px] md:p-5">
          {/* Credit Repair Section Heading */}
          <h2 className="ml-0 font-inter text-[20px] font-bold leading-[25px] text-[#15549A] md:text-[25px] md:leading-[30px]">
            Credit Repair:
            <span className="font-inter text-[16px] font-bold leading-[20px] md:text-[20px] md:leading-[25px]">
              {' '}
              What It Is, How It Works, Related...
            </span>
          </h2>

          {/* Credit Repair Card 1 */}
          <div className="relative h-[160px] w-full overflow-hidden rounded-lg md:h-[191px] md:w-[540px]">
            <img
              src={hands}
              alt="Credit Repair 1"
              className="h-[160px] w-full object-cover md:h-[191px] md:w-[540px]"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-4">
              <span className="absolute left-2 top-2 h-[25px] w-[93px] rounded-lg border-2 border-white bg-[#059C4B] px-1 py-1 text-center font-inter text-[10px] font-[400] leading-[12px] text-white md:left-5 md:top-4">
                August 29, 2024
              </span>
            </div>
          </div>

          {/* Credit Repair Section Heading for Card 2 */}
          <h2 className="ml-0 font-inter text-[20px] font-bold leading-[25px] text-[#15549A] md:text-[25px] md:leading-[30px]">
            Credit Repair:{' '}
            <span className="font-inter text-[16px] font-bold leading-[20px] md:text-[20px] md:leading-[25px]">
              {' '}
              How Credit Repair Works{' '}
            </span>
          </h2>

          {/* Credit Repair Card 2 */}
          <div className="relative h-[160px] w-full overflow-hidden rounded-lg md:h-[191px] md:w-[540px]">
            <img
              src={mobile}
              alt="Credit Repair 2"
              className="h-[160px] w-full object-cover md:h-[191px] md:w-[540px]"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-4">
              <span className="absolute left-2 top-2 h-[25px] w-[93px] rounded-lg border-2 border-white bg-[#059C4B] px-1 py-1 text-center font-inter text-[10px] font-[400] leading-[12px] text-white">
                August 29, 2024
              </span>
            </div>
          </div>
        </div>

        {/* Vertical Divider - Hidden on mobile */}
        <div className="mx-4 mt-[50px] hidden h-[500px] w-[1px] bg-gray-300 lg:block"></div>

        {/* Related Articles Section */}
        <div className="mr-0 space-y-4 rounded-lg p-4 md:mr-[10px] md:space-y-6 md:p-6">
          <h2 className="font-inter text-[24px] font-bold leading-[30px] text-[#4B4B4B] md:text-[29px] md:leading-[35px]">
            Related Articles
          </h2>

          {/* Article 1 */}
          <div className="flex flex-col items-start space-y-2 md:flex-row md:space-x-4 md:space-y-0">
            <img
              src={woman}
              alt="Common Things"
              className="h-[200px] w-full rounded-md object-cover md:h-[111px] md:w-[148px]"
            />
            <div>
              <h3 className="mt-2 font-inter text-[18px] font-bold leading-[22px] text-[#15549A] md:mt-0 md:text-[20px] md:leading-[25px]">
                Common Things That Improve or Lower Scores
              </h3>
              <p className="mt-1 font-inter text-[16px] font-[400] leading-[20px] text-[#424242] md:text-[18px] md:leading-[22px]">
                A secured credit card is a type of credit card that is backed by a cash deposit,
                which serves as collateral should you default on payments. A secured card can
                rebuild credit.
              </p>
            </div>
          </div>

          <div className="hidden h-[1px] w-full bg-gray-300 lg:block"></div>

          {/* Article 2 */}
          <div className="flex flex-col items-start space-y-2 md:flex-row md:space-x-4 md:space-y-0">
            <img
              src={rectangle3}
              alt="Average Outstanding Balance"
              className="h-[200px] w-full rounded-md object-cover md:h-[111px] md:w-[148px]"
            />
            <div>
              <h3 className="mt-2 font-inter text-[18px] font-bold leading-[22px] text-[#15549A] md:mt-0 md:text-[20px] md:leading-[25px]">
                Average Outstanding Balance on Credit Cards: How It Works and Calculation
              </h3>
              <p className="mt-1 font-inter text-[16px] font-[400] leading-[20px] text-[#424242] md:text-[18px] md:leading-[22px]">
                Credit history is the ongoing documentation of your financial information, including
                repayment of your debts. Your credit history is an essential part of your credit
                report.
              </p>
            </div>
          </div>

          <div className="hidden h-[1px] w-full bg-gray-300 lg:block"></div>

          {/* Article 3 */}
          <div className="flex flex-col items-start space-y-2 md:flex-row md:space-x-4 md:space-y-0">
            <img
              src={consultant}
              alt="What is a Secured Credit Card?"
              className="h-[200px] w-full rounded-md object-cover md:h-[111px] md:w-[148px]"
            />
            <div>
              <h3 className="mt-2 font-inter text-[18px] font-bold leading-[22px] text-[#15549A] md:mt-0 md:text-[20px] md:leading-[25px]">
                What Is a Secured Credit Card? How It Works and Benefits
              </h3>
              <p className="mt-1 font-inter text-[16px] font-[400] leading-[20px] text-[#424242] md:text-[18px] md:leading-[22px]">
                A fair credit score falls in the range between poor and good. A fair FICO credit
                score is 580 to 669, and the equivalent near-prime VantageScore is 601 to 660.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
