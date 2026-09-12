import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', message: '', permission: false
  });
  const [status, setStatus] = useState('idle');

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [id]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.permission) { 
      alert("Please accept the contact permission."); 
      return; 
    }

    setStatus('submitting');

    try {
      const response = await fetch("https://formsubmit.co/ajax/haffiirfan@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          Name: `${formData.firstName} ${formData.lastName}`,
          Email: formData.email,
          Message: formData.message,
          _subject: `New Portfolio Message from ${formData.firstName}`
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', message: '', permission: false });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section ref={ref} id="contact" className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex justify-center items-center py-32 px-6 md:px-12">
      
      {/* Subtle Background Glow instead of Giant Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#800000]/10 blur-[120px] rounded-full pointer-events-none"></div>

      <motion.div 
        style={{ y }}
        className="w-full max-w-6xl flex flex-col lg:flex-row gap-12 lg:gap-16 relative z-10 items-center"
      >
        {/* Left Side: Modern Typography Area */}
        <div className="flex-1 flex flex-col justify-center text-white w-full">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 font-sans">
            Let's <br />Collaborate<span className="text-[#800000]">.</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl mb-12 max-w-md leading-relaxed font-medium">
            Open to research collaboration, Master's supervision inquiries, and AI/ML engineering opportunities worldwide.
          </p>
          <div className="hidden lg:flex flex-col gap-4 text-white/40 font-mono text-sm uppercase tracking-widest">
            <p className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#800000]"></span> haffiirfan@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#800000]"></span> Based in Pakistan / Global
            </p>
          </div>
        </div>

        {/* Right Side: The Premium Maroon Form Box */}
        <div className="flex-[1.2] w-full">
          <div className="bg-gradient-to-br from-[#800000] to-[#5a0000] w-full rounded-[2.5rem] p-8 md:p-14 text-white shadow-2xl relative overflow-hidden border border-white/10">
            {/* Subtle overlay elements inside the box */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-black opacity-20 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="text-sm font-bold tracking-[0.2em] mb-10 uppercase opacity-90 relative z-10">
              Send a Message
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-10 w-full relative z-10">
              <div className="flex flex-col sm:flex-row gap-10 w-full">
                <input type="text" id="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required className="w-full bg-transparent border-b border-white/30 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/60 font-medium rounded-none" />
                <input type="text" id="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required className="w-full bg-transparent border-b border-white/30 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/60 font-medium rounded-none" />
              </div>
              
              <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required className="w-full bg-transparent border-b border-white/30 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/60 font-medium rounded-none" />
              
              <textarea id="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project or inquiry..." required className="w-full min-h-[120px] bg-transparent border-b border-white/30 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/60 font-medium resize-none rounded-none mt-2"></textarea>

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 mt-6">
                <div className="flex items-start gap-4 text-sm font-medium text-white/90">
                  <input type="checkbox" id="permission" checked={formData.permission} onChange={handleChange} className="mt-1 w-4 h-4 cursor-pointer accent-black" />
                  <label htmlFor="permission" className="cursor-pointer max-w-[220px] leading-snug text-xs opacity-80 hover:opacity-100 transition-opacity">
                    I give permission to contact me at this email address.
                  </label>
                </div>
                
                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="px-10 py-4 rounded-full bg-white text-[#800000] font-bold flex items-center justify-center gap-3 hover:scale-105 hover:shadow-xl transition-all duration-300 group disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 w-full sm:w-auto"
                >
                  {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Sent!' : status === 'error' ? 'Failed' : 'Send Message'}
                  {status === 'idle' && (
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
