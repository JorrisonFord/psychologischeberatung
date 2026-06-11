import { Link } from "react-router-dom";

export function BlogArticleTemplate() {
  return (
    <article className="min-h-screen bg-[#F5F0E8] text-[#3D3229]">
      
      {/* HEADER */}
      <header className="max-w-3xl mx-auto px-6 pt-28 pb-12">
        
        <div className="text-sm text-[#B5725A] uppercase tracking-wide mb-4">
          ACT • Psychische Flexibilität
        </div>

        <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
          Psychische Flexibilität verstehen
        </h1>

        <p className="text-lg text-[#3D3229]/70 leading-relaxed">
          Psychische Flexibilität beschreibt die Fähigkeit, Gedanken und Gefühle wahrzunehmen,
          ohne von ihnen gesteuert zu werden – und dennoch handlungsfähig zu bleiben.
        </p>

        <div className="mt-6 text-sm text-[#3D3229]/50">
          5–7 Minuten Lesezeit
        </div>
      </header>

      {/* HERO IMAGE OPTIONAL */}
      <div className="max-w-5xl mx-auto px-6 mb-12">
        <div className="rounded-2xl overflow-hidden aspect-[16/9] bg-[#E8DDD0]">
          <img
            src="/images/blog/placeholder.jpg"
            alt="Blog visual"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-3xl mx-auto px-6 pb-24 space-y-8">

        <section>
          <h2 className="text-2xl font-serif mb-3">
            Was bedeutet psychische Flexibilität?
          </h2>
          <p className="text-[#3D3229]/80 leading-relaxed">
            In der Acceptance and Commitment Therapy (ACT) beschreibt dieser Begriff
            die Fähigkeit, inneres Erleben zu akzeptieren, statt dagegen anzukämpfen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif mb-3">
            Warum ist das wichtig?
          </h2>
          <p className="text-[#3D3229]/80 leading-relaxed">
            Viele psychische Belastungen entstehen nicht durch Gedanken selbst,
            sondern durch den Versuch, sie zu kontrollieren oder zu vermeiden.
          </p>
        </section>

        <section className="p-6 bg-white rounded-2xl border border-[#3D3229]/10">
          <h3 className="font-serif text-xl mb-2 text-[#B5725A]">
            Kurz zusammengefasst
          </h3>
          <p className="text-[#3D3229]/80">
            Psychische Flexibilität bedeutet, inneres Erleben wahrzunehmen,
            ohne sich davon bestimmen zu lassen – und trotzdem entsprechend der eigenen Werte zu handeln.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif mb-3">
            Ein praktischer Blick
          </h2>
          <p className="text-[#3D3229]/80 leading-relaxed">
            Statt gegen Angst anzukämpfen, kann es hilfreich sein, sie als Teil des Erlebens
            zu erkennen und trotzdem einen kleinen Schritt in Richtung wichtiger Werte zu gehen.
          </p>
        </section>

        {/* CTA BLOCK */}
        <div className="mt-16 p-8 bg-[#B5725A]/10 rounded-2xl">
          <h3 className="font-serif text-2xl mb-3">
            Interesse an einem Gespräch?
          </h3>

          <p className="text-[#3D3229]/70 mb-6">
            Wenn dich dieses Thema anspricht, kannst du gerne ein unverbindliches Erstgespräch vereinbaren.
          </p>

          <Link
            to="/#contact"
            className="inline-block px-6 py-3 bg-[#B5725A] text-white rounded-full hover:bg-[#9A5D48] transition"
          >
            Termin vereinbaren
          </Link>
        </div>

        {/* BACK LINK */}
        <div className="pt-10">
          <Link
            to="/blog"
            className="text-sm text-[#3D3229]/60 hover:text-[#B5725A] transition"
          >
            ← Zurück zum Blog
          </Link>
        </div>

      </div>
    </article>
  );
}