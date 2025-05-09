import YellowLine from "./svg/YellowLine";
import { PiGraduationCapThin } from "react-icons/pi";
import { PiVideoCameraThin } from "react-icons/pi";
import { PiUsersThreeThin } from "react-icons/pi";
import SquareTransparent from "./svg/SquareTransparent";
import SquareYellowSvg from "./svg/SquareYellowSvg";
import FemaleSvg from "./svg/FemaleSvg";
import BlueStarSvg from "./svg/BlueStarSvg";
import RedCircle from "./svg/RedCircle";
import GreenCircle from "./svg/GreenCircle";
import YellowStarSvg from "./svg/YellowStarSvg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const OurAchievement = () => {
  useGSAP(() => {
    gsap.from("#achievementHeading, #achievementLine, #achievementSubtitle", {
      y: 120,
      x: -180,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      scale: 0.9,
      ease: "power1.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#achievementContainer",
        start: "top 60%",
        end: "top 20%",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });
    gsap.from(
      "#achievementCap, #achievementVideo, #achievementStudent, #achievementUser",
      {
        y: 120,
        x: -180,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        scale: 0.9,
        ease: "power1.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#achievementContentContainer",
          start: "top 40%",
          end: "top 20%",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      }
    );
    gsap.from("#greenTransparentBox", {
      y: 120,
      x: -180,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      scale: 0.9,
      ease: "power1.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#achievementContainer",
        start: "top 60%",
        end: "top 20%",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });
    gsap.from("#yellowBox", {
      y: -120,
      x: 180,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      scale: 0.9,
      ease: "power1.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#achievementContainer",
        start: "top 60%",
        end: "top 20%",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });
    gsap.from("#femaleSvgCart", {
      x: 280,
      opacity: 0,
      duration: 1.2,
      delay: 0.2,
      scale: 0.9,
      ease: "power1.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#achievementContainer",
        start: "top 60%",
        end: "top 20%",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });
    gsap.from("#blueStar, #redCircle, #greenCircle, #yellowStar", {
      opacity: 0,
      duration: 1.4,
      delay: 0.2,
      scale: 2,
      ease: "power1.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: "#achievementContainer",
        start: "top 40%",
        end: "top 20%",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });
  });

  return (
    <section id="achievementContainer" className="md:px-28 mt-16">
      <div className="relative">
        <h2
          id="achievementHeading"
          className="text-4xl leading-14 font-semibold"
        >
          Our <span className="text-[#49bc8a]">Achievement</span>
        </h2>
        <div id="achievementLine" className="absolute left-18 top-12">
          <YellowLine></YellowLine>
        </div>
        <p id="achievementSubtitle" className="mt-2 opacity-70">
          Various versions have evolved over the years, sometimes by accident.
        </p>
      </div>

      <section
        id="achievementContentContainer"
        className="flex items-center justify-between"
      >
        <div className="mt-8 grid grid-cols-2 gap-12">
          {/* graduation cap */}
          <div id="achievementCap" className="flex items-center gap-4">
            <div className="bg-[#ECF8F3] p-3 p-4] rounded-md">
              <PiGraduationCapThin className="text-[#448E6D] text-3xl"></PiGraduationCapThin>
            </div>
            <h4>
              <span className="text-3xl font-semibold">300</span> <br />
              <span className="opacity-60">Inctructor</span>
            </h4>
          </div>
          {/* video */}
          <div id="achievementVideo" className="flex items-center gap-4">
            <div className="bg-[#FEFAF6] p-3 p-4] rounded-md">
              <PiVideoCameraThin className="text-[#F6C485] text-3xl"></PiVideoCameraThin>
            </div>
            <h4>
              <span className="text-3xl font-semibold">10,000+</span> <br />
              <span className="opacity-60">Video</span>
            </h4>
          </div>
          {/* student */}
          <div id="achievementStudent" className="flex items-center gap-4">
            <div className="bg-[#FCEFF0] p-3 p-4] rounded-md">
              <PiGraduationCapThin className="text-[#DB525D] text-3xl"></PiGraduationCapThin>
            </div>
            <h4>
              <span className="text-3xl font-semibold">20,000+</span> <br />
              <span className="opacity-60">Student</span>
            </h4>
          </div>
          {/* user's */}
          <div id="achievementUser" className="flex items-center gap-4">
            <div className="bg-[#F1F7FE] p-3 p-4] rounded-md">
              <PiUsersThreeThin className="text-[#3273F4] text-3xl"></PiUsersThreeThin>
            </div>
            <h4>
              <span className="text-3xl font-semibold">1,00,000+</span> <br />
              <span className="opacity-60">User's</span>
            </h4>
          </div>
        </div>
        <div className="relative">
          <div id="greenTransparentBox">
            <SquareTransparent></SquareTransparent>
          </div>
          <div id="yellowBox" className="absolute top-2 -left-2">
            <SquareYellowSvg></SquareYellowSvg>
          </div>
          <div id="femaleSvgCart" className="absolute -top-13.5 -left-1.5">
            <FemaleSvg></FemaleSvg>
          </div>
          <div id="blueStar" className="absolute bottom-4 -left-12.5">
            <BlueStarSvg></BlueStarSvg>
          </div>
          <div id="redCircle" className="absolute top-14 right-4">
            <RedCircle></RedCircle>
          </div>
          <div id="greenCircle" className="absolute -top-8 right-20">
            <GreenCircle></GreenCircle>
          </div>
          <div id="yellowStar" className="absolute -top-4 -right-8">
            <YellowStarSvg></YellowStarSvg>
          </div>
        </div>
      </section>
    </section>
  );
};

export default OurAchievement;
