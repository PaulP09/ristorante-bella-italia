/**
 * Navbar – Ristorante Bella Italia
 * Sticky navigation mit erweiterten Scroll-Effekten und Interaktionen
 */

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  scrolled: boolean;
}

const navLinks = [
  { label: "Über uns", href: "#about" },
  { label: "Speisekarte", href: "#menu" },
  { label: "Galerie", href: "#gallery" },
  { label: "Weine", href: "#wine" },
  { label: "Kontakt", href: "#contact" },
];

export default function Navbar({ scrolled }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.slice(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[oklch(0.12_0.03_240/0.97)] backdrop-blur-xl shadow-2xl py-3 border-b border-white/5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex flex-col leading-none group"
        >
          <span
            className="font-display text-2xl font-semibold italic text-gold tracking-wide group-hover:text-white transition-colors duration-300"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Bella Italia
          </span>
          <span
            className="text-[10px] tracking-[0.3em] uppercase text-white/60 font-body mt-0.5 group-hover:text-white/80 transition-colors duration-300"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Ristorante
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative text-sm tracking-widest uppercase font-body transition-all duration-300 group ${
                  isActive ? "text-gold" : "text-white/80 hover:text-gold"
                }`}
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gold transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            );
          })}
          <button
            onClick={() => handleNavClick("#contact")}
            className="ml-4 px-5 py-2 border border-[oklch(0.73_0.12_75)] text-gold hover:bg-[oklch(0.73_0.12_75)] hover:text-[oklch(0.12_0.03_240)] transition-all duration-300 text-xs tracking-widest uppercase font-body relative overflow-hidden group"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <span className="relative z-10">Reservieren</span>
            <div className="absolute inset-0 bg-[oklch(0.73_0.12_75)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2 hover:text-gold transition-colors duration-300"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü öffnen"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[oklch(0.12_0.03_240)] border-t border-white/10 py-6 animate-slide-in-down">
          <div className="container flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-left text-sm tracking-widest uppercase py-2 border-b border-white/10 transition-colors duration-300 font-body ${
                    isActive ? "text-gold" : "text-white/80 hover:text-gold"
                  }`}
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {link.label}
                </button>
              );
            })}
            <button
              onClick={() => handleNavClick("#contact")}
              className="mt-2 px-5 py-3 border border-[oklch(0.73_0.12_75)] text-gold text-sm tracking-widest uppercase text-center hover:bg-[oklch(0.73_0.12_75/0.1)] transition-colors duration-300 font-body"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Reservieren
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
