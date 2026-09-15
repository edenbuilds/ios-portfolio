export const OWNER = {
  name: "Omkar",
  handle: "edenbuilds",
  studio: "Eden Builds",
  email: "hello@edenbuilds.dev",
  github: "https://github.com/edenbuilds",
  site: "https://ios.edenbuilds.me",
  location: "India",
  role: "Founder · Eden Builds",
  tagline: "One-person studio shipping production apps, agent infra, and upstream merges.",
  bio: [
    "Omkar builds as Eden Builds — a one-person studio shipping production software for real clients.",
    "Day work: legal practice ops, verification systems, and client sites. Night work: MCP control planes, agent flight recorders, and public tools.",
    "Reputation is earned through upstream open-source merges, not screenshots.",
  ],
  stack: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind",
    "Supabase",
    "Neon / Drizzle",
    "Vercel",
    "Railway",
    "Anthropic MCP",
    "Swift / SwiftUI",
  ],
  clients: ["UDW", "Exceleon", "Chirayu", "Tulip", "Count"],
  agents: ["Blackbox", "Marshall", "Perimeter", "Omni", "Chancery", "Metr"],
};

export const FEATURED_PROJECTS = [
  {
    id: "shb",
    title: "SHB Firm Manager",
    blurb:
      "Legal practice ops for chambers — matters, diary, hearings, documents, and court scrapers across eCourts, Bombay HC, and MahaRERA/REAT.",
    stack: ["Next.js", "Supabase", "Railway", "Python scrapers"],
    url: "https://github.com/edenbuilds/chambers-of-shb",
    github: "https://github.com/edenbuilds/chambers-of-shb",
    image: "/projects/shb.webp",
  },
  {
    id: "veryfy",
    title: "Veryfy",
    blurb:
      "Verification cloud with client and control portals. Review-led workflows on Supabase, Resend, and AgentMail.",
    stack: ["Next.js", "Supabase", "Resend", "AgentMail"],
    url: "https://veryfy.cloud",
    github: "https://github.com/edenbuilds/veryfy",
    image: "/projects/veryfy.webp",
  },
  {
    id: "accord",
    title: "Accord",
    blurb:
      "MCP gateway and control plane. Explicit policies, bounded execution, and decision receipts.",
    stack: ["TypeScript", "MCP", "Next.js", "Vercel"],
    url: "https://mcp.edenbuilds.me",
    github: "https://github.com/edenbuilds/accord",
    image: "/projects/accord.webp",
  },
  {
    id: "blackbox",
    title: "Blackbox",
    blurb:
      "Zero-dependency flight recorder for coding agents. Claude Code and Codex transcripts become one queryable event log.",
    stack: ["JavaScript", "Node.js", "JSONL"],
    url: "https://github.com/edenbuilds/blackbox",
    github: "https://github.com/edenbuilds/blackbox",
    image: "/projects/blackbox.webp",
  },
  {
    id: "agentloop",
    title: "Agentloop",
    blurb:
      "Portable agent harness — council, capped swarm, PEV loops, ship gates, and a craft pack that kills AI slop across Cursor, Claude Code, Codex, Copilot, and Windsurf.",
    stack: ["Shell", "Agent Skills", "Markdown"],
    url: "https://edenbuilds.github.io/agentloop",
    github: "https://github.com/edenbuilds/agentloop",
    image: "/projects/agentloop.webp",
  },
  {
    id: "arya",
    title: "Arya AI",
    blurb:
      "Indian-law drafting helpers with verification gates. Research, drafting, and tribunal workflows without inventing authority.",
    stack: ["Python", "MCP", "Pandoc"],
    url: "https://github.com/edenbuilds/arya-ai",
    github: "https://github.com/edenbuilds/arya-ai",
    image: "/projects/arya.webp",
  },
  {
    id: "bloom",
    title: "Bloom",
    blurb:
      "Raise your hand to open the bloom. On-device camera gesture UI — the feed never leaves the device.",
    stack: ["TypeScript", "Next.js", "On-device vision"],
    url: "https://bloom-gamma-flame.vercel.app",
    github: "https://github.com/edenbuilds/bloom",
    image: "/projects/bloom.webp",
  },
  {
    id: "vikram",
    title: "Vikram Shah Archive",
    blurb:
      "Public reading copy of legal papers with transcription. Archive first, companion ask second — never invent authority.",
    stack: ["TypeScript", "Next.js", "Vercel"],
    url: "https://vikram-shah-archive.vercel.app",
    github: "https://github.com/edenbuilds/vikram-shah-archive",
    image: "/projects/vikram.webp",
  },
  {
    id: "genoffice",
    title: "GenOffice",
    blurb:
      "AI-native office suite for macOS and Windows — word processor, spreadsheet, and presentation with reliable post-tool turns.",
    stack: ["TypeScript", "Electron", "AI tooling"],
    url: "https://github.com/edenbuilds/genoffice",
    github: "https://github.com/edenbuilds/genoffice",
    image: "/projects/genoffice.webp",
  },
  {
    id: "metr",
    title: "Metr",
    blurb:
      "Know your headroom. A calm macOS menu-bar companion for AI usage windows — local, private, no account required.",
    stack: ["Swift", "SwiftUI", "macOS"],
    url: "https://github.com/edenbuilds/metr",
    github: "https://github.com/edenbuilds/metr",
    image: "/projects/metr.webp",
  },
];

export const MORE_GITHUB = [
  {
    name: "Hunk",
    detail: "Review-first terminal diff viewer for agentic coders",
    url: "https://github.com/edenbuilds/hunk",
  },
  {
    name: "Bharat Courts",
    detail: "Programmatic eCourts access — cases, cause lists, PDFs",
    url: "https://github.com/edenbuilds/bharat-courts",
  },
  {
    name: "Touchline",
    detail: "Evidence-led website reconstruction squad",
    url: "https://github.com/edenbuilds/touchline",
  },
  {
    name: "Enzo",
    detail: "Evidence-led product audits and adaptive vision interviews",
    url: "https://github.com/edenbuilds/enzo",
  },
  {
    name: "loop.js",
    detail: "Loop engineering framework — Goal, Rounds, skeptical reader",
    url: "https://github.com/edenbuilds/loop.js",
  },
];

export const OSS_WINS = [
  { name: "Mastra", detail: "Durable cleanup, serialization, workflow error handling" },
  { name: "Hono", detail: "Tree-safe OpenAPI bindings and resumable MCP disconnects" },
  { name: "electron-vite", detail: "Correct Vite 8 transform path for SWC" },
  { name: "GenOffice", detail: "Reliable post-tool turns and X11 window layout" },
  { name: "Bharat Courts", detail: "Cause-list PDF path resolution" },
];
