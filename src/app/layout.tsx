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
    default: 'Hermes Agent Desktop - Your AI Agent, Always Improving',
    template: '%s | Hermes Agent Desktop',
  },
  description: 'The only AI agent with a built-in learning loop. Creates skills from experience, improves them during use, and builds a deepening model of who you are across sessions. Open source, runs anywhere.',
  keywords: [
    'hermesdesktop', 'Hermes Agent Desktop', 'AI agent', 'autonomous agent', 'AI assistant',
    'machine learning', 'open source AI', 'Hermes agent', 'AI automation', 'LLM',
    'AI memory', 'multi-platform AI', 'desktop AI agent'
  ],
  authors: [{ name: 'Hermes Agent Desktop Community' }],
  creator: 'Hermes Agent Desktop Community',
  publisher: 'Hermes Agent Desktop',
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
    title: 'Hermes Agent Desktop - Your AI Agent, Always Improving',
    description: 'The only AI agent with a built-in learning loop. Open source, runs anywhere, connects to all your platforms.',
    siteName: 'Hermes Agent Desktop',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Hermes Agent Desktop - AI Agent Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hermes Agent Desktop - Your AI Agent, Always Improving',
    description: 'The only AI agent with a built-in learning loop. Open source, runs anywhere.',
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
    name: 'Hermes Agent Desktop',
    description: 'The only AI agent with a built-in learning loop. Open source, runs anywhere.',
    url: 'https://hermesdesktop.org',
    applicationCategory: 'AIApplication',
    operatingSystem: 'Windows, macOS, Linux',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    author: {
      '@type': 'Organization',
      name: 'Hermes Agent Desktop Community',
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
