import { PROJECT_1_URL, PROJECT_2_URL, PROJECT_3_URL, PROJECT_4_URL } from "@constants";

export const DEFAULT_BOOKMARKS = [
  {
    id: 1,
    title: "Portfolio",
    url: typeof window !== "undefined" ? window.location.origin : "http://localhost:3000",
    img: "/images/portfolio.webp",
  },
  {
    id: 2,
    title: "SHB Firm Manager",
    url: PROJECT_1_URL,
    img: "/projects/shb.webp",
  },
  {
    id: 3,
    title: "Accord",
    url: PROJECT_3_URL,
    img: "/projects/accord.webp",
  },
  {
    id: 4,
    title: "Veryfy",
    url: PROJECT_2_URL,
    img: "/projects/veryfy.webp",
  },
  {
    id: 5,
    title: "Blackbox",
    url: PROJECT_4_URL,
    img: "/projects/blackbox.webp",
  },
  {
    id: 6,
    title: "OpenStreetMap",
    url: "https://openstreetmap.org",
    img: "/images/openstreetmap.webp",
  },
];
