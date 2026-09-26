import { useLanguage } from "../context/LanguageContext";

export function Privacy() {
  const { language } = useLanguage();

  return (
    <main className="bg-[#F5F0E8] min-h-screen">
      <section className="relative py-28 md:py-36">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">

          {/* Header */}
          <div className="mb-16">
            <span className="inline-block text-sm font-medium tracking-wider text-[#B5725A] uppercase mb-4">
              {language === "de" ? "Datenschutz" : "Privacy"}
            </span>

            <h1 className="font-serif text-4xl md:text-5xl text-[#3D3229]">
              {language === "de"
                ? "Datenschutzerklärung"
                : "Privacy Policy"}
            </h1>
          </div>

          {language === "de" ? (
            <div className="space-y-12 text-[#3D3229]/75 leading-relaxed">

              {/* Verantwortlicher */}
              <section>
                <h2 className="font-serif text-2xl text-[#3D3229] mb-4">
                  1. Verantwortlicher
                </h2>

               <p className="whitespace-pre-line">
  {`Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website ist:

Joris van Bohemen
Schildergasse 69–73
50667 Köln
Deutschland

E-Mail: info@jorisvanbohemen.de
Telefon: +49 1578 879 4109`}
</p>
              </section>

              {/* Allgemeine Hinweise */}
              <section>
                <h2 className="font-serif text-2xl text-[#3D3229] mb-4">
                  2. Allgemeine Hinweise zur Datenverarbeitung
                </h2>

                <p>
                  Der Schutz Ihrer persönlichen Daten ist mir wichtig. Ich
                  verarbeite personenbezogene Daten nur im Rahmen der geltenden
                  datenschutzrechtlichen Bestimmungen, insbesondere der
                  Datenschutz-Grundverordnung (DSGVO).
                </p>

                <p className="mt-4">
                  Personenbezogene Daten sind alle Informationen, mit denen Sie
                  direkt oder indirekt identifiziert werden können, beispielsweise
                  Ihr Name, Ihre E-Mail-Adresse oder Ihre Telefonnummer.
                </p>

                <p className="mt-4">
                  Diese Datenschutzerklärung informiert Sie darüber, welche
                  personenbezogenen Daten beim Besuch dieser Website und bei der
                  Nutzung des Kontaktformulars verarbeitet werden, zu welchen
                  Zwecken dies geschieht und welche Rechte Ihnen zustehen.
                </p>
              </section>

              {/* Hosting */}
              <section>
                <h2 className="font-serif text-2xl text-[#3D3229] mb-4">
                  3. Aufruf der Website und Hosting
                </h2>

                <p>
                  Beim Aufruf dieser Website werden durch den technischen
                  Betrieb der Website bestimmte Informationen verarbeitet, die
                  für die Bereitstellung und Sicherheit der Website erforderlich
                  sind. Dazu können insbesondere IP-Adresse, Datum und Uhrzeit
                  des Zugriffs, aufgerufene Seiten, Browsertyp und Betriebssystem
                  gehören.
                </p>

                <p className="mt-4">
                  Die Website wird über Vercel bereitgestellt. Vercel kann im
                  Rahmen des technischen Betriebs Informationen wie Verbindungs-,
                  Geräte-, Nutzungs- und Telemetriedaten verarbeiten.
                </p>

                <p className="mt-4">
                  Die Verarbeitung erfolgt zur technisch sicheren und
                  zuverlässigen Bereitstellung dieser Website auf Grundlage von
                  Art. 6 Abs. 1 lit. f DSGVO.
                </p>
              </section>

              {/* Analytics */}
              <section>
                <h2 className="font-serif text-2xl text-[#3D3229] mb-4">
                  4. Vercel Web Analytics und Speed Insights
                </h2>

                <p>
                  Auf dieser Website werden Vercel Web Analytics und Vercel
                  Speed Insights eingesetzt, um die Nutzung und technische
                  Performance der Website zu analysieren und zu verbessern.
                </p>

                <p className="mt-4">
                  Vercel Web Analytics ist auf eine datenschutzfreundliche
                  Analyse der Website-Nutzung ausgelegt und verwendet nach
                  Angaben von Vercel keine Cookies zur Wiedererkennung von
                  Besuchern über verschiedene Websites hinweg.
                </p>

                <p className="mt-4">
                  Dabei können beispielsweise Informationen über aufgerufene
                  Seiten, Herkunft des Zugriffs, Browser und Betriebssystem sowie
                  technische Nutzungsdaten verarbeitet werden.
                </p>

                <p className="mt-4">
                  Weitere Informationen finden Sie in der
                  Datenschutzerklärung von Vercel.
                </p>

                <a
                  href="https://vercel.com/legal/privacy-notice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-[#B5725A] hover:text-[#9A5D48] transition-colors"
                >
                  Vercel Privacy Notice →
                </a>
              </section>

              {/* Kontaktformular */}
              <section>
                <h2 className="font-serif text-2xl text-[#3D3229] mb-4">
                  5. Kontaktformular
                </h2>

                <p>
                  Wenn Sie das Kontaktformular nutzen, werden die von Ihnen
                  eingegebenen Daten verarbeitet. Dazu gehören insbesondere Name,
                  E-Mail-Adresse, Telefonnummer, sofern angegeben, sowie der
                  Inhalt Ihrer Nachricht.
                </p>

                <p className="mt-4">
                  Die Verarbeitung erfolgt zum Zweck der Bearbeitung Ihrer
                  Anfrage und der anschließenden Kommunikation mit Ihnen.
                </p>

                <p className="mt-4">
                  Für die technische Übermittlung des Kontaktformulars wird
                  Web3Forms eingesetzt. Die von Ihnen eingegebenen Daten werden
                  über die Server von Web3Forms übermittelt und anschließend an
                  meine E-Mail-Adresse weitergeleitet.
                </p>

                <p className="mt-4">
                  Weitere Informationen finden Sie in der
                  Datenschutzerklärung von Web3Forms.
                </p>

                <a
                  href="https://web3forms.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-[#B5725A] hover:text-[#9A5D48] transition-colors"
                >
                  Web3Forms Privacy Policy →
                </a>

                <p className="mt-6 p-5 bg-[#7A8B6E]/10 rounded-2xl">
                  Bitte übermitteln Sie über das Kontaktformular möglichst keine
                  ausführlichen Gesundheitsdaten oder andere besonders sensible
                  persönliche Informationen.
                </p>
              </section>

              {/* E-Mail */}
              <section>
                <h2 className="font-serif text-2xl text-[#3D3229] mb-4">
                  6. Kommunikation per E-Mail
                </h2>

                <p>
                  Wenn Sie mich per E-Mail kontaktieren, werden die von Ihnen
                  übermittelten personenbezogenen Daten zum Zweck der Bearbeitung
                  Ihrer Anfrage und der weiteren Kommunikation verarbeitet.
                </p>

                <p className="mt-4">
                  Die übermittelten Daten werden gelöscht, sobald der Zweck der
                  Kommunikation entfällt und keine gesetzlichen
                  Aufbewahrungspflichten entgegenstehen.
                </p>
              </section>

              {/* Empfänger */}
              <section>
                <h2 className="font-serif text-2xl text-[#3D3229] mb-4">
                  7. Empfänger personenbezogener Daten
                </h2>

                <p>
                  Personenbezogene Daten werden nur an Dritte weitergegeben,
                  soweit dies für den Betrieb dieser Website, die Bearbeitung
                  Ihrer Anfrage oder aufgrund gesetzlicher Verpflichtungen
                  erforderlich ist.
                </p>

                <ul className="mt-4 space-y-2 list-disc list-inside">
                  <li>Vercel – Hosting und technische Bereitstellung</li>
                  <li>Vercel Web Analytics und Speed Insights – Website-Analyse</li>
                  <li>Web3Forms – technische Übermittlung des Kontaktformulars</li>
                </ul>
              </section>

              {/* Speicherdauer */}
              <section>
                <h2 className="font-serif text-2xl text-[#3D3229] mb-4">
                  8. Speicherdauer
                </h2>

                <p>
                  Personenbezogene Daten werden grundsätzlich nur so lange
                  gespeichert, wie dies für den jeweiligen Zweck erforderlich ist
                  oder gesetzliche Aufbewahrungspflichten bestehen.
                </p>

                <p className="mt-4">
                  Kontaktanfragen werden gelöscht, sobald die Anfrage
                  abschließend bearbeitet wurde und keine gesetzlichen oder
                  sonstigen berechtigten Gründe für eine weitere Speicherung
                  bestehen.
                </p>

                <p className="mt-4">
                  Für Daten, die durch eingesetzte technische Dienstleister
                  verarbeitet oder gespeichert werden, gelten zusätzlich deren
                  jeweilige Speicher- und Löschfristen.
                </p>
              </section>

              {/* Rechte */}
              <section>
                <h2 className="font-serif text-2xl text-[#3D3229] mb-4">
                  9. Ihre Rechte
                </h2>

                <p>
                  Sie haben gegenüber mir hinsichtlich der Verarbeitung Ihrer
                  personenbezogenen Daten grundsätzlich folgende Rechte:
                </p>

                <ul className="mt-4 space-y-2 list-disc list-inside">
                  <li>Recht auf Auskunft gemäß Art. 15 DSGVO</li>
                  <li>Recht auf Berichtigung gemäß Art. 16 DSGVO</li>
                  <li>Recht auf Löschung gemäß Art. 17 DSGVO</li>
                  <li>
                    Recht auf Einschränkung der Verarbeitung gemäß Art. 18 DSGVO
                  </li>
                  <li>
                    Recht auf Datenübertragbarkeit gemäß Art. 20 DSGVO
                  </li>
                  <li>Recht auf Widerspruch gemäß Art. 21 DSGVO</li>
                </ul>

                <p className="mt-4">
                  Wenn die Verarbeitung auf Ihrer Einwilligung beruht, können
                  Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.
                </p>
              </section>

              {/* Beschwerderecht */}
              <section>
                <h2 className="font-serif text-2xl text-[#3D3229] mb-4">
                  10. Beschwerderecht bei einer Aufsichtsbehörde
                </h2>

                <p>
                  Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde
                  über die Verarbeitung Ihrer personenbezogenen Daten zu
                  beschweren.
                </p>
              </section>

              {/* Aktualität */}
              <section>
                <h2 className="font-serif text-2xl text-[#3D3229] mb-4">
                  11. Aktualität dieser Datenschutzerklärung
                </h2>

                <p>
                  Ich behalte mir vor, diese Datenschutzerklärung anzupassen,
                  wenn sich die technischen Gegebenheiten dieser Website, die
                  eingesetzten Dienste oder die rechtlichen Anforderungen ändern.
                </p>

                <p className="mt-6 text-sm text-[#3D3229]/50">
                  Stand: September 2026
                </p>
              </section>
            </div>
          ) : (
            <div className="space-y-12 text-[#3D3229]/75 leading-relaxed">

              {/* English version */}
              <section>
                <h2 className="font-serif text-2xl text-[#3D3229] mb-4">
                  1. Controller
                </h2>

                <p className="whitespace-pre-line">
                    {`The controller responsible for the processing of personal data on this website is:

                    Joris van Bohemen
                    Schildergasse 69–73
                    50667 Cologne
                    Germany

                    Email: info@jorisvanbohemen.de
                    Phone: +49 1578 879 4109`}
                    </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-[#3D3229] mb-4">
                  2. General information on data processing
                </h2>

                <p>
                  I take the protection of your personal data seriously. I
                  process personal data only in accordance with applicable data
                  protection law, in particular the General Data Protection
                  Regulation (GDPR).
                </p>

                <p className="mt-4">
                  Personal data means any information relating to an identified
                  or identifiable person, such as your name, email address or
                  telephone number.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-[#3D3229] mb-4">
                  3. Website hosting
                </h2>

                <p>
                  When you visit this website, certain information required for
                  its technical operation and security may be processed. This
                  may include your IP address, date and time of access, pages
                  visited, browser type and operating system.
                </p>

                <p className="mt-4">
                  This website is hosted by Vercel. Vercel may process connection,
                  device, usage and telemetry data as part of the technical
                  operation of the website.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-[#3D3229] mb-4">
                  4. Vercel Web Analytics and Speed Insights
                </h2>

                <p>
                  This website uses Vercel Web Analytics and Vercel Speed
                  Insights to analyze website usage and technical performance
                  and to improve the website.
                </p>

                <p className="mt-4">
                  According to Vercel, Web Analytics is designed as a
                  privacy-friendly analytics solution and does not use cookies
                  to recognize visitors across different websites.
                </p>

                <a
                  href="https://vercel.com/legal/privacy-notice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-[#B5725A] hover:text-[#9A5D48] transition-colors"
                >
                  Vercel Privacy Notice →
                </a>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-[#3D3229] mb-4">
                  5. Contact form
                </h2>

                <p>
                  When you use the contact form, the information you provide is
                  processed, including your name, email address, telephone
                  number if provided, and the content of your message.
                </p>

                <p className="mt-4">
                  The data is processed to handle your inquiry and communicate
                  with you.
                </p>

                <p className="mt-4">
                  Web3Forms is used to technically process and transmit contact
                  form submissions.
                </p>

                <a
                  href="https://web3forms.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-[#B5725A] hover:text-[#9A5D48] transition-colors"
                >
                  Web3Forms Privacy Policy →
                </a>

                <p className="mt-6 p-5 bg-[#7A8B6E]/10 rounded-2xl">
                  Please avoid submitting detailed health information or other
                  particularly sensitive personal information through the
                  contact form.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-[#3D3229] mb-4">
                  6. Your rights
                </h2>

                <p>
                  You have various rights under the GDPR regarding the processing
                  of your personal data, including the right of access,
                  rectification, erasure, restriction of processing, data
                  portability and objection.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-[#3D3229] mb-4">
                  7. Right to lodge a complaint
                </h2>

                <p>
                  You have the right to lodge a complaint with a data protection
                  supervisory authority if you believe that your personal data
                  is being processed unlawfully.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-[#3D3229] mb-4">
                  8. Updates to this Privacy Policy
                </h2>

                <p>
                  This Privacy Policy may be updated if the technical
                  circumstances of this website, the services used, or applicable
                  legal requirements change.
                </p>

                <p className="mt-6 text-sm text-[#3D3229]/50">
                  Last updated: September 2026
                </p>
              </section>

            </div>
          )}

        </div>
      </section>
    </main>
  );
}
