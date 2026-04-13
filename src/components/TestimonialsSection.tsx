/**
 * TestimonialsSection – Ristorante Bella Italia
 * Kundenbewertungen mit elegantem Design und erweiterten Effekten
 */

import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sophie M.",
    location: "München",
    rating: 5,
    text: "Das beste Ossobuco, das ich je gegessen habe! Die Atmosphäre ist wunderschön, das Personal aufmerksam und die Weinkarte beeindruckend. Wir kommen immer wieder.",
    date: "März 2025",
  },
  {
    name: "Thomas K.",
    location: "Wien",
    rating: 5,
    text: "Authentische italienische Küche auf höchstem Niveau. Das Tiramisù ist ein Gedicht – genau wie in Mailand. Sehr zu empfehlen für besondere Anlässe.",
    date: "Februar 2025",
  },
  {
    name: "Laura B.",
    location: "Zürich",
    rating: 5,
    text: "Ein unvergessliches Abendessen! Die handgemachten Tagliatelle mit Ragù waren perfekt, und der Barolo dazu einfach grandios. Das Ambiente ist einzigartig.",
    date: "Januar 2025",
  },
];

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [visible]);

  return (
    <section ref={ref} className="py-24 bg-[oklch(0.98_0.01_80)] relative overflow-hidden">
      {/* Decorative background text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[oklch(0.18_0.04_240/0.04)] font-display text-[12rem] font-bold leading-none pointer-events-none select-none whitespace-nowrap"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        Recensioni
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span
            className="text-[oklch(0.52_0.22_25)] text-xs tracking-[0.4em] uppercase font-body mb-4 block"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            ✦ &nbsp; Was unsere Gäste sagen
          </span>
          <h2
            className="font-display text-5xl md:text-6xl font-light text-[oklch(0.18_0.04_240)] leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Stimmen unserer{" "}
            <span className="italic text-[oklch(0.52_0.22_25)]">Gäste</span>
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`bg-white p-10 shadow-lg transition-all duration-700 ${
                  activeIndex === i
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "absolute opacity-0 translate-y-8 pointer-events-none"
                }`}
              >
                {/* Quote Icon */}
                <Quote size={32} className="text-[oklch(0.73_0.12_75/0.2)] mb-4" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} className="fill-[oklch(0.73_0.12_75)] text-[oklch(0.73_0.12_75)]" />
                  ))}
                </div>

                {/* Text */}
                <p
                  className="text-[oklch(0.35_0.03_240)] leading-relaxed mb-6 font-body text-lg italic"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  "{t.text}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-between border-t border-[oklch(0.88_0.02_80)] pt-4">
                  <div>
                    <div
                      className="font-display text-lg text-[oklch(0.18_0.04_240)]"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {t.name}
                    </div>
                    <div
                      className="text-xs text-[oklch(0.55_0.03_240)] font-body"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {t.location}
                    </div>
                  </div>
                  <span
                    className="text-xs text-[oklch(0.65_0.03_240)] font-body"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {t.date}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === i
                    ? "bg-[oklch(0.52_0.22_25)] w-8"
                    : "bg-[oklch(0.88_0.02_80)] hover:bg-[oklch(0.73_0.12_75)]"
                }`}
                aria-label={`Bewertung ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Google Rating */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-3 bg-white px-8 py-4 shadow-md hover:shadow-lg transition-all duration-300 group">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} className="fill-[oklch(0.73_0.12_75)] text-[oklch(0.73_0.12_75)] group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }} />
              ))}
            </div>
            <span
              className="font-display text-2xl text-[oklch(0.18_0.04_240)]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              4,9
            </span>
            <span
              className="text-[oklch(0.55_0.03_240)] text-sm font-body"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              · 312 Google-Bewertungen
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
