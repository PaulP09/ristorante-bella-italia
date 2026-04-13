/**
 * Footer – Ristorante Bella Italia
 * Eleganter Footer mit Links, Kontakt, Social Media und Copyright
 */

import { MapPin, Phone, Mail, Clock } from "lucide-react";

// Inline SVG Icons für Social Media
const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { label: "Über uns", href: "#about" },
      { label: "Speisekarte", href: "#menu" },
      { label: "Galerie", href: "#gallery" },
      { label: "Weinkarte", href: "#wine" },
      { label: "Kontakt", href: "#contact" },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { label: "Impressum", href: "#/impressum" },
      { label: "Datenschutz", href: "#/datenschutz" },
      { label: "AGB", href: "#/agb" },
    ],
  },
];

const handleNavClick = (href: string) => {
  if (href === "#") return;
  // Hash-basiertes Routing für GitHub Pages
  if (href.startsWith("#/")) {
    window.location.hash = href.slice(1);
    window.scrollTo(0, 0);
    return;
  }
  if (href.startsWith("/")) {
    window.location.hash = href;
    window.scrollTo(0, 0);
    return;
  }
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[oklch(0.10_0.025_240)] border-t border-white/5">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand & About */}
          <div className="md:col-span-2">
            <div className="mb-4 group">
              <span
                className="font-display text-3xl font-semibold italic text-[oklch(0.73_0.12_75)] group-hover:text-white transition-colors duration-300"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Bella Italia
              </span>
              <div
                className="text-[10px] tracking-[0.3em] uppercase text-white/40 mt-0.5 font-body group-hover:text-white/60 transition-colors duration-300"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Ristorante
              </div>
            </div>
            <p
              className="text-white/40 text-sm leading-relaxed max-w-xs mb-6 font-body hover:text-white/60 transition-colors duration-300"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Authentische italienische Küche in Mailänder Tradition –
              seit 1987 ein Ort der Begegnung, des Genusses und der Leidenschaft.
            </p>

            {/* Quick Contact */}
            <div className="space-y-3">
              <a
                href="tel:+498912345678"
                className="flex items-center gap-2 hover:text-gold transition-colors duration-300 group"
              >
                <Phone size={14} className="text-[oklch(0.73_0.12_75)] flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                <span
                  className="text-white/60 text-sm font-body group-hover:text-white/80"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  +49 (0) 89 123 456 78
                </span>
              </a>
              <a
                href="mailto:info@bella-italia.de"
                className="flex items-center gap-2 hover:text-gold transition-colors duration-300 group"
              >
                <Mail size={14} className="text-[oklch(0.73_0.12_75)] flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                <span
                  className="text-white/60 text-sm font-body group-hover:text-white/80"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  info@bella-italia.de
                </span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-[oklch(0.73_0.12_75)] flex-shrink-0" />
                <span
                  className="text-white/60 text-sm font-body"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Via Roma 42, 80100 München
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-[oklch(0.73_0.12_75)] flex-shrink-0" />
                <span
                  className="text-white/60 text-sm font-body"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Di–So 12:00–23:00 | Mo Ruhetag
                </span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 hover:border-[oklch(0.73_0.12_75)] hover:text-[oklch(0.73_0.12_75)] hover:bg-[oklch(0.73_0.12_75/0.1)] transition-all duration-300 hover:scale-110 rounded"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 hover:border-[oklch(0.73_0.12_75)] hover:text-[oklch(0.73_0.12_75)] hover:bg-[oklch(0.73_0.12_75/0.1)] transition-all duration-300 hover:scale-110 rounded"
              >
                <FacebookIcon size={16} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4
                className="text-[oklch(0.73_0.12_75)] text-xs tracking-widest uppercase mb-5 font-body font-semibold"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-white/40 hover:text-[oklch(0.73_0.12_75)] text-sm transition-all duration-300 font-body text-left hover:translate-x-1"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-white/25 text-xs font-body"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            © {currentYear} Ristorante Bella Italia. Alle Rechte vorbehalten. | Designed with ❤️ for Italian Excellence
          </p>
          <div className="flex items-center gap-3">
            <div className="w-6 h-px bg-[oklch(0.73_0.12_75/0.5)]" />
            <span
              className="text-[oklch(0.73_0.12_75/0.7)] text-xs italic font-display"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Buon appetito 🍝
            </span>
            <div className="w-6 h-px bg-[oklch(0.73_0.12_75/0.5)]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
