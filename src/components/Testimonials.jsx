import React, { useRef } from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import Roller from "./Roller";
import { motion, useTransform, useScroll } from "framer-motion";
import { testimonials } from "../constants/index";
import { FaQuoteLeft } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { LeftCurve, RightCurve } from "../design/Testimonial";

const Testimonials = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  const Min1280 = useMediaQuery({
    query: "(min-width: 1280px)",
  });
  const Min1024 = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  const Min768 = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const Min640 = useMediaQuery({
    query: "(min-width: 640px)",
  });
  const Min450 = useMediaQuery({
    query: "(min-width: 450px)",
  });
  const Min320 = useMediaQuery({
    query: "(min-width: 320px)",
  });

  const findScale = () => {
    if (Min1280) {
      return {
        initial: 0.95,
        WiV: 1,
      };
    } else if (Min1024) {
      return {
        initial: 0.75,
        WiV: 0.8,
      };
    } else if (Min768 || Min640) {
      return {
        initial: 0.65,
        WiV: 0.7,
      };
    } else if (Min320 || Min450) {
      return {
        initial: 0.55,
        WiV: 0.6,
      };
    } else {
      return {
        initial: {},
        WiV: {},
      };
    }
  };
  const scale = findScale();

  const variants = {
    initial: {
      scale: scale.initial,
    },
    whileInView: {
      scale: scale.WiV,
    },
  };

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
        <div className="sticky top-0 bg-violet-600 h-screen w-screen flex items-center px-5 pt-[4rem] overflow-hidden">
          <motion.div className="flex xl:gap-20" style={{ x }}>
            {testimonials.map((item, index) => (
              <motion.div
                key={item.id}
                className=" px-8 pb-10 pt-[10rem] bg-yellow-500 rounded-md flex flex-col items-center justify-end gap-5 min-w-[22rem] min-h-[30rem] relative overflow-hidden shadow-lg xl:scale-90 lg:scale-[0.8] md:scale-[0.7] sm:scale-[0.7] xs:scale-[0.6] 2xs:scale-[0.6] 2xs:-ml-[4rem] 2xs:-mr-[2rem] xs:-ml-[4rem] xs:-mr-[2rem] transition-shadow ease-in-out duration-500"
                initial="initial"
                whileInView="whileInView"
                variants={variants}
                whileHover={{
                  boxShadow: "rgb(83 43 5 / 50%) 0px 0.5rem 2rem",
                }}
                whileTap={{
                  boxShadow: "rgb(83 43 5 / 50%) 0px 0.5rem 2rem",
                }}
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              >
                <div className="text-[10rem] absolute -top-[3rem] left-9 drop-shadow-xl text-violet-600">
                  <FaQuoteLeft />
                </div>
                <div className="font-serif text-xl opacity-70">
                  <p>"{item.desc}"</p>
                </div>
                <div className="flex gap-5 justify-start w-full items-center">
                  <div className="w-15 h-15 rounded-full overflow-hidden object-cover border-solid">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="object-center w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-xl font-bold opacity-90">
                      {item.title}
                    </h4>
                    <p className="opacity-70">{item.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <h4 className="absolute top-1/2 left-1/2 -translate-x-1/2 lg:text-8xl md:text-7xl sm:text-6xl 2xs:text-4xl xs:text-5xl -z-1 font-serif uppercase font-black opacity-10">
            <LeftCurve />
            Testimonials
            <RightCurve />
          </h4>
        </div>
        <div className="text-[10rem] absolute -bottom-[7rem] right-20 text-violet-600 2xs:text-[7rem] 2xs:-bottom-[5rem] 2xs:right-5">
          <FaQuoteLeft />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
