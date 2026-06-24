import { useReveal } from "@/hooks/use-intersection-observer";

const values = [
  { icon:"🏆", t:"Quality Above All",    b:"We'd rather deliver one exceptional solution than three mediocre ones. Craft is non-negotiable." },
  { icon:"🧠", t:"Systems Thinking",     b:"Every decision is made with the whole in mind — not just the component we're working on right now." },
  { icon:"🤝", t:"Long-Term Partnership",b:"We build for where you're going, not just where you are. Every system is designed to scale with you." },
  { icon:"📞", t:"One Point of Contact", b:"No account managers. No handoffs. The person doing the work is the person you talk to, always." },
];

export function NotAgency() {
  const [ref, visible] = useReveal();

  return (
    <section id="about" className="s-section" style={{ background:"#0B0F14", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", top:"20%", right:"-5%", width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle, rgba(212,174,116,0.05) 0%, transparent 60%)", pointerEvents:"none" }} />

      <div className="s-container" style={{ position:"relative", zIndex:1 }}>
        <div ref={ref} style={{ textAlign:"center", marginBottom:"4rem" }}>
          <div className={`reveal ${visible?"in-view":""}`} style={{ display:"inline-flex", alignItems:"center", gap:"0.75rem", background:"rgba(212,174,116,0.08)", border:"1px solid rgba(212,174,116,0.2)", borderRadius:100, padding:"0.4rem 1.2rem", marginBottom:"1.5rem" }}>
            <span style={{ width:6, height:6, borderRadius:"50%", background:"#D4AE74", display:"inline-block" }} />
            <span style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.68rem", fontWeight:600, letterSpacing:"0.18em", textTransform:"uppercase", color:"#D4AE74" }}>The Synovance Difference</span>
          </div>
          <h2 className={`reveal reveal-delay-1 s-section-h2 ${visible?"in-view":""}`} style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"clamp(2rem,4.5vw,3.5rem)", fontWeight:500, color:"#F6F4F1", lineHeight:1.1, letterSpacing:"-0.02em" }}>
            Not An Agency.{" "}<span style={{ color:"#D4AE74", fontStyle:"italic" }}>A Strategic Partner.</span>
          </h2>
        </div>

        {/* Comparison */}
        <div className={`s-grid-2 reveal reveal-delay-2 ${visible?"in-view":""}`} style={{ marginBottom:"4rem" }}>
          {[
            { label:"Other Agencies",  items:["Account managers in the way","Bloated retainer models","Cookie-cutter approaches","Siloed teams & handoffs","You manage multiple vendors"], bad:true },
            { label:"Synovance",       items:["Direct access to the builder","Flexible, honest pricing","Custom-built for your business","One integrated system","One point of contact"], bad:false },
          ].map((d,i)=>(
            <div key={i} style={{
              background: d.bad ? "rgba(255,255,255,0.02)" : "rgba(212,174,116,0.05)",
              borderRadius:12, padding:"2.5rem",
              border: d.bad ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(212,174,116,0.2)",
            }}>
              <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.7rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", color: d.bad ? "rgba(246,244,241,0.25)" : "#D4AE74", marginBottom:"1.5rem" }}>{d.label}</div>
              {d.items.map((item,j)=>(
                <div key={j} style={{ display:"flex", alignItems:"center", gap:"0.75rem", padding:"0.7rem 0", borderBottom:"1px solid rgba(246,244,241,0.05)" }}>
                  <span style={{ width:22, height:22, borderRadius:"50%", background: d.bad ? "rgba(255,255,255,0.04)" : "rgba(212,174,116,0.12)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    {d.bad
                      ? <span style={{ color:"rgba(246,244,241,0.2)", fontSize:"0.75rem", lineHeight:1 }}>✕</span>
                      : <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="#D4AE74" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    }
                  </span>
                  <span style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.9rem", fontWeight:400, color: d.bad ? "rgba(246,244,241,0.35)" : "rgba(246,244,241,0.8)" }}>{item}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="s-grid-4">
          {values.map((v,i)=>(
            <div key={i} className={`reveal reveal-delay-${i+1} s-hover-card ${visible?"in-view":""}`}
              style={{ background:"rgba(255,255,255,0.03)", borderRadius:10, padding:"1.75rem", border:"1px solid rgba(212,174,116,0.1)", cursor:"default" }}
              onMouseEnter={e=>{const d=e.currentTarget as HTMLDivElement;d.style.background="rgba(212,174,116,0.07)";d.style.borderColor="rgba(212,174,116,0.25)";}}
              onMouseLeave={e=>{const d=e.currentTarget as HTMLDivElement;d.style.background="rgba(255,255,255,0.03)";d.style.borderColor="rgba(212,174,116,0.1)";}}
            >
              <div style={{ width:48, height:48, borderRadius:10, background:"rgba(212,174,116,0.1)", border:"1px solid rgba(212,174,116,0.2)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.4rem", marginBottom:"1rem" }}>{v.icon}</div>
              <h4 style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.9rem", fontWeight:700, color:"#F6F4F1", marginBottom:"0.5rem" }}>{v.t}</h4>
              <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.82rem", fontWeight:400, color:"rgba(246,244,241,0.45)", lineHeight:1.75 }}>{v.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
