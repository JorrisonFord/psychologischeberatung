
import { QRCodeSVG } from 'qrcode.react';
import { Mail, Phone, Globe } from 'lucide-react';
import { flyerContent } from '../content';

export function FlyerA5() {
  return (
    <div
      id="flyer-a5"
      className="relative overflow-hidden bg-[#F5F0E8] text-[#3D3229]"
      style={{
        width: '1748px',
        height: '2480px',
      }}
    >
      {/* Background decoration */}
      <div className="absolute -top-[170px] -right-[170px] w-[635px] h-[635px] rounded-full bg-[#E8DDD0]/70" />

      <div className="absolute bottom-[-185px] -left-[170px] w-[565px] h-[565px] rounded-full bg-[#B5725A]/10" />

      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col px-[180px] py-[100px]">

        
      {/* Hero */}
      <section className="mt-[75px] relative text-center">

        {/* Yellow accent circle */}
        <div className="absolute -top-[95px] right-[0%] w-[120px] h-[120px] rounded-full bg-[#FCD868] -z-0" />

        <div className="relative z-10">
          <h1 className="font-serif text-[104px] leading-[1.05] font-medium text-[#3D3229]">
            {flyerContent.hero.title}
          </h1>

          <p className="mt-5 text-[54px] leading-tight text-[#3D3229]">
            {flyerContent.hero.subtitle}
          </p>

          <div className="mt-[30px] mx-auto h-[9px] w-[120px] rounded-full bg-[#B5725A]" />
        </div>
      </section>


        
        {/* Recognition */}
        <section className="mt-[100px] text-center">
          <h2 className="font-serif text-[60px] leading-tight">
            Kommt Ihnen das bekannt vor?
          </h2>

          <div className="mt-[30px] grid grid-cols-2 gap-x-[30px] gap-y-[25px]">
            {flyerContent.hero.points.map((point) => (
              <div
                key={point}
                className="flex items-center gap-[20px] rounded-[18px] bg-[#E8DDD0]/65 px-[30px] py-[28px]"
              >
                <div className="h-[6px] w-[20px] shrink-0 rounded-full bg-[#B5725A]" />
                <p className="text-[32px] leading-[1.25] font-medium text-[#3D3229]">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </section>


        {/* Intro */}
        <section className="mt-[100px] text-center">

          <h2 className="font-serif text-[60px] leading-[1.15] max-w-[1250px] mx-auto">
            {flyerContent.intro.title}
          </h2>

          <p className="mt-[25px] text-[40px] leading-[1.5] text-[#3D3229]/85 max-w-[1250px] mx-auto">
            {flyerContent.intro.text}
          </p>

        </section>

        {/* Main CTA */}
        <section className="mt-[100px]">

          <div className="relative bg-[#B5725A] rounded-[35px] px-[55px] py-[42px] text-white flex items-center gap-[40px]">

            {/* Call to action */}
            <div className="flex-1 min-w-0">

              
            <p className="text-[29px] font-medium tracking-wider uppercase text-white">
              {flyerContent.offers.intro.label}
            </p>

            <h2 className="mt-[12px] font-serif text-[57px] leading-[1.15] font-bold text-white">
              {flyerContent.offers.intro.title}
            </h2>

            <p className="mt-[16px] text-[35px] leading-[1.35] text-white">
              {flyerContent.offers.intro.duration} · {flyerContent.offers.intro.format}
            </p>


            <p className="mt-[8px] text-[29px] text-white">
              {flyerContent.offers.intro.text}
            </p>

            <div className="mt-[28px] pt-[20px] border-t border-white/40">
              <p className="text-[33px] font-medium text-white/90">
                {flyerContent.offers.sessions.title} · {flyerContent.offers.sessions.duration} · {flyerContent.offers.sessions.price}
              </p>
            </div>

            </div>

            {/* QR Code */}
            <div className="shrink-0 flex flex-col items-center gap-[15px]">

              <div className="bg-white rounded-[20px] p-[18px]">
                <QRCodeSVG
                  value="https://jorisvanbohemen.de"
                  size={250}
                  level="H"
                  bgColor="#FFFFFF"
                  fgColor="#3D3229"
                  title="Website von Joris van Bohemen"
                />
              </div>


            </div>
          </div>
        </section>

        
        {/* Bottom area: contact + portrait */}
        <section className="mt-auto pt-[55px]">

          <div className="h-px bg-[#3D3229]/15 mb-[35px]" />

          <div className="grid grid-cols-[1fr_360px] gap-[55px] items-center">

            {/* Contact details */}
            <div className="min-w-0">

              <p className="font-serif text-[48px] leading-tight">
                {flyerContent.name}
              </p>

              <p className="mt-[8px] mb-[28px] text-[27px] leading-snug text-[#3D3229]/75">
                {flyerContent.subtitle}
              </p>

              <div className="flex flex-col gap-[20px]">

                <div className="flex items-center gap-[18px]">
                  <Globe size={35} className="text-[#B5725A] shrink-0" />
                  <span className="text-[38px] font-medium">
                    {flyerContent.contact.website}
                  </span>
                </div>

                <div className="flex items-center gap-[18px]">
                  <Mail size={35} className="text-[#B5725A] shrink-0" />
                  <span className="text-[33px]">
                    {flyerContent.contact.email}
                  </span>
                </div>

                <div className="flex items-center gap-[18px]">
                  <Phone size={35} className="text-[#B5725A] shrink-0" />
                  <span className="text-[33px]">
                    {flyerContent.contact.phone}
                  </span>
                </div>

              </div>
            </div>

            {/* Portrait */}
            <div className="relative">

              <div className="relative z-10 h-[420px] w-full overflow-hidden rounded-[28px] shadow-lg">
                <img
                  src="/images/portrait.jpg"
                  alt={flyerContent.name}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="absolute -bottom-[25px] -right-[25px] w-[120px] h-[120px] rounded-full bg-[#FCD868] -z-10" />

            </div>
          </div>

          {/* Footer */}
          <footer className="mt-[35px] pt-[18px] border-t border-[#3D3229]/10 text-center">

            <p className="text-[25px] text-[#3D3229]/70">
              {flyerContent.footer.subtitle}
              {' · '}
              {flyerContent.footer.location}
            </p>
          </footer>

        </section>
      </div>
    </div>
  );
}
