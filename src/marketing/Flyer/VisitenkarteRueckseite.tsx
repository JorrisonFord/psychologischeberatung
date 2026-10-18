
import { QRCodeSVG } from 'qrcode.react';
import { Globe, Mail, MapPin } from 'lucide-react';
import { de } from '../../translations/de'; // Importpfad ggf. anpassen

const C = {
  beige: '#F5F0E8',
  terracotta: '#B5725A',
  brown: '#3D3229',
};

export function VisitenkarteRueckseite() {
  const { website, closing } = de.businessCard;
  const { email, address } = de.contact.details;

  return (
    <div
      className="flex h-full w-full flex-col justify-between overflow-hidden"
      style={{
        background: C.brown,
        color: C.beige,
        padding: '8mm',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div className="space-y-5">
        <div className="flex items-start gap-3">
          <Globe size={16} strokeWidth={1.5} />
          <span className="break-all text-[8.5pt]">
            {website.replace(/^https?:\/\//, '')}
          </span>
        </div>

        <div className="flex items-start gap-3">
          <Mail size={16} strokeWidth={1.5} />
          <span className="break-all text-[8.5pt]">
            {email}
          </span>
        </div>

        <div className="flex items-start gap-3">
          <MapPin size={16} strokeWidth={1.5} />
          <span className="whitespace-pre-line text-[8.5pt] leading-relaxed">
            {address.replace(/-/g, '–')}
          </span>
        </div>
      </div>

      <div className="flex flex-col items-start gap-4">
        <div className="bg-white p-2">
          <QRCodeSVG
            value={website}
            size={112}
            level="H"
            bgColor="#FFFFFF"
            fgColor={C.brown}
            title="Website von Joris van Bohemen"
          />
        </div>

        <div
          aria-hidden="true"
          style={{
            height: '1.2mm',
            width: '13mm',
            background: C.terracotta,
          }}
        />

        <p
          className="text-[11pt] italic leading-relaxed"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          {closing.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}