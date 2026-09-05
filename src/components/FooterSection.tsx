import { Email, Github, LinkedIn } from "@/assets/SocialIcon";
import "../App.css";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "./ui/ScrollReveal";
import { motion } from "framer-motion";

const FooterSection = () => {
  return (
    <div className="w-full bg-black">
      <div className="w-full max-w-7xl mx-auto pt-20 px-4">
        
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-start lg:items-center gap-10">
          
          {/* Left Section */}
          <ScrollReveal direction="right" className="flex flex-col items-start gap-11 py-14 w-full lg:w-[35%]">
            <p className="text-4xl sm:text-5xl lg:text-6xl font-bold relative text-white SyneClass leading-tight">
              <span className="relative inline-block z-10">
                Let's
                <span className="absolute w-10 h-10 sm:w-12 sm:h-12 bg-[#FFB646] rounded-full -bottom-1 sm:-bottom-2 left-1/2 -translate-x-1/2 z-[-3]"></span>
              </span>{" "}
              work
              <br /> together
            </p>

            {/* Location + Socials */}
            <div className="flex flex-wrap items-center gap-4 text-white">
              <p className="font-bold text-lg SyneClass">Based in Pakistan |</p>
              <div className="flex items-center gap-4 opacity-90">
                <LinkedIn className="w-5 h-5 hover:text-[#FFB646] hover:scale-110 transition-all cursor-pointer" />
                <Github className="w-5 h-5 hover:text-[#FFB646] hover:scale-110 transition-all cursor-pointer" />
                <Email className="w-5 h-5 hover:text-[#FFB646] hover:scale-110 transition-all cursor-pointer" />
              </div>
            </div>
          </ScrollReveal>

          {/* Right Section Cards */}
          <div className="flex flex-wrap justify-between gap-6 w-full lg:w-[65%]">
            {/* Card 1 */}
            <ScrollReveal direction="up" delay={0.1} className="w-full sm:w-[48%] lg:w-[48%]">
              <motion.div
                whileHover={{ y: -6, borderColor: "#FFB646" }}
                className="border border-[#ffffff33] rounded-2xl py-8 px-6 flex flex-col gap-8 h-full transition-colors bg-white/5 backdrop-blur-sm"
              >
                <h3 className="text-white SyneClass text-xl sm:text-2xl font-bold">
                  Looking for an AI Engineer?
                </h3>
                <a href="mailto:haffiirfan@gmail.com" className="flex items-center justify-between group">
                  <h2 className="text-[#FF9330] SyneClass text-xl sm:text-2xl font-bold break-all group-hover:underline">
                    haffiirfan@gmail.com
                  </h2>
                  <ArrowUpRight size={20} color="#FF9330" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </motion.div>
            </ScrollReveal>

            {/* Card 2 */}
            <ScrollReveal direction="up" delay={0.2} className="w-full sm:w-[48%] lg:w-[48%]">
              <motion.div
                whileHover={{ y: -6, borderColor: "#FFB646" }}
                className="border border-[#ffffff33] rounded-2xl py-8 px-6 flex flex-col gap-8 h-full transition-colors bg-white/5 backdrop-blur-sm"
              >
                <h3 className="text-white SyneClass text-xl sm:text-2xl font-bold">
                  Let’s connect – reach out to me!
                </h3>
                <div className="flex items-center justify-between group">
                  <h2 className="text-[#FF9330] SyneClass text-xl sm:text-2xl font-bold">
                    +92 3181415197
                  </h2>
                  <ArrowUpRight size={20} color="#FF9330" />
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>

        {/* Big Name SVG */}
        <ScrollReveal direction="up" scale={true} className="py-9 text-center">
          <svg
            width="100%"
            height="auto"
            viewBox="0 0 1281 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="0"
              y="80"
              fontFamily="Syne"
              fontWeight="900"
              fontSize="60"
              className="sm:text-[80px] lg:text-[100px]"
              fill="#FFE9D9"
            >
              HAFFI IRFAN
            </text>
          </svg>
        </ScrollReveal>

        {/* Bottom Line */}
        <ScrollReveal direction="none" className="border-t border-[#ffffff33] pb-10">
          <p className="text-white text-base sm:text-lg py-7">
            &copy; 2025 Haffi Irfan, All Rights Reserved
          </p>
        </ScrollReveal>

      </div>
    </div>
  );
};

export default FooterSection;
