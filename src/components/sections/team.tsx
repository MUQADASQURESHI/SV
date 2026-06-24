import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const members = [
  { initials: "AM", name: "Alex Mercer",   role: "Founder & Strategic Director",       bio: "Architects the overall system strategy. 5+ years running digital programs for mid-market brands." },
  { initials: "JL", name: "Jordan Lee",    role: "Lead Developer — Web & Mobile",      bio: "Builds the technical infrastructure. Previously led engineering at a boutique product studio." },
  { initials: "PN", name: "Priya Nair",    role: "Growth & Performance Marketing Lead", bio: "Drives acquisition and retention. Background in paid media and conversion optimisation." },
  { initials: "SC", name: "Sam Chen",      role: "Brand & Creative Director",           bio: "Shapes the visual identity. Formerly creative lead at a regional agency." },
  { initials: "TR", name: "Taylor Reeves", role: "Automation & AI Systems Engineer",    bio: "Connects the tools. Specialises in workflow automation and AI integration." },
];

export function Team() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="py-28 md:py-40 bg-syn-black" id="about">
      <div className="container mx-auto px-6 max-w-7xl">
        <div
          ref={ref}
          className={`max-w-3xl mb-20 fade-in-up ${isVisible ? "visible" : ""}`}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="copper-rule" />
            <span className="eyebrow text-syn-copper">The Team</span>
          </div>
          <h2
            className="font-serif text-syn-light mb-8"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}
          >
            Built By People Who've
            <br />Done This Before.
          </h2>
          <p className="font-sans text-syn-light/50 text-lg font-light leading-relaxed">
            Synovance was founded after years inside agency life — designing, building, and strategising across dozens of client engagements. We saw talented teams delivering great pieces that never added up to a real system. We started Synovance to fix that.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {members.map((m, i) => (
            <div
              key={i}
              className={`group p-8 border border-white/6 hover:border-syn-copper/30 transition-all duration-500 fade-in-up ${isVisible ? "visible" : ""}`}
              style={{
                transitionDelay: `${i * 100}ms`,
                background: "linear-gradient(135deg, #131820 0%, #0e1419 100%)",
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
                style={{ background: "rgba(199,137,82,0.08)", border: "1px solid rgba(199,137,82,0.3)" }}
              >
                <span className="font-serif text-syn-copper text-base">{m.initials}</span>
              </div>
              <h3 className="font-serif text-lg text-syn-light mb-1">{m.name}</h3>
              <p className="eyebrow text-syn-copper mb-5">{m.role}</p>
              <p className="font-sans text-syn-light/40 text-sm font-light leading-relaxed">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
