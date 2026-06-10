import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export function Contact() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: t.contact.info.address,
      value: t.contact.details.address,
    },
    {
      icon: Phone,
      label: t.contact.info.phone,
      value: t.contact.details.phone,
    },
    {
      icon: Mail,
      label: t.contact.info.email,
      value: t.contact.details.email,
    },
    {
      icon: Clock,
      label: t.contact.info.hours,
      value: t.contact.details.hours,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 md:py-32 bg-[#F5F0E8]"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-[#E8DDD0]/30 -skew-x-12 translate-x-1/4" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className={`inline-block text-sm font-medium tracking-wider text-[#B5725A] uppercase mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {t.contact.subtitle}
          </span>
          <h2
            className={`font-serif text-3xl md:text-4xl lg:text-5xl text-[#3D3229] mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {t.contact.title}
          </h2>
          <p
            className={`text-[#3D3229]/70 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {t.contact.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-[#7A8B6E]/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="text-[#7A8B6E]" size={32} />
                  </div>
                  <h3 className="font-serif text-2xl text-[#3D3229] mb-2">
                    {t.contact.form.success}
                  </h3>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-[#3D3229] mb-2"
                      >
                        {t.contact.form.name}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#F5F0E8] border border-transparent rounded-xl text-[#3D3229] placeholder-[#3D3229]/40 focus:outline-none focus:border-[#B5725A] focus:bg-white transition-colors"
                        placeholder="Ihr Name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[#3D3229] mb-2"
                      >
                        {t.contact.form.email}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#F5F0E8] border border-transparent rounded-xl text-[#3D3229] placeholder-[#3D3229]/40 focus:outline-none focus:border-[#B5725A] focus:bg-white transition-colors"
                        placeholder="email@beispiel.de"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-[#3D3229] mb-2"
                    >
                      {t.contact.form.phone}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#F5F0E8] border border-transparent rounded-xl text-[#3D3229] placeholder-[#3D3229]/40 focus:outline-none focus:border-[#B5725A] focus:bg-white transition-colors"
                      placeholder="+49 123 456 789"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#3D3229] mb-2"
                    >
                      {t.contact.form.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-[#F5F0E8] border border-transparent rounded-xl text-[#3D3229] placeholder-[#3D3229]/40 focus:outline-none focus:border-[#B5725A] focus:bg-white transition-colors resize-none"
                      placeholder="Wie kann ich Ihnen helfen?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#B5725A] text-white font-medium rounded-xl hover:bg-[#9A5D48] transition-all duration-300 hover:shadow-lg hover:shadow-[#B5725A]/25"
                  >
                    {t.contact.form.submit}
                    <Send
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div
            className={`lg:col-span-2 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-[#B5725A]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="text-[#B5725A]" size={22} />
                    </div>
                    <div>
                      <p className="text-sm text-[#3D3229]/50 mb-1">{item.label}</p>
                      <p className="text-[#3D3229] whitespace-pre-line">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Decorative element */}
            <div className="mt-8 p-6 bg-[#7A8B6E]/10 rounded-2xl">
              <p className="font-serif text-lg italic text-[#3D3229]/80 text-center">
                "Der erste Schritt ist der wichtigste. Ich freue mich auf Sie."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
