import { useState } from 'react';
import { projects } from '../data';

const LIMIT = 3;

const S = {
  section:  { padding:"80px 48px", maxWidth:1100, margin:"0 auto" },
  label:    { fontSize:"0.68rem", letterSpacing:"0.22em", textTransform:"uppercase", color:"var(--text-muted)", marginBottom:32, display:"flex", alignItems:"center", gap:16 },
  title:    { fontFamily:"'Cormorant Garamond',serif", fontSize:"1.25rem", fontWeight:500, color:"var(--text-primary)", marginBottom:8 },
  desc:     { fontSize:"0.83rem", color:"var(--text-muted)", lineHeight:1.7, marginBottom:16 },
  urlBadge: { fontFamily:"monospace", fontSize:"0.7rem", padding:"3px 10px", borderRadius:4, background:"var(--bg-tag)", border:"1px solid var(--border)", color:"var(--text-muted)", display:"inline-block" },
  tag:      { fontSize:"0.62rem", letterSpacing:"0.06em", textTransform:"uppercase", padding:"4px 10px", border:"1px solid var(--border)", color:"var(--text-secondary)", background:"var(--bg-tag)", borderRadius:2 },
  viewAll:  { marginTop:32, display:"flex", justifyContent:"center" },
  btn:      { fontFamily:"'DM Sans',sans-serif", fontSize:"0.75rem", letterSpacing:"0.1em", textTransform:"uppercase", padding:"10px 28px", border:"1px solid var(--border)", background:"transparent", color:"var(--text-secondary)", cursor:"pointer", borderRadius:2 },
};

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, LIMIT);
  const hasMore = projects.length > LIMIT;

  return (
    <section id="projects" style={S.section}>
      <div style={S.label}>
        Recent Projects <span style={{ display:"block", width:40, height:1, background:"var(--text-accent)" }} />
      </div>

      <div className="projects-grid">
        {visible.map((p, i) => (
          <a key={i}
            href={p.url || undefined}
            target={p.url ? "_blank" : undefined}
            rel="noopener noreferrer"
            className={`project-card reveal reveal-delay-${i + 1}`}
            style={{ textDecoration:"none", cursor: p.url ? "pointer" : "default" }}>
            <div style={S.title}>{p.title}</div>
            <p style={S.desc}>{p.desc}</p>
            {p.url && (
              <div style={{ marginBottom:16 }}>
                <span style={S.urlBadge}>{p.url.replace(/^https?:\/\//, '')}</span>
              </div>
            )}
            <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
              {p.tags.map(t => <span key={t} style={S.tag}>{t}</span>)}
            </div>
          </a>
        ))}
      </div>

      {hasMore && (
        <div style={S.viewAll}>
          <button className="btn-hover" style={S.btn} onClick={() => setShowAll(v => !v)}>
            {showAll ? 'Show Less' : 'View All'}
          </button>
        </div>
      )}
    </section>
  );
}
