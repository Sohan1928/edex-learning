import GreenCircleSvg from "./svg/GreenCircleSvg";
import GreenTransparentSquareSvg from "./svg/GreenTransparentSquareSvg";
import GroupMeetingSvg from "./svg/GroupMeetingSvg";
import RedCircle from "./svg/RedCircle";
import VioletCircleSvg from "./svg/VioletCircleSvg";
import YellowLineSvg from "./svg/YellowLineSvg";
import YellowStarSvg from "./svg/YellowStarSvg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const LearningPlatforms = () => {
  useGSAP(() => {
    gsap.from(
      "#violetCircle, #greenCircle2, #redCircle2, #yellowStar2, #yellowLine2",
      {
        opacity: 0,
        duration: 1,
        delay: 0.2,
        scale: 2,
        ease: "power1.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#learningPlatformsContainer",
          start: "top 60%",
          end: "top 20%",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      }
    );
    gsap.from("#greenTrasparentBox2", {
      y: 120,
      x: -100,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      scale: 0.9,
      ease: "power1.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#learningPlatformsContainer",
        start: "top 60%",
        end: "top 20%",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });
    gsap.from("#groupMeetingImg", {
      y: -120,
      x: 100,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      scale: 0.9,
      ease: "power1.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#learningPlatformsContainer",
        start: "top 50%",
        end: "top 20%",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });
    gsap.from("#learningHeading, #learningSubTitle, #learningButton", {
      y: 120,
      x: 180,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      scale: 0.9,
      ease: "power1.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#learningPlatformsContainer",
        start: "top 50%",
        end: "top 20%",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });
  });

  return (
    <section
      id="learningPlatformsContainer"
      className="md:px-28 mt-20 bg-[#F2FAF7]"
    >
      <div className="flex items-center gap-16">
        {/* left side */}
        <div className="py-20 relative">
          <div id="greenTrasparentBox2">
            <GreenTransparentSquareSvg></GreenTransparentSquareSvg>
          </div>
          <div id="groupMeetingImg" className="absolute z-50 top-24 -left-4">
            <GroupMeetingSvg></GroupMeetingSvg>
          </div>
          <div id="yellowLine2" className="absolute top-22 -right-8 z-0">
            <YellowLineSvg></YellowLineSvg>
          </div>
          <div id="yellowStar2" className="absolute top-32 -left-4 z-50">
            <YellowStarSvg></YellowStarSvg>
          </div>
          <div id="redCircle2" className="absolute top-14 left-32">
            <RedCircle></RedCircle>
          </div>
          <div id="greenCircle2" className="absolute bottom-12 -left-16">
            <GreenCircleSvg></GreenCircleSvg>
          </div>
          <div id="violetCircle" className="absolute bottom-34 -right-4">
            <VioletCircleSvg></VioletCircleSvg>
          </div>
        </div>
        {/* right side */}

        <div className="">
          <h3 id="learningHeading" className="text-3xl font-medium pb-3">
            Join <span className="text-[#56B189]">World's largest</span>{" "}
            learning platform today
          </h3>
          <p id="learningSubTitle" className="mb-8">
            Start learning by registering for free
          </p>
          <button
            id="learningButton"
            className="bg-[#56B189] text-white px-4 py-2 rounded-md hover:cursor-pointer text-[14px] font-normal"
          >
            Sign up for Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default LearningPlatforms;
