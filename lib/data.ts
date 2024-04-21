
import olomd_ss from "@/public/OLOMD_SS.png";
import auto_login from "@/public/auto_login.png";
import flashzoom from "@/public/flashzoom.png"
import shramikaya from "@/public/shramikaya.png"
import sharebook from "@/public/sharebook.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const educationData = [
  {
    title: "Bachelor of Information and Communication Technology (Hons)",
    location: "University of Sri Jayewardenepura",
    description:
      "Currently, I'm a third-year student. I have successfully completed my first two years with a good GPA level.",
    image: "/usjp.png", // Path to your image
    date: "2022 - Present",
  },
  {
    title: "G.C.E Advanced Level Examination",
    location: "G/Batemulla National School",
    description:
      "I faced my G.C.E. A/L exam in the Technology stream. I got three 'B' passes for Science for Technology, Engineering Technology, and Information and Communication Technology. My district rank was 18.",
    image: "/bns.png", // Path to your image (replace with your filename)
    date: "2019",
  },
  {
    title: "G.C.E Ordinary Level Examination",
    location: "G/Manavila Upananda National School",
    description:
      "I got 4 'A' passes for mathematics, ICT, music, and Buddhism and 4 'B' passes for Science, Business & Accounting Studies, Sinhala Lan & Lit and History and One 'C' pass for English.",
    image: "/ucg.png", // Path to your image (replace with your filename)
    date: "2016",
  },
] as const;

export const projectsData = [
  {
    title: "Open Link On My Devices",
    description:
      "An Android application that can share any URL to selected Desktop PCs or Laptops.",
    tags: ["Kotlin", "Firebase", "NoSQL", "NW.JS", "JavaScript"],
    imageUrl: olomd_ss,
    demoUrl: "https://youtu.be/FAmi1aSF7fo?si=slC5-iELuPrTmvDp",
    sourceCodeUrl: "https://github.com/PrabodaSankalpa/open-link-on-my-devices",
  },
  {
    title: "USJP LMS AutoLogin",
    description:
      "Using this extension, you can login to your LMS account without always entering a username or password!",
    tags: ["JavaScript", "HTML", "CSS"],
    imageUrl: auto_login,
    demoUrl: "https://youtu.be/sXpiDFMt6Hs?si=qEGqvTvAuAVVkIui",
    sourceCodeUrl: "https://github.com/PrabodaSankalpa/USJP-LMS-Autologin",
  },
  {
    title: "FlashZoom",
    description:
      "This is a web-based platform that allows lectures and students to manage their 'online video sessions' in one place.",
    tags: ["PHP", "JavaScript", "HTML", "CSS"],
    imageUrl: flashzoom,
    demoUrl: "https://flashzoom.sankalpa.dev/",
    sourceCodeUrl: "https://github.com/PrabodaSankalpa/FlashZoom",
  },
  {
    title: "Shramikaya App",
    description:
      "An Android app that allows microworkers to sell their services by publishing gigs, and users can directly contact the sellers via the app.",
    tags: ["Flutter", "Firebase"],
    imageUrl: shramikaya,
    demoUrl: "https://github.com/PrabodaSankalpa/shramikaya",
    sourceCodeUrl: "https://github.com/PrabodaSankalpa/shramikaya",
  },
  {
    title: "ShareBook",
    description:
      "This is a web-based platform that allows users to exchange books they have with other users. They can add reviews as well.",
    tags: ["React", "MUI", "Firebase", "MERN"],
    imageUrl: sharebook,
    demoUrl: "https://github.com/PrabodaSankalpa/sharebook",
    sourceCodeUrl: "https://github.com/PrabodaSankalpa/sharebook",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Express",
  "Python",
  "Django",
  "Docker",
  "Cloud",
  "Linux",
] as const;
