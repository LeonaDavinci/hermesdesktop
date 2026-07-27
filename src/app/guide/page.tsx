import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GuideContent from '@/components/GuideContent';

export const metadata: Metadata = {
  title: 'The Complete Guide to Open-Source AI Agents on Your Desktop (2026)',
  description: 'How to run an AI agent locally on Windows, macOS, and Linux for free. Compare HermesDesktop Studio vs Zapier, n8n, and AutoGPT. Step-by-step setup, Telegram/Discord automation, and self-hosted AI assistant with memory. Updated July 24, 2026.',
  keywords: [
    'how to run ai agent locally', 'best open source ai agent 2026', 'free ai automation tool',
    'open source alternative to zapier', 'self-hosted ai assistant with memory',
    'ai agent desktop windows', 'local llm automation', 'hermesdesktop guide',
    'run ai agent on windows 11', 'open source autogpt alternative', 'telegram ai bot automation',
    'discord ai bot self-hosted', 'free ai agent for linux', 'offline ai assistant desktop',
    'hermesdesktop tutorial', 'ai agent with long term memory', 'schedule ai tasks locally',
    'privacy focused ai automation', 'cost effective ai workflow tool',
    'best free ai agent desktop app', 'how to build ai agent with memory',
  ],
  alternates: {
    canonical: 'https://www.hermesdesktop.app/guide',
  },
  openGraph: {
    type: 'article',
    locale: 'en_US',
    url: 'https://www.hermesdesktop.app/guide',
    title: 'The Complete Guide to Open-Source AI Agents on Your Desktop (2026)',
    description: 'How to run an AI agent locally on Windows, macOS, and Linux for free. Compare HermesDesktop Studio vs Zapier, n8n, and AutoGPT. Step-by-step setup and automation examples.',
    siteName: 'HermesDesktop Studio',
    publishedTime: '2026-07-24T15:42:11+08:00',
    modifiedTime: '2026-07-24T15:42:11+08:00',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Open-Source AI Agent Desktop Guide 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Complete Guide to Open-Source AI Agents on Your Desktop (2026)',
    description: 'How to run an AI agent locally on Windows, macOS, and Linux for free. Compare HermesDesktop Studio vs Zapier and n8n. Updated July 24, 2026.',
    images: ['/og-image.png'],
  },
};

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-[#0a0a1a]">
      <Header />
      <GuideContent />
      <Footer />
    </main>
  );
}
