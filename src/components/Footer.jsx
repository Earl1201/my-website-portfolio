export default function Footer() {
  return (
    <footer style={{ borderTop:"1px solid var(--border)", padding:"32px 48px", display:"flex", justifyContent:"center", alignItems:"center" }}>
      <span style={{ fontSize:"0.75rem", color:"var(--text-muted)" }}>
        © {new Date().getFullYear()} Earl Brian. All rights reserved.
      </span>
    </footer>
  );
}
