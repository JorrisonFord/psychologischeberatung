import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Navigation() {
  const { t, language, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.philosophy, href: '#philosophy' },
    { label: t.nav.testimonials, href: '#testimonials' },
    { label: 'Blog', href: '/blog', isRoute: true },
    { label: t.nav.contact, href: '#contact' },
  ];

  const handleNavClick = (item: any) => {
    setIsMobileMenuOpen(false);

    // ROUTE (Blog)
    if (item.isRoute) {
      navigate(item.href);
      return;
    }

    // SCROLL SECTIONS
    const element = document.querySelector(item.href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#F5F0E8]/95 backdrop-blur-md shadow-sm py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* BRAND */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex flex-col leading-tight hover:text-[#B5725A] transition-colors"
            >
              <span className="font-serif text-lg md:text-xl text-[#3D3229] tracking-tight">
                Joris van Bohemen
              </span>
              <span className="text-[11px] md:text-xs text-[#3D3229]/50 tracking-wide mt-0.5">
                ACT-basierte psychologische Beratung
              </span>
            </a>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item)}
                  className="text-sm font-medium text-[#3D3229]/80 hover:text-[#B5725A] transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#B5725A] transition-all duration-300 group-hover:w-full" />
                </button>
              ))}

              {/* LANGUAGE */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 text-sm font-medium text-[#3D3229]/80 hover:text-[#B5725A] transition-colors border border-[#3D3229]/20 rounded-full px-3 py-1 hover:border-[#B5725A]"
              >
                <span className={language === 'de' ? 'text-[#B5725A]' : ''}>DE</span>
                <span className="text-[#3D3229]/40">|</span>
                <span className={language === 'en' ? 'text-[#B5725A]' : ''}>EN</span>
              </button>
            </div>

            {/* MOBILE */}
            <div className="flex items-center gap-4 lg:hidden">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 text-sm font-medium text-[#3D3229]/80 border border-[#3D3229]/20 rounded-full px-2 py-1"
              >
                <span className={language === 'de' ? 'text-[#B5725A]' : ''}>DE</span>
                <span className="text-[#3D3229]/40">|</span>
                <span className={language === 'en' ? 'text-[#B5725A]' : ''}>EN</span>
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-[#3D3229] hover:text-[#B5725A] transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          className="absolute inset-0 bg-[#3D3229]/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <div
          className={`absolute top-20 left-4 right-4 bg-[#F5F0E8] rounded-2xl shadow-xl p-6 transition-all duration-500 ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item)}
                className="text-left text-lg font-medium text-[#3D3229] hover:text-[#B5725A] transition-colors py-2 border-b border-[#3D3229]/10 last:border-0"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}