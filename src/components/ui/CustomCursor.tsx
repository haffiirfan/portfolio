import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Mouse coordinate motion values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth lagging spring for outer ring
  const ringX = useSpring(mouseX, { stiffness: 320, damping: 26, mass: 0.4 });
  const ringY = useSpring(mouseY, { stiffness: 320, damping: 26, mass: 0.4 });

  // Fast responsive spring for inner dot
  const dotX = useSpring(mouseX, { stiffness: 1200, damping: 50 });
  const dotY = useSpring(mouseY, { stiffness: 1200, damping: 50 });

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check if hovering interactive elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest("button") ||
          target.closest("a") ||
          target.closest("input") ||
          target.closest("textarea") ||
          target.closest("[role='button']") ||
          target.closest(".cursor-pointer") ||
          target.closest("video") ||
          window.getComputedStyle(target).cursor === "pointer"
        );
        setIsHovered(isInteractive);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      {/* Outer Fluid Trailing Ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 56 : isClicking ? 26 : 36,
          height: isHovered ? 56 : isClicking ? 26 : 36,
          borderColor: isHovered ? "#FFB646" : "#FF9330",
          backgroundColor: isHovered
            ? "rgba(255, 182, 70, 0.16)"
            : isClicking
            ? "rgba(255, 147, 48, 0.25)"
            : "rgba(255, 147, 48, 0.04)",
          borderWidth: isHovered ? "2px" : "1.5px",
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 24,
        }}
        className="fixed top-0 left-0 rounded-full border border-[#FF9330] shadow-[0_0_12px_rgba(255,182,70,0.3)] backdrop-blur-[0.5px]"
      />

      {/* Inner Precision Dot */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 0.6 : isHovered ? 1.4 : 1,
          backgroundColor: isHovered ? "#FFB646" : "#FF9330",
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 25,
        }}
        className="fixed top-0 left-0 h-2 w-2 rounded-full bg-[#FF9330] shadow-[0_0_8px_rgba(255,147,48,0.8)]"
      />
    </div>
  );
};

export default CustomCursor;
