import YellowLineSvg from "./svg/YellowLineSvg";
import SliderCart from "./SliderCart";

const MostPopularCourse = () => {
  return (
    <section className="md:px-28 mt-28 bg-[#ecfff8]">
      <div className="py-10 flex justify-between items-center">
        <div className="relative">
          <h2 className="text-5xl leading-14 font-semibold">
            Most <br /> <span className="text-[#49bc8a]">Popular</span> <br />{" "}
            <span className="text-[#49bc8a]">Course</span>
          </h2>
          <div className="absolute top-26.5">
            <YellowLineSvg></YellowLineSvg>
          </div>
        </div>
        <div>
          <SliderCart></SliderCart>
        </div>
      </div>
    </section>
  );
};

export default MostPopularCourse;
