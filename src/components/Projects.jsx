import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: 'NeuroAnimate',
    category: 'GENERATIVE AI · MULTI-MODEL · DUAL-GPU',
    subtitle: 'Multimodal Synthesis for 3D-styled Imagery',
    description: 'A six-stage generative pipeline that converts a single text prompt into a fully animated, hyper-realistic portrait video. Mistral-7B rewrites the user prompt into a cinematic scene description. Stable Diffusion XL synthesizes a high-fidelity base portrait. InsightFace extracts and aligns facial identity landmarks while LivePortrait drives 3D-aware facial retargeting with custom body motion templates. Lastly, Real-ESRGAN upscales every frame to 1.5x clarity. FFmpeg composites the final MP4 with audio sync. DMO loads/unloads each model sequentially, fitting 60.1 GB of combined weights into 32 GB of dual-T4 VRAM. Dual-GPU parallel frame enhancement cuts upscaling latency by 33.1%. while Three-mode LLM prompt enhancement achieves a CLIP alignment score of 0.35.',
    tech: ['PyTorch', 'Diffusers', 'ONNX Runtime', 'CUDA', 'Gradio', 'LivePortrait', 'InsightFace', 'Real-ESRGAN'],
    github: 'https://github.com/haffiirfan/NeuroAnimate-Multimodal-Synthesis-for-3D-styled-imagery-hyper-realistic-Shorts',
    metrics: ['60.1 GB in 32 GB VRAM', '33.1% faster upscaling', 'CLIP 0.35', '6 Models Orchestrated'],
    resultPlaceholder: 'Screen recordings and demo videos coming soon',
    videos: [
      '/neuroanimate_results/videos/enhanced_output (3).mp4',
      '/neuroanimate_results/videos/enhanced_output (5).mp4',
      '/neuroanimate_results/videos/result1.mp4',
      '/neuroanimate_results/videos/result2.mp4',
      '/neuroanimate_results/videos/result4.mp4',
    ],
    images: [
      '/neuroanimate_results/images/1.png',
      '/neuroanimate_results/images/19.png',
      '/neuroanimate_results/images/20.png',
      '/neuroanimate_results/images/26.png',
      '/neuroanimate_results/images/3.png',
      '/neuroanimate_results/images/44.png',
      '/neuroanimate_results/images/60.png',
      '/neuroanimate_results/images/61.png',
      '/neuroanimate_results/images/63.png',
      '/neuroanimate_results/images/64.png',
      '/neuroanimate_results/images/67.png',
      '/neuroanimate_results/images/68.png',
      '/neuroanimate_results/images/71.png',
    ],
  },
  {
    title: 'SafetyIQ',
    category: 'COMPUTER VISION · RAG · REAL-TIME',
    subtitle: 'AI-Driven Construction Safety Monitoring',
    description: 'An end-to-end construction site safety system that fuses real-time object detection with retrieval-augmented report generation. YOLOv11s was fine-tuned on a custom dataset of 44,000 annotated PPE images (helmets, vests, goggles, gloves) achieving 0.75+ mAP@0.5. Detections stream over WebSocket to a React dashboard at under 20 ms per frame. When a violation is detected, ChromaDB retrieves the most relevant safety regulation chunks and T5 generates a natural-language incident report with severity scoring. PostgreSQL stores detection logs, worker profiles, and historical analytics. FastAPI serves the inference endpoint, the RAG pipeline, and a REST API for the React frontend.',
    tech: ['YOLOv11', 'FastAPI', 'React', 'PostgreSQL', 'ChromaDB', 'T5', 'WebSocket', 'Roboflow'],
    github: 'https://github.com/haffiirfan/SafetyIQ-AI-Driven-Construction-Safety-Monitoring',
    metrics: ['0.75+ mAP@0.5', '<20ms latency', '44K training images', 'RAG + T5 Reports'],
    resultPlaceholder: 'Screen recordings and demo videos coming soon',
  },
];

