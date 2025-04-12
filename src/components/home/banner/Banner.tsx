import { Input } from "@/components/ui/input";
import TickSvg1 from "./svg/TickSvg1";
import TickSvg2 from "./svg/TickSvg2";
import StarSvg from "./svg/StarSvg";
import VioletSvg from "./svg/VioletSvg";
import FemaleSvg from "./svg/FemaleSvg";
import MaleSvg from "./svg/MaleSvg";
import YellowStartSvg from "./svg/YellowStartSvg";
import YellowLineSvg from "./svg/YellowLineSvg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Banner = () => {
  useGSAP(() => {
    gsap.from("#starSvg", {
      opacity: 0,
      duration: 1,
      delay: 2.6,
      ease: "power2.in",
      scale: 2.8,
      stagger: 0.6,
    });
    gsap.from("#textStart", {
      opacity: 0,
      duration: 0.8,
      delay: 2.6,
      scale: 1.8,
      ease: "back.out",
    });
    gsap.from("#textAccess", {
      x: -60,
      opacity: 0,
      duration: 0.8,
      delay: 2.9,
      scale: 1.4,
      ease: "back.out",
      stagger: 0.6,
    });
    gsap.from("#tick1", {
      y: 60,
      x: 100,
      opacity: 0,
      duration: 1.8,
      sclae: 1.4,
      delay: 2.6,
      stagger: 0.6,
    });
    gsap.from("#imgCart", {
      x: 150,
      opacity: 0,
      duration: 1,
      delay: 2.6,
      scale: 0.4,
      stagger: 0.4,
      ease: "power1.out",
    });
    gsap.from("#yellowLine", {
      x: 160,
      opacity: 0,
      duration: 1.8,
      delay: 2.6,
      scale: 0.2,
      ease: "power2.out",
    });
  });

  return (
    <section className="mt-28 md:px-28">
      <div className="md:flex items-center justify-between">
        <div className="relative">
          <div id="starSvg" className="absolute -top-12 -left-12">
            <StarSvg></StarSvg>
          </div>
          <h5
            id="textStart"
            className="text-[#49bc8a] text-[14px] uppercase font-medium"
          >
            Start to success
          </h5>
          <div id="starSvg" className="absolute left-88">
            <VioletSvg></VioletSvg>
          </div>
          <h1
            id="textAccess"
            className="mt-8 text-5xl font-semibold leading-14"
          >
            Access To <span className="text-[#49bc8a]">5000+</span> Courses
            <br /> from
            <span className="text-[#49bc8a]"> 300</span> Instructors <br /> &
            Institutions
          </h1>
          <div id="tick1" className="absolute top-26.5 left-54">
            <TickSvg1></TickSvg1>
          </div>
          <div id="tick1" className="absolute top-40.5 left-28">
            <TickSvg2></TickSvg2>
          </div>
          <p id="textAccess" className="mt-4 opacity-70">
            Various versions have evolved over the years, sometimes by accident,
          </p>
          <Input
            id="textAccess"
            className="mt-4"
            placeholder="What do want to learn?"
          ></Input>
        </div>
        <div className="flex relative items-center">
          <div className="relative">
            <div id="imgCart">
              <FemaleSvg></FemaleSvg>
            </div>
            <div id="starSvg" className="absolute top-0 -left-16">
              <YellowStartSvg></YellowStartSvg>
            </div>
          </div>
          <div id="imgCart" className="relative z-50">
            <MaleSvg></MaleSvg>
          </div>
          <div id="yellowLine" className="absolute top-16 -right-24 z-0">
            <YellowLineSvg></YellowLineSvg>
          </div>
        </div>
      </div>
      <div className="absolute right-[470px]">
        <VioletSvg></VioletSvg>
      </div>
    </section>
  );
};

export default Banner;
