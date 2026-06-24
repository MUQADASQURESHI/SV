import { useEffect, useRef, useState, RefObject } from "react";

export function useReveal(options: IntersectionObserverInit = {}): [RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px", ...options }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, visible];
}

// legacy alias
export function useIntersectionObserver(options = {}): [RefObject<HTMLDivElement | null>, boolean] {
  return useReveal(options);
}
