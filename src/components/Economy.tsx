'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Economy() {
  const [copied, setCopied] = useState(false);

  const contractAddress = '0xfda75f77a22b4f4b783bbbb21915ef64d149bba3';

  const handleCopy = async () => {
    await navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="economy" className="relative py-24 md:py-32 bg-gray-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-500/5 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm mb-6">
            ? Hermes Agent Desktop Economy
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            The economy that powers<br />
            <span className="gradient-text">autonomous agents</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Hermes Agent Desktop powers its agent ecosystem with a community maintained economy on the Base network, enabling seamless token transactions across all services.
          </p>
        </motion.div>

        {/* Economy cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {[
            {
              icon: '?',
              title: 'Base Network',
              description: 'Powered by Base, a secure and scalable Ethereum L2 network, providing efficient transactions for agents, creators, and users.',
            },
            {
              icon: '??',
              title: 'Community Governed',
              description: 'Decisions are shaped by the community through governance, ensuring a decentralized and transparent economy.',
            },
            {
              icon: '?',
              title: '$HD Token',
              description: 'The community-driven token supporting the broader Hermes Agent Desktop ecosystem, governance, and community initiatives.',
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-2xl bg-gray-900/50 border border-white/5 hover:border-brand-500/50 transition-all duration-500 hover:transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors">
                {card.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Contract address */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto p-6 rounded-2xl bg-gray-900/80 border border-white/5 hover:border-brand-500/30 transition-all duration-500"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-brand-400 text-sm font-mono">Contract Address</span>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-800/50 border border-white/5">
            <code className="flex-1 text-sm text-gray-300 break-all font-mono">
              {contractAddress}
            </code>
            <button
              onClick={handleCopy}
              className={`shrink-0 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-300 ${
                copied
                  ? 'bg-green-500/20 text-green-400'
                  : 'bg-brand-500/20 text-brand-400 hover:bg-brand-500/30'
              }`}
            >
              {copied ? '? Copied!' : '? Copy CA'}
            </button>
          </div>
          <div className="flex gap-3 mt-4">
            <a
              href={`https://bankr.bot/launches/${contractAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-3 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Buy $HD
            </a>
            <a
              href={`https://basescan.org/tx/${contractAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm text-gray-300 hover:text-white transition-all duration-300"
            >
              Base Scan
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
