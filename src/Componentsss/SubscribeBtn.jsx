import React from "react";
import { motion } from "motion/react";

export default function SubscribeBtn() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-black">
      <motion.button
        whileHover={{
          color: "#26C6DA",
          boxShadow: "0px 40px 100px #26C6DA",
          // rotateX: 25,
          // rotateZ: 10,
          // y: -20, // extra work
          // x: 40, // extra work
          scale: 1.2,
        }}
        initial={{ scale: 0.8 }} // extra
        whileTap={{ scale: 1 }} // extra
        transition={{ duration: 0.3 }}
        className="bg-gray-800 text-amber-50 px-32 py-12 rounded-3xl text-3xl "
      >
        Subscribe
      </motion.button>
    </div>
  );
}
