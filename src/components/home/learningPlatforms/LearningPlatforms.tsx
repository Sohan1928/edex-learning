import GreenCircleSvg from "./svg/GreenCircleSvg";
import GreenTransparentSquareSvg from "./svg/GreenTransparentSquareSvg";
import GroupMeetingSvg from "./svg/GroupMeetingSvg";
import RedCircle from "./svg/RedCircle";
import VioletCircleSvg from "./svg/VioletCircleSvg";
import YellowLineSvg from "./svg/YellowLineSvg";
import YellowStarSvg from "./svg/YellowStarSvg";

const LearningPlatforms = () => {
  return (
    <section className="md:px-28 mt-20 bg-[#F2FAF7]">
      <div className="flex items-center gap-16">
        {/* left side */}
        <div className="py-20 relative">
          <GreenTransparentSquareSvg></GreenTransparentSquareSvg>
          <div className="absolute z-50 top-24 -left-4">
            <GroupMeetingSvg></GroupMeetingSvg>
          </div>
          <div className="absolute top-22 -right-8 z-0">
            <YellowLineSvg></YellowLineSvg>
          </div>
          <div className="absolute top-32 -left-4 z-50">
            <YellowStarSvg></YellowStarSvg>
          </div>
          <div className="absolute top-14 left-32">
            <RedCircle></RedCircle>
          </div>
          <div className="absolute bottom-12 -left-16">
            <GreenCircleSvg></GreenCircleSvg>
          </div>
          <div className="absolute bottom-34 -right-4">
            <VioletCircleSvg></VioletCircleSvg>
          </div>
        </div>
        {/* right side */}
        <div>
          <div className="">
            <h3 className="text-3xl font-medium pb-3">
              Join <span className="text-[#56B189]">World's largest</span>{" "}
              learning platform today
            </h3>
            <p className="mb-8">Start learning by registering for free</p>
            <button className="bg-[#56B189] text-white px-4 py-2 rounded-md hover:cursor-pointer text-[14px] font-normal">
              Sign up for Free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPlatforms;
