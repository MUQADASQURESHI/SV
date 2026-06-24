import { useReveal } from "@/hooks/use-intersection-observer";

export function System() {
  const [ref, visible] = useReveal();

  const features = [
    { icon:"🔗", title:"Everything Connected",   body:"Your website, marketing, automation, and content all feed into each other — creating compound growth." },
    { icon:"📊", title:"Data-Driven Decisions",  body:"Every campaign and system tracks what matters so you always know what's working and what to improve." },
    { icon:"⚙️",  title:"Automated Workflows",   body:"From lead capture to follow-up to reporting — we automate the repetitive so you focus on growth." },
    { icon:"🎯", title:"Unified Brand Voice",     body:"Consistent messaging and visuals across every touchpoint build trust and recognition at scale." },
  ];

  return (
    <section id="ecosystem" className="s-section" style={{ background:"#EAE6E1" }}>
      <div className="s-container">
        <div ref={ref} className="s-grid-2" style={{ alignItems:"center" }}>

          {/* Left */}
          <div>
            <div className={`reveal ${visible?"in-view":""}`} style={{ display:"inline-flex", alignItems:"center", gap:"0.75rem", background:"rgba(11,15,20,0.07)", borderRadius:100, padding:"0.4rem 1.2rem", marginBottom:"1.5rem" }}>
              <span style={{ width:6, height:6, borderRadius:"50%", background:"#D4AE74", display:"inline-block" }} />
              <span style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.68rem", fontWeight:600, letterSpacing:"0.18em", textTransform:"uppercase", color:"rgba(11,15,20,0.55)" }}>The Synovance System</span>
            </div>
            <h2 className={`reveal reveal-delay-1 s-section-h2 ${visible?"in-view":""}`} style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"clamp(2rem,4vw,3.5rem)", fontWeight:500, color:"#0B0F14", lineHeight:1.1, letterSpacing:"-0.02em", marginBottom:"1.5rem" }}>
              Everything Working{" "}<span style={{ color:"#D4AE74", fontStyle:"italic" }}>Together.</span>
            </h2>
            <p className={`reveal reveal-delay-2 ${visible?"in-view":""}`} style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"1rem", color:"rgba(11,15,20,0.6)", lineHeight:1.8, marginBottom:"3rem" }}>
              We don't sell isolated services. We build a connected digital infrastructure where every component multiplies the effectiveness of the others.
            </p>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1.5rem" }}>
              {features.map((f,i)=>(
                <div key={i} className={`reveal reveal-delay-${i+2} ${visible?"in-view":""}`} style={{ background:"rgba(255,255,255,0.5)", borderRadius:8, padding:"1.25rem", border:"1px solid rgba(11,15,20,0.07)" }}>
                  <div style={{ width:40, height:40, borderRadius:8, background:"rgba(212,174,116,0.12)", border:"1px solid rgba(212,174,116,0.2)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.1rem", marginBottom:"0.75rem" }}>{f.icon}</div>
                  <h4 style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.88rem", fontWeight:700, color:"#0B0F14", marginBottom:"0.4rem" }}>{f.title}</h4>
                  <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.8rem", fontWeight:400, color:"rgba(11,15,20,0.55)", lineHeight:1.7 }}>{f.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — system hub with big favicon */}
          <div className={`reveal reveal-delay-2 ${visible?"in-view":""}`} style={{ position:"relative" }}>
            <div style={{ background:"#0B0F14", borderRadius:20, padding:"3rem 2.5rem", border:"1px solid rgba(212,174,116,0.15)", boxShadow:"0 24px 64px rgba(11,15,20,0.2)" }}>

              {/* Central logo — BIGGER */}
              <div style={{ display:"flex", justifyContent:"center", marginBottom:"2rem" }}>
                <div style={{ position:"relative" }}>
                  <div style={{ position:"absolute", inset:"-16px", borderRadius:"50%", background:"radial-gradient(circle, rgba(212,174,116,0.2), transparent)", filter:"blur(12px)" }} />
                  <img
                    src="/favicon.png"
                    alt="Synovance"
                    style={{ width:120, height:120, borderRadius:"50%", border:"2px solid rgba(212,174,116,0.3)", boxShadow:"0 0 40px rgba(212,174,116,0.15)", position:"relative", zIndex:1, display:"block" }}
                  />
                </div>
              </div>

              <div style={{ textAlign:"center", marginBottom:"2rem" }}>
                <div style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"1.1rem", color:"#F6F4F1", fontWeight:400 }}>Synovance System</div>
                <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.68rem", color:"rgba(212,174,116,0.6)", letterSpacing:"0.14em", textTransform:"uppercase", marginTop:"0.3rem" }}>All channels unified</div>
              </div>

              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0.75rem" }}>
                {[
                  { label:"Website",   color:"#D4AE74" },
                  { label:"Marketing", color:"#8bb5d4" },
                  { label:"Automation",color:"#a8d4b0" },
                  { label:"Content",   color:"#d4a8b0" },
                  { label:"Social",    color:"#d4c8a8" },
                  { label:"SEO",       color:"#b0a8d4" },
                ].map((item,i)=>(
                  <div key={i} style={{ background:"rgba(255,255,255,0.04)", borderRadius:8, padding:"0.85rem 1rem", border:"1px solid rgba(255,255,255,0.06)", display:"flex", alignItems:"center", gap:"0.6rem" }}>
                    <div style={{ width:10, height:10, borderRadius:"50%", background:item.color, flexShrink:0 }} />
                    <span style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.78rem", fontWeight:400, color:"rgba(246,244,241,0.65)" }}>{item.label}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop:"1.5rem", padding:"1rem", background:"rgba(212,174,116,0.08)", borderRadius:8, border:"1px solid rgba(212,174,116,0.15)", textAlign:"center" }}>
                <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.7rem", color:"#D4AE74", fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase" }}>All Channels → One System → Real Growth</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
