/**
 * MenuSection – Ristorante Bella Italia
 * Vollständige Speisekarte mit Tabs und erweiterten Animationen
 */

import { useState, useEffect, useRef } from "react";

const categories = ["Antipasti", "Pasta", "Pizza", "Hauptgerichte", "Dolci"];

const menuItems = {
  Antipasti: [
    {
      name: "Antipasto della Casa",
      description: "Prosciutto di Parma, Salami, Bruschetta, Oliven, Mozzarella, gegrillte Paprika und Artischocken",
      price: "18,90",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663535330585/UnCLPwoXKcTPPwtESbV2DQ/antipasti-8VxWW4SAd2dzfSbYHQV9R3.webp",
      tag: "Empfehlung",
    },
    {
      name: "Bruschetta al Pomodoro",
      description: "Geröstetes Ciabatta mit frischen Tomaten, Knoblauch, Basilikum und nativem Olivenöl extra",
      price: "9,50",
      image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&q=80",
    },
    {
      name: "Carpaccio di Manzo",
      description: "Hauchdünn geschnittenes Rinderfilet, Rucola, Parmesanspäne, Kapern und Zitronenvinaigrette",
      price: "16,90",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80",
      tag: "Neu",
    },
    {
      name: "Zuppa di Pomodoro",
      description: "Cremige Tomatensuppe mit frischem Basilikum, Croutons und einem Hauch Sahne",
      price: "8,90",
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80",
    },
  ],
  Pasta: [
    {
      name: "Spaghetti Carbonara",
      description: "Spaghetti mit Guanciale, Eigelb, Pecorino Romano und schwarzem Pfeffer – original römisch",
      price: "17,50",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663535330585/UnCLPwoXKcTPPwtESbV2DQ/pasta-carbonara-XjNCxRccyJYYuG9RYetWNm.webp",
      tag: "Klassiker",
    },
    {
      name: "Tagliatelle al Ragù",
      description: "Hausgemachte Tagliatelle mit langsam geschmortem Rindfleisch-Ragù nach Bolognese-Art",
      price: "18,90",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80",
    },
    {
      name: "Penne all'Arrabbiata",
      description: "Penne mit würziger Tomatensauce, Knoblauch und Peperoncini – pikant und aromatisch",
      price: "14,50",
      image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&q=80",
    },
    {
      name: "Risotto ai Funghi Porcini",
      description: "Cremiges Risotto mit frischen Steinpilzen, Weißwein, Parmesan und Trüffelöl",
      price: "21,90",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663535330585/UnCLPwoXKcTPPwtESbV2DQ/risotto-funghi-hvQBgW5H4DG7tiVD5bUJxq.webp",
      tag: "Empfehlung",
    },
    {
      name: "Gnocchi al Gorgonzola",
      description: "Hausgemachte Kartoffelgnocchi mit cremiger Gorgonzola-Sauce und Walnüssen",
      price: "16,90",
      image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&q=80",
    },
    {
      name: "Linguine alle Vongole",
      description: "Linguine mit frischen Venusmuscheln, Weißwein, Knoblauch, Petersilie und Olivenöl",
      price: "22,90",
      image: "https://images.unsplash.com/photo-1559742811-822873691df8?w=400&q=80",
    },
  ],
  Pizza: [
    {
      name: "Pizza Margherita",
      description: "San-Marzano-Tomaten, Fior di Latte Mozzarella, frisches Basilikum, Olivenöl – der Klassiker",
      price: "13,90",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663535330585/UnCLPwoXKcTPPwtESbV2DQ/pizza-margherita-2EGJ6hE6Uwzu7SngLLLfph.webp",
      tag: "Klassiker",
    },
    {
      name: "Pizza Diavola",
      description: "Tomatensauce, Mozzarella, scharfe Salami, frische Chili und Basilikum – für Mutige",
      price: "15,90",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663535330585/UnCLPwoXKcTPPwtESbV2DQ/pizza-diavola-ar5zS7BHX86sUWFMa53zor.webp",
      tag: "Scharf",
    },
    {
      name: "Pizza Quattro Stagioni",
      description: "Tomatensauce, Mozzarella, Schinken, Champignons, Artischocken und Oliven",
      price: "16,50",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
    },
    {
      name: "Pizza Tartufo",
      description: "Weiße Basis, Mozzarella, schwarze Trüffel, Rucola und Parmesanspäne",
      price: "22,90",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80",
      tag: "Premium",
    },
  ],
  Hauptgerichte: [
    {
      name: "Ossobuco alla Milanese",
      description: "Geschmorte Kalbshaxe mit Gremolata, serviert mit Safranrisotto – das Mailänder Signature-Gericht",
      price: "32,90",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663535330585/UnCLPwoXKcTPPwtESbV2DQ/ossobuco-3z8SMPtnz5NM9QvmeRTs4V.webp",
      tag: "Signature",
    },
    {
      name: "Branzino al Forno",
      description: "Im Ofen gebackener Wolfsbarsch mit Kapern, Oliven, Tomaten und Kräutern",
      price: "28,90",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&q=80",
    },
    {
      name: "Tagliata di Manzo",
      description: "Aufgeschnittenes Rindersteak auf Rucola mit Parmesanspänen und Balsamico-Reduktion",
      price: "34,90",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80",
      tag: "Empfehlung",
    },
    {
      name: "Pollo alla Parmigiana",
      description: "Paniertes Hähnchenbrustfilet mit Tomatensauce, Mozzarella und Parmesan überbacken",
      price: "24,90",
      image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400&q=80",
    },
  ],
  Dolci: [
    {
      name: "Tiramisù della Casa",
      description: "Hausgemachtes Tiramisù mit Mascarpone, Espresso, Savoiardi und Kakaopulver",
      price: "8,90",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663535330585/UnCLPwoXKcTPPwtESbV2DQ/tiramisu-5c3RvJTrHEXJxva9WuLZjN.webp",
      tag: "Klassiker",
    },
    {
      name: "Panna Cotta ai Frutti di Bosco",
      description: "Cremige Panna Cotta mit frischen Waldbeeren und Erdbeer-Coulis",
      price: "7,90",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663535330585/UnCLPwoXKcTPPwtESbV2DQ/panna-cotta-k2qqYv8n22V7Hk6nyMyzYp.webp",
    },
    {
      name: "Cannoli Siciliani",
      description: "Knusprige Cannoli-Röhren gefüllt mit Ricotta-Creme, kandierten Früchten und Pistazien",
      price: "7,50",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&q=80",
    },
    {
      name: "Gelato Artigianale",
      description: "Drei Kugeln hausgemachtes Eis – Pistazie, Stracciatella und Zitrone – mit Waffel",
      price: "6,90",
      image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=400&q=80",
    },
  ],
};

