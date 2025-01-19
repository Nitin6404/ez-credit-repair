import navCall from '../asset/navCall.svg';

export function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between bg-[#15549A] py-4 font-montserrat text-white md:px-5 lg:px-[88px]">
        <div className="flex font-montserrat font-medium">
          <p className="items-center font-montserrat text-[20px] font-medium leading-[24px]">
            Start your journey to a better credit score today,{' '}
          </p>
          <p className="pl-1 text-xl font-medium text-[#02C8F3]"> Start now</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <div className="flex items-center gap-2">
              <img width={20} height={20} src={navCall} alt="caller" />
              <p className="text-xl font-semibold">0000-000-000</p>
            </div>
          </div>
          <div className="text-md flex justify-end gap-1 font-montserrat font-semibold">
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
