import { useLanguage } from "../../context/LanguageContext";
import { ArrowRight, Check, Calendar } from "lucide-react";

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
              ? "Bewegung, Atmung und Achtsamkeit für mehr innere Flexibilität."
              : "Movement, breathing, and mindfulness for more inner flexibility."}
          </h1>

          <p className="mt-8 text-lg md:text-xl text-[#3D3229]/70 leading-relaxed max-w-3xl">
            {isGerman
              ? "Yoga kann mehr sein als körperliche Bewegung. Die Praxis bietet einen Raum, um den eigenen Körper bewusster wahrzunehmen, anders mit Gedanken und Gefühlen umzugehen und den alltäglichen Herausforderungen flexibler zu begegnen."
              : "Yoga can be more than physical movement. The practice offers space to become more aware of your body, deal differently with thoughts and feelings, and respond more flexibly to whatever life brings."}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#B5725A] text-white rounded-full hover:bg-[#A3624C] transition-colors"
          >
            {isGerman
              ? "Private Yogastunde anfragen"
              : "Inquire about a private yoga session"}
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


      {/* WAS BEINHALTET YOGA & INNERE FLEXIBILITÄT */}
      <section className="py-20 md:py-28 bg-white/50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <div className="max-w-6xl mb-12">
            <span className="text-sm font-medium tracking-wider text-[#B5725A] uppercase">
              {isGerman ? "Die Praxis" : "The practice"}
            </span>

            <h2 className="font-serif text-3xl md:text-4xl text-[#3D3229] mt-3">
              {isGerman
                ? "Was Yoga & Achtsamkeit beinhaltet"
                : "What yoga & mindfulness involves"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">

            {[
              isGerman
                ? {
                    title: "Körper bewusst erleben",
                    text: "Asanas und bewusste Bewegung können dabei helfen, den eigenen Körper wahrzunehmen und ein Gefühl für die eigenen Grenzen und Möglichkeiten zu entwickeln.",
                  }
                : {
                    title: "Connecting with the body",
                    text: "Asanas and mindful movement can help you connect with your body and develop a sense of your own limits and possibilities.",
                  },

              isGerman
                ? {
                    title: "Pranayama – Atemübungen",
                    text: "Atemübungen können dabei helfen, im Moment zu bleiben und den Körper zu regulieren, selbst in herausfordernden Situationen.",
                  }
                : {
                    title: "Pranayama – breathing practices",
                    text: "Breathing practices can help you stay present and regulate your body, even in challenging situations.",
                  },

              isGerman
                ? {
                    title: "Gedanken und Gefühle anders betrachten",
                    text: "Achtsamkeit can die Fähigkeit stärken, Gedanken und Gefühle wahrzunehmen, ohne ihnen sofort zu folgen oder sie verändern zu müssen.",
                  }
                : {
                    title: "Relating differently to thoughts and feelings",
                    text: "Mindfulness can strengthen the ability to notice thoughts and feelings without immediately reacting to them or trying to change them.",
                  },

              isGerman
                ? {
                    title: "Mitnehmen, was Ihnen wichtig ist",
                    text: "Die Praxis kann dabei unterstützen, sich daran zu orientieren, was Ihnen im Leben wirklich wichtig ist, und das in den Alltag mitzunehmen.",
                  }
                : {
                    title: "Taking what matters to you into everyday life",
                    text: "The practice can support you in orienting yourself towards what truly matters to you in life and integrating this into your daily routine.",
                  },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="mt-1 shrink-0">
                  <Check size={20} className="text-[#B5725A]" />
                </div>

                <div>
                  <h3 className="font-serif text-xl text-[#3D3229]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[#3D3229]/65 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* AUF WUNSCH VERBINDEN */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <div className="max-w-4xl mb-12">
            <span className="text-sm font-medium tracking-wider text-[#B5725A] uppercase">
              {isGerman ? "Die Verbindung" : "The connection"}
            </span>

            <h2 className="font-serif text-3xl md:text-4xl text-[#3D3229] mt-3">
              {isGerman
                ? "Auf Wunsch lassen sich beide Zugänge verbinden."
                : "If you wish, both approaches can be combined."}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              isGerman
                ? {
                    number: "01",
                    title: "Körper",
                    text: "Yoga und Achtsamkeit bieten einen körperorientierten Zugang. Bewegung, Atem und Wahrnehmung können dabei helfen, wieder mehr Kontakt zum eigenen Erleben zu bekommen.",
                  }
                : {
                    number: "01",
                    title: "Body",
                    text: "Yoga and mindfulness offer a body-oriented approach. Movement, breath, and awareness can help you reconnect with your own experience.",
                  },

              isGerman
                ? {
                    number: "02",
                    title: "Psychologische Beratung",
                    text: "In der Beratung können wir gemeinsam betrachten, was Sie beschäftigt, welche alltäglichen Strategien und Blockaden Sie festhalten und welche Veränderungen für Sie stimmig sein könnten.",
                  }
                : {
                    number: "02",
                    title: "Psychological counseling",
                    text: "In psychological counseling, we can explore what is occupying you, what everyday strategies and blockages may be keeping you stuck, and what changes might feel meaningful to you.",
                  },

              isGerman
                ? {
                    number: "03",
                    title: "Ihr eigener Weg",
                    text: "Beides muss nicht getrennt voneinander stattfinden. Wenn es für Sie sinnvoll ist, können körperliche Praxis und psychologische Reflexion miteinander verbunden werden.",
                  }
                : {
                    number: "03",
                    title: "Your own path",
                    text: "The two do not have to remain separate. When it feels useful, physical practice and psychological reflection can be brought together.",
                  },
            ].map((step) => (
              <div
                key={step.number}
                className="bg-white/70 rounded-3xl p-7 border border-[#3D3229]/10"
              >
                <span className="text-sm text-[#B5725A] font-medium">
                  {step.number}
                </span>

                <h3 className="font-serif text-2xl text-[#3D3229] mt-3">
                  {step.title}
                </h3>

                <p className="mt-3 text-[#3D3229]/65 leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ANGEBOT */}
      <section className="py-20 md:py-28 bg-[#E8DDD0]/40">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">

          <div className="bg-white/80 rounded-3xl p-8 md:p-12 border border-[#3D3229]/10">

            <span className="text-sm font-medium tracking-wider text-[#B5725A] uppercase">
              {isGerman ? "Einzelbegleitung" : "Individual sessions"}
            </span>

            <h2 className="font-serif text-3xl md:text-4xl text-[#3D3229] mt-3">
              {isGerman
                ? "Yoga, Achtsamkeit und psychologische Impulse – auf Sie abgestimmt."
                : "Yoga, mindfulness, and psychological perspectives – tailored to you."}
            </h2>

            <p className="mt-6 text-[#3D3229]/70 leading-relaxed text-lg">
              {isGerman
                ? "In einer Einzelstunde können wir Yoga, Atemübungen und Achtsamkeit mit Elementen aus der Acceptance and Commitment Therapy (ACT) verbinden. Dabei geht es nicht darum, etwas Bestimmtes fühlen oder erreichen zu müssen, sondern darum, einen bewussteren Umgang mit dem eigenen Erleben zu entwickeln."
                : "In an individual session, we can combine yoga, breathing practices, and mindfulness with elements of Acceptance and Commitment Therapy (ACT). The aim is not to make yourself feel or achieve something specific, but to develop a more conscious and flexible relationship with your own experience."}
            </p>

            <p className="mt-4 text-[#3D3229]/70 leading-relaxed">
              {isGerman
                ? "Die Inhalte richten sich nach Ihnen und können je nach Anliegen unterschiedlich gewichtet werden – von einer körperorientierten Yogastunde bis hin zu einer stärkeren Verbindung mit Achtsamkeit und psychologischer Reflexion."
                : "The focus can be adapted to your needs and may range from a primarily physical yoga session to a stronger emphasis on mindfulness and psychological reflection."}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">

              <div>
                <p className="text-3xl font-serif text-[#3D3229]">
                  89 €
                </p>

                <p className="mt-1 text-sm text-[#3D3229]/55">
                  {isGerman
                    ? "50 Minuten · Im Yoga-Studio"
                    : "50 minutes · In the yoga studio"}
                </p>
              </div>

              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#3D3229] text-white rounded-full hover:bg-[#2F2721] transition-colors"
              >
                {isGerman ? "Termin anfragen" : "Request a session"}
                <ArrowRight size={17} />
              </a>

            </div>

          </div>

        </div>
      </section>


     {/* GRUPPENKURSE */}
    <section className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">

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
              ? "Yoga und Achtsamkeit sind keine medizinische oder psychotherapeutische Behandlung und ersetzen keine notwendige medizinische oder psychotherapeutische Versorgung. Bei akuten psychischen Krisen oder Notfällen wenden Sie sich bitte an die entsprechenden medizinischen oder psychotherapeutischen Anlaufstellen."
              : "Yoga and mindfulness are not medical or psychotherapeutic treatments and do not replace necessary medical or psychotherapeutic care. In an acute psychological crisis or emergency, please contact the appropriate medical or mental health services."}
          </p>

        </div>
      </section>


    </main>
  );
}
