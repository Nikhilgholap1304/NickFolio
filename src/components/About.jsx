import React from "react";
import Section from "./Section";
import Me from "../assets/Me/Me2.jpg";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
// import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import Reveal from "./Reveal";
import TiltMeCard from "./TiltMeCard";
import Roller from "./Roller";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Section
      className="flex flex-col mt-[4rem] lg:mt-[10rem] lg:px-[6rem] md:px-[6rem] sm:px-[1.25rem] xs:px-[1.25rem] 2xs:px-[1.25rem] lg:gap-[3rem] gap-[1rem] relative"
      id="about"
    >
      <div className="flex items-center justify-between gap-4 sm:gap-10">
        <h1 className="font-black font-Poppins text-[3rem] sm:text-[3rem] xs:text-[3rem] 2xs:text-[2rem] lg:text-6xl">
          <Reveal>
            About&nbsp;<span className="text-violet-500">.</span>
          </Reveal>
        </h1>
        <Roller direction="left" id="1" />
      </div>
      <div className="flex flex-col relative lg:items-start items-center justify-center lg:flex-row lg:justify-between">
        <TiltMeCard />
        <div className="relative lg:max-w-[60%]">
          <Reveal>
            <p
              className="mb-6 font-Poppins font-extralight lg:text-lg text-base text-[#ebecf3] first-letter:p-2.5
            lg:first-letter:p-2 first-letter:rounded lg:first-letter:text-3xl
            first-letter:text-[1.3rem]
          first-letter:float-left first-letter:bg-[#232323] first-letter:font-bold first-letter:mr-2"
            >
              Hey! I'm Nikhil N Gholap, if you haven't gathered that by now. I'm
              an aspiring full-stack developer cuz just freshly pulled completed
              my BSc.IT degree. well, I'm probably specialized in react, sort of
              you can say has enough skill regarding 'MERN' stack.
            </p>
          </Reveal>
          <Reveal>
            <p className="mb-6 font-Poppins font-extralight  lg:text-lg text-base text-[#ebecf3]">
              So I'm suppose to reveal some of my skills thereby you could
              scrutinize my value over assumptions, then behold - React, Node
              js, Express js, MongoDB, Rest API's, SCSS, Tailwind, MUI,
              Primereact, Bootstrap, Framer motion, FireBase (in learning
              progress),etc. Besides I typically learn from mistakes i.e gaining
              experience is all the way matters.
            </p>
          </Reveal>
          <Reveal>
            <p className="mb-6 font-Poppins font-extralight lg:text-lg text-base text-[#ebecf3]">
              Outside of work, guess there are bunch of aspects I would love to
              do - instances such as dancing, singing, swimming (suspecting huh
              ? they seem pretty much basic yet I really love to carry out).
            </p>
          </Reveal>
          <Reveal>
            <p className="mb-6 font-Poppins font-extralight lg:text-lg text-base text-[#ebecf3]">
              So, I'm passively looking for new position where I could desirably
              fit seemlessly, If you think an opening might have the chance for
              the same, lets connect 🔗
            </p>
          </Reveal>
          <div className="flex gap-5 flex-nowrap items-center">
            <div className="flex gap-2 flex-nowrap items-center group">
              <h1 className="font-Poppins font-medium lg:text-lg text-sm text-violet-400 text-nowrap">
                <Reveal>My Links</Reveal>
              </h1>
              <Reveal>
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  fill="rgb(167 139 250)"
                  class="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                  className="w-5 h-5 lg:w-6 lg:h-6 group-hover:translate-x-[6px] transition-transform"
                  whileTap={{ x: 3 }}
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </motion.svg>
              </Reveal>
            </div>
            <div className="flex lg:gap-4 gap-3 flex-nowrap items-center *:transition-colors">
              <motion.a
                href="https://www.linkedin.com/in/nikhil-n-gholap/"
                initial={{
                  y: 0,
                }}
                whileHover={{ y: 2 }}
                whileTap={{ y: 2 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  duration: 0.5,
                }}
              >
                <Reveal>
                  <FaLinkedin className="text-[#7e7e82] lg:text-2xl text-lg hover:text-violet-500" />
                </Reveal>
              </motion.a>
              <motion.a
                href="https://github.com/Nikhilgholap1304"
                initial={{
                  y: 0,
                }}
                whileHover={{ y: 2 }}
                whileTap={{ y: 2 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  duration: 0.5,
                }}
              >
                <Reveal>
                  <FaGithub className="text-[#7e7e82] lg:text-2xl text-lg hover:text-violet-500" />
                </Reveal>
              </motion.a>
              <motion.a
                href="https://www.instagram.com/nikhil__gholap1304/"
                initial={{
                  y: 0,
                }}
                whileHover={{ y: 2 }}
                whileTap={{ y: 2 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  duration: 0.5,
                }}
              >
                <Reveal>
                  <FaInstagram className="text-[#7e7e82] lg:text-2xl text-lg hover:text-violet-500" />
                </Reveal>
              </motion.a>
              <motion.a
                href="https://drive.google.com/file/d/1LjNHnJvOrRwglLfKe1M4AIYkrj3YUd2G/view?usp=drivesdk"
                initial={{
                  y: 0,
                }}
                whileHover={{ y: 2 }}
                whileTap={{ y: 2 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  duration: 0.5,
                }}
              >
                <Reveal>
                  <FaTelegram className="text-[#7e7e82] lg:text-2xl text-lg hover:text-violet-500" />
                </Reveal>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
