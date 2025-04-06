import { Input } from "@/components/ui/input";
import TickSvg1 from "./svg/TickSvg1";
import TickSvg2 from "./svg/TickSvg2";
import StarSvg from "./svg/StarSvg";
import VioletSvg from "./svg/VioletSvg";
import FemaleSvg from "./svg/FemaleSvg";
import MaleSvg from "./svg/MaleSvg";
import YellowStartSvg from "./svg/YellowStartSvg";
import YellowLineSvg from "./svg/YellowLineSvg";

const Banner = () => {
  return (
    <section className="mt-28 md:px-28">
      <div className="md:flex items-center justify-between">
        <div className="relative">
          <div className="absolute -top-12 -left-12">
            <StarSvg></StarSvg>
          </div>
          <h5 className="text-[#49bc8a] text-[14px] uppercase font-medium">
            Start to success
          </h5>
          <div className="absolute left-88">
            <VioletSvg></VioletSvg>
          </div>
          <h1 className="mt-8 text-5xl font-semibold leading-14">
            Access To <span className="text-[#49bc8a]">5000+</span> Courses
            <br /> from
            <span className="text-[#49bc8a]"> 300</span> Instructors <br /> &
            Institutions
          </h1>
          <div className="absolute top-26.5 left-54">
            <TickSvg1></TickSvg1>
          </div>
          <div className="absolute top-40.5 left-28">
            <TickSvg2></TickSvg2>
          </div>
          <p className="mt-4 opacity-70">
            Various versions have evolved over the years, sometimes by accident,
          </p>
          <Input className="mt-4" placeholder="What do want to learn?"></Input>
        </div>
        <div className="flex items-center">
          <div className="relative">
            <FemaleSvg></FemaleSvg>
            <div className="absolute top-0 -left-16">
              <YellowStartSvg></YellowStartSvg>
            </div>
          </div>
          <div className="relative">
            <div className="z-50">
              <MaleSvg></MaleSvg>
            </div>
            <div className="absolute top-16 -right-24 z-0">
              <YellowLineSvg></YellowLineSvg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
