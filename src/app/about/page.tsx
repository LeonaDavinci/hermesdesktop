import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Hermes Agent Desktop',
  description: 'Learn about Hermes Agent Desktop - the open source AI agent platform built by the community.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a1a] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">About Page</h1>
        <p className="text-gray-400">Coming soon...</p>
      </div>
    </div>
  );
}
