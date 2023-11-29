import {
  frontend,
  backend,
  IT_Forces,
  tmpl,
  tmpl_two,
  javascript,
  next,
  tailwind,
  html,
  css,
  blog,
  todo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];
export const services = [
  {
    id: "javascript",
    icon: javascript,
    title: "JavaScript",
  },
  {
    id: "frontend",
    icon: frontend,
    title: "React",
  },
  {
    id: "next",
    icon: next,
    title: "Next.js",
  },
  {
    id: "backend",
    icon: backend,
    title: "Node.js",
  },
  {
    id: "html",
    icon: html,
    title: "Html",
  },
  {
    id: "css",
    icon: css,
    title: "Css",
  },

  {
    id: "tailwind ",
    icon: tailwind,
    title: "Tailwind ",
  },
];

const experience = [
  {
    id: "project-1",
    position: "Software engineer",
    name: "IT FORCES",
    date: "2019-2020",
    description: [
      {
        id: "1",
        name: "Developing and maintaining user interfaces for web-based applications and websites ",
      },
      {
        id: "2",
        name: "Wrote clean and maintainable code by following code writing best practices and maintaining code style consistencies",
      },
      {
        id: "3",
        name: "Successfully identified, diagnosed, and fixed website problems, including broken links, typographical errors, and formatting issues",
      },
    ],
    icon: IT_Forces,
    tags: [
      {
        id: "1",
        name: "Javascript",
      },
      { id: "2", name: "Javascript" },
      { id: "3", name: "React" },
      { id: "4", name: "Redux" },
      { id: "5", name: "Tailwind" },
    ],
  },
  {
    id: "project-2",
    position: "Software engineer",
    name: "IT FORCES",
    date: "2019-2020",
    description: [
      {
        id: "1",
        name: "Developing and maintaining user interfaces for web-based applications and websites ",
      },
      {
        id: "2",
        name: "Wrote clean and maintainable code by following code writing best practices and maintaining code style consistencies",
      },
      {
        id: "3",
        name: "Successfully identified, diagnosed, and fixed website problems, including broken links, typographical errors, and formatting issues",
      },
    ],
    icon: IT_Forces,
    tags: [
      {
        id: "1",
        name: "Javascript",
      },
      { id: "2", name: "Javascript" },
      { id: "3", name: "React" },
      { id: "4", name: "Redux" },
      { id: "5", name: "Tailwind" },
    ],
  },
  {
    id: "project-3",
    position: "Software engineer",
    name: "IT FORCES",
    date: "2019-2020",
    description: [
      {
        id: "1",
        name: "Developing and maintaining user interfaces for web-based applications and websites ",
      },
      {
        id: "2",
        name: "Wrote clean and maintainable code by following code writing best practices and maintaining code style consistencies",
      },
      {
        id: "3",
        name: "Successfully identified, diagnosed, and fixed website problems, including broken links, typographical errors, and formatting issues",
      },
    ],
    icon: IT_Forces,
    tags: [
      {
        id: "1",
        name: "Javascript",
      },
      { id: "2", name: "Javascript" },
      { id: "3", name: "React" },
      { id: "4", name: "Redux" },
      { id: "5", name: "Tailwind" },
    ],
  },
];

const projects = [
  {
    id: "1",
    title: "Tmpl fitness",
    icon: tmpl,
  },
  {
    id: "2",
    title: "Blog app",
    icon: blog,
  },
  {
    id: "3",
    title: "To-Do app",
    icon: todo,
  },
];

const imageNames = [
  {
    id: 1,
    name: "TMPL Fitness",
    data: "Some landing page for gym using tailwind and react.",
    images: [{ icon: tmpl }, { icon: tmpl_two }],
    git: "https://github.com/Urnesto/tmpl_fitnes",
    web: "https://tmpl-fitnes-git-main-urnesto.vercel.app/",
  },
  {
    id: 2,
    name: "Blog",
    data: "Blog build using Mern stack.",
    images: [{ icon: blog }],
    git: "https://github.com/Urnesto/Blog-frontend",
  },
  {
    id: 3,
    name: "Todo app",
    data: "Simple Todo app build using react and local server. ",
    images: [{ icon: todo }],
    git: "https://github.com/Urnesto/Todo-app",
  },
];

export { experience, projects, imageNames };
