"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
} from "@/components/ui/resizable-navbar";
import { SheetDemo } from "./MobileMenu";
import { ThemeToggle } from "./ui/ThemeToggle";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { LinkedIn, Email, Github } from "@/assets/SocialIcon";
import { motion } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import HaffiCover from "../assets/haffiCover.png";
export function NavbarDemo() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Projects",
      link: "/all-projects",
    },
    {
      name: "Resume",
      link: "/#resume",
    },
    {
      name: "Contact",
      link: "/#contact",
    },
  ];

  interface NavItem {
    name: string;
    link: string;
  }

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigation = (link: string) => {
    if (link === "/") {
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/");
      }
      return;
    }

    if (link.startsWith("/#")) {
      const targetId = link.replace("/#", "");
      if (location.pathname === "/") {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        navigate(link);
      }
      return;
    }

    navigate(link);
  };

  const onNavItemClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: NavItem,
  ) => {
    e.preventDefault();
    handleNavigation(item.link);
  };

  return (
    <Navbar>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} onItemClick={onNavItemClick} />
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <motion.div
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              variants={{
                initial: { scale: 1, y: 0 },
                hover: {
                  scale: 1.05,
                  y: -2,
                  transition: { type: "spring", stiffness: 400, damping: 15 },
                },
                tap: { scale: 0.95, y: 0 },
              }}
              className="flex items-center justify-center"
            >
              <Link
                to="/#contact"
                className="group relative flex items-center gap-2 px-5 py-2 rounded-full bg-black dark:bg-white/10 text-white border border-black dark:border-white/20 text-sm font-bold SyneClass shadow-sm hover:shadow-[0_8px_20px_rgba(255,182,70,0.35)] overflow-hidden cursor-pointer transition-all duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("/#contact");
                }}
              >
                {/* Expanding Color Fill from Bottom */}
                <span className="absolute inset-0 bg-[#FFB646] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]" />

                {/* Shimmer light sweep */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none z-10" />

                <span className="relative z-20 transition-colors duration-300 group-hover:text-black">
                  Let's Talk
                </span>
                <motion.span
                  variants={{
                    initial: { x: 0, y: 0, scale: 1 },
                    hover: {
                      x: 3,
                      y: -3,
                      scale: 1.2,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 12,
                      },
                    },
                  }}
                  className="relative z-20 flex items-center transition-colors duration-300 group-hover:text-black"
                >
                  <ArrowUpRight size={18} />
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <SheetDemo
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
              />
            </div>
          </MobileNavHeader>
        </MobileNav>
      </div>

      {/* Separator */}
      {!isMobileMenuOpen && (
        <div className="mx-auto max-w-7xl pt-3">
          <Separator className="w-full" />
        </div>
      )}
    </Navbar>
  );
}

