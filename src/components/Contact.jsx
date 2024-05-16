import React, { useState } from "react";
import Section from "./Section";
import { motion, useAnimation } from "framer-motion";
import { MdOutlineAttachEmail } from "react-icons/md";
import Reveal from "./Reveal";
import './style/style.scss'

const Contact = () => {
  return (
    <>
      <Section
        className="flex flex-col mt-[4rem] lg:mt-[10rem] lg:px-[6rem] md:px-[6rem] sm:px-[1.25rem] xs:px-[1.25rem] 2xs:px-[1.25rem] lg:gap-[3rem] gap-[1rem] relative h-screen"
        id="contact"
      >
        <div className="font-Poppins max-w-[55rem] m-auto">
          <h4 className="md:text-8xl text-center text-5xl">
            <Reveal>
              {"Contact".split("").map((child, i) => (
                <span className="BubbleHover" key={i}>
                  {child}
                </span>
              ))}
              <span className="font-bold text-violet-500">.</span>
            </Reveal>
          </h4>
          <Reveal>
            <p className="my-6 font-extralight text-center text-xl 2xs:text-base">
              Feel free to shoot me an email if you're not enough busy and thus
              want to connect! You can also find me on{" "}
              <a
                href="https://www.linkedin.com/in/nikhil-n-gholap/"
                className="text-violet-500 hover:underline"
              >
                Linkedin
              </a>
              &nbsp;or{" "}
              <a
                href="https://www.instagram.com/nikhil__gholap1304/"
                className="text-violet-500 hover:underline"
              >
                Instagram
              </a>{" "}
              if that's more your speed.
            </p>
          </Reveal>
          <Reveal>
            <a
              href="mailto:nikhilgholap1304@gmail.com"
              className="flex items-center justify-center gap-2 w-fit md:text-2xl m-auto transition-colors hover:text-violet-500 text-base"
            >
              <MdOutlineAttachEmail className="md:text-3xl translate-y-[2px]" />
              <span>nikhilgholap1304@gmail.com</span>
            </a>
          </Reveal>
        </div>
      </Section>
    </>
  );
};

export default Contact;
