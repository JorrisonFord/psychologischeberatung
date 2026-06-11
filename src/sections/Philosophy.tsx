import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Compass, Heart, Sun } from 'lucide-react';

export function Philosophy() {
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

  const pillars = [
    {
      key: 'empathy' as const,
      icon: Heart,
      color: 'bg-[#B5725A]/10',
      iconColor: 'text-[#B5725A]',
    },
    {
      key: 'safety' as const,
      icon: Compass,
      color: 'bg-[#7A8B6E]/10',
      iconColor: 'text-[#7A8B6E]',
    },
    {
      key: 'wholeness' as const,
      icon: Sun,
      color: 'bg-[#A89B8C]/10',
      iconColor: 'text-[#A89B8C]',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      className="relative py-24 md:py-32 bg-[#F5F0E8] overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#B5725A]/10 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#7A8B6E]/10 to-transparent" />
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B5725A]/10 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span
            className={`inline-block text-sm font-medium tracking-wider text-[#B5725A] uppercase transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {t.philosophy.subtitle}
          </span>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const pillarData = t.philosophy.pillars[pillar.key];

            return (
              <div
                key={pillar.key}
                className={`relative text-center transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                {/* Icon */}
                <div className="relative inline-flex mb-8">
                  <div className={`w-24 h-24 ${pillar.color} rounded-full flex items-center justify-center`}>
                    <Icon className={pillar.iconColor} size={40} strokeWidth={1.5} />
                  </div>
                  {/* Orbiting dot */}
                  <div
                    className="absolute w-3 h-3 bg-[#B5725A] rounded-full"
                    style={{
                      animation: `orbit 8s linear infinite`,
                      animationDelay: `${index * 2.67}s`,
                    }}
                  />
                </div>

                {/* Content */}
                <h3 className="font-serif text-2xl md:text-3xl text-[#3D3229] mb-4">
                  {pillarData.title}
                </h3>
                <p className="text-[#3D3229]/70 leading-relaxed max-w-sm mx-auto">
                  {pillarData.description}
                </p>

                {/* Decorative line */}
                <div className="mt-8 w-16 h-px bg-[#B5725A]/30 mx-auto" />
              </div>
            );
          })}
        </div>

        {/* Center decorative element */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 pointer-events-none transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
        >
          <div className="absolute inset-0 border border-[#B5725A]/10 rounded-full" />
          <div className="absolute inset-4 border border-[#7A8B6E]/10 rounded-full" />
          <div className="absolute inset-8 border border-[#A89B8C]/10 rounded-full" />
        </div>
      </div>

      {/* Keyframes for orbit animation */}
      <style>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(50px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(50px) rotate(-360deg);
          }
        }
      `}</style>
    </section>
  );
}
