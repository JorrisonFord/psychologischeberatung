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
      className="relative flex h-full w-full items-center justify-center overflow-hidden"
      style={{
        background: C.beige,
        color: C.brown,
        padding: '5.5mm',
        boxSizing: 'border-box',
      }}
    >
      {/* Zentrierter Textbereich */}
      <div className="relative z-10 flex w-full flex-col items-center justify-center text-center">
        {/* Name */}
        <h2
          className="text-[20pt] leading-tight tracking-tight"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 500,
            margin: 0,
          }}
        >
          {name}
        </h2>

        {/* Terrakotta-Trennlinie */}
        <div
        aria-hidden="true"
        style={{
          height: '0.8mm',
          width: '10mm',
          background: C.terracotta,
          marginTop: '3mm',
          marginBottom: '3.5mm',
        }}    
        />

        {/* Berufsbezeichnung */}
        <p
          className="whitespace-pre-line text-[10pt] leading-[1.45]"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            letterSpacing: '0.015em',
            margin: 0,
          }}
        >
          {profession}
        </p>

        {/* Standort */}
        <p
          className="text-[8pt] tracking-[0.12em]"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
            marginTop: '6mm',
            marginBottom: 0,
          }}
        >
          {location}
        </p>
      </div>

      
      
    </div>
  );
}