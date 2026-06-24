import { useReveal } from "@/hooks/use-intersection-observer";

const problems = [
  { icon:"⚡", title:"Disconnected Tools",     body:"Your CRM, website, ads, and email don't talk to each other. Data everywhere, clarity nowhere." },
  { icon:"🎨", title:"Inconsistent Branding",  body:"Different fonts, tones, and visuals across platforms erode the trust you've worked hard to build." },
  { icon:"📉", title:"Weak Online Presence",   body:"A dated website and silent social channels signal to prospects that you're not serious." },
  { icon:"⏱",  title:"Manual Processes",       body:"Hours wasted on tasks machines should handle — reports, follow-ups, scheduling, lead capture." },
  { icon:"💸", title:"Wasted Ad Spend",        body:"Campaigns without strategy burn budget. Without a connected system, you can't see what's working." },
  { icon:"🔄", title:"No Clear Growth Path",   body:"Scattered efforts with no unified strategy means you're working hard but not moving forward." },
];

export function Struggle() {
  const [ref, visible] = useReveal();

  return (
    <section className="s-section" style={{ background:"#F6F4F1" }}>
      <div className="s-container">

        <div ref={ref} style={{ textAlign:"center", marginBottom:"4rem" }}>
          <div className={`reveal ${visible?"in-view":""}`} style={{ display:"inline-flex", alignItems:"center", gap:"0.75rem", background:"rgba(11,15,20,0.06)", borderRadius:100, padding:"0.4rem 1.2rem", marginBottom:"1.5rem" }}>
            <span style={{ width:6, height:6, borderRadius:"50%", background:"#D4AE74", display:"inline-block" }} />
            <span style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.68rem", fontWeight:600, letterSpacing:"0.18em", textTransform:"uppercase", color:"rgba(11,15,20,0.55)" }}>The Problem</span>
          </div>
          <h2 className={`reveal reveal-delay-1 s-section-h2 ${visible?"in-view":""}`} style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"clamp(2rem,4.5vw,3.5rem)", fontWeight:500, color:"#0B0F14", lineHeight:1.1, letterSpacing:"-0.02em" }}>
            Why Most Businesses{" "}
            <span style={{ color:"#D4AE74", fontStyle:"italic" }}>Struggle Online</span>
          </h2>
          <p className={`reveal reveal-delay-2 ${visible?"in-view":""}`} style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"1rem", color:"rgba(11,15,20,0.58)", lineHeight:1.75, maxWidth:520, margin:"1.25rem auto 0" }}>
            Most businesses don't fail because of bad products — they fail because their digital tools never work together as one system.
          </p>
        </div>

        <div className="s-grid-3">
          {problems.map((p,i)=>(
            <div
              key={i}
              className={`reveal reveal-delay-${i+1} s-hover-card ${visible?"in-view":""}`}
              style={{
                background:"#fff", padding:"2rem", borderRadius:10,
                border:"1px solid rgba(11,15,20,0.08)",
                boxShadow:"0 2px 16px rgba(11,15,20,0.04)",
                cursor:"default",
              }}
            >
              {/* Prominent icon */}
              <div style={{ width:52, height:52, borderRadius:12, background:"rgba(212,174,116,0.12)", border:"1px solid rgba(212,174,116,0.2)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.5rem", marginBottom:"1.25rem" }}>
                {p.icon}
              </div>
              <h3 style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"1rem", fontWeight:700, color:"#0B0F14", marginBottom:"0.6rem" }}>{p.title}</h3>
              <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.86rem", fontWeight:400, color:"rgba(11,15,20,0.56)", lineHeight:1.75 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
