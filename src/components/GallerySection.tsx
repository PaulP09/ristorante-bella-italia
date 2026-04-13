/**
 * GallerySection – Ristorante Bella Italia
 * Bildergalerie mit Lightbox und erweiterten Animationen
 */

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

const galleryImages = [
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663535330585/UnCLPwoXKcTPPwtESbV2DQ/antipasti-8VxWW4SAd2dzfSbYHQV9R3.webp",
    alt: "Antipasti della Casa",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663535330585/UnCLPwoXKcTPPwtESbV2DQ/pizza-margherita-2EGJ6hE6Uwzu7SngLLLfph.webp",
    alt: "Pizza Margherita",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663535330585/UnCLPwoXKcTPPwtESbV2DQ/tiramisu-5c3RvJTrHEXJxva9WuLZjN.webp",
    alt: "Tiramisù della Casa",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663535330585/UnCLPwoXKcTPPwtESbV2DQ/ossobuco-3z8SMPtnz5NM9QvmeRTs4V.webp",
    alt: "Ossobuco alla Milanese",
    span: "col-span-2 row-span-1",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663535330585/UnCLPwoXKcTPPwtESbV2DQ/risotto-funghi-hvQBgW5H4DG7tiVD5bUJxq.webp",
    alt: "Risotto ai Funghi",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663535330585/UnCLPwoXKcTPPwtESbV2DQ/panna-cotta-k2qqYv8n22V7Hk6nyMyzYp.webp",
    alt: "Panna Cotta",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663535330585/UnCLPwoXKcTPPwtESbV2DQ/pizza-diavola-ar5zS7BHX86sUWFMa53zor.webp",
    alt: "Pizza Diavola",
    span: "col-span-1 row-span-1",
  },
];

export default function GallerySection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="gallery" ref={ref} className="py-24 bg-[oklch(0.98_0.01_80)]">
      <div className="container">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span
            className="text-[oklch(0.52_0.22_25)] text-xs tracking-[0.4em] uppercase font-body mb-4 block"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            ✦ &nbsp; Einblicke
          </span>
          <h2
            className="font-display text-5xl md:text-6xl font-light text-[oklch(0.18_0.04_240)] leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Unsere{" "}
            <span className="italic text-[oklch(0.52_0.22_25)]">Galerie</span>
          </h2>
        </div>

        {/* Gallery Grid */}
        <div
          className={`grid grid-cols-2 md:grid-cols-3 gap-4 transition-all duration-700 delay-200 ${visible ? "opacity-100" : "opacity-0"}`}
          style={{ gridAutoRows: "220px" }}
        >
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`${img.span} overflow-hidden group relative cursor-pointer`}
              onClick={() => setSelectedImage(img)}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "scale(1)" : "scale(0.95)",
                transition: `opacity 0.6s ease ${i * 100}ms, transform 0.6s ease ${i * 100}ms`,
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[oklch(0.18_0.04_240/0)] group-hover:bg-[oklch(0.18_0.04_240/0.5)] transition-all duration-500 flex items-end p-4">
                <span
                  className="text-white font-display text-lg italic opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    transition: "opacity 0.4s ease, transform 0.4s ease",
                  }}
                >
                  {img.alt}
                </span>
              </div>
              {/* Zoom Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">+</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in-up"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300 backdrop-blur-sm"
              aria-label="Schließen"
            >
              <X size={24} className="text-white" />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
              <p
                className="text-white text-sm font-body"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {selectedImage.alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
