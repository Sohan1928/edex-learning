const Navbar = () => {
  return (
    <section className="md:px-20 pt-6">
      <div>
        <h2 className="italic font-bold text-5xl font-ptFont">
          <span className="text-[#49bc8a]">e</span>
          <span className="text-[#ffc278]">Dex</span>
        </h2>
        <div className="flex items-center gap-6">
          <a className="hover:cursor-pointer hover:text-[#56B189]">Home</a>
          <a>About</a>
          <a>Course</a>
          <a>Blog</a>
          <a>Contact</a>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Navbar;