const miniProjects = [
  {
    title: 'Subway Surfer (C++ Game)',
    description: 'Developed a 2D endless runner game inspired by Subway Surfer using C++ and OOP principles. Features include directional movement, obstacle generation, coin collection, magnet power-up, scoring system, and game-over logic for an immersive gameplay experience.',
    tech: ['C++', 'OOP', 'Game Development', 'File Handling']
  },
  {
    title: 'Text Summarizer',
    description: 'A text summarization web application built using the T5 transformer model and deployed with Streamlit. Generates concise, meaningful summaries from long text inputs, demonstrating practical NLP applications and model deployment.',
    tech: ['Python', 'Transformers', 'T5 Model', 'NLP', 'Streamlit']
  },
  {
    title: 'Mystery Letters (Word Game)',
    description: 'Developed Mystery Letters, a logic-driven word-guessing game where players deduce a secret two-letter combination using clues such as "Fermi", "Pico", and "Bagels". Players get 15 attempts, creating a fun mix of reasoning, deduction, and entertainment.',
    tech: ['Python', 'Logic Building', 'Game Design']
  },
  {
    title: 'Movie Review Sentiment Analyzer',
    description: 'Built a Streamlit web app that classifies movie reviews as positive or negative using NLP and deep learning models. Adapted from an open-source project, with enhanced interactivity and real-time prediction interface.',
    tech: ['Python', 'NLP', 'Deep Learning', 'Streamlit']
  },
  {
    title: 'Helmet Detection with YOLOv8',
    description: 'Implemented a custom helmet detection system using YOLOv8 and Roboflow. Used transfer learning, custom dataset preparation, and data augmentation to achieve high detection accuracy on real-world visuals.',
    tech: ['Python', 'YOLOv8', 'Roboflow', 'Computer Vision', 'Deep Learning']
  },
  {
    title: 'Water Safety Prediction Model',
    description: 'Created a Streamlit-based Water Potability Prediction System using a trained ML classifier. The model evaluates multiple physicochemical properties including pH, hardness, chloramines, organic carbon, and turbidity to determine if water is safe for drinking.',
    tech: ['Python', 'Machine Learning', 'Streamlit', 'Data Preprocessing']
  }
];

