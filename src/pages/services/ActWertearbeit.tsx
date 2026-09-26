import { useLanguage } from "../../context/LanguageContext";
import { ArrowRight, Check } from "lucide-react";

export function ACTWertearbeit() {
  const { language } = useLanguage();

  const isGerman = language === "de";

  return (
    <main className="bg-[#F5F0E8]">

      {/* HERO */}
      <section className="relative py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">

          <span className="text-sm font-medium tracking-wider text-[#B5725A] uppercase">
            {isGerman ? "ACT & Wertearbeit" : "ACT & Values Work"}
          </span>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#3D3229] mt-4 leading-tight">
            {isGerman
              ? "Klarheit und Ausrichtung für die nächsten Schritte."
              : "Clarity and direction for your next steps."}
          </h1>

          <p className="mt-8 text-lg md:text-xl text-[#3D3229]/70 leading-relaxed max-w-3xl">
            {isGerman
              ? "Ein strukturiertes 6-Wochen-Programm für Menschen, die herausfinden möchten, was ihnen wirklich wichtig ist und ihr Handeln bewusster daran ausrichten möchten."
              : "A structured six-week program for people who want to clarify what truly matters to them and align their actions more consciously with it."}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#B5725A] text-white rounded-full hover:bg-[#A3624C] transition-colors"
            >
              {isGerman
                ? "6-Wochen-Programm anfragen"
                : "Inquire about the 6-week program"}
              <ArrowRight size={17} />
            </a>

            <span className="text-[#3D3229]/60">
              {isGerman
                ? "6 Sitzungen · 50 Minuten"
                : "6 sessions · 50 minutes"}
            </span>
          </div>

        </div>
      </section>


      {/* FÜR WEN */}
      <section className="py-20 md:py-28 bg-white/50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <div className="max-w-2xl mb-12">
            <span className="text-sm font-medium tracking-wider text-[#B5725A] uppercase">
              {isGerman ? "Ihr Anliegen" : "Your situation"}
            </span>

            <h2 className="font-serif text-4xl md:text-4xl text-[#3D3229] mt-3">
              {isGerman
                ? "Wenn Sie wissen, dass sich etwas verändern soll."
                : "When you know that something needs to change."}
            </h2>

            <p className="mt-6 text-[#3D3229]/70 leading-relaxed">
              {isGerman
                ? "Manchmal wissen wir, was uns wichtig ist – und finden trotzdem keinen Weg, danach zu handeln. Zweifel, Sorgen, Selbstkritik oder unangenehme Gefühle können dabei im Weg stehen."
                : "Sometimes we know what matters to us, yet still struggle to act accordingly. Doubts, worries, self-criticism, or difficult feelings can get in the way."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">

            {[
              isGerman
                ? {
                    title: "Klarheit gewinnen",
                    text: "Sie möchten herausfinden, was Ihnen in verschiedenen Lebensbereichen wirklich wichtig ist und wohin Sie sich ausrichten möchten.",
                  }
                : {
                    title: "Finding clarity",
                    text: "You want to explore what truly matters to you in different areas of life and where you want to direct your attention and energy.",
                  },

              isGerman
                ? {
                    title: "Entscheidungen treffen",
                    text: "Sie stehen vor einer Veränderung oder Entscheidung und möchten herausfinden, welcher Weg für Sie stimmig sein könnte.",
                  }
                : {
                    title: "Making decisions",
                    text: "You are facing a change or decision and want to explore which direction feels meaningful and right for you.",
                  },

              isGerman
                ? {
                    title: "Mit inneren Hürden umgehen",
                    text: "Gedanken, Zweifel oder unangenehme Gefühle halten Sie immer wieder davon ab, das zu tun, was Ihnen eigentlich wichtig ist.",
                  }
                : {
                    title: "Working with inner barriers",
                    text: "Thoughts, doubts, or difficult feelings repeatedly keep you from doing what matters to you.",
                  },

              isGerman
                ? {
                    title: "Ins Handeln kommen",
                    text: "Sie möchten aus Ihren Erkenntnissen konkrete Schritte entwickeln und diese auch im Alltag umsetzen.",
                  }
                : {
                    title: "Moving into action",
                    text: "You want to turn your insights into concrete steps and bring them into your everyday life.",
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


      {/* DIE 6 SITZUNGEN */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <div className="max-w-2xl mb-12">
            <span className="text-sm font-medium tracking-wider text-[#B5725A] uppercase">
              {isGerman ? "Der Prozess" : "The process"}
            </span>

            <h2 className="font-serif text-3xl md:text-4xl text-[#3D3229] mt-3">
              {isGerman
                ? "Was Sie in den 6 Sitzungen erwartet"
                : "What to expect from the six sessions"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {[
              isGerman
                ? {
                    number: "01",
                    title: "Standortbestimmung",
                    text: "Wir schauen gemeinsam auf Ihre aktuelle Situation und klären, wo Sie gerade stehen und was Sie verändern möchten.",
                  }
                : {
                    number: "01",
                    title: "Where you are now",
                    text: "We look at your current situation and explore where you are now and what you would like to change.",
                  },

              isGerman
                ? {
                    number: "02",
                    title: "Wertekompass",
                    text: "Wir erkunden, was Ihnen in Bereichen wie Beziehungen, Beruf, Gesundheit und persönlicher Entwicklung wirklich wichtig ist.",
                  }
                : {
                    number: "02",
                    title: "Values compass",
                    text: "We explore what truly matters to you in areas such as relationships, work, health, and personal development.",
                  },

              isGerman
                ? {
                    number: "03",
                    title: "Mit inneren Hürden umgehen",
                    text: "Sie lernen, Gedanken, Zweifel und unangenehme Gefühle anders zu betrachten, sodass diese nicht automatisch bestimmen müssen, wie Sie handeln.",
                  }
                : {
                    number: "03",
                    title: "Working with inner barriers",
                    text: "You learn to relate differently to thoughts, doubts, and difficult feelings, so they do not automatically determine how you act.",
                  },

              isGerman
                ? {
                    number: "04",
                    title: "Achtsamkeit im Alltag",
                    text: "Wir entwickeln kurze und alltagstaugliche Übungen, die Ihnen helfen können, bewusster im gegenwärtigen Moment zu sein.",
                  }
                : {
                    number: "04",
                    title: "Mindfulness in everyday life",
                    text: "We develop short, practical exercises that can help you become more present and aware in everyday life.",
                  },

              isGerman
                ? {
                    number: "05",
                    title: "Vom Wunsch zum Handeln",
                    text: "Aus dem, was Ihnen wichtig ist, entwickeln wir konkrete nächste Schritte, die Sie tatsächlich in Ihrem Alltag umsetzen können.",
                  }
                : {
                    number: "05",
                    title: "From intention to action",
                    text: "We turn what matters to you into concrete next steps that you can actually bring into your everyday life.",
                  },

              isGerman
                ? {
                    number: "06",
                    title: "Ausrichten und weitergehen",
                    text: "Wir schauen zurück, was Sie gelernt und ausprobiert haben, und entwickeln einen persönlichen Plan für die nächsten Monate.",
                  }
                : {
                    number: "06",
                    title: "Moving forward",
                    text: "We reflect on what you have learned and explored and develop a personal plan for the months ahead.",
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
              {isGerman ? "6-Wochen-Programm" : "6-week program"}
            </span>

            <h2 className="font-serif text-3xl md:text-4xl text-[#3D3229] mt-3">
              {isGerman
                ? "6 Sitzungen zum Preis von 5."
                : "Six sessions for the price of five."}
            </h2>

            <p className="mt-6 text-[#3D3229]/70 leading-relaxed text-lg">
              {isGerman
                ? "Das Programm umfasst sechs persönliche Sitzungen über einen Zeitraum von sechs Wochen. Zwischen den Sitzungen können Sie die besprochenen Übungen und Schritte in Ihrem Alltag ausprobieren."
                : "The program includes six individual sessions over a period of six weeks. Between sessions, you can explore the exercises and steps discussed and bring them into your everyday life."}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">

              <div>
                <p className="text-3xl font-serif text-[#3D3229]">
                  445 €
                </p>

                <p className="mt-1 text-sm text-[#3D3229]/55">
                  {isGerman
                    ? "6 × 50 Minuten · Online oder in der Praxis"
                    : "6 × 50 minutes · Online or in person"}
                </p>

                <p className="mt-2 text-sm text-[#B5725A]">
                  {isGerman
                    ? "Statt 534 €"
                    : "Regular price €534"}
                </p>
              </div>

              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#3D3229] text-white rounded-full hover:bg-[#2F2721] transition-colors"
              >
                {isGerman
                  ? "Programm anfragen"
                  : "Inquire about the program"}
                <ArrowRight size={17} />
              </a>

            </div>

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
              ? "Die psychologische Beratung ist keine Psychotherapie und ersetzt keine notwendige medizinische oder psychotherapeutische Behandlung. Bei akuten psychischen Krisen oder Notfällen wenden Sie sich bitte an die entsprechenden medizinischen oder psychotherapeutischen Anlaufstellen."
              : "Psychological counseling is not psychotherapy and does not replace necessary medical or psychotherapeutic treatment. In an acute psychological crisis or emergency, please contact the appropriate medical or mental health services."}
          </p>

        </div>
      </section>

    </main>
  );
}