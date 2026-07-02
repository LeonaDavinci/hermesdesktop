'use client';

import { motion } from 'framer-motion';

const features = [
  {
    icon: '?',
    title: 'Closed Learning Loop',
    description: 'Agent-curated memory with periodic nudges. Autonomous skill creation after complex tasks. Skills self-improve during use. The only agent with a true built-in learning loop.',
    color: 'from-purple-500/20 to-brand-500/20',
    borderColor: 'hover:border-purple-500/50',
  },
  {
    icon: '?',
    title: 'Lives Where You Do',
    description: 'Telegram, Discord, Slack, WhatsApp, Signal, and CLI, all from a single gateway. Voice memo transcription and cross-platform conversation continuity.',
    color: 'from-green-500/20 to-cyan-500/20',
    borderColor: 'hover:border-green-500/50',
  },
  {
    icon: '?',
    title: 'Deep Memory',
    description: 'FTS5 session search with LLM summarization for cross-session recall. Honcho dialectic user modeling. Compatible with the agentskills.io open standard.',
    color: 'from-blue-500/20 to-brand-500/20',
    borderColor: 'hover:border-blue-500/50',
  },
  {
    icon: '?',
    title: 'Scheduled Automations',
    description: 'Built-in cron scheduler with delivery to any platform. Daily reports, nightly backups, weekly audits, all in natural language, running unattended.',
    color: 'from-orange-500/20 to-yellow-500/20',
    borderColor: 'hover:border-orange-500/50',
  },
  {
    icon: '?',
    title: 'Delegates & Parallelizes',
    description: 'Spawn isolated subagents for parallel workstreams. Write Python scripts that call tools via RPC, collapsing multi-step pipelines into zero-context-cost turns.',
    color: 'from-yellow-500/20 to-orange-500/20',
    borderColor: 'hover:border-yellow-500/50',
  },
  {
    icon: '?',
    title: 'Runs Anywhere',
    description: 'Seven terminal backends: local, Docker, SSH, Singularity, Modal, Daytona, and Vercel Sandbox. Run on a $5 VPS or a GPU cluster. Costs nearly nothing when idle.',
    color: 'from-pink-500/20 to-red-500/20',
    borderColor: 'hover:border-pink-500/50',
  },
  {
    icon: '?',
    title: 'Any Model, No Lock-in',
    description: 'Nous Portal, OpenRouter (300+ models), OpenAI, Anthropic, Gemini, xAI, NVIDIA NIM, Hugging Face, Ollama, LM Studio, or your own endpoint. Switch with one command.',
    color: 'from-cyan-500/20 to-blue-500/20',
    borderColor: 'hover:border-cyan-500/50',
  },
  {
    icon: '??',
    title: '14 Toolsets',
    description: 'Web search, browser automation, terminal, file ops, code execution, vision, image gen, TTS, memory, session search, delegation, MoA, and task planning.',
    color: 'from-indigo-500/20 to-purple-500/20',
    borderColor: 'hover:border-indigo-500/50',
  },
  {
    icon: '?',
    title: 'Research-Ready',
    description: 'Batch trajectory generation and compression for training the next generation of tool-calling models. Built by Nous Research.',
    color: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'hover:border-emerald-500/50',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32 bg-gray-950 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-500/5 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm mb-6">
            ? Not just a chat app
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            Built for the{' '}
            <span className="gradient-text">future</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Hermes Agent Desktop learns, delegates, schedules, and runs anywhere. Hermes Agent Desktop puts the full power in a vibrant, open-source platform ¡ª no CLI required.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className={`group relative p-6 rounded-2xl bg-gray-900/50 border border-white/5 ${feature.borderColor} transition-all duration-500 overflow-hidden hover:transform hover:-translate-y-2`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
