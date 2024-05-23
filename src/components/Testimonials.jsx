import React, { useRef } from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import Roller from "./Roller";
import { motion, useTransform, useScroll } from "framer-motion";
import { testimonials } from "../constants/index";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

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
        <div className="sticky top-0 bg-violet-600 h-screen flex items-center overflow-hidden px-5 pt-[4rem]">
          <motion.div className="flex gap-20" style={{ x }}>
            {testimonials.map((item, index) => (
              <div
                key={item.id}
                className=" px-8 pb-10 pt-[10rem] bg-yellow-500 rounded-md flex flex-col items-center justify-end gap-5 min-w-[22rem] min-h-[30rem] relative overflow-hidden shadow-lg"
              >
                <div className="text-[10rem] absolute -top-[3rem] left-9 drop-shadow-xl text-violet-600">
                  <FaQuoteLeft />
                </div>
                <div className="font-serif text-xl opacity-70">
                  <p>"{item.desc}"</p>
                </div>
                <div className="flex gap-5 justify-start w-full items-center">
                  <div className="w-15 h-15 rounded-full overflow-hidden object-cover border-solid">
                    <img src={item.img} alt={item.title} className="object-center w-full h-full"/>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-xl font-bold opacity-90">{item.title}</h4>
                    <p className="opacity-70">{item.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
