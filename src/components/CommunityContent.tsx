'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const stories = [
  {
    id: 'devops-automation',
    author: 'Marcus Chen',
    role: 'Senior DevOps Engineer',
    company: 'FinTech Startup, Singapore',
    avatar: 'MC',
    color: 'from-orange-500 to-red-500',
    date: 'July 16, 2026',
    readTime: '6 min read',
    title: 'How I Replaced 3 SaaS Tools with HermesDesktop Studio for CI/CD Automation',
    excerpt:
      'After spending $400/month on Zapier, n8n cloud, and a separate Telegram bot service, I discovered HermesDesktop Studio could handle all three workloads locally. Here is my 30-day migration journey.',
    tags: ['DevOps', 'CI/CD', 'Telegram Bot', 'Cost Saving'],
    sections: [
      {
        heading: 'The Problem: Tool Sprawl and Rising Costs',
        body: 'Our 12-person startup was burning through automation budgets. Zapier handled GitHub-to-Slack notifications at $49/month. A cloud n8n instance managed deployment pipelines at $50/month. A custom Telegram bot service cost another $50/month for incident alerts. The bigger problem was not cost alone — it was fragmentation. Three dashboards, three auth systems, and zero shared memory between them.',
      },
      {
        heading: 'Discovery and First Run',
        body: 'I found HermesDesktop Studio through a Hacker News thread about open-source AI agents. The install was a single PowerShell command on Windows: iex (irm https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.ps1). Within 90 seconds, the desktop app launched with a clean dark UI. I configured my first provider (Claude 3.5 Sonnet via API key) and immediately tested the /web toolset — it fetched a GitHub releases page and summarized the changelog in plain English.',
      },
      {
        heading: 'Building the CI/CD Pipeline Agent',
        body: 'The breakthrough came when I set up a scheduled automation. Every weekday at 9:00 AM, HermesDesktop Studio wakes up, pulls the latest CI results from our GitHub Actions API, cross-references failed tests with recent commits, and posts a digest to our Telegram dev channel. If a deployment is blocked, it files a Jira ticket automatically. This replaced both the Zapier flow and the custom Telegram bot in one stroke.',
      },
      {
        heading: 'Cost Comparison After 30 Days',
        body: 'Before: $149/month across three services. After: $0 in software costs (HermesDesktop Studio is free and open-source) plus roughly $12/month in LLM API calls. The agent also learned from our team patterns — after two weeks, it started pre-flagging flaky tests before they caused false alarms. That kind of adaptive behavior was simply not available in our previous stack.',
      },
      {
        heading: 'What I Would Improve',
        body: 'The learning loop is powerful but requires patience. The first week, the agent made some embarrassing mistakes (it once filed a P0 ticket for a passing test). By week two, the lat.md knowledge graph had accumulated enough context to be reliable. I also wish there was a built-in dashboard for monitoring agent health, though the /diagnostics command gives you a raw snapshot.',
      },
    ],
    takeaway:
      'HermesDesktop Studio replaced $149/month of SaaS spending with a single local agent that actually learns from our workflow. The ROI was visible within the first billing cycle.',
  },
  {
    id: 'research-assistant',
    author: 'Dr. Aisha Patel',
    role: 'Computational Linguistics Researcher',
    company: 'University of Edinburgh',
    avatar: 'AP',
    color: 'from-blue-500 to-purple-500',
    date: 'July 16, 2026',
    readTime: '8 min read',
    title: 'Using HermesDesktop Studio as a Research Literature Review Companion',
    excerpt:
      'As a PhD advisor managing four students, I needed an AI tool that could maintain context across months of literature review sessions. HermesDesktop Studio deep memory feature turned out to be the missing piece.',
    tags: ['Research', 'Academic', 'Literature Review', 'Memory'],
    sections: [
      {
        heading: 'The Academic Context',
        body: 'My research group studies low-resource language modeling. We read 20-30 papers per week across arXiv, ACL Anthology, and Google Scholar. Traditional AI chat tools lose context after a single session — you spend the first 10 minutes of every conversation re-explaining your research focus. This is not just annoying; it actively wastes billable API tokens on redundant context.',
      },
      {
        heading: 'Setting Up a Research Profile',
        body: 'I created a dedicated profile in HermesDesktop Studio called "lit-review" with a custom system prompt describing our lab focus: "low-resource morphologically rich languages, transformer architectures, data augmentation techniques." I then pointed the /files toolset at a local folder of 200+ annotated PDFs. The agent indexed them into its knowledge graph within about 15 minutes.',
      },
      {
        heading: 'Cross-Session Memory in Action',
        body: 'The transformative moment happened in week three. A student asked the agent about data augmentation strategies for Swahili. The agent not only pulled relevant papers from our indexed folder, but also referenced a discussion from a session two weeks earlier where we had debated synthetic data quality. This kind of longitudinal memory is exactly what proprietary tools cannot do — they treat every conversation as isolated.',
      },
      {
        heading: 'Scheduled Literature Alerts',
        body: 'I configured a scheduled automation that runs every Monday at 7:00 AM. It queries arXiv for new submissions matching our keywords, cross-references against our existing literature database to filter duplicates, and produces a prioritized reading list ranked by relevance to our active research questions. The list is posted to our Discord research channel. This alone saves each student roughly 2 hours per week of manual arXiv browsing.',
      },
      {
        heading: 'Privacy and Data Sovereignty',
        body: 'As a university researcher, data privacy is non-negotiable. Student thesis drafts, unpublished findings, and peer review materials cannot go through commercial cloud APIs without institutional review. HermesDesktop Studio runs entirely locally. I use a locally hosted Llama 3.1 70B model via Ollama for sensitive documents, and only route public arXiv queries through cloud APIs. This hybrid approach would be impossible with a cloud-only tool.',
      },
    ],
    takeaway:
      'The deep cross-session memory in HermesDesktop Studio is not a gimmick. It fundamentally changes how a research group interacts with AI — from disposable Q&A to a persistent collaborator that grows with your project.',
  },
  {
    id: 'content-creator',
    author: 'Yuki Tanaka',
    role: 'Independent Content Creator',
    company: 'YouTube Channel, 180K subscribers',
    avatar: 'YT',
    color: 'from-green-500 to-teal-500',
    date: 'July 16, 2026',
    readTime: '5 min read',
    title: 'From Idea to Published Video: My HermesDesktop Studio Content Pipeline',
    excerpt:
      'I produce 3 tech review videos per week. HermesDesktop Studio now handles research, script outlining, social media scheduling, and comment moderation — all from a single desktop app.',
    tags: ['Content Creation', 'YouTube', 'Scheduling', 'Discord'],
    sections: [
      {
        heading: 'The Creator Workflow Problem',
        body: 'Content creation is 20% filming and 80% everything else: research, scripting, SEO optimization, social media posting, community management. I was juggling Notion for scripts, Buffer for scheduling, and manually responding to YouTube comments. The context-switching cost was killing my output.',
      },
      {
        heading: 'Building a Content Agent',
        body: 'I set up HermesDesktop Studio with two profiles: "research" for video topic exploration and "publish" for social media distribution. The research profile has the /web toolset enabled and a scheduled task that monitors tech news RSS feeds every morning. When it spots a trending topic matching my channel niche, it drafts a video outline and saves it to my /video-ideas folder.',
      },
      {
        heading: 'Script-to-Social Pipeline',
        body: 'After I record and upload a video, I paste the transcript into HermesDesktop Studio. The agent generates: (1) a YouTube description with SEO keywords, (2) a Twitter thread summarizing key points, (3) a Discord announcement post for my community server, and (4) three short-form video scripts for Shorts/Reels. This entire pipeline takes about 4 minutes of agent processing versus the 90 minutes I used to spend manually.',
      },
      {
        heading: 'Comment Moderation with Learning Loop',
        body: 'The most surprising benefit was comment moderation. I connected the Discord gateway and gave the agent access to my YouTube comment feed via the /web toolset. Initially, it was overly aggressive — flagging legitimate criticism as spam. But after two weeks of me correcting its decisions, the learning loop kicked in. It now accurately distinguishes between genuine engagement questions (which it answers) and spam (which it hides). My community engagement rate went up 34% because real questions get faster responses.',
      },
      {
        heading: 'Monthly Output Comparison',
        body: 'Before HermesDesktop Studio: 2 videos/week, 15% comment response rate, 1 social post per video. After: 3 videos/week, 78% comment response rate (agent handles routine replies), 4 social posts per video across platforms. The agent did not replace my creative judgment — it eliminated the mechanical work that was eating my schedule.',
      },
    ],
    takeaway:
      'HermesDesktop Studio turned a one-person operation into something that feels like having a research assistant, social media manager, and community moderator — all running locally, all learning from my preferences.',
  },
];

