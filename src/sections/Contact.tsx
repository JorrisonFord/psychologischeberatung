import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

export function Contact() {
  const { t } = useLanguage();

  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
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
    setLoading(true);

    const form = new FormData();
    form.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("message", formData.message);
    form.append("subject", "Neue Kontaktanfrage Coaching Webseite");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const data = await res.json();

      if (data.success) {
        setIsSubmitted(true);

        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: "", email: "", phone: "", message: "" });
        }, 3500);
      } else {
        setError("Senden fehlgeschlagen.");
      }
    } catch {
      setError("Netzwerkfehler.");
    } finally {
      setLoading(false);
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
      className="relative py-28 md:py-36 bg-[#F5F0E8]"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

          {/* FORM */}
          <div
            className={`lg:col-span-3 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-8 md:p-10 border border-[#E8DDD0]/40">

              {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center animate-fadeIn">
                <div className="w-20 h-20 rounded-full bg-[#7A8B6E]/10 flex items-center justify-center mb-6">
                  <CheckCircle className="text-[#7A8B6E]" size={36} />
                </div>

                <h3 className="font-serif text-2xl text-[#3D3229] mb-2">
                  Vielen Dank für Ihre Nachricht.
                </h3>

                <p className="text-[#3D3229]/60 max-w-sm">
                  Ich melde mich zeitnah persönlich bei Ihnen zurück.
                </p>
              </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  <div className="grid md:grid-cols-2 gap-6">

                    <div>
                      <label className="block text-xs tracking-wide uppercase text-[#3D3229]/60 mb-2">
                        {t.contact.form.name}
                      </label>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#F5F0E8]/60 border border-transparent
                        focus:bg-white focus:border-[#B5725A]/40 focus:ring-2 focus:ring-[#B5725A]/10
                        outline-none transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label className="block text-xs tracking-wide uppercase text-[#3D3229]/60 mb-2">
                        {t.contact.form.email}
                      </label>
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#F5F0E8]/60 border border-transparent
                        focus:bg-white focus:border-[#B5725A]/40 focus:ring-2 focus:ring-[#B5725A]/10
                        outline-none transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs tracking-wide uppercase text-[#3D3229]/60 mb-2">
                      {t.contact.form.phone}
                    </label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#F5F0E8]/60 border border-transparent
                      focus:bg-white focus:border-[#B5725A]/40 focus:ring-2 focus:ring-[#B5725A]/10
                      outline-none transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-xs tracking-wide uppercase text-[#3D3229]/60 mb-2">
                      {t.contact.form.message}
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#F5F0E8]/60 border border-transparent
                      focus:bg-white focus:border-[#B5725A]/40 focus:ring-2 focus:ring-[#B5725A]/10
                      outline-none transition-all duration-300 resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-red-500">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="group relative w-full overflow-hidden rounded-xl py-3 text-white
                    bg-gradient-to-r from-[#B5725A] to-[#9A5D48]
                    shadow-lg shadow-[#B5725A]/20
                    transition-all duration-300 hover:shadow-xl hover:shadow-[#B5725A]/30"
                  >
                    <span className="relative flex items-center justify-center gap-2">
                      {loading ? "Sende..." : t.contact.form.submit}
                      <Send
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </button>

                </form>
              )}
            </div>
          </div>

          {/* INFO */}
          <div
            className={`lg:col-span-2 space-y-6 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            {contactInfo.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-[#E8DDD0]/40 shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
                >
                  <div className="w-12 h-12 bg-[#B5725A]/10 rounded-xl flex items-center justify-center">
                    <Icon className="text-[#B5725A]" size={22} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wide text-[#3D3229]/50">
                      {item.label}
                    </p>
                    <p className="text-[#3D3229] whitespace-pre-line">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}

            <div className="mt-8 p-6 bg-[#7A8B6E]/10 rounded-2xl">
              <p className="font-serif text-lg italic text-[#3D3229]/80 text-center">
                "Der erste Schritt ist der wichtigste."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}