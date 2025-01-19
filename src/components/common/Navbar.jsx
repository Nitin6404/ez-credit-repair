import navCall from '../asset/navCall.svg';

export function Navbar() {
  return (
    <>
      <nav className="flex justify-between  items-center py-4 md:px-5 lg:px-[88px] bg-[#15549A] text-white font-montserrat">
        <div className="flex font-medium font-montserrat">
          <p className="font-medium font-montserrat text-[20px] leading-[24px] items-center ">
            Start your journey to a better credit score today,{' '}
          </p>
          <p className="text-[#02C8F3] text-xl pl-1 font-medium"> Start now</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <div className="flex items-center gap-2">
              <img width={20} height={20} src={navCall} alt="caller" />
              <p className="text-xl font-semibold">0000-000-000</p>
            </div>
          </div>
          <div className="flex justify-end gap-1 font-montserrat font-semibold text-md">
            <a href="/" className="hover:underline">
              LOGIN
            </a>
            <span>|</span>
            <a href="/" className="hover:underline">
              REGISTER
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
