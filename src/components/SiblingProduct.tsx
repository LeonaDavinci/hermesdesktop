'use client';

import { motion } from 'framer-motion';

const products = [
  {
    name: 'Hermes Studio',
    tagline: 'Local Agent Studio',
    description:
      'A powerful local agent studio for building, testing, and running AI agents on your own machine. Full control, full privacy, no cloud required.',
    tags: ['Local-first', 'Full privacy', 'Self-hosted', 'Offline capable'],
    href: 'https://hermes-agent.nousresearch.com/',
    cta: 'Visit Hermes Studio',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
    gradient: 'from-orange-500 to-amber-600',
    glow: 'shadow-orange-500/30',
    glowHover: 'hover:shadow-orange-500/50',
  },
  {
    name: 'Hermes Studio Playground',
    tagline: 'Cloud Playground',
    description:
      'A cloud-based playground for designing, prototyping, and sharing AI agent workflows in your browser. Spin up agents instantly — no local setup required.',
    tags: ['Cloud-hosted', 'No setup', 'Shareable', 'Browser-based'],
    href: 'https://studio.hermes-studio.com/',
    cta: 'Open Playground',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
      />
    ),
    gradient: 'from-sky-500 to-indigo-600',
    glow: 'shadow-sky-500/30',
    glowHover: 'hover:shadow-sky-500/50',
  },
];

export default function SiblingProduct() {
  return (
    <section className="relative py-20 md:py-24 bg-[#0a0a1a] overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-orange-500/8 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-sky-500/8 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            Sibling Products · Hermes Ecosystem
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Explore the{' '}
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-sky-400 bg-clip-text text-transparent">
              Hermes Studio
            </span>{' '}
            Family
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Two sibling products in the Hermes ecosystem — a local agent studio
            and a cloud playground. Use them alongside HermesDesktop Studio for
            the complete Hermes experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm p-8 md:p-10 group"
            >
              {/* Decorative gradient border */}
              <div className={`absolute inset-0 bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`} />

              <div className="relative">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-lg ${product.glow} mb-6`}>
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {product.icon}
                  </svg>
                </div>

                {/* Badge */}
                <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 mb-3">
                  {product.tagline}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-5 leading-relaxed">
                  {product.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group/btn inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${product.gradient} ${product.glowHover} text-white font-semibold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105`}
                >
                  {product.cta}
                  <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-sm text-gray-600 mt-8"
        >
          HermesDesktop Studio runs locally · Hermes Studio runs locally · Hermes Studio Playground runs in the cloud
        </motion.p>
      </div>
    </section>
  );
}
