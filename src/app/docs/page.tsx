import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Documentation | Hermes Agent Desktop',
  description: 'Hermes Agent Desktop documentation - getting started, API reference, and guides.',
};

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a1a] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Documentation</h1>
        <p className="text-gray-400">Coming soon...</p>
      </div>
    </div>
  );
}
