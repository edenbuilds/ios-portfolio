import { FEATURED_PROJECTS, MORE_GITHUB, OWNER, OSS_WINS } from "./profile";

const folderPositions = [
  "top-16 left-6",
  "top-40 left-6",
  "top-64 left-6",
  "top-[22rem] left-6",
  "top-16 left-36",
  "top-40 left-36",
  "top-64 left-36",
  "top-[22rem] left-36",
  "top-16 left-66",
  "top-40 left-66",
];

const windowPositions = [
  "top-[5vh] left-5",
  "top-[12vh] left-8",
  "top-[19vh] left-11",
  "top-[26vh] left-14",
  "top-[8vh] left-[28vw]",
  "top-[16vh] left-[30vw]",
  "top-[24vh] left-[32vw]",
  "top-[32vh] left-[34vw]",
  "top-[10vh] left-[48vw]",
  "top-[18vh] left-[50vw]",
];

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: FEATURED_PROJECTS.map((project, index) => ({
    id: 100 + index,
    name: project.title,
    icon: "/images/folder.webp",
    kind: "folder",
    position: folderPositions[index] || "top-16 left-6",
    windowPosition: windowPositions[index] || "top-[5vh] left-5",
    children: [
      {
        id: 1,
        name: `${project.title}.txt`,
        icon: "/images/txt.webp",
        kind: "file",
        fileType: "txt",
        position: "top-5 left-10",
        description: [
          project.blurb,
          `Stack: ${project.stack.join(", ")}.`,
          `Built by ${OWNER.name} (${OWNER.studio}).`,
        ],
      },
      {
        id: 2,
        name: project.url.replace(/^https?:\/\//, "").slice(0, 40),
        icon: "/images/safari.webp",
        kind: "file",
        fileType: "url",
        href: project.url,
        position: "top-10 right-20",
      },
      {
        id: 3,
        name: `${project.id}.png`,
        icon: "/images/image.webp",
        kind: "file",
        fileType: "img",
        position: "top-52 right-80",
        imageUrl: project.image,
        imageMobUrl: project.image,
      },
      {
        id: 4,
        name: "github.com",
        icon: "/images/github.webp",
        kind: "file",
        fileType: "fig",
        href: project.github,
        position: "top-60 right-20",
      },
    ],
  })),
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 4,
      name: "about-omkar.txt",
      icon: "/images/txt.webp",
      kind: "file",
      fileType: "txt",
      position: "top-16 left-8",
      subtitle: `${OWNER.name} · ${OWNER.studio}`,
      description: [
        ...OWNER.bio,
        `Stack: ${OWNER.stack.join(" · ")}.`,
        `Client sites: ${OWNER.clients.join(", ")}. Agent surface: ${OWNER.agents.join(", ")}.`,
        `Upstream wins: ${OSS_WINS.map((w) => w.name).join(", ")}.`,
        `Also on GitHub: ${MORE_GITHUB.map((r) => r.name).join(", ")}.`,
        `GitHub: ${OWNER.github}`,
      ],
    },
    {
      id: 5,
      name: "github.com/edenbuilds",
      icon: "/images/github.webp",
      kind: "file",
      fileType: "fig",
      href: OWNER.github,
      position: "top-40 left-8",
    },
    {
      id: 6,
      name: "more-on-github.txt",
      icon: "/images/txt.webp",
      kind: "file",
      fileType: "txt",
      position: "top-64 left-8",
      subtitle: "More repositories",
      description: MORE_GITHUB.map((r) => `${r.name} — ${r.detail} (${r.url})`),
    },
    {
      id: 7,
      name: "hello@edenbuilds.dev",
      icon: "/images/txt.webp",
      kind: "file",
      fileType: "txt",
      position: "top-[22rem] left-8",
      subtitle: "Contact",
      description: [
        `Email ${OWNER.email}`,
        `Site ${OWNER.site}`,
        "For chambers ops, verification products, MCP control planes, or agent tooling — write directly.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Omkar-Resume.pdf",
      icon: "/images/pdf.webp",
      kind: "file",
      fileType: "pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};
