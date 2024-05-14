import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import ButtonGradient from "./assets/svg/ButtonGradient";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import AnimatedCursorComponent from "./components/AnimatedCursor";

function App() {
  return (
    <>
      <div className=" relative w-screen h-screen">
        <Header />
        <Hero />
        <About/>
        <Projects/>
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
