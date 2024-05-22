import planet from "../assets/about/planet1.png";
import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  useScroll,
  useTransform,
  useInView,
  useMotionValue,
} from "framer-motion";
import { debounce } from "lodash";
import { useMediaQuery } from "react-responsive";

const Roller = ({ direction, id }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const Max360 = useMediaQuery({
    query: "(max-width: 361px)",
  });
  const Max500 = useMediaQuery({
    query: "(max-width: 501px) and (min-width: 362px)",
  });
  const Max800 = useMediaQuery({
    query: "(max-width: 801px) and (min-width: 502px)",
  });
  const Max1080 = useMediaQuery({
    query: "(max-width: 1080px) and (min-width: 802px)",
  });

  const ballPosition = () => {
    switch (id) {
      case "1":
        return "left-[70%]";
        break;

      case "2":
        if (Max360) {
          return "right-[280%]";
        } else if (Max500) {
          return "right-[240%]";
        } else if (Max800) {
          return "right-[200%]";
        } else if (Max1080) {
          return "right-[100%]";
        } else {
          return "right-[90%]";
        }
        break;

      case "3":
        if (Max360) {
          return "left-[480%]";
        } else if (Max500) {
          return "left-[520%]";
        } else if (Max800) {
          return "left-[300%]";
        } else if (Max1080) {
          return "left-[280%]";
        } else {
          return "left-[120%]";
        }
        break;

      case "4":
        if(Max360){
          return "right-[3000%]";
        } else {
          return "right-[200%]"
        }
        break;

      default:
        break;
    }
  };

  const scrollY = useMotionValue(0);
  const x = useTransform(scrollY, (y) =>
    direction === "right" ? y * 0.2 : -y * 0.2
  );
  const rotate = useTransform(scrollY, (y) =>
    direction === "right" ? y * 0.4 : -y * 0.4
  );

  useEffect(() => {
    const handleScroll = () => {
      scrollY.set(window.scrollY);
    };

    const debouncedHandleScroll = debounce(handleScroll, 10);

    if (isInView) {
      window.addEventListener("scroll", debouncedHandleScroll, {
        passive: true,
      });
    } else {
      window.removeEventListener("scroll", debouncedHandleScroll);
    }

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, [isInView, scrollY]);

  useEffect(() => {
    if (isInView) {
      controls.start({
        x: x.get(),
        rotate: rotate.get(),
        transition: { type: "spring", stiffness: 50, damping: 10 },
      });
    }
  }, [isInView, controls, x, rotate]);

  return (
    <motion.div className="relative flex w-full" ref={ref}>
      <span className="w-full bg-violet-50 opacity-50 h-[1px] rounded"></span>
      <motion.span
        className={`absolute 
        ${ballPosition()} bottom-[2px] w-[2rem] h-[2rem] -z-1 rotate-0`}
        style={{ x, rotate }}
        animate={controls}
      >
        <img src={planet} alt="" className="w-full h-full" />
      </motion.span>
    </motion.div>
  );
};

export default Roller;
