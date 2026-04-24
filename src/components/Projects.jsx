import { projects } from '../data';

const S = {
  section: { padding:"100px 48px", maxWidth:1100, margin:"0 auto" },
  label: { fontSize:"0.68rem", letterSpacing:"0.22em", textTransform:"uppercase", color:"var(--text-muted)", marginBottom:48, display:"flex", alignItems:"center", gap:16 },
  tag: { fontSize:"0.62rem", letterSpacing:"0.08em", textTransform:"uppercase", padding:"5px 11px", border:"1px solid var(--border)", color:"var(--text-secondary)", background:"var(--bg-tag)", borderRadius:2 },
};

export default function Projects() {
  return (
    <section id="projects" style={S.section}>
      <div style={S.label}>
        Projects <span style={{ display:"block", width:40, height:1, background:"var(--text-accent)" }} />
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:1, background:"var(--border)" }}>
        {projects.map((p, i) => (
          <div className={`project-card reveal reveal-delay-${i + 1}`} key={i}>
            <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"0.8rem", color:"var(--text-accent)", marginBottom:20 }}>0{i + 1}</div>
            <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.4rem", fontWeight:500, color:"var(--text-primary)", marginBottom:10 }}>{p.title}</div>
            <p style={{ fontSize:"0.85rem", fontWeight:400, color:"var(--text-muted)", lineHeight:1.7, marginBottom:24 }}>{p.desc}</p>
            <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
              {p.tags.map(t => <span key={t} style={S.tag}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
