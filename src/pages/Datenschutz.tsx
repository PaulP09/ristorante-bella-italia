/**
 * Datenschutz – Ristorante Bella Italia
 * Datenschutzerklärung gemäß DSGVO
 */

import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function Datenschutz() {
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
            Datenschutzerklärung
          </h1>
        </div>
      </div>

      {/* Content */}
      <main className="container py-16">
        <div className="max-w-3xl mx-auto prose prose-invert">
          <div className="space-y-8">
            {/* Einleitung */}
            <section>
              <h2
                className="font-display text-3xl font-semibold text-[oklch(0.18_0.04_240)] mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                1. Datenschutz auf einen Blick
              </h2>
              <div
                className="text-[oklch(0.35_0.03_240)] space-y-2 font-body"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <p>
                  Die folgenden Informationen geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
              </div>
            </section>

            {/* Verantwortlicher */}
            <section>
              <h2
                className="font-display text-3xl font-semibold text-[oklch(0.18_0.04_240)] mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                2. Verantwortlicher
              </h2>
              <div
                className="text-[oklch(0.35_0.03_240)] space-y-2 font-body"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <p>
                  <strong>Ristorante Bella Italia</strong><br />
                  Via Roma 42<br />
                  80100 München<br />
                  Deutschland<br />
                  <br />
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

            {/* Datenerfassung */}
            <section>
              <h2
                className="font-display text-3xl font-semibold text-[oklch(0.18_0.04_240)] mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                3. Erfassung von Daten
              </h2>
              <div
                className="text-[oklch(0.35_0.03_240)] space-y-4 font-body"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <div>
                  <h3 className="font-semibold text-[oklch(0.18_0.04_240)] mb-2">
                    Automatisch erfasste Daten
                  </h3>
                  <p>
                    Wenn Sie unsere Website besuchen, erfassen wir automatisch bestimmte Informationen über Ihr Gerät, einschließlich Informationen über Ihren Webbrowser, Ihre IP-Adresse, Ihre Zeitzone und einige der auf Ihrem Gerät installierten Cookies.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-[oklch(0.18_0.04_240)] mb-2">
                    Von Ihnen bereitgestellte Daten
                  </h3>
                  <p>
                    Wenn Sie ein Reservierungsformular ausfüllen, erfassen wir Ihren Namen, Ihre E-Mail-Adresse, Ihre Telefonnummer und weitere Informationen, die Sie uns zur Verfügung stellen.
                  </p>
                </div>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <h2
                className="font-display text-3xl font-semibold text-[oklch(0.18_0.04_240)] mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                4. Cookies
              </h2>
              <div
                className="text-[oklch(0.35_0.03_240)] space-y-2 font-body"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <p>
                  Unsere Website verwendet Cookies, um Ihr Browsing-Erlebnis zu verbessern. Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden. Sie können Cookies jederzeit in Ihren Browsereinstellungen deaktivieren.
                </p>
              </div>
            </section>

            {/* Verwendung */}
            <section>
              <h2
                className="font-display text-3xl font-semibold text-[oklch(0.18_0.04_240)] mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                5. Verwendung Ihrer Daten
              </h2>
              <div
                className="text-[oklch(0.35_0.03_240)] space-y-2 font-body"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <p>
                  Wir verwenden die erfassten Daten für folgende Zwecke:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Bearbeitung von Reservierungsanfragen</li>
                  <li>Verbesserung unserer Website und Dienste</li>
                  <li>Kommunikation mit Ihnen über Ihre Reservierung</li>
                  <li>Einhaltung von Rechtsvorschriften</li>
                </ul>
              </div>
            </section>

            {/* Speicherdauer */}
            <section>
              <h2
                className="font-display text-3xl font-semibold text-[oklch(0.18_0.04_240)] mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                6. Speicherdauer
              </h2>
              <div
                className="text-[oklch(0.35_0.03_240)] space-y-2 font-body"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <p>
                  Personenbezogene Daten werden nur so lange gespeichert, wie dies für die Erfüllung der Zwecke erforderlich ist, für die sie erhoben wurden. Danach werden sie gelöscht, es sei denn, wir sind verpflichtet, sie länger zu speichern.
                </p>
              </div>
            </section>

            {/* Rechte */}
            <section>
              <h2
                className="font-display text-3xl font-semibold text-[oklch(0.18_0.04_240)] mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                7. Ihre Rechte
              </h2>
              <div
                className="text-[oklch(0.35_0.03_240)] space-y-2 font-body"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <p>
                  Sie haben das Recht:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Auskunft über Ihre personenbezogenen Daten zu erhalten</li>
                  <li>Ihre Daten zu berichtigen oder zu löschen</li>
                  <li>Die Verarbeitung Ihrer Daten einzuschränken</li>
                  <li>Widerspruch gegen die Verarbeitung einzulegen</li>
                  <li>Ihre Daten in einem strukturierten, gängigen Format zu erhalten</li>
                </ul>
                <p className="mt-4">
                  Um diese Rechte auszuüben, kontaktieren Sie uns bitte unter{" "}
                  <a
                    href="mailto:info@bella-italia.de"
                    className="text-[oklch(0.52_0.22_25)] hover:text-[oklch(0.73_0.12_75)] transition-colors duration-300"
                  >
                    info@bella-italia.de
                  </a>
                  .
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
                  Wenn Sie Fragen zu dieser Datenschutzerklärung haben, kontaktieren Sie uns bitte unter:
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
                <strong>Hinweis:</strong> Dies ist eine Muster-Datenschutzerklärung. Bitte konsultieren Sie einen Rechtsanwalt, um sicherzustellen, dass diese Erklärung den geltenden Datenschutzgesetzen entspricht.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
