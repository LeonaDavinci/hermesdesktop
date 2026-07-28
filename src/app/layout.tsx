import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'HermesDesktop Studio: Open-Source AI Agent Desktop App Studio (Official)',
    template: '%s | HermesDesktop Studio',
  },
  description: 'HermesDesktop Studio is the official open-source AI agent desktop app and agent studio with a built-in learning loop, deep cross-session memory, multi-platform messaging, and scheduled automations. Also explore Hermes Studio (local) and Hermes Studio Playground (cloud). Download free for Windows, macOS & Linux.',
  keywords: [
    'hermesdesktop', 'HermesDesktop', 'hermes desktop', 'hermes desktop app',
    'hermes desktop official', 'hermesdesktop official', 'official AI agent desktop',
    'hermes studio', 'Hermes Studio', 'agent studio', 'AI agent studio',
    'open source AI agent', 'AI agent desktop', 'autonomous AI agent', 'AI assistant software',
    'free AI agent download', 'LLM desktop application', 'AI agent with memory',
    'AI automation tool', 'multi-platform AI assistant', 'self-improving AI agent',
    'open source AI assistant', 'desktop AI agent app', 'AI agent with learning loop',
    'telegram AI bot', 'discord AI bot', 'scheduled AI automation', 'local LLM agent',
    'AI agent software free', 'hermesdesktop download', 'hermesdesktop AI',
    'hermesdesktop studio', 'agent studio desktop', 'AI agent builder studio',
    'official open source AI agent', 'best free AI agent 2026', 'self-hosted AI assistant',
    'how to run AI agent locally', 'open source alternative to zapier AI',
  ],
  authors: [{ name: 'HermesDesktop Community' }],
  creator: 'HermesDesktop Community',
  publisher: 'HermesDesktop',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.hermesdesktop.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.hermesdesktop.app',
    title: 'HermesDesktop Studio: Open-Source AI Agent Desktop App Studio (Official)',
    description: 'HermesDesktop Studio is the official open-source AI agent desktop app and agent studio with a built-in learning loop, deep memory, multi-platform messaging, and scheduled automations. Explore Hermes Studio (local) and Hermes Studio Playground (cloud). Free download.',
    siteName: 'HermesDesktop Studio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'HermesDesktop Studio - Open-Source AI Agent Desktop App Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HermesDesktop Studio: Open-Source AI Agent Desktop App Studio (Official)',
    description: 'HermesDesktop Studio - the official open-source AI agent desktop app and agent studio with a learning loop, deep memory, and multi-platform support. Explore Hermes Studio (local) and Playground (cloud). Free download.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.hermesdesktop.app',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'HermesDesktop Studio',
    description: 'HermesDesktop Studio is the open-source AI agent desktop app and agent studio with a built-in learning loop, deep memory, multi-platform messaging, and scheduled automations.',
    url: 'https://www.hermesdesktop.app',
    applicationCategory: 'AIApplication',
    operatingSystem: 'Windows, macOS, Linux',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '127',
    },
    author: {
      '@type': 'Organization',
      name: 'HermesDesktop Community',
    },
    sameAs: [
      'https://github.com/fathah/hermes-desktop',
      'https://discord.gg/hermesdesktop',
      'https://hermes-agent.nousresearch.com/',
      'https://studio.hermes-studio.com/',
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
