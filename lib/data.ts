// All portfolio content lives here — edit this file to update the site.

export const site = {
  name: "Faisal Zahoor",
  title: "Full Stack Developer",
  // Change this to your real domain after deploying (used for SEO, sitemap, social cards).
  url: "https://faisalzahoor.vercel.app",
  description:
    "Faisal Zahoor is a Full Stack Developer from Pakistan building scalable web apps, REST APIs and real-time systems with React, Next.js, Node.js, FastAPI, ASP.NET, MongoDB and PostgreSQL. CS student at COMSATS University Islamabad.",
  email: "scientistcomputer2002@gmail.com",
  phoneDisplay: "0318 1982143",
  phoneIntl: "+92-318-1982143",
  whatsapp: "https://wa.me/923181982143",
  github: "https://github.com/faisalzahoor1",
  githubUser: "faisalzahoor1",
  linkedin: "https://www.linkedin.com/in/mfaisalzahoor/",
  instagram: "https://www.instagram.com/faisalzahoor_01/",
  instagramUser: "faisalzahoor_01",
};

export const roles = [
  "Full Stack Developer",
  "MERN Stack Engineer",
  "ASP.NET Developer",
  "FastAPI & Python Dev",
  "Real-time Systems Builder",
  "AI App Developer",
];

export const stats = [
  { value: 13, plus: true, label: "Projects shipped" },
  { value: 3, plus: false, label: "Internships" },
  { value: 6, plus: false, label: "Months industry experience" },
  { value: 20, plus: true, label: "Technologies" },
];

