import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#F5F0E8]"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#B5725A]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#7A8B6E]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E8DDD0]/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            
            {/* Subtitle */}
            <div
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <span className="inline-block text-sm md:text-base font-medium tracking-wider text-[#B5725A] uppercase mb-4">
                ACT-basierte psychologische Beratung
              </span>
            </div>

            {/* Title */}
            <h1
              className={`font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#3D3229] leading-tight mb-6 transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {t.hero.title}
            </h1>

            {/* Description */}
            <p
              className={`text-base md:text-lg text-[#3D3229]/70 leading-relaxed max-w-lg mb-8 transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {t.hero.description}
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <button
                onClick={scrollToContact}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#B5725A] text-white font-medium rounded-full hover:bg-[#9A5D48] transition-all duration-300 hover:shadow-lg hover:shadow-[#B5725A]/25 hover:-translate-y-0.5"
              >
                {t.hero.ctaPrimary}
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <button
                onClick={scrollToAbout}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#3D3229]/20 text-[#3D3229] font-medium rounded-full hover:border-[#B5725A] hover:text-[#B5725A] transition-all duration-300"
              >
                {t.hero.ctaSecondary}
              </button>
            </div>
          </div>

          {/* Image */}
          <div
            className={`order-1 lg:order-2 relative transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#3D3229]/10 aspect-[4/5] lg:aspect-[3/4]">
                <img
                  src="/images/portrait.jpg"
                  alt="ACT-basierte psychologische Beratung"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3D3229]/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}