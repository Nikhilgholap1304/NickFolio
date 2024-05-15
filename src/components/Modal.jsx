import React from "react";
import { CgClose } from "react-icons/cg";
import { FaGithub } from "react-icons/fa6";
import { MdExitToApp } from "react-icons/md";
import graffiti from "../assets/projects/graffiti.png";
import { motion, useAnimation } from "framer-motion";
import Reveal from "./Reveal";

const Modal = ({ open, projectDetail, onClick }) => {
  const controls = useAnimation();
  const popupVariants = {
    hidden: {
      opacity: 0,
      y: "100%",
    },
    visible: {
      opacity: 1,
      y: "0%",
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        duration: 0.2,
      },
    },
    exit: {
      opacity: 0,
      y: "-100%",
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        delay: 0.5,
      },
    },
  };
  return (
    <>
      {open && (
        <motion.div
          className="fixed top-0 left-0 right-0 bottom-0 z-[998] h-[full] w-full px-4 py-12 backdrop-blur-md overflow-y-scroll flex justify-center cursor-pointer"
          onClick={onClick}
          initial={{
            opacity: 0,
            visibility: "hidden",
          }}
          animate={{
            opacity: 1,
            visibility: "visible",
          }}
          exit={{
            opacity: 0,
            visibility: "hidden",
          }}
        >
          <div
            className="absolute text-[1.4rem] 2xs:text-base top-3 right-3 cursor-pointer bg-gray-950/50 p-2 rounded-full group"
            onClick={onClick}
          >
            <CgClose
              className="color-[#ebecf3] transition-transform
           group-hover:scale-90 group-active:scale-90"
            />
          </div>
          <motion.div
            className="w-full max-w-[43.75rem] h-fit rounded-xl overflow-hidden bg-[#232323] shadow-lg cursor-auto"
            onClick={(e) => e.stopPropagation()}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={popupVariants}
          >
            {!open ? (
              ""
            ) : (
              <img src={projectDetail.item.img} alt="" className="w-full" />
            )}
            <div className="p-6">
              <h4 className="font-Poppins text-4xl 2xs:text-3xl text-[#ebecf3] font-bold w-fit">
                <Reveal>{!open ? "" : projectDetail.item.title}</Reveal>
              </h4>
              <div className="flex flex-wrap gap-4 2xs:gap-2 2xs:text-sm my-4 md:text-lg text-[1rem] text-white">
                {!open
                  ? ""
                  : projectDetail.item.tools.map((tool) => (
                      <motion.p
                        className="bg-[#0f0f0f] text-violet-400 px-2 py-1 rounded shadow-lg cursor-none"
                        initial={{
                          x: 0,
                          y: 0,
                        }}
                        animate={controls}
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
                        <Reveal>{tool}</Reveal>
                      </motion.p>
                    ))}
              </div>
              <div className="font-Poppins text-[#ebecf3] flex flex-col gap-3 text-lg 2xs:text-base">
                {!open ? (
                  ""
                ) : (
                  <>
                    <p>
                      <Reveal>{projectDetail.item.shortdesc}</Reveal>
                    </p>
                    <p>
                      <Reveal>{projectDetail.item.fulldesc}</Reveal>
                    </p>
                  </>
                )}
              </div>
              <div className="mt-6">
                <p className="font-Poppins text-2xl font-bold mb-2 2xs:text-xl">
                  <Reveal>
                    Project Links
                    <span className="text-violet-500">.</span>
                  </Reveal>
                </p>
                <div className="flex items-center gap-3 cursor-pointer">
                  {!open ? (
                    ""
                  ) : (
                    <>
                      <motion.a
                        href={projectDetail.item.link.github}
                        className="flex items-center gap-1 text-lg text-violet-500 2xs:text-base"
                      >
                        <FaGithub />
                        <motion.span
                          className="relative"
                          whileHover="hover"
                          initial="initial"
                          exit="exit"
                          whileTap="whileTap"
                        >
                          <Reveal>source code</Reveal>
                          <motion.span
                            className=" absolute h-[2px] rounded bottom-0 bg-violet-500"
                            variants={{
                              initial: { width: "0%", left: "0%" },
                              hover: { width: "100%", left: "0%" },
                              tap: { width: "100%", left: "0%" },
                              exit: { width: "0%", left: "100%" },
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 20,
                            }}
                          ></motion.span>
                        </motion.span>
                      </motion.a>
                      <motion.a
                        href={projectDetail.item.link.live}
                        className="flex items-center gap-1 text-lg text-violet-500"
                      >
                        <MdExitToApp className="text-xl" />
                        <motion.span
                          className="relative"
                          whileHover="hover"
                          initial="initial"
                          exit="exit"
                        >
                          <Reveal>live project </Reveal>
                          <motion.span
                            className=" absolute h-[2px] rounded bottom-0 bg-violet-500"
                            variants={{
                              initial: { width: "0%", left: "0%" },
                              hover: { width: "100%", left: "0%" },
                              exit: { width: "0%", left: "100%" },
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 20,
                            }}
                          ></motion.span>
                        </motion.span>
                      </motion.a>
                    </>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Modal;
