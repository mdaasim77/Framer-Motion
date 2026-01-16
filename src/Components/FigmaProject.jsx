import { motion, useScroll, useTransform } from "motion/react";

export default function FigmaProject() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 1600]);
  const x = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const rotate3 = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const rotate4 = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  return (
    <div className="bg-gray-800 min-h-[300vh] w-full relative overflow-hidden ">
      <motion.h1
        whileHover={{ scale: 2 }}
        className=" text-white text-center fixed top-40 right-64 text-4xl font-serif z-10"
      >
        This Website Looks Cool
      </motion.h1>
      <motion.div
        style={{ x, y }}
        className="flex gap-5 sticky top-[60vh] right-0 p-10 translate-x-3/5 translate-y-1/2"
      >
        <motion.div
          style={{ rotate: rotate1, scale }}
          initial={{ scale: 1 }}
          animate={{ scale: 0.7 }}
          className="bg-gray-400 h-56 w-56 rounded-2xl"
        ></motion.div>
        <motion.div
          style={{ rotate: rotate2, scale }}
          animate={{ scale: 0.7 }}
          className="bg-green-600 h-56 w-56 rounded-2xl"
        ></motion.div>
        <motion.div
          style={{ rotate: rotate3, scale }}
          animate={{ scale: 0.7 }}
          className="bg-blue-400 h-56 w-56 rounded-2xl"
        ></motion.div>
        <motion.div
          style={{ rotate: rotate4, scale }}
          animate={{ scale: 0.7 }}
          className="bg-pink-400 h-56 w-56 rounded-2xl"
        ></motion.div>
      </motion.div>
    </div>
  );
}
