// ─── PROJECTS ────────────────────────────────────────────────────────────────
// Edit this array to update the Projects section.
// Each item: { title, desc, tags[] }
export const projects = [
  {
    title: "Satin Fuzz Flora",
    desc: "An online business website for a local plant and flower shop, featuring a product catalog and order management.",
    tags: ["Google Apps Script", "HTML", "JavaScript", "CSS", "Microsoft Excel"],
    url: "http://satinfuzzflora.store/",
  },
  {
    title: "Personal Portfolio",
    desc: "This portfolio — built with React and Vite, featuring dark mode, scroll-reveal animations, and a floating message widget. Deployed to GitHub Pages.",
    tags: ["React", "Vite", "CSS", "EmailJS", "GitHub Pages"],
    url: "https://earl1201.github.io/my-website-portfolio/",
  },
];

// ─── SKILLS ──────────────────────────────────────────────────────────────────
// Edit this array to update the Skills section.
// Each item: { group, items: [[skillName, level], ...] }
export const skills = [
  {
    group: "Frontend",
    items: [
      ["React / Next.js", "Intermediate"],
      ["HTML & CSS", "Intermediate"],
      ["JavaScript", "Intermediate"],
      ["TailwindCSS", "Intermediate"],
    ],
  },
  {
    group: "Backend",
    items: [
      ["Node.js / Express", "Intermediate"],
    ],
  },
];

// ─── EXPERIENCE ──────────────────────────────────────────────────────────────
// Edit this array to update the Experience section.
// Each item: { year, title, subtitle, current? }
export const experience = [
  { year: "2026",        title: "Satin Fuzz Flora",              subtitle: "Built & launched business website · Mar 7",          current: false },
  { year: "2023 – now",  title: "BS Information Technology",     subtitle: "University of Cebu Lapu-Lapu and Mandaue (UCLM)",    current: true  },
  { year: "2023 – now",  title: "Working Scholar",               subtitle: "UCLM · Senior High School Department",               current: true  },
  { year: "2023",        title: "Hello World!",                  subtitle: "Wrote my first line of code",                        current: false },
];

// ─── LINKS ───────────────────────────────────────────────────────────────────
// Edit this array to update the Links section.
// Each item: { label, url, note }
export const links = [
  {
    category: "Social",
    items: [
      { label: "GitHub", url: "https://github.com/Earl1201", note: "@Earl1201" },
      { label: "LinkedIn", url: "https://linkedin.com/in/earl-brian-baclohan-282a0b3a1/", note: "Connect" },
      { label: "Facebook", url: "https://www.facebook.com/earl.brian.baclohan.2025", note: "Earl Brian" },
    ],
  },
  {
    category: "Projects",
    items: [
      { label: "Satin Fuzz Flora", url: "http://satinfuzzflora.store/", note: "Business Website" },
    ],
  },
];
