import { motion, transform } from "motion/react";

export default function First() {
  return (
    <>
      <motion.div
        className="box"
        animate={{ x: 1000, y: 100, rotate: 360, scale: 0.5 }}
        transition={{ duration: 3, delay: 1 }}
      ></motion.div>
    </>
  );
}
