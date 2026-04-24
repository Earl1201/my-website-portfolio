import { useState } from 'react';
import emailjs from '@emailjs/browser';

const S = {
  section: { padding:"100px 48px", maxWidth:1100, margin:"0 auto" },
  label: { fontSize:"0.68rem", letterSpacing:"0.22em", textTransform:"uppercase", color:"var(--text-muted)", marginBottom:48, display:"flex", alignItems:"center", gap:16 },
  btn: { fontFamily:"'DM Sans', sans-serif", fontSize:"0.75rem", letterSpacing:"0.16em", textTransform:"uppercase", padding:"14px 32px", background:"var(--btn-bg)", color:"var(--btn-text)", border:"none", cursor:"pointer", borderRadius:2 },
};

export default function Contact() {
  const [form, setForm] = useState({ name:"", email:"", message:"" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const set = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const sendEmail = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all fields.");
      return;
    }
    setSending(true);
    emailjs.send(
      "service_gtshhgc",
      "template_n19pzpb",
      { from_name: form.name, from_email: form.email, message: form.message },
      "iWk-lPetzVnFdwc8O"
    )
    .then(() => {
      setSent(true);
      setSending(false);
      setForm({ name:"", email:"", message:"" });
    })
    .catch((err) => {
      setSending(false);
      console.error(err);
      alert("Message failed to send. You can reach me directly at Earlbrianbaclohan1201@gmail.com");
    });
  };

  return (
    <section id="contact" style={S.section}>
      <div style={S.label}>
        Contact <span style={{ display:"block", width:40, height:1, background:"var(--text-accent)" }} />
      </div>

      <div className="contact-grid">
        <div className="reveal">
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,3.5vw,3rem)", fontWeight:400, color:"var(--text-primary)", lineHeight:1.15, marginBottom:20 }}>
            Let's work<br />together.
          </h2>
          <p style={{ fontSize:"0.92rem", fontWeight:400, color:"var(--text-muted)", lineHeight:1.8, marginBottom:28 }}>
            Have a project in mind or want to discuss an opportunity? I'd love to hear from you.
          </p>
        </div>

        {sent ? (
          <div className="reveal reveal-delay-1" style={{ display:"flex", flexDirection:"column", justifyContent:"center", gap:8 }}>
            <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.5rem", fontWeight:400, color:"var(--text-primary)" }}>Message sent!</div>
            <p style={{ fontSize:"0.88rem", color:"var(--text-muted)", lineHeight:1.7 }}>Thanks for reaching out. I'll get back to you as soon as I can.</p>
            <button onClick={() => setSent(false)} style={{ ...S.btn, marginTop:8, alignSelf:"flex-start" }}>Send another</button>
          </div>
        ) : (
          <form className="reveal reveal-delay-1" onSubmit={sendEmail} style={{ display:"flex", flexDirection:"column", gap:20 }}>
            {[["name","Name","Your full name"],["email","Email","Earlbrianbaclohan1201@gmail.com"]].map(([name,label,ph]) => (
              <div key={name}>
                <div style={{ fontSize:"0.62rem", letterSpacing:"0.18em", textTransform:"uppercase", color:"var(--text-muted)", marginBottom:6, fontWeight:500 }}>{label}</div>
                <input name={name} value={form[name]} onChange={set} placeholder={ph} />
              </div>
            ))}
            <div>
              <div style={{ fontSize:"0.62rem", letterSpacing:"0.18em", textTransform:"uppercase", color:"var(--text-muted)", marginBottom:6, fontWeight:500 }}>Message</div>
              <textarea name="message" value={form.message} onChange={set} rows={5} placeholder="Tell me about your project or opportunity..." />
            </div>
            <button type="submit" className="btn-hover" style={S.btn} disabled={sending}>
              {sending ? "Sending…" : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
