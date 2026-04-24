export default function Footer() {
  return (
    <footer style={{ borderTop:"1px solid var(--border)", padding:"32px 48px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
      <span style={{ fontSize:"0.75rem", color:"var(--text-muted)" }}>
        © 2026 Earl Brian. All rights reserved.
      </span>
      <div style={{ display:"flex", gap:24 }}>
        {[
          ["GitHub",   "https://github.com/Earl1201"],
          ["LinkedIn", "https://linkedin.com/in/earl-brian-baclohan-282a0b3a1/"],
          ["Email",    "mailto:earlbrianbaclohan1201@gmail.com"],
        ].map(([label, href]) => (
          <a key={label}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            style={{ fontSize:"0.7rem", letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--text-muted)", textDecoration:"none" }}>
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}
