import { useReveal } from "@/hooks/use-intersection-observer";

const WA = "https://wa.me/923173997011?text=Hi%2C%20I%27d%20like%20to%20book%20a%20discovery%20call%20with%20Synovance%20Ventures";

export function TwoWays() {
  const [ref, visible] = useReveal();

  return (
    <section id="two-ways" className="s-section" style={{ background:"#F6F4F1" }}>
      <div className="s-container">
        <div ref={ref} style={{ textAlign:"center", marginBottom:"4rem" }}>
          <div className={`reveal ${visible?"in-view":""}`} style={{ display:"inline-flex", alignItems:"center", gap:"0.75rem", background:"rgba(11,15,20,0.06)", borderRadius:100, padding:"0.4rem 1.2rem", marginBottom:"1.5rem" }}>
            <span style={{ width:6, height:6, borderRadius:"50%", background:"#D4AE74", display:"inline-block" }} />
            <span style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.68rem", fontWeight:600, letterSpacing:"0.18em", textTransform:"uppercase", color:"rgba(11,15,20,0.5)" }}>Where You Fit</span>
          </div>
          <h2 className={`reveal reveal-delay-1 s-section-h2 ${visible?"in-view":""}`} style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"clamp(2rem,4.5vw,3.5rem)", fontWeight:500, color:"#0B0F14", lineHeight:1.1, letterSpacing:"-0.02em" }}>
            Two Ways To{" "}<span style={{ color:"#D4AE74", fontStyle:"italic" }}>Start Working With Us</span>
          </h2>
          <p className={`reveal reveal-delay-2 ${visible?"in-view":""}`} style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"1rem", color:"rgba(11,15,20,0.55)", lineHeight:1.75, maxWidth:480, margin:"1.25rem auto 0" }}>
            Most businesses come to us in one of two states. We meet you exactly where you are.
          </p>
        </div>

        <div className="s-grid-2">
          {[
            { path:"Path One", headline:"Starting From Zero", sub:"No website. No system. No digital presence.", body:"We build your foundation from the ground up — strategy, design, development, and infrastructure — so every tool you add next has something solid to connect to.", points:["Brand identity & design","Website build & launch","Initial marketing setup","Automation foundations"], dark:true },
            { path:"Path Two", headline:"Already Online, Not Optimised", sub:"Pieces in place, but not working together.", body:"You have a website, social channels, maybe some ads. But they're not talking to each other — or not working at all. We diagnose what's broken, fix it, and connect everything.", points:["Website audit & redesign","Campaign diagnosis","System integration","Growth acceleration"], dark:false },
          ].map((c,i)=>(
            <div
              key={i}
              className={`reveal reveal-delay-${i+1} s-hover-card ${visible?"in-view":""}`}
              style={{
                background: c.dark ? "#0B0F14" : "#EAE6E1",
                borderRadius:12, padding:"2.5rem",
                border: c.dark ? "1px solid rgba(212,174,116,0.15)" : "1px solid rgba(11,15,20,0.1)",
                cursor:"default",
              }}
            >
              <div style={{ display:"inline-block", background: c.dark ? "rgba(212,174,116,0.1)" : "rgba(11,15,20,0.07)", borderRadius:100, padding:"0.3rem 1rem", marginBottom:"1.25rem" }}>
                <span style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.65rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", color: c.dark ? "#D4AE74" : "rgba(11,15,20,0.5)" }}>{c.path}</span>
              </div>
              <h3 style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"clamp(1.5rem,2.5vw,2rem)", fontWeight:500, color: c.dark ? "#F6F4F1" : "#0B0F14", letterSpacing:"-0.02em", lineHeight:1.15, marginBottom:"0.6rem" }}>{c.headline}</h3>
              <p style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"1rem", fontStyle:"italic", color:"#D4AE74", marginBottom:"1.25rem" }}>{c.sub}</p>
              <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.88rem", fontWeight:400, color: c.dark ? "rgba(246,244,241,0.5)" : "rgba(11,15,20,0.6)", lineHeight:1.8, marginBottom:"1.75rem" }}>{c.body}</p>
              <ul style={{ listStyle:"none", marginBottom:"2rem" }}>
                {c.points.map(pt=>(
                  <li key={pt} style={{ display:"flex", alignItems:"center", gap:"0.75rem", marginBottom:"0.6rem" }}>
                    <span style={{ width:18, height:18, borderRadius:"50%", background: c.dark ? "rgba(212,174,116,0.15)" : "rgba(11,15,20,0.08)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                      <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M1.5 4.5l2 2 4-4" stroke={c.dark?"#D4AE74":"#0B0F14"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    <span style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.86rem", fontWeight:400, color: c.dark ? "rgba(246,244,241,0.6)" : "rgba(11,15,20,0.65)" }}>{pt}</span>
                  </li>
                ))}
              </ul>
              <a href={WA} target="_blank" rel="noopener noreferrer" style={{
                display:"inline-flex", alignItems:"center", gap:"0.5rem",
                background: c.dark ? "#D4AE74" : "#0B0F14", color: c.dark ? "#0B0F14" : "#F6F4F1",
                padding:"0.75rem 1.5rem", borderRadius:3,
                fontFamily:"'DM Sans',sans-serif", fontSize:"0.74rem", fontWeight:700,
                letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none",
                transition:"opacity 0.2s",
              }}
                onMouseEnter={e=>(e.currentTarget as HTMLAnchorElement).style.opacity="0.85"}
                onMouseLeave={e=>(e.currentTarget as HTMLAnchorElement).style.opacity="1"}
              >Start Here →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
