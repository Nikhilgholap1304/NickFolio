import React from "react";
import Reveal from "./Reveal";
import Me from "../assets/Me/Me2.jpg";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ScrollParallax } from "react-just-parallax";

const TiltMeCard = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="xl:max-w-[20rem] h-[auto] rounded lg:max-w-[15rem] lg:mb-auto mb-9 relative sm:max-w-[20rem] xs:w-[15rem] 2xs:max-w-[80%]"
      style={{ transformStyle: "preserve-3d", rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Reveal>
        <motion.img
          src={Me}
          alt="me"
          className="w-full rounded object-cover inset-0 shadow-lg cursor-grab"
          drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        whileTap={{
          cursor:'grabbing'
        }}
        />
      </Reveal>
      <ScrollParallax isAbsolutelyPositioned zIndex={-1}>
        <motion.div
          className="absolute w-full h-full lg:top-12 lg:left-10 top-6 left-6 bg-violet-500 -z-1 rounded shadow-lg"
          style={{ transformStyle: "preserve-3d" }}
          initial={{
            opacity: 0,
            y:5
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.5,
            delay: 0.5,
          }}
          whileInView={{
            opacity: 1,
            y:0,
            once: true,
          }}
          viewport={{
            once:true
          }}
        ></motion.div>
      </ScrollParallax>
    </motion.div>
  );
};

export default TiltMeCard;
