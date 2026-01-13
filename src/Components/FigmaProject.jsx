import { motion, useScroll, useTransform } from "motion/react";

export default function FigmaProject() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div className="bg-gray-800 h-screen w-full relative overflow-hidden">
      <h2 className=" text-white text-center pt-20 text-4xl font-serif">
        This Website Looks Cool
      </h2>
      <motion.div
        style={{ y }}
        className="flex gap-5 absolute bottom-0 right-0 p-10 translate-x-2/5 "
      >
        <div className="bg-gray-400 h-56 w-56 rounded-2xl translate-y-1/2"></div>
        <div className="bg-green-600 h-56 w-56 rounded-2xl translate-y-1/2"></div>
        <div className="bg-blue-400 h-56 w-56 rounded-2xl translate-y-1/2"></div>
        <div className="bg-pink-400 h-56 w-56 rounded-2xl translate-y-1/2"></div>
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
