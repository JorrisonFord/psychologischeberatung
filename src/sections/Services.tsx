import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {MessageCircle, Sun, Navigation} from 'lucide-react';

export function Services() {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      key: 'counseling' as const,
      icon: MessageCircle,
      image: '/images/session.jpg',
    },
    {
      key: 'yoga' as const,
      icon: Sun,
      image: '/images/reflection.jpg',
    },
    {
      key: 'act' as const,
      icon: Navigation,
      image: '/images/freedom.jpg',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-24 md:py-32 bg-[#E8DDD0]/30"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#B5725A]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#7A8B6E]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span
            className={`inline-block text-sm font-medium tracking-wider text-[#B5725A] uppercase mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {t.services.subtitle}
          </span>

          <h2
            className={`font-serif text-3xl md:text-4xl lg:text-5xl text-[#3D3229] transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {t.services.title}
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            const serviceData = t.services.items[service.key];

            return (
              <div
                key={service.key}
                className={`group relative flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={serviceData.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#3D3229]/40 via-transparent to-transparent" />

                  {/* Icon badge */}
                  <div className="absolute bottom-4 left-4 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                    <Icon className="text-[#B5725A]" size={28} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6 lg:p-8">
                  <h3 className="font-serif text-2xl text-[#3D3229] mb-4 group-hover:text-[#B5725A] transition-colors">
                    {serviceData.title}
                  </h3>

                  <p className="text-[#3D3229]/70 leading-relaxed mb-6">
                    {serviceData.description}
                  </p>

                  {/* Features */}
                  <ul className="mt-auto space-y-2">
                    {serviceData.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm text-[#3D3229]/60"
                      >
                        <span className="w-1.5 h-1.5 bg-[#7A8B6E] rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover border effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#B5725A]/20 rounded-3xl transition-colors duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}