import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Download | Hermes Agent Desktop',
  description: 'Download Hermes Agent Desktop for macOS, Windows, or Linux. Open source AI agent platform.',
};

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-[#0a0a1a] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Download Page</h1>
        <p className="text-gray-400">Coming soon...</p>
      </div>
    </div>
  );
}
