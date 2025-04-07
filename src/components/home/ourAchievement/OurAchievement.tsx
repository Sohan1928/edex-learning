import YellowLine from "./svg/YellowLine";

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
    </section>
  );
};

export default OurAchievement;
