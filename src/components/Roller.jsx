import React from "react";

const Roller = () => {
  return (
    <div className="relative flex w-full">
      <span className="w-full bg-violet-50 opacity-50 h-[1px] rounded"></span>
      <span className="absolute bg-violet-500 left-0 bottom-[2px] w-[2rem] h-[2rem] rounded-full z-1"></span>
    </div>
  );
};

export default Roller;
