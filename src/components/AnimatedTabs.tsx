import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react"; // Right-up arrow icon
import { type Dispatch, type SetStateAction } from "react";

interface AnimatedTabsProps {
  tabVal: number;
  setTabVal: Dispatch<SetStateAction<number>>;
}

const tabs = ["About Me", "Publication", "Skills", "Education", "Certifications"];

export default function AnimatedTabs({ tabVal, setTabVal }: AnimatedTabsProps) {


  // Arrow animation
  const arrowVariants: Variants = {
    initial: { x: 0, y: 0, opacity: 0.7 },
    hover: {
      x: 4,     // move slightly right
      y: -4,    // move slightly upward
      opacity: 1,
      transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] },
    },
  };

  return (
    <div className="flex flex-col gap-3 mt-6">
      {tabs.map((t, i) => {
        const isActive = tabVal === i;
        return (
          <motion.div
            key={i}
            onClick={() => setTabVal(i)}
            initial="initial"
            whileHover="hover"
            className={`
              flex items-center justify-between gap-3 cursor-pointer px-5 py-3 rounded-xl border
              transition-all duration-300
              ${
                isActive
                  ? "bg-black text-white border-black dark:bg-[#FFB646] dark:text-black dark:border-[#FFB646] font-bold shadow-md shadow-amber-500/10"
                  : "bg-white text-black border-gray-300 dark:bg-[#141416] dark:text-gray-200 dark:border-gray-800 hover:dark:border-gray-700 hover:dark:bg-[#1c1c1f]"
              }
            `}
          >
            <p className="font-medium">{t}</p>
            {/* Right-Up arrow */}
            <motion.div
              variants={arrowVariants}
              animate={isActive ? "hover" : "initial"} // selected tab moves arrow
            >
              <ArrowUpRight size={20} />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
