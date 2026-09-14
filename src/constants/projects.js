import {
  PROJECT_1_URL,
  PROJECT_1_GITHUB,
  PROJECT_2_URL,
  PROJECT_2_GITHUB,
  PROJECT_3_URL,
  PROJECT_3_GITHUB,
  PROJECT_4_URL,
  PROJECT_4_GITHUB,
} from "./env";

export const projects = [
  {
    id: 1,
    title: "SHB Firm Manager",
    description:
      "Legal practice ops for chambers work — matters, diary, hearings, and court scrapers across eCourts, Bombay HC, and MahaRERA/REAT.",
    image: "/projects/shb.webp",
    link: PROJECT_1_URL,
    github: PROJECT_1_GITHUB,
  },
  {
    id: 2,
    title: "Veryfy",
    description:
      "Verification cloud with client and control portals. Supabase, Resend, and AgentMail for review-led workflows.",
    image: "/projects/veryfy.webp",
    link: PROJECT_2_URL,
    github: PROJECT_2_GITHUB,
  },
  {
    id: 3,
    title: "Accord",
    description:
      "MCP gateway and control plane. Explicit policies, bounded execution, and decision receipts.",
    image: "/projects/accord.webp",
    link: PROJECT_3_URL,
    github: PROJECT_3_GITHUB,
  },
  {
    id: 4,
    title: "Blackbox",
    description:
      "Flight recorder for coding agents. Claude Code and Codex transcripts become one append-only event log you can query.",
    image: "/projects/blackbox.webp",
    link: PROJECT_4_URL,
    github: PROJECT_4_GITHUB,
  },
];
