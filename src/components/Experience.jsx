import { experience } from '../data';

const S = {
  section: { padding:"100px 48px", maxWidth:1100, margin:"0 auto" },
  label:   { fontSize:"0.68rem", letterSpacing:"0.22em", textTransform:"uppercase", color:"var(--text-muted)", marginBottom:48, display:"flex", alignItems:"center", gap:16 },
  row:     { display:"flex", justifyContent:"space-between", alignItems:"flex-start", padding:"24px 0", borderBottom:"1px solid var(--border)" },
  year:    { fontSize:"0.72rem", letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--text-muted)", fontWeight:500, minWidth:100, paddingTop:3 },
  title:   { fontFamily:"'Cormorant Garamond',serif", fontSize:"1.15rem", fontWeight:500, color:"var(--text-primary)", marginBottom:4 },
  sub:     { fontSize:"0.78rem", color:"var(--text-muted)", letterSpacing:"0.04em" },
  dot:     { width:8, height:8, borderRadius:"50%", background:"#22c55e", display:"inline-block", marginRight:8 },
};

export default function Experience() {
  return (
    <section id="experience" style={S.section}>
      <div style={S.label}>
        Experience <span style={{ display:"block", width:40, height:1, background:"var(--text-accent)" }} />
      </div>

      <div>
        {experience.map((e, i) => (
          <div key={i} className={`reveal reveal-delay-${i + 1}`} style={S.row}>
            <div style={S.year}>{e.year}</div>
            <div style={{ flex:1, paddingLeft:32 }}>
              <div style={S.title}>{e.title}</div>
              <div style={S.sub}>
                {e.current && <span style={S.dot} />}
                {e.subtitle}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
