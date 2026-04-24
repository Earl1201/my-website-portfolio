import Formal_Profile from '../assets/Formal_Profile.jpg';

import Formal_Profile_Dark from '../assets/Formal_Profile_DarkMode.jpg';

const S = {
  section: { padding:"164px 48px 100px", maxWidth:1100, margin:"0 auto" },
  label: { fontSize:"0.68rem", letterSpacing:"0.22em", textTransform:"uppercase", color:"var(--text-muted)", marginBottom:48, display:"flex", alignItems:"center", gap:16 },
  profileWrap: { width:220, height:220, borderRadius:"50%", border:"2px solid var(--border)", flexShrink:0, overflow:"hidden", background:"var(--bg-tag)", position:"relative" },
  profileImg: { width:"100%", height:"100%", objectFit:"cover", objectPosition:"center top", display:"block", position:"absolute", top:0, left:0 },
  h1: { fontFamily:"'Cormorant Garamond', serif", fontSize:"clamp(2.8rem, 5vw, 4.5rem)", fontWeight:400, lineHeight:1.08, color:"var(--text-primary)", marginBottom:20 },
  bio: { fontSize:"0.97rem", fontWeight:400, color:"var(--text-secondary)", lineHeight:1.9, marginBottom:32 },
};

export default function About({ dark }) {
  return (
    <section id="about" style={S.section}>
      <div style={S.label}>
        About Me <span style={{ display:"block", width:40, height:1, background:"var(--text-accent)" }} />
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"auto 1fr", gap:64, alignItems:"center" }}>

        {/* Profile photo — crossfades between light and dark mode photos */}
        <div className="reveal" style={S.profileWrap}>
          <img
            src={Formal_Profile}
            style={{ ...S.profileImg, opacity: dark ? 0 : 1, transition:"opacity 0.5s ease" }}
            alt="Earl Brian"
          />
          <img
            src={Formal_Profile_Dark}
            style={{ ...S.profileImg, opacity: dark ? 1 : 0, transition:"opacity 0.5s ease" }}
            alt="Earl Brian"
          />
        </div>

        <div>
          <h1 className="reveal reveal-delay-1" style={S.h1}>
            Web Developer<br />
            <em style={{ fontStyle:"italic", color:"var(--text-muted)", fontWeight:300 }}>&amp; Problem Solver</em>
          </h1>

          <div className="reveal reveal-delay-2">
            <p style={S.bio}>
              I'm Earl Brian, a web developer based in the Philippines with a passion for
              building clean, functional, and user-centered digital experiences. I specialize
              in turning ideas into well-crafted products.
            </p>

            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"16px 32px" }}>
              {[
                ["Location",     "Philippines"],
                ["Availability", "Open to Work"],
                ["Focus",        "Frontend & Fullstack"],
                ["Experience",   "2+ Years"],
              ].map(([lbl, val]) => (
                <div key={lbl}>
                  <div style={{ fontSize:"0.62rem", letterSpacing:"0.18em", textTransform:"uppercase", color:"var(--text-muted)", marginBottom:4, fontWeight:500 }}>{lbl}</div>
                  <div style={{ fontSize:"0.92rem", color:"var(--text-primary)", fontWeight:500 }}>{val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
