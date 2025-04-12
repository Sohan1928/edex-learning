import YellowLineSvg from "./svg/YellowLineSvg";
import SliderCart from "./SliderCart";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const MostPopularCourse = () => {
  useGSAP(() => {
    // const tl = gsap.timeline()
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#mostPopularCourseSection",
        start: "top 40%",
        end: "top 20%",
        toggleActions: "play none none reverse", // Optional for smoother scroll back
        markers: true,
      },
    });

    tl.from("#mostPopularText", {
      x: -100,
      opacity: 0,
      scale: 0.95,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.4,
    });
    gsap.from("#slideCart", {
      x: 250,
      opacity: 0,
      duration: 1.2,
      scale: 0.4,
      ease: "power1.out",
      scrollTrigger: {
        trigger: "#mostPopularCourseSection",
        start: "top 40%",
        end: "top 20%",
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <section
      id="mostPopularCourseSection"
      className="md:px-28 mt-28 bg-[#ecfff8]"
    >
      <div className="py-10 flex justify-between items-center">
        <div className="relative">
          <h2
            id="mostPopularText"
            className="text-5xl leading-14 font-semibold"
          >
            Most <br /> <span className="text-[#49bc8a]">Popular</span> <br />{" "}
            <span className="text-[#49bc8a]">Course</span>
          </h2>
          <div id="mostPopularText" className="absolute top-26.5">
            <YellowLineSvg></YellowLineSvg>
          </div>
        </div>
        <div id="slideCart">
          <SliderCart></SliderCart>
        </div>
      </div>
    </section>
  );
};

export default MostPopularCourse;
