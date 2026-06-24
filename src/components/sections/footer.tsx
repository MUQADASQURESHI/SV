const WA = "https://wa.me/923173997011?text=Hi%2C%20I%27d%20like%20to%20book%20a%20discovery%20call%20with%20Synovance%20Ventures";

export function Footer() {
  return (
    <footer style={{ background:"#070a0e", borderTop:"1px solid rgba(212,174,116,0.08)" }}>
      <div className="s-container">

        {/* Main footer — 3 columns (no Services) */}
        <div className="s-footer-grid" style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr", gap:"4rem", padding:"5rem 0 4rem", borderBottom:"1px solid rgba(246,244,241,0.05)" }}>

          {/* Brand */}
          <div>
            <a href="https://synovanceventures.com" style={{ display: 'inline-block', textDecoration: 'none' }}>
              <img src="/logo.png" alt="Synovance Ventures" style={{ height:56, width:"auto", marginBottom:"1.5rem", filter:"brightness(0) invert(1)" }} />
            </a>
            <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.86rem", fontWeight:400, color:"rgba(246,244,241,0.9)", lineHeight:1.8, maxWidth:300, marginBottom:"2rem" }}>
              Digital systems for growing businesses. Strategy, design, development, and automation working as one connected engine.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{
              display:"inline-flex", alignItems:"center", gap:"0.5rem",
              background:"rgba(212,174,116,0.1)", border:"1px solid rgba(212,174,116,0.22)",
              color:"#D4AE74", padding:"0.6rem 1.25rem", borderRadius:4,
              fontFamily:"'DM Sans',sans-serif", fontSize:"0.7rem", fontWeight:700,
              letterSpacing:"0.12em", textTransform:"uppercase", textDecoration:"none",
              transition:"background 0.2s",
            }}
              onMouseEnter={e=>(e.currentTarget as HTMLAnchorElement).style.background="rgba(212,174,116,0.18)"}
              onMouseLeave={e=>(e.currentTarget as HTMLAnchorElement).style.background="rgba(212,174,116,0.1)"}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Get In Touch
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.62rem", fontWeight:700, letterSpacing:"0.22em", textTransform:"uppercase", color:"rgba(246,244,241,0.85)", marginBottom:"1.75rem" }}>Quick Links</div>
            {[["Services","#services"],["Approach","#approach"],["About","#about"],["Contact","#contact"]].map(([l,h])=>(
              <a key={l} href={h} style={{ display:"block", fontFamily:"'DM Sans',sans-serif", fontSize:"0.86rem", fontWeight:400, color:"rgba(246,244,241,0.88)", textDecoration:"none", marginBottom:"0.75rem", transition:"color 0.2s" }}
                onMouseEnter={e=>(e.currentTarget as HTMLAnchorElement).style.color="#D4AE74"}
                onMouseLeave={e=>(e.currentTarget as HTMLAnchorElement).style.color="rgba(246,244,241,0.35)"}
              >{l}</a>
            ))}
          </div>

          {/* Connect */}
          <div>
            <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.62rem", fontWeight:700, letterSpacing:"0.22em", textTransform:"uppercase", color:"rgba(246,244,241,0.85)", marginBottom:"1.75rem" }}>Connect</div>
            {[
              { l:"founder@synovanceventures.com", h:"mailto:founder@synovanceventures.com" },
              { l:"+92 317 399 7011", h:WA },
              { l:"@synovanceventures", h:"https://www.instagram.com/synovanceventures/" },
            ].map(item=>(
              <a key={item.l} href={item.h} target={item.h.startsWith("http")||item.h.startsWith("https://wa")?"_blank":undefined} rel="noopener noreferrer"
                style={{ display:"block", fontFamily:"'DM Sans',sans-serif", fontSize:"0.86rem", fontWeight:400, color:"rgba(246,244,241,0.88)", textDecoration:"none", marginBottom:"0.75rem", transition:"color 0.2s", wordBreak:"break-word" }}
                onMouseEnter={e=>(e.currentTarget as HTMLAnchorElement).style.color="#D4AE74"}
                onMouseLeave={e=>(e.currentTarget as HTMLAnchorElement).style.color="rgba(246,244,241,0.35)"}
              >{item.l}</a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"1.75rem 0", flexWrap:"wrap", gap:"1rem" }}>
          <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.72rem", fontWeight:400, color:"rgba(246,244,241,0.75)" }}>
            © 2026 Synovance Ventures. All Rights Reserved.
          </p>
          <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.72rem", fontWeight:400, color:"rgba(246,244,241,0.65)" }}>
            Designed &amp; Built by Synovance
          </p>
        </div>
      </div>
    </footer>
  );
}
