import { useLanguage } from "../../context/LanguageContext";

export function BlogIndex() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#F5F0E8] text-[#3D3229]">

      <div className="max-w-5xl mx-auto px-6 py-24">

        {/* HERO */}
        <header className="max-w-2xl">
          <p className="text-sm font-medium tracking-wider text-[#B5725A] uppercase mb-4">
            {t.hero.subtitle}
          </p>

          <h1 className="font-serif text-4xl md:text-5xl mb-6">
            Blog
          </h1>

          <p className="text-lg text-[#3D3229]/70 leading-relaxed">
            Hier entsteht nach und nach ein Ort für Gedanken, Impulse und
            praktische Anregungen rund um psychologische Beratung, ACT, Yoga
            und Achtsamkeit.
          </p>

          <p className="mt-4 text-lg text-[#3D3229]/70 leading-relaxed">
            In Zukunft werde ich hier interessante Artikel mit Ihnen teilen –
            über psychische Flexibilität, den Umgang mit Gedanken und Gefühlen
            und darüber, wie wir unser Leben bewusster nach dem ausrichten
            können, was uns wichtig ist.
          </p>
        </header>

      </div>
    </div>
  );
}