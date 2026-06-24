import { useReveal } from "@/hooks/use-intersection-observer";

const services = [
  { n:"01", icon:"🌐", title:"Website Development",     body:"Custom-built, performance-first websites engineered for conversion and trust. Every site is a business asset, not a brochure.", tags:["Custom Design","Fast Load","Mobile-First","Conversion Optimised"] },
  { n:"02", icon:"📱", title:"Mobile App Development",  body:"Native and cross-platform apps that extend your reach to every screen — iOS, Android, and beyond.", tags:["React Native","iOS & Android","Clean UX","API Integration"] },
  { n:"03", icon:"🤖", title:"AI Automation",           body:"Intelligent workflows that eliminate manual work — lead nurturing, reporting, follow-ups, and content pipelines running 24/7.", tags:["Lead Automation","Auto Reports","AI Content","Workflow Bots"] },
  { n:"04", icon:"📢", title:"Digital Marketing",       body:"Performance campaigns built on data and strategy. Every pound tracked, every channel optimised for measurable returns.", tags:["Paid Ads","Email Campaigns","Analytics","ROI Tracking"] },
  { n:"05", icon:"🔍", title:"SEO Strategy",            body:"Sustainable organic growth through technical authority and content that attracts and converts qualified traffic.", tags:["Technical SEO","Content SEO","Local SEO","Link Building"] },
  { n:"06", icon:"✍️", title:"Content Management",      body:"Consistent, on-brand content published at scale — building authority and driving qualified inbound traffic month over month.", tags:["Blogs","Video","Copywriting","Content Calendar"] },
  { n:"07", icon:"📲", title:"Social Media Management", body:"Strategic presence that builds genuine community and converts followers into loyal, paying customers.", tags:["Instagram","LinkedIn","Reels","Community Growth"] },
];

export function Capabilities() {
  const [ref, visible] = useReveal();

  return (
    <section id="services" className="s-section" style={{ background:"#0B0F14", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", top:0, right:0, width:600, height:600, background:"radial-gradient(circle, rgba(212,174,116,0.07) 0%, transparent 60%)", pointerEvents:"none" }} />

      <div className="s-container" style={{ position:"relative", zIndex:1 }}>
        <div ref={ref} style={{ textAlign:"center", marginBottom:"4rem" }}>
          <div className={`reveal ${visible?"in-view":""}`} style={{ display:"inline-flex", alignItems:"center", gap:"0.75rem", background:"rgba(212,174,116,0.08)", border:"1px solid rgba(212,174,116,0.2)", borderRadius:100, padding:"0.4rem 1.2rem", marginBottom:"1.5rem" }}>
            <span style={{ width:6, height:6, borderRadius:"50%", background:"#D4AE74", display:"inline-block" }} />
            <span style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.68rem", fontWeight:600, letterSpacing:"0.18em", textTransform:"uppercase", color:"#D4AE74" }}>What We Do</span>
          </div>
          <h2 className={`reveal reveal-delay-1 s-section-h2 ${visible?"in-view":""}`} style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"clamp(2rem,4.5vw,3.5rem)", fontWeight:500, color:"#F6F4F1", lineHeight:1.1, letterSpacing:"-0.02em" }}>
            Seven Services.{" "}<span style={{ color:"#D4AE74", fontStyle:"italic" }}>One Unified System.</span>
          </h2>
          <p className={`reveal reveal-delay-2 ${visible?"in-view":""}`} style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"1rem", color:"rgba(246,244,241,0.5)", lineHeight:1.75, maxWidth:500, margin:"1.25rem auto 0" }}>
            Every service we offer is designed to connect with and multiply the effectiveness of everything else we build for you.
          </p>
        </div>

        <div className="s-grid-3">
          {services.map((s,i)=>(
            <div
              key={i}
              className={`reveal reveal-delay-${(i%3)+1} s-hover-card s-service-last ${visible?"in-view":""}`}
              style={{
                background:"rgba(255,255,255,0.03)", borderRadius:10,
                border:"1px solid rgba(212,174,116,0.1)",
                padding:"1.75rem", cursor:"default",
                gridColumn: i===6 ? "2 / 3" : "auto",
              }}
              onMouseEnter={e=>{const d=e.currentTarget as HTMLDivElement;d.style.background="rgba(212,174,116,0.07)";d.style.borderColor="rgba(212,174,116,0.3)";}}
              onMouseLeave={e=>{const d=e.currentTarget as HTMLDivElement;d.style.background="rgba(255,255,255,0.03)";d.style.borderColor="rgba(212,174,116,0.1)";}}
            >
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"1.25rem" }}>
                <div style={{ width:48, height:48, borderRadius:10, background:"rgba(212,174,116,0.1)", border:"1px solid rgba(212,174,116,0.2)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.4rem" }}>{s.icon}</div>
                <span style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"0.85rem", fontWeight:600, color:"rgba(212,174,116,0.3)" }}>{s.n}</span>
              </div>
              <h3 style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"1rem", fontWeight:700, color:"#F6F4F1", marginBottom:"0.6rem" }}>{s.title}</h3>
              <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.84rem", fontWeight:400, color:"rgba(246,244,241,0.48)", lineHeight:1.75, marginBottom:"1.25rem" }}>{s.body}</p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:"0.4rem" }}>
                {s.tags.map(t=>(
                  <span key={t} style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.62rem", fontWeight:500, color:"rgba(212,174,116,0.65)", background:"rgba(212,174,116,0.07)", padding:"0.25rem 0.6rem", borderRadius:3, letterSpacing:"0.06em" }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
