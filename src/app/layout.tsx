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
    default: 'HermesDesktop: Open-Source AI Agent Desktop App',
    template: '%s | HermesDesktop',
  },
  description: 'HermesDesktop is the open-source AI agent desktop app with a built-in learning loop, deep cross-session memory, multi-platform messaging, and scheduled automations. Download free for Windows, macOS & Linux.',
  keywords: [
    'hermesdesktop', 'HermesDesktop', 'hermes desktop', 'hermes desktop app',
    'open source AI agent', 'AI agent desktop', 'autonomous AI agent', 'AI assistant software',
    'free AI agent download', 'LLM desktop application', 'AI agent with memory',
    'AI automation tool', 'multi-platform AI assistant', 'self-improving AI agent',
    'open source AI assistant', 'desktop AI agent app', 'AI agent with learning loop',
    'telegram AI bot', 'discord AI bot', 'scheduled AI automation', 'local LLM agent',
    'AI agent software free', 'hermesdesktop download', 'hermesdesktop AI',
  ],
  authors: [{ name: 'HermesDesktop Community' }],
  creator: 'HermesDesktop Community',
  publisher: 'HermesDesktop',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://hermesdesktop.org'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hermesdesktop.org',
    title: 'HermesDesktop: Open-Source AI Agent Desktop App',
    description: 'HermesDesktop is the open-source AI agent desktop app with a built-in learning loop, deep memory, multi-platform messaging, and scheduled automations. Free download.',
    siteName: 'HermesDesktop',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'HermesDesktop - Open-Source AI Agent Desktop App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HermesDesktop: Open-Source AI Agent Desktop App',
    description: 'HermesDesktop - the open-source AI agent desktop app with a learning loop, deep memory, and multi-platform support. Free download.',
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
    canonical: 'https://hermesdesktop.org',
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
    name: 'HermesDesktop',
    description: 'HermesDesktop is the open-source AI agent desktop app with a built-in learning loop, deep memory, multi-platform messaging, and scheduled automations.',
    url: 'https://hermesdesktop.org',
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
