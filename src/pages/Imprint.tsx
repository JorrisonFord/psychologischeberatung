import { useLanguage } from "../context/LanguageContext";

export function Imprint() {
  const { language } = useLanguage();

  return (
    <main className="bg-[#F5F0E8] min-h-screen">
      <section className="relative py-28 md:py-36">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">

          {/* Header */}
          <div className="mb-16">
            <span className="inline-block text-sm font-medium tracking-wider text-[#B5725A] uppercase mb-4">
              {language === "de" ? "Rechtliches" : "Legal"}
            </span>

            <h1 className="font-serif text-4xl md:text-5xl text-[#3D3229]">
              {language === "de" ? "Impressum" : "Legal Notice"}
            </h1>
          </div>

          {language === "de" ? (
            <div className="space-y-12 text-[#3D3229]/75 leading-relaxed">

              {/* Angaben gemäß § 5 DDG */}
              <section>
                <h2 className="font-serif text-2xl text-[#3D3229] mb-4">
                  Angaben gemäß § 5 DDG
                </h2>

                <p className="whitespace-pre-line">
                  {`Joris van Bohemen
Schildergasse 69–73
50667 Köln
Deutschland`}
                </p>
              </section>

              {/* Kontakt */}
              <section>
                <h2 className="font-serif text-2xl text-[#3D3229] mb-4">
                  Kontakt
                </h2>

                <p className="whitespace-pre-line">
                  {`Telefon: +49 1578 879 4109
E-Mail: info@jorisvanbohemen.de`}
                </p>
              </section>

              {/* Tätigkeit */}
              <section>
                <h2 className="font-serif text-2xl text-[#3D3229] mb-4">
                  Tätigkeit
                </h2>

                <p>
                  Psychologische Beratung und Coaching auf Grundlage der
                  Acceptance & Commitment Therapy (ACT).
                </p>
              </section>

              {/* Hinweis */}
              <section>
                <h2 className="font-serif text-2xl text-[#3D3229] mb-4">
                  Hinweis
                </h2>

                <p>
                  Die auf dieser Website angebotene psychologische Beratung
                  stellt keine heilkundliche Psychotherapie im Sinne des
                  Psychotherapeutengesetzes dar.
                </p>

                <p className="mt-4">
                  Es werden keine Diagnosen gestellt und keine
                  psychotherapeutischen Behandlungen im Sinne der Heilkunde
                  angeboten.
                </p>
              </section>

              {/* Verantwortlich für den Inhalt */}
              <section>
                <h2 className="font-serif text-2xl text-[#3D3229] mb-4">
                  Verantwortlich für den Inhalt
                </h2>

                <p>
                  Joris van Bohemen
                </p>

                <p className="mt-4 whitespace-pre-line">
                  {`Schildergasse 69–73
50667 Köln
Deutschland`}
                </p>
              </section>

              <p className="pt-4 text-sm text-[#3D3229]/50">
                Stand: September 2026
              </p>

            </div>
          ) : (
            <div className="space-y-12 text-[#3D3229]/75 leading-relaxed">

              {/* Information pursuant to Section 5 DDG */}
              <section>
                <h2 className="font-serif text-2xl text-[#3D3229] mb-4">
                  Information pursuant to Section 5 DDG
                </h2>

                <p className="whitespace-pre-line">
                  {`Joris van Bohemen
Schildergasse 69–73
50667 Cologne
Germany`}
                </p>
              </section>

              {/* Contact */}
              <section>
                <h2 className="font-serif text-2xl text-[#3D3229] mb-4">
                  Contact
                </h2>

                <p className="whitespace-pre-line">
                  {`Phone: +49 1578 879 4109
Email: info@jorisvanbohemen.de`}
                </p>
              </section>

              {/* Professional activity */}
              <section>
                <h2 className="font-serif text-2xl text-[#3D3229] mb-4">
                  Professional activity
                </h2>

                <p>
                  Psychological counseling and coaching based on Acceptance &
                  Commitment Therapy (ACT).
                </p>
              </section>

              {/* Important notice */}
              <section>
                <h2 className="font-serif text-2xl text-[#3D3229] mb-4">
                  Important notice
                </h2>

                <p>
                  The psychological counseling offered on this website does not
                  constitute psychotherapy provided as a healthcare service
                  under German law.
                </p>

                <p className="mt-4">
                  No diagnoses are made and no psychotherapeutic treatment
                  within the meaning of healthcare legislation is offered.
                </p>
              </section>

              {/* Responsible for content */}
              <section>
                <h2 className="font-serif text-2xl text-[#3D3229] mb-4">
                  Responsible for content
                </h2>

                <p>
                  Joris van Bohemen
                </p>

                <p className="mt-4 whitespace-pre-line">
                  {`Schildergasse 69–73
50667 Cologne
Germany`}
                </p>
              </section>

              <p className="pt-4 text-sm text-[#3D3229]/50">
                Last updated: September 2026
              </p>

            </div>
          )}

        </div>
      </section>
    </main>
  );
}