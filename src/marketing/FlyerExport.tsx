
import { useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import jsPDF from 'jspdf';

import { FlyerA4 } from './Flyer/FlyerA4';
import { FlyerStory } from './Flyer/FlyerStory';
import { FlyerMobileScroll } from './Flyer/FlyerMobileScroll';
import { VisitenkarteVorderseite } from './Flyer/VisitenkarteVorderseite';
import { VisitenkarteRueckseite } from './Flyer/VisitenkarteRueckseite';

export function FlyerExport() {
  const a4Ref = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const visitenkarteFrontRef = useRef<HTMLDivElement>(null);
  const visitenkarteBackRef = useRef<HTMLDivElement>(null);

  const [exporting, setExporting] = useState(false);

  /* -------------------------------------------------- */
  /* PNG EXPORT */
  /* -------------------------------------------------- */

  const downloadPng = async (
    element: HTMLDivElement | null,
    filename: string,
  ) => {
    if (!element || exporting) return;

    try {
      setExporting(true);

      await document.fonts.ready;

      const dataUrl = await toPng(element, {
        pixelRatio: 1,
        cacheBust: true,
        backgroundColor: '#F5F0E8',
      });

      const link = document.createElement('a');
      link.download = filename;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error('PNG-Export fehlgeschlagen:', error);
      alert('Der PNG-Export konnte nicht erstellt werden.');
    } finally {
      setExporting(false);
    }
  };

  /* -------------------------------------------------- */
  /* A4 PDF EXPORT */
  /* -------------------------------------------------- */

  const downloadA4Pdf = async () => {
    if (!a4Ref.current || exporting) return;

    try {
      setExporting(true);

      await document.fonts.ready;

      const dataUrl = await toPng(a4Ref.current, {
        pixelRatio: 1,
        cacheBust: true,
        backgroundColor: '#F5F0E8',
      });

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      pdf.addImage(dataUrl, 'PNG', 0, 0, 210, 297);
      pdf.save('Joris-van-Bohemen-Flyer-A4.pdf');
    } catch (error) {
      console.error('A4-PDF-Export fehlgeschlagen:', error);
      alert('Das A4-PDF konnte nicht erstellt werden.');
    } finally {
      setExporting(false);
    }
  };

  /* -------------------------------------------------- */
  /* VISITENKARTE PDF EXPORT */
  /* -------------------------------------------------- */

  const downloadVisitenkartePdf = async () => {
    if (
      !visitenkarteFrontRef.current ||
      !visitenkarteBackRef.current ||
      exporting
    ) {
      return;
    }

    try {
      setExporting(true);

      await document.fonts.ready;

      const front = await toPng(visitenkarteFrontRef.current, {
        pixelRatio: 4,
        cacheBust: true,
        backgroundColor: '#F5F0E8',
      });

      const back = await toPng(visitenkarteBackRef.current, {
        pixelRatio: 4,
        cacheBust: true,
        backgroundColor: '#3D3229',
      });

      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: [91, 61],
      });

      pdf.addImage(front, 'PNG', 0, 0, 91, 61);
      pdf.addPage([91, 61], 'landscape');
      pdf.addImage(back, 'PNG', 0, 0, 91, 61);

      pdf.save('Joris-van-Bohemen-Visitenkarte.pdf');
    } catch (error) {
      console.error('Visitenkarten-PDF fehlgeschlagen:', error);
      alert('Das Visitenkarten-PDF konnte nicht erstellt werden.');
    } finally {
      setExporting(false);
    }
  };

  /* -------------------------------------------------- */
  /* UI */
  /* -------------------------------------------------- */

  return (
    <div className="min-h-screen bg-[#E8DDD0] p-10">
      {/* EXPORT CONTROLS */}

      <div className="mx-auto mb-10 max-w-[900px]">
        <h1 className="font-serif text-4xl text-[#3D3229]">
          Flyer Export
        </h1>

        <p className="mt-2 text-[#3D3229]/60">
          A4, Story und Mobile-Version als PNG exportieren.
          Zusätzlich stehen PDF-Exporte für den A4-Flyer
          und die Visitenkarte zur Verfügung.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={() =>
              downloadPng(
                a4Ref.current,
                'Joris-van-Bohemen-Flyer-A4.png',
              )
            }
            disabled={exporting}
            className="rounded-xl bg-[#3D3229] px-5 py-3 text-white transition-colors hover:bg-[#B5725A] disabled:opacity-50"
          >
            A4 PNG
          </button>

          <button
            onClick={downloadA4Pdf}
            disabled={exporting}
            className="rounded-xl bg-[#3D3229] px-5 py-3 text-white transition-colors hover:bg-[#B5725A] disabled:opacity-50"
          >
            A4 PDF
          </button>

          <button
            onClick={() =>
              downloadPng(
                storyRef.current,
                'Joris-van-Bohemen-Flyer-Story.png',
              )
            }
            disabled={exporting}
            className="rounded-xl bg-[#3D3229] px-5 py-3 text-white transition-colors hover:bg-[#B5725A] disabled:opacity-50"
          >
            Story PNG
          </button>

          <button
            onClick={() =>
              downloadPng(
                mobileScrollRef.current,
                'Joris-van-Bohemen-Flyer-Mobile.png',
              )
            }
            disabled={exporting}
            className="rounded-xl bg-[#3D3229] px-5 py-3 text-white transition-colors hover:bg-[#B5725A] disabled:opacity-50"
          >
            Mobile PNG
          </button>
        </div>

        {exporting && (
          <p
            role="status"
            aria-live="polite"
            className="mt-4 text-sm text-[#3D3229]/60"
          >
            Export wird erstellt …
          </p>
        )}
      </div>

      {/* A4 PREVIEW */}

      <section className="mb-24 overflow-auto">
        <p className="mx-auto mb-4 max-w-[900px] text-sm text-[#3D3229]/50">
          A4 · 2480 × 3508 px
        </p>

        <div
          ref={a4Ref}
          className="mx-auto"
          style={{
            width: '2480px',
            height: '3508px',
          }}
        >
          <FlyerA4 />
        </div>
      </section>

      {/* STORY PREVIEW */}

      <section className="mb-24 overflow-auto">
        <p className="mx-auto mb-4 max-w-[900px] text-sm text-[#3D3229]/50">
          Instagram Story / WhatsApp Status · 1080 × 1920 px
        </p>

        <div className="flex justify-center">
          <div
            ref={storyRef}
            style={{
              width: '1080px',
              height: '1920px',
              flexShrink: 0,
            }}
          >
            <FlyerStory />
          </div>
        </div>
      </section>

      {/* MOBILE SCROLL PREVIEW */}

      <section className="mb-24">
        <p className="mx-auto mb-4 max-w-[900px] text-sm text-[#3D3229]/50">
          Mobile Scroll · variable Höhe
        </p>

        <div ref={mobileScrollRef} className="mx-auto">
          <FlyerMobileScroll />
        </div>
      </section>

      {/* VISITENKARTE */}

      <section className="mb-24">
        <div className="mx-auto mb-6 max-w-[900px]">
          <h2 className="font-serif text-3xl text-[#3D3229]">
            Visitenkarte
          </h2>

          <p className="mt-2 text-[#3D3229]/60">
            Vorder- und Rückseite · 85 x 55 mm plus
            3 mm Beschnitt an jeder Seite.
          </p>

          <button
            onClick={downloadVisitenkartePdf}
            disabled={exporting}
            className="mt-5 rounded-xl bg-[#3D3229] px-5 py-3 text-white transition-colors hover:bg-[#B5725A] disabled:opacity-50"
          >
            Visitenkarte PDF
          </button>
        </div>

        <div className="flex flex-wrap items-start justify-center gap-8">
          {/* VORDERSEITE */}

          <div>
            <p className="mb-3 text-sm text-[#3D3229]/60">
              Vorderseite
            </p>

            <div
              ref={visitenkarteFrontRef}
              style={{
                width: '91mm',
                height: '61mm',
                padding: '3mm',
                boxSizing: 'border-box',
                background: '#F5F0E8',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: '85mm',
                  height: '55mm',
                  overflow: 'hidden',
                }}
              >
                <VisitenkarteVorderseite />
              </div>
            </div>
          </div>

          {/* RÜCKSEITE */}

          <div>
            <p className="mb-3 text-sm text-[#3D3229]/60">
              Rückseite
            </p>

            <div
              ref={visitenkarteBackRef}
              style={{
                width: '91mm',
                height: '61mm',
                padding: '3mm',
                boxSizing: 'border-box',
                background: '#3D3229',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: '85mm',
                  height: '55mm',
                  overflow: 'hidden',
                }}
              >
                <VisitenkarteRueckseite />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}