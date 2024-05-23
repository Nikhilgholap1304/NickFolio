import React, { useRef } from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import Roller from "./Roller";
import { motion, useTransform, useScroll } from "framer-motion";

const Testimonials = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0,1],["1%","-95%"]);

  return (
    <>
      <Section
        className="flex flex-col mt-[4rem] lg:mt-[10rem] lg:px-[6rem] md:px-[6rem] sm:px-[1.25rem] xs:px-[1.25rem] 2xs:px-[1.25rem] lg:gap-[3rem] gap-[1rem] relative overflow-hidden"
        id="testimonials"
      >
        <div className="flex items-center justify-between gap-4 sm:gap-10">
          <Roller direction="right" id="4" />
          <h1 className="font-black font-Poppins text-[3rem] sm:text-[3rem] xs:text-[3rem] 2xs:text-[2rem] lg:text-6xl">
            <Reveal>
              Testimonials&nbsp;<span className="text-violet-500">.</span>
            </Reveal>
          </h1>
        </div>
      </Section>
      <div className="h-[300vh] relative z-1" ref={targetRef}>
        <div className="sticky top-0 bg-violet-600 h-screen flex items-center overflow-hidden px-5">
          <motion.div className="flex gap-10" style={{x}}>
            <div className=" h-[20rem] w-[15rem] bg-yellow-400 rounded-md"></div>
            <div className=" h-[20rem] w-[15rem] bg-yellow-400 rounded-md"></div>
            <div className=" h-[20rem] w-[15rem] bg-yellow-400 rounded-md"></div>
            <div className=" h-[20rem] w-[15rem] bg-yellow-400 rounded-md"></div>
            <div className=" h-[20rem] w-[15rem] bg-yellow-400 rounded-md"></div>
            <div className=" h-[20rem] w-[15rem] bg-yellow-400 rounded-md"></div>
            <div className=" h-[20rem] w-[15rem] bg-yellow-400 rounded-md"></div>
            <div className=" h-[20rem] w-[15rem] bg-yellow-400 rounded-md"></div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
