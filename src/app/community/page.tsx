import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CommunityContent from '@/components/CommunityContent';

export const metadata: Metadata = {
  title: 'Community Stories: How Users Build with HermesDesktop Studio',
  description: 'Real user experiences with HermesDesktop Studio - the open-source AI agent desktop app. Read how developers, researchers, and creators use HermesDesktop for autonomous workflows, multi-platform messaging, and scheduled AI automation. Updated July 16, 2026.',
  keywords: [
    'hermesdesktop community', 'HermesDesktop user stories', 'AI agent use cases',
    'hermesdesktop experience', 'AI agent desktop review', 'open source AI agent examples',
    'hermes studio community', 'agent studio use cases', 'AI automation real world',
    'hermesdesktop tutorial', 'AI agent workflow examples', 'autonomous AI agent stories',
    'hermesdesktop review', 'AI assistant desktop experience', 'hermesdesktop case study',
  ],
  alternates: {
    canonical: 'https://www.hermesdesktop.app/community',
  },
  openGraph: {
    type: 'article',
    locale: 'en_US',
    url: 'https://www.hermesdesktop.app/community',
    title: 'Community Stories: How Users Build with HermesDesktop Studio',
    description: 'Real user experiences with HermesDesktop Studio. Read how developers and creators use the open-source AI agent desktop app for autonomous workflows and multi-platform automation.',
    siteName: 'HermesDesktop Studio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'HermesDesktop Studio Community Stories',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Community Stories: How Users Build with HermesDesktop Studio',
    description: 'Real user experiences with HermesDesktop Studio - open-source AI agent desktop app. Updated July 16, 2026.',
    images: ['/og-image.png'],
  },
};

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-[#0a0a1a]">
      <Header />
      <CommunityContent />
      <Footer />
    </main>
  );
}