const VideoCard = ({ src }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="snap-center shrink-0 w-[240px] md:w-[280px] rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-lg relative group transition-all duration-300 hover:border-white/30 min-h-[300px] flex items-center justify-center">
      
      {/* Loading Skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 w-full h-full bg-[#1a1a1a] animate-pulse flex flex-col items-center justify-center z-0">
          <svg className="w-8 h-8 text-white/20 animate-spin mb-3" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold">Buffering Engine</span>
        </div>
      )}

      <video 
        src={src} 
        autoPlay 
        loop 
        muted={isMuted} 
        playsInline 
        onLoadedData={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-700 relative z-10 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      ></video>

      {isLoaded && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsMuted(!isMuted);
          }}
          className="absolute bottom-3 right-3 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300 z-20 opacity-0 group-hover:opacity-100"
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" /></svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>
          )}
        </button>
      )}
    </div>
  );
};

const ImageCard = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="break-inside-avoid rounded-xl overflow-hidden bg-white/5 border border-white/10 group transition-all duration-300 hover:border-white/30 relative min-h-[120px]">
      {!isLoaded && (
        <div className="absolute inset-0 w-full h-full bg-[#1a1a1a] animate-pulse"></div>
      )}
      <img 
        src={src} 
        alt={alt} 
        loading="lazy" 
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-auto object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ${isLoaded ? 'blur-none scale-100' : 'blur-md scale-110'}`} 
      />
    </div>
  );
};

/* ── Featured Card with smooth slide revert ──────────── */
const FeaturedCard = ({ project, index }) => {
  const [showResults, setShowResults] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="w-full rounded-[2rem] p-2 bg-white border border-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(128,0,0,0.12)] hover:-rotate-1 hover:scale-[1.01] transition-all duration-500 relative overflow-hidden"
    >
      {/* Pin */}
      <div className="w-5 h-5 bg-gradient-to-br from-gray-300 to-gray-100 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] absolute top-4 left-1/2 -translate-x-1/2 border border-gray-300 z-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-gray-800 rounded-full opacity-20"></div>
      </div>

      <div className="w-full rounded-[1.5rem] mt-8 relative">
        {/* Content wrapper with slide transition */}
        <AnimatePresence mode="wait">
          {!showResults ? (
            /* ── FRONT: Details ───────────────── */
            <motion.div
              key="front"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="p-8 bg-[#f8f8f8] rounded-[1.5rem]"
            >
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-xl font-black text-gray-900">{project.title}</h3>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="ml-auto opacity-40 hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
              <p className="text-[10px] font-bold text-[#800000] uppercase tracking-[0.15em] mb-4">{project.category}</p>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.metrics.map((m, j) => (
                  <span key={j} className="px-3 py-1 text-[10px] font-bold bg-[#800000]/8 text-[#800000] rounded-full border border-[#800000]/10">{m}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t, j) => (
                  <span key={j} className="px-2.5 py-1 text-xs font-medium text-gray-600 bg-white border border-gray-200 rounded-full">{t}</span>
                ))}
              </div>
              <button
                onClick={() => setShowResults(true)}
                className="px-5 py-2 bg-[#800000] text-white text-xs font-bold rounded-full hover:bg-[#600000] transition-colors duration-300 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                View Results
              </button>
            </motion.div>
          ) : (
            /* ── BACK: Results ────────────────── */
            <motion.div
              key="back"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="p-6 md:p-8 bg-[#0a0a0a] rounded-[1.5rem] h-[450px] flex flex-col relative"
            >
              <div className="flex justify-between items-center mb-6 shrink-0">
                <div>
                  <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] block mb-1">Results Preview</span>
                  <h3 className="text-xl font-black text-white">{project.title}</h3>
                </div>
                <button
                  onClick={() => setShowResults(false)}
                  className="px-4 py-2 bg-white text-[#0a0a0a] text-xs font-bold rounded-full hover:bg-gray-200 transition-colors duration-300 flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
                  Back
                </button>
              </div>

              <div className="flex-grow overflow-y-auto custom-scrollbar pr-2 pb-4">
                {project.videos || project.images ? (
                  <div className="space-y-8">
                    {/* Videos Section */}
                    {project.videos && project.videos.length > 0 && (
                      <div className="space-y-3">
                        <h4 className="text-[10px] font-bold text-white/50 uppercase tracking-widest flex items-center gap-2">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                          Generated Animations
                        </h4>
                        <div className="flex gap-4 overflow-x-auto pb-4 snap-x custom-scrollbar">
                          {project.videos.map((vid, idx) => (
                            <VideoCard key={idx} src={vid} />
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Images Section */}
                    {project.images && project.images.length > 0 && (
                      <div className="space-y-3">
                        <h4 className="text-[10px] font-bold text-white/50 uppercase tracking-widest flex items-center gap-2">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                          Synthesis Outputs
                        </h4>
                        <div className="columns-2 gap-3 space-y-3">
                          {project.images.map((img, idx) => (
                            <ImageCard key={idx} src={img} alt={`Output ${idx}`} />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  /* Video placeholder */
                  <div className="w-full h-full bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
                    <div className="text-center p-6">
                      <svg className="w-10 h-10 text-white/20 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
                      <p className="text-white/30 text-xs">{project.resultPlaceholder}</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="projects" className="bg-white py-20 md:py-28 px-6 md:px-12 w-full relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.1] mb-4">
            Projects That Define<br/>My Journey
          </h2>
          <div className="w-24 h-1.5 bg-[#800000] rounded-full mb-6"></div>
          <p className="text-gray-500 text-base md:text-lg max-w-xl font-medium leading-relaxed">
            A curated portfolio of production-grade AI systems, multi-model orchestration pipelines, and computer vision applications built for scale and impact.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, i) => (
            <FeaturedCard key={i} project={project} index={i} />
          ))}
        </div>

        {/* Toggle Button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-6 py-3 bg-[#800000] text-white rounded-full font-bold text-sm shadow-[0_10px_20px_rgba(128,0,0,0.2)] hover:-translate-y-1 hover:shadow-[0_15px_25px_rgba(128,0,0,0.3)] transition-all duration-300"
          >
            {showMore ? "Hide Extended Projects" : "Extend Projects"}
          </button>
        </div>

        {/* Mini Projects Grid */}
        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 pb-12">
                {miniProjects.map((project, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="bg-white border border-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(128,0,0,0.12)] hover:-rotate-1 hover:scale-[1.02] rounded-[2rem] p-2 relative flex flex-col items-center transition-all duration-500"
                  >
                    {/* Pin */}
                    <div className="w-5 h-5 bg-gradient-to-br from-gray-300 to-gray-100 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] absolute top-4 border border-gray-300 z-10 flex items-center justify-center">
                      <div className="w-2 h-2 bg-gray-800 rounded-full opacity-20"></div>
                    </div>
                    <div className="w-full h-full rounded-[1.5rem] mt-8 p-6 flex flex-col bg-[#f8f8f8] min-h-[260px]">
                      <h3 className="text-lg font-black mb-3 tracking-tight text-gray-900">{project.title}</h3>
                      <p className="text-xs leading-relaxed font-medium text-gray-500 mb-6 flex-grow">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tech.map((t, j) => (
                          <span key={j} className="px-2 py-1 text-[10px] font-bold text-[#800000] bg-[#800000]/5 border border-[#800000]/10 rounded-md">{t}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
