import React, { useState, useEffect } from "react";
import planet from "../assets/about/planet1.png";
import { motion, useAnimation, useScroll, useTransform, inView } from "framer-motion";


const Roller = () => {

  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const animatePlanet = async () => {
      await controls.start({
        x: -scrollY * 0.2, // Adjust multiplier as needed
        rotate: -scrollY * 0.4,
        transition: { type: "spring", stiffness: 50, damping: 10 },
      });
    };

    animatePlanet();
  }, [scrollY, controls]);

  return (
    <motion.div className="relative flex w-full">
      <span className="w-full bg-violet-50 opacity-50 h-[1px] rounded"></span>
      <motion.span
        className="absolute invisible left-[70%] lg:left-[70%] bottom-[2px] w-[2rem] h-[2rem] -z-1 rotate-0"
        initial={{ x: 0 }}
        animate={controls}
        whileInView={{
          visibility: 'visible',
        }}
      >
        <img src={planet} alt="" className="w-full h-full" />
      </motion.span>
    </motion.div>
  );
};

export default Roller;
