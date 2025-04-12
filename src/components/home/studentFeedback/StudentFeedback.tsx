import { MarqueeDemo } from "./StudentMarqueSlide";
import YellowLineSvg from "./svg/YellowLineSvg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const StudentFeedback = () => {
  useGSAP(() => {
    gsap.from("#studentHeading, #studentLine, #studentSubTitle", {
      y: 120,
      x: -180,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      scale: 0.9,
      ease: "power1.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#studentFeedbackContainer",
        start: "top 60%",
        end: "top 20%",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });
    gsap.from("#studentMarqueeSlider", {
      y: 120,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      scale: 0.9,
      ease: "power1.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#studentFeedbackContainer",
        start: "top 40%",
        end: "top 20%",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });
  });

  return (
    <section id="studentFeedbackContainer" className="md:px-28 mt-16 mb-16">
      <div className="relative">
        <h2 id="studentHeading" className="text-4xl leading-14 font-semibold">
          Student <span className="text-[#49bc8a]">Feedback</span>
        </h2>
        <div id="studentLine" className="absolute left-33 top-12">
          <YellowLineSvg></YellowLineSvg>
        </div>
        <p id="studentSubTitle" className="mt-2 opacity-70">
          Various versions have evolved over the years, sometimes by accident.
        </p>
      </div>
      <section className="mt-8 relative">
        <div id="studentMarqueeSlider">
          <MarqueeDemo></MarqueeDemo>
        </div>
      </section>
    </section>
  );
};

export default StudentFeedback;