const devicon = (path: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`;

export type Tech = { name: string; icon?: string; glyph?: string; invert?: boolean };
export type SkillGroup = { title: string; symbol: string; accent: string; items: Tech[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    symbol: "⌘",
    accent: "#2563eb",
    items: [
      { name: "JavaScript", icon: devicon("javascript/javascript-original.svg") },
      { name: "Python", icon: devicon("python/python-original.svg") },
      { name: "Java", icon: devicon("java/java-original.svg") },
      { name: "C#", icon: devicon("csharp/csharp-original.svg") },
      { name: "C++", icon: devicon("cplusplus/cplusplus-original.svg") },
    ],
  },
  {
    title: "Frontend",
    symbol: "◐",
    accent: "#0ea5e9",
    items: [
      { name: "React.js", icon: devicon("react/react-original.svg") },
      { name: "Next.js", icon: devicon("nextjs/nextjs-original.svg") },
      { name: "Tailwind CSS", icon: devicon("tailwindcss/tailwindcss-original.svg") },
      { name: "Bootstrap", icon: devicon("bootstrap/bootstrap-original.svg") },
      { name: "HTML5", icon: devicon("html5/html5-original.svg") },
      { name: "CSS3", icon: devicon("css3/css3-original.svg") },
    ],
  },
  {
    title: "Backend",
    symbol: "⚙",
    accent: "#1d4ed8",
    items: [
      { name: "Node.js", icon: devicon("nodejs/nodejs-original.svg") },
      { name: "Express.js", icon: devicon("express/express-original.svg") },
      { name: "FastAPI", icon: devicon("fastapi/fastapi-original.svg") },
      { name: "ASP.NET", icon: devicon("dot-net/dot-net-original.svg") },
      { name: "Socket.io", icon: devicon("socketio/socketio-original.svg") },
      { name: "Streamlit", icon: devicon("streamlit/streamlit-original.svg") },
    ],
  },
  {
    title: "Databases & AI",
    symbol: "◈",
    accent: "#3b82f6",
    items: [
      { name: "MongoDB", icon: devicon("mongodb/mongodb-original.svg") },
      { name: "PostgreSQL", icon: devicon("postgresql/postgresql-original.svg") },
      { name: "SQLite", icon: devicon("sqlite/sqlite-original.svg") },
      { name: "Redis", icon: devicon("redis/redis-original.svg") },
      { name: "LangChain", glyph: "🦜" },
      { name: "LangGraph", glyph: "🕸️" },
    ],
  },
];

export const practices = [
  "RESTful API Design", "MVC", "Modular Monolith", "Microservices", "JWT Auth",
  "Real-time / WebSockets", "Git & GitHub", "Cloudinary", "Vercel", "OOP & DSA",
];

export const marquee = [
  "React.js", "Next.js", "Node.js", "Express.js", "FastAPI", "ASP.NET",
  "Socket.io", "MongoDB", "PostgreSQL", "LangGraph", "Tailwind CSS",
];

export type Job = { role: string; company: string; duration: string; logo: string; colors: [string, string]; summary: string; tags: string[] };

export const experience: Job[] = [
  {
    role: "ASP.NET Developer Intern",
    company: "Mobilink",
    duration: "3 months",
    logo: "M",
    colors: ["#1e3a8a", "#2563eb"],
    summary:
      "Worked on enterprise backend systems with ASP.NET and C# — building and maintaining APIs, business logic and database-driven modules in a production codebase.",
    tags: ["ASP.NET", "C#", "REST APIs", "SQL"],
  },
  {
    role: "Full Stack Developer Intern",
    company: "COMSATS University Islamabad",
    duration: "2 months",
    logo: "C",
    colors: ["#2563eb", "#0ea5e9"],
    summary:
      "Developed full stack features end-to-end — responsive React frontends wired to Node.js / FastAPI services with MongoDB, including authentication and role-based access.",
    tags: ["React.js", "Node.js", "FastAPI", "MongoDB"],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Developer Hub",
    duration: "1 month",
    logo: "D",
    colors: ["#1d4ed8", "#60a5fa"],
    summary:
      "Built and shipped full stack tasks using the MERN stack — REST APIs with Express, MongoDB data models and React UIs, following clean code and Git workflows.",
    tags: ["MERN", "Express.js", "REST", "Git"],
  },
];

export type Category = "fullstack" | "ai" | "frontend" | "java";
export type Project = {
  title: string;
  repo: string;
  image: string;
  alt: string;
  description: string;
  tags: string[];
  categories: Category[];
  flag?: string;
};

const gh = (repo: string) => `https://github.com/faisalzahoor1/${repo}`;

export const projects: Project[] = [
  {
    title: "News Mirror",
    repo: gh("NewsMirror_fyp"),
    image: "/assets/projects/newsmirror.svg",
    alt: "News Mirror — AI news analysis dashboard",
    description:
      "An intelligent news platform that aggregates articles from multiple sources, categorises them, and uses custom-trained ML models to detect bias, analyse sentiment and flag fake news — plus an AI chatbot and community discussions.",
    tags: ["Machine Learning", "NLP", "AI Chatbot", "Full Stack"],
    categories: ["fullstack", "ai"],
    flag: "Final Year Project",
  },
  {
    title: "Alumni Portal",
    repo: gh("Alumni_Portal"),
    image: "/assets/projects/alumni.svg",
    alt: "Alumni Portal — community feed and admin dashboard",
    description:
      "A platform connecting students, alumni, industry partners and admins — job posts, mentorship, messaging and moderation. Three apps (main portal, admin portal, API) with OTP sign-up, JWT + refresh tokens and role-based access.",
    tags: ["Next.js", "FastAPI", "MongoDB", "Redis", "JWT", "Cloudinary"],
    categories: ["fullstack"],
    flag: "Featured",
  },
  {
    title: "Doctor Appointment System",
    repo: gh("Doctor-Appointment-Booking-System"),
    image: "/assets/projects/doctor.svg",
    alt: "Doctor Appointment System — booking page with doctor cards",
    description:
      "A healthcare booking platform with a patient app, admin panel and doctor dashboard. Patients find doctors by speciality and book slots; admins manage doctors; includes secure auth, image uploads and online payments.",
    tags: ["React 19", "Tailwind", "Node.js", "Express", "MongoDB", "JWT", "Razorpay"],
    categories: ["fullstack"],
  },
  {
    title: "Persistent Chatbot",
    repo: gh("Persistant_chatbot"),
    image: "/assets/projects/chatbot.svg",
    alt: "Persistent Chatbot — ChatGPT-style UI with LangGraph flow",
    description:
      "A ChatGPT-style chatbot that streams replies token-by-token, supports multiple conversation threads and remembers every chat across restarts using LangGraph checkpointers backed by SQLite.",
    tags: ["Python", "LangGraph", "Gemini", "Streamlit", "SQLite"],
    categories: ["ai"],
  },
  {
    title: "Chat App using Socket.io",
    repo: gh("Chat-App-Using-Socket.io-"),
    image: "/assets/projects/chat.svg",
    alt: "Real-time chat app built with Socket.io",
    description:
      "A real-time messaging app with instant delivery over WebSockets. Messages are persisted in SQLite so history survives reloads, and the server uses the Socket.io cluster adapter to scale across cores.",
    tags: ["Node.js", "Express 5", "Socket.io", "SQLite"],
    categories: ["fullstack"],
  },
  {
    title: "Kickstarter",
    repo: gh("KickStarter"),
    image: "/assets/projects/kickstarter.svg",
    alt: "Kickstarter crowdfunding campaign page",
    description:
      "A crowdfunding platform backend modelled on Kickstarter, with separate route modules for creators, investors and visitors — campaign discovery, funding, portfolios, payments and favourites.",
    tags: ["Node.js", "Express", "REST API", "Modular Routing"],
    categories: ["fullstack"],
  },
  {
    title: "Quora Posts",
    repo: gh("Quora_Posts"),
    image: "/assets/projects/quora.svg",
    alt: "Quora Posts — CRUD posts app",
    description:
      "A Quora-style posting app demonstrating full RESTful CRUD — create, view, edit and delete posts with server-rendered EJS views, UUIDs and method-override for PATCH/DELETE.",
    tags: ["Node.js", "Express", "EJS", "REST"],
    categories: ["fullstack"],
  },
  {
    title: "Restaurant Management System",
    repo: gh("RestaurantManagement"),
    image: "/assets/projects/restaurant.svg",
    alt: "Restaurant Management System — menu and order screen",
    description:
      "A management system for restaurants that handles the menu, table orders and billing — staff can add dishes to an order and generate the total in one place.",
    tags: ["Management System", "CRUD", "Billing"],
    categories: ["fullstack"],
  },
  {
    title: "Spotify Clone",
    repo: gh("Spotify-clone"),
    image: "/assets/projects/spotify.jpg",
    alt: "Spotify Clone screenshot",
    description:
      "A Spotify-inspired web music player with a library sidebar, playlists loaded from folders, and working play / pause / next / previous controls with a seekable progress bar.",
    tags: ["HTML", "CSS", "JavaScript", "Audio API"],
    categories: ["frontend"],
  },
  {
    title: "Netflix Clone",
    repo: gh("Netflix-clone"),
    image: "/assets/projects/netflix.jpg",
    alt: "Netflix Clone landing page screenshot",
    description:
      "A pixel-faithful recreation of the Netflix landing page — hero with email sign-up, feature sections with embedded video, and a responsive layout built purely with HTML and CSS.",
    tags: ["HTML5", "CSS3", "Responsive"],
    categories: ["frontend"],
  },
  {
    title: "Tic Tac Toe",
    repo: gh("TIC-TAC-TOE"),
    image: "/assets/projects/tictactoe.jpg",
    alt: "Tic Tac Toe game screenshot",
    description:
      "A two-player Tic-Tac-Toe game with win detection across rows, columns and diagonals, a winner announcement and a reset button — written in vanilla JavaScript.",
    tags: ["HTML", "CSS", "JavaScript", "DOM"],
    categories: ["frontend"],
  },
  {
    title: "Car Rental System",
    repo: gh("CarRentalSystem"),
    image: "/assets/projects/carrental.svg",
    alt: "Car Rental System console application",
    description:
      "An object-oriented Java rental system with customer and admin portals — view, rent and return cars, admin add/delete with credential validation, and a complaint portal that saves to file.",
    tags: ["Java", "OOP", "File I/O", "Validation"],
    categories: ["java"],
  },
  {
    title: "Sudoku Validity Checker",
    repo: gh("Sudoku-Validity-Checker"),
    image: "/assets/projects/sudoku.svg",
    alt: "Sudoku Validity Checker solved grid",
    description:
      "A Java program that validates and solves 9×9 Sudoku puzzles using recursive backtracking — checking each row, column and 3×3 box before placing a number.",
    tags: ["Java", "Backtracking", "Recursion", "Algorithms"],
    categories: ["java"],
  },
];

export const filters: { id: "all" | Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "fullstack", label: "Full Stack" },
  { id: "ai", label: "AI / ML" },
  { id: "frontend", label: "Frontend" },
  { id: "java", label: "Java" },
];

export const education = {
  degree: "BS Computer Science",
  school: "COMSATS University Islamabad",
  years: "2023 — 2027",
  details:
    "Core coursework in Data Structures & Algorithms, OOP, Databases, Web Technologies, Software Engineering, Operating Systems and Artificial Intelligence.",
  fyp: "News Mirror",
};

export type Certification = { name: string; issuer: string; date: string; url?: string };

// Add your LinkedIn certifications here — the section appears automatically once this list has items.
// Example: { name: "Meta Front-End Developer", issuer: "Coursera", date: "Issued Mar 2025", url: "https://..." },
export const certifications: Certification[] = [];
