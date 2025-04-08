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
    </section>
  );
};

export default StudentFeedback;
