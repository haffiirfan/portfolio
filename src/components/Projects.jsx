import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'NeuroAnimate',
    subtitle: 'Multimodal Synthesis for 3D-styled Imagery',
    description: 'A 6-model pipeline (Mistral 7B → SDXL → LivePortrait → Real-ESRGAN) that turns text prompts into animated portrait videos. Dynamic Memory Orchestration fits 60.1 GB of model weights into 32 GB of dual-T4 VRAM. ESRGAN frames split across both GPUs cut upscaling time by 33.1%.',
    tech: ['PyTorch', 'Diffusers', 'ONNX Runtime', 'CUDA', 'Gradio', 'LivePortrait'],
    github: 'https://github.com/haffiirfan/NeuroAnimate-Multimodal-Synthesis-for-3D-styled-imagery-hyper-realistic-Shorts',
    metrics: ['60.1 GB → 32 GB VRAM', '33.1% faster upscaling', 'CLIP 0.35'],
  },
  {
    title: 'SafetyIQ',
    subtitle: 'AI-Driven Construction Safety Monitoring',
    description: 'Real-time construction site monitoring combining YOLO object detection with RAG-powered incident reports. Fine-tuned YOLO11s on 44,000 PPE images achieving 0.75+ mAP. ChromaDB + T5 generate natural language reports from detection events. Detections streamed over WebSocket at under 20ms per frame.',
    tech: ['YOLOv11', 'FastAPI', 'React', 'PostgreSQL', 'ChromaDB', 'WebSocket'],
    github: 'https://github.com/haffiirfan/SafetyIQ-AI-Driven-Construction-Safety-Monitoring',
    metrics: ['0.75+ mAP', '<20ms latency', '44K training images'],
  },
];

const Projects = () => {
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
          <span className="inline-block text-xs font-semibold text-black/50 uppercase tracking-widest px-3 py-1.5 border border-black/5 rounded-full mb-4">
            Featured Work
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
            Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
              className="group bg-[#fafafa] border border-gray-100 rounded-3xl p-8 hover:shadow-2xl hover:shadow-rose-900/5 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-xl font-black text-gray-900">{project.title}</h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto opacity-40 group-hover:opacity-100 transition-opacity"
                >
                  <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>

              <p className="text-xs font-bold text-[#800000] uppercase tracking-wider mb-3">{project.subtitle}</p>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">{project.description}</p>

              {/* Metrics */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.metrics.map((m, j) => (
                  <span key={j} className="px-3 py-1 text-xs font-bold bg-[#800000]/8 text-[#800000] rounded-full border border-[#800000]/10">
                    {m}
                  </span>
                ))}
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, j) => (
                  <span key={j} className="px-2.5 py-1 text-xs font-medium text-gray-600 bg-white border border-gray-200 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

