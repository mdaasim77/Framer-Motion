import React from "react";
import { motion } from "motion/react";

export default function Third() {
  return (
    <div className="borde w-full h-screen bg-amber-500">
      <motion.div
        initial={{ opacity: 0, y: 400 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="bg-red-100 h-56 w-56"
      ></motion.div>
    </div>
  );
}
