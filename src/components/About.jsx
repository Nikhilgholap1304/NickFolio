import React from "react";
import Section from "./Section";
import Me from "../assets/Me/Me2.jpg";

const About = () => {
  return (
    <Section
      className="flex flex-col mt-[10rem] lg:px-[6rem] gap-[3rem]"
      id="about"
    >
      <div className="flex items-center justify-between gap-10">
        <h1 className="font-black text-6xl font-Poppins">
          About&nbsp;<span className="text-violet-500">.</span>
        </h1>
        <span className="w-full bg-violet-50 opacity-50 h-[1px] rounded"></span>
      </div>
      <div className="flex relative items-center justify-between">
        <div className="max-w-[20rem] h-[auto] rounded overflow-hidden">
          <img
            src={Me}
            alt="me"
            className="w-full rounded object-cover inset-0"
          />
        </div>
        <div className="relative max-w-[60%]">
          <p
            className="mb-6 font-Poppins font-extralight text-lg text-[#ebecf3] first-letter:p-2 first-letter:rounded first-letter:text-3xl 
          first-letter:float-left first-letter:bg-[#232323] first-letter:font-bold first-letter:mr-2"
          >
            Hey Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            doloribus vel recusandae voluptatem ut eos, obcaecati iste
            distinctio beatae accusantium delectus? Fugiat porro dolorem harum
            quibusdam suscipit provident in officiis.
          </p>
          <p className="mb-6 font-Poppins font-extralight  text-lg text-[#ebecf3]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            doloribus vel recusandae voluptatem ut eos, obcaecati iste
            distinctio beatae accusantium delectus? Fugiat porro dolorem harum
            quibusdam suscipit provident in officiis.
          </p>
          <p className="mb-6 font-Poppins font-extralight  text-lg text-[#ebecf3]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            doloribus vel recusandae voluptatem ut eos, obcaecati iste
            distinctio beatae accusantium delectus? Fugiat porro dolorem harum
            quibusdam suscipit provident in officiis.
          </p>
          <div className="flex gap-3 flex-nowrap items-center">
            <div className="flex gap-3 flex-nowrap items-center">
              <h1 className="font-Poppins font-medium text-lg text-violet-400">
                My Links
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                fill="rgb(167 139 250)"
                class="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </div>
            <div className="flex gap-3 flex-nowrap items-center">
              
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
