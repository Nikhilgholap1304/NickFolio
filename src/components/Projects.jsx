import React from "react";
import Roller from "./Roller";
import Section from "./Section";
import Reveal from "./Reveal";
import { projects } from "../constants/index";
import { motion, useAnimation } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { MdExitToApp } from "react-icons/md";
import { PiArrowRightFill } from "react-icons/pi";

const Projects = () => {
  const controls = useAnimation();
  return (
    <>
      <Section
        className="flex flex-col mt-[4rem] lg:mt-[10rem] lg:px-[6rem] md:px-[6rem] sm:px-[1.25rem] xs:px-[1.25rem] 2xs:px-[1.25rem] lg:gap-[3rem] gap-[1rem] relative"
        id="projects"
      >
        <div className="flex items-center justify-between gap-4 sm:gap-10">
          <Roller direction="right" id="2" />
          <h1 className="font-black font-Poppins text-[3rem] sm:text-[3rem] xs:text-[3rem] 2xs:text-[2rem] lg:text-6xl">
            <Reveal>
              Projects&nbsp;<span className="text-violet-500">.</span>
            </Reveal>
          </h1>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 grid-cols-1">
          {projects.map((item) => (
            <div>
              <div
                key={item.id}
                className="w-full aspect-video z-1 rounded-lg cursor-pointer relative overflow-hidden bg-[#232323] group"
              >
                <motion.img
                  key={item.id}
                  src={item.img}
                  alt={item.title}
                  className=" absolute w-[85%] bottom-0 left-1/2 -translate-x-1/2 translate-y-[25%] transition-all duration-[0.25s] rounded h-full group-hover:rotate-3 group-hover:w-[88%] shadow-lg"
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    duration: 0.25,
                  }}
                />
              </div>
              <div key={item.id} className="my-4">
                <div className="flex justify-between items-center gap-3 md:text-2xl text-[1.3rem]">
                  <h4 className="font-Poppins font-bold flex-shrink-0 text-nowrap">
                    {item.title}
                  </h4>
                  <div className="w-full h-[1px] opacity-30 bg-[#ebecf3]"></div>
                  <motion.a
                    href={item.link.github}
                    className="opacity-75 hover:opacity-100"
                    initial={{
                      y: 0,
                    }}
                    whileHover={{
                      y: 3,
                    }}
                  >
                    <FaGithub className="md:h-[2rem] md:w-[2rem] h-[1.2rem] w-[1.2rem]" />
                  </motion.a>
                  <motion.a
                    href={item.link.live}
                    className="opacity-75 hover:opacity-100"
                    initial={{
                      y: 0,
                    }}
                    whileHover={{
                      y: 3,
                    }}
                  >
                    <MdExitToApp className="md:h-[2rem] md:w-[2rem] h-[1.4rem] w-[1.4rem]" />
                  </motion.a>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 my-2 md:text-lg text-[1rem] text-white">
                {item.tools.map((tool, index) => (
                  <p
                    key={index}
                    className="bg-[#232323] text-violet-400 px-2 py-1 rounded"
                  >
                    {tool}
                  </p>
                ))}
              </div>
              <div className=" font-Poppins font-extralight md:text-xl text-[1.1rem] text-[#ebecf3] mt-4">
                {item.shortdesc} &nbsp;
                <motion.span className="text-violet-400  font-light items-center gap-1 inline-flex cursor-pointer underline group">
                  Learn more
                  <PiArrowRightFill className="group-hover:translate-x-1 transition-transform" />
                </motion.span>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Projects;
