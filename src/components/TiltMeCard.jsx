import React from "react";
import Reveal from "./Reveal";
import Me from "../assets/Me/Me2.jpg";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

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
  }

  return (
    <motion.div
      className="xl:max-w-[20rem] h-[auto] rounded lg:max-w-[15rem] lg:mb-auto mb-9 relative sm: max-w-[20rem] xs:w-[15rem]"
      style={{transformStyle: "preserve-3d", rotateX, rotateY}}
    >
      <Reveal>
        <img
          src={Me}
          alt="me"
          className="w-full rounded object-cover inset-0"
        />
      </Reveal>
      <motion.div
        className="absolute w-full h-full top-10 left-10 bg-violet-500 -z-1 rounded "
        style={{transformStyle: "preserve-3d"}}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      ></motion.div>
    </motion.div>
  );
};

export default TiltMeCard;
