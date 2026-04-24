
import { useState } from "react";
import emailjs from '@emailjs/browser';

const S = {
  nav: { position:"fixed", top:0, left:0, right:0, zIndex:100, background:"rgba(255,255,255,0.92)", backdropFilter:"blur(12px)", borderBottom:"1px solid #e2dfd9", padding:"0 48px", height:64, display:"flex", alignItems:"center", justifyContent:"space-between" },
  logo: { fontFamily:"'Cormorant Garamond', serif", fontSize:"1.4rem", fontWeight:500, color:"#0e0d0b", textDecoration:"none" },
  navLinks: { display:"flex", gap:36, listStyle:"none" },
  navLink: { fontSize:"0.8rem", letterSpacing:"0.12em", textTransform:"uppercase", color:"#8a8680", textDecoration:"none" },
  section: { padding:"100px 48px", maxWidth:1100, margin:"0 auto" },
  label: { fontSize:"0.7rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"#8a8680", marginBottom:48, display:"flex", alignItems:"center", gap:16 },
  divider: { width:"100%", height:1, background:"#e2dfd9", maxWidth:1100, margin:"0 auto" },
  h1: { fontFamily:"'Cormorant Garamond', serif", fontSize:"clamp(2.8rem, 5vw, 4.5rem)", fontWeight:300, lineHeight:1.1, color:"#0e0d0b" },
  bio: { fontSize:"1rem", fontWeight:300, color:"#1c1a17", lineHeight:1.85, marginBottom:32 },
  tag: { fontSize:"0.65rem", letterSpacing:"0.1em", textTransform:"uppercase", padding:"4px 10px", border:"1px solid #e2dfd9", color:"#8a8680", background:"#eeece9" },
  btn: { fontFamily:"'DM Sans', sans-serif", fontSize:"0.75rem", letterSpacing:"0.18em", textTransform:"uppercase", padding:"14px 32px", background:"#0e0d0b", color:"#fff", border:"none", cursor:"pointer" },
};

const projects = [
  { title:"E-Commerce Platform", desc:"A full-stack shopping experience with cart management, user auth, and payment integration.", tags:["React","Node.js","MongoDB"] },
  { title:"Dashboard UI", desc:"Analytics dashboard with real-time data visualization and responsive layout.", tags:["React","Recharts","TailwindCSS"] },
  { title:"Portfolio CMS", desc:"A CMS for creatives to manage and publish their work online.", tags:["Next.js","Sanity","Vercel"] },
];

const skills = [
  { group:"Frontend", items:[["React / Next.js","Advanced"],["HTML & CSS","Advanced"],["JavaScript","Advanced"],["TailwindCSS","Proficient"]] },
  { group:"Backend",  items:[["Node.js / Express","Proficient"],["REST APIs","Proficient"],["MongoDB","Intermediate"],["PostgreSQL","Intermediate"]] },
];

export default function Portfolio() {
  const [form, setForm] = useState({ name:"", email:"", message:"" });
  const set = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const sendEmail = (e) => {
  e.preventDefault();

  if (!form.name || !form.email || !form.message) {
    alert("Please fill in all fields.");
    return;
  }

  emailjs.send(
    "service_gtshhgc",
    "template_n19pzpb",
    {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
    },
    "iWk-lPetzVnFdwc8O"
  )
  .then(() => {
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  })
  .catch((error) => {
    console.error(error);
    alert("Failed to send message.");
  });
};

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing:border-box; margin:0; padding:0; }
        body { font-family:'DM Sans',sans-serif; background:#fff; color:#1c1a17; }
        html { scroll-behavior:smooth; }
        a:hover { color:#0e0d0b !important; }
        .project-card { background:#fff; padding:36px 32px; transition:background 0.2s; }
        .project-card:hover { background:#f7f6f4; }
        input, textarea { width:100%; font-family:'DM Sans',sans-serif; font-size:0.9rem; font-weight:300; padding:12px 0; border:none; border-bottom:1px solid #e2dfd9; background:transparent; color:#0e0d0b; outline:none; resize:none; }
        input:focus, textarea:focus { border-bottom-color:#0e0d0b; }
      `}</style>

      {/* NAVBAR */}
      <nav style={S.nav}>
        <a href="#about" style={S.logo}>Earl Brian</a>
        <ul style={S.navLinks}>
          {["About","Projects","Skills","Contact"].map(n => (
            <li key={n}><a href={`#${n.toLowerCase()}`} style={S.navLink}>{n}</a></li>
          ))}
        </ul>
      </nav>

      {/* ABOUT */}
      <section id="about" style={{ ...S.section, paddingTop:164 }}>
        <div style={S.label}>About Me <span style={{ display:"block", width:40, height:1, background:"#c8c4bc" }} /></div>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:80, alignItems:"start" }}>
          <h1 style={S.h1}>Web Developer<br /><em style={{ fontStyle:"italic", color:"#8a8680" }}>&amp; Problem Solver</em></h1>
          <div>
            <p style={S.bio}>I'm Earl Brian, a web developer based in the Philippines with a passion for building clean, functional, and user-centered digital experiences. I specialize in turning ideas into well-crafted products.</p>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:20 }}>
              {[["Location","Philippines"],["Availability","Open to Work"],["Focus","Frontend & Fullstack"],["Experience","2+ Years"]].map(([label, val]) => (
                <div key={label}>
                  <div style={{ fontSize:"0.65rem", letterSpacing:"0.18em", textTransform:"uppercase", color:"#8a8680", marginBottom:4 }}>{label}</div>
                  <div style={{ fontSize:"0.9rem", color:"#0e0d0b" }}>{val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div style={S.divider} />

      {/* PROJECTS */}
      <section id="projects" style={S.section}>
        <div style={S.label}>Projects <span style={{ display:"block", width:40, height:1, background:"#c8c4bc" }} /></div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:1, background:"#e2dfd9" }}>
          {projects.map((p, i) => (
            <div className="project-card" key={i}>
              <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"0.8rem", color:"#c8c4bc", marginBottom:20 }}>0{i+1}</div>
              <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.4rem", fontWeight:500, color:"#0e0d0b", marginBottom:12 }}>{p.title}</div>
              <p style={{ fontSize:"0.85rem", fontWeight:300, color:"#8a8680", lineHeight:1.7, marginBottom:24 }}>{p.desc}</p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                {p.tags.map(t => <span key={t} style={S.tag}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div style={S.divider} />

      {/* SKILLS */}
      <section id="skills" style={S.section}>
        <div style={S.label}>Skills <span style={{ display:"block", width:40, height:1, background:"#c8c4bc" }} /></div>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"48px 80px" }}>
          {skills.map(({ group, items }) => (
            <div key={group}>
              <div style={{ fontSize:"0.7rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"#8a8680", marginBottom:20 }}>{group}</div>
              {items.map(([name, level]) => (
                <div key={name} style={{ display:"flex", justifyContent:"space-between", padding:"12px 0", borderBottom:"1px solid #e2dfd9" }}>
                  <span style={{ fontSize:"0.9rem", color:"#0e0d0b" }}>{name}</span>
                  <span style={{ fontSize:"0.7rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#8a8680" }}>{level}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <div style={S.divider} />

      {/* CONTACT */}
<section id="contact" style={S.section}>
  <div style={S.label}>
    Contact <span style={{ display:"block", width:40, height:1, background:"#c8c4bc" }} />
  </div>

  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:80 }}>
    <div>
      <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,3.5vw,3rem)", fontWeight:300, color:"#0e0d0b", lineHeight:1.2, marginBottom:20 }}>
        Let's work<br />together.
      </h2>
      <p style={{ fontSize:"0.9rem", fontWeight:300, color:"#8a8680", lineHeight:1.75 }}>
        Have a project in mind or want to discuss an opportunity? I'd love to hear from you.
      </p>
    </div>

    <form onSubmit={sendEmail} style={{ display:"flex", flexDirection:"column", gap:20 }}>
      {[["name","Name","Your full name"],["email","Email","your@email.com"]].map(([name,label,ph]) => (
        <div key={name}>
          <div style={{ fontSize:"0.65rem", letterSpacing:"0.18em", textTransform:"uppercase", color:"#8a8680", marginBottom:6 }}>
            {label}
          </div>
          <input
            name={name}
            value={form[name]}
            onChange={set}
            placeholder={ph}
          />
        </div>
      ))}

      <div>
        <div style={{ fontSize:"0.65rem", letterSpacing:"0.18em", textTransform:"uppercase", color:"#8a8680", marginBottom:6 }}>
          Message
        </div>
        <textarea
          name="message"
          value={form.message}
          onChange={set}
          rows={5}
          placeholder="Tell me about your project..."
        />
      </div>

      <button type="submit" style={S.btn}>
        Send Message
      </button>
    </form>
  </div>
</section>

      {/* FOOTER */}
<footer style={{ borderTop:"1px solid #e2dfd9", padding:"32px 48px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
  <span style={{ fontSize:"0.75rem", color:"#8a8680" }}>
    © 2026 Earl Brian. All rights reserved.
  </span>

  <div style={{ display:"flex", gap:24 }}>
    <a
      href="https://github.com/Earl1201"
      target="_blank"
      rel="noopener noreferrer"
      style={{ fontSize:"0.7rem", letterSpacing:"0.15em", textTransform:"uppercase", color:"#8a8680", textDecoration:"none" }}
    >
      GitHub
    </a>

    <a
      href="https://linkedin.com/in/earl-brian-baclohan-282a0b3a1/"
      target="_blank"
      rel="noopener noreferrer"
      style={{ fontSize:"0.7rem", letterSpacing:"0.15em", textTransform:"uppercase", color:"#8a8680", textDecoration:"none" }}
    >
      LinkedIn
    </a>

    <a
      href="mailto:earlbrianbaclohan1201@gmail.com"
      style={{ fontSize:"0.7rem", letterSpacing:"0.15em", textTransform:"uppercase", color:"#8a8680", textDecoration:"none" }}
    >
      Email
    </a>
  </div>
</footer>
    </>
  );
}