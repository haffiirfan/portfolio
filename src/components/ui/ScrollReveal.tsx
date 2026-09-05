import { type ReactNode } from "react";
import { motion, type HTMLMotionProps, type Variants } from "framer-motion";

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
  delay?: number;
  blur?: boolean;
  scale?: boolean;
  once?: boolean;
  amount?: number | "some" | "all";
  className?: string;
}

export const ScrollReveal = ({
  children,
  direction = "up",
  distance = 75,
  duration = 1.2,
  delay = 0.1,
  blur = false,
  scale = false,
  once = false,
  amount = 0.25,
  className = "",
  ...props
}: ScrollRevealProps) => {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: distance, x: 0 };
      case "down":
        return { y: -distance, x: 0 };
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
      case "none":
      default:
        return { x: 0, y: 0 };
    }
  };

  const initialOffset = getInitialPosition();

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...initialOffset,
        filter: blur ? "blur(8px)" : "none",
        scale: scale ? 0.94 : 1,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        filter: blur ? "blur(0px)" : "none",
        scale: 1,
      }}
      viewport={{
        once,
        amount,
        margin: "-100px 0px -80px 0px",
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

interface ScrollStaggerContainerProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  staggerChildren?: number;
  delayChildren?: number;
  once?: boolean;
  amount?: number | "some" | "all";
  className?: string;
}

export const ScrollStaggerContainer = ({
  children,
  staggerChildren = 0.15,
  delayChildren = 0.1,
  once = false,
  amount = 0.25,
  className = "",
  ...props
}: ScrollStaggerContainerProps) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount, margin: "-100px 0px -80px 0px" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

interface ScrollStaggerItemProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
  blur?: boolean;
  className?: string;
}

export const ScrollStaggerItem = ({
  children,
  direction = "up",
  distance = 55,
  duration = 1.0,
  blur = true,
  className = "",
  ...props
}: ScrollStaggerItemProps) => {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: distance, x: 0 };
      case "down":
        return { y: -distance, x: 0 };
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
      case "none":
      default:
        return { x: 0, y: 0 };
    }
  };

  const initialOffset = getInitialPosition();

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      ...initialOffset,
      filter: blur ? "blur(6px)" : "none",
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: blur ? "blur(0px)" : "none",
      transition: {
        duration,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className} {...props}>
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
