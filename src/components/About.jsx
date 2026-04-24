import Formal_Profile     from '../assets/Formal_Profile.jpg';
import Formal_Profile_Dark from '../assets/Formal_Profile_DarkMode.jpg';
import { skills, experience } from '../data';

const S = {
  section:    { padding:"120px 48px 80px", maxWidth:1100, margin:"0 auto" },
  name:       { fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:500, color:"var(--text-primary)", lineHeight:1.1, marginBottom:6 },
  subtitle:   { fontSize:"0.95rem", color:"var(--text-muted)", marginBottom:4 },
  location:   { fontSize:"0.78rem", letterSpacing:"0.08em", color:"var(--text-muted)", marginBottom:20 },
  profileWrap:{ width:120, height:120, borderRadius:"50%", border:"2px solid var(--border)", flexShrink:0, overflow:"hidden", position:"relative" },
  profileImg: { width:"100%", height:"100%", objectFit:"cover", objectPosition:"center top", position:"absolute", top:0, left:0 },
  sectionHead:{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.3rem", fontWeight:500, color:"var(--text-primary)", marginBottom:16 },
  bio:        { fontSize:"0.9rem", color:"var(--text-secondary)", lineHeight:1.85, marginBottom:32 },
  groupLabel: { fontSize:"0.65rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"var(--text-muted)", fontWeight:500, marginBottom:10 },
  expYear:    { fontSize:"0.68rem", letterSpacing:"0.12em", textTransform:"uppercase", color:"var(--text-muted)", fontWeight:500, minWidth:90, paddingTop:2, flexShrink:0 },
  expTitle:   { fontFamily:"'Cormorant Garamond',serif", fontSize:"1rem", fontWeight:500, color:"var(--text-primary)", marginBottom:2 },
  expSub:     { fontSize:"0.75rem", color:"var(--text-muted)" },
  dot:        { width:7, height:7, borderRadius:"50%", background:"#22c55e", display:"inline-block", marginRight:7, flexShrink:0 },
};

export default function About({ dark }) {
  return (
    <section id="about" style={S.section}>

      {/* ── Hero ── */}
      <div className="hero-wrap reveal">
        <div style={S.profileWrap}>
          <img src={Formal_Profile}
            style={{ ...S.profileImg, opacity: dark ? 0 : 1, transition:"opacity 0.5s ease" }}
            alt="Earl Brian Baclohan" />
          <img src={Formal_Profile_Dark}
            style={{ ...S.profileImg, opacity: dark ? 1 : 0, transition:"opacity 0.5s ease" }}
            alt="" aria-hidden="true" />
        </div>

        <div>
          <div style={S.name}>Earl Brian Baclohan</div>
          <div style={S.subtitle}>Web Developer &amp; Problem Solver</div>
          <div style={S.location}>
            <span aria-hidden="true">📍</span> Mandaue City, Cebu, Philippines
          </div>
          <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
            {[
              ["GitHub",   "https://github.com/Earl1201"],
              ["LinkedIn", "https://linkedin.com/in/earl-brian-baclohan-282a0b3a1/"],
              ["Facebook", "https://www.facebook.com/earl.brian.baclohan.2025"],
              ["Email",    "https://mail.google.com/mail/?view=cm&to=Earlbrianbaclohan1201@gmail.com"],
            ].map(([label, href]) => (
              <a key={label} href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="action-btn btn-hover">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Two-column body ── */}
      <div className="about-body">

        {/* Left: About + Tech Stack */}
        <div className="reveal reveal-delay-1">
          <div style={S.sectionHead}>About</div>
          <p style={S.bio}>
            I'm Earl Brian, a 3rd year BSIT student based in the Philippines with a passion for
            building clean, functional, and user-centered digital experiences. I enjoy turning
            ideas into well-crafted web products and am currently open to internship opportunities
            and freelance projects.
          </p>

          <div style={S.sectionHead}>Tech Stack</div>
          {skills.map(({ group, items }) => (
            <div key={group} style={{ marginBottom:20 }}>
              <div style={S.groupLabel}>{group}</div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                {items.map(([name]) => (
                  <span key={name} className="skill-chip">{name}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right: Experience */}
        <div className="reveal reveal-delay-2">
          <div style={S.sectionHead}>Experience</div>
          {experience.map((e, i) => (
            <div key={i} style={{ display:"flex", gap:16, padding:"18px 0", borderBottom:"1px solid var(--border)", alignItems:"flex-start" }}>
              <div style={S.expYear}>{e.year}</div>
              <div>
                <div style={S.expTitle}>{e.title}</div>
                <div style={{ ...S.expSub, display:"flex", alignItems:"center" }}>
                  {e.current && <span style={S.dot} aria-hidden="true" />}
                  {e.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
