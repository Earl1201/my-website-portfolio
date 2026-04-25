import {
  Document, Packer, Paragraph, TextRun,
  AlignmentType, BorderStyle, TabStopType,
} from 'docx';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ── Helpers ──────────────────────────────────────────────────────────────────

const FONT     = 'Calibri';
const FONT_SER = 'Garamond';
const COLOR    = '1a1a1a';
const MUTED    = '666666';
const ACCENT   = '1d4ed8';

const hr = () => new Paragraph({
  border: { bottom: { color: 'aaaaaa', size: 6, style: BorderStyle.SINGLE } },
  spacing: { after: 120 },
});

const sectionTitle = (text) => new Paragraph({
  children: [new TextRun({ text: text.toUpperCase(), font: FONT, size: 18, bold: true, color: COLOR, characterSpacing: 40 })],
  spacing: { before: 240, after: 100 },
  border: { bottom: { color: 'cccccc', size: 4, style: BorderStyle.SINGLE } },
});

const entryRow = (left, right) => new Paragraph({
  children: [
    new TextRun({ text: left, font: FONT, size: 20, bold: true, color: COLOR }),
    new TextRun({ text: '\t' + right, font: FONT, size: 18, color: MUTED }),
  ],
  tabStops: [{ type: TabStopType.RIGHT, position: 9000 }],
  spacing: { before: 160, after: 40 },
});

const subLine = (text) => new Paragraph({
  children: [new TextRun({ text, font: FONT, size: 18, italics: true, color: MUTED })],
  spacing: { after: 60 },
});

const bodyText = (text) => new Paragraph({
  children: [new TextRun({ text, font: FONT, size: 19, color: '333333' })],
  spacing: { after: 80 },
  alignment: AlignmentType.JUSTIFIED,
});

const bullet = (text) => new Paragraph({
  children: [new TextRun({ text, font: FONT, size: 19, color: '333333' })],
  bullet: { level: 0 },
  spacing: { after: 60 },
});

const tagLine = (text) => new Paragraph({
  children: [new TextRun({ text, font: 'Courier New', size: 16, color: MUTED })],
  spacing: { after: 100 },
});

// ── Document ─────────────────────────────────────────────────────────────────

