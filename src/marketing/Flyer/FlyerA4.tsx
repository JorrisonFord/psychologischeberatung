
import { QRCodeSVG } from 'qrcode.react';
import { Mail, Phone, Globe } from 'lucide-react';
import { flyerContent } from '../content';

export function FlyerA4() {
  return (
    <div
      className="relative overflow-hidden bg-[#F5F0E8] text-[#3D3229]"
      style={{
        width: '2480px',
        height: '3508px',
      }}
    >
      {/* Background decoration */}
      <div className="absolute -top-60 -right-60 w-[900px] h-[900px] rounded-full bg-[#E8DDD0]/70" />
      <div className="absolute bottom-[-260px] -left-60 w-[800px] h-[800px] rounded-full bg-[#B5725A]/10" />

      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col px-[300px] py-[150px]">

        {/* Header */}
        <header>
          <p className="font-serif text-[110px] tracking-tight leading-tight">
            {flyerContent.name}
          </p>

          <p className="mt-[12px] text-[55px] text-[#3D3229]/75 tracking-wide">
            {flyerContent.subtitle}
          </p>
        </header>

        {/* Hero */}
        <div className="mt-[120px] grid grid-cols-[1fr_600px] gap-[80px] items-center">

          {/* Text */}
          <div>
            <h1 className="font-serif text-[110px] leading-[1.08]">
              {flyerContent.hero.title}
            </h1>

            <div className="mt-[48px] space-y-[34px] text-[55px] leading-[1.3] text-[#3D3229]/85">
              {flyerContent.hero.points.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-[22px]"
                >
                  <span className="text-[#B5725A]">•</span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Portrait */}
          <div className="relative">
            <div className="relative rounded-[42px] overflow-hidden shadow-xl aspect-[4/5]">
              <img
                src="/images/portrait.jpg"
                alt={flyerContent.name}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="absolute -bottom-[35px] -right-[35px] w-[150px] h-[150px] rounded-full bg-[#B5725A]/15 -z-10" />
          </div>
        </div>

        {/* Intro */}
        <div className="mt-[130px] max-w-[1750px] mx-auto text-center">
          <p className="font-serif text-[110px] leading-[1.15] whitespace-pre-line">
            {flyerContent.intro.title}
          </p>

          <p className="mt-[50px] text-[55px] leading-[1.55] text-[#3D3229]/85">
            {flyerContent.intro.text}
          </p>
        </div>

        {/* Offers */}
        <div className="mt-[75px] space-y-[28px]">

          {/* Free call */}
          <div className="bg-white rounded-[38px] px-[60px] py-[45px] shadow-sm">
            <p className="text-[40px] font-medium tracking-wider text-[#B5725A] uppercase">
              {flyerContent.offers.intro.label}
            </p>

            <p className="mt-[12px] text-[60px] font-medium">
              {flyerContent.offers.intro.title}
            </p>

            <p className="mt-[10px] text-[40px] text-[#3D3229]/85">
              {flyerContent.offers.intro.text}
            </p>
          </div>

          {/* Sessions */}
          <div className="bg-white rounded-[38px] px-[60px] py-[45px] shadow-sm flex items-center justify-between">
            <div>
              <p className="text-[40px] font-medium tracking-wider text-[#B5725A] uppercase">
                {flyerContent.offers.sessions.label}
              </p>

              <p className="mt-[12px] text-[60px] font-medium">
                {flyerContent.offers.sessions.title}
              </p>

              <p className="mt-[10px] text-[40px] leading-[1.45] text-[#3D3229]/85">
                {flyerContent.offers.sessions.duration}
                {' · '}
                {flyerContent.offers.sessions.location}
                <br />
                {flyerContent.offers.sessions.online}
              </p>
            </div>

            <div className="text-right shrink-0">
              <p className="font-serif text-[106px] leading-none">
                {flyerContent.offers.sessions.price}
              </p>

              <p className="mt-[10px] text-[40px] text-[#3D3229]/85">
                {flyerContent.offers.sessions.priceNote}
              </p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-auto pt-[75px]">

          <div className="h-px bg-[#3D3229]/10 mb-[65px]" />

          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-[60px]">

            {/* Website */}
            <div className="min-w-0">
              <p className="font-serif text-[80px] leading-tight">
                {flyerContent.contact.title}
              </p>

              <p className="mt-[14px] text-[40px] leading-relaxed text-[#3D3229]/85">
                {flyerContent.contact.text}
              </p>

              <div className="mt-[28px] flex items-center gap-[18px]">
                <Globe
                  size={42}
                  className="text-[#B5725A] shrink-0"
                />

                <span className="text-[55px] break-words">
                  {flyerContent.contact.website}
                </span>
              </div>
            </div>

            {/* QR-Code */}
            <div className="relative z-10 flex shrink-0 flex-col items-center gap-[18px]">
              <div
                className="bg-white p-[30px]"
                style={{
                  boxSizing: 'border-box',
                  borderRadius: '18px',
                  overflow: 'hidden',
                }}
              >
                <QRCodeSVG
                  value="https://jorisvanbohemen.de"
                  size={330}
                  level="H"
                  bgColor="#FFFFFF"
                  fgColor="#3D3229"
                  title="Website von Joris van Bohemen"
                />
              </div>
            </div>

            {/* Contact details */}
            <div className="ml-[70px] flex flex-col gap-[28px] text-[55px] text-[#3D3229]/85 min-w-0">
              <div className="flex items-center gap-[20px]">
                <Mail
                  size={40}
                  className="text-[#B5725A] shrink-0"
                />

                <span className="break-words">
                  {flyerContent.contact.email}
                </span>
              </div>

              <div className="flex items-center gap-[20px]">
                <Phone
                  size={40}
                  className="text-[#B5725A] shrink-0"
                />

                <span className="break-words">
                  {flyerContent.contact.phone}
                </span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-[50px] pt-[20px] border-t border-[#3D3229]/10 text-center">
            <p className="text-[30px] text-[#3D3229]/70">
              {flyerContent.name}
              {' · '}
              {flyerContent.subtitle}
              {' · '}
              {flyerContent.footer.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
