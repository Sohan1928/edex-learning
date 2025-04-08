import DoubleCommaSvg from "./svg/DoubleCommaSvg";
import FemaleCircleSvg from "./svg/FemaleCircleSvg";
import MaleCircleSvg from "./svg/MaleCircleSvg";
import StudentPaginationSvg from "./svg/StudentPaginationSvg";
import YellowLineSvg from "./svg/YellowLineSvg";

const StudentFeedback = () => {
  return (
    <section className="md:px-28 mt-16 mb-16">
      <div className="relative">
        <h2 className="text-4xl leading-14 font-semibold">
          Student <span className="text-[#49bc8a]">Feedback</span>
        </h2>
        <div className="absolute left-33 top-12">
          <YellowLineSvg></YellowLineSvg>
        </div>
        <p className="mt-2 opacity-70">
          Various versions have evolved over the years, sometimes by accident.
        </p>
      </div>

      <section className="mt-8 relative">
        <div className="flex items-center gap-6">
          {/* 1st cart */}
          <div className="py-4 px-6 rounded-xl shadow-sm">
            {/* heading */}
            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                <div>
                  <FemaleCircleSvg></FemaleCircleSvg>
                </div>
                <div className="flex flex-col space-y-1">
                  <h4 className="text-2xl font-semibold">Jenny Wilson</h4>
                  <p>UI-UX Designer</p>
                </div>
              </div>
              <DoubleCommaSvg></DoubleCommaSvg>
            </div>
            <p className="mt-6 text-[14px] opacity-70">
              Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros
              pharetra. Nam sed imperdiet turpis. In hac habitasse platea
              dictumst. Praesent nulla massa, hendrerit vestibulum gravida in,
              feugiat auctor felis.
              <br /> <br />
              Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros
              pharetra. Nam sed imperdiet turpis. In hac habitasse platea
              dictumst.
            </p>
          </div>
          {/* 2nd cart */}
          <div className="py-4 px-6 rounded-xl shadow-sm">
            {/* heading */}
            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                <div>
                  <MaleCircleSvg></MaleCircleSvg>
                </div>
                <div className="flex flex-col space-y-1">
                  <h4 className="text-2xl font-semibold">Guy Hawkins</h4>
                  <p>UI-UX Designer</p>
                </div>
              </div>
              <DoubleCommaSvg></DoubleCommaSvg>
            </div>
            <p className="mt-6 text-[14px] opacity-70">
              Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros
              pharetra. Nam sed imperdiet turpis. In hac habitasse platea
              dictumst. Praesent nulla massa, hendrerit vestibulum gravida in,
              feugiat auctor felis.
              <br /> <br />
              Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros
              pharetra. Nam sed imperdiet turpis. In hac habitasse platea
              dictumst.
            </p>
          </div>
        </div>
        <div className="absolute -bottom-24 right-0">
          <StudentPaginationSvg></StudentPaginationSvg>
        </div>
      </section>
    </section>
  );
};

export default StudentFeedback;
