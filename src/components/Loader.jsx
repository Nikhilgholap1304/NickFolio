import React from "react";
import { HashLoader } from "react-spinners";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Loader = () => {
  return (
    <>
      <div className="flex w-full h-screen items-center bg-[#040116]">
        <HashLoader color="#5d2dde" className="m-auto" size={75} />
        <div className="absolute inset-0 z-0 pointer-events-none select-none cursor-none">
          <Canvas style={{ pointerEvents: "none !important" }}>
            <Stars radius={50} count={500} factor={4} fade speed={1} />
          </Canvas>
        </div>
      </div>
    </>
  );
};

export default Loader;
