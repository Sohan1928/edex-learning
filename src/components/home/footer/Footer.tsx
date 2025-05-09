import "./style.css";
import { LiaFacebookF } from "react-icons/lia";
import { SlSocialDribbble } from "react-icons/sl";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa6";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Footer = () => {
  useGSAP(() => {
    gsap.from("#eDexTextContainer h2 span", {
      y: -200,
      opacity: 0,
      stagger: 0.2,
      duration: 1.2,
      ease: "back.out",
      delay: 0.2,
      scrollTrigger: {
        trigger: "#footerContainer",
        start: "top 82%",
        end: "top 30%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from("#footerHeading", {
      y: -80,
      opacity: 0,
      duration: 1.2,
      delay: 0.4,
      ease: "back.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#footerContainer",
        start: "top 82%",
        end: "top 30%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from("#footerContactText", {
      x: -120,
      opacity: 0,
      duration: 1.6,
      delay: 0.4,
      ease: "back.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#footerContainer",
        start: "top 82%",
        end: "top 30%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from("#footerIcon", {
      y: 120,
      opacity: 0,
      duration: 1.6,
      delay: 0.4,
      ease: "back.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#footerContainer",
        start: "top 82%",
        end: "top 30%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from("#exploreIcon", {
      y: 120,
      opacity: 0,
      duration: 1.6,
      delay: 0.4,
      ease: "back.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#footerContainer",
        start: "top 82%",
        end: "top 30%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from("#footerLoremText", {
      x: 120,
      opacity: 0,
      duration: 1.6,
      delay: 0.4,
      ease: "back.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#footerContainer",
        start: "top 82%",
        end: "top 30%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from("#footerSubscribeBtn", {
      y: 120,
      opacity: 0,
      duration: 1.6,
      delay: 0.4,
      ease: "back.out",
      scrollTrigger: {
        trigger: "#footerContainer",
        start: "top 82%",
        end: "top 30%",
        toggleActions: "play none none reverse",
      },
    });
  });
  return (
    <section id="footerContainer" className="md:px-28 my-16">
      <div className="flex items-center justify-between">
        {/* left 1 */}
        <div>
          <div id="eDexTextContainer">
            <h2
              id=""
              className="italic font-bold flex items-center text-5xl ptFont mb-4"
            >
              <span className="text-[#56B189]">e</span>
              <span className="text-[#ffc278]">D</span>
              <span className="text-[#ffc278]">e</span>
              <span className="text-[#ffc278]">x</span>
            </h2>
          </div>
          <h4 id="footerHeading" className="text-xl font-medium mb-3">
            Contact Us
          </h4>
          <div id="">
            <h6 id="footerContactText" className="opacity-60 mb-1">
              Call:+123 400 123
            </h6>
            <p id="footerContactText" className="opacity-60 mb-3">
              Praesent nulla massa, hendrerit <br /> vestibulum gravida in,
              feugiat auctor felis.
            </p>
            <p id="footerContactText">Email:example@gmail.com</p>
          </div>
          <div className="flex items-center gap-3 mt-3">
            <h4
              id="footerIcon"
              className="bg-[#ECF8F3] hover:cursor-pointer text-[#6FC0A0] text-2xl p-2 rounded-sm"
            >
              <LiaFacebookF></LiaFacebookF>
            </h4>
            <h4
              id="footerIcon"
              className="bg-[#ECF8F3] text-[#6FC0A0] hover:cursor-pointer text-2xl p-2 rounded-sm"
            >
              <SlSocialDribbble></SlSocialDribbble>
            </h4>
            <h4
              id="footerIcon"
              className="bg-[#ECF8F3] text-[#6FC0A0] text-2xl p-2 hover:cursor-pointer rounded-sm"
            >
              <FaLinkedinIn></FaLinkedinIn>
            </h4>
            <h4
              id="footerIcon"
              className="bg-[#ECF8F3] text-[#6FC0A0] text-2xl p-2 rounded-sm hover:cursor-pointer"
            >
              <FaInstagram></FaInstagram>
            </h4>
            <h4
              id="footerIcon"
              className="bg-[#ECF8F3] text-[#6FC0A0] hover:cursor-pointer text-2xl p-2 rounded-sm"
            >
              <FaBehance></FaBehance>
            </h4>
          </div>
        </div>
        {/* left 2 */}
        <div>
          <h3 id="footerHeading" className="text-xl font-medium mb-5">
            Explore
          </h3>
          <span id="exploreIcon" className="flex flex-col space-y-2 opacity-60">
            <a>Home</a>
            <a>About</a>
            <a>Course</a>
            <a>Blog</a>
            <a>Contact</a>
          </span>
        </div>
        {/* left 3 */}
        <div>
          <h3 id="footerHeading" className="text-xl font-medium mb-5 pt-17">
            Category
          </h3>
          <span id="exploreIcon" className="flex flex-col space-y-2 opacity-60">
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
          <h3 id="footerHeading" className="text-xl font-medium mb-5 pt-12">
            Subscribe
          </h3>
          <p id="footerLoremText" className="opacity-60">
            Lorem Ipsum has been them <br /> an industry printer took <br /> a
            galley make book.
          </p>
          <div id="footerLoremText" className="mt-5 bg-[#F3F4F5] rounded-sm">
            <input
              className="px-3 py-3"
              type="email"
              name="email"
              id="1"
              placeholder="Email here"
            />
          </div>
          <button
            id="footerSubscribeBtn"
            className="bg-[#56B189] mt-4 text-white px-4 py-2 rounded-md hover:cursor-pointer text-[14px] font-normal"
          >
            Subscribe Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Footer;
