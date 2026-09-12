import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profileImage from '../assets/haffiCover.png';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black">
      {/* Animated Gradient Background */}
      <div
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{
          background: 'linear-gradient(-45deg, #0a0a0a, #1a0000, #800000, #8b0000, #0a0a0a)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 15s ease infinite',
        }}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-10 pointer-events-none" />

      {/* Profile Image - Center-Right, Blended into gradient */}
      <div 
        data-aos="fade-left"
        data-aos-delay="300"
        data-aos-duration="1200"
        className="absolute right-[5%] md:right-[8%] top-0 w-[55%] md:w-[48%] lg:w-[45%] h-full z-[15] hidden md:flex items-end justify-center"
      >
        <img 
          src={profileImage} 
          alt="Haffi Irfan" 
          className="w-full h-[100%] object-cover object-top opacity-60"
          style={{ mixBlendMode: 'screen', filter: 'brightness(0.85)' }}
        />
      </div>

      {/* Mobile Profile Image */}
      <div className="absolute right-0 bottom-0 w-[55%] h-[45%] z-[15] block md:hidden flex items-end justify-center">
        <img 
          src={profileImage} 
          alt="Haffi Irfan" 
          className="w-full h-full object-cover object-top"
          style={{ mixBlendMode: 'screen' }}
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-center items-start text-left w-full h-full">
        <div className="flex flex-col items-start text-left max-w-lg lg:max-w-xl w-full">
          
          {/* Small label above name */}
          <div 
            data-aos="fade-up"
            data-aos-delay="0"
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-[2px] bg-white/50"></div>
            <span className="text-white/60 text-xs md:text-sm font-mono uppercase tracking-[0.3em]">AI Researcher & Engineer</span>
          </div>

          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter leading-[0.95]"
          >
            Haffi<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">
              Irfan<span className="text-[#ff4444]">.</span>
            </span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="250"
            className="text-white/80 text-sm md:text-base lg:text-lg font-medium mb-10 max-w-sm md:max-w-md leading-relaxed"
          >
            I build multi-model AI pipelines on constrained hardware and ship computer vision systems into production.
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row items-center gap-4 w-full"
          >
            <a
              href="#projects"
              className="px-7 py-3 text-xs md:text-sm rounded-full bg-white text-black font-bold hover:bg-neutral-100 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg inline-block text-center"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-7 py-3 text-xs md:text-sm rounded-full bg-white/5 border border-white/30 text-white font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-md transform hover:-translate-y-0.5 inline-block text-center"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg className="w-5 h-5 text-white opacity-70" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