const doc = new Document({
  styles: {
    default: {
      document: {
        run: { font: FONT, size: 20, color: COLOR },
        paragraph: { spacing: { line: 276 } },
      },
    },
  },
  sections: [{
    properties: {
      page: {
        margin: { top: 720, bottom: 720, left: 900, right: 900 },
      },
    },
    children: [

      // ── NAME ──
      new Paragraph({
        children: [new TextRun({ text: 'Earl Brian Baclohan', font: FONT_SER, size: 52, bold: false, color: '0a0a0a' })],
        alignment: AlignmentType.LEFT,
        spacing: { after: 60 },
      }),

      // ── TITLE ──
      new Paragraph({
        children: [new TextRun({ text: 'Web Developer  ·  AI-Forward Problem Solver', font: FONT, size: 20, color: MUTED, characterSpacing: 30 })],
        spacing: { after: 100 },
      }),

      // ── CONTACT ROW ──
      new Paragraph({
        children: [
          new TextRun({ text: 'Mandaue City, Cebu, Philippines', font: FONT, size: 18, color: MUTED }),
          new TextRun({ text: '   |   ', font: FONT, size: 18, color: 'bbbbbb' }),
          new TextRun({ text: 'earlbrianbaclohan1201@gmail.com', font: FONT, size: 18, color: ACCENT }),
          new TextRun({ text: '   |   ', font: FONT, size: 18, color: 'bbbbbb' }),
          new TextRun({ text: 'github.com/Earl1201', font: FONT, size: 18, color: ACCENT }),
          new TextRun({ text: '   |   ', font: FONT, size: 18, color: 'bbbbbb' }),
          new TextRun({ text: 'earl1201.github.io/my-website-portfolio', font: FONT, size: 18, color: ACCENT }),
        ],
        spacing: { after: 60 },
      }),

      hr(),

      // ── PROFESSIONAL SUMMARY ──
      sectionTitle('Professional Summary'),
      bodyText(
        'Motivated 3rd-year BS Information Technology student with hands-on experience designing and deploying ' +
        'full-stack web applications. Passionate about the intersection of AI and web development — leveraging ' +
        'large language models and intelligent tooling to build smarter, more impactful digital products. ' +
        'Proven ability to deliver complete projects from concept to production, with a strong eye for clean UI ' +
        'and user-centered design. Currently seeking internship opportunities to apply technical skills in a ' +
        'professional setting.'
      ),

      // ── TECHNICAL SKILLS ──
      sectionTitle('Technical Skills'),
      entryRow('Frontend', ''),
      subLine('React, Next.js, JavaScript (ES6+), HTML5, CSS3, TailwindCSS, Vite'),
      entryRow('Backend', ''),
      subLine('Node.js, Express.js, REST API Design, JWT Authentication'),
      entryRow('Database', ''),
      subLine('MySQL, Railway (cloud hosted)'),
      entryRow('Tools & Platforms', ''),
      subLine('Git, GitHub, Vercel, Render, GitHub Pages, EmailJS, Google Apps Script'),
      entryRow('AI & Productivity', ''),
      subLine('AI-assisted development (Claude, GitHub Copilot), Prompt Engineering'),

      // ── EDUCATION ──
      sectionTitle('Education'),
      entryRow('Bachelor of Science in Information Technology', '2023 – Present'),
      subLine('University of Cebu Lapu-Lapu and Mandaue (UCLM)  ·  Mandaue City, Cebu'),
      bodyText('3rd Year Standing  ·  Working Scholar — Senior High School Department'),

      // ── AWARDS ──
      sectionTitle('Awards & Recognition'),
      entryRow("Dean's Lister — Academic Excellence Award", 'AY 2023–2024'),
      subLine('UCLM College of Computer Studies  ·  Philippine Society of Information Technology Students'),
      entryRow("Dean's Lister — Certificate of Achievement", '1st Sem AY 2024–2025'),
      subLine('UCLM College of Computer Studies'),

      // ── EXPERIENCE ──
      sectionTitle('Experience'),
      entryRow('Working Scholar', '2023 – Present'),
      subLine('UCLM · Senior High School Department  —  Mandaue City, Cebu'),
      bullet('Provided administrative and operational support to the Senior High School Department while maintaining full academic enrollment.'),
      bullet('Developed strong time-management and professional communication skills in a real workplace environment.'),

      // ── PROJECTS ──
      sectionTitle('Projects'),

      entryRow('NeighborHub — Community Marketplace Platform', '2026'),
      subLine('IT-ELEC 2 Capstone Project'),
      bodyText(
        'Full-stack community marketplace where neighbors can buy and sell items, offer services, message each ' +
        'other, and place orders. Features a complete admin dashboard with analytics, real-time notifications, ' +
        'JWT authentication, and image uploads.'
      ),
      tagLine('Stack: React 19 · Node.js · Express · MySQL · TailwindCSS · Vercel · Render'),
      tagLine('Live: neighborhub-theta.vercel.app'),

      entryRow('Satin Fuzz Flora — Business Website', '2026'),
      subLine('Client Project · Local Plant & Flower Shop'),
      bodyText(
        'Designed and launched a full business website for a local plant and flower shop, featuring a product ' +
        'catalog and order management system integrated with Google Apps Script and Microsoft Excel.'
      ),
      tagLine('Stack: HTML · CSS · JavaScript · Google Apps Script · Microsoft Excel'),
      tagLine('Live: satinfuzzflora.store'),

      entryRow('Personal Portfolio Website', '2025'),
      subLine('Self-Initiated Project'),
      bodyText(
        'Designed and built a personal portfolio featuring dark mode, scroll-reveal animations, a functional ' +
        'contact form via EmailJS, and full deployment to GitHub Pages.'
      ),
      tagLine('Stack: React · Vite · CSS · EmailJS · GitHub Pages'),
      tagLine('Live: earl1201.github.io/my-website-portfolio'),

    ],
  }],
});

// ── Write file ────────────────────────────────────────────────────────────────

const outPath = path.join(__dirname, '..', 'public', 'Earl_Brian_Baclohan_Resume.docx');

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync(outPath, buffer);
  console.log('Resume generated at:', outPath);
});
