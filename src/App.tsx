import "./App.css";
import Banner from "./components/home/banner/Banner";
import Navbar from "./components/home/navbar/Navbar";

function App() {
  return (
    <section>
      {/* w-[1920px] */}
      <div className="mx-auto">
        <div className="">
          <Navbar></Navbar>
          <Banner></Banner>
        </div>
      </div>
    </section>
  );
}

export default App;
