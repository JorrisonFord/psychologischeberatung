
import { de } from '../../translations/de';
const C = {
  beige: '#F5F0E8',
  terracotta: '#B5725A',
  brown: '#3D3229',
};

export function VisitenkarteVorderseite() {
  const { name, profession, focus, location } = de.businessCard;

  return (
    <div
      className="relative flex h-full w-full flex-col justify-between overflow-hidden"
      style={{
        background: C.beige,
        color: C.brown,
        padding: '8mm',
        fontFamily: 'Georgia, serif',
      }}
    >
      <div className="relative z-10">
        <h2 className="text-[27pt] leading-[1.05] tracking-tight">
          {name}
        </h2>

        <div
          className="my-6"
          style={{
            height: '1.2mm',
            width: '13mm',
            background: C.terracotta,
          }}
        />

        <p className="text-[11pt] leading-relaxed">
          {profession}
        </p>

        <div
          className="mt-2 text-[8.5pt] leading-relaxed"
          style={{ fontFamily: 'Arial, sans-serif' }}
        >
          {focus.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex items-end justify-between">
        <div
          className="flex h-[23mm] w-[23mm] items-center justify-center overflow-hidden rounded-full"
          style={{ background: '#E8DDD0' }}
        >
          <img
            src="/images/portrait.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <p
          className="pb-1 text-[8pt] tracking-[0.15em]"
          style={{ fontFamily: 'Arial, sans-serif' }}
        >
          {location}
        </p>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[15mm] -left-[12mm] h-[43mm] w-[43mm] rounded-full"
        style={{
          background: C.terracotta,
          opacity: 0.85,
        }}
      />
    </div>
  );
}