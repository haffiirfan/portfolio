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
                <span className="px-3 py-1 text-xs font-bold bg-[#800000] text-white rounded-full">Under Review</span>
                <span className="text-white/40 text-xs font-medium">First Author</span>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white leading-tight mb-3">
                OrchestraGen: A Unified Memory-Orchestrated Multi-Model Pipeline for Text-to-Avatar Synthesis
              </h3>
              <p className="text-white/50 text-sm font-medium">
                Multimedia Systems | Springer Nature (MMSJ)
              </p>
            </div>
          </div>

          <div className="mb-10 max-w-4xl">
            <p className="text-white/70 text-sm leading-relaxed mb-4 text-justify">
              Recent advances in multimedia generative artificial intelligence have been driven by large-scale vision–language diffusion models and increasing specialization in computer vision. Although the performance of individual models continues to improve, deploying complex multi-model AI pipelines in real-world applications remains challenging due to resource conflicts, memory constraints, version incompatibilities, and limited robustness. Moreover, existing text-to-avatar generation systems typically rely on high-end GPUs, which limits their scalability on consumer-grade hardware.
            </p>
            <p className="text-white/70 text-sm leading-relaxed mb-6 text-justify">
              We propose OrchestraGen, a multi-model generative pipeline that transforms textual prompts into fully animated portrait videos. OrchestraGen uses LLM-based prompt enhancement, dual-stage diffusion synthesis, 3D-aware portrait animation through custom body motion via facial retargeting, and super-resolution enhancement on constrained dual-GPU hardware. Dynamic Memory Orchestration enables reliable execution of 60.1 GB of heterogeneous model weights on a 32 GB dual-T4 configuration, achieving a 1.88× system memory scaling factor while maintaining peak single-GPU occupancy at 13.8 GB. Heterogeneous GPU-CPU parallelism and dual-GPU parallel frame enhancement collectively reduce animation latency by 33.1%, while three-mode LLM prompt enhancement achieves a CLIP alignment score of 0.35.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-white/50 text-xs font-bold mr-2">Keywords:</span>
              {['#Multi-Model Orchestration', '#Text-to-Avatar Synthesis', '#Dual-GPU Parallel Inference', '#Dynamic Memory Management', '#Dependency Conflict Resolution'].map((kw, idx) => (
                <span key={idx} className="px-3 py-1.5 text-[10px] md:text-xs font-semibold text-white/70 bg-white/5 border border-white/10 rounded-full">
                  {kw}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {metrics.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
                className="bg-white/3 border border-white/5 rounded-2xl p-4 hover:border-[#800000]/30 transition-colors duration-300"
              >
                <p className="text-2xl md:text-3xl font-black text-white mb-1">{m.value}</p>
                <p className="text-xs font-bold text-[#800000] uppercase tracking-wider mb-1">{m.label}</p>
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
