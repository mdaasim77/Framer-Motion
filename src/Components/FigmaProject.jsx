import React from "react";

export default function Figma_Project() {
  return <div>Figma_Project</div>;
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
