import YellowLineSvg from "../mostPopularCourse/svg/YellowLineSvg";
import InstructorSlideCart from "./InstructorSlideCart";

const OurBestInstructor = () => {
  return (
    <section className="md:px-28 mt-16 bg-[#FEFAF6] py-12">
      <div className="relative">
        <h2 className="text-4xl leading-14 font-semibold">
          Our <span className="text-[#49bc8a]">Best</span>
          <span className="text-[#49bc8a]"> Instructor</span>
        </h2>
        <div className="absolute left-38 top-12">
          <YellowLineSvg></YellowLineSvg>
        </div>
        <p className="mt-2 opacity-70">
          Various versions have evolved over the years, sometimes by accident.
        </p>
      </div>
      <section className="mt-8">
        <InstructorSlideCart></InstructorSlideCart>
      </section>
    </section>
  );
};

export default OurBestInstructor;
