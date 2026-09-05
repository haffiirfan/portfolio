import { motion } from "framer-motion";

export const ArrowDown = () => {
  return (
    <motion.div
      className="flex justify-center mt-10"
      animate={{ y: [0, 10, 0] }} // vertical bounce
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-black dark:text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </motion.div>
  );
};
