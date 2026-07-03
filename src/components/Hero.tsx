'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const floatingIcons = [
  { emoji: '🧠', x: '10%', y: '20%', delay: 0 },
  { emoji: '⚡', x: '85%', y: '15%', delay: 0.5 },
  { emoji: '🔮', x: '15%', y: '70%', delay: 1 },
  { emoji: '🚀', x: '80%', y: '75%', delay: 1.5 },
  { emoji: '💎', x: '50%', y: '10%', delay: 2 },
  { emoji: '🎯', x: '90%', y: '50%', delay: 2.5 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a1a]">
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent-pink/20 rounded-full blur-[120px] animate-float animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-accent-cyan/20 rounded-full blur-[120px] animate-float animation-delay-4000" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, #6C63FF 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Floating emoji icons */}
      {floatingIcons.map((icon, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl md:text-5xl pointer-events-none z-10"
          style={{ left: icon.x, top: icon.y }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 6,
            delay: icon.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {icon.emoji}
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Open Source · Community Maintained · Always Improving
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight"
        >
          HermesDesktop.
          <br />
          <span className="gradient-text">Always improving.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed"
        >
          The open-source AI agent desktop app with a{' '}
          <span className="text-brand-400 font-semibold">built-in learning loop</span>. It creates skills from experience, improves them during use, and builds a deepening model of who you are across sessions.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base text-gray-500 mb-10 max-w-2xl mx-auto"
        >
          Free download for Windows, macOS & Linux · Supports OpenAI, Anthropic, Ollama & more
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://github.com/fathah/hermes-desktop/releases/download/v0.7.2/hermes-desktop-0.7.2-portable.exe"
            className="group relative px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-semibold rounded-2xl shadow-lg shadow-brand-500/50 hover:shadow-brand-500/75 transition-all duration-300 transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              Download Now
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </span>
          </a>

          <Link
            href="/docs"
            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-500/50 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105"
          >
            Read the Docs
          </Link>
        </motion.div>

        {/* Sibling product link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6"
        >
          <p className="text-sm text-gray-500">
            Prefer a cloud-based agent studio?{' '}
            <a
              href="https://hermes-agent.nousresearch.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 font-medium underline decoration-orange-400/30 hover:decoration-orange-400 transition-colors"
            >
              Try Hermes Studio →
            </a>
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center gap-8 mt-12 pt-8 border-t border-white/5"
        >
          {[
            { value: '12.9k', label: 'GitHub Stars' },
            { value: '9+', label: 'Core Features' },
            { value: '11+', label: 'Model Providers' },
            { value: '6', label: 'Platforms' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
