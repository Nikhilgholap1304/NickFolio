import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import ButtonGradient from "./assets/svg/ButtonGradient";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import AnimatedCursorComponent from "./components/AnimatedCursor";
import { useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const [activeSectionId, setActiveSectionId] = useState(null);

  const isAboutInView = useInView(aboutRef, { threshold: 0.5 });
  const isProjectsInView = useInView(projectsRef, { threshold: 0.5 });

  useEffect(() => {
    if (isAboutInView) {
      setActiveSectionId(1);
    } else if (isProjectsInView) {
      setActiveSectionId(2);
    }
  }, [isAboutInView, isProjectsInView]);

  return (
    <>
      <div className=" relative w-screen h-screen ">
        <Header />
        <Hero />
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
      </div>

      <div className="fixed inset-0 z-0 pointer-events-none select-none cursor-none">
        <Canvas style={{ pointerEvents: "none !important" }}>
          <Stars radius={50} count={1000} factor={2} fade speed={1} />
        </Canvas>
      </div>
      <ButtonGradient />
      <AnimatedCursorComponent />
    </>
  );
}

export default App;
