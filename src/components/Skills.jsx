import React from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import Roller from "./Roller";
import Nickfolio from "../assets/Nickfolio_icon_colored.png";

const Skills = () => {
  return (
    <Section
      className="flex flex-col mt-[4rem] lg:mt-[10rem] lg:px-[6rem] md:px-[6rem] sm:px-[1.25rem] xs:px-[1.25rem] 2xs:px-[1.25rem] lg:gap-[5rem] gap-[3rem] relative overflow-hidden"
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
        <div className="flex w-[60%] h-auto aspect-square m-auto border border-n-6 rounded-full">
          <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
            <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
              <img src={Nickfolio} width="48" height="48" alt="nickfolio" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
