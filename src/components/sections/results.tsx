import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export function Results() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="section-light py-28 md:py-40">
      <div className="container mx-auto px-6 max-w-7xl">
        <div
          ref={ref}
          className={`mb-20 fade-in-up ${isVisible ? "visible" : ""}`}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="copper-rule" />
            <span className="eyebrow text-syn-copper">Track Record</span>
          </div>
          <h2
            className="font-serif text-syn-black"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}
          >
            Early Results.
          </h2>
          <p className="font-sans text-syn-black/50 text-lg font-light leading-relaxed mt-6 max-w-xl">
            We're building our track record in public. Here's what's in motion right now.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {[
            {
              badge: "In Progress",
              copy: "Building a complete digital foundation for a professional services client — full website, automation, and content system.",
              note: "Case study coming Q3 2026.",
            },
            {
              badge: "In Progress",
              copy: "Launching a multi-channel growth campaign for an e-commerce brand, with full funnel tracking and a content pipeline.",
              note: "Performance data available upon request.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className={`p-10 md:p-14 fade-in-up ${isVisible ? "visible" : ""}`}
              style={{
                transitionDelay: `${100 + i * 120}ms`,
                background: "#0B0F14",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div
                className="inline-block eyebrow text-syn-copper mb-8 px-3 py-1"
                style={{ border: "1px solid rgba(199,137,82,0.35)" }}
              >
                {card.badge}
              </div>
              <p className="font-sans text-syn-light/65 text-base md:text-lg font-light leading-relaxed mb-6">
                {card.copy}
              </p>
              <p className="font-sans text-syn-light/30 text-sm font-light">{card.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
