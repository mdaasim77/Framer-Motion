import { motion } from "motion/react";
import { GiDuration } from "react-icons/gi";

export default function FourthButton() {
  return (
    <div className="text-center h-screen w-full ">
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        className="bg-gray-500"
      >
        Click Me!
      </motion.button>
    </div>
  );
}
