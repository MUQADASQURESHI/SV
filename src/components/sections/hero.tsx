import { useReveal } from "@/hooks/use-intersection-observer";

const WA = "https://wa.me/923173997011?text=Hi%2C%20I%27d%20like%20to%20book%20a%20discovery%20call%20with%20Synovance%20Ventures";

export function Hero() {
  const [ref, visible] = useReveal({ threshold: 0.05 });

  return (
    <section ref={ref} style={{
      background: "#EAE6E1",
      minHeight: "100vh",
      paddingTop: 68,
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
    }}>
      {/* Subtle warm glow */}
      <div style={{ position:"absolute", top:"-10%", right:"5%", width:600, height:600, borderRadius:"50%", background:"radial-gradient(circle, rgba(212,174,116,0.15) 0%, transparent 60%)", pointerEvents:"none" }} />

      <div className="s-container" style={{ flex:1, display:"flex", flexDirection:"column", justifyContent:"center", paddingTop:"4rem", paddingBottom:"4rem" }}>

        {/* Hero grid */}
        <div className={`s-grid-2 s-hero-grid ${visible?"in-view":""}`} style={{ alignItems:"center" }}>

          {/* Left — headline */}
          <div>
            <h1 className={`reveal reveal-delay-1 s-hero-h1 ${visible?"in-view":""}`} style={{
              fontFamily:"'Cormorant Garamond',Georgia,serif",
              fontSize:"clamp(3rem,5.5vw,5.5rem)",
              fontWeight:400, lineHeight:1.05,
              color:"#0B0F14", letterSpacing:"-0.02em",
              marginBottom:"2rem",
            }}>
              We Build Digital Systems For <span style={{ color: "#D4AE74" }}>Growing</span> Businesses
            </h1>

            <p className={`reveal reveal-delay-2 ${visible?"in-view":""}`} style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"1.05rem", fontWeight:400, color:"rgba(11,15,20,0.62)", lineHeight:1.8, maxWidth:480, marginBottom:"2.5rem" }}>
              Websites, marketing, automation, and content designed to work together as one connected system — not five separate tools.
            </p>

            <div className={`reveal reveal-delay-3 ${visible?"in-view":""}`} style={{ display:"flex", gap:"1rem", flexWrap:"wrap" }}>
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
                Book A Discovery Call
              </a>
              <a href="#services" style={{
                border:"2px solid rgba(11,15,20,0.2)", color:"rgba(11,15,20,0.65)",
                padding:"0.9rem 2rem", borderRadius:3,
                fontFamily:"'DM Sans',sans-serif", fontSize:"0.78rem", fontWeight:500,
                letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none",
                transition:"border-color 0.2s, color 0.2s", display:"inline-block",
              }}
                onMouseEnter={e=>{const a=e.currentTarget as HTMLAnchorElement;a.style.borderColor="rgba(11,15,20,0.5)";a.style.color="#0B0F14";}}
                onMouseLeave={e=>{const a=e.currentTarget as HTMLAnchorElement;a.style.borderColor="rgba(11,15,20,0.2)";a.style.color="rgba(11,15,20,0.65)";}}
              >View Services</a>
            </div>
          </div>

          {/* Right — browser mockup */}
          <div className={`reveal reveal-delay-2 s-hero-mockup ${visible?"in-view":""}`} style={{ position:"relative" }}>
            <div style={{ position:"absolute", inset:"-20px", background:"radial-gradient(ellipse, rgba(212,174,116,0.12) 0%, transparent 70%)", filter:"blur(24px)", pointerEvents:"none" }} />
            <div style={{ position:"relative", borderRadius:12, overflow:"hidden", border:"1px solid rgba(11,15,20,0.1)", boxShadow:"0 24px 64px rgba(11,15,20,0.15)" }}>
              {/* Browser bar */}
              <div style={{ background:"#0B0F14", padding:"0.75rem 1rem", display:"flex", alignItems:"center", gap:"0.5rem", borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
                <span style={{ width:10, height:10, borderRadius:"50%", background:"#ff5f57", display:"inline-block" }} />
                <span style={{ width:10, height:10, borderRadius:"50%", background:"#febc2e", display:"inline-block" }} />
                <span style={{ width:10, height:10, borderRadius:"50%", background:"#28c840", display:"inline-block" }} />
                <div style={{ flex:1, background:"rgba(255,255,255,0.06)", borderRadius:4, padding:"0.3rem 0.75rem", marginLeft:"0.5rem", fontFamily:"'DM Sans',sans-serif", fontSize:"0.7rem", color:"rgba(246,244,241,0.3)" }}>
                  synovanceventures.com
                </div>
              </div>
              <div style={{ background:"#0f1520", padding:"2rem" }}>
                <div style={{ background:"linear-gradient(135deg,#111827,#1a2340)", borderRadius:8, padding:"2rem", marginBottom:"1rem" }}>
                  <div style={{ width:"60%", height:8, background:"rgba(212,174,116,0.5)", borderRadius:4, marginBottom:"0.75rem" }} />
                  <div style={{ width:"80%", height:6, background:"rgba(246,244,241,0.12)", borderRadius:4, marginBottom:"0.5rem" }} />
                  <div style={{ width:"55%", height:6, background:"rgba(246,244,241,0.08)", borderRadius:4, marginBottom:"1.5rem" }} />
                  <div style={{ display:"flex", gap:"0.75rem" }}>
                    <div style={{ width:90, height:28, background:"#D4AE74", borderRadius:4 }} />
                    <div style={{ width:90, height:28, border:"1px solid rgba(212,174,116,0.3)", borderRadius:4 }} />
                  </div>
                </div>
                <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"0.75rem", marginBottom:"1rem" }}>
                  {[["7+","Services"],["Fast","Turnaround"],["1","Contact"]].map(([n,l])=>(
                    <div key={l} style={{ background:"rgba(255,255,255,0.04)", borderRadius:6, padding:"0.75rem", border:"1px solid rgba(255,255,255,0.05)" }}>
                      <div style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"1.2rem", color:"#D4AE74", marginBottom:"0.2rem" }}>{n}</div>
                      <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.62rem", color:"rgba(246,244,241,0.3)", letterSpacing:"0.1em" }}>{l}</div>
                    </div>
                  ))}
                </div>
                <div style={{ display:"flex", flexWrap:"wrap", gap:"0.5rem" }}>
                  {["Web Dev","AI Automation","Marketing","Content","SEO"].map(s=>(
                    <span key={s} style={{ background:"rgba(212,174,116,0.08)", border:"1px solid rgba(212,174,116,0.15)", color:"rgba(212,174,116,0.7)", padding:"0.3rem 0.7rem", borderRadius:4, fontFamily:"'DM Sans',sans-serif", fontSize:"0.62rem" }}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div style={{ position:"absolute", bottom:"-16px", left:"-20px", background:"#D4AE74", borderRadius:8, padding:"0.75rem 1.25rem", boxShadow:"0 8px 32px rgba(11,15,20,0.2)", display:"flex", alignItems:"center", gap:"0.75rem" }}>
              <div style={{ width:32, height:32, borderRadius:"50%", background:"rgba(11,15,20,0.15)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#0B0F14" strokeWidth="2" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.72rem", fontWeight:700, color:"#0B0F14" }}>Systems That Work</div>
                <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.62rem", fontWeight:600, color:"rgba(11,15,20,0.55)" }}>Every service connected</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className={`reveal reveal-delay-4 s-stats ${visible?"in-view":""}`} style={{ borderTop:"1px solid rgba(11,15,20,0.12)", marginTop:"5rem", paddingTop:"3rem" }}>
          {[
            { n:"7+",   l:"Core Services" },
            { n:"Fast", l:"Turnaround" },
            { n:"3–5",  l:"Years Experience" },
            { n:"1",    l:"Point of Contact" },
          ].map((s,i)=>(
            <div key={i} className="s-stat-item">
              <div style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"2.6rem", fontWeight:600, color:"#D4AE74", lineHeight:1, marginBottom:"0.35rem" }}>{s.n}</div>
              <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.7rem", fontWeight:500, color:"rgba(11,15,20,0.45)", letterSpacing:"0.14em", textTransform:"uppercase" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
