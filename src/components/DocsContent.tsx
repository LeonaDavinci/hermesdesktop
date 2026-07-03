'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SECTIONS = [
  { id: 'overview', label: 'Overview', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
  { id: 'getting-started', label: 'Getting Started', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { id: 'architecture', label: 'Architecture', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
  { id: 'configuration', label: 'Configuration', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
  { id: 'features', label: 'Features', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' },
  { id: 'providers', label: 'Providers & Integrations', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { id: 'registry', label: 'Registry & Marketplace', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
  { id: 'development', label: 'Development', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
];

export default function DocsContent() {
  const [activeSection, setActiveSection] = useState('overview');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = SECTIONS.map(s => document.getElementById(s.id));
      const scrollPos = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    }
    setMobileSidebarOpen(false);
  };

  return (
    <div className="pt-20">
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-orange-500 text-white shadow-lg shadow-orange-500/40 flex items-center justify-center"
        aria-label="Toggle docs navigation"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex gap-8">
        {/* Sidebar */}
        <aside className={`${
          mobileSidebarOpen ? 'fixed inset-0 z-40 bg-[#0a0a1a] pt-20 px-6 overflow-y-auto' : 'hidden'
        } lg:block lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)] lg:overflow-y-auto lg:w-64 lg:flex-shrink-0`}>
          <nav className="py-8">
            <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 px-3">Documentation</h2>
            <ul className="space-y-1">
              {SECTIONS.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollTo(section.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeSection === section.id
                        ? 'bg-orange-500/10 text-orange-400 border-l-2 border-orange-500'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={section.icon} />
                    </svg>
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 rounded-xl bg-gradient-to-br from-orange-500/10 to-amber-500/5 border border-orange-500/20">
              <p className="text-sm font-semibold text-white mb-2">Need Help?</p>
              <p className="text-xs text-gray-400 mb-3">Join our community for support and discussions.</p>
              <a
                href="https://github.com/fathah/hermes-desktop/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-orange-400 hover:text-orange-300 font-medium"
              >
                Report an Issue →
              </a>
            </div>
          </nav>
        </aside>

        {/* Main content */}
        <div className="flex-1 min-w-0 py-8 lg:py-12 max-w-4xl">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-medium mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              Documentation · v0.7.2
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight">
              HermesDesktop Studio{' '}
              <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
                Documentation
              </span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-3xl">
              The complete guide to installing, configuring, and mastering HermesDesktop Studio —
              the open-source AI agent desktop app and agent studio with a built-in learning loop,
              deep cross-session memory, multi-platform messaging, and scheduled automations.
              Free for Windows, macOS, and Linux.
            </p>
          </motion.div>

          {/* Overview */}
          <DocSection id="overview" title="Overview" subtitle="What is HermesDesktop Studio?">
            <p>
              <strong className="text-white">HermesDesktop Studio</strong> is a community-maintained, open-source
              native desktop application for installing, configuring, and chatting with the{' '}
              <a href="https://github.com/NousResearch/hermes-agent" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline decoration-orange-400/30">Hermes Agent</a>{' '}
              — a self-improving AI assistant with tool usage, multi-platform messaging, and closed-loop learning.
              The app replaces the manual CLI workflow for managing Hermes, guiding users through installation,
              provider setup, and daily use in a single unified interface.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-8">
              <InfoCard title="Core Principle" icon="M13 10V3L4 14h7v7l9-11h-7z">
                Uses the official Hermes installation scripts — no forks, no vendor lock-in.
                All data stays under <code className="text-orange-400">~/.hermes</code>.
              </InfoCard>
              <InfoCard title="Full GUI Coverage" icon="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z">
                Chat, session management, config files, memory, skills, tools, scheduling,
                and messaging gateways — all from one desktop interface.
              </InfoCard>
              <InfoCard title="Privacy-First" icon="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z">
                Local-first architecture. Your conversations, memory, and API keys never leave
                your machine unless you explicitly connect a remote backend.
              </InfoCard>
              <InfoCard title="Cross-Platform" icon="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9">
                Runs natively on macOS, Windows, and Linux. Built with Electron + React + TypeScript.
              </InfoCard>
            </div>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">At a Glance</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-white/10 rounded-lg overflow-hidden">
                <tbody className="divide-y divide-white/10">
                  {[
                    ['Type', 'Native desktop app (macOS, Windows, Linux)'],
                    ['Tech Stack', 'electron-vite, React, TypeScript, electron-builder'],
                    ['Backend', 'Hermes Agent — local (127.0.0.1:8642) or remote API server'],
                    ['Data Directory', '~/.hermes (or %LOCALAPPDATA%\\hermes on Windows, or $HERMES_HOME)'],
                    ['Transport', 'HTTP + SSE (Server-Sent Events) streaming'],
                    ['License', 'MIT (fully open source)'],
                    ['Latest Version', '0.7.2'],
                  ].map(([key, val]) => (
                    <tr key={key} className="hover:bg-white/5">
                      <td className="px-4 py-3 font-semibold text-gray-300 whitespace-nowrap">{key}</td>
                      <td className="px-4 py-3 text-gray-400">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">Related Repositories</h3>
            <div className="space-y-3">
              <RepoLink
                name="Hermes Agent"
                url="https://github.com/NousResearch/hermes-agent"
                desc="The Python-based agent that actually runs models, tools, and gateways. HermesDesktop Studio is the GUI layer on top of this agent — all runtime behavior depends on it."
              />
              <RepoLink
                name="hermes-registry"
                url="https://github.com/hermesonehq/hermes-registry"
                desc="The community directory of skills, MCP servers, agents, and workflows. The in-app Discover tab installs from this registry."
              />
              <RepoLink
                name="hermesone (npm CLI)"
                url="https://www.npmjs.com/package/hermesone"
                desc="The npm CLI tool for installing/updating the desktop app, and for installing registry entries via the `hermesone add` command."
              />
            </div>
          </DocSection>

          {/* Getting Started */}
          <DocSection id="getting-started" title="Getting Started" subtitle="From zero to a working AI agent in minutes">
            <p>
              This guide takes you from nothing to a working HermesDesktop Studio installation with a model
              provider configured. Whether you're on Windows, macOS, or Linux, the process is the same —
              download, install, pick a provider, and start chatting.
            </p>

            <h3>1. Install the App</h3>
            <h4 className="text-base font-semibold text-gray-300 mt-4 mb-2">Option A — Download a Release</h4>
            <p>
              Grab the installer for your operating system from{' '}
              <a href="/download" className="text-orange-400 hover:text-orange-300 underline">the download page</a>{' '}
              or the{' '}
              <a href="https://github.com/fathah/hermes-desktop/releases" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline decoration-orange-400/30">GitHub releases</a>:
            </p>
            <div className="overflow-x-auto my-4">
              <table className="w-full text-sm border border-white/10 rounded-lg overflow-hidden">
                <thead className="bg-white/5">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-300">OS</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-300">Artifact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr className="hover:bg-white/5"><td className="px-4 py-3 text-orange-400 font-medium">macOS</td><td className="px-4 py-3 text-gray-400"><code>*-mac.zip</code> (signed) → drag to /Applications</td></tr>
                  <tr className="hover:bg-white/5"><td className="px-4 py-3 text-orange-400 font-medium">Windows</td><td className="px-4 py-3 text-gray-400"><code>*-setup.exe</code> (NSIS installer)</td></tr>
                  <tr className="hover:bg-white/5"><td className="px-4 py-3 text-orange-400 font-medium">Linux</td><td className="px-4 py-3 text-gray-400"><code>*.AppImage</code> (or <code>.rpm</code> for Fedora/RHEL)</td></tr>
                </tbody>
              </table>
            </div>

            <h4 className="text-base font-semibold text-gray-300 mt-4 mb-2">Option B — Install via CLI</h4>
            <p>
              The <code className="text-orange-400">hermesone</code> npm package downloads the matching release,
              verifies its SHA-512 checksum, and installs it:
            </p>
            <CodeBlock title="Install via hermesone CLI">
{`npm install -g hermesone
hermesone install        # download + verify + launch the installer
hermesone update         # later, to upgrade to the latest version`}
            </CodeBlock>

            <h4 className="text-base font-semibold text-gray-300 mt-4 mb-2">Option C — Windows PowerShell (One-Liner)</h4>
            <CodeBlock title="Windows PowerShell install">
{`iex (irm https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.ps1)`}
            </CodeBlock>
            <h4 className="text-base font-semibold text-gray-300 mt-4 mb-2">Option D — macOS/Linux Shell</h4>
            <CodeBlock title="macOS/Linux install">
{`curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash`}
            </CodeBlock>

            <h3>2. First Run — Local or Remote Backend</h3>
            <p>
              On first launch, the app asks how you want to run the Hermes Agent backend:
            </p>
            <div className="grid md:grid-cols-2 gap-4 my-4">
              <div className="p-5 rounded-xl border border-orange-500/20 bg-orange-500/5">
                <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-400" /> Local Mode
                </h4>
                <p className="text-sm text-gray-400">
                  The app checks whether Hermes is already installed in <code className="text-orange-400">~/.hermes</code>.
                  If not, it runs the official Hermes installer with dependency resolution
                  (Git, uv, Python 3.11+), tracking progress in the UI. Chat then goes through
                  <code className="text-orange-400"> http://127.0.0.1:8642</code> (per-profile port).
                </p>
              </div>
              <div className="p-5 rounded-xl border border-blue-500/20 bg-blue-500/5">
                <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400" /> Remote Mode
                </h4>
                <p className="text-sm text-gray-400">
                  You provide a remote Hermes API server URL and API key. The app validates the connection
                  and skips the local install. It talks to your remote URL with the same streaming protocol —
                  ideal for shared servers or cloud deployments.
                </p>
              </div>
            </div>
            <Callout type="info">
              The built-in installer runs the official Hermes script with <code>--skip-setup</code>, then finishes
              provider configuration in the GUI. On a machine that already has Hermes, the app detects it and
              skips straight to provider setup.
            </Callout>

            <h3>3. Pick an LLM Provider</h3>
            <p>
              After the backend is ready, choose an LLM provider. The first-run picker offers:
            </p>
            <ul className="space-y-2 my-4">
              <li className="flex items-start gap-2"><span className="text-orange-400 mt-1">▸</span> <span><strong className="text-white">OpenRouter</strong> (recommended — 200+ models via one API key)</span></li>
              <li className="flex items-start gap-2"><span className="text-orange-400 mt-1">▸</span> <span><strong className="text-white">Anthropic</strong> (Claude models)</span></li>
              <li className="flex items-start gap-2"><span className="text-orange-400 mt-1">▸</span> <span><strong className="text-white">OpenAI</strong> (GPT models)</span></li>
              <li className="flex items-start gap-2"><span className="text-orange-400 mt-1">▸</span> <span><strong className="text-white">Local LLM</strong> via any OpenAI-compatible base URL</span></li>
            </ul>
            <p>
              Local presets are included for <strong className="text-white">LM Studio, Atomic Chat, Ollama, vLLM,</strong> and{' '}
              <strong className="text-white">llama.cpp</strong> — these need no API key, but the server must already be running.
              See <button onClick={() => scrollTo('providers')} className="text-orange-400 hover:text-orange-300 underline">Providers & Integrations</button> for the full list.
            </p>
            <p>
              Your provider choice and keys are saved through the Hermes config files (see{' '}
              <button onClick={() => scrollTo('configuration')} className="text-orange-400 hover:text-orange-300 underline">Configuration</button>).
              The app then opens the main workspace.
            </p>

            <h3>4. Start Chatting</h3>
            <p>
              The <strong className="text-white">Chat</strong> screen is a streaming conversation UI with slash commands,
              tool progress indicators, markdown rendering, syntax highlighting, and live token/cost tracking in the footer.
              Type <code className="text-orange-400">/help</code> to see all available commands, or jump to the{' '}
              <button onClick={() => scrollTo('features')} className="text-orange-400 hover:text-orange-300 underline">Features guide</button>.
            </p>

            <h3>5. Add Capabilities</h3>
            <ul className="space-y-3 my-4">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold flex items-center justify-center">1</span>
                <span><strong className="text-white">Skills, MCP servers, agents, workflows</strong> — open the <strong className="text-white">Discover</strong> tab to browse the community registry and install with one click.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold flex items-center justify-center">2</span>
                <span><strong className="text-white">Messaging gateways</strong> — connect Telegram, Discord, Slack, and more from the <strong className="text-white">Gateway</strong> screen.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold flex items-center justify-center">3</span>
                <span><strong className="text-white">Scheduled tasks</strong> — build cron jobs with delivery targets from <strong className="text-white">Schedules</strong>.</span>
              </li>
            </ul>

            <h3>Where Your Data Lives</h3>
            <p>Everything is stored under <code className="text-orange-400">~/.hermes</code> (or <code className="text-orange-400">$HERMES_HOME</code>):</p>
            <CodeBlock title="Data directory layout">
{`~/.hermes/
├── .env                  # API keys (env secrets provider)
├── config.yaml           # provider + app configuration
├── hermes-agent/         # the Hermes Agent install (Python)
├── profiles/             # named profile directories
├── active_profile        # name of the active profile ("default" if absent)
├── state.db              # session history (SQLite, with FTS5 full-text search)
└── cron/jobs.json        # scheduled tasks`}
            </CodeBlock>
          </DocSection>

          {/* Architecture */}
          <DocSection id="architecture" title="Architecture" subtitle="How HermesDesktop Studio is built and communicates">
            <p>
              HermesDesktop Studio is an <strong className="text-white">Electron application</strong> with the standard
              three-layer split — <strong className="text-white">main</strong>, <strong className="text-white">preload</strong>,
              and <strong className="text-white">renderer</strong> — built and bundled by{' '}
              <code className="text-orange-400">electron-vite</code>. The renderer never touches Node or the filesystem
              directly; it calls a typed bridge that the preload exposes, and the main process does the privileged work
              (spawning the Hermes agent, reading <code className="text-orange-400">~/.hermes</code>, talking to the API,
              running gateways).
            </p>

            <CodeBlock title="Architecture Diagram">
{`┌─────────────────────────────────────────────────────────────────┐
│  Renderer (React)              src/renderer/src                   │
│    screens/ · components/ · hooks/       window.hermesAPI ──┐    │
└─────────────────────────────────────────────────────────────┼────┘
                        contextBridge (IPC)                     │
┌─────────────────────────────────────────────────────────────▼────┐
│  Preload    src/preload/index.ts   exposes window.hermesAPI       │
│             (+ window.electron); sandboxed, contextIsolated       │
└─────────────────────────────────────────────────────────────┬────┘
                        ipcRenderer ⇄ ipcMain                    │
┌─────────────────────────────────────────────────────────────▼────┐
│  Main Process   src/main/                                        │
│    app lifecycle · IPC registry · installer · hermes API client   │
│    · profiles · gateways · wallets · cron · secrets               │
└─────────────────────────────────────────────────────────────┬────┘
                        HTTP + SSE                                │
┌─────────────────────────────────────────────────────────────▼────┐
│  Hermes Agent   local 127.0.0.1:<port>   or   remote API server   │
└──────────────────────────────────────────────────────────────────┘`}
            </CodeBlock>

            <h3>Processes</h3>

            <h4>Main Process — <code className="text-orange-400 text-base">src/main/</code></h4>
            <p>
              The entrypoint stays tiny and delegates startup. <code className="text-orange-400">src/main/index.ts</code>{' '}
              does only pre-<code className="text-orange-400">ready</code> work — applies GPU crash preferences,
              optionally enables the CDP testing port — then calls{' '}
              <code className="text-orange-400">startMainProcess()</code> in{' '}
              <code className="text-orange-400">src/main/app/start.ts</code>.
            </p>
            <p>
              <code className="text-orange-400">startMainProcess()</code> owns the app lifecycle: crash logging,
              IPC handler registration, updater wiring, Electron <code className="text-orange-400">ready</code>/
              <code className="text-orange-400">activate</code>/<code className="text-orange-400">window-all-closed</code>/
              <code className="text-orange-400">before-quit</code> events, CSP headers, security hardening,
              and the main <code className="text-orange-400">BrowserWindow</code>.
            </p>
            <p>App chrome lives in focused modules under <code className="text-orange-400">src/main/app/</code>:</p>
            <ul className="space-y-1 my-3 text-sm">
              <li><code className="text-orange-400">menu.ts</code> — the application menu (incl. a Help-menu Developer Tools toggle)</li>
              <li><code className="text-orange-400">updater.ts</code> — update IPC and electron-updater events</li>
              <li><code className="text-orange-400">context-menu.ts</code> — the chat right-click menu</li>
            </ul>
            <p>
              The rest of <code className="text-orange-400">src/main/</code> is domain logic — a flat module per concern:
              <code className="text-orange-400"> installer.ts</code>,{' '}
              <code className="text-orange-400">hermes.ts</code> (API client),{' '}
              <code className="text-orange-400">config.ts</code>,{' '}
              <code className="text-orange-400">profiles.ts</code>,{' '}
              <code className="text-orange-400">sessions.ts</code>,{' '}
              <code className="text-orange-400">skills.ts</code>,{' '}
              <code className="text-orange-400">tools.ts</code>,{' '}
              <code className="text-orange-400">memory.ts</code>,{' '}
              <code className="text-orange-400">cronjobs.ts</code>,{' '}
              <code className="text-orange-400">messaging-platforms.ts</code>,{' '}
              <code className="text-orange-400">registry.ts</code> (Discover),{' '}
              <code className="text-orange-400">wallet-*.ts</code>,{' '}
              <code className="text-orange-400">run-stream.ts</code> /{' '}
              <code className="text-orange-400">sse-parser.ts</code> (streaming), and the{' '}
              <code className="text-orange-400">secrets/</code> provider.
            </p>

            <h4>Preload — <code className="text-orange-400 text-base">src/preload/index.ts</code></h4>
            <p>
              Runs in an isolated world and exposes two globals via <code className="text-orange-400">contextBridge</code>:{' '}
              <code className="text-orange-400">window.hermesAPI</code> (the app's typed surface) and{' '}
              <code className="text-orange-400">window.electron</code>. The window is created with{' '}
              <code className="text-orange-400">nodeIntegration: false</code>,{' '}
              <code className="text-orange-400">contextIsolation: true</code>, and{' '}
              <code className="text-orange-400">sandbox: true</code> — so the renderer has no ambient Node access
              and everything goes through explicit IPC.
            </p>

            <h4>Renderer — <code className="text-orange-400 text-base">src/renderer/src/</code></h4>
            <p>
              A React app: <code className="text-orange-400">App.tsx</code> +{' '}
              <code className="text-orange-400">main.tsx</code>, with{' '}
              <code className="text-orange-400">screens/</code>,{' '}
              <code className="text-orange-400">components/</code>,{' '}
              <code className="text-orange-400">hooks/</code>,{' '}
              <code className="text-orange-400">utils/</code>, and{' '}
              <code className="text-orange-400">constants.ts</code>. Each top-level screen maps to a nav destination —
              <strong className="text-white"> Welcome, Setup, Install, Chat, Sessions, Agents, Skills, Models, Memory, Soul, Tools, Schedules, Gateway, Office, Kanban, Discover, Providers, Settings</strong>,
              plus a <code className="text-orange-400">Layout</code> shell and a <code className="text-orange-400">SplashScreen</code>.
            </p>

            <h3>IPC Registry</h3>
            <p>
              Renderer↔main calls are isolated from bootstrap so the registry can be split by domain.
              <code className="text-orange-400"> registerIpcHandlers()</code> in{' '}
              <code className="text-orange-400">src/main/ipc/register.ts</code> registers all handlers behind one function
              and receives app-level callbacks (the main window, model-library and connection-config notifications,
              external-URL opening, active chat abort handles). Examples: chat streaming, sessions, profiles,
              the wallet handlers (<code className="text-orange-400">list-wallets</code>,{' '}
              <code className="text-orange-400">create-wallet</code>, …,{' '}
              <code className="text-orange-400">get-token-balances</code>), and{' '}
              <code className="text-orange-400">transcribe-audio</code> for speech-to-text.
            </p>

            <h3>Talking to the Hermes Agent</h3>
            <p>
              <code className="text-orange-400">src/main/hermes.ts</code> is the HTTP/SSE client. In{' '}
              <strong className="text-white">local</strong> mode it resolves a per-profile base URL
              (<code className="text-orange-400">http://127.0.0.1:&lt;port&gt;</code>, default{' '}
              <code className="text-orange-400">8642</code>) and can manage the local gateway; in{' '}
              <strong className="text-white">remote</strong> mode it targets your configured URL + key.
              Chat responses stream as Server-Sent Events, parsed in real time
              (<code className="text-orange-400">run-stream.ts</code> /{' '}
              <code className="text-orange-400">sse-parser.ts</code>) so the UI renders tool progress, markdown,
              and token usage as it arrives.
            </p>
            <p>
              Speech-to-text is deliberately routed through the Hermes API server
              (<code className="text-orange-400">/api/audio/transcribe</code>), independent of the selected chat model,
              falling back to the Python transcription dispatcher when the desktop route is absent.
            </p>

            <h3>Startup Hardening & Resilience</h3>
            <div className="space-y-3 my-4">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <p className="text-sm"><strong className="text-orange-400">CSP</strong> — The packaged renderer keeps its meta CSP aligned with the production response CSP so <code className="text-orange-400">file://</code> startup assets load consistently.</p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <p className="text-sm"><strong className="text-orange-400">GPU Fallback</strong> — <code className="text-orange-400">gpu-fallback.ts</code> disables hardware acceleration (keeping SwiftShader WebGL) after a GPU-process crash so VMs/virtual displays don't hit an infinite crash→relaunch loop. Persistent fallback is honored on Windows/Linux; macOS clears stale flags unless <code className="text-orange-400">HERMES_GPU_FALLBACK=1</code>.</p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <p className="text-sm"><strong className="text-orange-400">Diagnostics</strong> — <code className="text-orange-400">HERMES_OPEN_DEVTOOLS=1</code> opens devtools on launch so a packaged build can surface renderer errors even when startup fails before the UI paints.</p>
              </div>
            </div>

            <h3>Build & Packaging</h3>
            <p>
              <code className="text-orange-400">electron-vite</code> bundles the main file to{' '}
              <code className="text-orange-400">out/main/index.js</code> and the renderer to{' '}
              <code className="text-orange-400">out/renderer/</code>; packaged main resolves{' '}
              <code className="text-orange-400">../renderer/index.html</code> from{' '}
              <code className="text-orange-400">__dirname</code>.{' '}
              <code className="text-orange-400">electron-builder</code> ({' '}
              <code className="text-orange-400">electron-builder.yml</code>) produces the per-OS artifacts.
            </p>
          </DocSection>

          {/* Configuration */}
          <DocSection id="configuration" title="Configuration" subtitle="Files, profiles, secrets, and network settings">
            <p>
              All Hermes state lives under a single <strong className="text-white">Hermes home</strong> directory.
              The desktop app reads and writes it; the Hermes agent runs from it. You rarely need to edit these files
              by hand — the GUI manages them — but knowing the layout helps with backups, debugging, and advanced setups.
            </p>

            <h3>Hermes Home Directory</h3>
            <p>Resolution order:</p>
            <ol className="list-decimal list-inside space-y-1 my-3 text-gray-300">
              <li><code className="text-orange-400">HERMES_HOME</code> environment variable, if set.</li>
              <li>On Windows, <code className="text-orange-400">%LOCALAPPDATA%\hermes</code> (the installer's default).</li>
              <li>Otherwise <code className="text-orange-400">~/.hermes</code>.</li>
            </ol>

            <CodeBlock title="Directory layout">
{`~/.hermes/
├── .env                 # API keys (default "env" secrets provider)
├── config.yaml          # provider + app configuration
├── hermes-agent/        # the Hermes Agent install (Python)
├── profiles/            # named profile directories
│   └── <name>/          #   each with its own config.yaml, SOUL.md, state.db…
├── active_profile       # name of the active profile ("default" if absent)
├── state.db             # default profile's session history (SQLite, FTS5)
└── cron/jobs.json       # scheduled tasks`}
            </CodeBlock>

            <h3>Profiles</h3>
            <p>
              A <strong className="text-white">profile</strong> is an isolated Hermes environment — its own config,
              persona, sessions, and (optionally) gateways. The <strong className="text-white">default</strong> profile
              is <code className="text-orange-400">~/.hermes</code> itself; named profiles live under{' '}
              <code className="text-orange-400">~/.hermes/profiles/&lt;name&gt;</code>. The active profile is recorded in{' '}
              <code className="text-orange-400">~/.hermes/active_profile</code>.
            </p>
            <p>
              Create, delete, and switch profiles from the <strong className="text-white">Agents</strong> screen.
              Each profile gets its own local gateway port, so multiple profiles can run side by side.
              Installing a registry <strong className="text-white">agent</strong> creates a new profile cloned from
              default with the agent's persona as its <code className="text-orange-400">SOUL.md</code>.
            </p>

            <h3>config.yaml</h3>
            <p>
              The agent's configuration: the selected provider and model, MCP servers
              (<code className="text-orange-400">mcp_servers:</code>), the secrets provider, network settings, and more.
              The desktop app edits this for you (provider setup, Discover installs, Settings).
              MCP entries installed from the registry are spliced under <code className="text-orange-400">mcp_servers:</code>.
            </p>

            <h3>Secrets Management</h3>
            <p>
              By default, API keys live in <code className="text-orange-400">~/.hermes/.env</code> (the{' '}
              <strong className="text-white">env</strong> provider) — no setup needed. Resolution order everywhere is:
              <code className="text-orange-400"> process.env → .env → provider → unset</code>.
            </p>
            <p>
              If you'd rather not keep keys in a plaintext <code className="text-orange-400">.env</code>, the opt-in{' '}
              <strong className="text-white">command</strong> provider resolves them by running a helper you configure
              (POSIX-only; Linux/macOS — Windows stays on <code className="text-orange-400">env</code>):
            </p>
            <CodeBlock title="Command secrets provider (config.yaml)" lang="yaml">
{`secrets:
  provider: command
  command: secret-tool lookup hermes "$HERMES_SECRET_KEY"`}
            </CodeBlock>
            <p>
              The helper's stdout may be a single bare value (per-key) or <code className="text-orange-400">KEY=VALUE</code>{' '}
              dotenv lines (a dump) — both are auto-detected. The requested key name arrives as the{' '}
              <code className="text-orange-400">HERMES_SECRET_KEY</code> environment variable.
            </p>

            <h4 className="text-base font-semibold text-gray-300 mt-6 mb-3">Vault Integrations</h4>
            <p>The <code className="text-orange-400">command</code> provider is vault-agnostic — anything that prints a value works:</p>
            <div className="grid sm:grid-cols-2 gap-3 my-4">
              {[
                ['pass', 'pass show hermes/$HERMES_SECRET_KEY'],
                ['secret-tool (libsecret)', 'secret-tool lookup hermes "$HERMES_SECRET_KEY"'],
                ['GnuPG', 'gpg --batch --passphrase-fd 0 --decrypt ~/.keys/api-keys.gpg'],
                ['KeePassXC', 'keepassxc-cli export script'],
                ['Bitwarden CLI', 'bw get item "$HERMES_SECRET_KEY" | jq -r .notes'],
                ['1Password CLI', 'op read "op://vault/$HERMES_SECRET_KEY/credential"'],
              ].map(([name, cmd]) => (
                <div key={name} className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <p className="text-sm font-semibold text-orange-400 mb-1">{name}</p>
                  <code className="text-xs text-gray-400 break-all">{cmd}</code>
                </div>
              ))}
            </div>
            <Callout type="warning">
              Safeguards: a hard <strong>3-second timeout</strong> and <strong>1 MiB output cap</strong> on the helper,
              stderr discarded, resolved values never logged or written to disk, and failures degrade to "key unset".
            </Callout>

            <h3>Network: Local vs. Remote</h3>
            <ul className="space-y-2 my-3">
              <li className="flex items-start gap-2"><span className="text-orange-400 mt-1">▸</span> <span><strong className="text-white">Local</strong> — the app manages the Hermes gateway on <code className="text-orange-400">127.0.0.1:&lt;port&gt;</code> (default <code className="text-orange-400">8642</code>, per-profile).</span></li>
              <li className="flex items-start gap-2"><span className="text-orange-400 mt-1">▸</span> <span><strong className="text-white">Remote</strong> — point the app at a remote Hermes API server (URL + API key) from Settings; SSH tunneling options are also supported.</span></li>
            </ul>

            <h3>Backup, Import & Debug</h3>
            <p>
              From <strong className="text-white">Settings</strong> you can take a full data backup, restore/import it,
              view gateway and agent logs, and produce a debug dump for diagnostics. Re-running is safe; backups capture
              your profiles, config, and session history.
            </p>
          </DocSection>

          {/* Features */}
          <DocSection id="features" title="Features" subtitle="A complete tour of every screen and capability">
            <p>
              HermesDesktop Studio packs a comprehensive suite of AI agent tools into a single desktop application.
              Every screen is designed to be both powerful for advanced users and approachable for beginners.
              Screens live in <code className="text-orange-400">src/renderer/src/screens/</code>.
            </p>

            <h3>Chat — Streaming AI Conversations</h3>
            <p>
              A streaming conversation UI with SSE streaming, tool-progress indicators, markdown rendering, and
              syntax highlighting. The footer shows <strong className="text-white">live token usage and cost</strong>{' '}
              (prompt/completion counts). Long code blocks are collapsible, and a browser-style title bar holds
              open-conversation tabs.
            </p>

            <h4 className="text-base font-semibold text-gray-300 mt-4 mb-2">Slash Commands</h4>
            <p>
              Typed slash commands are routed through the gateway's{' '}
              <code className="text-orange-400">slash.exec</code> /{' '}
              <code className="text-orange-400">command.dispatch</code> pipeline — they are executed as commands,
              <strong className="text-white"> not</strong> sent as prompt text. There are 22+ commands:
            </p>
            <div className="flex flex-wrap gap-2 my-4">
              {['/new', '/clear', '/fast', '/web', '/image', '/browse', '/code', '/shell', '/usage', '/help', '/tools', '/skills', '/model', '/memory', '/persona', '/version', '/compact', '/compress', '/undo', '/retry', '/debug', '/status'].map(cmd => (
                <span key={cmd} className="px-2 py-1 rounded text-xs bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono">{cmd}</span>
              ))}
            </div>

            <h4 className="text-base font-semibold text-gray-300 mt-4 mb-2">In-Chat Model Override</h4>
            <p>
              <code className="text-orange-400">/model</code> (or the model picker) switches the model — and its provider —
              for the <strong className="text-white">current conversation only</strong>, without changing the global default.
              A per-model context-window override drives the context gauge and the agent's auto-compaction.
            </p>

            <h4 className="text-base font-semibold text-gray-300 mt-4 mb-2">Context Folder</h4>
            <p>
              Each session can be linked to a working folder on disk. The link is persisted in a desktop-owned{' '}
              <code className="text-orange-400">state.db</code> table, so re-opening a conversation restores its folder.
            </p>

            <h3>Sessions — History with Full-Text Search</h3>
            <p>
              Browse, search, and resume past conversations. History is stored in SQLite with{' '}
              <strong className="text-white">full-text search (FTS5)</strong> and grouped by date. The Chat nav item
              also shows a recent-sessions list (capped at five, with "Show more" opening the full list).
            </p>

            <h3>Agents (Profiles)</h3>
            <p>
              Create, delete, and switch between Hermes <strong className="text-white">profiles</strong> — separate
              environments with isolated config, persona, and history. Each profile can have its own LLM provider,
              SOUL.md persona, skills, and gateway connections.
            </p>

            <h3>Skills</h3>
            <p>
              Browse, install, and manage skills — both bundled skills and ones installed from the registry.
              Registry skills are downloaded into{' '}
              <code className="text-orange-400">&lt;profile&gt;/skills/&lt;category&gt;/&lt;id&gt;/</code>.
            </p>

            <h3>Models</h3>
            <p>
              CRUD management for <strong className="text-white">saved model configurations</strong> across providers —
              keep multiple model presets and switch between them instantly.
            </p>

            <h3>Memory — Cross-Session Learning</h3>
            <p>
              View and edit memory entries and the user-profile memory, with capacity tracking. The app can also
              configure discoverable <strong className="text-white">memory providers</strong>:
            </p>
            <div className="flex flex-wrap gap-2 my-4">
              {['Honcho', 'Hindsight', 'Mem0', 'RetainDB', 'Supermemory', 'ByteRover'].map(p => (
                <span key={p} className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-gray-300">{p}</span>
              ))}
            </div>

            <h3>Soul (Persona)</h3>
            <p>
              Edit and reset your agent's personality — the active profile's{' '}
              <code className="text-orange-400">SOUL.md</code>. Installing a registry agent writes its{' '}
              <code className="text-orange-400">AGENT.md</code> as the new profile's{' '}
              <code className="text-orange-400">SOUL.md</code>.
            </p>

            <h3>Tools — 14 Built-in Toolsets</h3>
            <p>Enable or disable individual toolsets:</p>
            <div className="grid sm:grid-cols-2 gap-2 my-4">
              {['Web search', 'Browser automation', 'Terminal/shell', 'File operations', 'Code execution', 'Vision', 'Image generation', 'Text-to-speech', 'Skills', 'Memory', 'Session search', 'Clarify', 'Delegation', 'MoA (mixture-of-agents)', 'Task planning'].map(t => (
                <div key={t} className="flex items-center gap-2 text-sm text-gray-300">
                  <svg className="w-4 h-4 text-orange-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {t}
                </div>
              ))}
            </div>

            <h3>Schedules — Cron-Based Automations</h3>
            <p>
              A cron-job builder — minutes, hourly, daily, weekly, or custom cron expressions — with{' '}
              <strong className="text-white">15 delivery targets</strong> for where results are sent.
              Jobs are stored in <code className="text-orange-400">~/.hermes/cron/jobs.json</code>.
            </p>

            <h3>Gateway — 16 Messaging Platforms</h3>
            <p>
              Configure and control messaging-platform integrations so you can chat with your agent from anywhere.
              <strong className="text-white"> 16 gateways</strong> supported:
            </p>
            <div className="grid sm:grid-cols-3 gap-2 my-4">
              {['Telegram', 'Discord', 'Slack', 'WhatsApp', 'Signal', 'Matrix/Element', 'Mattermost', 'Email (IMAP/SMTP)', 'SMS (Twilio/Vonage)', 'iMessage (BlueBubbles)', 'DingTalk', 'Feishu/Lark', 'WeCom', 'WeChat (iLink Bot)', 'Webhooks', 'Home Assistant'].map(g => (
                <span key={g} className="px-3 py-1.5 rounded-lg text-xs bg-white/5 border border-white/10 text-gray-300 text-center">{g}</span>
              ))}
            </div>

            <h3>Office (Claw3d)</h3>
            <p>
              A visual 3D interface ("Hermes Office") with its own dev server and adapter management —
              for spatial AI agent interactions.
            </p>

            <h3>Kanban — Multi-Agent Task Board</h3>
            <p>
              A JIRA-style multi-agent board — a thin client over the{' '}
              <code className="text-orange-400">hermes kanban</code> CLI with canonical status columns,
              an archived toggle, and focus/poll refresh.
            </p>

            <h3>Discover — In-App Marketplace</h3>
            <p>
              The in-app marketplace for the community registry — browse and one-click install skills, MCP servers,
              agents, and workflows. See{' '}
              <button onClick={() => scrollTo('registry')} className="text-orange-400 hover:text-orange-300 underline">Registry & Marketplace</button>.
            </p>

            <h3>Settings</h3>
            <p>
              Provider config, credential pools, <strong className="text-white">backup/import</strong>, the{' '}
              <strong className="text-white">log viewer</strong> (gateway + agent logs), network/remote settings,
              secrets provider, theme, and the <strong className="text-white">auto-updater</strong>.
            </p>

            <h3>Wallets & Token Balances</h3>
            <p>
              Profile-scoped <strong className="text-white">Base mainnet</strong> wallets with encrypted recovery phrases,
              and on-chain ERC-20 token balance reads (via ethers v6).
            </p>

            <h3>Analytics</h3>
            <p>
              Privacy-first, <strong className="text-white">opt-out</strong> usage analytics: anonymous events POSTed
              to the in-house analytics service, keyed by a per-install UUID stored in{' '}
              <code className="text-orange-400">localStorage</code>. No third-party analytics SDK.
            </p>

            <h3>Internationalization</h3>
            <p>
              An i18n framework with a complete English locale across all screens, ready for community translations
              (<code className="text-orange-400">src/shared/i18n/</code>,{' '}
              <code className="text-orange-400">src/renderer/src/components/I18nProvider.tsx</code>).
            </p>
          </DocSection>

          {/* Providers */}
          <DocSection id="providers" title="Providers & Integrations" subtitle="LLM providers, local models, messaging platforms, and tools">
            <p>
              HermesDesktop Studio sits in front of the Hermes Agent, so it supports every provider and integration
              the agent supports — and provides a GUI setup screen for each one.
            </p>

            <h3>LLM Providers</h3>
            <p>
              The first-run picker mirrors the agent's native canonical providers; any OpenAI-compatible endpoint
              is routed through the <strong className="text-white">Local</strong> preset.
            </p>
            <div className="overflow-x-auto my-4">
              <table className="w-full text-sm border border-white/10 rounded-lg overflow-hidden">
                <thead className="bg-white/5">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-300">Provider</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-300">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    ['OpenRouter', '200+ models via single API key (recommended)'],
                    ['Anthropic', 'Direct access to Claude models'],
                    ['OpenAI', 'Direct access to GPT models'],
                    ['Google (Gemini)', 'Google AI Studio integration'],
                    ['xAI (Grok)', 'Grok models'],
                    ['Nous Portal', 'Offers a free tier'],
                    ['Qwen', 'QwenAI models'],
                    ['MiniMax', 'Global and China endpoints'],
                    ['Hugging Face', '20+ open models via HF Inference'],
                    ['Groq', 'Fast inference (also used for voice/STT)'],
                    ['Atlas Cloud', 'OpenAI-compatible gateway — DeepSeek, Qwen, GLM, Kimi, MiniMax…'],
                    ['Local / Custom', 'Any OpenAI-compatible endpoint'],
                  ].map(([name, notes]) => (
                    <tr key={name} className="hover:bg-white/5">
                      <td className="px-4 py-3 text-orange-400 font-medium whitespace-nowrap">{name}</td>
                      <td className="px-4 py-3 text-gray-400">{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3>Local Model Presets</h3>
            <p>
              Built-in presets need no API key — but the corresponding server must already be running on your machine:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 my-4">
              {['LM Studio', 'Atomic Chat', 'Ollama', 'vLLM', 'llama.cpp'].map(p => (
                <div key={p} className="p-4 rounded-xl bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20">
                  <p className="font-semibold text-white">{p}</p>
                  <p className="text-xs text-gray-400 mt-1">No API key required</p>
                </div>
              ))}
            </div>
            <p>
              Select <strong className="text-white">Local LLM</strong>, then choose a preset or provide a custom
              OpenAI-compatible base URL.
            </p>

            <h3>Messaging Platforms (Gateways)</h3>
            <p>
              Connect from the <strong className="text-white">Gateway</strong> screen so you can chat with your agent
              from your existing chat apps. <strong className="text-white">16 platforms</strong> supported:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 my-4">
              {['Telegram', 'Discord', 'Slack', 'WhatsApp', 'Signal', 'Matrix/Element', 'Mattermost', 'Email (IMAP/SMTP)', 'SMS (Twilio & Vonage)', 'iMessage (BlueBubbles)', 'DingTalk', 'Feishu/Lark', 'WeCom', 'WeChat (iLink Bot)', 'Webhooks', 'Home Assistant'].map(g => (
                <div key={g} className="p-2 rounded-lg bg-white/5 border border-white/10 text-center text-sm text-gray-300">{g}</div>
              ))}
            </div>

            <h3>Tool Integrations</h3>
            <p>External services usable by the agent's toolsets:</p>
            <div className="grid sm:grid-cols-3 gap-3 my-4">
              {['Exa Search', 'Parallel API', 'Tavily', 'Firecrawl', 'FAL.ai (image gen)', 'Honcho', 'Browserbase', 'Weights & Biases', 'Tinker'].map(t => (
                <div key={t} className="p-3 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300">{t}</div>
              ))}
            </div>

            <h3>Memory Providers</h3>
            <p>Discoverable memory backends configurable from the <strong className="text-white">Memory</strong> screen:</p>
            <div className="flex flex-wrap gap-2 my-4">
              {['Honcho', 'Hindsight', 'Mem0', 'RetainDB', 'Supermemory', 'ByteRover'].map(p => (
                <span key={p} className="px-3 py-1.5 rounded-full text-sm bg-orange-500/10 border border-orange-500/20 text-orange-400">{p}</span>
              ))}
            </div>

            <h3>Speech-to-Text</h3>
            <p>
              Voice transcription is routed through the Hermes API server
              (<code className="text-orange-400">/api/audio/transcribe</code>), independent of the selected chat model —
              so local Whisper, Groq, OpenAI, ElevenLabs, and command/plugin STT providers all work regardless of
              which chat model you're using.
            </p>

            <h3>Credential Storage</h3>
            <p>
              Provider API keys are stored through the Hermes secrets provider — by default in{' '}
              <code className="text-orange-400">~/.hermes/.env</code>, or via the optional command/vault helper.
              Local providers need no key.
            </p>
          </DocSection>

          {/* Registry */}
          <DocSection id="registry" title="Registry & Marketplace" subtitle="Install community skills, MCP servers, agents, and workflows">
            <p>
              HermesDesktop Studio can install community <strong className="text-white">extensions</strong> — skills,
              MCP servers, agents, and workflows — from the{' '}
              <a href="https://github.com/hermesonehq/hermes-registry" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline decoration-orange-400/30">hermes-registry</a>{' '}
              directory. The same install model has two front-ends: the in-app{' '}
              <strong className="text-white">Discover</strong> tab and the{' '}
              <code className="text-orange-400">hermesone add</code> CLI.
            </p>

            <h3>The Catalog</h3>
            <p>
              The registry is a <strong className="text-white">directory, not a package mirror</strong>. It's a public
              GitHub repository whose generated <code className="text-orange-400">index.json</code> lists each entry
              with its <code className="text-orange-400">type</code>, <code className="text-orange-400">id</code>,{' '}
              <code className="text-orange-400">path</code>, version, and compatibility. Skills/agents/workflows store
              their files directly in the repo; MCP entries are lightweight manifests pointing to pinned, published
              servers (<code className="text-orange-400">npx</code>/<code className="text-orange-400">uvx</code>/<code className="text-orange-400">docker</code>).
            </p>
            <Callout type="info">
              The app never clones the entire repo — it reads <code className="text-orange-400">index.json</code> and
              pulls only the files needed for the entry being installed.
            </Callout>

            <h3>Discover (In-App)</h3>
            <p>The <strong className="text-white">Discover</strong> screen renders the catalog as a gallery. For each entry, it:</p>
            <ol className="list-decimal list-inside space-y-2 my-3 text-gray-300">
              <li><strong className="text-white">Discovers</strong> — reads entries from <code className="text-orange-400">index.json</code>.</li>
              <li><strong className="text-white">Checks compatibility</strong> — compares the running Hermes/desktop version with the entry's <code className="text-orange-400">compatibility</code> range (e.g. <code className="text-orange-400">desktop: "&gt;=0.6.0"</code>).</li>
              <li><strong className="text-white">Collects config</strong> — for MCP, builds a form from the manifest's <code className="text-orange-400">configSchema</code> and requests required secrets (stored via the secrets provider, never committed).</li>
              <li><strong className="text-white">Installs</strong> — into the active profile.</li>
            </ol>

            <h3>Install Model (Per Type)</h3>
            <div className="overflow-x-auto my-4">
              <table className="w-full text-sm border border-white/10 rounded-lg overflow-hidden">
                <thead className="bg-white/5">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-300">Type</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-300">What "install" does</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr className="hover:bg-white/5">
                    <td className="px-4 py-3 text-orange-400 font-medium">skill</td>
                    <td className="px-4 py-3 text-gray-400">Downloads the entry folder → <code>&lt;profile&gt;/skills/&lt;category&gt;/&lt;id&gt;/</code></td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="px-4 py-3 text-orange-400 font-medium">mcp</td>
                    <td className="px-4 py-3 text-gray-400">Splices a server block under <code>mcp_servers:</code> in <code>&lt;profile&gt;/config.yaml</code></td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="px-4 py-3 text-orange-400 font-medium">workflow</td>
                    <td className="px-4 py-3 text-gray-400">Downloads the entry folder → <code>&lt;profile&gt;/workflows/&lt;id&gt;/</code></td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="px-4 py-3 text-orange-400 font-medium">agent</td>
                    <td className="px-4 py-3 text-gray-400">Creates a new profile cloned from default, writes the agent's <code>AGENT.md</code> as its <code>SOUL.md</code></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>hermesone add (CLI)</h3>
            <p>
              The <code className="text-orange-400">hermesone</code> CLI mirrors the same install model from the terminal,
              and also pings the registry website so the entry's public download counter increments:
            </p>
            <CodeBlock title="Install via CLI">
{`hermesone add mcp/github
hermesone add skill/plan
hermesone add agent/code-reviewer
hermesone add workflow/pr-triage`}
            </CodeBlock>
            <ul className="space-y-1 my-3 text-sm text-gray-300">
              <li><code className="text-orange-400">&lt;type&gt;</code> ∈ <code>skill | mcp | agent | workflow</code>; <code className="text-orange-400">&lt;id&gt;</code> is the entry ID.</li>
              <li><code className="text-orange-400">--profile &lt;name&gt;</code> targets a specific profile (default: active).</li>
              <li><code className="text-orange-400">HERMES_HOME</code> and <code className="text-orange-400">HERMESONE_REGISTRY</code> can override the data directory and registry base URL.</li>
            </ul>
            <p>
              Because it writes the same <code className="text-orange-400">~/.hermes</code> location, entries added via CLI
              show up in the app and vice versa.
            </p>

            <h3>Models Catalog</h3>
            <p>
              The registry also publishes a models catalog (<code className="text-orange-400">models.json</code>) that the
              <strong className="text-white"> Models</strong> / provider screens can use to offer curated model lists per provider.
            </p>
          </DocSection>

          {/* Development */}
          <DocSection id="development" title="Development" subtitle="Build, test, and contribute to HermesDesktop Studio">
            <p>
              HermesDesktop Studio is open source under the MIT license. Contributions are welcome — whether it's a
              bug fix, a new feature, or improved documentation.
            </p>

            <h3>Prerequisites</h3>
            <ul className="space-y-1 my-3">
              <li className="flex items-start gap-2"><span className="text-orange-400 mt-1">▸</span> <span><strong className="text-white">Node.js</strong> and <strong className="text-white">npm</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-orange-400 mt-1">▸</span> <span>A Unix-like shell environment for the Hermes installer (first-run local install)</span></li>
              <li className="flex items-start gap-2"><span className="text-orange-400 mt-1">▸</span> <span>Network access for downloading Hermes during first-run install</span></li>
            </ul>

            <h3>Setup</h3>
            <CodeBlock title="Install dependencies">
{`npm install              # also runs electron-builder install-app-deps (postinstall)`}
            </CodeBlock>

            <h3>Run</h3>
            <CodeBlock title="Development commands">
{`npm run dev              # electron-vite dev (hot reload)
npm run dev:fresh        # dev against a throwaway HERMES_HOME (mktemp) — clean state
npm run start            # electron-vite preview (run a built app)`}
            </CodeBlock>
            <Callout type="info">
              <code className="text-orange-400">dev:fresh</code> is handy for exercising the first-run install/setup
              flow without touching your real <code className="text-orange-400">~/.hermes</code>.
            </Callout>

            <h3>Checks & Tests</h3>
            <CodeBlock title="Linting, type-checking, and testing">
{`npm run lint             # eslint (cached)
npm run typecheck        # node + web tsconfigs
npm run test             # vitest run
npm run test:watch       # vitest watch
npm run test:coverage    # coverage report`}
            </CodeBlock>
            <p>
              The test suite (Vitest) covers the SSE parser, IPC handlers, the preload API surface, installer utilities,
              config-health, SSH remote, wallet store/balances, and constants validation.
            </p>

            <h3>Build & Package</h3>
            <CodeBlock title="Build commands">
{`npm run build            # typecheck + electron-vite build → out/
npm run build:unpack     # unpacked dir build
npm run build:mac        # electron-builder --mac
npm run build:win        # electron-builder --win
npm run build:linux      # electron-builder --linux
npm run build:rpm        # Fedora/RHEL .rpm`}
            </CodeBlock>
            <p>
              Packaging config is in <code className="text-orange-400">electron-builder.yml</code>.{' '}
              <code className="text-orange-400">electron-vite</code> emits the bundled main to{' '}
              <code className="text-orange-400">out/main/index.js</code> and the renderer to{' '}
              <code className="text-orange-400">out/renderer/</code>.
            </p>

            <h3>Project Layout</h3>
            <CodeBlock title="Source tree">
{`src/
├── main/            # Electron main process (privileged)
│   ├── index.ts     #   pre-ready setup → app/start.ts
│   ├── app/         #   start.ts, menu.ts, updater.ts, context-menu.ts
│   ├── ipc/         #   register.ts — the IPC handler registry
│   ├── secrets/     #   env / command secrets providers
│   └── *.ts         #   one module per concern (installer, hermes, config,
│                    #   profiles, sessions, skills, tools, memory, cronjobs,
│                    #   messaging-platforms, registry, wallet-*, run-stream…)
├── preload/         # contextBridge → window.hermesAPI + window.electron
├── renderer/src/    # React UI: screens/, components/, hooks/, utils/
└── shared/          # code shared across processes (i18n, chat-stream,
                     #   attachments, tokens, wallets, registry types…)`}
            </CodeBlock>

            <h3>The lat.md Knowledge Graph</h3>
            <p>
              This repo uses{' '}
              <a href="https://www.npmjs.com/package/lat.md" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline decoration-orange-400/30">lat.md</a>{' '}
              to maintain a cross-linked knowledge graph of architecture, design decisions, and test specs in{' '}
              <code className="text-orange-400">lat.md/</code>. It anchors source code to concepts via{' '}
              <code className="text-orange-400">[[wiki links]]</code> and{' '}
              <code className="text-orange-400">// @lat:</code> comments.
            </p>
            <CodeBlock title="lat.md commands">
{`npm i -g lat.md
lat locate "Section Name"      # find a section
lat search "natural language"  # semantic search (needs an LLM key)
lat check                      # validate all links and code refs`}
            </CodeBlock>

            <h3>Conventions</h3>
            <ul className="space-y-2 my-3">
              <li className="flex items-start gap-2"><span className="text-orange-400 mt-1">▸</span> <span>TypeScript throughout; <code className="text-orange-400">npm run typecheck</code> must pass for both node and web tsconfigs.</span></li>
              <li className="flex items-start gap-2"><span className="text-orange-400 mt-1">▸</span> <span>Keep the main entrypoint thin — boot concerns in <code className="text-orange-400">index.ts</code>, lifecycle in <code className="text-orange-400">app/start.ts</code>, IPC behind <code className="text-orange-400">ipc/register.ts</code>, domain logic in its own module.</span></li>
              <li className="flex items-start gap-2"><span className="text-orange-400 mt-1">▸</span> <span>The renderer never imports Node or hits the filesystem directly — add a typed method to the preload bridge and an IPC handler instead.</span></li>
            </ul>

            <h3>Contributing</h3>
            <p>
              See <a href="https://github.com/fathah/hermes-desktop/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline decoration-orange-400/30">CONTRIBUTING.md</a>{' '}
              and the <a href="https://github.com/fathah/hermes-desktop/issues" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline decoration-orange-400/30">open issues</a>.
              The project is in active development — features may change.
            </p>

            <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-amber-500/5 border border-orange-500/20 text-center">
              <h3 className="text-xl font-bold text-white mb-2">Ready to Build?</h3>
              <p className="text-gray-400 mb-4">Download HermesDesktop Studio and start building with AI agents today.</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="/download" className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                  Download Free
                </a>
                <a href="https://github.com/fathah/hermes-desktop" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-xl transition-all duration-300">
                  View on GitHub
                </a>
              </div>
            </div>
          </DocSection>
        </div>
      </div>
    </div>
  );
}

function DocSection({ id, title, subtitle, children }: { id: string; title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className="scroll-mt-20 mb-16"
    >
      <div className="mb-6 pb-4 border-b border-white/10">
        <h2 className="text-3xl font-black text-white mb-1">{title}</h2>
        <p className="text-gray-500">{subtitle}</p>
      </div>
      <div className="prose-docs">
        {children}
      </div>
    </motion.section>
  );
}

function CodeBlock({ title, children, lang }: { title?: string; children: React.ReactNode; lang?: string }) {
  return (
    <div className="my-5 rounded-xl overflow-hidden border border-white/10 bg-black/40">
      {title && (
        <div className="px-4 py-2 bg-white/5 border-b border-white/10 flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          <span className="text-xs text-gray-500 ml-2">{title}</span>
          {lang && <span className="ml-auto text-xs text-gray-600 uppercase">{lang}</span>}
        </div>
      )}
      <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
        <code className="text-gray-300 font-mono">{children}</code>
      </pre>
    </div>
  );
}

function Callout({ type, children }: { type: 'info' | 'warning'; children: React.ReactNode }) {
  const styles = type === 'warning'
    ? 'border-orange-500/30 bg-orange-500/5'
    : 'border-blue-500/30 bg-blue-500/5';
  const icon = type === 'warning'
    ? 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
    : 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z';
  const color = type === 'warning' ? 'text-orange-400' : 'text-blue-400';
  return (
    <div className={`my-5 p-4 rounded-xl border ${styles} flex items-start gap-3`}>
      <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
      </svg>
      <div className="text-sm text-gray-300 leading-relaxed">{children}</div>
    </div>
  );
}

function InfoCard({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) {
  return (
    <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-colors">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
          <svg className="w-4 h-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
          </svg>
        </div>
        <h4 className="font-bold text-white text-sm">{title}</h4>
      </div>
      <p className="text-sm text-gray-400 leading-relaxed">{children}</p>
    </div>
  );
}

function RepoLink({ name, url, desc }: { name: string; url: string; desc: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/30 hover:bg-orange-500/5 transition-all duration-200 group"
    >
      <div className="flex items-center gap-2 mb-1">
        <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
        <span className="font-bold text-white group-hover:text-orange-400 transition-colors">{name}</span>
        <svg className="w-3 h-3 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
      <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
      <code className="text-xs text-gray-500 mt-1 block">{url}</code>
    </a>
  );
}
