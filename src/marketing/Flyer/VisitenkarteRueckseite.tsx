
import { QRCodeSVG } from 'qrcode.react';
import { Globe, Mail, Phone } from 'lucide-react';
import { de } from '../../translations/de';

const C = {
  beige: '#F5F0E8',
  terracotta: '#B5725A',
  brown: '#3D3229',
};

export function VisitenkarteRueckseite() {
  const { website } = de.businessCard;
  const { email, phone } = de.contact.details;

  return (
    <div
      className="relative flex h-full w-full items-center overflow-hidden"
      style={{
        background: C.brown,
        color: C.beige,
        padding: '5.5mm',
        fontFamily: "'Inter', sans-serif",
        boxSizing: 'border-box',
      }}
    >
   {/* Kontaktdaten links */}
    <div className="relative z-10 flex min-w-0 flex-1 flex-col justify-center gap-5 pr-3">
      <div className="flex min-w-0 items-center gap-2">
        <Globe size={14} strokeWidth={1.5} className="shrink-0" />
        <span
          className="break-all text-[9pt] leading-relaxed"
          style={{ fontWeight: 400 }}
        >
          {website.replace(/^https?:\/\//, '').replace(/\/$/, '')}
        </span>
      </div>

      <div className="flex min-w-0 items-center gap-2">
        <Mail size={14} strokeWidth={1.5} className="shrink-0" />
        <span
          className="break-all text-[9pt] leading-relaxed"
          style={{ fontWeight: 400 }}
        >
          {email}
        </span>
      </div>

      <div className="flex min-w-0 items-center gap-2">
        <Phone size={14} strokeWidth={1.5} className="shrink-0" />
        <span
          className="text-[9pt] leading-relaxed"
          style={{ fontWeight: 400 }}
        >
          {phone}
        </span>
      </div>
    </div>

      {/* QR-Code rechts */}
      <div className="flex shrink-0 items-center justify-center">
        <div
          className="bg-white p-1.5"
          style={{
            boxSizing: 'border-box',
            borderRadius: '3mm',
            overflow: 'hidden',
          }}
        >
          <QRCodeSVG
            value={website}
            size={80}
            level="H"
            bgColor="#FFFFFF"
            fgColor={C.brown}
            title="Website von Joris van Bohemen"
          />
        </div>
      </div>

      {/* Dekorativer Kreis links oben */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[12mm] -left-[10mm] rounded-full"
        style={{
          width: '30mm',
          height: '30mm',
          background: C.terracotta,
          opacity: 0.14,
        }}
      />

      {/* Dekorativer Kreis rechts unten */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[12mm] -right-[10mm] rounded-full"
        style={{
          width: '30mm',
          height: '30mm',
          background: C.terracotta,
          opacity: 0.14,
        }}
      />
    </div>
  );
}
