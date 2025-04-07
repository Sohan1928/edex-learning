import YellowLineSvg from "./svg/YellowLineSvg";
import Cart1 from "./svg/Cart1";
import Cart2 from "./svg/Cart2";
import Cart3 from "./svg/Cart3";
import PaginationSvg from "./svg/PaginationSvg";

const MostPopularCourse = () => {
  return (
    <section className="md:px-28 mt-28 bg-[#ecfff8]">
      <div className="py-10 flex gap-8 items-center justify-between">
        <div className="relative">
          <h2 className="text-5xl leading-14 font-semibold">
            Most <br /> <span className="text-[#49bc8a]">Popular</span> <br />{" "}
            <span className="text-[#49bc8a]">Course</span>
          </h2>
          <div className="absolute top-26.5">
            <YellowLineSvg></YellowLineSvg>
          </div>
        </div>

        <section className="relative">
          <div className="flex gap-4 items-center">
            <div>
              <Cart1></Cart1>
            </div>
            <div>
              <Cart2></Cart2>
            </div>
            <div>
              <Cart3></Cart3>
            </div>
          </div>
          <div className="absolute right-8 -bottom-2">
            <PaginationSvg></PaginationSvg>
          </div>
        </section>
      </div>
    </section>
  );
};

export default MostPopularCourse;
