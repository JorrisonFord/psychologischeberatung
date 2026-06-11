import { Link } from "react-router-dom";

export function BlogIndex() {
  const posts = [
    {
      title: "Psychische Flexibilität verstehen",
      description:
        "Ein zentraler Begriff der ACT und Grundlage für einen flexibleren Umgang mit Gedanken und Gefühlen.",
      slug: "/blog/psychologische-flexibilitaet",
      tag: "ACT",
    },
    {
      title: "Umgang mit innerem Druck",
      description:
        "Warum Widerstand oft mehr Stress erzeugt – und wie du einen anderen Umgang findest.",
      slug: "#",
      tag: "Stress",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F0E8] text-[#3D3229]">

      <div className="max-w-5xl mx-auto px-6 py-24">

        {/* HERO */}
        <header className="mb-16">
          <h1 className="font-serif text-4xl md:text-5xl mb-4">
            Blog
          </h1>

          <p className="text-lg text-[#3D3229]/70 max-w-2xl">
            Gedanken zu psychischer Flexibilität, ACT und innerer Entwicklung.
            Impulse aus der Praxis und psychologischen Arbeit.
          </p>
        </header>

        {/* FEATURED (optional) */}
        <div className="mb-12 p-6 rounded-2xl bg-white shadow-sm border border-[#3D3229]/5">
          <p className="text-sm text-[#B5725A] mb-2">Featured</p>
          <h2 className="text-2xl font-serif mb-2">
            Psychische Flexibilität verstehen
          </h2>
          <p className="text-[#3D3229]/70 mb-4">
            Ein zentraler Begriff der ACT und Grundlage für Veränderung ohne inneren Druck.
          </p>
          <Link
            to="/blog/psychologische-flexibilitaet"
            className="text-[#B5725A] font-medium hover:underline"
          >
            Artikel lesen →
          </Link>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <Link
              key={post.title}
              to={post.slug}
              className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition border border-transparent hover:border-[#B5725A]/20"
            >
              <div className="text-xs text-[#B5725A] mb-2 uppercase tracking-wide">
                {post.tag}
              </div>

              <h3 className="text-xl font-serif mb-2 group-hover:text-[#B5725A] transition">
                {post.title}
              </h3>

              <p className="text-[#3D3229]/70 text-sm">
                {post.description}
              </p>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}