import { motion } from "motion/react";
export default function HoverDrag() {
  return (
    <>
      <motion.div
        className="box"
        drag
        dragConstraints={{ left: 0, top: 0, right: 800, bottom: 500 }}
        whileDrag={{ scale: 0.5 }}
        whileHover={{ backgroundColor: "#30a4cb" }}
        whileTap={{ backgroundColor: "#691782", scale: 2 }}
      ></motion.div>
    </>
  );
}
