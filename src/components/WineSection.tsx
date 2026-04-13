/**
 * WineSection – Ristorante Bella Italia
 * Weinauswahl mit eleganter Darstellung und erweiterten Effekten
 */

import { useEffect, useRef, useState } from "react";
import { Wine } from "lucide-react";

const WINE_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663535330585/UnCLPwoXKcTPPwtESbV2DQ/wine-selection-2XpUS6ES4fQQ3teH6kSfkJ.webp";

const wines = [
  {
    name: "Barolo DOCG",
    region: "Piemont, 2019",
    description: "Der König der italienischen Rotweine – komplex, tanninreich mit Noten von Kirschen, Rosen und Tabak.",
    price: "68,00",
    type: "Rotwein",
    rating: 5,
  },
  {
    name: "Brunello di Montalcino",
    region: "Toskana, 2018",
    description: "Eleganter Sangiovese mit tiefer Rubinfarbe, Aromen von roten Früchten und einer langen, mineralischen Nachreife.",
    price: "89,00",
    type: "Rotwein",
    rating: 5,
  },
  {
    name: "Pinot Grigio delle Venezie",
    region: "Venetien, 2022",
    description: "Frisch und lebendig mit Aromen von grünem Apfel, Birne und einem Hauch Mandel. Perfekt zu Fisch.",
    price: "38,00",
    type: "Weißwein",
    rating: 4,
  },
  {
    name: "Gavi di Gavi DOCG",
    region: "Piemont, 2022",
    description: "Trockener, eleganter Weißwein aus Cortese-Trauben mit Zitrusaromen und einer frischen Mineralität.",
    price: "44,00",
    type: "Weißwein",
    rating: 4,
  },
  {
    name: "Prosecco Superiore DOCG",
    region: "Valdobbiadene, 2023",
    description: "Perlender Schaumwein mit feinen Bläschen, Aromen von Pfirsich, Apfel und weißen Blüten.",
    price: "42,00",
    type: "Schaumwein",
    rating: 4,
  },
  {
    name: "Amarone della Valpolicella",
    region: "Venetien, 2017",
    description: "Kraftvoller, trockener Rotwein aus getrockneten Trauben – intensiv, vollmundig mit Schokoladen- und Pflaumenaromen.",
    price: "95,00",
    type: "Rotwein",
    rating: 5,
  },
];

const typeColors: Record<string, string> = {
  Rotwein: "text-[oklch(0.52_0.22_25)]",
  Weißwein: "text-[oklch(0.73_0.12_75)]",
  Schaumwein: "text-[oklch(0.73_0.12_75)]",
};

export default function WineSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="wine" ref={ref} className="py-0 bg-[oklch(0.18_0.04_240)]">
      <div className="grid lg:grid-cols-2">
        {/* Left: Image */}
        <div
          className={`relative h-[500px] lg:h-auto overflow-hidden transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={WINE_IMAGE}
            alt="Weinauswahl"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[oklch(0.18_0.04_240/0.8)] lg:to-[oklch(0.18_0.04_240/0.6)]" />
          <div className="absolute bottom-8 left-8 right-8">
            <div className="border border-[oklch(0.73_0.12_75/0.4)] p-6 backdrop-blur-sm bg-[oklch(0.12_0.03_240/0.6)] hover:border-[oklch(0.73_0.12_75)] transition-all duration-300 group">
              <p
                className="text-[oklch(0.73_0.12_75)] font-display text-2xl italic mb-2 group-hover:text-white transition-colors duration-300"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                "Il vino è la poesia della terra"
              </p>
              <p
                className="text-white/50 text-xs tracking-widest font-body group-hover:text-white/70 transition-colors duration-300"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                — Mario Soldati
              </p>
            </div>
          </div>
        </div>

        {/* Right: Wine List */}
        <div
          className={`p-10 lg:p-16 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
        >
          <div className="flex items-center gap-2 mb-4">
            <Wine size={16} className="text-[oklch(0.73_0.12_75)]" />
            <span
              className="text-[oklch(0.73_0.12_75)] text-xs tracking-[0.4em] uppercase font-body"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              ✦ &nbsp; Unsere Weinkarte
            </span>
          </div>
          <h2
            className="font-display text-5xl font-light text-white leading-tight mb-10"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            La Cantina
          </h2>

          <div className="space-y-6 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
            {wines.map((wine, i) => (
              <div
                key={i}
                className="border-b border-white/10 pb-6 last:border-0 group hover:border-[oklch(0.73_0.12_75/0.3)] transition-all duration-300 cursor-pointer stagger-item"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  opacity: visible ? 1 : 0,
                  animationDelay: `${i * 80}ms`,
                  transform: hoveredIndex === i ? "translateX(8px)" : "translateX(0)",
                  transition: "transform 0.3s ease",
                }}
              >
                <div className="flex items-start justify-between gap-4 mb-1">
                  <div>
                    <h3
                      className="font-display text-xl text-white group-hover:text-[oklch(0.73_0.12_75)] transition-colors duration-300"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {wine.name}
                    </h3>
                    <div className="flex items-center gap-3 mt-0.5">
                      <span
                        className={`text-xs tracking-widest uppercase font-body ${typeColors[wine.type]}`}
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {wine.type}
                      </span>
                      <span className="text-white/30 text-xs font-body" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        {wine.region}
                      </span>
                    </div>
                  </div>
                  <span
                    className="text-[oklch(0.73_0.12_75)] font-display text-xl font-semibold whitespace-nowrap group-hover:text-white transition-colors duration-300"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {wine.price} €
                  </span>
                </div>
                <p
                  className="text-white/40 text-xs leading-relaxed font-body group-hover:text-white/60 transition-colors duration-300"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {wine.description}
                </p>
                {/* Rating */}
                <div className="flex gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {Array.from({ length: wine.rating }).map((_, j) => (
                    <span key={j} className="text-[oklch(0.73_0.12_75)] text-xs">★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p
            className="text-white/30 text-xs mt-6 font-body"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Preise pro Flasche · Glasweise auf Anfrage · Weitere Weine auf unserer vollständigen Weinkarte
          </p>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: oklch(0.73 0.12 75 / 0.3);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: oklch(0.73 0.12 75 / 0.5);
        }
      `}</style>
    </section>
  );
}
