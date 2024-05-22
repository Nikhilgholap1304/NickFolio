import React from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import Roller from "./Roller";
import Nickfolio from "../assets/Nickfolio_icon_colored.png";
import { skillSet } from "../constants/index";
import brackets from "../assets/svg/Brackets";
import { motion } from "framer-motion";

const Skills = () => {
  // Define animation variants
  const gradientVariants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: [1, 0, 1],
      scale: [1, 0.4, 1],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };
  return (
    <Section
      className="flex flex-col mt-[4rem] lg:mt-[10rem] lg:px-[6rem] md:px-[6rem] sm:px-[2.25rem] xs:px-[2.25rem] 2xs:px-[2rem] lg:gap-[5rem] gap-[5rem] relative overflow-hidden"
      id="skills"
    >
      <div className="flex items-center justify-between gap-4 sm:gap-10">
        <h1 className="font-black font-Poppins text-[3rem] sm:text-[3rem] xs:text-[3rem] 2xs:text-[2rem] lg:text-6xl">
          <Reveal>
            Skills&nbsp;<span className="text-violet-500">.</span>
          </Reveal>
        </h1>
        <Roller direction="left" id="3" />
      </div>
      <div
        className="relative 
     z-1 left-1/2 flex w-auto h-auto aspect-square border border-n-6 rounded-full -translate-x-1/2 md:scale-100"
      >
        <div className="relative flex w-[60%] h-auto aspect-square m-auto border border-n-5 rounded-full">
          <div className="xl:w-[12rem] lg:w-[8rem] md:w-[6rem] sm:w-[5rem] xs:w-[4rem] 2xs:w-[3rem] aspect-square m-auto sm:p-[0.2rem] p-[0.1rem] bg-conic-gradient rounded-full">
            <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
              <img
                src={Nickfolio}
                alt="nickfolio"
                className="xl:w-20 lg:w-14 xl:h-20 lg:h-14 md:w-10 md:h-10 sm:w-8 sm:h-8 xs:size-8 2xs:size-6 inset-0"
              />
            </div>
          </div>
          <ul>
            {skillSet.slice(12).map((skill, index) => (
              <motion.li
                key={skill.id}
                className={`absolute top-0 left-1/2 h-1/2 lg:-ml-[2.2rem] sm:-ml-[1.5rem] xs:-ml-[1.27rem] 2xs:-ml-[1.1rem] origin-bottom rotate-${
                  (index + 12) * 45
                }`}
              >
                <Reveal>
                  <motion.div
                    className={`relative lg:-top-[2.2rem] sm:-top-[1.5rem] xs:-top-[1.2rem] 2xs:-top-[1.05rem] flex xl:w-[4.5rem] lg:w-[4rem] xl:h-[4.5rem] lg:h-[4rem] md:w-[3.5rem] md:h-[3.5rem] sm:h-[3rem] sm:w-[3rem] xs:size-[2.5rem] 2xs:size-[2.3rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      (index + 12) * 45
                    }`}
                    whileHover={{
                      x: Math.random() * 50 - 25,
                      y: Math.random() * 50 - 25,
                      transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                      },
                    }}
                    whileTap={{
                      x: Math.random() * 50 - 25,
                      y: Math.random() * 50 - 25,
                      transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                      },
                    }}
                    onMouseLeave={() => {
                      controls.start({
                        x: 0,
                        y: 0,
                        transition: {
                          type: "spring",
                          stiffness: 100,
                          damping: 20,
                        },
                      });
                    }}
                  >
                    <motion.img
                      src={skill.icon}
                      alt={skill.title}
                      className="m-auto xl:w-[3.1rem] lg:w-[2.7rem] lg:h-[2.7rem] xl:h-[3.1rem] md:h-[2.4rem] md:w-[2.4rem] sm:h-[1.9rem] sm:w-[1.9rem] xs:size-[1.5rem] 2xs:size-[1.2rem]"
                    />
                  </motion.div>
                </Reveal>
              </motion.li>
            ))}
          </ul>
        </div>
        <ul>
          {skillSet.slice(0, 12).map((skill, index) => (
            <li
              key={skill.id}
              className={`absolute top-0 left-1/2 h-1/2 lg:-ml-[2.2rem] sm:-ml-[1.5rem] xs:-ml-[1.27rem] 2xs:-ml-[1.1rem] origin-bottom rotate-${
                index * 30
              }`}
            >
              <Reveal>
                <motion.div
                  className={`relative lg:-top-[2.2rem] sm:-top-[1.5rem] xs:-top-[1.2rem] 2xs:-top-[1.05rem] flex xl:w-[4.5rem] lg:w-[4rem] xl:h-[4.5rem] lg:h-[4rem] md:w-[3.5rem] md:h-[3.5rem] sm:h-[3rem] sm:w-[3rem] xs:size-[2.5rem] 2xs:size-[2.3rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                    index * 30
                  }`}
                  whileHover={{
                    x: Math.random() * 50 - 25,
                    y: Math.random() * 50 - 25,
                    transition: {
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                    },
                  }}
                  whileTap={{
                    x: Math.random() * 50 - 25,
                    y: Math.random() * 50 - 25,
                    transition: {
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                    },
                  }}
                  onMouseLeave={() => {
                    controls.start({
                      x: 0,
                      y: 0,
                      transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                      },
                    });
                  }}
                >
                  <img
                    className="m-auto xl:w-[3.1rem] lg:w-[2.7rem] lg:h-[2.7rem] xl:h-[3.1rem] md:h-[2.4rem] md:w-[2.4rem] sm:h-[1.9rem] sm:w-[1.9rem] xs:size-[1.5rem] 2xs:size-[1.2rem]"
                    src={skill.icon}
                    alt={skill.title}
                  />
                </motion.div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:absolute static xl:top-[42%] lg:top-[45%] md:top-[45%] md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
        {/* <h1 className="lg:text-2xl xl:text-4xl md:font-bold font-code uppercase opacity-10 md:text-xl text-3xl 2xs:text-lg 2xs:-mt-6">
          The skill set system
        </h1> */}
        <div className={`tagline flex items-center text-xl 2xs:text-xs`}>
          {brackets("left")}
          <div className="mx-3 text-n-3 opacity-70">My skill set system</div>
          {brackets("right")}
        </div>
      </div>
      <motion.div
        className="absolute -z-1 w-full h-full m-auto left-[0%] aspect-square"
        style={{
          background:
            "radial-gradient(100% 100% at 50% 50%, rgb(48 7 125), rgb(9 9 9 / 0%) 50%)",
        }}
        initial="initial"
        animate="animate"
        variants={gradientVariants}
      ></motion.div>
    </Section>
  );
};

export default Skills;
