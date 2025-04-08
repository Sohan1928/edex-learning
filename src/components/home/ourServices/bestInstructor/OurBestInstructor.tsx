import PaginationSvg from "../mostPopularCourse/svg/PaginationSvg";
import YellowLineSvg from "../mostPopularCourse/svg/YellowLineSvg";
import Cart1 from "./svg/Cart1";
import Cart2 from "./svg/Cart2";
import Cart3 from "./svg/Cart3";
import Cart4 from "./svg/Cart4";

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
      <section className="relative flex items-center gap-4 mt-8">
        <Cart1></Cart1>
        <Cart2></Cart2>
        <Cart3></Cart3>
        <Cart4></Cart4>
        <div className="absolute right-10 -bottom-10">
          <PaginationSvg></PaginationSvg>
        </div>
      </section>
    </section>
  );
};

export default OurBestInstructor;
