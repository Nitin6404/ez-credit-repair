export function Contactform() {
  return (
    <div className="w-full md:w-auto">
      <div className="flex justify-center px-4 py-8 md:mb-[300px] md:ml-[660px] md:mt-[-713px]">
        <div className="flex h-auto w-full flex-col bg-[url('/src/components/asset/faqbg.png')] bg-cover bg-center p-4 md:h-[720px] md:w-[533px] md:p-6">
          <div className="mt-0 flex-1 md:mt-[-10px]">
            <h2 className="text-center font-inter text-[32px] font-[400] leading-[40px] text-[#FFFFFF] md:text-left md:text-[45px] md:leading-[54.46px]">
              Start Your Recovery
            </h2>
            <form className="mt-[15px] grid gap-3 md:mt-[25px] md:gap-4">
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="First Name"
                  className="rounded-sm bg-[#496480] p-3 font-montserrat text-[16px] font-[400] leading-[20px] md:p-4 md:text-[18px] md:leading-[22px]"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="rounded-sm bg-[#496480] p-3 font-montserrat text-[16px] font-[400] leading-[20px] md:p-4 md:text-[18px] md:leading-[22px]"
                />
              </div>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="rounded-sm bg-[#496480] p-3 font-montserrat text-[16px] font-[400] leading-[20px] md:p-4 md:text-[18px] md:leading-[22px]"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="rounded-sm bg-[#496480] p-3 font-montserrat text-[16px] font-[400] leading-[20px] md:p-4 md:text-[18px] md:leading-[22px]"
                />
              </div>
              <input
                type="text"
                placeholder="Current Credit Score"
                className="rounded-sm bg-[#496480] p-3 font-montserrat text-[16px] font-[400] leading-[20px] md:p-4 md:text-[18px] md:leading-[22px]"
              />
              <input
                type="text"
                placeholder="Reason for Credit Repair"
                className="rounded-sm bg-[#496480] p-3 font-montserrat text-[16px] font-[400] leading-[20px] md:p-4 md:text-[18px] md:leading-[22px]"
              />
              <textarea
                placeholder="How Soon?"
                className="h-[150px] rounded-sm bg-[#496480] p-3 font-montserrat text-[16px] font-[400] leading-[20px] md:h-[250px] md:p-4 md:text-[18px] md:leading-[22px]"
              ></textarea>
              <div className="flex justify-center md:justify-start">
                <button className="h-[45px] w-[160px] rounded-sm bg-[#46CC02] p-3 font-inter text-[16px] font-[400] leading-[20px] text-white transition-colors hover:bg-[#3db502] md:h-[54px] md:w-[186px] md:text-[18px] md:leading-[22px]">
                  Sign Up Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
