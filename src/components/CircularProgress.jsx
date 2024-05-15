import React, { useState, useEffect } from "react";
import { motion, useViewportScroll } from "framer-motion";
import ProgressBar from "../assets/svg/ProgressBar";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const { scrollYProgress } = useViewportScroll();

  useEffect(() => {
    scrollYProgress.onChange((v) => {
      setProgress(v * 100);
    });
  }, [scrollYProgress]);

  return (
    <motion.div
      style={{
        position: "fixed",
        width: "fit-content",
        height: "fit-content",
        zIndex: 49,
      }}
      className="md:bottom-[30px] md:right-[30px] bottom-[20px] right-[10px]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: progress > 3 ? 1 : 0, y: progress > 3 ? 0 : 20 }}
      transition={{
        duration: 0.4
      }}
    >
      <ProgressBar progress={progress} />
    </motion.div>
  );
};

export default ScrollProgress;
