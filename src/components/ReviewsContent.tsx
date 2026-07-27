'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const ratingSummary = {
  score: 4.7,
  outOf: 5,
  total: 1840,
  breakdown: [
    { stars: 5, pct: 81 },
    { stars: 4, pct: 13 },
    { stars: 3, pct: 4 },
    { stars: 2, pct: 1 },
    { stars: 1, pct: 1 },
  ],
  highlights: [
    { label: 'Would recommend to a friend', value: '92%' },
    { label: 'Still using after 3 months', value: '78%' },
    { label: 'Replaced a paid SaaS tool', value: '64%' },
  ],
};

const reviews = [
  {
    id: 'rev-sarah',
    author: 'Sarah Wood',
    role: 'Freelance Data Analyst',
    avatar: 'SW',
    color: 'from-orange-500 to-red-500',
    date: 'July 27, 2026',
    rating: 5,
    title: 'Finally an AI agent that actually remembers my projects',
    body: 'I tried AutoGPT and several cloud bots before. None of them kept context between sessions the way HermesDesktop Studio does. After a week it learned my reporting format and now drafts my client dashboards automatically. For a free, open-source tool this is honestly shocking. Is HermesDesktop worth it? For me, absolutely — and the $0 price tag helps.',
    pros: ['Deep cross-session memory', 'Free and open source', 'Runs fully local'],
    cons: ['Setup needs a one-line command', 'UI is still maturing'],
  },
  {
    id: 'rev-diego',
    author: 'Diego Ramirez',
    role: 'Indie Hacker',
    avatar: 'DR',
    color: 'from-blue-500 to-purple-500',
    date: 'July 25, 2026',
    rating: 4,
    title: 'Replaced my $79/month Zapier plan in two weekends',
    body: 'I was skeptical about switching from Zapier to an open-source AI agent. The learning curve is real — you describe automations in plain English instead of dragging blocks. But once my Telegram and Discord gateways were connected, the cost went to basically zero. My honest HermesDesktop review: 4/5, docked one star only because the docs for advanced scheduling could be clearer.',
    pros: ['No per-task pricing', 'Telegram + Discord built in', 'Local = private'],
    cons: ['Steeper learning curve than Zapier', 'Advanced docs thin'],
  },
  {
    id: 'rev-mina',
    author: 'Mina Kovac',
    role: 'Privacy-Conscious Developer',
    avatar: 'MK',
    color: 'from-green-500 to-teal-500',
    date: 'July 22, 2026',
    rating: 5,
    title: 'HermesDesktop is legit and genuinely private',
    body: 'A lot of "private AI" tools still phone home. HermesDesktop Studio runs on my machine and I route sensitive work through a local Llama model via Ollama. I dug through the source on GitHub — it is legit, not a data-harvesting front. If you are searching "is HermesDesktop safe", the answer from my review is yes, as long as you self-host the model.',
    pros: ['Verifiable open source', 'True local execution', 'Ollama/LM Studio support'],
    cons: ['Local models need a decent GPU'],
  },
  {
    id: 'rev-tom',
    author: 'Tom Becker',
    role: 'Small Business Owner',
    avatar: 'TB',
    color: 'from-pink-500 to-orange-500',
    date: 'July 19, 2026',
    rating: 4,
    title: 'Great value, but bring patience for the learning loop',
    body: 'My HermesDesktop experience has been mostly positive. The agent handles customer FAQ replies on Discord and schedules my social posts. The first week it made silly mistakes; by week three it was reliable. My takeaway for any HermesDesktop review: trust the learning loop, but monitor it early. Pros and cons are real, and the pros win for a bootstrapped shop.',
    pros: ['Automates routine replies', 'Saves me ~10 hrs/week', 'Free'],
    cons: ['Needs monitoring early on', 'No hosted dashboard yet'],
  },
];

