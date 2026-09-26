import { useLanguage } from '../context/LanguageContext';
import { Heart } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export function Footer() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: t.nav.services, href: '/services', isRoute: true },
    { label: t.nav.about, href: '#about' },
    /* { label: 'Blog', href: '/blog', isRoute: true }, */
    {
      label: 'Podcast',
      href: 'https://open.spotify.com/show/4wRbB36LtZ2dMtHDn4Z3LL?si=7a0bca36997c4fa5',
      isExternal: true,
    },
    { label: t.nav.contact, href: '#contact' },
  ];

  const handleNavClick = (item: any) => {
    // EXTERNAL LINKS
    if (item.isExternal) {
      window.open(item.href, '_blank', 'noopener,noreferrer');
      return;
    }

    // ROUTES
    if (item.isRoute) {
      navigate(item.href);
      return;
    }

    // SECTIONS
    if (location.pathname !== '/') {
      navigate(`/${item.href}`);
      return;
    }

    const element = document.querySelector(item.href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#3D3229] text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-white/5 to-transparent" />
        <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-white/5 to-transparent" />
      </div>

      <div className="relative z-10">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-14 md:gap-0">

            {/* Brand */}
            <div className="md:pr-12">
              <a
                href="#"
                className="inline-block font-serif text-2xl mb-4 hover:text-[#B5725A] transition-colors"
                onClick={(e) => {
                  e.preventDefault();

                  if (location.pathname !== '/') {
                    navigate('/');
                    return;
                  }

                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <span className="italic">Joris</span> van Bohemen
              </a>

              <p className="text-white/60 leading-relaxed max-w-sm whitespace-pre-line">
                {t.footer.tagline}
              </p>
            </div>

            {/* Navigation */}
            <div className="md:px-12">
              <h3 className="font-medium text-white mb-4">Navigation</h3>

              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <button
                      onClick={() => handleNavClick(item)}
                      className="text-white/60 hover:text-[#B5725A] transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="md:pl-12">
              <h3 className="font-medium text-white mb-4">Kontakt</h3>

              <div className="space-y-3 text-white/60">
                <p>Schildergasse 69-73</p>
                <p>50667 Köln</p>
                <p className="pt-2">+49 1578 879 4109</p>
                <p>info@jorisvanbohemen.de</p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative z-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">

              <p className="text-white/40 text-sm flex items-center gap-2">
                {t.footer.copyright}
                <Heart
                  size={14}
                  className="text-[#B5725A] fill-[#B5725A]"
                />
              </p>

              <div className="flex items-center gap-6">
                <Link
                  to="/privacy"
                  className="text-white/40 hover:text-white text-sm transition-colors"
                >
                  {t.footer.privacy}
                </Link>

                <Link
                  to="/imprint"
                  className="text-white/40 hover:text-white text-sm transition-colors"
                >
                  {t.footer.imprint}
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
