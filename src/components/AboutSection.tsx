/**
 * AboutSection – Ristorante Bella Italia
 * Über uns Sektion mit erweiterten Animationen und interaktiven Elementen
 */

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "35+", label: "Jahre Erfahrung" },
  { value: "120", label: "Sitzplätze" },
  { value: "48", label: "Gerichte" },
  { value: "200+", label: "Weinflaschen" },
];

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [counters, setCounters] = useState({ 0: 0, 1: 0, 2: 0, 3: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Counter animation
  useEffect(() => {
    if (!visible) return;

    const intervals = [
      setInterval(() => setCounters((prev) => ({ ...prev, 0: Math.min(prev[0] + 1, 35) })), 30),
      setInterval(() => setCounters((prev) => ({ ...prev, 1: Math.min(prev[1] + 3, 120) })), 30),
      setInterval(() => setCounters((prev) => ({ ...prev, 2: Math.min(prev[2] + 1, 48) })), 30),
      setInterval(() => setCounters((prev) => ({ ...prev, 3: Math.min(prev[3] + 5, 200) })), 30),
    ];

    return () => intervals.forEach(clearInterval);
  }, [visible]);

  return (
    <section id="about" ref={ref} className="py-24 bg-[oklch(0.98_0.01_80)]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <span
              className="text-[oklch(0.52_0.22_25)] text-xs tracking-[0.4em] uppercase font-body mb-4 block animate-pulse"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              ✦ &nbsp; Unsere Geschichte
            </span>
            <h2
              className="font-display text-5xl md:text-6xl font-light text-[oklch(0.18_0.04_240)] leading-tight mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              La Dolce Vita –<br />
              <span className="italic text-[oklch(0.52_0.22_25)]">auf Ihrem Teller</span>
            </h2>
            <div
              className="space-y-4 text-[oklch(0.35_0.03_240)] leading-relaxed font-body"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <p className="hover:text-[oklch(0.18_0.04_240)] transition-colors duration-300">
                Seit 1987 bringen wir die Aromen Italiens in die Herzen unserer Gäste.
                Gegründet von der Familie Rossi aus Mailand, ist das Ristorante Bella Italia
                ein Ort, an dem Tradition und Leidenschaft auf jedem Teller zu schmecken sind.
              </p>
              <p className="hover:text-[oklch(0.18_0.04_240)] transition-colors duration-300">
                Unser Küchenchef Marco Rossi reist jedes Jahr nach Italien, um die frischesten
                Zutaten zu entdecken – von handgemachter Pasta aus der Toskana bis hin zu
                feinstem Olivenöl aus Sizilien. Jedes Gericht erzählt eine Geschichte.
              </p>
              <p className="hover:text-[oklch(0.18_0.04_240)] transition-colors duration-300">
                Wir laden Sie ein, in unserem eleganten Ambiente zu verweilen und die
                authentische Küche Italiens in ihrer reinsten Form zu erleben.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-6 group">
              <div className="w-12 h-px bg-[oklch(0.73_0.12_75)] group-hover:w-20 transition-all duration-500" />
              <div>
                <span
                  className="text-[oklch(0.73_0.12_75)] text-sm italic font-display group-hover:text-white transition-colors duration-300"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem" }}
                >
                  Marco Rossi
                </span>
                <p
                  className="text-white/50 text-xs font-body group-hover:text-white/70 transition-colors duration-300"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Küchenchef & Gründer
                </p>
              </div>
            </div>
          </div>

          {/* Right: Stats Grid */}
          <div className={`transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-[oklch(0.18_0.04_240)] p-8 text-center group hover:bg-[oklch(0.52_0.22_25)] transition-all duration-500 cursor-pointer transform hover:scale-105 stagger-item"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div
                    className="font-display text-5xl font-light text-[oklch(0.73_0.12_75)] group-hover:text-white transition-all duration-500 mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {counters[i as keyof typeof counters]}
                    {stat.value.includes("+") ? "+" : ""}
                  </div>
                  <div
                    className="text-white/60 text-xs tracking-widest uppercase group-hover:text-white/80 transition-colors duration-500 font-body"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative element */}
            <div className="mt-6 p-6 border border-[oklch(0.73_0.12_75/0.3)] relative group hover:border-[oklch(0.73_0.12_75)] transition-all duration-300">
              <div className="absolute -top-3 left-6 bg-[oklch(0.98_0.01_80)] px-3">
                <span className="text-[oklch(0.73_0.12_75)] text-xs tracking-widest uppercase font-body group-hover:text-[oklch(0.52_0.22_25)] transition-colors duration-300" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Öffnungszeiten
                </span>
              </div>
              <div className="space-y-2 font-body" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <div className="flex justify-between text-sm text-[oklch(0.35_0.03_240)] group-hover:text-[oklch(0.18_0.04_240)] transition-colors duration-300">
                  <span>Dienstag – Freitag</span>
                  <span className="font-medium">12:00 – 14:30 & 18:00 – 22:30</span>
                </div>
                <div className="flex justify-between text-sm text-[oklch(0.35_0.03_240)] group-hover:text-[oklch(0.18_0.04_240)] transition-colors duration-300">
                  <span>Samstag – Sonntag</span>
                  <span className="font-medium">12:00 – 23:00</span>
                </div>
                <div className="flex justify-between text-sm text-[oklch(0.55_0.03_240)]">
                  <span>Montag</span>
                  <span className="text-[oklch(0.52_0.22_25)] font-medium">Ruhetag</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
