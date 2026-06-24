import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const WA = "https://wa.me/923173997011?text=Hi%2C%20I%27d%20like%20to%20book%20a%20discovery%20call%20with%20Synovance%20Ventures";

const links = [
  { label: "Services",  href: "#services" },
  { label: "Approach",  href: "#approach" },
  { label: "About",     href: "#about" },
  { label: "Contact",   href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(234,230,225,0.97)" : "rgba(234,230,225,0.92)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid rgba(11,15,20,0.08)",
      transition: "background 0.3s",
    }}>
      <div className="s-container" style={{ height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo — use logo2 for header and increase size; link to homepage */}
        <a href="https://synovanceventures.com" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <img src="/logo2.png" alt="Synovance Ventures" style={{ height: 56, width: "auto" }} />
        </a>

        {/* Desktop nav */}
        <div className="s-nav-links" style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
          {links.map(l => (
            <a key={l.label} href={l.href} style={{
              fontFamily: "'DM Sans',sans-serif", fontSize: "0.76rem", fontWeight: 500,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "rgba(11,15,20,0.5)", textDecoration: "none", transition: "color 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "#0B0F14"}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "rgba(11,15,20,0.5)"}
            >{l.label}</a>
          ))}
          <a href={WA} target="_blank" rel="noopener noreferrer" style={{
            fontFamily: "'DM Sans',sans-serif", fontSize: "0.74rem", fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase",
            color: "#F6F4F1", background: "#0B0F14",
            padding: "0.6rem 1.5rem", textDecoration: "none", borderRadius: 3,
            transition: "background 0.2s, transform 0.15s", display: "inline-block",
          }}
            onMouseEnter={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = "#D4AE74"; a.style.color = "#0B0F14"; a.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = "#0B0F14"; a.style.color = "#F6F4F1"; a.style.transform = "none"; }}
          >Book A Call</a>
        </div>

        {/* Mobile toggle */}
        <button
          className="s-nav-mobile-btn"
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", cursor: "pointer", color: "#0B0F14", padding: "0.5rem", display: "none", alignItems: "center" }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "#EAE6E1", borderTop: "1px solid rgba(11,15,20,0.08)", padding: "1.5rem" }}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} style={{
              display: "block", padding: "0.85rem 0",
              fontFamily: "'DM Sans',sans-serif", fontSize: "0.82rem", fontWeight: 500,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "rgba(11,15,20,0.6)", textDecoration: "none",
              borderBottom: "1px solid rgba(11,15,20,0.07)",
            }}>{l.label}</a>
          ))}
          <a href={WA} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} style={{
            display: "block", marginTop: "1.25rem", padding: "0.9rem 0", textAlign: "center",
            fontFamily: "'DM Sans',sans-serif", fontSize: "0.78rem", fontWeight: 700,
            letterSpacing: "0.12em", textTransform: "uppercase",
            color: "#F6F4F1", background: "#0B0F14", textDecoration: "none", borderRadius: 3,
          }}>Book A Call on WhatsApp</a>
        </div>
      )}
    </nav>
  );
}
