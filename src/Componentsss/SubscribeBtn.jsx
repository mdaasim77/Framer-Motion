import React from "react";
import { motion } from "motion/react";

export default function SubscribeBtn() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-black">
      <motion.button
        whileHover={{
          color: "#26C6DA",
          boxShadow: "0 20px 40px rgba(34,211,238,0.6)",
          rotateX: 25,
          rotateZ: 10,
        }}
        transition={{ duration: 0.3 }}
        className="bg-gray-800 text-amber-50 px-32 py-12 rounded-3xl text-3xl border-0  shadow-cyan-400"
      >
        Subscribe
      </motion.button>
    </div>
  );
}
