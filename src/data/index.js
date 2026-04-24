// ─── PROJECTS ────────────────────────────────────────────────────────────────
// Edit this array to update the Projects section.
// Each item: { title, desc, tags[] }
export const projects = [
  {
    title: "E-Commerce Platform",
    desc: "A full-stack shopping experience with cart management, user auth, and payment integration.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Dashboard UI",
    desc: "Analytics dashboard with real-time data visualization and responsive layout.",
    tags: ["React", "Recharts", "TailwindCSS"],
  },
  {
    title: "Portfolio CMS",
    desc: "A CMS for creatives to manage and publish their work online.",
    tags: ["Next.js", "Sanity", "Vercel"],
  },
];

// ─── SKILLS ──────────────────────────────────────────────────────────────────
// Edit this array to update the Skills section.
// Each item: { group, items: [[skillName, level], ...] }
export const skills = [
  {
    group: "Frontend",
    items: [
      ["React / Next.js", "Advanced"],
      ["HTML & CSS", "Advanced"],
      ["JavaScript", "Advanced"],
      ["TailwindCSS", "Proficient"],
    ],
  },
  {
    group: "Backend",
    items: [
      ["Node.js / Express", "Proficient"],
      ["REST APIs", "Proficient"],
      ["MongoDB", "Intermediate"],
      ["PostgreSQL", "Intermediate"],
    ],
  },
];

// ─── LINKS ───────────────────────────────────────────────────────────────────
// Edit this array to update the Links section.
// Each item: { label, url, note }
export const links = [
  {
    category: "Projects",
    items: [
      { label: "E-Commerce Platform", url: "https://your-live-url.com", note: "Live Demo" },
      { label: "Dashboard UI", url: "https://your-live-url.com", note: "Live Demo" },
    ],
  },
  {
    category: "Social",
    items: [
      { label: "GitHub", url: "https://github.com/Earl1201", note: "@Earl1201" },
      { label: "LinkedIn", url: "https://linkedin.com/in/earl-brian-baclohan-282a0b3a1/", note: "Connect" },
    ],
  },
  {
    category: "Certifications",
    items: [
      { label: "Your Cert Name", url: "https://credential-url.com", note: "Issuer · Year" },
    ],
  },
];
