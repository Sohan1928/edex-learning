import YellowLine from "./svg/YellowLine";
import { PiGraduationCapThin } from "react-icons/pi";
import { PiVideoCameraThin } from "react-icons/pi";
import { PiUsersThreeThin } from "react-icons/pi";

const OurAchievement = () => {
  return (
    <section className="md:px-28 mt-16">
      <div className="relative">
        <h2 className="text-4xl leading-14 font-semibold">
          Our <span className="text-[#49bc8a]">Achievement</span>
        </h2>
        <div className="absolute left-18 top-13">
          <YellowLine></YellowLine>
        </div>
        <p className="mt-2 opacity-70">
          Various versions have evolved over the years, sometimes by accident.
        </p>
      </div>

      <section>
        <div className="mt-8 grid grid-cols-2 gap-8">
          {/* graduation cap */}
          <div className="flex items-center gap-4">
            <div className="bg-[#ECF8F3] p-3 p-4] rounded-md">
              <PiGraduationCapThin className="text-[#448E6D] text-3xl"></PiGraduationCapThin>
            </div>
            <h4>
              <span className="text-3xl font-semibold">300</span> <br />
              <span className="opacity-60">Inctructor</span>
            </h4>
          </div>
          {/* video */}
          <div className="flex items-center gap-4">
            <div className="bg-[#FEFAF6] p-3 p-4] rounded-md">
              <PiVideoCameraThin className="text-[#F6C485] text-3xl"></PiVideoCameraThin>
            </div>
            <h4>
              <span className="text-3xl font-semibold">10,000+</span> <br />
              <span className="opacity-60">Video</span>
            </h4>
          </div>
          {/* student */}
          <div className="flex items-center gap-4">
            <div className="bg-[#FCEFF0] p-3 p-4] rounded-md">
              <PiGraduationCapThin className="text-[#DB525D] text-3xl"></PiGraduationCapThin>
            </div>
            <h4>
              <span className="text-3xl font-semibold">20,000+</span> <br />
              <span className="opacity-60">Student</span>
            </h4>
          </div>
          {/* user's */}
          <div className="flex items-center gap-4">
            <div className="bg-[#F1F7FE] p-3 p-4] rounded-md">
              <PiUsersThreeThin className="text-[#3273F4] text-3xl"></PiUsersThreeThin>
            </div>
            <h4>
              <span className="text-3xl font-semibold">1,00,000+</span> <br />
              <span className="opacity-60">User's</span>
            </h4>
          </div>
        </div>
      </section>
    </section>
  );
};

export default OurAchievement;
