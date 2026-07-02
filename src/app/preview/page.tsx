import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HermesDesktop Demo – See the AI Agent Desktop in Action',
  description: 'Watch HermesDesktop in action: live AI agent demos, skill creation, multi-platform messaging, scheduled automations, and deep memory recall across sessions.',
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
