
import { de } from '../../translations/de';

const C = {
  beige: '#F5F0E8',
  terracotta: '#B5725A',
  brown: '#3D3229',
};

export function VisitenkarteVorderseite() {
  const { name, profession, location } = de.businessCard;

  return (
    <div
      className="relative flex h-full w-full items-center overflow-hidden"
      style={{
        background: C.beige,
        color: C.brown,
        padding: '5mm',
        boxSizing: 'border-box',
      }}
    >
      {/* Textbereich */}
      <div className="relative z-10 flex min-w-0 flex-1 flex-col justify-center pr-3">
        <h2
          className="text-[19pt] leading-tight tracking-tight"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 500,
            margin: 0,
          }}
        >
          {name}
        </h2>

        <div
          aria-hidden="true"
          style={{
            height: '0.8mm',
            width: '10mm',
            background: C.terracotta,
            marginTop: '3mm',
            marginBottom: '3mm',
          }}
        />

        <p
          className="whitespace-pre-line text-[8.5pt] leading-snug"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            margin: 0,
          }}
        >
          {profession}
        </p>

        <p
          className="mt-6 text-[7pt] tracking-[0.12em]"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
            marginBottom: 0,
          }}
        >
          {location}
        </p>
      </div>

      {/* Portrait mit abgerundeten Ecken */}
      <div
        className="relative z-10 shrink-0 overflow-hidden"
        style={{
          width: '25mm',
          height: '35mm',
          borderRadius: '3mm',
          background: '#E8DDD0',
        }}
      >
        <img
          src="/images/portrait.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      {/* Dezenter Terrakotta-Akzent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[12mm] -left-[10mm] rounded-full"
        style={{
          width: '30mm',
          height: '30mm',
          background: C.terracotta,
          opacity: 0.18,
        }}
      />
    </div>
  );
}
