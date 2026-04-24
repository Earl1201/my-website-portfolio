const S = {
  nav: { position:"fixed", top:0, left:0, right:0, zIndex:100, background:"var(--bg-nav)", backdropFilter:"blur(16px)", borderBottom:"1px solid var(--border)", padding:"0 48px", height:64, display:"flex", alignItems:"center", justifyContent:"space-between" },
  logo: { fontFamily:"'Cormorant Garamond', serif", fontSize:"1.4rem", fontWeight:600, color:"var(--text-primary)", textDecoration:"none" },
  navLinks: { display:"flex", gap:36, listStyle:"none" },
  navLink: { fontSize:"0.78rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"var(--text-muted)", textDecoration:"none", fontWeight:400 },
  themeToggle: { fontFamily:"'DM Sans',sans-serif", fontSize:"0.68rem", letterSpacing:"0.14em", textTransform:"uppercase", background:"none", border:"1px solid var(--border)", color:"var(--text-muted)", padding:"6px 14px", cursor:"pointer", borderRadius:2 },
};

export default function Navbar({ dark, setDark }) {
  return (
    <nav style={S.nav}>
      <a href="#about" style={S.logo}>Earl Brian</a>
      <div style={{ display:"flex", alignItems:"center", gap:24 }}>
        <ul style={S.navLinks}>
          {["About","Projects","Skills","Links","Contact"].map(n => (
            <li key={n}><a href={`#${n.toLowerCase()}`} style={S.navLink}>{n}</a></li>
          ))}
        </ul>
        <button className="btn-hover" style={S.themeToggle} onClick={() => setDark(d => !d)}>
          {dark ? "Light" : "Dark"}
        </button>
      </div>
    </nav>
  );
}
