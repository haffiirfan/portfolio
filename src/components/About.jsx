import React from 'react';
import profileImage from '../assets/haffiCover.png';

const About = () => {
  return (
    <section id="about" className="bg-[#800000] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">

        {/* Left: Lanyard ID Badge */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img src={profileImage} alt="Haffi Irfan" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Info */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          <p className="text-lg md:text-xl font-medium mb-8 leading-relaxed max-w-3xl text-white/90">
            Driven by an intense year of independent research into diffusion synthesis and memory-efficient inference, I authored a first-author manuscript currently under peer review at Springer Nature. My work bridges the gap between theoretical literature and systems engineering. Most notably, I engineered a six-model generative pipeline that dynamically orchestrates 60 GB of weights on constrained consumer hardware.
          </p>
          <p className="text-base md:text-lg font-medium leading-relaxed max-w-3xl text-white/70">
            Operating at the intersection of computer vision, GPU orchestration, and full-stack deployment, my focus is singular: transforming complex AI research into robust, production-grade systems.
          </p>

          {/* Tech Icons — Sushmita style */}
          <div className="flex items-center gap-8 mt-10">
            {/* Springer Nature */}
            <div data-aos="zoom-in" data-aos-delay="300" className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer" title="Springer Nature">
              <svg viewBox="0 0 100 100" className="w-16 h-16 drop-shadow-2xl">
                <circle cx="50" cy="50" r="48" fill="white" stroke="#2D6EB5" strokeWidth="3"/>
                <text x="50" y="38" textAnchor="middle" fontFamily="serif" fontSize="14" fontWeight="bold" fill="#2D6EB5">Springer</text>
                <text x="50" y="55" textAnchor="middle" fontFamily="serif" fontSize="14" fontWeight="bold" fill="#2D6EB5">Nature</text>
                <rect x="25" y="62" width="50" height="3" rx="1.5" fill="#2D6EB5"/>
                <text x="50" y="78" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#555">Publisher</text>
              </svg>
            </div>
            {/* PyTorch */}
            <div data-aos="zoom-in" data-aos-delay="450" className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer" title="PyTorch">
              <svg viewBox="0 0 488 512" className="w-16 h-16 drop-shadow-2xl" fill="white">
                <path d="M488 256c0 60.2-24.2 114.7-63.5 154.4l-34.3-34.3c29.7-29.7 48-70.7 48-116.1 0-91.5-74.5-166-166-166V60l-60 60 60 60v-34c73.7 0 134 60.3 134 134 0 36.9-14.9 70.2-39.1 94.4l-34.3-34.3c14.6-14.6 23.6-34.7 23.6-56.9 0-46.3-37.7-84-84-84v34l-60-60 60-60V56c110.5 0 200 89.5 200 200zM180 296c0-22.1 17.9-40 40-40s40 17.9 40 40-17.9 40-40 40-40-17.9-40-40z"/>
              </svg>
            </div>
            {/* NVIDIA CUDA */}
            <div data-aos="zoom-in" data-aos-delay="600" className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer" title="NVIDIA CUDA">
              <svg viewBox="0 0 24 24" className="w-14 h-14 drop-shadow-2xl" fill="#76B900">
                <path d="M8.948 8.798v-1.43a6.7 6.7 0 0 1 .424-.018c3.922-.124 6.493 3.374 6.493 3.374s-2.774 3.851-5.75 3.851a4.2 4.2 0 0 1-1.167-.166V9.937c1.472.183 1.768.762 2.648 2.11l1.97-1.65S11.62 8.742 9.372 8.742c-.144 0-.284.019-.424.056m0-4.505v2.075l.424-.061c5.272-.746 8.793 4.19 8.793 4.19s-4.048 4.862-7.834 4.862a5.3 5.3 0 0 1-1.383-.181v1.077c.41.073.833.11 1.26.11 3.713 0 6.4-1.898 9.004-4.103 .431.346 2.197 1.188 2.56 1.553-2.455 2.063-8.181 3.87-11.498 3.87a8 8 0 0 1-1.326-.108v1.745h13.082V4.293zm0 11.453v1.2c-3.503-.646-4.476-4.389-4.476-4.389s1.675-1.86 4.476-2.137v1.316c-1.472-.183-2.648.98-2.648.98s.652 2.167 2.648 3.03M2.97 4.293v17.345h3.689V3.91c-4.108.845-6.85 4.285-6.85 4.285s1.478 3.267 3.16 4.242V4.293z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
