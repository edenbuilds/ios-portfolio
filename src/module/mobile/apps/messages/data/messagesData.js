import { OWNER, FEATURED_PROJECTS, OSS_WINS } from "@constants/profile";

const projectList = FEATURED_PROJECTS.map((p, i) => `${i + 1}. ${p.title} — ${p.blurb}`).join(
  "\n\n",
);
const ossList = OSS_WINS.map((w) => `• ${w.name}: ${w.detail}`).join("\n");

export const INITIAL_CONVERSATIONS = [
  {
    id: "omkar",
    name: OWNER.name,
    avatar: "/images/profile.webp",
    avatarColor: "bg-gradient-to-tr from-blue-500 to-indigo-500",
    initials: "O",
    unread: true,
    email: OWNER.email,
    github: OWNER.github,
    messages: [
      {
        id: 1,
        text: `Hey — you're on ${OWNER.name}'s machine. I ship as ${OWNER.studio} (@${OWNER.handle}).`,
        sender: "them",
        time: "10:00 AM",
      },
      {
        id: 2,
        text: "Open Projects from the Dock for write-ups and GitHub links. Or ask here about stack, clients, or OSS.",
        sender: "them",
        time: "10:01 AM",
      },
      {
        id: 3,
        text: `Featured from GitHub:\n\n${projectList}`,
        sender: "them",
        time: "10:01 AM",
      },
    ],
  },
  {
    id: "studio",
    name: "Eden Builds",
    avatar: "/images/profile.webp",
    avatarColor: "bg-gradient-to-tr from-stone-500 to-stone-700",
    initials: "E",
    unread: false,
    email: OWNER.email,
    github: OWNER.github,
    messages: [
      {
        id: 1,
        text: `${OWNER.tagline}`,
        sender: "them",
        time: "Yesterday",
      },
      {
        id: 2,
        text: `Clients: ${OWNER.clients.join(", ")}. Agents: ${OWNER.agents.join(", ")}.`,
        sender: "them",
        time: "Yesterday",
      },
      {
        id: 3,
        text: "Studio rule: scrapers and agents stay review-gated. Never invent authority.",
        sender: "them",
        time: "Yesterday",
      },
    ],
  },
  {
    id: "oss",
    name: "Upstream",
    avatar: "/images/profile.webp",
    avatarColor: "bg-gradient-to-tr from-emerald-500 to-teal-600",
    initials: "U",
    unread: false,
    email: OWNER.email,
    github: OWNER.github,
    messages: [
      {
        id: 1,
        text: `Only upstream merges count.\n\n${ossList}`,
        sender: "them",
        time: "Yesterday",
      },
      {
        id: 2,
        text: `GitHub: ${OWNER.github}`,
        sender: "them",
        time: "Yesterday",
      },
    ],
  },
];
