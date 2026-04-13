/**
 * ContactSection – Ristorante Bella Italia
 * Kontaktdaten, Adresse und Reservierungsformular mit erweiterten Validierungen
 */

import { useEffect, useRef, useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: MapPin,
    label: "Adresse",
    lines: ["Via Roma 42", "80100 Musterstadt", "Deutschland"],
    href: null,
  },
  {
    icon: Phone,
    label: "Telefon",
    lines: ["+49 (0) 89 123 456 78", "+49 (0) 89 123 456 79"],
    href: "tel:+498912345678",
  },
  {
    icon: Mail,
    label: "E-Mail",
    lines: ["info@bella-italia.de", "reservierung@bella-italia.de"],
    href: "mailto:info@bella-italia.de",
  },
  {
    icon: Clock,
    label: "Öffnungszeiten",
    lines: [
      "Di – Fr: 12:00–14:30 & 18:00–22:30",
      "Sa – So: 12:00–23:00",
      "Mo: Ruhetag",
    ],
  },
];

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!form.name.trim()) newErrors.name = "Name erforderlich";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "Gültige E-Mail erforderlich";
    if (!form.date) newErrors.date = "Datum erforderlich";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Bitte füllen Sie alle Pflichtfelder korrekt aus.");
      return;
    }

    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setSubmitted(true);

    toast.success("Reservierungsanfrage erfolgreich gesendet!");
    setTimeout(() => {
      setForm({ name: "", email: "", phone: "", date: "", time: "", guests: "2", message: "" });
      setSubmitted(false);
    }, 2000);
  };

  const inputClass =
    "w-full bg-[oklch(0.14_0.035_240)] border border-white/10 text-white px-4 py-3 text-sm placeholder:text-white/30 focus:outline-none focus:border-[oklch(0.73_0.12_75)] focus:ring-2 focus:ring-[oklch(0.73_0.12_75/0.2)] transition-all duration-300 font-body";

  return (
    <section id="contact" ref={ref} className="py-24 bg-[oklch(0.18_0.04_240)]">
      <div className="container">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span
            className="text-[oklch(0.73_0.12_75)] text-xs tracking-[0.4em] uppercase font-body mb-4 block"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            ✦ &nbsp; Wir freuen uns auf Sie
          </span>
          <h2
            className="font-display text-5xl md:text-6xl font-light text-white leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Kontakt &{" "}
            <span className="italic text-[oklch(0.73_0.12_75)]">Reservierung</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <div className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                const content = (
                  <>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-[oklch(0.52_0.22_25/0.2)] flex items-center justify-center group-hover:bg-[oklch(0.52_0.22_25)] transition-all duration-300 rounded-full">
                        <Icon size={14} className="text-[oklch(0.73_0.12_75)] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span
                        className="text-[oklch(0.73_0.12_75)] text-xs tracking-widest uppercase font-body"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {info.label}
                      </span>
                    </div>
                    <div className="pl-11 space-y-1">
                      {info.lines.map((line, j) => (
                        <p
                          key={j}
                          className="text-white/60 text-sm font-body group-hover:text-white/80 transition-colors duration-300"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </>
                );
                
                return (
                  <div key={i}>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith('mailto') ? undefined : '_blank'}
                        rel={info.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                        className="group hover:bg-[oklch(0.14_0.035_240)] p-4 transition-all duration-300 rounded block"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="group hover:bg-[oklch(0.14_0.035_240)] p-4 transition-all duration-300 rounded">
                        {content}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Map */}
            <div className="relative h-64 bg-[oklch(0.14_0.035_240)] overflow-hidden rounded border border-white/10 hover:border-[oklch(0.73_0.12_75/0.5)] transition-all duration-300">
              <iframe
                title="Restaurantstandort München"
                src="https://www.openstreetmap.org/export/embed.html?bbox=11.5400%2C48.1350%2C11.5600%2C48.1450&marker=48.1400%2C11.5500&layer=mapnik"
                className="w-full h-full border-0 opacity-70 hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 pointer-events-none border border-[oklch(0.73_0.12_75/0.3)]" />
              <div className="absolute bottom-3 left-3 bg-[oklch(0.12_0.03_240/0.95)] px-3 py-1.5 backdrop-blur-sm rounded">
                <span
                  className="text-white/70 text-xs font-body"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  📍 Via Roma 42, München
                </span>
              </div>
            </div>
          </div>

          {/* Right: Reservation Form */}
          <div className={`transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <div className="border border-white/10 p-8 bg-[oklch(0.14_0.035_240)] hover:border-white/20 transition-all duration-300 rounded">
              <h3
                className="font-display text-3xl text-white mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Tisch reservieren
              </h3>

              {submitted ? (
                <div className="py-12 text-center animate-scale-in">
                  <CheckCircle size={48} className="text-[oklch(0.73_0.12_75)] mx-auto mb-4 animate-pulse" />
                  <h4
                    className="font-display text-2xl text-white mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Vielen Dank!
                  </h4>
                  <p
                    className="text-white/60 font-body"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Ihre Reservierung wurde gesendet. Wir melden uns innerhalb von 24 Stunden.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-white/50 text-xs tracking-widest uppercase mb-1.5 block font-body" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Ihr Name"
                        className={`${inputClass} ${errors.name ? "border-[oklch(0.52_0.22_25)]" : ""}`}
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      />
                      {errors.name && <p className="text-[oklch(0.52_0.22_25)] text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="text-white/50 text-xs tracking-widest uppercase mb-1.5 block font-body" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        Telefon
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+49 ..."
                        className={inputClass}
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-white/50 text-xs tracking-widest uppercase mb-1.5 block font-body" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="ihre@email.de"
                      className={`${inputClass} ${errors.email ? "border-[oklch(0.52_0.22_25)]" : ""}`}
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    />
                    {errors.email && <p className="text-[oklch(0.52_0.22_25)] text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-white/50 text-xs tracking-widest uppercase mb-1.5 block font-body" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        Datum *
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        className={`${inputClass} ${errors.date ? "border-[oklch(0.52_0.22_25)]" : ""}`}
                        style={{ fontFamily: "'DM Sans', sans-serif", colorScheme: "dark" }}
                      />
                      {errors.date && <p className="text-[oklch(0.52_0.22_25)] text-xs mt-1">{errors.date}</p>}
                    </div>
                    <div>
                      <label className="text-white/50 text-xs tracking-widest uppercase mb-1.5 block font-body" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        Uhrzeit
                      </label>
                      <select
                        name="time"
                        value={form.time}
                        onChange={handleChange}
                        className={inputClass}
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        <option value="">Wählen</option>
                        {["12:00", "12:30", "13:00", "13:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"].map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-white/50 text-xs tracking-widest uppercase mb-1.5 block font-body" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        Personen
                      </label>
                      <select
                        name="guests"
                        value={form.guests}
                        onChange={handleChange}
                        className={inputClass}
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                          <option key={n} value={String(n)}>
                            {n} {n === 1 ? "Person" : "Personen"}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-white/50 text-xs tracking-widest uppercase mb-1.5 block font-body" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Besondere Wünsche
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Allergien, Geburtstag, besondere Anlässe..."
                      className={`${inputClass} resize-none`}
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 bg-[oklch(0.52_0.22_25)] text-white text-sm tracking-widest uppercase hover:bg-[oklch(0.45_0.22_25)] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-60 font-body relative overflow-hidden group"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {submitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Wird gesendet...
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        Reservierung anfragen
                      </>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-500" />
                  </button>

                  <p
                    className="text-white/30 text-xs text-center font-body"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Wir bestätigen Ihre Reservierung innerhalb von 24 Stunden per E-Mail oder Telefon.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
