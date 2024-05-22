import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import ButtonGradient from "./assets/svg/ButtonGradient";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import AnimatedCursorComponent from "./components/AnimatedCursor";
import { useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Footer from "./components/Footer";
import CircularProgress from "./components/CircularProgress";

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const TestimonialsRef = useRef(null);

  const [activeSectionId, setActiveSectionId] = useState(0);

  const isAboutInView = useInView(aboutRef, { threshold: -0.9 });
  const isProjectsInView = useInView(projectsRef, { threshold: 0.5 });
  const isSkillsInView = useInView(skillsRef, { threshold: 0.5 });
  const isContactInView = useInView(contactRef, { threshold: 0.5 });
  const isTestimonialsInView = useInView(TestimonialsRef, { threshold: 0.5 });

  useEffect(() => {
    if (isAboutInView) {
      setActiveSectionId(1);
    } else if (isProjectsInView) {
      setActiveSectionId(2);
    } else if (isSkillsInView) {
      setActiveSectionId(3);
    } else if (isTestimonialsInView) {
      setActiveSectionId(4);
    } else if (isContactInView) {
      setActiveSectionId(5);
    } else {
      setActiveSectionId(0);
      console.log("null");
    }
  }, [isAboutInView, isProjectsInView, isSkillsInView, activeSectionId]);

  return (
    <>
      <div className=" relative w-screen h-screen ">
        <Header activeSectionId={activeSectionId} />
        <Hero />
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={skillsRef}>
          <Skills />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
        <CircularProgress />
        <Footer />
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
