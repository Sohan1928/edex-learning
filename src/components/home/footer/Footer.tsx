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
          <h3 className="text-xl font-medium mb-5 pt-17">Category</h3>
          <span className="flex flex-col space-y-2 opacity-60">
            <a>Design</a>
            <a>Development</a>
            <a>Marketing</a>
            <a>Business</a>
            <a>Lifestyle</a>
            <a>Photography</a>
            <a>Music</a>
          </span>
        </div>
        {/* left 4 */}
        <div>
          <h3 className="text-xl font-medium mb-5 pt-12">Subscribe</h3>
          <p className="opacity-60">
            Lorem Ipsum has been them <br /> an industry printer took <br /> a
            galley make book.
          </p>
          <div className="mt-5 bg-[#F3F4F5] rounded-sm">
            <input
              className="px-3 py-3"
              type="email"
              name="email"
              id="1"
              placeholder="Email here"
            />
          </div>
          <button className="bg-[#56B189] mt-4 text-white px-4 py-2 rounded-md hover:cursor-pointer text-[14px] font-normal">
            Subscribe Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Footer;
