import { FEATURED_PROJECTS } from "./profile";

export const projects = FEATURED_PROJECTS.map((project, index) => ({
  id: index + 1,
  title: project.title,
  description: project.blurb,
  image: project.image,
  link: project.url,
  github: project.github,
}));
