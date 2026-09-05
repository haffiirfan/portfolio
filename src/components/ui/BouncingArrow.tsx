import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function BouncingArrowRight() {
  return (
    <motion.div
      className="text-4xl inline-block rotate-45" // rotate 45deg for diagonal
      animate={{ y: [0, -15, 0] }} // bounce effect
      transition={{
        duration: 1,      // one cycle duration
        repeat: Infinity, // infinite bouncing
        ease: "easeInOut",
      }}
    >
      ↑
    </motion.div>
  );
}



export function HoverArrow() {
  return (
    <motion.div
      className="inline-block"
      initial={{ y: 0 }}
      whileHover={{
        y: [-2, -10, 4, 0], // up → down → settle
        opacity: [1, 0, 1, 1],
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <ArrowRight className="size-5" />
    </motion.div>
  );
}

