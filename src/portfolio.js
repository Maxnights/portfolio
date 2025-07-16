const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "",
  title: "JS.",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Maxim",
  role: "Front-End Developer",
  description:
    "I’m a frontend developer with 3 years of experience in IT. I began with an internship at Samsung SDS, then worked at 1xBet and MTS. From day one, I’ve freelanced—taking projects from concept to launch—and I’m currently also developing my own products.",
  contact: "https://t.me/aracanepower",
  social: {
    linkedin: "https://www.linkedin.com/in/maxim-somow-880370370/",
    github: "https://github.com/Maxnights",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "Timer Overlay App ",
    description:
      "Timer-app to help me track down how much time I spend on coding tasks. Being able to use the app while utilizing my entire screen was a priority that's why I opted for creating an overlay mode that makes the app visible but allows me to click through it. Entering and exiting overlay is done with hotkeys.",
    stack: ["React", "Tailwind CSS", "Electron", "HTML", "CSS"],
    sourceCode: "https://github.com/Maxnights/Electron-React-Timer-Overlay",
  },
  {
    name: "Online cinema",
    description:
      "Adaptive online cinema built with React 18, Vite and Bun. Browse movies, pick seats, grab snacks — all in one streamlined flow.",
    stack: ["JavaScript", "React", "CSS", "HTML"],
    sourceCode: "https://github.com/Maxnights/Cinemate",
    livePreview: "https://cinemate-ashen.vercel.app/",
  },
  {
    name: "Admin panel",
    description:
      "React Admin Panel developed and build with React, TypeScript and React Router. For Styles, is used SCSS.",
    stack: ["React", "TypeScript", "SCSS", "CSS", "HTML"],
    sourceCode: "https://github.com/Maxnights/Master-Admin-Dashboard",
    livePreview: "https://master-admin-dashboard.vercel.app/",
  },
];

const skills = [
  // Ядро
  "JavaScript (ES6+)",
  "TypeScript",
  "React 18/19",
  "Next.js (App Router)",
  "Node.js",

  // Стилизация
  "Tailwind CSS",
  "CSS Modules",
  "PostCSS",
  "SASS/SCSS",

  // UI/UX & библиотеки
  "Radix UI",
  "shadcn/ui",
  "Material UI",
  "Framer Motion",

  // State Management
  "Zustand",
  "Redux Toolkit",
  "React Query",

  // Backend & ORM
  "Prisma ORM",
  "REST API",
  "GraphQL",
  "tRPC",

  // Auth & DevOps
  "Clerk",
  "Auth.js",
  "Docker",
  "CI/CD (GitHub Actions)",

  // Инструменты
  "Git",
  "Bun",
  "Vite",
  "Webpack",

  // Тесты
  "Jest",
  "React Testing Library",
  "Cypress",

  // Базы данных
  "PostgreSQL",
  "MongoDB",

  // Прочее
  "OpenAI API",
  "Stripe / LemonSqueezy",
  "Figma to Code",
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "maxneights@gmail.com",
};

export { header, about, projects, skills, contact };
