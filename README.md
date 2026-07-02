# Hermes Agent Desktop

An open source AI agent platform with a built-in learning loop. The next-generation agent desktop that creates skills from experience, improves them during use, and builds a deepening model of who you are across sessions.

**Keywords:** `hermesdesktop` | `Hermes Agent Desktop`

## Features

- **Closed Learning Loop** - The only AI agent with a built-in learning loop
- **Lives Where You Do** - Multi-platform support (macOS, Windows, Linux)
- **Deep Memory** - Builds a deepening model of who you are across sessions
- **Scheduled Automations** - Set it and forget it
- **Delegates & Parallelizes** - Sub-agents working in parallel
- **Runs Anywhere** - Local, cloud, or hybrid
- **Any Model, No Lock-in** - Supports all major LLMs
- **14 Toolsets** - Rich tool ecosystem
- **Research-Ready** - Built for serious research workflows

## Tech Stack

- **Framework:** Next.js 14 (App Router) with SSR
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **SEO:** sitemap.xml, robots.txt, JSON-LD structured data, Open Graph, Twitter Cards

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
hermes-next/
├── src/
│   ├── app/              # App Router pages
│   │   ├── about/        # About page
│   │   ├── docs/         # Documentation
│   │   ├── download/     # Download page
│   │   ├── features/     # Features page
│   │   ├── preview/      # Preview page
│   │   ├── layout.tsx    # Root layout with SEO
│   │   ├── page.tsx      # Home page
│   │   ├── robots.ts     # robots.txt
│   │   └── sitemap.ts    # sitemap.xml
│   └── components/       # Reusable components
│       ├── Header.tsx
│       ├── Footer.tsx
│       ├── Hero.tsx
│       ├── Features.tsx
│       ├── SetupSteps.tsx
│       ├── Economy.tsx
│       └── TerminalInstall.tsx
├── public/               # Static assets
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## SEO

This project is optimized for search engines with:

- Server-side rendering (SSR) for instant content delivery
- Comprehensive metadata (title, description, keywords, Open Graph, Twitter Cards)
- JSON-LD structured data (SoftwareApplication schema)
- Auto-generated sitemap.xml
- Auto-generated robots.txt
- Semantic HTML structure
- Mobile-first responsive design

## License

MIT License - Open source and free to use.

## Links

- Website: https://hermesdesktop.org
- GitHub: https://github.com/hermesdesktop
- Discord: https://discord.gg/hermesdesktop
- Twitter: https://twitter.com/hermesdesktop
