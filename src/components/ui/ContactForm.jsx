export function Contactform() {
  return (
    <div>
      <div className="mb-[300px] ml-[660px] mt-[-713px] flex justify-center">
        <div className="flex h-[720px] w-[533px] flex-col bg-[url('/src/components/asset/faqbg.png')] p-6 md:flex-row">
          <div className="mt-[-10px] flex-1 md:mr-8">
            <h2 className="font-inter text-[45px] font-[400] leading-[54.46px] text-[#FFFFFF]">
              Start Your Recovery
            </h2>
            <form className="mt-[25px] grid gap-4">
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="First Name"
                  className="bg-[#496480] p-4 font-montserrat text-[18px] font-[400] leading-[22px]"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="bg-[#496480] p-4 font-montserrat text-[18px] font-[400] leading-[22px]"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="bg-[#496480] p-4 font-montserrat text-[18px] font-[400] leading-[22px]"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="bg-[#496480] p-4 font-montserrat text-[18px] font-[400] leading-[22px]"
                />
              </div>
              <input
                type="text"
                placeholder="Current Credit Score"
                className="bg-[#496480] p-4 font-montserrat text-[18px] font-[400] leading-[22px]"
              />
              <input
                type="text"
                placeholder="Reason for Credit Repair"
                className="bg-[#496480] p-4 font-montserrat text-[18px] font-[400] leading-[22px]"
              />
              <textarea
                placeholder="How Soon?"
                className="h-[250px] bg-[#496480] p-3 font-montserrat text-[18px] font-[400] leading-[22px]"
              ></textarea>
              <button className="h-[54px] w-[186px] bg-[#46CC02] p-3 font-inter text-[18px] font-[400] leading-[22px] text-white">
                Sign Up Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
