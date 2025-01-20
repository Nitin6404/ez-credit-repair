import hands from '../asset/hands.png';
import mobile from '../asset/mobile.png';
import woman from '../asset/Rectangle 20.png';
import rectangle3 from '../asset/REct3.png';
import consultant from '../asset/chingchong.png';

export function NewsAndBlog() {
  return (
    <div className="mt-[90px] w-full">
      {/* Main Content Header */}
      <div className="mb-5 text-center">
        <h1 className="font-inter text-[50px] font-bold leading-[60px] text-[#15549A]">
          News & Blog
        </h1>
      </div>

      {/* Main Content Grid */}
      <div className="grid w-full grid-cols-1 bg-[#15549A] bg-opacity-[10%] p-2 lg:grid-cols-[1fr_auto_1fr]">
        {/* Credit Repair Section */}
        <div className="ml-[50px] mt-[10px] space-y-4 p-5">
          <h2 className="ml-[20px] font-inter text-[25px] font-bold leading-[30px] text-[#15549A]">
            Credit Repair:
            <span className="font-inter text-[20px] font-bold leading-[25px]">
              {' '}
              What It Is, How It Works, Related...
            </span>
          </h2>

          {/* Credit Repair Card 1 */}
          <div className="relative h-[191px] w-[540px] overflow-hidden rounded-lg">
            <img src={hands} alt="Credit Repair 1" className="h-[191px] w-[540px] object-cover" />
            <div className="absolute inset-0 flex flex-col justify-end p-4">
              <span className="absolute left-5 top-4 h-[25px] w-[93px] rounded-lg border-2 border-white bg-[#059C4B] px-1 py-1 text-center font-inter text-[10px] font-[400] leading-[12px] text-white">
                August 29, 2024
              </span>
            </div>
          </div>

          {/* Credit Repair Card 2 */}
          <h2 className="ml-[20px] font-inter text-[25px] font-bold leading-[30px] text-[#15549A]">
            Credit Repair:{' '}
            <span className="font-inter text-[20px] font-bold leading-[25px]">
              {' '}
              How Credit Repair Works{' '}
            </span>
          </h2>
          <div className="relative h-[191px] w-[540px] overflow-hidden rounded-lg">
            <img
              src={mobile}
              alt="Credit Repair 2"
              className="mt-[-20px] h-[189px] w-[535px] rounded-lg object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-4">
              <span className="absolute left-2 top-2 h-[25px] w-[93px] rounded-lg border-2 border-white bg-[#059C4B] px-1 py-1 text-center font-inter text-[10px] font-[400] leading-[12px] text-white">
                August 29, 2024
              </span>
            </div>
          </div>
        </div>
        <div className="mx-4 mt-[50px] hidden h-[500px] w-[1px] bg-gray-300 lg:block"></div>
        {/* Related Articles Section */}
        <div className="mr-[20px] space-y-6 rounded-lg p-6">
          <h2 className="font-inter text-[29px] font-bold leading-[35px] text-[#4B4B4B]">
            Related Articles
          </h2>

          {/* Article 1 */}
          <div className="flex items-start space-x-4 pb-4">
            <img
              src={woman}
              alt="Common Things"
              className="h-[111px] w-[148px] rounded-md object-cover"
            />
            <div>
              <h3 className="font-inter text-[20px] font-bold leading-[25px] text-[#15549A]">
                Common Things That Improve or Lower Scores
              </h3>
              <p className="font-inter text-[18px] font-[400] leading-[22px] text-[#424242]">
                A secured credit card is a type of credit card that is backed by a cash deposit,
                which serves as collateral should you default on payments. A secured card can
                rebuild credit.
              </p>
            </div>
          </div>

          {/* Article 2 */}
          <div className="flex items-start space-x-4 border-gray-300 pb-4">
            <img
              src={rectangle3}
              alt="Average Outstanding Balance"
              className="h-[111px] w-[148px] rounded-md object-cover"
            />
            <div>
              <h3 className="font-inter text-[20px] font-bold leading-[25px] text-[#15549A]">
                Average Outstanding Balance on Credit Cards: How It Works and Calculation
              </h3>
              <p className="font-inter text-[18px] font-[400] leading-[22px] text-[#424242]">
                Credit history is the ongoing documentation of your financial information, including
                repayment of your debts. Your credit history is an essential part of your credit
                report.
              </p>
            </div>
          </div>

          {/* Article 3 */}
          <div className="flex items-start space-x-4 pb-4">
            <img
              src={consultant}
              alt="What is a Secured Credit Card?"
              className="h-[111px] w-[148px] rounded-md object-cover"
            />
            <div>
              <h3 className="font-inter text-[20px] font-bold leading-[25px] text-[#15549A]">
                What Is a Secured Credit Card? How It Works and Benefits
              </h3>
              <p className="font-inter text-[18px] font-[400] leading-[22px] text-[#424242]">
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