export const HeroSection = () => {
  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-8 pt-24 pb-12 flex flex-col md:flex-row items-start md:items-center md:justify-between SyneClass gap-12 relative overflow-visible">
      {/* Left Side - Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-start text-left space-y-8 w-full md:w-1/2"
      >
        {/* Heading Line + Title */}
        <div className="flex items-center gap-3">
          <div className="w-16 h-px bg-black dark:bg-white"></div>
          <h1 className="text-2xl sm:text-3xl font-bold">Hello, I'm ✌</h1>
        </div>

        {/* Name Section */}
        <div className="text-7xl md:text-[132px] font-bold leading-none relative text-black dark:text-white">
          <div>
            <span className="relative inline-flex items-center">
              {/* Circle behind word */}
              <span className="absolute w-16 h-16 md:w-40 md:h-40 bg-[#FFB646] rounded-full -top-3 md:-top-7 -left-2 md:-left-4 z-0"></span>
              <span className="relative z-10">Haffi</span>
            </span>
            <span className="block">Irfan</span>
          </div>
          <p className="text-lg sm:text-[24px] mt-4 font-semibold text-gray-800 dark:text-gray-200">
            AI Engineer | Based in Pakistan
          </p>
        </div>

        {/* Buttons Section */}
        <div className="flex sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-4 w-full sm:w-auto pr-2.5">
          <motion.button
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            variants={{
              initial: { scale: 1, y: 0 },
              hover: {
                scale: 1.04,
                y: -3,
                transition: { type: "spring", stiffness: 400, damping: 15 },
              },
              tap: { scale: 0.96, y: 0 },
            }}
            className="group relative flex items-center justify-center gap-3 px-7 sm:px-9 py-3.5 sm:py-4 text-lg font-semibold rounded-xl bg-black text-white border-2 border-black dark:border-white shadow-md hover:shadow-[0_12px_28px_rgba(255,182,70,0.4)] overflow-hidden cursor-pointer transition-all duration-300"
            onClick={() => {
              const el = document.getElementById("contact");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {/* Expanding Color Fill from Bottom */}
            <span className="absolute inset-0 bg-[#FFB646] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]" />

            {/* Shimmer light sweep */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none z-10" />

            <span className="relative z-20 transition-colors duration-300 group-hover:text-black">
              Let&apos;s Talk
            </span>
            <motion.span
              variants={{
                initial: { x: 0, scale: 1 },
                hover: {
                  x: 5,
                  scale: 1.15,
                  transition: { type: "spring", stiffness: 400, damping: 12 },
                },
              }}
              className="relative z-20 flex items-center transition-colors duration-300 group-hover:text-black"
            >
              <ArrowRight className="size-5" />
            </motion.span>
          </motion.button>

          <motion.button
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            variants={{
              initial: { scale: 1, y: 0 },
              hover: {
                scale: 1.04,
                y: -3,
                transition: { type: "spring", stiffness: 400, damping: 15 },
              },
              tap: { scale: 0.96, y: 0 },
            }}
            className="group relative flex items-center justify-center gap-3 px-7 sm:px-9 py-3.5 sm:py-4 text-lg font-semibold rounded-xl border-2 border-black dark:border-white bg-transparent text-black dark:text-white hover:border-black shadow-sm hover:shadow-[0_12px_28px_rgba(0,0,0,0.25)] overflow-hidden cursor-pointer transition-all duration-300"
            onClick={() => {
              const el = document.getElementById("project");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {/* Expanding Color Fill from Bottom */}
            <span className="absolute inset-0 bg-black dark:bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]" />

            {/* Shimmer light sweep */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none z-10" />

            <span className="relative z-20 transition-colors duration-300 group-hover:text-white dark:group-hover:text-black">
              My Work
            </span>
            <motion.span
              variants={{
                initial: { x: 0, scale: 1 },
                hover: {
                  x: 5,
                  scale: 1.15,
                  transition: { type: "spring", stiffness: 400, damping: 12 },
                },
              }}
              className="relative z-20 flex items-center transition-colors duration-300 group-hover:text-white dark:group-hover:text-black"
            >
              <ArrowRight className="size-5" />
            </motion.span>
          </motion.button>
        </div>

        {/* Stats + Social Icons */}
        <div className="flex sm:flex-row items-start sm:items-center md:justify-start gap-12 mt-6 w-full text-black dark:text-white">
          {/* Stats */}
          <div className="flex items-center gap-3">
            <h2 className="text-3xl font-bold">1.2k+</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-tight">
              Hours of Coding
              <br />
              Practice
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6 opacity-90 text-black dark:text-white">
            <LinkedIn className="w-6 h-6 hover:scale-110 transition-transform cursor-pointer" />
            <Github className="w-6 h-6 hover:scale-110 transition-transform cursor-pointer" />
            <Email className="w-6 h-6 hover:scale-110 transition-transform cursor-pointer" />
          </div>
        </div>
      </motion.div>

      {/* Right Side - Image Container (Clean Circle Portrait) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full md:w-[45%] flex justify-center items-center mt-12 md:mt-8 px-4"
      >
        <div className="relative w-full max-w-[520px] aspect-square flex items-center justify-center">
          {/* Background Glow Aura */}
          <div className="absolute inset-[-10%] bg-[#FFB646]/20 rounded-full blur-[100px] -z-20 animate-pulse" />

          {/* Circular Portrait with Glowing Border */}
          <div className="relative w-full h-full rounded-full border-[10px] md:border-[14px] border-[#FFB646] shadow-[0_0_50px_rgba(255,182,70,0.4)] overflow-hidden bg-gray-200 bg-transparent">
            <img
              src={HaffiCover}
              alt="Haffi Irfan"
              className="w-[68%] h-[78%] ml-[60px] md:ml-24 mt-14 object-cover object-top scale-[1.3] translate-y-4 transition-transform duration-700 hover:scale-[1.4]"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
