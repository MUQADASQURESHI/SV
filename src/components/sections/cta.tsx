import { useReveal } from "@/hooks/use-intersection-observer";

const WA = "https://wa.me/923173997011?text=Hi%2C%20I%27d%20like%20to%20book%20a%20discovery%20call%20with%20Synovance%20Ventures";

export function Cta() {
  const [ref, visible] = useReveal();

  return (
    <section id="contact" className="s-section" style={{ background:"#EAE6E1", position:"relative", overflow:"hidden", padding:"4rem 0 5rem" }}>
      <div style={{ position:"absolute", top:"10%", right:"-5%", width:400, height:400, borderRadius:"50%", background:"radial-gradient(circle, rgba(212,174,116,0.18) 0%, transparent 60%)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:"-10%", left:"-5%", width:350, height:350, borderRadius:"50%", background:"radial-gradient(circle, rgba(11,15,20,0.05) 0%, transparent 60%)", pointerEvents:"none" }} />

      <div className="s-container" style={{ position:"relative", zIndex:1 }}>
        <div ref={ref} className={`s-cta-grid reveal ${visible?"in-view":""}`}>

          {/* Left */}
          <div>
            <div style={{ display:"inline-flex", alignItems:"center", gap:"0.75rem", background:"rgba(11,15,20,0.07)", borderRadius:100, padding:"0.4rem 1.2rem", marginBottom:"1.5rem" }}>
              <span style={{ width:6, height:6, borderRadius:"50%", background:"#D4AE74", display:"inline-block" }} />
              <span style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.68rem", fontWeight:600, letterSpacing:"0.18em", textTransform:"uppercase", color:"rgba(11,15,20,0.5)" }}>Get Started</span>
            </div>
            <h2 className="s-section-h2" style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"clamp(2rem,4.5vw,3.8rem)", fontWeight:500, color:"#0B0F14", lineHeight:1.1, letterSpacing:"-0.02em", marginBottom:"1.25rem" }}>
              Ready To Build A Digital<br/>
              Foundation That{" "}
              <span style={{ color:"#D4AE74", fontStyle:"italic" }}>Actually Works?</span>
            </h2>
            <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"1rem", fontWeight:400, color:"rgba(11,15,20,0.6)", lineHeight:1.75, maxWidth:520, marginBottom:"2.5rem" }}>
              Partner with a studio that treats your business as a system — not a series of isolated projects. No commitment required to start the conversation.
            </p>
            <div style={{ display:"flex", gap:"1rem", flexWrap:"wrap", marginBottom:"2rem" }}>
              <a href={WA} target="_blank" rel="noopener noreferrer" style={{
                background:"#0B0F14", color:"#F6F4F1",
                padding:"0.9rem 2rem", borderRadius:3,
                fontFamily:"'DM Sans',sans-serif", fontSize:"0.78rem", fontWeight:700,
                letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none",
                transition:"background 0.2s, transform 0.15s", display:"inline-flex", alignItems:"center", gap:"0.5rem",
              }}
                onMouseEnter={e=>{const a=e.currentTarget as HTMLAnchorElement;a.style.background="#D4AE74";a.style.color="#0B0F14";a.style.transform="translateY(-2px)";}}
                onMouseLeave={e=>{const a=e.currentTarget as HTMLAnchorElement;a.style.background="#0B0F14";a.style.color="#F6F4F1";a.style.transform="none";}}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Message On WhatsApp
              </a>
              <a href="mailto:founder@synovanceventures.com" style={{
                border:"2px solid rgba(11,15,20,0.2)", color:"rgba(11,15,20,0.7)",
                padding:"0.9rem 2rem", borderRadius:3,
                fontFamily:"'DM Sans',sans-serif", fontSize:"0.78rem", fontWeight:500,
                letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none",
                transition:"border-color 0.2s, color 0.2s", display:"inline-block",
              }}
                onMouseEnter={e=>{const a=e.currentTarget as HTMLAnchorElement;a.style.borderColor="rgba(11,15,20,0.5)";a.style.color="#0B0F14";}}
                onMouseLeave={e=>{const a=e.currentTarget as HTMLAnchorElement;a.style.borderColor="rgba(11,15,20,0.2)";a.style.color="rgba(11,15,20,0.7)";}}
              >Send An Email</a>
            </div>
            <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.75rem", color:"rgba(11,15,20,0.35)" }}>
              No commitment. Just a conversation.
            </p>
          </div>

          {/* Right — contact card */}
          <div style={{ background:"#0B0F14", borderRadius:16, padding:"2.5rem", border:"1px solid rgba(212,174,116,0.15)", minWidth:270, boxShadow:"0 20px 56px rgba(11,15,20,0.15)" }}>
            <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.65rem", fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", color:"rgba(246,244,241,0.3)", marginBottom:"1.5rem" }}>Contact Details</div>
            {[
              { label:"WhatsApp", value:"+92 317 399 7011", href:WA, icon:"💬" },
              { label:"Email",    value:"founder@synovanceventures.com", href:"mailto:founder@synovanceventures.com", icon:"✉️" },
              { label:"Instagram",value:"@synovanceventures", href:"https://www.instagram.com/synovanceventures/", icon:"📸" },
            ].map(item=>(
              <a key={item.label} href={item.href} target={item.href.startsWith("http")||item.href.startsWith("https://wa")?"_blank":undefined} rel="noopener noreferrer" style={{
                display:"flex", alignItems:"center", gap:"0.9rem", padding:"0.9rem 0",
                borderBottom:"1px solid rgba(246,244,241,0.06)", textDecoration:"none",
                transition:"opacity 0.2s",
              }}
                onMouseEnter={e=>(e.currentTarget as HTMLAnchorElement).style.opacity="0.7"}
                onMouseLeave={e=>(e.currentTarget as HTMLAnchorElement).style.opacity="1"}
              >
                <span style={{ width:36, height:36, borderRadius:8, background:"rgba(212,174,116,0.1)", border:"1px solid rgba(212,174,116,0.15)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1rem", flexShrink:0 }}>{item.icon}</span>
                <div>
                  <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.6rem", fontWeight:600, letterSpacing:"0.15em", textTransform:"uppercase", color:"rgba(246,244,241,0.3)", marginBottom:"0.2rem" }}>{item.label}</div>
                  <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.84rem", fontWeight:400, color:"rgba(246,244,241,0.8)" }}>{item.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
