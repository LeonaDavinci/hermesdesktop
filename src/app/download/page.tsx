import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Download | Hermes Agent Desktop',
  description: 'Download Hermes Agent Desktop for Windows. Open source AI agent platform.',
};

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-[#0a0a1a] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto py-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          v0.7.2 Available Now
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">
          Download <span className="gradient-text">Hermes Agent Desktop</span>
        </h1>

        <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
          Get the portable Windows executable. No installation required — just download and run.
        </p>

        <a
          href="https://github.com/fathah/hermes-desktop/releases/download/v0.7.2/hermes-desktop-0.7.2-portable.exe"
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-semibold rounded-2xl shadow-lg shadow-brand-500/50 hover:shadow-brand-500/75 transition-all duration-300 transform hover:scale-105"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download for Windows (Portable)
        </a>

        <p className="text-sm text-gray-500 mt-6">
          Windows 10/11 · 78 MB · Portable EXE · No admin required
        </p>

        <div className="mt-12 pt-8 border-t border-white/5">
          <p className="text-sm text-gray-400 mb-4">Prefer the command line?</p>
          <a
            href="/#install"
            className="text-brand-400 hover:text-brand-300 transition-colors font-medium"
          >
            View terminal installation instructions →
          </a>
        </div>
      </div>
    </div>
  );
}