const tagColors: Record<string, string> = {
  Empfehlung: "bg-[oklch(0.73_0.12_75)] text-[oklch(0.12_0.03_240)]",
  Klassiker: "bg-[oklch(0.18_0.04_240)] text-white",
  Neu: "bg-[oklch(0.52_0.22_25)] text-white",
  Scharf: "bg-[oklch(0.52_0.22_25)] text-white",
  Premium: "bg-[oklch(0.73_0.12_75)] text-[oklch(0.12_0.03_240)]",
  Signature: "bg-[oklch(0.52_0.22_25)] text-white",
};

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("Antipasti");
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const items = menuItems[activeCategory as keyof typeof menuItems] || [];

  return (
    <section id="menu" ref={ref} className="py-24 bg-[oklch(0.18_0.04_240)]">
      <div className="container">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span
            className="text-[oklch(0.73_0.12_75)] text-xs tracking-[0.4em] uppercase font-body mb-4 block"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            ✦ &nbsp; Unsere Küche
          </span>
          <h2
            className="font-display text-5xl md:text-6xl font-light text-white leading-tight mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            La Nostra{" "}
            <span className="italic text-[oklch(0.73_0.12_75)]">Cucina</span>
          </h2>
          <p
            className="text-white/60 max-w-xl mx-auto font-body"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Alle Gerichte werden täglich frisch zubereitet – mit sorgfältig
            ausgewählten Zutaten aus Italien und der Region.
          </p>
        </div>

        {/* Category Tabs */}
        <div className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 text-xs tracking-widest uppercase transition-all duration-300 font-body relative overflow-hidden group ${
                activeCategory === cat
                  ? "bg-[oklch(0.52_0.22_25)] text-white"
                  : "border border-white/20 text-white/60 hover:border-[oklch(0.73_0.12_75)] hover:text-[oklch(0.73_0.12_75)]"
              }`}
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <span className="relative z-10">{cat}</span>
              {activeCategory === cat && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={`${activeCategory}-${i}`}
              className="menu-card bg-[oklch(0.14_0.035_240)] group overflow-hidden stagger-item"
              style={{
                opacity: visible ? 1 : 0,
                animationDelay: `${i * 80}ms`,
              }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.14_0.035_240)] to-transparent opacity-60" />
                {item.tag && (
                  <span
                    className={`absolute top-3 right-3 text-[10px] tracking-widest uppercase px-2 py-1 font-body ${tagColors[item.tag] || "bg-white text-black"}`}
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {item.tag}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3
                    className="font-display text-lg font-medium text-white leading-tight group-hover:text-[oklch(0.73_0.12_75)] transition-colors duration-300"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {item.name}
                  </h3>
                  <span
                    className="text-[oklch(0.73_0.12_75)] font-display text-lg font-semibold whitespace-nowrap"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {item.price} €
                  </span>
                </div>
                <p
                  className="text-white/50 text-xs leading-relaxed font-body"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Allergen Note */}
        <p
          className="text-center text-white/30 text-xs mt-10 font-body"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Alle Preise inkl. MwSt. · Allergene auf Anfrage · Saisonale Änderungen vorbehalten
        </p>
      </div>
    </section>
  );
}
