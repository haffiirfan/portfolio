import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { ScrollReveal } from "./ui/ScrollReveal";

const FYPSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-20">
      {/* Section Label & Main Heading */}
      <ScrollReveal direction="up" className="mb-10">
        <p className="text-[#FF9330] font-syne SyneClass text-xl md:text-2xl font-bold mb-3">
          Final Year Project
        </p>

        <h2 className="text-2xl md:text-4xl font-bold leading-snug text-gray-900 dark:text-white">
          Multimedia Synthesis for 3D Styled Imagery & Short Animations
        </h2>
      </ScrollReveal>

      {/* Responsive Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Section (Video) */}
        <ScrollReveal direction="left" scale={true} className="flex flex-col gap-6">
          <div className="w-full overflow-hidden">
            {/* Divider */}
            <div className="h-px w-full bg-black/10 dark:bg-white/10" />

            {/* Video Section */}
            <div className="relative mt-7">
              <video
                ref={videoRef}
                className="w-full rounded-lg shadow-lg border border-black/5 dark:border-white/10"
                controls={playing}
                muted
                preload="metadata"
                onPlay={() => setPlaying(true)}
              >
                <source
                  src="https://res.cloudinary.com/dlerfbweh/video/upload/v1766122609/1000017133_1_dmdmad.mp4"
                  type="video/mp4"
                />
              </video>

              {/* Play Button Overlay */}
              {!playing && (
                <button
                  onClick={handlePlay}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg transition hover:bg-black/50 cursor-pointer"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-xl transition-transform hover:scale-110">
                    <Play className="h-10 w-10 text-black ml-1" />
                  </div>
                </button>
              )}
            </div>
          </div>
        </ScrollReveal>

        {/* Right Section (Description) */}
        <ScrollReveal direction="right" className="flex flex-col gap-4">
          <h4 className="SyneClass text-lg md:text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            Project Description
          </h4>

          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Text-to-3D AI is a stage-based research project that transforms a
            user’s input into multiple 3D representations including:
          </p>

          <ul className="list-disc pl-6 text-base leading-relaxed text-gray-700 dark:text-gray-300 space-y-2">
            <li>Photorealistic Mode</li>
            <li>Graphic design and game-style characters</li>
            <li>2D images with a 3D appearance</li>
            <li>Short animated videos</li>
          </ul>

          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Built in Python on Stable Diffusion XL (SDXL 1.0) with an SDXL
            Refiner and an LLM-driven prompt enhancer, with SadTalker and GFPGAN
            for animation:
          </p>

          <ul className="list-disc pl-6 text-base text-gray-700 dark:text-gray-300 space-y-2">
            <li>Seed control</li>
            <li>Dynamic multi-batch generation</li>
            <li>Metadata export</li>
            <li>Dynamic grids</li>
            <li>Lightweight Gradio-based interface</li>
            <li>SadTalker-based face animation</li>
            <li>GFPGAN-based image enhancement</li>
          </ul>

          <p className="text-base italic bg-purple-50/50 dark:bg-white/5 p-3 rounded-lg border-l-4 border-[#FF9330] text-gray-800 dark:text-gray-200">
            The project is optimized to run efficiently on Kaggle’s T4x2 GPUs.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FYPSection;