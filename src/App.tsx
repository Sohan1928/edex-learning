import "./App.css";
import Banner from "./components/home/banner/Banner";
import Navbar from "./components/home/navbar/Navbar";
import OurBestInstructor from "./components/home/ourServices/bestInstructor/OurBestInstructor";
import MostPopularCategorys from "./components/home/ourServices/mostPopularCategorys/MostPopularCategorys";
import MostPopularCourse from "./components/home/ourServices/mostPopularCourse/MostPopularCourse";

function App() {
  return (
    <section>
      {/* w-[1920px] */}
      <div className="mx-auto">
        <div className="">
          <Navbar></Navbar>
          <Banner></Banner>
          <MostPopularCourse></MostPopularCourse>
          <MostPopularCategorys></MostPopularCategorys>
          <OurBestInstructor></OurBestInstructor>
        </div>
      </div>
    </section>
  );
}

export default App;
