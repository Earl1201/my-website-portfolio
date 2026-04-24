import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Formal_Profile from '../assets/Formal_Profile.jpg';

const S = {
  chatFloat: { position:"fixed", bottom:24, right:24, zIndex:300, display:"flex", flexDirection:"column", alignItems:"flex-end", gap:12 },
  chatModal: { width:320, background:"var(--bg-card)", border:"1px solid var(--border)", borderRadius:12, overflow:"hidden", boxShadow:"0 8px 32px rgba(0,0,0,0.12)" },
  chatHeader: { padding:"14px 16px", borderBottom:"1px solid var(--border)", display:"flex", alignItems:"center", gap:12 },
  chatAvatar: { width:38, height:38, borderRadius:"50%", objectFit:"cover", objectPosition:"center top", flexShrink:0 },
  chatName: { fontFamily:"'DM Sans',sans-serif", fontSize:"0.88rem", fontWeight:600, color:"var(--text-primary)" },
  chatStatus: { fontSize:"0.72rem", color:"#22c55e", fontWeight:500 },
  chatBody: { padding:"16px", minHeight:80 },
  chatBubble: { background:"var(--bg-tag)", borderRadius:"4px 12px 12px 12px", padding:"12px 14px", fontSize:"0.85rem", color:"var(--text-secondary)", lineHeight:1.55, display:"inline-block", maxWidth:"90%" },
  chatInputWrap: { padding:"12px 16px", borderTop:"1px solid var(--border)", display:"flex", gap:8, alignItems:"flex-end" },
  chatSendBtn: { width:34, height:34, borderRadius:"50%", background:"var(--btn-bg)", color:"var(--btn-text)", border:"none", cursor:"pointer", fontSize:"1rem", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 },
  chatToggle: { display:"flex", alignItems:"center", gap:10, fontFamily:"'DM Sans',sans-serif", fontSize:"0.8rem", fontWeight:500, letterSpacing:"0.06em", background:"var(--btn-bg)", color:"var(--btn-text)", border:"none", borderRadius:100, padding:"10px 20px 10px 10px", cursor:"pointer", boxShadow:"0 4px 16px rgba(0,0,0,0.15)" },
  chatToggleAvatar: { width:30, height:30, borderRadius:"50%", objectFit:"cover", objectPosition:"center top" },
};

export default function Chat() {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState('');
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const send = () => {
    if (!msg.trim()) return;
    setSending(true);
    emailjs.send(
      "service_gtshhgc",
      "template_n19pzpb",
      { from_name:"Chat Widget", from_email:"chat@portfolio.com", message:"[Via Chat Widget]\n\n" + msg },
      "iWk-lPetzVnFdwc8O"
    )
    .then(() => { setSent(true); setSending(false); })
    .catch((err) => { setSending(false); console.error("EmailJS error:", err); alert("Failed to send. Error: " + JSON.stringify(err)); });
  };

  return (
    <div style={S.chatFloat}>
      {open && (
        <div style={S.chatModal}>
          <div style={S.chatHeader}>
            <img src={Formal_Profile} style={S.chatAvatar} alt="Earl Brian" />
            <div style={{ flex:1 }}>
              <div style={S.chatName}>Earl Brian</div>
              <div style={S.chatStatus}>● Online</div>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{ background:"none", border:"none", cursor:"pointer", fontSize:"1.1rem", color:"var(--text-muted)", lineHeight:1 }}>
              ✕
            </button>
          </div>

          <div style={S.chatBody}>
            <div style={S.chatBubble}>
              Hi there! Thanks for visiting my portfolio. Feel free to send me a message about projects, opportunities, or just to say hello!
            </div>
          </div>

          {!sent ? (
            <div style={S.chatInputWrap}>
              <textarea
                className="chat-textarea"
                value={msg}
                onChange={e => setMsg(e.target.value)}
                placeholder="Type a message..."
                rows={2}
                onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } }}
              />
              <button style={S.chatSendBtn} onClick={send} disabled={sending}>
                {sending ? "…" : "→"}
              </button>
            </div>
          ) : (
            <div style={{ padding:"12px 16px", borderTop:"1px solid var(--border)", fontSize:"0.83rem", color:"var(--text-muted)", textAlign:"center" }}>
              Message sent! I'll get back to you soon.
            </div>
          )}
        </div>
      )}

      <button className="btn-hover" style={S.chatToggle}
        onClick={() => { setOpen(o => !o); setSent(false); setMsg(''); }}>
        <img src={Formal_Profile} style={S.chatToggleAvatar} alt="Earl Brian" />
        Chat with Earl
      </button>
    </div>
  );
}
