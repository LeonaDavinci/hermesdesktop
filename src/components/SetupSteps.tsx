'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    step: '01',
    title: 'Download & Open',
    description: 'Install for your OS. Choose local mode (installs Hermes Agent to ~/.hermes) or connect to a remote Hermes API server.',
    icon: '📦',
    color: 'from-brand-500 to-purple-500',
  },
  {
    step: '02',
    title: 'Pick a Provider',
    description: 'One-click setup for OpenRouter, OpenAI, Anthropic, or any compatible local/remote endpoints. No complex configuration needed.',
    icon: '🔌',
    color: 'from-accent-pink to-orange-500',
  },
  {
    step: '03',
    title: 'Your Agent is Live',
    description: 'Chat with slash commands, schedule automations, connect Telegram or Discord, and watch your agent create and improve its own skills.',
    icon: '🎉',
    color: 'from-accent-green to-cyan-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function SetupSteps() {
  return (
    <section id="how-it-works" className="relative py-24 md:py-32 bg-[#0a0a1a] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-brand-500/5 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm mb-6">
            🚀 Get Started Fast
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            Up and running in{' '}
            <span className="gradient-text">minutes</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Hermes Agent Desktop walks you through the full setup on first launch. No terminal needed.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
        >
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-20 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-brand-500 via-accent-pink to-accent-green" />

          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              variants={itemVariants}
              className="relative"
            >
              {/* Step card */}
              <div className="relative p-8 rounded-3xl bg-gray-900/50 border border-white/5 hover:border-white/10 transition-all duration-500 group text-center md:text-left">
                {/* Step number */}
                <div className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} items-center justify-center text-white font-black text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>

                {/* Step label */}
                <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                  <span className={`text-5xl font-black bg-gradient-to-br ${item.color} bg-clip-text text-transparent opacity-20 leading-none`}>
                    {item.step}
                  </span>
                  <h3 className="text-2xl font-bold text-white group-hover:text-brand-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>

                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
