import { Mail, Phone, Globe } from 'lucide-react';
import { flyerContent } from '../content';

export function FlyerMobileScroll() {
  return (
    <div className="min-h-screen bg-[#F5F0E8] text-[#3D3229] overflow-hidden">

      {/* Background decoration */}
      <div className="absolute -top-24 -right-24 w-[280px] h-[280px] rounded-full bg-[#E8DDD0]/70" />
      <div className="absolute bottom-[-100px] -left-24 w-[300px] h-[300px] rounded-full bg-[#B5725A]/10" />


      {/* Main content */}
      <div className="relative z-10 px-6 py-10 sm:px-10 sm:py-14 max-w-[680px] mx-auto">

        {/* Header */}
        <header>

          <p className="font-serif text-[34px] sm:text-[42px] tracking-tight leading-tight">
            {flyerContent.name}
          </p>

          <p className="mt-2 text-[15px] sm:text-[18px] text-[#3D3229]/50 tracking-wide">
            {flyerContent.subtitle}
          </p>

        </header>


        {/* Hero */}
        <section className="mt-12">

          {/* Portrait */}
          <div className="relative">

            <div className="relative rounded-[24px] overflow-hidden shadow-lg aspect-[4/5]">
              <img
                src="/images/portrait.jpg"
                alt={flyerContent.name}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="absolute -bottom-4 -right-4 w-[75px] h-[75px] rounded-full bg-[#B5725A]/15 -z-10" />

          </div>


          {/* Problems */}
          <div className="mt-12">

            <h1 className="font-serif text-[42px] sm:text-[50px] leading-[1.08]">
              {flyerContent.hero.title}
            </h1>

            <div className="mt-7 space-y-4 text-[19px] sm:text-[22px] leading-[1.35]">

              {flyerContent.hero.points.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3"
                >
                  <span className="text-[#B5725A] shrink-0">
                    •
                  </span>

                  <span>
                    {point}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </section>


        {/* Intro */}
        <section className="mt-16 text-center">

          <h2 className="font-serif text-[38px] sm:text-[46px] leading-[1.15]">
            {flyerContent.intro.title}
          </h2>

          <p className="mt-6 text-[19px] sm:text-[22px] leading-[1.55] text-[#3D3229]/70">
            {flyerContent.intro.text}
          </p>

        </section>


        {/* Offers */}
        <section className="mt-12 space-y-4">

          {/* Free call */}
          <div className="bg-white rounded-[22px] px-6 py-6 shadow-sm">

            <p className="text-[13px] sm:text-[15px] font-medium tracking-wider text-[#B5725A] uppercase">
              {flyerContent.offers.intro.label}
            </p>

            <p className="mt-2 text-[23px] sm:text-[27px] font-medium leading-tight">
              {flyerContent.offers.intro.title}
            </p>

            <p className="mt-2 text-[17px] sm:text-[19px] leading-[1.45] text-[#3D3229]/60">
              {flyerContent.offers.intro.text}
            </p>

          </div>


        {/* Price */}
        <div className="bg-white rounded-[22px] px-6 py-6 shadow-sm">

          <div className="flex items-start justify-between gap-6">

            {/* Text */}
            <div className="min-w-0">

              <p className="text-[13px] sm:text-[15px] font-medium tracking-wider text-[#B5725A] uppercase">
                {flyerContent.offers.sessions.label}
              </p>

              <p className="mt-1 text-[23px] sm:text-[27px] font-medium leading-tight">
                {flyerContent.offers.sessions.title}
              </p>

              <p className="mt-4 text-[17px] sm:text-[19px] leading-[1.45] text-[#3D3229]/60">
                {flyerContent.offers.sessions.duration}
                {" · "}
                {flyerContent.offers.sessions.location}
                <br />
                {flyerContent.offers.sessions.online}
              </p>

            </div>

            {/* Price */}
            <div className="text-right shrink-0 pt-[22px]">

              <p className="font-serif text-[42px] sm:text-[50px] leading-none">
                {flyerContent.offers.sessions.price}
              </p>

              <p className="mt-2 text-[14px] sm:text-[16px] leading-none text-[#3D3229]/55">
                {flyerContent.offers.sessions.priceNote}
              </p>

            </div>

          </div>


        </div>

        </section>


        {/* Contact */}
        <section className="mt-16 pt-8 border-t border-[#3D3229]/10">

          <p className="font-serif text-[34px] sm:text-[40px]">
            {flyerContent.contact.title}
          </p>

          <p className="mt-2 text-[18px] sm:text-[20px] text-[#3D3229]/65">
            {flyerContent.contact.text}
          </p>


          {/* Website */}
          <div className="mt-6 flex items-center gap-3">

            <Globe
              size={22}
              className="text-[#B5725A] shrink-0"
            />

            <span className="text-[20px] sm:text-[23px]">
              {flyerContent.contact.website}
            </span>

          </div>


          {/* Email */}
          <div className="mt-4 flex items-center gap-3">

            <Mail
              size={20}
              className="text-[#B5725A] shrink-0"
            />

            <span className="text-[17px] sm:text-[19px] text-[#3D3229]/65">
              {flyerContent.contact.email}
            </span>

          </div>


          {/* Phone */}
          <div className="mt-3 flex items-center gap-3">

            <Phone
              size={20}
              className="text-[#B5725A] shrink-0"
            />

            <span className="text-[17px] sm:text-[19px] text-[#3D3229]/65">
              {flyerContent.contact.phone}
            </span>

          </div>

        </section>


        {/* Footer */}
        <footer className="mt-12 pt-5 border-t border-[#3D3229]/10 text-center">

          <p className="text-[14px] sm:text-[16px] text-[#3D3229]/50">
            {flyerContent.name}
            &nbsp; · &nbsp;
            {flyerContent.subtitle}
            &nbsp; · &nbsp;
            {flyerContent.footer.location}
          </p>

          <p className="mt-2 text-[14px] sm:text-[16px] text-[#3D3229]/45">
            {flyerContent.footer.subtitle}
          </p>

        </footer>

      </div>
    </div>
  );
}