import { Mail, Phone, Globe } from 'lucide-react';
import { flyerContent } from '../content';

export function FlyerStory() {
  return (
    <div
      className="relative overflow-hidden bg-[#F5F0E8] text-[#3D3229]"
      style={{
        width: '1080px',
        height: '1920px',
      }}
    >

      {/* Background decoration */}
      <div className="absolute -top-32 -right-32 w-[430px] h-[430px] rounded-full bg-[#E8DDD0]/70" />

      <div className="absolute bottom-[-140px] -left-32 w-[420px] h-[420px] rounded-full bg-[#B5725A]/10" />


      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col px-[90px] py-[70px]">


        {/* Header */}
        <header>

          <p className="font-serif text-[54px] tracking-tight leading-tight">
            {flyerContent.name}
          </p>

          <p className="mt-[8px] text-[22px] text-[#3D3229]/50 tracking-wide">
            {flyerContent.subtitle}
          </p>

        </header>


        {/* Hero */}
        <section className="mt-[100px]">

          <div className="grid grid-cols-[1fr_300px] gap-[35px] items-start">

            {/* Problems */}
            <div className="pt-[10px]">

              <h1 className="font-serif text-[58px] leading-[1.05]">
                {flyerContent.hero.title}
              </h1>

              <div className="mt-[28px] space-y-[13px] text-[27px] leading-[1.25] text-[#3D3229]/70">

                {flyerContent.hero.points.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-[12px]"
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


            {/* Portrait */}
            <div className="relative">

              <div className="relative rounded-[26px] overflow-hidden shadow-lg aspect-[4/5] w-[300px]">

                <img
                  src="/images/portrait.jpg"
                  alt={flyerContent.name}
                  className="w-full h-full object-cover object-center"
                />

              </div>

              <div className="absolute -bottom-[15px] -right-[15px] w-[70px] h-[70px] rounded-full bg-[#B5725A]/15 -z-10" />

            </div>

          </div>

        </section>


        {/* Intro */}
        <section className="mt-[120px] text-center">

          <h2 className="font-serif text-[47px] leading-[1.08] whitespace-pre-line">
            {flyerContent.intro.title}
          </h2>

          <p className="mt-[18px] text-[26px] leading-[1.4] text-[#3D3229]/70">
            {flyerContent.intro.text}
          </p>

        </section>


        {/* Offers */}
        <section className="mt-[100px] space-y-[12px]">


          {/* Free call */}
          <div className="bg-white rounded-[26px] px-[34px] py-[22px] shadow-sm">

            <p className="text-[17px] font-medium tracking-wider text-[#B5725A] uppercase">
              {flyerContent.offers.intro.label}
            </p>

            <p className="mt-[5px] text-[29px] font-medium leading-tight">
              {flyerContent.offers.intro.title}
            </p>

            <p className="mt-[4px] text-[23px] leading-[1.3] text-[#3D3229]/60">
              {flyerContent.offers.intro.text}
            </p>

          </div>


          {/* Sessions */}
          <div className="bg-white rounded-[26px] px-[34px] py-[22px] shadow-sm">

            <div className="flex items-start justify-between gap-6">

              {/* Text */}
              <div className="min-w-0">

                <p className="text-[17px] font-medium tracking-wider text-[#B5725A] uppercase">
                  {flyerContent.offers.sessions.label}
                </p>

                <p className="mt-[5px] text-[29px] font-medium leading-tight">
                  {flyerContent.offers.sessions.title}
                </p>

                <p className="mt-[7px] text-[23px] leading-[1.3] text-[#3D3229]/60">
                  {flyerContent.offers.sessions.duration}
                  {" · "}
                  {flyerContent.offers.sessions.location}
                  <br />
                  {flyerContent.offers.sessions.online}
                </p>

              </div>


              {/* Price */}
              <div className="text-right shrink-0 pt-[18px]">

                <p className="font-serif text-[58px] leading-none">
                  {flyerContent.offers.sessions.price}
                </p>

                <p className="mt-[5px] text-[18px] leading-none text-[#3D3229]/55">
                  {flyerContent.offers.sessions.priceNote}
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* Contact */}
        <section className="mt-auto pt-[28px] border-t border-[#3D3229]/10 px-[20px]">

          <div className="flex justify-between items-end gap-10">

            {/* Main contact */}
            <div>

              <p className="font-serif text-[40px]">
                {flyerContent.contact.title}
              </p>

              <p className="mt-[4px] text-[22px] text-[#3D3229]/65">
                {flyerContent.contact.text}
              </p>

              <div className="mt-[10px] flex items-center gap-[10px]">

                <Globe
                  size={22}
                  className="text-[#B5725A]"
                />

                <span className="text-[27px]">
                  {flyerContent.contact.website}
                </span>

              </div>

            </div>


            {/* Contact details */}
            <div className="flex flex-col gap-[7px] text-[20px] text-[#3D3229]/65">

              <div className="flex items-center gap-3">

                <Mail
                  size={19}
                  className="text-[#B5725A]"
                />

                <span>
                  {flyerContent.contact.email}
                </span>

              </div>


              <div className="flex items-center gap-3">

                <Phone
                  size={19}
                  className="text-[#B5725A]"
                />

                <span>
                  {flyerContent.contact.phone}
                </span>

              </div>

            </div>

          </div>


          {/* Footer */}
          <div className="mt-[18px] pt-[12px] border-t border-[#3D3229]/10 text-center">

            <p className="text-[17px] text-[#3D3229]/50">
              {flyerContent.name}
              &nbsp; · &nbsp;
              {flyerContent.subtitle}
              &nbsp; · &nbsp;
              {flyerContent.footer.location}
            </p>

          </div>

        </section>

      </div>
    </div>
  );
}
