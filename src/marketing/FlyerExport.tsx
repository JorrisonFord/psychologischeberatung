import { useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import jsPDF from 'jspdf';

import { FlyerA4 } from './Flyer/FlyerA4';
import { FlyerStory } from './Flyer/FlyerStory';
import { FlyerMobileScroll } from './Flyer/FlyerMobileScroll';

export function FlyerExport() {
  const a4Ref = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  const [exporting, setExporting] = useState(false);


  /* -------------------------------------------------- */
  /* PNG Export */
  /* -------------------------------------------------- */

  const downloadPng = async (
    element: HTMLDivElement,
    filename: string,
  ) => {
    try {
      setExporting(true);

      // Make sure fonts are fully loaded before capturing
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
      console.error('PNG export failed:', error);
      alert('Der PNG-Export konnte nicht erstellt werden.');
    } finally {
      setExporting(false);
    }
  };


  /* -------------------------------------------------- */
  /* A4 PDF Export */
  /* -------------------------------------------------- */

  const downloadA4Pdf = async () => {
    if (!a4Ref.current) return;

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

      pdf.addImage(
        dataUrl,
        'PNG',
        0,
        0,
        210,
        297,
      );

      pdf.save('Joris-van-Bohemen-Flyer-A4.pdf');

    } catch (error) {
      console.error('PDF export failed:', error);
      alert('Der PDF-Export konnte nicht erstellt werden.');
    } finally {
      setExporting(false);
    }
  };


  /* -------------------------------------------------- */
  /* UI */
  /* -------------------------------------------------- */

  return (
    <div className="min-h-screen bg-[#E8DDD0] p-10">

      {/* Export controls */}
      <div className="max-w-[900px] mx-auto mb-10">

        <h1 className="font-serif text-4xl text-[#3D3229]">
          Flyer Export
        </h1>

        <p className="mt-2 text-[#3D3229]/60">
          A4, Story und Mobile-Version als PNG exportieren.
          Zusätzlich kann der A4-Flyer als PDF exportiert werden.
        </p>


        {/* Buttons */}
        <div className="mt-6 flex flex-wrap gap-3">

          {/* A4 PNG */}
          <button
            onClick={() =>
              a4Ref.current &&
              downloadPng(
                a4Ref.current,
                'Joris-van-Bohemen-Flyer-A4.png',
              )
            }
            disabled={exporting}
            className="px-5 py-3 rounded-xl bg-[#3D3229] text-white hover:bg-[#B5725A] transition-colors disabled:opacity-50"
          >
            A4 PNG
          </button>


          {/* A4 PDF */}
          <button
            onClick={downloadA4Pdf}
            disabled={exporting}
            className="px-5 py-3 rounded-xl bg-[#3D3229] text-white hover:bg-[#B5725A] transition-colors disabled:opacity-50"
          >
            A4 PDF
          </button>


          {/* Story PNG */}
          <button
            onClick={() =>
              storyRef.current &&
              downloadPng(
                storyRef.current,
                'Joris-van-Bohemen-Flyer-Story.png',
              )
            }
            disabled={exporting}
            className="px-5 py-3 rounded-xl bg-[#3D3229] text-white hover:bg-[#B5725A] transition-colors disabled:opacity-50"
          >
            Story PNG
          </button>


          {/* Mobile Scroll PNG */}
          <button
            onClick={() =>
              mobileScrollRef.current &&
              downloadPng(
                mobileScrollRef.current,
                'Joris-van-Bohemen-Flyer-Mobile.png',
              )
            }
            disabled={exporting}
            className="px-5 py-3 rounded-xl bg-[#3D3229] text-white hover:bg-[#B5725A] transition-colors disabled:opacity-50"
          >
            Mobile PNG
          </button>

        </div>


        {/* Export status */}
        {exporting && (
          <p className="mt-4 text-sm text-[#3D3229]/60">
            Export wird erstellt …
          </p>
        )}

      </div>


      {/* ================================================== */}
      {/* A4 PREVIEW */}
      {/* ================================================== */}

      <section className="mb-24 overflow-auto">

        <p className="max-w-[900px] mx-auto mb-4 text-sm text-[#3D3229]/50">
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


      {/* ================================================== */}
      {/* STORY PREVIEW */}
      {/* ================================================== */}

      <section className="mb-24 overflow-auto">

        <p className="max-w-[900px] mx-auto mb-4 text-sm text-[#3D3229]/50">
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


      {/* ================================================== */}
      {/* MOBILE SCROLL PREVIEW */}
      {/* ================================================== */}

      <section>

        <p className="max-w-[900px] mx-auto mb-4 text-sm text-[#3D3229]/50">
          Mobile Scroll · variable Höhe
        </p>

        <div
          ref={mobileScrollRef}
          className="mx-auto"
        >
          <FlyerMobileScroll />
        </div>

      </section>

    </div>
  );
}