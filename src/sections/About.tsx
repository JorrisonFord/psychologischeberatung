import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Award, Check } from 'lucide-react';

export function About() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 md:py-32 bg-[#F5F0E8]"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#E8DDD0]/30 -skew-x-12 translate-x-1/4 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative">
              {/* Main image */}
              <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/5]">
                <img
                  src="/images/openness.jpg"
                  alt="Achtsamkeit in der Natur"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#B5725A]/10 rounded-full -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-[#7A8B6E]/20 rounded-full -z-10" />

              {/* Quote card */}
              <div className="absolute -bottom-6 right-8 bg-white rounded-2xl shadow-lg p-6 max-w-xs">
                <p className="font-serif text-lg italic text-[#3D3229] leading-relaxed">
                  "Ein erfülltes Leben entsteht, wenn wir lernen, bewusst mit dem umzugehen, was in uns geschieht."
                </p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            {/* Subtitle */}
            <div
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <span className="inline-block text-sm font-medium tracking-wider text-[#B5725A] uppercase mb-4">
                {t.about.subtitle}
              </span>
            </div>

            {/* Title */}
            <h2
              className={`font-serif text-3xl md:text-4xl lg:text-5xl text-[#3D3229] leading-tight mb-8 transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {t.about.title}
            </h2>

            {/* Paragraphs */}
            <div
              className={`space-y-6 mb-10 transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <p className="text-[#3D3229]/70 leading-relaxed">
                {t.about.paragraph1}
              </p>
              <p className="text-[#3D3229]/70 leading-relaxed">
                {t.about.paragraph2}
              </p>
            </div>

            {/* Credentials */}
            <div
              className={`transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <div className="flex items-center gap-2 mb-4">
                <Award className="text-[#B5725A]" size={20} />
                <h3 className="font-medium text-[#3D3229]">{t.about.credentials.title}</h3>
              </div>
              <ul className="space-y-3">
                {t.about.credentials.items.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-[#3D3229]/70"
                    style={{
                      transitionDelay: `${400 + index * 100}ms`,
                    }}
                  >
                    <span className="w-5 h-5 bg-[#7A8B6E]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-[#7A8B6E]" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
