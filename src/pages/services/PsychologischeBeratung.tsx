import { useLanguage } from "../../context/LanguageContext";
import { ArrowRight, Check } from "lucide-react";

export function PsychologischeBeratung() {
  const { language } = useLanguage();

  const isGerman = language === "de";

  return (
    <main className="bg-[#F5F0E8]">

      {/* HERO */}
      <section className="relative py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">

          <span className="text-sm font-medium tracking-wider text-[#B5725A] uppercase">
            {isGerman ? "Psychologische Beratung" : "Psychological Counseling"}
          </span>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#3D3229] mt-4 leading-tight">
            {isGerman
              ? "Ein Gespräch, um Ihre Situation in Ruhe zu sortieren."
              : "A conversation to sort your situation calmly."}
          </h1>

          <p className="mt-8 text-lg md:text-xl text-[#3D3229]/70 leading-relaxed max-w-3xl">
            {isGerman
              ? "Manchmal gibt es eine konkrete Situation, die uns beschäftigt und bei der wir alleine nicht richtig weiterkommen. In der psychologischen Beratung können Sie Ihre Situation in Ruhe sortieren, neue Perspektiven entwickeln und konkrete nächste Schritte finden."
              : "Sometimes there is a specific situation that occupies your thoughts and leaves you unsure how to move forward. Psychological counseling offers you space to make sense of what is happening, develop new perspectives, and find concrete next steps."}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#B5725A] text-white rounded-full hover:bg-[#A3624C] transition-colors"
            >
              {isGerman ? "Gespräch anfragen" : "Request a session"}
              <ArrowRight size={17} />
            </a>

            <span className="text-[#3D3229]/60">
              {isGerman
                ? "Einzeltermin · 50 Minuten · 89 €"
                : "Individual session · 50 minutes · €89"}
            </span>
          </div>

        </div>
      </section>


      {/* WOBEI ICH BEGLEITEN KANN */}
      <section className="py-20 md:py-28 bg-white/50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <div className="max-w-2xl mb-12">
            <span className="text-sm font-medium tracking-wider text-[#B5725A] uppercase">
              {isGerman ? "Ihr Anliegen" : "Your situation"}
            </span>

            <h2 className="font-serif text-3xl md:text-4xl text-[#3D3229] mt-3">
              {isGerman
                ? "Wobei ich Sie begleiten kann"
                : "What I can support you with"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">

            {[
              isGerman
                ? {
                    title: "Herausfordernde Lebenssituationen",
                    text: "Wenn gerade vieles zusammenkommt oder Sie nicht wissen, wie Sie mit einer Situation umgehen sollen.",
                  }
                : {
                    title: "Challenging life situations",
                    text: "When several things come together and you are unsure how to deal with a particular situation.",
                  },

              isGerman
                ? {
                    title: "Entscheidungen und Veränderungen",
                    text: "Wenn eine berufliche oder persönliche Veränderung ansteht und Sie Orientierung suchen.",
                  }
                : {
                    title: "Decisions and change",
                    text: "When a personal or professional change lies ahead and you are looking for clarity and direction.",
                  },

              isGerman
                ? {
                    title: "Ängste, Sorgen und innere Unruhe",
                    text: "Wenn Gedanken und Sorgen Sie beschäftigen und es schwerfällt, zur Ruhe zu kommen.",
                  }
                : {
                    title: "Anxiety, worries and inner restlessness",
                    text: "When worries and recurring thoughts occupy your mind and it becomes difficult to find calm.",
                  },

              isGerman
                ? {
                    title: "Selbstzweifel und Unsicherheit",
                    text: "Wenn Sie sich selbst häufig hinterfragen oder sich in bestimmten Situationen nicht sicher fühlen.",
                  }
                : {
                    title: "Self-doubt and uncertainty",
                    text: "When you frequently question yourself or feel uncertain in particular situations.",
                  },

              isGerman
                ? {
                    title: "Konflikte und zwischenmenschliche Situationen",
                    text: "Wenn Sie in einer Beziehung, Freundschaft, Familie oder im beruflichen Umfeld feststecken.",
                  }
                : {
                    title: "Conflict and interpersonal situations",
                    text: "When you feel stuck in a relationship, friendship, family situation, or professional context.",
                  },

              isGerman
                ? {
                    title: "Das Gefühl, nicht weiterzukommen",
                    text: "Wenn Sie wissen, dass sich etwas verändern soll, aber noch nicht wissen, wie.",
                  }
                : {
                    title: "Feeling stuck",
                    text: "When you know that something needs to change but are not yet sure how to move forward.",
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


      {/* ABLAUF */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <div className="max-w-2xl mb-12">
            <span className="text-sm font-medium tracking-wider text-[#B5725A] uppercase">
              {isGerman ? "Der Ablauf" : "How it works"}
            </span>

            <h2 className="font-serif text-3xl md:text-4xl text-[#3D3229] mt-3">
              {isGerman
                ? "Sie bringen mit, was Sie gerade beschäftigt."
                : "You bring whatever is currently on your mind."}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              isGerman
                ? {
                    number: "01",
                    title: "Ankommen",
                    text: "Wir nehmen uns Zeit, Ihre aktuelle Situation und das, was Sie beschäftigt, gemeinsam zu betrachten.",
                  }
                : {
                    number: "01",
                    title: "Arrive",
                    text: "We take time to look together at your current situation and what is occupying your mind.",
                  },

              isGerman
                ? {
                    number: "02",
                    title: "Sortieren",
                    text: "Wir ordnen Gedanken, Gefühle und verschiedene Perspektiven und schauen, was für Sie gerade wichtig ist.",
                  }
                : {
                    number: "02",
                    title: "Make sense of it",
                    text: "We explore your thoughts, feelings, and different perspectives to understand what matters to you right now.",
                  },

              isGerman
                ? {
                    number: "03",
                    title: "Weitergehen",
                    text: "Gemeinsam entwickeln wir konkrete Möglichkeiten, wie Sie mit Ihrer Situation weiter umgehen können.",
                  }
                : {
                    number: "03",
                    title: "Move forward",
                    text: "Together, we explore concrete ways of responding to your situation and moving forward.",
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


      {/* NIEDRIGSCHWELLIGER EINSTIEG */}
      <section className="py-20 md:py-28 bg-[#E8DDD0]/40">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">

          <div className="bg-white/80 rounded-3xl p-8 md:p-12 border border-[#3D3229]/10">

            <span className="text-sm font-medium tracking-wider text-[#B5725A] uppercase">
              {isGerman ? "Einzeltermin" : "Individual session"}
            </span>

            <h2 className="font-serif text-3xl md:text-4xl text-[#3D3229] mt-3">
              {isGerman
                ? "Ein einzelnes Gespräch kann bereits neue Handlungsmöglichkeiten eröffnen."
                : "A single session can already open up new possibilities for action."}
            </h2>

            <p className="mt-6 text-[#3D3229]/70 leading-relaxed text-lg">
              {isGerman
                ? "Sie können zunächst einen einzelnen Termin vereinbaren und in Ruhe herausfinden, ob die Beratung für Sie hilfreich ist. Wenn Sie danach das Gefühl haben, dass weitere Gespräche sinnvoll wären, können wir gemeinsam schauen, wie eine weitere Beratung aussehen kann. Sie entscheiden selbst, ob und wie Sie weitermachen möchten."
                : "You can start with a single session and take your time to find out whether counseling feels helpful for you. If you feel afterwards that further conversations would be useful, we can discuss what continued counseling could look like. You decide whether and how you would like to continue."}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">

              <div>
                <p className="text-3xl font-serif text-[#3D3229]">
                  89 €
                </p>

                <p className="mt-1 text-sm text-[#3D3229]/55">
                  {isGerman
                    ? "50 Minuten · Online oder in der Praxis"
                    : "50 minutes · Online or in person"}
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