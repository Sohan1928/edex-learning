import { LiaFacebookF } from "react-icons/lia";
import { SlSocialDribbble } from "react-icons/sl";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="md:px-28 my-16">
      <div className="flex items-center justify-between">
        {/* left 1 */}
        <div>
          <h2 className="italic font-bold text-5xl ptFont mb-4">
            <span className="text-[#56B189]">e</span>
            <span className="text-[#ffc278]">Dex</span>
          </h2>
          <h4 className="text-xl font-medium mb-3">Contact Us</h4>
          <h6 className="opacity-60 mb-1">Call:+123 400 123</h6>
          <p className="opacity-60 mb-3">
            Praesent nulla massa, hendrerit <br /> vestibulum gravida in,
            feugiat auctor felis.
          </p>
          <p>Email:example@gmail.com</p>
          <div className="flex items-center gap-3 mt-3">
            <h4 className="bg-[#ECF8F3] text-[#6FC0A0] text-2xl p-2 rounded-sm">
              <LiaFacebookF></LiaFacebookF>
            </h4>
            <h4 className="bg-[#ECF8F3] text-[#6FC0A0] text-2xl p-2 rounded-sm">
              <SlSocialDribbble></SlSocialDribbble>
            </h4>
            <h4 className="bg-[#ECF8F3] text-[#6FC0A0] text-2xl p-2 rounded-sm">
              <FaLinkedinIn></FaLinkedinIn>
            </h4>
            <h4 className="bg-[#ECF8F3] text-[#6FC0A0] text-2xl p-2 rounded-sm">
              <FaInstagram></FaInstagram>
            </h4>
            <h4 className="bg-[#ECF8F3] text-[#6FC0A0] text-2xl p-2 rounded-sm">
              <FaBehance></FaBehance>
            </h4>
          </div>
        </div>
        {/* left 2 */}
        <div>
          <h3 className="text-xl font-medium mb-5">Explore</h3>
          <span className="flex flex-col space-y-2 opacity-60">
            <a>Home</a>
            <a>About</a>
            <a>Course</a>
            <a>Blog</a>
            <a>Contact</a>
          </span>
        </div>
        {/* left 3 */}
        <div>
          <h3 className="text-xl font-medium mb-5">Explore</h3>
          <span className="flex flex-col space-y-2 opacity-60">
            <a>Home</a>
            <a>About</a>
            <a>Course</a>
            <a>Blog</a>
            <a>Contact</a>
          </span>
        </div>
        {/* left 4 */}
        <div>
          <h3 className="text-xl font-medium mb-5">Explore</h3>
          <span className="flex flex-col space-y-2 opacity-60">
            <a>Home</a>
            <a>About</a>
            <a>Course</a>
            <a>Blog</a>
            <a>Contact</a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
