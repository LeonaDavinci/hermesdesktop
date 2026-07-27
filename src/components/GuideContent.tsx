'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const toc = [
  { id: 'what-is', label: 'What Is an Open-Source AI Agent?' },
  { id: 'why-local', label: 'Why Run an AI Agent Locally?' },
  { id: 'setup', label: 'How to Set Up HermesDesktop Studio in 10 Minutes' },
  { id: 'windows', label: 'Run an AI Agent on Windows 11 (Step by Step)' },
  { id: 'automation', label: 'Telegram & Discord Automation Examples' },
  { id: 'compare', label: 'HermesDesktop Studio vs Zapier, n8n, AutoGPT' },
  { id: 'memory', label: 'Building an AI Agent with Long-Term Memory' },
  { id: 'privacy', label: 'Privacy & Cost: The Self-Hosted Advantage' },
  { id: 'faq', label: 'Frequently Asked Questions' },
];

const comparisons = [
  {
    name: 'HermesDesktop Studio',
    cost: 'Free (open source)',
    local: 'Yes, fully local',
    memory: 'Deep cross-session',
    learning: 'Built-in loop',
    platforms: 'Windows, macOS, Linux',
    verdict: 'Best for free, private, self-hosted AI automation with memory',
    highlight: true,
  },
  {
    name: 'Zapier AI',
    cost: '$49+/month',
    local: 'No (cloud only)',
    memory: 'Limited',
    learning: 'No',
    platforms: 'Web',
    verdict: 'Best for non-technical users who accept SaaS costs',
  },
  {
    name: 'n8n',
    cost: 'Free self-host / $50+/month cloud',
    local: 'Yes (self-hosted)',
    memory: 'Via database',
    learning: 'No',
    platforms: 'Web, Docker',
    verdict: 'Best for visual workflow builders comfortable with Docker',
  },
  {
    name: 'AutoGPT',
    cost: 'Free (open source)',
    local: 'Yes',
    memory: 'Short-term',
    learning: 'Partial',
    platforms: 'Windows, macOS, Linux',
    verdict: 'Best for experimental autonomous agents, less polished UI',
  },
];

const faqs = [
  {
    q: 'What is the best free open-source AI agent for desktop in 2026?',
    a: 'HermesDesktop Studio is widely regarded as the best free open-source AI agent desktop app in 2026. It runs fully locally, supports 11+ model providers, features deep cross-session memory, and includes a built-in learning loop — all without any subscription fee.',
  },
  {
    q: 'Can I run an AI agent locally on Windows 11 without coding?',
    a: 'Yes. HermesDesktop Studio provides a native Windows desktop app. Install it with the one-line command iex (irm https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.ps1) and use the graphical interface — no programming required for most automations.',
  },
  {
    q: 'Is there an open-source alternative to Zapier for AI automation?',
    a: 'HermesDesktop Studio is a strong open-source alternative to Zapier for AI-driven automation. Unlike Zapier, it runs on your own machine, keeps your data local, and has no per-task pricing. You can replicate most Zapier scenarios (GitHub to Slack, scheduled tasks, webhooks) as local agents.',
  },
  {
    q: 'How do I give an AI agent long-term memory?',
    a: 'HermesDesktop Studio stores conversation context, learned skills, and a knowledge graph (lat.md) across sessions. When you enable the memory provider, the agent recalls prior decisions, your preferences, and project history — turning disposable chat into a persistent collaborator.',
  },
  {
    q: 'Is a self-hosted AI assistant actually private?',
    a: 'Yes, if it runs locally. HermesDesktop Studio executes on your device; only the model API calls (if you use a cloud LLM) leave your network. For full offline privacy, connect a local model via Ollama or LM Studio and no data leaves your machine at all.',
  },
];

