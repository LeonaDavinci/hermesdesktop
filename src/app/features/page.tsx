import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features | Hermes Agent Desktop',
  description: 'Explore all features of Hermes Agent Desktop - the AI agent platform with built-in learning loop, deep memory, and multi-platform connectivity.',
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a1a] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Features Page</h1>
        <p className="text-gray-400">Coming soon...</p>
      </div>
    </div>
  );
}
