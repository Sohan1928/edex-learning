import YellowLineSvg from "../mostPopularCourse/svg/YellowLineSvg";
import InstructorSlideCart from "./InstructorSlideCart";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const OurBestInstructor = () => {
  useGSAP(() => {
    gsap.from("#instructorHeading, #instructorLine, #instructorSubtitle", {
      y: 120,
      x: -180,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      scale: 0.9,
      ease: "power1.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#bestInstructorContainer",
        start: "top 60%",
        end: "top 20%",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });
    gsap.from("#instructorCartSlide", {
      y: 250,
      opacity: 0,
      duration: 1.2,
      scale: 0.4,
      ease: "power1.out",
      scrollTrigger: {
        trigger: "#bestInstructorContainer",
        start: "top 40%",
        end: "top 20%",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });
  });

  return (
    <section
      id="bestInstructorContainer"
      className="md:px-28 mt-16 bg-[#FEFAF6] py-12"
    >
      <div className="relative">
        <h2
          id="instructorHeading"
          className="text-4xl leading-14 font-semibold"
        >
          Our <span className="text-[#49bc8a]">Best</span>
          <span className="text-[#49bc8a]"> Instructor</span>
        </h2>
        <div id="instructorLine" className="absolute left-38 top-12">
          <YellowLineSvg></YellowLineSvg>
        </div>
        <p id="instructorSubtitle" className="mt-2 opacity-70">
          Various versions have evolved over the years, sometimes by accident.
        </p>
      </div>
      <section id="instructorCartSlide" className="mt-8">
        <InstructorSlideCart></InstructorSlideCart>
      </section>
    </section>
  );
};

export default OurBestInstructor;
