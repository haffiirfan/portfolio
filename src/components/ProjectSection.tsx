import { CarouselDemo } from "./FYPCarousel";
import FYPSection from "./FYPSection";
import NeuroAnimateSection from "./NeuroAnimateSection";
import { NeuroAnimateCarousel } from "./NeuroAnimateCarousel";
import "../App.css";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ScrollReveal } from "./ui/ScrollReveal";
import { motion } from "framer-motion";

const ProjectSection = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center py-20 bg-[#FFE9D9] dark:bg-[#0c0d0e] transition-colors duration-300" id="project">
      <ScrollReveal direction="up" className="flex flex-col items-center justify-center pl-2.5">
        <p className="SyneClass text-[#FF9330] text-2xl font-bold">Projects</p>

        <div className="relative flex flex-col items-start SyneClass mt-4">
          <p className="md:text-6xl text-4xl font-bold relative text-black dark:text-white">
            My Recent{' '}
            <span className="relative inline-block z-10">
              Work
              {/* Small blob behind "Work" */}
              <span className="absolute w-12 h-12 bg-[#FFB646] rounded-full -bottom-2 left-1/2 -translate-x-1/2 z-[-3]"></span>
            </span>
          </p>
        </div>
      </ScrollReveal>

      <FYPSection />

      <ScrollReveal direction="up" scale={true} className="w-full max-w-7xl mx-auto px-4 py-3.5">
        <CarouselDemo />
      </ScrollReveal>

      <NeuroAnimateSection />

      <ScrollReveal direction="up" scale={true} className="w-full max-w-7xl mx-auto px-4 py-3.5">
        <NeuroAnimateCarousel />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.1} className="w-full flex justify-center mt-6">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center justify-center w-[80%] bg-[#0f172b] dark:bg-[#18181b] border border-transparent dark:border-gray-700 rounded-md cursor-pointer hover:bg-black dark:hover:bg-[#27272a] transition-colors"
          onClick={() => navigate('all-projects')}
        >
          <Button className="py-6 text-base font-semibold text-white cursor-pointer bg-transparent hover:bg-transparent shadow-none">
            View All Projects
          </Button>
          <ArrowUpRight size={20} color="#ffff" />
        </motion.div>
      </ScrollReveal>
    </div>
  );
};

export default ProjectSection;
