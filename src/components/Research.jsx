import React from 'react';
import { motion } from 'framer-motion';

const Research = () => {
  const metrics = [
    { label: 'Memory Scaling', value: '4.35×', detail: '60.1 GB → 13.8 GB peak' },
    { label: 'Latency Reduction', value: '33.1%', detail: 'via dual-GPU parallelism' },
    { label: 'CLIP Alignment', value: '0.35', detail: '+9.4% over raw prompts' },
    { label: 'Identity (ArcFace)', value: '0.915', detail: 'across 40 frames' },
    { label: 'PSNR', value: '35.92 dB', detail: 'super-resolution fidelity' },
    { label: 'SSIM', value: '0.9734', detail: 'structural similarity' },
  ];

  return (
    <section id="research" className="bg-[#0a0a0a] py-20 md:py-28 px-6 md:px-12 w-full relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="inline-block text-xs font-semibold text-white/40 uppercase tracking-widest px-3 py-1.5 border border-white/10 rounded-full mb-4">
            Published Research
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-2">
            Peer-Reviewed Manuscript
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="bg-[#141416] border border-white/5 rounded-3xl p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-xs font-bold bg-[#ff2a2a] text-white rounded-full">Under Review</span>
                <span className="text-white/40 text-xs font-medium">First Author</span>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white leading-tight mb-3">
                OrchestraGen: A Unified Memory-Orchestrated Multi-Model Pipeline for Text-to-Avatar Synthesis
              </h3>
              <p className="text-white/50 text-sm font-medium">
                Multimedia Systems — Springer Nature (MMSJ)
              </p>
            </div>
          </div>

          <p className="text-white/60 text-sm leading-relaxed mb-10 max-w-3xl">
            Introduces Dynamic Memory Orchestration (DMO), a scheduling strategy that fits 60.1 GB of heterogeneous model weights into 32 GB of dual-T4 VRAM without quantization or pruning. The pipeline chains six models (Mistral-7B → SDXL Base+Refiner → LivePortrait → Real-ESRGAN) to generate animated portrait videos from text prompts.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {metrics.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
                className="bg-white/3 border border-white/5 rounded-2xl p-4 hover:border-[#ff2a2a]/30 transition-colors duration-300"
              >
                <p className="text-2xl md:text-3xl font-black text-white mb-1">{m.value}</p>
                <p className="text-xs font-bold text-[#ff2a2a] uppercase tracking-wider mb-1">{m.label}</p>
                <p className="text-xs text-white/40">{m.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;
