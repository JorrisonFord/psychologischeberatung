import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export function Contact() {
  const { t } = useLanguage();

  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

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

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: "Neue Kontaktanfrage Coaching Webseite",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setIsSubmitted(true);

        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', phone: '', message: '' });
        }, 3000);
      } else {
        setError("Senden fehlgeschlagen.");
      }
    } catch {
      setError("Netzwerkfehler.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

          {/* FORM */}
          <div
            className={`lg:col-span-3 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle className="text-green-600 mb-4" size={40} />
                  <h3 className="font-serif text-2xl text-[#3D3229]">
                    Nachricht gesendet
                  </h3>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  <input
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-xl bg-[#F5F0E8]"
                  />

                  <input
                    name="email"
                    placeholder="E-Mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-xl bg-[#F5F0E8]"
                  />

                  <input
                    name="phone"
                    placeholder="Telefon"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 rounded-xl bg-[#F5F0E8]"
                  />

                  <textarea
                    name="message"
                    placeholder="Nachricht"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full p-3 rounded-xl bg-[#F5F0E8]"
                  />

                  {error && (
                    <p className="text-red-500 text-sm">{error}</p>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-[#B5725A] text-white py-3 rounded-xl flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Senden
                  </button>

                </form>
              )}

            </div>
          </div>

          {/* INFO */}
          <div
            className={`lg:col-span-2 space-y-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {contactInfo.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm"
                >
                  <div className="w-12 h-12 bg-[#B5725A]/10 rounded-xl flex items-center justify-center">
                    <Icon className="text-[#B5725A]" size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-[#3D3229]/50">{item.label}</p>
                    <p className="text-[#3D3229] whitespace-pre-line">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}