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
          <p className="font-serif text-[90px] tracking-tight leading-tight">
            {flyerContent.name}
          </p>

          <p className="mt-[12px] text-[38px] text-[#3D3229]/50 tracking-wide">
            {flyerContent.subtitle}
          </p>
        </header>


        {/* Hero */}
        <div className="mt-[120px] grid grid-cols-[1fr_600px] gap-[80px] items-center">

          {/* Text */}
          <div>

            <h1 className="font-serif text-[106px] leading-[1.08]">
              {flyerContent.hero.title}
            </h1>

            <div className="mt-[48px] space-y-[34px] text-[46px] leading-[1.3] text-[#3D3229]/70">

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
        <div className="mt-[150px] max-w-[1750px] mx-auto text-center">

          <p className="font-serif text-[106px] leading-[1.15] whitespace-pre-line">
            {flyerContent.intro.title}
          </p>

          <p className="mt-[50px] text-[43px] leading-[1.55] text-[#3D3229]/70">
            {flyerContent.intro.text}
          </p>

        </div>


        {/* Offers */}
        <div className="mt-[90px] space-y-[28px]">

          {/* Free call */}
          <div className="bg-white rounded-[38px] px-[60px] py-[45px] shadow-sm">

            <p className="text-[28px] font-medium tracking-wider text-[#B5725A] uppercase">
              {flyerContent.offers.intro.label}
            </p>

            <p className="mt-[12px] text-[50px] font-medium">
              {flyerContent.offers.intro.title}
            </p>

            <p className="mt-[10px] text-[36px] text-[#3D3229]/60">
              {flyerContent.offers.intro.text}
            </p>

          </div>


          {/* Sessions */}
          <div className="bg-white rounded-[38px] px-[60px] py-[45px] shadow-sm flex items-center justify-between">

            <div>

              <p className="text-[28px] font-medium tracking-wider text-[#B5725A] uppercase">
                {flyerContent.offers.sessions.label}
              </p>

              <p className="mt-[12px] text-[50px] font-medium">
                {flyerContent.offers.sessions.title}
              </p>

              <p className="mt-[10px] text-[36px] leading-[1.45] text-[#3D3229]/60">
                {flyerContent.offers.sessions.duration}
                {" · "}
                {flyerContent.offers.sessions.location}
                <br />
                {flyerContent.offers.sessions.online}
              </p>

            </div>


            <div className="text-right shrink-0">

              <p className="font-serif text-[96px] leading-none">
                {flyerContent.offers.sessions.price}
              </p>

              <p className="mt-[10px] text-[28px] text-[#3D3229]/60">
                {flyerContent.offers.sessions.priceNote}
              </p>

            </div>

          </div>

        </div>


        {/* Contact */}
        <div className="mt-auto pt-[75px]">

          <div className="h-px bg-[#3D3229]/10 mb-[45px]" />


          <div className="flex justify-between items-end gap-16">

            {/* Website */}
            <div>

              <p className="font-serif text-[62px]">
                {flyerContent.contact.title}
              </p>

              <p className="mt-[10px] text-[35px] text-[#3D3229]/70">
                {flyerContent.contact.text}
              </p>

              <div className="mt-[20px] flex items-center gap-[15px]">

                <Globe
                  size={34}
                  className="text-[#B5725A]"
                />

                <span className="text-[42px]">
                  {flyerContent.contact.website}
                </span>

              </div>

            </div>


            {/* Contact details */}
            <div className="flex flex-col gap-[16px] text-[34px] text-[#3D3229]/65">

              <div className="flex items-center gap-4">

                <Mail
                  size={30}
                  className="text-[#B5725A]"
                />

                <span>
                  {flyerContent.contact.email}
                </span>

              </div>


              <div className="flex items-center gap-4">

                <Phone
                  size={30}
                  className="text-[#B5725A]"
                />

                <span>
                  {flyerContent.contact.phone}
                </span>

              </div>

            </div>

          </div>


          {/* Footer */}
          <div className="mt-[55px] pt-[25px] border-t border-[#3D3229]/10 text-center">

            <p className="text-[28px] text-[#3D3229]/50">
              {flyerContent.name}
              &nbsp; · &nbsp;
              {flyerContent.subtitle}
              &nbsp; · &nbsp;
              {flyerContent.footer.location}
            </p>

            <p className="mt-[7px] text-[28px] text-[#3D3229]/45">
              {flyerContent.footer.subtitle}
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}