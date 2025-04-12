import "./cursor.css";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const moveCursor = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const showCursor = () => {
      gsap.to(cursorRef.current, { scale: 1, opacity: 1, duration: 0.3 });
    };

    const hideCursor = () => {
      gsap.to(cursorRef.current, { scale: 0, opacity: 0, duration: 0.3 });
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", showCursor);
    document.addEventListener("mouseleave", hideCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", showCursor);
      document.removeEventListener("mouseleave", hideCursor);
    };
  }, []);

  return <div id="cursor" ref={cursorRef} className=""></div>;
};

export default CustomCursor;
