import { useReveal } from "@/hooks/use-intersection-observer";

const steps = [
  { n:"01", icon:"🗺️", t:"Strategy First",  b:"Map your business goals to a digital architecture before writing a line of code or spending a pound on ads." },
  { n:"02", icon:"✏️",  t:"Design & Brand",  b:"Craft a premium aesthetic where every visual decision serves both beauty and function — nothing arbitrary." },
  { n:"03", icon:"🏗️", t:"Build & Launch",   b:"Engineer components that work independently and compound when connected. Performance and craft at every layer." },
  { n:"04", icon:"🚀", t:"Grow & Activate",  b:"Drive activation, marketing, and acquisition working in concert. A coordinated growth engine, not campaigns." },
  { n:"05", icon:"📈", t:"Optimise Always",  b:"Refine performance continuously using real data. Measure, learn, and improve — never assume or guess." },
];

export function Methodology() {
  const [ref, visible] = useReveal();

  return (
    <section id="approach" className="s-section" style={{ background:"#0B0F14", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", bottom:0, left:"50%", transform:"translateX(-50%)", width:800, height:300, background:"radial-gradient(ellipse, rgba(212,174,116,0.06) 0%, transparent 60%)", pointerEvents:"none" }} />

      <div className="s-container" style={{ position:"relative", zIndex:1 }}>
        <div ref={ref} style={{ textAlign:"center", marginBottom:"4rem" }}>
          <div className={`reveal ${visible?"in-view":""}`} style={{ display:"inline-flex", alignItems:"center", gap:"0.75rem", background:"rgba(212,174,116,0.08)", border:"1px solid rgba(212,174,116,0.2)", borderRadius:100, padding:"0.4rem 1.2rem", marginBottom:"1.5rem" }}>
            <span style={{ width:6, height:6, borderRadius:"50%", background:"#D4AE74", display:"inline-block" }} />
            <span style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.68rem", fontWeight:600, letterSpacing:"0.18em", textTransform:"uppercase", color:"#D4AE74" }}>How We Work</span>
          </div>
          <h2 className={`reveal reveal-delay-1 s-section-h2 ${visible?"in-view":""}`} style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"clamp(2rem,4.5vw,3.5rem)", fontWeight:500, color:"#F6F4F1", lineHeight:1.1, letterSpacing:"-0.02em" }}>
            A Clear 5-Step Process{" "}<span style={{ color:"#D4AE74", fontStyle:"italic" }}>That Delivers.</span>
          </h2>
        </div>

        <div style={{ position:"relative" }}>
          <div className="s-method-line" />
          <div className="s-grid-5" style={{ position:"relative", zIndex:1 }}>
            {steps.map((s,i)=>(
              <div
                key={i}
                className={`reveal reveal-delay-${i+1} s-hover-card ${visible?"in-view":""}`}
                style={{
                  background:"rgba(255,255,255,0.03)", borderRadius:10,
                  border:"1px solid rgba(212,174,116,0.1)",
                  padding:"2rem 1.5rem", textAlign:"center", cursor:"default",
                }}
                onMouseEnter={e=>{const d=e.currentTarget as HTMLDivElement;d.style.background="rgba(212,174,116,0.08)";d.style.borderColor="rgba(212,174,116,0.3)";}}
                onMouseLeave={e=>{const d=e.currentTarget as HTMLDivElement;d.style.background="rgba(255,255,255,0.03)";d.style.borderColor="rgba(212,174,116,0.1)";}}
              >
                <div style={{ width:56, height:56, borderRadius:"50%", background:"rgba(212,174,116,0.1)", border:"1px solid rgba(212,174,116,0.25)", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 1.25rem", fontSize:"1.5rem" }}>
                  {s.icon}
                </div>
                <div style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"0.95rem", fontWeight:600, color:"rgba(212,174,116,0.4)", marginBottom:"0.4rem" }}>{s.n}</div>
                <h3 style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.95rem", fontWeight:700, color:"#F6F4F1", marginBottom:"0.65rem" }}>{s.t}</h3>
                <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.8rem", fontWeight:400, color:"rgba(246,244,241,0.45)", lineHeight:1.75 }}>{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
