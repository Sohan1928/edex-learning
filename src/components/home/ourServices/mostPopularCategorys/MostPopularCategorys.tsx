import YellowLineSvg from "../mostPopularCourse/svg/YellowLineSvg";
import { LiaPenNibSolid } from "react-icons/lia";
import { GoArrowUpRight } from "react-icons/go";
import { PiFileHtmlThin } from "react-icons/pi";
import { PiMicrophoneStageThin } from "react-icons/pi";
import { BsBagCheck } from "react-icons/bs";
import { PiSunHorizonThin } from "react-icons/pi";
import { CiCamera } from "react-icons/ci";
import { PiMusicNoteThin } from "react-icons/pi";
import { PiDatabaseLight } from "react-icons/pi";
import { PiLightbulbLight } from "react-icons/pi";
import { PiHeartbeatThin } from "react-icons/pi";
import { PiGraphLight } from "react-icons/pi";
import { PiDetectiveThin } from "react-icons/pi";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const MostPopularCategorys = () => {
  useGSAP(() => {
    gsap.from("#categoryHeading, #categoryLine, #categorySubtitle", {
      y: 120,
      x: -180,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      scale: 0.9,
      ease: "power1.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#mostPopulaCategorysContainer",
        start: "top 60%",
        end: "top 20%",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });
  });
  useGSAP(() => {
    gsap.from(".popularCourseCard", {
      opacity: 0,
      y: 80,
      x: 80,
      duration: 0.8,
      stagger: {
        each: 0.2,
        amount: 2, // control the full stagger duration
      },
      scrollTrigger: {
        trigger: "#mostPopulaCategorysContainer", // container ID
        start: "top 50%",
        end: "top 20%",
        toggleActions: "play none none reverse",
        // markers: true,
      },
      ease: "power3.out",
    });
  }, []);

  return (
    <section id="mostPopulaCategorysContainer" className="md:px-28 mt-16">
      <div className="relative">
        <h2 id="categoryHeading" className="text-4xl leading-14 font-semibold">
          Most <span className="text-[#49bc8a]">Popular</span>
          <span className="text-[#49bc8a]"> Categorys</span>
        </h2>
        <div id="categoryLine" className="absolute left-20 top-13">
          <YellowLineSvg></YellowLineSvg>
        </div>
        <p id="categorySubtitle" className="mt-2 opacity-70">
          Various versions have evolved over the years, sometimes by accident.
        </p>
      </div>
      <div className=" mt-8 grid grid-cols-4 gap-5">
        {/* 1st */}
        <div className="popularCourseCard flex items-center border justify-between p-3 rounded-md shadow-sm hover:border-[#49bc8a] hover:border-1">
          <span className="flex items-center gap-2">
            <LiaPenNibSolid className="text-3xl"></LiaPenNibSolid>
            <h5 className="font-medium">Design</h5>
          </span>
          <GoArrowUpRight className="text-2xl text-[#49bc8a] hover:bg-[#49bc8a] hover:text-white hover:rounded-sm"></GoArrowUpRight>
        </div>
        {/* 2nd */}
        <div className="popularCourseCard flex items-center border justify-between p-3 rounded-md shadow-sm hover:border-[#49bc8a] hover:border-1">
          <span className="flex items-center gap-2">
            <PiFileHtmlThin className="text-3xl"></PiFileHtmlThin>
            <h5 className="font-medium">Development</h5>
          </span>
          <GoArrowUpRight className="text-2xl text-[#49bc8a] hover:bg-[#49bc8a] hover:text-white hover:rounded-sm"></GoArrowUpRight>
        </div>
        {/* 3rd */}
        <div className="popularCourseCard flex items-center border justify-between p-3 rounded-md shadow-sm hover:border-[#49bc8a] hover:border-1">
          <span className="flex items-center gap-2">
            <PiMicrophoneStageThin className="text-3xl"></PiMicrophoneStageThin>
            <h5 className="font-medium">Marketing</h5>
          </span>
          <GoArrowUpRight className="text-2xl text-[#49bc8a] hover:bg-[#49bc8a] hover:text-white hover:rounded-sm"></GoArrowUpRight>
        </div>
        {/* 4th */}
        <div className="popularCourseCard flex items-center border justify-between p-3 rounded-md shadow-sm hover:border-[#49bc8a] hover:border-1">
          <span className="flex items-center gap-2">
            <BsBagCheck className="text-3xl"></BsBagCheck>
            <h5 className="font-medium">Business</h5>
          </span>
          <GoArrowUpRight className="text-2xl text-[#49bc8a] hover:bg-[#49bc8a] hover:text-white hover:rounded-sm"></GoArrowUpRight>
        </div>
        {/* 5th */}
        <div className="popularCourseCard flex items-center border justify-between p-3 rounded-md shadow-sm hover:border-[#49bc8a] hover:border-1">
          <span className="flex items-center gap-2">
            <PiSunHorizonThin className="text-3xl"></PiSunHorizonThin>
            <h5 className="font-medium">Life Style</h5>
          </span>
          <GoArrowUpRight className="text-2xl text-[#49bc8a] hover:bg-[#49bc8a] hover:text-white hover:rounded-sm"></GoArrowUpRight>
        </div>
        {/* 6th */}
        <div className="popularCourseCard flex items-center border justify-between p-3 rounded-md shadow-sm hover:border-[#49bc8a] hover:border-1">
          <span className="flex items-center gap-2">
            <CiCamera className="text-3xl"></CiCamera>
            <h5 className="font-medium">Photography</h5>
          </span>
          <GoArrowUpRight className="text-2xl text-[#49bc8a] hover:bg-[#49bc8a] hover:text-white hover:rounded-sm"></GoArrowUpRight>
        </div>
        {/* 7th */}
        <div className="popularCourseCard flex items-center border justify-between p-3 rounded-md shadow-sm hover:border-[#49bc8a] hover:border-1">
          <span className="flex items-center gap-2">
            <PiMusicNoteThin className="text-3xl"></PiMusicNoteThin>
            <h5 className="font-medium">Music</h5>
          </span>
          <GoArrowUpRight className="text-2xl text-[#49bc8a] hover:bg-[#49bc8a] hover:text-white hover:rounded-sm"></GoArrowUpRight>
        </div>
        {/* 8th */}
        <div className="popularCourseCard flex items-center border justify-between p-3 rounded-md shadow-sm hover:border-[#49bc8a] hover:border-1">
          <span className="flex items-center gap-2">
            <PiDatabaseLight className="text-3xl"></PiDatabaseLight>
            <h5 className="font-medium">Data Science</h5>
          </span>
          <GoArrowUpRight className="text-2xl text-[#49bc8a] hover:bg-[#49bc8a] hover:text-white hover:rounded-sm"></GoArrowUpRight>
        </div>
        {/* 9th */}
        <div className="popularCourseCard flex items-center border justify-between p-3 rounded-md shadow-sm hover:border-[#49bc8a] hover:border-1">
          <span className="flex items-center gap-2">
            <PiLightbulbLight className="text-3xl"></PiLightbulbLight>
            <h5 className="font-medium">Personal Develop</h5>
          </span>
          <GoArrowUpRight className="text-2xl text-[#49bc8a] hover:bg-[#49bc8a] hover:text-white hover:rounded-sm"></GoArrowUpRight>
        </div>
        {/* 10th */}
        <div className="popularCourseCard flex items-center border justify-between p-3 rounded-md shadow-sm hover:border-[#49bc8a] hover:border-1">
          <span className="flex items-center gap-2">
            <PiHeartbeatThin className="text-3xl"></PiHeartbeatThin>
            <h5 className="font-medium">Helth & Fitness</h5>
          </span>
          <GoArrowUpRight className="text-2xl text-[#49bc8a] hover:bg-[#49bc8a] hover:text-white hover:rounded-sm"></GoArrowUpRight>
        </div>
        {/* 11th */}
        <div className="popularCourseCard flex items-center border justify-between p-3 rounded-md shadow-sm hover:border-[#49bc8a] hover:border-1">
          <span className="flex items-center gap-2">
            <PiGraphLight className="text-3xl"></PiGraphLight>
            <h5 className="font-medium">Finance</h5>
          </span>
          <GoArrowUpRight className="text-2xl text-[#49bc8a] hover:bg-[#49bc8a] hover:text-white hover:rounded-sm"></GoArrowUpRight>
        </div>
        {/* 12th */}
        <div className="popularCourseCard flex items-center border justify-between p-3 rounded-md shadow-sm hover:border-[#49bc8a] hover:border-1">
          <span className="flex items-center gap-2">
            <PiDetectiveThin className="text-3xl"></PiDetectiveThin>
            <h5 className="font-medium">Teaching</h5>
          </span>
          <GoArrowUpRight className="text-2xl text-[#49bc8a] hover:bg-[#49bc8a] hover:text-white hover:rounded-sm"></GoArrowUpRight>
        </div>
      </div>
    </section>
  );
};

export default MostPopularCategorys;
