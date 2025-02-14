import navCall from '../asset/navCall.svg';

export function Navbar() {
  return (
    <nav className="w-full bg-[#15549A] py-2 font-montserrat text-white md:py-4">
      <div className="flex max-w-[100vw] flex-col items-center justify-between px-3 md:flex-row md:px-5 lg:px-[88px]">
        <div className="mb-2 w-full text-center md:mb-0 md:w-auto md:text-left">
          <p className="hidden px-2 text-[14px] leading-tight md:block md:px-0 md:text-[20px] md:leading-[24px]">
            Start your journey to a better credit score today{' '}
            <span className="block text-[#02C8F3] md:inline">Start now</span>
          </p>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden lg:block">
            <div className="flex items-center gap-2">
              <img width={20} height={20} src={navCall} alt="caller" />
              <p className="text-xl font-semibold">0000-000-000</p>
            </div>
          </div>
          <div className="flex justify-end gap-2 text-sm font-semibold md:text-base">
            <a href="/login" className="hover:underline">
              LOGIN
            </a>
            <span>|</span>
            <a href="/register" className="hover:underline">
              REGISTER
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
