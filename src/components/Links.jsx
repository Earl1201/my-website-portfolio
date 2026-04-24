// To update your links, edit src/data/index.js — find the `links` array.

import { links } from '../data';

const S = {
  section: { padding:"100px 48px", maxWidth:1100, margin:"0 auto" },
  label: { fontSize:"0.68rem", letterSpacing:"0.22em", textTransform:"uppercase", color:"var(--text-muted)", marginBottom:48, display:"flex", alignItems:"center", gap:16 },
  linkCard: { padding:"24px 28px", borderBottom:"1px solid var(--border)", display:"flex", justifyContent:"space-between", alignItems:"center", textDecoration:"none" },
  linkCategory: { fontSize:"0.68rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"var(--text-muted)", marginBottom:16, fontWeight:500 },
  linkLabel: { fontFamily:"'Cormorant Garamond',serif", fontSize:"1.15rem", fontWeight:500, color:"var(--text-primary)", marginBottom:3 },
  linkNote: { fontSize:"0.68rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"var(--text-muted)" },
};

export default function Links() {
  return (
    <section id="links" style={S.section}>
      <div style={S.label}>
        Links <span style={{ display:"block", width:40, height:1, background:"var(--text-accent)" }} />
      </div>

      <div className="links-grid">
        {links.map(({ category, items }, ci) => (
          <div key={category} className={`reveal reveal-delay-${ci + 1}`}>
            <div style={S.linkCategory}>{category}</div>
            {items.map(({ label, url, note }) => (
              <a key={label} href={url} target="_blank" rel="noopener noreferrer"
                className="link-card" style={S.linkCard}>
                <div>
                  <div style={S.linkLabel}>{label}</div>
                  <div style={S.linkNote}>{note}</div>
                </div>
                <span style={{ fontSize:"0.85rem", color:"var(--text-accent)", marginLeft:16 }}>→</span>
              </a>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
