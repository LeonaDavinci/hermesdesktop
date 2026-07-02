'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const installCommands = {
  mac: {
    name: 'macOS / Linux / WSL2',
    icon: '🍎',
    install: `curl -fsSL https://raw.githubusercontent.com/hermesdesktop/main/scripts/install.sh | bash`,
    after: `source ~/.bashrc && hermes`,
  },
  win: {
    name: 'Windows (PowerShell)',
    icon: '🪟',
    install: `irm https://hermesdesktop.org/install.ps1 | iex`,
    after: `hermes`,
  },
};

export default function TerminalInstall() {
  const [activeTab, setActiveTab] = useState<'mac' | 'win'>('mac');
  const [copiedInstall, setCopiedInstall] = useState(false);
  const [copiedAfter, setCopiedAfter] = useState(false);

  const handleCopy = async (text: string, type: 'install' | 'after') => {
    await navigator.clipboard.writeText(text);
    if (type === 'install') {
      setCopiedInstall(true);
      setTimeout(() => setCopiedInstall(false), 2000);
    } else {
      setCopiedAfter(true);
      setTimeout(() => setCopiedAfter(false), 2000);
    }
  };

  const current = installCommands[activeTab];

  return (
    <section className="relative py-24 md:py-32 bg-[#0a0a1a] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-green-500/5 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm mb-6">
            💻 Prefer the terminal?
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Install via{' '}
            <span className="gradient-text">command line</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Install Hermes Agent Desktop directly with a single command. No desktop app needed. Works on macOS, Linux, WSL2, and Windows.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-2xl shadow-brand-500/20 border border-white/10"
        >
          <div className="flex items-center justify-between px-4 py-3 bg-gray-800/90 border-b border-white/5">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex gap-1">
              {Object.entries(installCommands).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key as 'mac' | 'win')}
                  className={`px-4 py-1.5 rounded-lg text-xs font-mono transition-all duration-300 ${
                    activeTab === key
                      ? 'bg-brand-500 text-white'
                      : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {value.icon} {value.name}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 p-6 font-mono text-sm">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2 text-gray-500 text-xs">
                <span># Install Hermes Agent Desktop</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-white/5 group hover:border-brand-500/30 transition-all duration-300">
                <span className="text-brand-400 select-none">$</span>
                <code className="flex-1 text-green-400 break-all">{current.install}</code>
                <button
                  onClick={() => handleCopy(current.install, 'install')}
                  className={`shrink-0 px-3 py-1 rounded-lg text-xs transition-all duration-300 ${
                    copiedInstall
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {copiedInstall ? '✓' : '📋'}
                </button>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2 text-gray-500 text-xs">
                <span># After installation</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-white/5 group hover:border-brand-500/30 transition-all duration-300">
                <span className="text-brand-400 select-none">$</span>
                <code className="flex-1 text-cyan-400 break-all">{current.after}</code>
                <button
                  onClick={() => handleCopy(current.after, 'after')}
                  className={`shrink-0 px-3 py-1 rounded-lg text-xs transition-all duration-300 ${
                    copiedAfter
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {copiedAfter ? '✓' : '📋'}
                </button>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-brand-500/5 border border-brand-500/10">
              <p className="text-xs text-gray-400 flex items-start gap-2">
                <span>ℹ️</span>
                <span>
                  Handles everything: Python 3.11, Node.js, ripgrep, ffmpeg, and more. No admin required.
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