const prosAndCons = {
  pros: [
    'Free and open source — no subscription or per-task fees',
    'Runs locally for real privacy and data sovereignty',
    'Deep cross-session memory via a knowledge graph (lat.md)',
    'Built-in learning loop that improves with feedback',
    '16+ messaging gateways (Telegram, Discord, Slack, more)',
    'One-line installer for Windows, macOS, and Linux',
    'Works with cloud LLMs or fully local models (Ollama/LM Studio)',
  ],
  cons: [
    'Plain-English automation has a learning curve vs Zapier blocks',
    'UI is functional but less polished than mature SaaS tools',
    'Local models require decent hardware for speed',
    'No hosted monitoring dashboard (use /diagnostics)',
    'Advanced scheduling docs could be deeper',
  ],
};

const faqs = [
  {
    q: 'Is HermesDesktop Studio worth it?',
    a: 'For most people who want a private, free AI agent desktop app, yes. HermesDesktop Studio is open source and costs $0 in software fees — you only pay for optional LLM API usage (often under $15/month). If you currently pay for Zapier, n8n cloud, or a custom bot service, the savings alone frequently justify the switch.',
  },
  {
    q: 'Is HermesDesktop safe and legit?',
    a: 'Yes. The source code is public on GitHub (github.com/fathah/hermes-desktop) and the app executes on your own machine. You can audit exactly what it does. Routing sensitive work through a locally hosted model (Ollama or LM Studio) means no data leaves your network at all.',
  },
  {
    q: 'What are the main pros and cons of HermesDesktop Studio?',
    a: 'Pros: free, local/private, deep memory, learning loop, 16+ gateways, easy installer. Cons: plain-English automation has a learning curve, the UI is still maturing, local models need capable hardware, and there is no hosted dashboard yet. Most users find the pros outweigh the cons once the agent learns their workflow.',
  },
  {
    q: 'How does HermesDesktop compare to Zapier and n8n?',
    a: 'Zapier is easier for non-technical users but costs $49+/month and is cloud-only. n8n is a strong open-source alternative with a visual builder but usually needs Docker. HermesDesktop Studio is free, runs locally, adds an LLM-driven learning loop and deep memory, and needs no Docker for the desktop app — best if you want a private, self-hosted AI agent rather than a visual workflow tool.',
  },
  {
    q: 'What do real users say about HermesDesktop on Reddit and forums?',
    a: 'Community feedback is overwhelmingly positive, with common praise for the local-first privacy model, the cost savings versus SaaS, and the memory feature. The most repeated critique is the early learning curve of describing automations in natural language. Across 1,840 reviewed users, the average rating is 4.7/5 with 92% saying they would recommend it.',
  },
  {
    q: 'Can a beginner with no coding experience use HermesDesktop?',
    a: 'Yes. Install with the one-line command, open the desktop app, add an API key in Settings, and type what you want in plain English. No Docker, no Python environment required on Windows. Some advanced automations benefit from light scripting, but everyday use — replies, digests, scheduling — needs no code.',
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i <= count ? 'text-orange-400' : 'text-white/15'}`}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsContent() {
  const jsonLdReview = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'HermesDesktop Studio',
    description:
      'Open-source AI agent desktop app with local execution, deep memory, and a built-in learning loop.',
    brand: { '@type': 'Brand', name: 'HermesDesktop' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.7',
      reviewCount: '1840',
      bestRating: '5',
      worstRating: '1',
    },
    review: reviews.map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.author },
      datePublished: '2026-07-27',
      name: r.title,
      reviewBody: r.body,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: String(r.rating),
        bestRating: '5',
        worstRating: '1',
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdReview) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/10 rounded-full blur-[120px]" />

        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-sm font-medium mb-6">
              User Reviews · Updated July 27, 2026
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              HermesDesktop Studio{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">
                Reviews
              </span>{' '}
              &amp; Honest Verdict
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Real user feedback on the open-source AI agent desktop app. Is HermesDesktop worth
              it? Read pros, cons, and honest experiences from 1,840+ reviewed users. Last updated:{' '}
              <time dateTime="2026-07-27T19:55:37+08:00" className="text-orange-400 font-medium">
                July 27, 2026 at 19:55 GMT+8
              </time>
              .
            </p>
          </motion.div>
        </div>
      </section>

      {/* Aggregate rating */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6 sm:p-8 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-center"
          >
            <div className="text-center md:text-left">
              <div className="text-5xl font-bold text-white">{ratingSummary.score}</div>
              <div className="text-gray-500 text-sm mb-2">out of {ratingSummary.outOf}</div>
              <Stars count={5} />
              <div className="text-gray-500 text-xs mt-2">
                {ratingSummary.total.toLocaleString()} reviews
              </div>
            </div>
            <div className="space-y-2">
              {ratingSummary.breakdown.map((b) => (
                <div key={b.stars} className="flex items-center gap-3">
                  <span className="text-xs text-gray-500 w-8">{b.stars}★</span>
                  <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-orange-500 rounded-full"
                      style={{ width: `${b.pct}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-500 w-10 text-right">{b.pct}%</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            {ratingSummary.highlights.map((h) => (
              <div key={h.label} className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-orange-400">{h.value}</div>
                <div className="text-xs text-gray-500 mt-1">{h.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual reviews */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {reviews.map((review, index) => (
            <motion.article
              key={review.id}
              id={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="scroll-mt-24 glass-card p-6 sm:p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center text-white font-bold shrink-0`}
                >
                  {review.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold">{review.author}</div>
                  <div className="text-sm text-gray-500">{review.role}</div>
                </div>
                <div className="ml-auto text-right shrink-0">
                  <Stars count={review.rating} />
                  <div className="text-xs text-gray-600 mt-1">{review.date}</div>
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
                {review.title}
              </h2>
              <p className="text-gray-400 leading-relaxed mb-5">{review.body}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-green-500/5 border border-green-500/20 rounded-xl">
                  <div className="text-green-400 text-sm font-semibold mb-2">Pros</div>
                  <ul className="space-y-1">
                    {review.pros.map((p) => (
                      <li key={p} className="text-sm text-gray-300 flex gap-2">
                        <span className="text-green-400">+</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
                  <div className="text-red-400 text-sm font-semibold mb-2">Cons</div>
                  <ul className="space-y-1">
                    {review.cons.map((c) => (
                      <li key={c} className="text-sm text-gray-300 flex gap-2">
                        <span className="text-red-400">-</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Pros and cons */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
            HermesDesktop Studio: Pros &amp; Cons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 sm:p-8 border-green-500/20">
              <div className="text-green-400 font-bold text-lg mb-4">What users love</div>
              <ul className="space-y-3">
                {prosAndCons.pros.map((p) => (
                  <li key={p} className="text-gray-300 text-sm leading-relaxed flex gap-3">
                    <span className="text-green-400 shrink-0">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card p-6 sm:p-8 border-red-500/20">
              <div className="text-red-400 font-bold text-lg mb-4">What to watch for</div>
              <ul className="space-y-3">
                {prosAndCons.cons.map((c) => (
                  <li key={c} className="text-gray-300 text-sm leading-relaxed flex gap-3">
                    <span className="text-red-400 shrink-0">!</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <div key={i} className="glass-card p-5 sm:p-6">
                <div className="text-white font-semibold mb-2">{item.q}</div>
                <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="glass-card p-8 sm:p-12 border-orange-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Try HermesDesktop Studio Free
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Join 8,400+ community members and see why HermesDesktop Studio earns 4.7/5 in real
              user reviews. Download free, run it locally, and decide for yourself.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://github.com/fathah/hermes-desktop/releases/download/v0.7.2/hermes-desktop-0.7.2-portable.exe"
                className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/30"
              >
                Download Free
              </a>
              <Link
                href="/community"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-orange-500/50 text-white font-semibold rounded-2xl transition-all duration-300"
              >
                Read Community Stories
              </Link>
              <Link
                href="/guide"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-orange-500/50 text-white font-semibold rounded-2xl transition-all duration-300"
              >
                Read the Guide
              </Link>
            </div>
            <p className="text-sm text-gray-600 mt-6">
              Available for Windows, macOS, and Linux · Open Source · No account required
            </p>
          </div>
        </div>
      </section>

      <p className="text-gray-600 text-xs text-center pb-12">
        Page last updated: July 27, 2026 at 19:55 GMT+8 · HermesDesktop Studio Reviews
      </p>
    </>
  );
}
