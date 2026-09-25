import { Link } from 'react-router-dom';
import { MessageCircle, Sun, Navigation } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export function ServicesIndex() {
  const { t } = useLanguage();

  const services = [
    {
      key: 'counseling' as const,
      icon: MessageCircle,
      image: '/images/session.jpg',
      path: '/services/counseling',
    },
    {
      key: 'yoga' as const,
      icon: Sun,
      image: '/images/reflection.jpg',
      path: '/services/yoga',
    },
    {
      key: 'act' as const,
      icon: Navigation,
      image: '/images/freedom.jpg',
      path: '/services/act',
    },
  ];

  return (
    <main>
      <section className="relative py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <span className="inline-block text-sm font-medium tracking-wider text-[#B5725A] uppercase mb-4">
              {t.servicesIndex.subtitle}
            </span>

            <h1 className="font-serif text-4xl md:text-5xl text-[#3D3229]">
              {t.servicesIndex.title}
            </h1>

            <p className="mt-6 text-[#3D3229]/70 leading-relaxed">
              {t.servicesIndex.description}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service) => {
              const Icon = service.icon;
              const serviceData = t.servicesIndex.items[service.key];

              return (
                <Link
                  key={service.key}
                  to={service.path}
                  className="group relative flex flex-col bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-[#3D3229]/10 transition-all duration-500 hover:-translate-y-1 hover:border-[#B5725A]/20"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={serviceData.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#3D3229]/30 via-transparent to-transparent" />

                    {/* Icon badge */}
                    <div className="absolute bottom-4 left-4 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-sm">
                      <Icon className="text-[#B5725A]" size={26} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6 lg:p-8">
                    <h2 className="font-serif text-2xl text-[#3D3229] mb-4 group-hover:text-[#B5725A] transition-colors">
                      {serviceData.title}
                    </h2>

                    <p className="text-[#3D3229]/70 leading-relaxed">
                      {serviceData.description}
                    </p>

                    <span className="mt-6 text-sm font-medium text-[#B5725A]">
                      {t.servicesIndex.learnMore} →
                    </span>
                  </div>

                  {/* Subtle hover line */}
                  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#B5725A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Link>
              );
            })}
          </div>

        </div>
      </section>
    </main>
  );
}