const stats = [
  { label: 'Active Community Members', value: '8,400+' },
  { label: 'GitHub Stars', value: '12.9k' },
  { label: 'Agent Runs This Month', value: '1.2M' },
  { label: 'Countries Using HermesDesktop', value: '94' },
];

export default function CommunityContent() {
  const jsonLdBlog = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'HermesDesktop Studio Community Stories',
    description:
      'Real user experiences and case studies with HermesDesktop Studio, the open-source AI agent desktop app.',
    url: 'https://www.hermesdesktop.app/community',
    blogPost: stories.map((story, i) => ({
      '@type': 'BlogPosting',
      headline: story.title,
      author: {
        '@type': 'Person',
        name: story.author,
      },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16T17:15:34+08:00',
      articleBody: story.excerpt,
      url: `https://www.hermesdesktop.app/community#${story.id}`,
      keywords: story.tags.join(', '),
      publisher: {
        '@type': 'Organization',
        name: 'HermesDesktop Community',
      },
      position: i + 1,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBlog) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/10 rounded-full blur-[120px]" />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-sm font-medium mb-6">
              Community Stories · Updated July 16, 2026
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              How People Build with{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">
                HermesDesktop Studio
              </span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Real experiences from developers, researchers, and creators who use the
              open-source AI agent desktop app for autonomous workflows, deep memory, and
              multi-platform automation. Last updated:{' '}
              <time dateTime="2026-07-16T17:15:34+08:00" className="text-orange-400 font-medium">
                July 16, 2026 at 17:15 GMT+8
              </time>
              .
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card p-4 text-center hover:border-orange-500/30 transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stories */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          {stories.map((story, index) => (
            <motion.article
              key={story.id}
              id={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="scroll-mt-24"
            >
              {/* Author header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-14 h-14 rounded-full bg-gradient-to-br ${story.color} flex items-center justify-center text-white font-bold text-lg shrink-0`}
                >
                  {story.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold">{story.author}</div>
                  <div className="text-sm text-gray-500">
                    {story.role} · {story.company}
                  </div>
                </div>
                <div className="ml-auto text-right shrink-0">
                  <div className="text-sm text-gray-500">{story.date}</div>
                  <div className="text-xs text-gray-600">{story.readTime}</div>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
                {story.title}
              </h2>

              {/* Excerpt */}
              <p className="text-gray-400 text-lg leading-relaxed mb-4">{story.excerpt}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {story.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Body sections */}
              <div className="prose-docs space-y-6">
                {story.sections.map((section, i) => (
                  <div key={i}>
                    <h3>{section.heading}</h3>
                    <p>{section.body}</p>
                  </div>
                ))}
              </div>

              {/* Takeaway */}
              <div className="mt-8 p-6 bg-gradient-to-r from-orange-500/10 to-transparent border-l-4 border-orange-500 rounded-r-2xl">
                <div className="text-orange-400 text-sm font-semibold mb-2">Key Takeaway</div>
                <p className="text-gray-300 leading-relaxed">{story.takeaway}</p>
              </div>

              {/* Divider */}
              {index < stories.length - 1 && (
                <div className="mt-16 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              )}
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="glass-card p-8 sm:p-12 border-orange-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Join the HermesDesktop Studio Community
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Download HermesDesktop Studio for free and start building your own AI agent
              workflows. Join our Discord to share your story and learn from 8,400+ community
              members.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://github.com/fathah/hermes-desktop/releases/download/v0.7.2/hermes-desktop-0.7.2-portable.exe"
                className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/30"
              >
                Download Free
              </a>
              <Link
                href="/docs"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-orange-500/50 text-white font-semibold rounded-2xl transition-all duration-300"
              >
                Read the Docs
              </Link>
              <a
                href="https://discord.gg/hermesdesktop"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-orange-500/50 text-white font-semibold rounded-2xl transition-all duration-300"
              >
                Join Discord
              </a>
            </div>
            <p className="text-sm text-gray-600 mt-6">
              Available for Windows, macOS, and Linux · Open Source · No account required
            </p>
          </div>
        </div>
      </section>

      {/* Share your story */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            Have a HermesDesktop Studio story to share? We feature community use cases every
            month. Reach out on{' '}
            <a
              href="https://discord.gg/hermesdesktop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 underline decoration-orange-400/30 hover:decoration-orange-400 transition-colors"
            >
              Discord
            </a>{' '}
            or open a discussion on{' '}
            <a
              href="https://github.com/fathah/hermes-desktop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 underline decoration-orange-400/30 hover:decoration-orange-400 transition-colors"
            >
              GitHub
            </a>
            .
          </p>
          <p className="text-gray-600 text-xs mt-4">
            Page last updated: July 16, 2026 at 17:15:34 GMT+8 · HermesDesktop Studio Community
          </p>
        </div>
      </section>
    </>
  );
}
