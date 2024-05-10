import Section from "./Section";
import Coder from "../assets/Coder.png";
import curve from "../assets/hero/curve.png";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import { BackgroundCircles, BottomLine, Gradient } from "../design/Hero";
import { ScrollParallax } from "react-just-parallax";
import { useEffect, useRef } from "react";
const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    <>
      <Section
        className="pt-[14rem] -mt-[5.25rem]"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="hero"
      >
        <div
          className="relative flex flex-col items-center justify-between px-7.5 lg:flex-row sm:gap-1 gap-[2.5rem]"
          ref={parallaxRef}
        >
          <div className="absolute w-full h-full top-0 left-0 z-2 pointer-events-none select-none lg:overflow-visible overflow-hidden">
            <ScrollParallax isAbsolutelyPositioned>
              <BackgroundCircles />
            </ScrollParallax>
          </div>
          <div className="max-w-[30rem] lg:ml-[4rem] xs:mr-[5rem] 2xs:mr-0">
            <h1 className="h1 relative text-nowrap">
              <motion.span className="inline relative">
                Hi{" "}
                <motion.span
                  drag
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  initial={{ x: 350, y: -50, rotate: 120 }}
                  animate={{ x: 0, y: 0, rotate: 0 }}
                  transition={{ delay: 2, duration: 2 }}
                  className="text-color-2 cursor-pointer absolute z-2"
                >
                  ,
                </motion.span>
              </motion.span>{" "}
              <br /> I am{" "}
              <span className="inline-block relative">
                Nikhil{" "}
                <motion.span
                  drag
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  initial={{ y: -50, rotate: 100 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{
                    delay: 3,
                    duration: 1,
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                  }}
                  className="text-color-2 cursor-pointer inline-block"
                >
                  .
                </motion.span>
                <motion.img
                  src={curve}
                  className="absolute top-[90%] left-0 w-full h-4"
                  initial={{ y: -10, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.5,
                  }}
                  width={624}
                  height={28}
                  alt="Curve"
                />
              </span>
            </h1>
            <p className="body-1 mt-4 relative text-nowrap">
              An Aspiring Full-Stack Developer
              <motion.span
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                initial={{ x: -1000, width: 1 }}
                animate={{
                  x: 0,
                  width: 80,
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
                className="absolute z-2 top-[70%] xl:left-[97%] lg:left-[103%] md:left-[104%] sm:left-[104%] bg-orange-300 h-0.5 w-[5rem] cursor-pointer left-[104%] 2xs:left-0 2xs:top-[117%]"
              ></motion.span>
            </p>
          </div>
          <div className="xl:w-[35rem] lg:w-[25rem] md:w-[32rem] h-auto relative z-1">
            <img src={Coder} alt="" className="w-full h-auto drop-shadow-xl" />
          </div>
        </div>
      </Section>
    </>
  );
};

export default Hero;
