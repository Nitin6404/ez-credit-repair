export function Navbar() {
  return (
    <>
      <nav className="flex justify-between  items-center py-4 px-[88px] bg-[#15549A] text-white font-montserrat">
        <div className="flex font-medium font-montserrat">
          <p className="text-xl ">
            Start your journey to a better credit score today,{" "}
          </p>
          <p className="text-[#02C8F3] text-xl pl-1 font-medium"> Start now</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <img
              width={20}
              height={20}
              src="/src/components/asset/navCall.svg"
              alt="caller"
            />
            <p className="text-xl font-semibold">0000-000-000</p>
          </div>
          <div className="flex justify-end gap-1 font-monsterrat font-semibold text-xl">
            <a href="/" className="hover:underline">
              LOGIN
            </a>
            <span>|</span>
            <a href="/" className="hover:underline">
              REGISTER
            </a>
            {/* <Link  */}
            {/* // to="/signin" 
          // className="hover:underline">LOGIN</Link>
          // <span>|</span>
          // <Link to="/signup" className="hover:underline">REGISTER</Link> */}
          </div>
        </div>
      </nav>
    </>
  );
}