export default function GuideContent() {
  const jsonLdArticle = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'The Complete Guide to Open-Source AI Agents on Your Desktop (2026)',
    description:
      'How to run an AI agent locally on Windows, macOS, and Linux for free. Compare HermesDesktop Studio vs Zapier, n8n, and AutoGPT with step-by-step setup.',
    datePublished: '2026-07-24',
    dateModified: '2026-07-24T15:42:11+08:00',
    author: {
      '@type': 'Organization',
      name: 'HermesDesktop Community',
    },
    publisher: {
      '@type': 'Organization',
      name: 'HermesDesktop',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.hermesdesktop.app/guide',
    },
    keywords:
      'how to run ai agent locally, best open source ai agent 2026, open source alternative to zapier, self-hosted ai assistant with memory, free ai automation tool',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/10 rounded-full blur-[120px]" />

        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-sm font-medium mb-6">
              Ultimate Guide · Updated July 24, 2026
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              The Complete Guide to{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">
                Open-Source AI Agents
              </span>{' '}
              on Your Desktop
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Learn how to run a free, private AI agent locally on Windows, macOS, and Linux.
              Step-by-step setup, real automation examples, and an honest comparison with Zapier,
              n8n, and AutoGPT. Last updated:{' '}
              <time dateTime="2026-07-24T15:42:11+08:00" className="text-orange-400 font-medium">
                July 24, 2026 at 15:42 GMT+8
              </time>
              .
            </p>
          </motion.div>
        </div>
      </section>

      {/* Layout: TOC + Content */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10">
          {/* Sticky TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <div className="text-sm font-semibold text-white mb-4">On this page</div>
              <nav className="space-y-1 border-l border-white/10">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block pl-4 py-1.5 text-sm text-gray-500 hover:text-orange-400 border-l border-transparent -ml-px hover:border-orange-400 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <article className="prose-docs max-w-none">
            <div id="what-is" className="scroll-mt-24">
              <h3>What Is an Open-Source AI Agent?</h3>
              <p>
                An open-source AI agent is a locally runnable program that uses a large language
                model (LLM) to perceive context, make decisions, and take actions on your behalf —
                sending messages, calling APIs, scraping web pages, or scheduling tasks. Unlike
                closed SaaS bots, the source code is publicly auditable, you control where data
                lives, and there is no per-task billing. <strong>HermesDesktop Studio</strong> is a
                leading example: a free, official open-source AI agent desktop app that bundles a
                learning loop, deep memory, and 16+ messaging gateways into a single interface.
              </p>
            </div>

            <div id="why-local" className="scroll-mt-24 mt-10">
              <h3>Why Run an AI Agent Locally?</h3>
              <p>
                The three reasons most teams move from cloud bots to a local AI agent are privacy,
                cost, and control. When the agent runs on your own machine, sensitive documents
                never leave your network. You avoid the $49–$99/month SaaS tax. And you can wire it
                into internal tools that cloud vendors cannot reach. A free AI automation tool that
                runs locally is no longer a compromise — in 2026 it is frequently the superior
                choice.
              </p>
              <ul>
                <li>
                  <strong>Privacy:</strong> route confidential data through a local LLM via Ollama
                  or LM Studio — zero data leaves your machine.
                </li>
                <li>
                  <strong>Cost:</strong> HermesDesktop Studio is free and open-source; you pay only
                  for the LLM tokens you choose to use.
                </li>
                <li>
                  <strong>Control:</strong> own the config, the memory store, and the automation
                  schedule outright.
                </li>
              </ul>
            </div>

            <div id="setup" className="scroll-mt-24 mt-10">
              <h3>How to Set Up HermesDesktop Studio in 10 Minutes</h3>
              <p>
                Getting a working AI agent desktop app running takes less than ten minutes. The
                fastest path is the official one-line installer, which detects your OS and pulls
                the portable build automatically.
              </p>
              <ol>
                <li>Run the installer for your platform (commands below).</li>
                <li>Launch the HermesDesktop Studio desktop app.</li>
                <li>Open Settings and add an API key for your preferred provider (OpenAI, Anthropic, or a local model).</li>
                <li>Type <code>/help</code> in the agent console to see available commands.</li>
                <li>Create your first scheduled task or connect a Telegram/Discord gateway.</li>
              </ol>
            </div>

            <div id="windows" className="scroll-mt-24 mt-10">
              <h3>Run an AI Agent on Windows 11 (Step by Step)</h3>
              <p>
                Windows users often ask how to run an AI agent locally on Windows 11 without Docker.
                HermesDesktop Studio ships a native portable executable, so the setup is
                straightforward:
              </p>
              <ol>
                <li>
                  Open PowerShell and run:{' '}
                  <code>iex (irm https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.ps1)</code>
                </li>
                <li>Launch <code>hermes-desktop-0.7.2-portable.exe</code> from your Downloads folder.</li>
                <li>Pin it to your taskbar for quick access.</li>
                <li>Configure a provider in the Settings panel and test with a simple prompt.</li>
              </ol>
              <p>
                No WSL, no Python environment, no Docker required. This is the simplest way to get a
                free AI agent for Windows running today.
              </p>
            </div>

            <div id="automation" className="scroll-mt-24 mt-10">
              <h3>Telegram &amp; Discord Automation Examples</h3>
              <p>
                One of the most common long-tail searches is how to build a Telegram AI bot or a
                self-hosted Discord AI bot. With HermesDesktop Studio you connect the gateway once,
                then describe the behavior in plain English:
              </p>
              <ul>
                <li>
                  <strong>Daily digest:</strong> every 9 AM, summarize overnight GitHub activity and
                  post it to a Telegram channel.
                </li>
                <li>
                  <strong>Support triage:</strong> watch a Discord server, answer FAQ questions
                  automatically, and escalate anything flagged as urgent.
                </li>
                <li>
                  <strong>Content pipeline:</strong> when you drop a transcript file into a watched
                  folder, generate social posts and schedule them.
                </li>
              </ul>
            </div>

            <div id="compare" className="scroll-mt-24 mt-10">
              <h3>HermesDesktop Studio vs Zapier, n8n, AutoGPT</h3>
              <p>
                Choosing between an open-source AI agent and a SaaS automation tool depends on your
                priorities. Here is an honest side-by-side:
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm border border-white/10 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-white/5 text-white">
                      <th className="p-3 text-left">Tool</th>
                      <th className="p-3 text-left">Cost</th>
                      <th className="p-3 text-left">Local?</th>
                      <th className="p-3 text-left">Memory</th>
                      <th className="p-3 text-left">Verdict</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisons.map((c) => (
                      <tr
                        key={c.name}
                        className={`border-t border-white/10 ${c.highlight ? 'bg-orange-500/5' : ''}`}
                      >
                        <td className={`p-3 font-medium ${c.highlight ? 'text-orange-400' : 'text-gray-200'}`}>
                          {c.name}
                        </td>
                        <td className="p-3 text-gray-400">{c.cost}</td>
                        <td className="p-3 text-gray-400">{c.local}</td>
                        <td className="p-3 text-gray-400">{c.memory}</td>
                        <td className="p-3 text-gray-400">{c.verdict}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                If you are specifically looking for an <strong>open-source alternative to Zapier</strong>{' '}
                with AI capabilities, HermesDesktop Studio covers the majority of Zapier scenarios
                while keeping your data local and your costs at zero.
              </p>
            </div>

            <div id="memory" className="scroll-mt-24 mt-10">
              <h3>Building an AI Agent with Long-Term Memory</h3>
              <p>
                Most chatbots forget everything between sessions. A self-hosted AI assistant with
                memory works differently: HermesDesktop Studio persists a knowledge graph (lat.md),
                learned skills, and conversation history across restarts. To enable it, set the
                memory provider in your profile config, and the agent will begin recalling your
                prior decisions, project context, and stated preferences. This is what turns a
                disposable chatbot into a persistent collaborator — and it is a core reason people
                switch to a desktop AI agent with memory.
              </p>
            </div>

            <div id="privacy" className="scroll-mt-24 mt-10">
              <h3>Privacy &amp; Cost: The Self-Hosted Advantage</h3>
              <p>
                A privacy-focused AI automation setup is the default when you self-host. HermesDesktop
                Studio executes on your machine; only the model inference (if you use a cloud LLM)
                leaves your network. Pair it with a local model for a fully offline AI assistant
                desktop experience. On cost: a cost-effective AI workflow tool should not meter you
                per task. HermesDesktop Studio is free and open-source, so your only expense is
                optional LLM API usage — easily under $15/month for typical workloads.
              </p>
            </div>

            <div id="faq" className="scroll-mt-24 mt-10">
              <h3>Frequently Asked Questions</h3>
              <div className="space-y-6 mt-4">
                {faqs.map((item, i) => (
                  <div
                    key={i}
                    className="p-5 bg-white/5 border border-white/10 rounded-2xl"
                  >
                    <div className="text-white font-semibold mb-2">{item.q}</div>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 p-8 bg-gradient-to-r from-orange-500/10 to-transparent border-l-4 border-orange-500 rounded-r-2xl">
              <h4 className="text-white font-bold text-xl mb-2">Ready to run your own AI agent?</h4>
              <p className="text-gray-300 mb-6">
                Download HermesDesktop Studio free and follow this guide to set up a private, local
                AI agent in under 10 minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://github.com/fathah/hermes-desktop/releases/download/v0.7.2/hermes-desktop-0.7.2-portable.exe"
                  className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-2xl transition-all duration-300 text-center"
                >
                  Download Free
                </a>
                <Link
                  href="/docs"
                  className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-2xl transition-all duration-300 text-center"
                >
                  Read the Docs
                </Link>
              </div>
            </div>

            <p className="text-sm text-gray-600 mt-8">
              Page last updated: July 24, 2026 at 15:42 GMT+8 · HermesDesktop Studio Community
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
