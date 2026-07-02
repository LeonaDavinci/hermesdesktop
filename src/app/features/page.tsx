import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HermesDesktop Features – AI Agent with Learning Loop & Deep Memory',
  description: 'Explore HermesDesktop features: self-improving AI skills, deep cross-session memory, multi-platform messaging (Telegram, Discord, Slack), scheduled automations, and 14 built-in toolsets.',
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
