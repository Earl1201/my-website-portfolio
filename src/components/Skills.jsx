import { skills } from '../data';

const S = {
  section: { padding:"100px 48px", maxWidth:1100, margin:"0 auto" },
  label: { fontSize:"0.68rem", letterSpacing:"0.22em", textTransform:"uppercase", color:"var(--text-muted)", marginBottom:48, display:"flex", alignItems:"center", gap:16 },
};

export default function Skills() {
  return (
    <section id="skills" style={S.section}>
      <div style={S.label}>
        Skills <span style={{ display:"block", width:40, height:1, background:"var(--text-accent)" }} />
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"48px 80px" }}>
        {skills.map(({ group, items }, gi) => (
          <div key={group} className={`reveal reveal-delay-${gi + 1}`}>
            <div style={{ fontSize:"0.68rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"var(--text-muted)", marginBottom:20, fontWeight:500 }}>{group}</div>
            {items.map(([name, level]) => (
              <div key={name} style={{ display:"flex", justifyContent:"space-between", padding:"13px 0", borderBottom:"1px solid var(--border)" }}>
                <span style={{ fontSize:"0.92rem", color:"var(--text-secondary)", fontWeight:400 }}>{name}</span>
                <span style={{ fontSize:"0.68rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"var(--text-muted)", fontWeight:500 }}>{level}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
