import { CiLock } from "react-icons/ci";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from("#logoName", {
      y: -40,
      duration: 0.8,
      opacity: 0,
      delay: 0.5,
      ease: "bounce.out",
    });
    tl.from("#loginBtn", {
      y: -40,
      duration: 0.2,
      opacity: 0,
      delay: 0.1,
      ease: "bounce",
    });
    tl.from("#signUpBtn", {
      y: -40,
      duration: 0.2,
      opacity: 0,
      delay: 0.1,
      ease: "bounce",
    });
    gsap.from(".nav-link", {
      y: -40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "bounce",
    });
  }, []);

  return (
    <section className="md:px-28 pt-6 border-b-1 pb-4 border-gray-200">
      <div className="flex items-center justify-between">
        <h2 id="logoName" className="italic font-bold text-5xl ptFont">
          <span className="text-[#56B189]">e</span>
          <span className="text-[#ffc278]">Dex</span>
        </h2>
        <div id="aTag" className="flex items-center gap-6 text-[14px]">
          <a className="nav-link hover:cursor-pointer hover:text-[#56B189]">
            Home
          </a>
          <a className="nav-link hover:cursor-pointer hover:text-[#56B189]">
            About
          </a>
          <a className="nav-link hover:cursor-pointer hover:text-[#56B189]">
            Course
          </a>
          <a className="nav-link hover:cursor-pointer hover:text-[#56B189]">
            Blog
          </a>
          <a className="nav-link hover:cursor-pointer hover:text-[#56B189]">
            Contact
          </a>
        </div>
        <div className="flex items-center gap-3">
          <button
            id="loginBtn"
            className="flex items-center gap-1 text-[14px] hover:cursor-pointer"
          >
            <span className="text-xl">
              <CiLock></CiLock>
            </span>
            Login
          </button>
          <button
            id="signUpBtn"
            className="bg-[#56B189] text-white px-4 py-2 rounded-md hover:cursor-pointer text-[14px] font-normal"
          >
            Sign up for Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
