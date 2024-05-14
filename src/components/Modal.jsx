import React from "react";
import { CgClose } from "react-icons/cg";
import { FaGithub } from "react-icons/fa6";
import { MdExitToApp } from "react-icons/md";
import graffiti from "../assets/projects/graffiti.png";

const Modal = ({ open, projectDetail, onClick }) => {
  return (
    <>
      <div
        className={`${
          open === true ? "flex" : "hidden"
        } fixed top-0 left-0 right-0 bottom-0 z-[100000] h-[full] w-full px-4 py-12 backdrop-blur-md overflow-y-scroll flex justify-center cursor-pointer`}
      >
        <div
          className="absolute text-[1.4rem] top-3 right-3 cursor-pointer bg-gray-950/50 p-2 rounded-full group"
          onClick={onClick}
        >
          <CgClose
            className="color-[#ebecf3] transition-transform
           group-hover:scale-90"
          />
        </div>
        <div className="w-full max-w-[43.75rem] h-fit rounded-xl overflow-hidden bg-[#232323] shadow-lg cursor-auto">
          {!open ? (
            ""
          ) : (
            <img src={projectDetail.item.img} alt="" className="w-full" />
          )}
          <div className="p-6">
            <h4 className="font-Poppins text-4xl text-[#ebecf3] font-bold">
              {!open ? "" : projectDetail.item.title}
            </h4>
            <div className="flex flex-wrap gap-4 my-4 md:text-lg text-[1rem] text-white">
              {!open
                ? ""
                : projectDetail.item.tools.map((tool) => (
                    <p className="bg-[#0f0f0f] text-violet-400 px-2 py-1 rounded shadow-lg">
                      {tool}
                    </p>
                  ))}
            </div>
            <div className="font-Poppins text-[#ebecf3] flex flex-col gap-3 text-lg">
              {!open ? (
                ""
              ) : (
                <>
                  <p>{projectDetail.item.shortdesc}</p>
                  <p>{projectDetail.item.fulldesc}</p>
                </>
              )}
            </div>
            <div className="mt-6">
              <p className="font-Poppins text-2xl font-bold mb-2">
                Project Links
                <span className="text-violet-500">.</span>
              </p>
              <div className="flex items-center gap-3">
                <a
                  href=""
                  className="flex items-center gap-1 text-base text-violet-500"
                >
                  <FaGithub />
                  <span>source code</span>
                </a>
                <a
                  href=""
                  className="flex items-center gap-1 text-base text-violet-500"
                >
                  <MdExitToApp />
                  <span>live project</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
