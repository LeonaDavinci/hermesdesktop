import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DocsContent from '@/components/DocsContent';

export const metadata: Metadata = {
  title: 'HermesDesktop Studio Documentation – Complete AI Agent Setup, Configuration & API Guide',
  description: 'Comprehensive HermesDesktop Studio documentation: installation guides for Windows/macOS/Linux, architecture overview, configuration reference, LLM provider setup (OpenRouter, OpenAI, Anthropic, Ollama), messaging gateway integration (Telegram, Discord, Slack), skill creation, MCP server registry, scheduled automations, and development guide.',
  keywords: [
    'hermesdesktop documentation', 'HermesDesktop docs', 'hermes desktop setup guide',
    'AI agent installation guide', 'OpenRouter configuration', 'Ollama local LLM setup',
    'AI agent architecture', 'Electron AI app', 'MCP server registry', 'AI agent CLI reference',
    'telegram AI bot setup', 'discord AI bot configuration', 'AI agent memory configuration',
    'hermes agent tutorial', 'open source AI agent docs', 'AI agent scheduled tasks',
    'LLM provider configuration', 'AI agent skill development', 'hermesdesktop studio docs',
    'agent studio documentation', 'AI agent API reference', 'config.yaml reference',
  ],
  openGraph: {
    title: 'HermesDesktop Studio Documentation – Complete AI Agent Setup & API Guide',
    description: 'Full documentation for HermesDesktop Studio: installation, architecture, configuration, providers, features, registry, and development. Learn to set up and customize your AI agent desktop app.',
    type: 'article',
    url: 'https://www.hermesdesktop.app/docs',
  },
  alternates: {
    canonical: 'https://www.hermesdesktop.app/docs',
  },
};

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a1a]">
      <Header />
      <DocsContent />
      <Footer />
    </main>
  );
}
