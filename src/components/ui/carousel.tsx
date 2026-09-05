import { IconArrowNarrowRight } from "@tabler/icons-react";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useState, useRef, useId, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ----------------------------------------------------
   TYPES
----------------------------------------------------- */
export interface SlideData {
  title: string;
  button: string;
  src: string;
  type?: 'image' | 'video';
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

/* ----------------------------------------------------
   LIGHTBOX MODAL
----------------------------------------------------- */
const LightboxModal = ({
  isOpen,
  slides,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: {
  isOpen: boolean;
  slides: SlideData[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) => {
  if (!isOpen) return null;

  const currentSlide = slides[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        key="lightbox"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white p-2 rounded-full hover:bg-white/10 z-[10000]"
        >
          <X size={28} />
        </button>

        {/* Media Wrapper */}
        <div className="relative max-w-[95vw] max-h-[90vh] flex items-center justify-center shadow-2xl">
          {currentSlide.type === 'video' ? (
            <motion.video
              key={currentSlide.src}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={currentSlide.src}
              controls
              autoPlay
              className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg"
            />
          ) : (
            <motion.img
              key={currentSlide.src}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={currentSlide.src}
              className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg"
            />
          )}
        </div>

        {/* Left */}
        <button
          onClick={onPrev}
          className="absolute left-6 text-white bg-white/10 p-3 rounded-full hover:bg-white/20 z-[10000]"
        >
          <ChevronLeft size={32} />
        </button>

        {/* Right */}
        <button
          onClick={onNext}
          className="absolute right-6 text-white bg-white/10 p-3 rounded-full hover:bg-white/20 z-[10000]"
        >
          <ChevronRight size={32} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

/* ----------------------------------------------------
   SINGLE SLIDE
----------------------------------------------------- */
const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  return (
    <div className="[perspective-1400px] [transform-style-preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white transition-all duration-300 ease-in-out w-[70vmin] h-[70vmin] mx-[4vmin] z-10 cursor-pointer"
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index
              ? "scale(0.98) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-[#1D1F2F] rounded-[1%] overflow-hidden"
          style={{
            transform:
              current === index
                ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                : "none",
          }}
        >
          {slide.type === 'video' ? (
            <div className="relative w-full h-full">
              <video
                className="absolute inset-0 w-[120%] h-[120%] object-cover opacity-100 transition-opacity duration-600"
                src={slide.src}
                muted
                loop
                preload="metadata"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors duration-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg transform transition-transform duration-300 hover:scale-110">
                  <Play size={24} className="text-black ml-1 fill-black" />
                </div>
              </div>
            </div>
          ) : (
            <img
              className="absolute inset-0 w-[120%] h-[120%] object-cover opacity-100 transition-opacity duration-600"
              alt={slide.title}
              src={slide.src}
              loading="lazy"
            />
          )}
          {/* Overlay to catch clicks and prevent video interaction in carousel view */}
          <div className="absolute inset-0 bg-transparent z-20" />
        </div>
        <article
          className={`relative p-[4vmin] transition-opacity duration-500 ${
            current === index ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
        </article>
      </li>
    </div>
  );
};

/* ----------------------------------------------------
   CAROUSEL (WITH LIGHTBOX)
----------------------------------------------------- */
export default function Carousel({ slides }: { slides: SlideData[] }) {
  const [current, setCurrent] = useState(1);

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = (index: number) => {
    setCurrent(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => setIsLightboxOpen(false);

  const nextLightbox = () =>
    setCurrent((prev) => (prev + 1) % slides.length);

  const prevLightbox = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 < 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1 === slides.length ? 0 : prev + 1));
  };

  const id = useId();

  return (
    <div className="relative w-[70vmin] h-[70vmin] mx-auto" aria-labelledby={`carousel-heading-${id}`}>
      <ul
        className="absolute flex transition-transform duration-1000"
        style={{ transform: `translateX(-${current * (100 / slides.length)}%)` }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={openLightbox}
          />
        ))}
      </ul>

      {/* Carousel Controls */}
      <div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
        <button
          onClick={handlePrev}
          className="mx-2 w-10 h-10 bg-neutral-200 dark:bg-neutral-800 rounded-full flex items-center justify-center hover:-translate-y-1 transition"
        >
          <IconArrowNarrowRight className="rotate-180" />
        </button>
        <button
          onClick={handleNext}
          className="mx-2 w-10 h-10 bg-neutral-200 dark:bg-neutral-800 rounded-full flex items-center justify-center hover:-translate-y-1 transition"
        >
          <IconArrowNarrowRight />
        </button>
      </div>

      {/* LIGHTBOX MODAL */}
      <LightboxModal
        isOpen={isLightboxOpen}
        slides={slides}
        currentIndex={current}
        onClose={closeLightbox}
        onPrev={prevLightbox}
        onNext={nextLightbox}
      />
    </div>
  );
}
