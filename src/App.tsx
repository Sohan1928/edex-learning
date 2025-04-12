import "./App.css";
import Banner from "./components/home/banner/Banner";
import Footer from "./components/home/footer/Footer";
import LearningPlatforms from "./components/home/learningPlatforms/LearningPlatforms";
import Navbar from "./components/home/navbar/Navbar";
import OurAchievement from "./components/home/ourAchievement/OurAchievement";
import OurBestInstructor from "./components/home/ourServices/bestInstructor/OurBestInstructor";
import MostPopularCategorys from "./components/home/ourServices/mostPopularCategorys/MostPopularCategorys";
import MostPopularCourse from "./components/home/ourServices/mostPopularCourse/MostPopularCourse";
import StudentFeedback from "./components/home/studentFeedback/StudentFeedback";

function App() {
  return (
    <section>
      {/* w-[1920px] */}
      <div className="mx-auto overflow-hidden">
        <div className="">
          <Navbar></Navbar>
          <Banner></Banner>
          <MostPopularCourse></MostPopularCourse>
          <MostPopularCategorys></MostPopularCategorys>
          <OurBestInstructor></OurBestInstructor>
          <OurAchievement></OurAchievement>
          <StudentFeedback></StudentFeedback>
          <LearningPlatforms></LearningPlatforms>
          <Footer></Footer>
        </div>
      </div>
    </section>
  );
}

export default App;
