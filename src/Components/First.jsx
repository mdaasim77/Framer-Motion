import { motion, transform } from "motion/react";

export default function First() {
  return (
    <>
      <div className="h-screen bg-amber-300">
        <motion.div
          className="box"
          animate={{ x: 750, y: 100, rotate: 360, scale: 0.5 }}
          transition={{ duration: 3, delay: 3 }}
        ></motion.div>
      </div>
    </>
  );
}
