import { useLanguage } from '../context/LanguageContext';
import { Heart } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.philosophy, href: '#philosophy' },
    { label: t.nav.testimonials, href: '#testimonials' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#3D3229] text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-white/5 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-white/5 to-transparent" />
      </div>

      <div className="relative z-10">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">

            {/* Brand */}
            <div className="md:col-span-1">
              <a
                href="#"
                className="inline-block font-serif text-2xl mb-6 hover:text-[#B5725A] transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <span className="italic">Joris</span> van Bohemen
              </a>

              <p className="text-white/60 leading-relaxed max-w-sm">
                ACT-basierte psychologische Beratung für mehr innere Klarheit, psychologische Flexibilität und persönliche Entwicklung.
              </p>
            </div>

            {/* Navigation */}
            <div className="md:col-span-1">
              <h3 className="font-medium text-white mb-6">Navigation</h3>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="text-white/60 hover:text-[#B5725A] transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Preview */}
            <div className="md:col-span-1">
              <h3 className="font-medium text-white mb-6">Kontakt</h3>
              <div className="space-y-3 text-white/60">
                <p>Schildergasse 69-73</p>
                <p>50667 Köln</p>
                <p className="pt-2">+49 1578 879 4109</p>
                <p>joris.vanbohemen@gmail.com</p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">

              <p className="text-white/40 text-sm flex items-center gap-2">
                {t.footer.copyright}
                <Heart size={14} className="text-[#B5725A] fill-[#B5725A]" />
              </p>

              <div className="flex items-center gap-6">
                <button className="text-white/40 hover:text-white text-sm transition-colors">
                  {t.footer.privacy}
                </button>
                <button className="text-white/40 hover:text-white text-sm transition-colors">
                  {t.footer.imprint}
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}