import { CiLock } from "react-icons/ci";

const Navbar = () => {
  return (
    <section className="md:px-28 pt-6 border-b-1 pb-4 border-gray-200">
      <div className="flex items-center justify-between">
        <h2 className="italic font-bold text-5xl ptFont">
          <span className="text-[#49bc8a]">e</span>
          <span className="text-[#ffc278]">Dex</span>
        </h2>
        <div className="flex items-center gap-6 text-[14px]">
          <a className="hover:cursor-pointer hover:text-[#56B189]">Home</a>
          <a className="hover:cursor-pointer hover:text-[#56B189]">About</a>
          <a className="hover:cursor-pointer hover:text-[#56B189]">Course</a>
          <a className="hover:cursor-pointer hover:text-[#56B189]">Blog</a>
          <a className="hover:cursor-pointer hover:text-[#56B189]">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1 text-[14px] hover:cursor-pointer">
            <span className="text-xl">
              <CiLock></CiLock>
            </span>
            Login
          </button>
          <button className="bg-[#36bb81] text-white px-4 py-2 rounded-md hover:cursor-pointer text-[14px] font-normal">
            Sign up for Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
