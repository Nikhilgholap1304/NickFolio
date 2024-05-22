import React from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import Roller from "./Roller";


const Testimonials = () => {
  return (
    <>
      <Section
        className="flex flex-col mt-[4rem] lg:mt-[10rem] lg:px-[6rem] md:px-[6rem] sm:px-[1.25rem] xs:px-[1.25rem] 2xs:px-[1.25rem] lg:gap-[3rem] gap-[1rem] relative"
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
    </>
  );
};

export default Testimonials;
