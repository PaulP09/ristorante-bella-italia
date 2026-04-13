/**
 * HeroSection – Ristorante Bella Italia
 * Vollbild-Hero mit Restaurantbild, Overlay, animiertem Text und erweiterten Effekten
 */

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663535330585/UnCLPwoXKcTPPwtESbV2DQ/hero-restaurant-frfiFYLYfoPjuymG3dRE9K.webp";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  const scrollToMenu = () => {
    document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden group"
      onMouseMove={handleMouseMove}
    >
      {/* Background Image mit Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500"
        style={{
          backgroundImage: `url(${HERO_IMAGE})`,
          transform: `scale(${1 + (mousePosition.y - 0.5) * 0.02})`,
        }}
      />

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.08_0.03_240/0.7)] via-[oklch(0.08_0.03_240/0.5)] to-[oklch(0.08_0.03_240/0.85)]" />

      {/* Decorative animated lines */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[oklch(0.73_0.12_75/0.3)] to-transparent animate-pulse" />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[oklch(0.73_0.12_75/0.3)] to-transparent animate-pulse" style={{ animationDelay: "0.5s" }} />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[oklch(0.73_0.12_75/0.3)] rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${3 + i}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Subtitle */}
        <div
          className={`transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span
            className="inline-block text-gold text-xs tracking-[0.4em] uppercase mb-6 font-body animate-pulse"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            ✦ &nbsp; Seit 1987 in Mailänder Tradition &nbsp; ✦
          </span>
        </div>

        {/* Main Title mit Stagger */}
        <div
          className={`transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h1
            className="font-display text-6xl md:text-8xl lg:text-9xl font-light text-white leading-none mb-2 drop-shadow-lg"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Bella
          </h1>
          <h1
            className="font-display text-6xl md:text-8xl lg:text-9xl font-semibold italic text-gold leading-none mb-8 drop-shadow-lg animate-pulse"
            style={{ fontFamily: "'Cormorant Garamond', serif", animationDuration: "3s" }}
          >
            Italia
          </h1>
        </div>

        {/* Description */}
        <div
          className={`transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p
            className="text-white/75 text-lg md:text-xl font-light mb-10 max-w-xl mx-auto leading-relaxed font-body drop-shadow-md"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Authentische italienische Küche – zubereitet mit Leidenschaft,
            frischen Zutaten und über 35 Jahren Erfahrung.
          </p>
        </div>

        {/* CTA Buttons mit erweiterten Effekten */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <button
            onClick={() => document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-[oklch(0.52_0.22_25)] text-white text-sm tracking-widest uppercase hover:bg-[oklch(0.45_0.22_25)] transition-all duration-300 font-body relative overflow-hidden group/btn"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <span className="relative z-10">Speisekarte ansehen</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover/btn:translate-x-full transition-transform duration-500" />
          </button>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 border border-[oklch(0.73_0.12_75)] text-gold text-sm tracking-widest uppercase hover:bg-[oklch(0.73_0.12_75/0.15)] transition-all duration-300 font-body relative overflow-hidden group/btn"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <span className="relative z-10">Tisch reservieren</span>
            <div className="absolute inset-0 bg-[oklch(0.73_0.12_75/0.2)] transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator mit Animation */}
      <button
        onClick={scrollToMenu}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-gold transition-colors animate-bounce"
        aria-label="Nach unten scrollen"
      >
        <ChevronDown size={32} className="drop-shadow-lg" />
      </button>

      {/* Decorative corner elements */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-[oklch(0.73_0.12_75/0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-[oklch(0.73_0.12_75/0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </section>
  );
}
