import { useLanguage } from "../../context/LanguageContext";
import { ArrowRight, Calendar, MapPin, UserRound, Check } from "lucide-react";

export function YogaAchtsamkeit() {
  const { language } = useLanguage();

  const isGerman = language === "de";

  return (
    <main className="bg-[#F5F0E8]">

      {/* HERO */}
      <section className="relative py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">

          <span className="text-sm font-medium tracking-wider text-[#B5725A] uppercase">
            {isGerman ? "Yoga & Achtsamkeit" : "Yoga & Mindfulness"}
          </span>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#3D3229] mt-4 leading-tight">
            {isGerman
              ? "Den Körper stärken und innere Flexibilität entwickeln."
              : "Strengthen your body and develop inner flexibility."}
          </h1>

          <p className="mt-8 text-lg md:text-xl text-[#3D3229]/70 leading-relaxed max-w-3xl">
            {isGerman
              ? "Yoga verbindet Bewegung, Atem und bewusste Wahrnehmung. In privaten Yogastunden können wir die Praxis individuell auf Sie, Ihren Körper und Ihre Bedürfnisse abstimmen."
              : "Yoga brings together movement, breath and mindful awareness. In private yoga sessions, we can tailor the practice to you, your body and your individual needs."}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#B5725A] text-white rounded-full hover:bg-[#A3624C] transition-colors"
            >
              {isGerman
                ? "Private Yogastunde anfragen"
                : "Inquire about a private session"}
              <ArrowRight size={17} />
            </a>

            <span className="text-[#3D3229]/60">
              {isGerman
                ? "50 Minuten · 89 €"
                : "50 minutes · €89"}
            </span>
          </div>

        </div>
      </section>


      {/* KÖRPER & BEWEGUNG */}
      <section className="py-20 md:py-28 bg-white/50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <div className="max-w-2xl mb-12">
            <span className="text-sm font-medium tracking-wider text-[#B5725A] uppercase">
              {isGerman ? "Körper & Bewegung" : "Body & Movement"}
            </span>

            <h2 className="font-serif text-3xl md:text-4xl text-[#3D3229] mt-3">
              {isGerman
                ? "Yoga beginnt beim Körper."
                : "Yoga begins with the body."}
            </h2>

            <p className="mt-6 text-[#3D3229]/70 leading-relaxed">
              {isGerman
                ? "Yoga bietet Raum, den eigenen Körper zu stärken, beweglicher zu werden und bewusster wahrzunehmen. Bewegung und Atem verbinden sich dabei zu einer Praxis, die körperliche und mentale Präsenz fördern kann."
                : "Yoga creates space to strengthen your body, develop mobility and become more aware of yourself. Movement and breath come together in a practice that can support both physical and mental presence."}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              isGerman
                ? {
                    title: "Asanas",
                    text: "Körperhaltungen und Bewegungsabläufe stärken den Körper, fördern Beweglichkeit und helfen dabei, den eigenen Körper bewusster wahrzunehmen.",
                  }
                : {
                    title: "Asanas",
                    text: "Postures and movement sequences strengthen the body, support mobility and help you become more aware of your body.",
                  },

              isGerman
                ? {
                    title: "Pranayama",
                    text: "Atemübungen helfen dabei, den Atem bewusster zu erleben und Bewegung und Atmung miteinander zu verbinden.",
                  }
                : {
                    title: "Pranayama",
                    text: "Breathing practices help you become more aware of your breath and connect breathing with movement.",
                  },

              isGerman
                ? {
                    title: "Achtsamkeit",
                    text: "Die Praxis schafft Raum, den eigenen Körper, Gedanken und Gefühle bewusster wahrzunehmen und mit mehr Aufmerksamkeit bei sich zu sein.",
                  }
                : {
                    title: "Mindfulness",
                    text: "The practice creates space to notice your body, thoughts and feelings more consciously and to be more present with yourself.",
                  },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/70 rounded-3xl p-7 border border-[#3D3229]/10"
              >
                <h3 className="font-serif text-2xl text-[#3D3229]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[#3D3229]/65 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* INNERE FLEXIBILITÄT */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <div className="max-w-2xl">
            <span className="text-sm font-medium tracking-wider text-[#B5725A] uppercase">
              {isGerman ? "Innere Flexibilität" : "Inner flexibility"}
            </span>

            <h2 className="font-serif text-3xl md:text-4xl text-[#3D3229] mt-3">
              {isGerman
                ? "Was auf der Matte entsteht, darf mit in den Alltag."
                : "What develops on the mat can become part of everyday life."}
            </h2>

            <p className="mt-6 text-[#3D3229]/70 leading-relaxed">
              {isGerman
                ? "Yoga kann mehr sein als körperliche Bewegung. Die Praxis kann Ihnen helfen, auch unangenehme Empfindungen, Gedanken und Gefühle bewusster wahrzunehmen und einen flexibleren Umgang damit zu entwickeln."
                : "Yoga can be more than physical movement. The practice can help you become more aware of uncomfortable sensations, thoughts and feelings and develop a more flexible way of relating to them."}
            </p>

            <p className="mt-4 text-[#3D3229]/70 leading-relaxed">
              {isGerman
                ? "So kann das, was Sie auf der Matte üben, auch im Alltag eine Rolle spielen: bewusster wahrnehmen, Raum schaffen und sich immer wieder neu ausrichten."
                : "What you practice on the mat can also become part of everyday life: noticing more consciously, creating space and finding your direction again and again."}
            </p>
          </div>

        </div>
      </section>


      {/* PRIVATE YOGA */}
      <section className="py-20 md:py-28 bg-[#E8DDD0]/40">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <div className="max-w-2xl mb-12">
            <span className="text-sm font-medium tracking-wider text-[#B5725A] uppercase">
              {isGerman ? "Private Yogastunden" : "Private Yoga"}
            </span>

            <h2 className="font-serif text-3xl md:text-4xl text-[#3D3229] mt-3">
              {isGerman
                ? "Eine Yogapraxis, die zu Ihnen passt."
                : "A yoga practice tailored to you."}
            </h2>

            <p className="mt-6 text-[#3D3229]/70 leading-relaxed">
              {isGerman
                ? "In einer privaten Yogastunde können wir die Praxis gezielt an Ihre Bedürfnisse, Ihre Yoga-Erfahrung und Ihre persönlichen Ziele anpassen."
                : "In a private yoga session, we can tailor the practice to your needs, your yoga experience and your individual goals."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

            <div className="bg-white/80 rounded-3xl p-8 border border-[#3D3229]/10">
              <div className="flex items-center gap-3 mb-6">
                <UserRound size={22} className="text-[#B5725A]" />

                <h3 className="font-serif text-2xl text-[#3D3229]">
                  {isGerman ? "Individuell" : "Individual"}
                </h3>
              </div>

              <ul className="space-y-4">
                {[
                  isGerman
                    ? "An Ihre körperlichen Voraussetzungen angepasst"
                    : "Adapted to your physical needs",

                  isGerman
                    ? "Passend zu Ihrer Yoga-Erfahrung"
                    : "Suitable for your level of experience",

                  isGerman
                    ? "Individuelle Schwerpunkte und Übungen"
                    : "Individual focus areas and exercises",

                  isGerman
                    ? "Ruhigere oder aktivere Praxis nach Wunsch"
                    : "A calmer or more active practice, depending on your wishes",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check
                      size={19}
                      className="text-[#B5725A] mt-0.5 shrink-0"
                    />

                    <span className="text-[#3D3229]/70 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>


            <div className="bg-white/80 rounded-3xl p-8 border border-[#3D3229]/10">
              <div className="flex items-center gap-3 mb-6">
                <Calendar size={22} className="text-[#B5725A]" />

                <h3 className="font-serif text-2xl text-[#3D3229]">
                  {isGerman ? "Rahmen" : "Details"}
                </h3>
              </div>

              <p className="text-3xl font-serif text-[#3D3229]">
                89 €
              </p>

              <p className="mt-2 text-[#3D3229]/60">
                {isGerman
                  ? "50 Minuten"
                  : "50 minutes"}
              </p>

              <div className="mt-6 flex items-start gap-3">
                <MapPin
                  size={19}
                  className="text-[#B5725A] mt-0.5 shrink-0"
                />

                <div className="text-[#3D3229]/70 leading-relaxed">
                  <p>
                    {isGerman
                      ? "Bevorzugt bei Agentur Shanti in Köln-Nippes."
                      : "Preferably at Agentur Shanti in Cologne-Nippes."}
                  </p>

                  <p className="mt-2 text-sm text-[#3D3229]/55">
                    {isGerman
                      ? "Auf Anfrage auch in meiner Praxis auf der Schildergasse."
                      : "Private sessions can also be held at my practice on Schildergasse upon request."}
                  </p>
                </div>
              </div>

              <p className="mt-6 text-[#3D3229]/70 leading-relaxed">
                {isGerman
                  ? "Wenn Sie möchten, können wir die Yogapraxis auch mit Gesprächen und Elementen aus der psychologischen Beratung, ACT und Wertearbeit verbinden."
                  : "If you wish, the yoga practice can also be combined with conversations and elements from psychological counseling, ACT and values work."}
              </p>

              <a
                href="/#contact"
                className="inline-flex items-center gap-2 mt-6 text-[#B5725A] font-medium hover:text-[#A3624C] transition-colors"
              >
                {isGerman
                  ? "Private Yogastunde anfragen"
                  : "Inquire about a private session"}
                <ArrowRight size={17} />
              </a>
            </div>

          </div>

        </div>
      </section>


      {/* GRUPPENKURSE */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <div className="max-w-2xl mb-12">
            <span className="text-sm font-medium tracking-wider text-[#B5725A] uppercase">
              {isGerman ? "Gruppenkurse" : "Group classes"}
            </span>

            <h2 className="font-serif text-3xl md:text-4xl text-[#3D3229] mt-3">
              {isGerman
                ? "Yoga bei Agentur Shanti"
                : "Yoga at Agentur Shanti"}
            </h2>

            <p className="mt-6 text-[#3D3229]/70 leading-relaxed">
              {isGerman
                ? "Ich unterrichte regelmäßig bei Agentur Shanti in Köln-Nippes. Die Gruppenkurse bieten Ihnen die Möglichkeit, Yoga gemeinsam mit anderen zu praktizieren."
                : "I regularly teach at Agentur Shanti in Cologne-Nippes. The group classes offer an opportunity to practice yoga together with others."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">

            <div className="bg-white/70 rounded-3xl p-7 border border-[#3D3229]/10">
              <Calendar size={20} className="text-[#B5725A] mb-5" />

              <h3 className="font-serif text-2xl text-[#3D3229]">
                {isGerman ? "Mittwochs" : "Wednesdays"}
              </h3>

              <p className="mt-2 text-lg text-[#3D3229]/70">
                17:00–17:45
              </p>

              <p className="mt-4 text-sm text-[#3D3229]/55">
                Agentur Shanti · Köln-Nippes
              </p>
            </div>

            <div className="bg-white/70 rounded-3xl p-7 border border-[#3D3229]/10">
              <Calendar size={20} className="text-[#B5725A] mb-5" />

              <h3 className="font-serif text-2xl text-[#3D3229]">
                {isGerman ? "Freitags" : "Fridays"}
              </h3>

              <p className="mt-2 text-lg text-[#3D3229]/70">
                17:15–18:15
              </p>

              <p className="mt-4 text-sm text-[#3D3229]/55">
                Agentur Shanti · Köln-Nippes
              </p>
            </div>

          </div>

          <a
            href="https://urbansportsclub.com/de/venues/agentur-shanti?view=new"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 text-[#B5725A] font-medium hover:text-[#A3624C] transition-colors"
          >
            {isGerman
              ? "Aktuelle Kurse und Buchung bei Urban Sports Club"
              : "Current classes and booking via Urban Sports Club"}
            <ArrowRight size={17} />
          </a>

        </div>
      </section>


      {/* VERBINDUNG MIT BERATUNG */}
      <section className="py-20 md:py-28 bg-white/50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <div className="max-w-2xl">
            <span className="text-sm font-medium tracking-wider text-[#B5725A] uppercase">
              {isGerman ? "Auf Wunsch verbunden" : "Connected if you wish"}
            </span>

            <h2 className="font-serif text-3xl md:text-4xl text-[#3D3229] mt-3">
              {isGerman
                ? "Yoga und psychologische Begleitung verbinden."
                : "Combining yoga with psychological support."}
            </h2>

            <p className="mt-6 text-[#3D3229]/70 leading-relaxed">
              {isGerman
                ? "Körperliche und psychische Erfahrungen lassen sich nicht immer voneinander trennen. Wenn Sie möchten, können wir die Yogapraxis deshalb mit Gesprächen und Elementen aus der psychologischen Beratung, ACT und Wertearbeit verbinden."
                : "Physical and psychological experiences cannot always be separated. If you wish, yoga can therefore be complemented by conversations and elements from psychological counseling, ACT and values work."}
            </p>

            <p className="mt-4 text-[#3D3229]/70 leading-relaxed">
              {isGerman
                ? "Dabei entscheiden Sie selbst, welcher Schwerpunkt für Sie gerade passend ist."
                : "You decide which focus feels most appropriate for you at the moment."}
            </p>
          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">

          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl md:text-4xl text-[#3D3229]">
              {isGerman
                ? "Eine Yogastunde, die zu Ihnen passt."
                : "A yoga session tailored to you."}
            </h2>

            <p className="mt-6 text-[#3D3229]/70 leading-relaxed">
              {isGerman
                ? "Schreiben Sie mir und wir besprechen, was Sie sich von einer privaten Yogastunde wünschen."
                : "Get in touch and we can discuss what you would like from a private yoga session."}
            </p>

            <a
              href="/#contact"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-[#B5725A] text-white rounded-full hover:bg-[#A3624C] transition-colors"
            >
              {isGerman
                ? "Private Yogastunde anfragen"
                : "Inquire about a private session"}
              <ArrowRight size={17} />
            </a>
          </div>

        </div>
      </section>


      {/* HINWEIS */}
      <section className="py-16 md:py-20 bg-[#3D3229] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">

          <h2 className="font-serif text-2xl md:text-3xl">
            {isGerman
              ? "Ein wichtiger Hinweis"
              : "An important note"}
          </h2>

          <p className="mt-5 text-white/70 leading-relaxed">
            {isGerman
              ? "Yoga und Achtsamkeit können das körperliche und psychische Wohlbefinden unterstützen, ersetzen jedoch keine notwendige medizinische oder psychologische Behandlung."
              : "Yoga and mindfulness can support physical and psychological well-being, but do not replace necessary medical or psychological treatment."}
          </p>

        </div>
      </section>

    </main>
  );
}