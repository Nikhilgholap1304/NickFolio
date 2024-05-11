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

const About = () => {
  return (
    <Section
      className="flex flex-col mt-[4rem] lg:mt-[10rem] lg:px-[6rem] md:px-[6rem] sm:px-[1.25rem] xs:px-[1.25rem] 2xs:px-[1.25rem] lg:gap-[3rem] gap-[1rem] relative"
      id="about"
    >
      {/* <div className="absolute top-[20%] -right-1/2 bg-violet-600 w-[65%] h-1/2 rounded-lg z-0" /> */}
      <div className="flex items-center justify-between gap-4 sm:gap-10">
        <h1 className="font-black font-Poppins text-[3rem] sm:text-[3rem] xs:text-[3rem] 2xs:text-[2rem] lg:text-6xl">
          <Reveal>
            About&nbsp;<span className="text-violet-500">.</span>
          </Reveal>
        </h1>
        <span className="w-full bg-violet-50 opacity-50 h-[1px] rounded"></span>
      </div>
      <div className="flex flex-col relative lg:items-start items-center justify-center lg:flex-row lg:justify-between">
        {/* <div className="xl:max-w-[20rem] h-[auto] rounded overflow-hidden lg:max-w-[15rem] lg:mb-auto mb-9 relative sm: max-w-[20rem] xs:w-[15rem]">
          <Reveal>
            <img
              src={Me}
              alt="me"
              className="w-full rounded object-cover inset-0"
            />
          </Reveal>
        </div> */}
        <TiltMeCard />
        <div className="relative lg:max-w-[60%]">
          <Reveal>
            <p
              className="mb-6 font-Poppins font-extralight lg:text-lg text-base text-[#ebecf3] first-letter:p-2.5
            lg:first-letter:p-2 first-letter:rounded lg:first-letter:text-3xl
            first-letter:text-[1.3rem]
          first-letter:float-left first-letter:bg-[#232323] first-letter:font-bold first-letter:mr-2"
            >
              Hey Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              doloribus vel recusandae voluptatem ut eos, obcaecati iste
              distinctio beatae accusantium delectus? Fugiat porro dolorem harum
              quibusdam suscipit provident in officiis.
            </p>
          </Reveal>
          <Reveal>
            <p className="mb-6 font-Poppins font-extralight  lg:text-lg text-base text-[#ebecf3]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              doloribus vel recusandae voluptatem ut eos, obcaecati iste
              distinctio beatae accusantium delectus? Fugiat porro dolorem harum
              quibusdam suscipit provident in officiis.
            </p>
          </Reveal>
          <Reveal>
            <p className="mb-6 font-Poppins font-extralight  lg:text-lg text-base text-[#ebecf3]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              doloribus vel recusandae voluptatem ut eos, obcaecati iste
              distinctio beatae accusantium delectus? Fugiat porro dolorem harum
              quibusdam suscipit provident in officiis.
            </p>
          </Reveal>
          <div className="flex gap-4 flex-nowrap items-center">
            <div className="flex gap-3 flex-nowrap items-center">
              <h1 className="font-Poppins font-medium lg:text-lg text-sm text-violet-400 text-nowrap">
                <Reveal>My Links</Reveal>
              </h1>
              <Reveal>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  fill="rgb(167 139 250)"
                  class="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                  className="w-5 h-5 lg:w-6 lg:h-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
              </Reveal>
            </div>
            <div className="flex lg:gap-4 gap-3 flex-nowrap items-center *:transition-colors">
              <a href="https://www.linkedin.com/in/nikhil-n-gholap/">
                <Reveal>
                  <FaLinkedin className="text-[#7e7e82] lg:text-2xl text-lg hover:text-violet-500" />
                </Reveal>
              </a>
              <a href="https://github.com/Nikhilgholap1304">
                <Reveal>
                  <FaGithub className="text-[#7e7e82] lg:text-2xl text-lg hover:text-violet-500" />
                </Reveal>
              </a>
              <a href="https://www.instagram.com/nikhil__gholap1304/">
                <Reveal>
                  <FaInstagram className="text-[#7e7e82] lg:text-2xl text-lg hover:text-violet-500" />
                </Reveal>
              </a>
              <a href="https://drive.google.com/file/d/1LjNHnJvOrRwglLfKe1M4AIYkrj3YUd2G/view?usp=drivesdk">
                <Reveal>
                  <FaTelegram className="text-[#7e7e82] lg:text-2xl text-lg hover:text-violet-500" />
                </Reveal>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
