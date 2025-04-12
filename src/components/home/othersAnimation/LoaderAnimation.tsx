import "./style.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const LoaderAnimation = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from("#loader h3", {
      opacity: 0,
      x: 40,
      duration: 1,
      stagger: 0.1,
    });
    tl.to("#loader h3", {
      opacity: 0,
      x: -10,
      duration: 1,
      stagger: 0.1,
    });

    tl.to("#loader", {
      opacity: 0,
      display: "none", // Add this line
      duration: 0.5,
    });
  });
  return (
    <section id="loader">
      <h3>Tomorrow's</h3>
      <h3>Brand,</h3>
      <h3>Today "</h3>
    </section>
  );
};

export default LoaderAnimation;
