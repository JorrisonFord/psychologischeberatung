import { useEffect } from 'react';

export function PsychologischeFlexibilitaet() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="min-h-screen bg-[#F5F0E8] text-[#3D3229]">
      <div className="max-w-3xl mx-auto px-6 py-24">

        {/* HERO / TITLE */}
        <header className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-4">
            Psychische Flexibilität – was bedeutet das eigentlich?
          </h1>

          <p className="text-lg text-[#3D3229]/70">
            Ein zentraler Begriff der ACT (Acceptance and Commitment Therapy)
          </p>
        </header>

        {/* CONTENT */}
        <section className="space-y-8 leading-relaxed text-base md:text-lg">

          <p>
            Viele Menschen erleben Gedanken und Gefühle als etwas, das sie eher
            steuert als begleitet. Besonders in stressreichen oder emotional
            belastenden Situationen entsteht schnell das Gefühl, „festzustecken“.
          </p>

          <p>
            Psychische Flexibilität beschreibt die Fähigkeit, genau in solchen
            Momenten handlungsfähig zu bleiben – ohne den inneren Kampf gegen das
            eigene Erleben.
          </p>

          <p>
            Sie ist ein zentraler Bestandteil der Acceptance and Commitment Therapy (ACT).
          </p>

          <h2 className="font-serif text-2xl mt-10 mb-4">
            Was bedeutet psychische Flexibilität konkret?
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Gedanken wahrnehmen, ohne ihnen automatisch zu folgen</li>
            <li>Gefühle zulassen, ohne sie zu vermeiden</li>
            <li>innere Zustände beobachten statt kontrollieren</li>
            <li>Handlungen an persönlichen Werten ausrichten</li>
          </ul>

          <p className="mt-4">
            Ein Beispiel: Statt einen Gedanken wie „Ich schaffe das nicht“ als
            Wahrheit zu nehmen, entsteht Abstand:
          </p>

          <blockquote className="border-l-2 border-[#B5725A] pl-4 italic text-[#3D3229]/80">
            „Ich nehme wahr, dass dieser Gedanke da ist – und ich kann trotzdem
            einen Schritt in Richtung dessen gehen, was mir wichtig ist.“
          </blockquote>

          <h2 className="font-serif text-2xl mt-10 mb-4">
            Warum ist das so wichtig?
          </h2>

          <p>
            Viele psychische Belastungen entstehen nicht durch Gefühle selbst,
            sondern durch den Versuch, sie zu vermeiden oder zu kontrollieren.
          </p>

          <p>
            Das kann kurzfristig entlasten, führt aber langfristig oft zu innerer
            Anspannung, Vermeidung und dem Gefühl, nicht frei handeln zu können.
          </p>

          <p>
            Psychische Flexibilität ermöglicht einen anderen Umgang:
            nicht Kontrolle, sondern Kontakt.
          </p>

          <h2 className="font-serif text-2xl mt-10 mb-4">
            ACT als Grundlage
          </h2>

          <p>
            In der ACT steht psychische Flexibilität im Zentrum der Arbeit.
          </p>

          <p>Dazu gehören unter anderem:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Akzeptanz innerer Erfahrungen</li>
            <li>Gegenwärtigkeit</li>
            <li>kognitive Defusion</li>
            <li>Werteklärung</li>
            <li>engagiertes Handeln</li>
          </ul>

          <h2 className="font-serif text-2xl mt-10 mb-4">
            Fazit
          </h2>

          <p>
            Psychische Flexibilität bedeutet, nicht gegen das eigene innere
            Erleben zu kämpfen, sondern einen bewussten Umgang damit zu entwickeln.
          </p>

          <p>
            Sie schafft die Grundlage für mehr innere Beweglichkeit und ein Leben,
            das stärker an persönlichen Werten ausgerichtet ist.
          </p>

          {/* CTA */}
          <div className="mt-16 p-6 bg-white rounded-2xl shadow-sm">
            <p className="mb-4">
              Wenn du dich in diesem Thema wiedererkennst, kann eine psychologische
              Begleitung sinnvoll sein.
            </p>

            <a
              href="/#contact"
              className="inline-block px-6 py-3 bg-[#B5725A] text-white rounded-full hover:bg-[#9A5D48] transition"
            >
              Kontakt aufnehmen
            </a>
          </div>

        </section>
      </div>
    </article>
  );
}