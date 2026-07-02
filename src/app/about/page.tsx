import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About HermesDesktop – Open Source AI Agent Project',
  description: 'Learn about HermesDesktop, the community-driven open-source AI agent desktop project. Built for autonomous workflows, deep memory, and multi-platform AI automation.',
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
