import React from "react";
import { TiArrowUpThick } from "react-icons/ti";
import { IoIosArrowUp } from "react-icons/io";

const ProgressBar = ({ progress }) => {
  const radius = 23;
  const stroke = 2;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative flex items-center justify-center" onClick={scrollToTop}>
      <svg
        height={radius * 2}
        width={radius * 2}
        className="progress-bar"
        style={{ transform: "rotate(-90deg)" }}
      >
        <circle
          stroke="#ebecf3"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="rgb(130 92 255)"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + " " + circumference}
          style={{ strokeDashoffset }}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        {/* <polygon
          points="50,30 60,50 40,50"
          fill="red"
          style={{
            transform: `rotate(${(progress / 100) * 360}deg)`,
            transformOrigin: "center",
          }}
        /> */}
      </svg>
      <a className="absolute">
        <IoIosArrowUp color="#ebecf3" />
      </a>
    </div>
  );
};

export default ProgressBar;
