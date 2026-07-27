import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReviewsContent from '@/components/ReviewsContent';

export const metadata: Metadata = {
  title: 'HermesDesktop Studio Reviews: Real User Feedback & Honest Verdict (2026)',
  description: 'Unbiased HermesDesktop Studio reviews from real users. Is HermesDesktop worth it? Read pros, cons, and honest feedback on the open-source AI agent desktop app. Compare with Zapier and n8n. Updated July 27, 2026.',
  keywords: [
    'hermesdesktop review', 'is hermesdesktop worth it', 'hermesdesktop honest review',
    'hermesdesktop pros and cons', 'hermesdesktop user feedback', 'hermesdesktop reddit',
    'hermesdesktop testimonials', 'hermesdesktop experience', 'hermesdesktop legit',
    'hermesdesktop safe', 'hermesdesktop vs zapier', 'hermesdesktop vs n8n',
    'hermesdesktop review 2026', 'open source ai agent review', 'hermesdesktop opinion',
  ],
  alternates: {
    canonical: 'https://www.hermesdesktop.app/reviews',
  },
  openGraph: {
    type: 'article',
    locale: 'en_US',
    url: 'https://www.hermesdesktop.app/reviews',
    title: 'HermesDesktop Studio Reviews: Real User Feedback & Honest Verdict (2026)',
    description: 'Unbiased HermesDesktop Studio reviews from real users. Is HermesDesktop worth it? Read pros, cons, and honest feedback on the free open-source AI agent desktop app.',
    siteName: 'HermesDesktop Studio',
    publishedTime: '2026-07-27T19:55:37+08:00',
    modifiedTime: '2026-07-27T19:55:37+08:00',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'HermesDesktop Studio Reviews and User Feedback 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HermesDesktop Studio Reviews: Real User Feedback & Honest Verdict (2026)',
    description: 'Is HermesDesktop worth it? Unbiased reviews, pros, cons, and real user feedback. Updated July 27, 2026.',
    images: ['/og-image.png'],
  },
};

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a1a]">
      <Header />
      <ReviewsContent />
      <Footer />
    </main>
  );
}
