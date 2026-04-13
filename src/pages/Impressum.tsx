/**
 * Impressum – Ristorante Bella Italia
 * Rechtlich erforderliche Impressum-Seite
 */

import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function Impressum() {
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
            Impressum
          </h1>
        </div>
      </div>

      {/* Content */}
      <main className="container py-16">
        <div className="max-w-3xl mx-auto prose prose-invert">
          <div className="space-y-8">
            {/* Angaben */}
            <section>
              <h2
                className="font-display text-3xl font-semibold text-[oklch(0.18_0.04_240)] mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Anbieter
              </h2>
              <div
                className="text-[oklch(0.35_0.03_240)] space-y-2 font-body"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <p>
                  <strong>Ristorante Bella Italia</strong>
                </p>
                <p>
                  Via Roma 42<br />
                  80100 München<br />
                  Deutschland
                </p>
              </div>
            </section>

            {/* Kontakt */}
            <section>
              <h2
                className="font-display text-3xl font-semibold text-[oklch(0.18_0.04_240)] mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Kontaktinformationen
              </h2>
              <div
                className="text-[oklch(0.35_0.03_240)] space-y-2 font-body"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <p>
                  <strong>Telefon:</strong>{" "}
                  <a
                    href="tel:+498912345678"
                    className="text-[oklch(0.52_0.22_25)] hover:text-[oklch(0.73_0.12_75)] transition-colors duration-300"
                  >
                    +49 (0) 89 123 456 78
                  </a>
                </p>
                <p>
                  <strong>E-Mail:</strong>{" "}
                  <a
                    href="mailto:info@bella-italia.de"
                    className="text-[oklch(0.52_0.22_25)] hover:text-[oklch(0.73_0.12_75)] transition-colors duration-300"
                  >
                    info@bella-italia.de
                  </a>
                </p>
              </div>
            </section>

            {/* Geschäftsführer */}
            <section>
              <h2
                className="font-display text-3xl font-semibold text-[oklch(0.18_0.04_240)] mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Geschäftsführer
              </h2>
              <div
                className="text-[oklch(0.35_0.03_240)] space-y-2 font-body"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <p>Marco Rossi</p>
              </div>
            </section>

            {/* Umsatzsteuer */}
            <section>
              <h2
                className="font-display text-3xl font-semibold text-[oklch(0.18_0.04_240)] mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Umsatzsteuer-Identifikationsnummer
              </h2>
              <div
                className="text-[oklch(0.35_0.03_240)] space-y-2 font-body"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <p>DE123456789</p>
              </div>
            </section>

            {/* Haftung */}
            <section>
              <h2
                className="font-display text-3xl font-semibold text-[oklch(0.18_0.04_240)] mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Haftungsausschluss
              </h2>
              <div
                className="text-[oklch(0.35_0.03_240)] space-y-4 font-body"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <p>
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
                <p>
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
                </p>
              </div>
            </section>

            {/* Urheberrecht */}
            <section>
              <h2
                className="font-display text-3xl font-semibold text-[oklch(0.18_0.04_240)] mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Urheberrecht
              </h2>
              <div
                className="text-[oklch(0.35_0.03_240)] space-y-2 font-body"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des Autors oder Urhebers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                </p>
              </div>
            </section>

            {/* Datenschutz */}
            <section>
              <h2
                className="font-display text-3xl font-semibold text-[oklch(0.18_0.04_240)] mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Datenschutz
              </h2>
              <div
                className="text-[oklch(0.35_0.03_240)] space-y-2 font-body"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <p>
                  Weitere Informationen zum Datenschutz finden Sie in unserer{" "}
                  <button
                    onClick={() => setLocation("/datenschutz")}
                    className="text-[oklch(0.52_0.22_25)] hover:text-[oklch(0.73_0.12_75)] transition-colors duration-300 underline"
                  >
                    Datenschutzerklärung
                  </button>
                  .
                </p>
              </div>
            </section>

            {/* Disclaimer */}
            <div className="bg-[oklch(0.88_0.02_80)] border-l-4 border-[oklch(0.52_0.22_25)] p-6 rounded">
              <p
                className="text-[oklch(0.35_0.03_240)] text-sm font-body"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <strong>Hinweis:</strong> Dies ist ein Muster-Impressum. Bitte ersetzen Sie alle Platzhalter mit Ihren echten Daten und konsultieren Sie einen Rechtsanwalt, um sicherzustellen, dass alle rechtlichen Anforderungen erfüllt sind.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
