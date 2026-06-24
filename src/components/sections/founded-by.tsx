import { useReveal } from "@/hooks/use-intersection-observer";

export function FoundedBy() {
  const [ref, visible] = useReveal();

  return (
    <section id="founder" className="s-section" style={{ background:"#EAE6E1", padding:"5rem 0 3rem" }}>
      <div className="s-container">
        <div ref={ref} className="s-grid-2" style={{ alignItems:"center" }}>

          {/* Left */}
          <div>
            <div className={`reveal ${visible?"in-view":""}`} style={{ display:"inline-flex", alignItems:"center", gap:"0.75rem", background:"rgba(11,15,20,0.07)", borderRadius:100, padding:"0.4rem 1.2rem", marginBottom:"1.5rem" }}>
              <span style={{ width:6, height:6, borderRadius:"50%", background:"#D4AE74", display:"inline-block" }} />
              <span style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.68rem", fontWeight:600, letterSpacing:"0.18em", textTransform:"uppercase", color:"rgba(11,15,20,0.5)" }}>Synovance Ventures</span>
            </div>
            <h2 className={`reveal reveal-delay-1 s-section-h2 ${visible?"in-view":""}`} style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"clamp(2rem,4vw,3.5rem)", fontWeight:500, color:"#0B0F14", lineHeight:1.1, letterSpacing:"-0.02em", marginBottom:"1.5rem" }}>
              Built By Someone Who's{" "}
              <span style={{ color:"#D4AE74", fontStyle:"italic" }}>Done This Before.</span>
            </h2>
            <p className={`reveal reveal-delay-2 ${visible?"in-view":""}`} style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.97rem", fontWeight:400, color:"rgba(11,15,20,0.6)", lineHeight:1.85, marginBottom:"1.25rem" }}>
              Synovance Ventures was founded after years inside agency life — designing, building, managing, and strategizing across dozens of client engagements.
            </p>
            <p className={`reveal reveal-delay-3 ${visible?"in-view":""}`} style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.97rem", fontWeight:400, color:"rgba(11,15,20,0.48)", lineHeight:1.85, marginBottom:"2.5rem" }}>
              I saw the same pattern repeat: talented teams delivering great individual pieces that never added up to a real system. I started Synovance to be the one partner who thinks about the whole picture — and builds it.
            </p>
            <div className={`reveal reveal-delay-4 ${visible?"in-view":""}`} style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"1.5rem" }}>
              {[["3–5 Yrs","Agency Exp."],["7+","Services"],["1","Contact"]].map(([n,l])=>(
                <div key={l} style={{ borderLeft:"2px solid rgba(212,174,116,0.5)", paddingLeft:"1rem" }}>
                  <div style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"1.8rem", fontWeight:600, color:"#D4AE74", lineHeight:1, marginBottom:"0.3rem" }}>{n}</div>
                  <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.7rem", color:"rgba(11,15,20,0.45)", lineHeight:1.4, letterSpacing:"0.06em" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — founder card */}
          <div className={`reveal reveal-delay-2 ${visible?"in-view":""}`}>
            <div style={{ background:"#0B0F14", borderRadius:16, padding:"3rem", border:"1px solid rgba(212,174,116,0.15)", boxShadow:"0 20px 56px rgba(11,15,20,0.18)" }}>
              <div style={{ width:80, height:80, borderRadius:"50%", border:"2px solid rgba(212,174,116,0.3)", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"1.5rem", overflow:"hidden" }}>
                <img src="/favicon-dark.png" alt="Synovance" style={{ width:80, height:80, borderRadius:"50%" }} />
              </div>
              <div style={{ marginBottom:"1.25rem" }}>
                <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"1rem", fontWeight:700, color:"#F6F4F1" }}>Founder</div>
                <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.72rem", color:"#D4AE74", marginTop:"0.2rem", letterSpacing:"0.08em" }}>Synovance Ventures</div>
              </div>
              <div style={{ borderLeft:"2px solid rgba(212,174,116,0.3)", paddingLeft:"1.25rem", marginBottom:"2rem" }}>
                <p style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"1.1rem", fontStyle:"italic", color:"rgba(246,244,241,0.6)", lineHeight:1.65 }}>
                  "Direct access to the person building your system — no middlemen, no miscommunication, no excuses."
                </p>
              </div>
              <div style={{ display:"flex", gap:"0.6rem", flexWrap:"wrap" }}>
                {["Design & Branding","Development","Digital Strategy","AI Systems"].map(tag=>(
                  <span key={tag} style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.62rem", fontWeight:600, color:"rgba(212,174,116,0.7)", background:"rgba(212,174,116,0.08)", padding:"0.3rem 0.75rem", borderRadius:100, border:"1px solid rgba(212,174,116,0.15)" }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
