import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Preview | Hermes Agent Desktop',
  description: 'Preview Hermes Agent Desktop in action - see the AI agent platform demo.',
};

export default function PreviewPage() {
  return (
    <div className="min-h-screen bg-[#0a0a1a] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Preview Page</h1>
        <p className="text-gray-400">Coming soon...</p>
      </div>
    </div>
  );
}
