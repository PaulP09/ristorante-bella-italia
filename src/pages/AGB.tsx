/**
 * AGB – Ristorante Bella Italia
 * Allgemeine Geschäftsbedingungen
 */

import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function AGB() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-[oklch(0.98_0.01_80)]">
      {/* Header */}
      <div className="bg-[oklch(0.18_0.04_240)] text-white py-12 border-b border-white/10">
        <div className="container">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 text-[oklch(0.73_0.12_75)] hover:text-white transition-colors duration-300 mb-4 font-body"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <ArrowLeft size={16} />
            Zurück zur Startseite
          </button>
          <h1
            className="font-display text-5xl font-light text-white"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Allgemeine Geschäftsbedingungen
          </h1>
        </div>
      </div>

      {/* Content */}
      <main className="container py-16">
        <div className="max-w-3xl mx-auto prose prose-invert">
          <div className="space-y-8">
            {/* Geltungsbereich */}
            <section>
              <h2
                className="font-display text-3xl font-semibold text-[oklch(0.18_0.04_240)] mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                1. Geltungsbereich
              </h2>
              <div
                className="text-[oklch(0.35_0.03_240)] space-y-2 font-body"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <p>
                  Diese Allgemeinen Geschäftsbedingungen (AGB) regeln die Nutzung der Website und die Dienstleistungen des Ristorante Bella Italia. Durch die Nutzung dieser Website erklären Sie sich mit diesen AGB einverstanden.
                </p>
              </div>
            </section>

            {/* Reservierungen */}
            <section>
              <h2
                className="font-display text-3xl font-semibold text-[oklch(0.18_0.04_240)] mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                2. Reservierungen
              </h2>
              <div
                className="text-[oklch(0.35_0.03_240)] space-y-4 font-body"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <div>
                  <h3 className="font-semibold text-[oklch(0.18_0.04_240)] mb-2">
                    2.1 Reservierungsanfrage
                  </h3>
                  <p>
                    Eine Reservierungsanfrage über unsere Website ist unverbindlich. Wir werden Ihre Anfrage prüfen und Sie innerhalb von 24 Stunden per E-Mail oder Telefon bestätigen oder ablehnen.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-[oklch(0.18_0.04_240)] mb-2">
                    2.2 Stornierung
                  </h3>
                  <p>
                    Stornierungen müssen mindestens 24 Stunden vor der reservierten Zeit erfolgen. Stornierungen innerhalb von 24 Stunden können mit einer Gebühr belegt werden.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-[oklch(0.18_0.04_240)] mb-2">
                    2.3 Nichterscheinen
                  </h3>
                  <p>
                    Sollten Sie nicht zum reservierten Zeitpunkt erscheinen, behalten wir uns das Recht vor, den Tisch nach 15 Minuten freizugeben.
                  </p>
                </div>
              </div>
            </section>

            {/* Preise */}
            <section>
              <h2
                className="font-display text-3xl font-semibold text-[oklch(0.18_0.04_240)] mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                3. Preise und Zahlung
              </h2>
              <div
                className="text-[oklch(0.35_0.03_240)] space-y-4 font-body"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <div>
                  <h3 className="font-semibold text-[oklch(0.18_0.04_240)] mb-2">
                    3.1 Preisangaben
                  </h3>
                  <p>
                    Alle auf unserer Website angegebenen Preise sind in Euro und enthalten die Mehrwertsteuer. Preisänderungen sind jederzeit möglich.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-[oklch(0.18_0.04_240)] mb-2">
                    3.2 Zahlungsmittel
                  </h3>
                  <p>
                    Wir akzeptieren Barzahlung, Kartenzahlung (Visa, Mastercard) und Überweisung. Die Zahlung erfolgt im Restaurant nach dem Essen.
                  </p>
                </div>
              </div>
            </section>

            {/* Haftung */}
            <section>
              <h2
                className="font-display text-3xl font-semibold text-[oklch(0.18_0.04_240)] mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                4. Haftung
              </h2>
              <div
                className="text-[oklch(0.35_0.03_240)] space-y-2 font-body"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <p>
                  Das Ristorante Bella Italia haftet nicht für Schäden, die durch die Nutzung dieser Website entstehen, es sei denn, diese wurden durch Vorsatz oder grobe Fahrlässigkeit verursacht.
                </p>
              </div>
            </section>

            {/* Allergene */}
            <section>
              <h2
                className="font-display text-3xl font-semibold text-[oklch(0.18_0.04_240)] mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                5. Allergene und Unverträglichkeiten
              </h2>
              <div
                className="text-[oklch(0.35_0.03_240)] space-y-2 font-body"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <p>
                  Bitte teilen Sie uns bei der Reservierung oder beim Besuch mit, wenn Sie Allergien oder Unverträglichkeiten haben. Wir werden unser Bestes geben, um Ihre Anforderungen zu erfüllen. Allerdings können wir nicht garantieren, dass alle Gerichte frei von Allergenen sind.
                </p>
              </div>
            </section>

            {/* Verhalten */}
            <section>
              <h2
                className="font-display text-3xl font-semibold text-[oklch(0.18_0.04_240)] mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                6. Verhalten im Restaurant
              </h2>
              <div
                className="text-[oklch(0.35_0.03_240)] space-y-2 font-body"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <p>
                  Gäste werden gebeten, sich respektvoll gegenüber unserem Personal und anderen Gästen zu verhalten. Wir behalten uns das Recht vor, Gäste, die sich unangemessen verhalten, des Restaurants zu verweisen.
                </p>
              </div>
            </section>

            {/* Änderungen */}
            <section>
              <h2
                className="font-display text-3xl font-semibold text-[oklch(0.18_0.04_240)] mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                7. Änderungen der AGB
              </h2>
              <div
                className="text-[oklch(0.35_0.03_240)] space-y-2 font-body"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <p>
                  Wir behalten uns das Recht vor, diese AGB jederzeit zu ändern. Änderungen werden auf dieser Seite veröffentlicht. Die Nutzung der Website nach der Veröffentlichung von Änderungen bedeutet Ihre Akzeptanz der neuen AGB.
                </p>
              </div>
            </section>

            {/* Kontakt */}
            <section>
              <h2
                className="font-display text-3xl font-semibold text-[oklch(0.18_0.04_240)] mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                8. Kontakt
              </h2>
              <div
                className="text-[oklch(0.35_0.03_240)] space-y-2 font-body"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <p>
                  Wenn Sie Fragen zu diesen AGB haben, kontaktieren Sie uns bitte unter:
                </p>
                <p>
                  <strong>E-Mail:</strong>{" "}
                  <a
                    href="mailto:info@bella-italia.de"
                    className="text-[oklch(0.52_0.22_25)] hover:text-[oklch(0.73_0.12_75)] transition-colors duration-300"
                  >
                    info@bella-italia.de
                  </a>
                  <br />
                  <strong>Telefon:</strong>{" "}
                  <a
                    href="tel:+498912345678"
                    className="text-[oklch(0.52_0.22_25)] hover:text-[oklch(0.73_0.12_75)] transition-colors duration-300"
                  >
                    +49 (0) 89 123 456 78
                  </a>
                </p>
              </div>
            </section>

            {/* Disclaimer */}
            <div className="bg-[oklch(0.88_0.02_80)] border-l-4 border-[oklch(0.52_0.22_25)] p-6 rounded">
              <p
                className="text-[oklch(0.35_0.03_240)] text-sm font-body"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <strong>Hinweis:</strong> Dies sind Muster-AGB. Bitte konsultieren Sie einen Rechtsanwalt, um sicherzustellen, dass diese AGB Ihren spezifischen Anforderungen entsprechen und den geltenden Gesetzen entsprechen.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
