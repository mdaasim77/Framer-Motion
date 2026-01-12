import { motion } from "motion/react";
export default function Second() {
  return (
    <>
      <motion.img
        className="image_second"
        initial={{ x: 0, y: 0 }}
        animate={{
          x: [0, 800, 800, 0, 0],
          y: [0, 0, 300, 300, 0],
          rotate: [360, 0, 0, -360, 0],
        }}
        transition={{ duration: 4, ease: "anticipate" }}
        src="src\Image\image.avif"
        alt="image"
      />
    </>
  );
}
