import React from "react";
import { motion } from "motion/react";

export default function Third() {
  return (
    <div className="borde w-full h-screen bg-amber-500">
      <motion.div
        initial={{ opacity: 0, y: 400 }}
        animate={{ opacity: 1, y: 50, x: 50 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 0.5 }}
        whileTap={{ scale: 1.2 }}
        className="bg-red-100 h-56 w-56 mt-5"
      ></motion.div>
    </div>
  );
}
