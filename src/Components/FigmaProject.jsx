import { motion, useScroll, useTransform } from "motion/react";

export default function FigmaProject() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const x = useTransform(scrollYProgress, [0, 1], [0, -900]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const rotate3 = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const rotate4 = useTransform(scrollYProgress, [0, 1], [0, -10]);

  return (
    <div className="bg-gray-800 min-h-[160vh] w-full relative overflow-hidden ">
      <h2 className=" text-white text-center fixed top-40 right-64 text-4xl font-serif z-10">
        This Website Looks Cool
      </h2>

      <motion.div
        style={{ x, y }}
        className="flex gap-5 sticky top-[60vh] right-0 p-10 translate-x-3/5 translate-y-1/2"
      >
        <motion.div
          style={{ rotate: rotate1 }}
          className="bg-gray-400 h-56 w-56 rounded-2xl"
        ></motion.div>
        <motion.div
          style={{ rotate: rotate2 }}
          className="bg-green-600 h-56 w-56 rounded-2xl"
        ></motion.div>
        <motion.div
          style={{ rotate: rotate3 }}
          className="bg-blue-400 h-56 w-56 rounded-2xl"
        ></motion.div>
        <motion.div
          style={{ rotate: rotate4 }}
          className="bg-pink-400 h-56 w-56 rounded-2xl"
        ></motion.div>
      </motion.div>
    </div>
  );
}

// import { motion, useScroll, useTransform } from "framer-motion";

// export default function Figma_Project() {
//   const { scrollYProgress } = useScroll();

//   // Move boxes from right to left
//   const x = useTransform(scrollYProgress, [0, 1], ["40%", "-60%"]);

//   // Rotate slowly while scrolling
//   const rotate = useTransform(scrollYProgress, [0, 1], [0, -15]);

//   return (
//     <div className="h-[200vh] bg-[#2b2b2b] relative overflow-hidden">
//       {/* Fixed Text */}
//       <div className="fixed top-20 w-full text-center z-10">
//         <h1 className="text-white text-3xl tracking-widest">
//           THIS WEBSITE LOOKS COOL
//         </h1>
//       </div>

//       {/* Moving Boxes */}
//       <div className="sticky top-0 h-screen flex items-end">
//         <motion.div style={{ x, rotate }} className="flex gap-8 px-20 pb-20">
//           <Box color="bg-gray-200" />
//           <Box color="bg-green-300" />
//           <Box color="bg-blue-400" />
//           <Box color="bg-pink-400" />
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// function Box({ color }) {
//   return <div className={`w-60 h-60 rounded-2xl ${color}`} />;
// }
