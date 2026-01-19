import React from "react";
import { motion } from "motion/react";

export default function HoverExitAnimation() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="bg-white flex flex-col h-5/6 w-72 shadow-2xl rounded-2xl ">
        <h2 className="text-[14px] font-bold text-start ms-4  mt-4 pt-1 text-gray-500">
          Lorem, ipsum dolor.
        </h2>
        <p className="text-start text-[14px] ms-4  mt-4  pt-1 text-gray-500">
          Lorem ipsum vitae illo doloremque sint facilis officia?
        </p>
        <div className="flex items-center justify-center">
          <button className="py-2 text-[12px]  shadow-2xl px-3 flex gap-1 rounded-lg mt-2 text-center">
            <img
              width={"16px"}
              height={"10px"}
              src="/src/Assets/Logo.png"
              className="bg-gray-500 rounded mt-0.5 me-1.5"
            />
            Aceternity
            <img
              src="/src/Assets/close.svg"
              width={"10px"}
              height={"10px"}
              alt=""
            />
          </button>
        </div>
        <div className="bg-gray-100 flex-1 m-4 border border-gray-200 rounded"></div>
      </div>
    </div>
  );
}
