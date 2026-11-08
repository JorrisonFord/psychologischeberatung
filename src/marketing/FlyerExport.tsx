
import { useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import jsPDF from 'jspdf';

import { FlyerA4 } from './Flyer/FlyerA4';
import { FlyerStory } from './Flyer/FlyerStory';
import { FlyerMobileScroll } from './Flyer/FlyerMobileScroll';
import { VisitenkarteVorderseite } from './Flyer/VisitenkarteVorderseite';
import { VisitenkarteRueckseite } from './Flyer/VisitenkarteRueckseite';

// --------------------------------------------------
// EXPORT SETTINGS
// --------------------------------------------------

const A4_WIDTH = 2480;
const A4_HEIGHT = 3508;

const BACKGROUND_LIGHT = '#F5F0E8';
const BACKGROUND_DARK = '#3D3229';

// Visitenkarte
const CARD_WIDTH = 85;
const CARD_HEIGHT = 55;
const CARD_BLEED = 2;

const CARD_PDF_WIDTH = CARD_WIDTH + CARD_BLEED * 2;   // 89 mm
const CARD_PDF_HEIGHT = CARD_HEIGHT + CARD_BLEED * 2; // 59 mm

// --------------------------------------------------
// COMPONENT
// --------------------------------------------------

export function FlyerExport() {
  const a4Ref = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const visitenkarteFrontRef = useRef<HTMLDivElement>(null);
  const visitenkarteBackRef = useRef<HTMLDivElement>(null);

  const [exporting, setExporting] = useState(false);

  // --------------------------------------------------
  // PREPARE ELEMENT
  // --------------------------------------------------

  const prepareElement = async (element: HTMLElement) => {
    await document.fonts.ready;

    const images = Array.from(element.querySelectorAll('img'));

    await Promise.all(
      images.map(async (img) => {
        try {
          await img.decode();
        } catch {
          console.warn('Bild konnte nicht geladen werden:', img.src);
        }
      })
    );

    await new Promise<void>((resolve) => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => resolve());
      });
    });
  };

  // --------------------------------------------------
  // CREATE PNG
  // --------------------------------------------------

  const createPng = async (
    element: HTMLDivElement,
    options: {
      width?: number;
      height?: number;
      pixelRatio?: number;
      backgroundColor?: string;
    } = {},
  ) => {
    await prepareElement(element);

    const {
      width,
      height,
      pixelRatio = 1,
      backgroundColor = BACKGROUND_LIGHT,
    } = options;

    const dataUrl = await toPng(element, {
      pixelRatio,
      cacheBust: true,
      backgroundColor,

      ...(width && height
        ? {
            width,
            height,
            canvasWidth: width,
            canvasHeight: height,
            style: {
              width: `${width}px`,
              height: `${height}px`,
              minWidth: `${width}px`,
              minHeight: `${height}px`,
              margin: '0',
              transform: 'none',
            },
          }
        : {}),
    });

    return dataUrl;
  };

  // --------------------------------------------------
  // DOWNLOAD PNG
  // --------------------------------------------------

  const savePng = (dataUrl: string, filename: string) => {
    const link = document.createElement('a');

    link.download = filename;
    link.href = dataUrl;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // --------------------------------------------------
  // EXPORT HANDLER
  // --------------------------------------------------

  const runExport = async (
    action: () => Promise<void>,
    errorMessage: string,
  ) => {
    if (exporting) return;

    try {
      setExporting(true);
      await action();
    } catch (error) {
      console.error(errorMessage, error);
      alert(errorMessage);
    } finally {
      setExporting(false);
    }
  };

  // --------------------------------------------------
  // A4 PNG EXPORT
  // --------------------------------------------------

  const downloadA4Png = async () => {
    await runExport(async () => {
      if (!a4Ref.current) {
        throw new Error('A4-Element nicht gefunden');
      }

      const dataUrl = await createPng(a4Ref.current, {
        width: A4_WIDTH,
        height: A4_HEIGHT,
        pixelRatio: 1,
        backgroundColor: BACKGROUND_LIGHT,
      });

      savePng(dataUrl, 'Joris-van-Bohemen-Flyer-A4.png');
    }, 'Der A4-PNG-Export ist fehlgeschlagen.');
  };

  // --------------------------------------------------
  // A4 PDF EXPORT
  // --------------------------------------------------

  const downloadA4Pdf = async () => {
    await runExport(async () => {
      if (!a4Ref.current) {
        throw new Error('A4-Element nicht gefunden');
      }

      const imageData = await createPng(a4Ref.current, {
        width: A4_WIDTH,
        height: A4_HEIGHT,
        pixelRatio: 1,
        backgroundColor: BACKGROUND_LIGHT,
      });

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true,
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      pdf.addImage(
        imageData,
        'PNG',
        0,
        0,
        pageWidth,
        pageHeight,
      );

      pdf.save('Joris-van-Bohemen-Flyer-A4.pdf');
    }, 'Der A4-PDF-Export ist fehlgeschlagen.');
  };

  // --------------------------------------------------
  // STORY PNG EXPORT
  // --------------------------------------------------

  const downloadStoryPng = async () => {
    await runExport(async () => {
      if (!storyRef.current) {
        throw new Error('Story-Element nicht gefunden');
      }

      const dataUrl = await createPng(storyRef.current, {
        pixelRatio: 1,
        backgroundColor: BACKGROUND_LIGHT,
      });

      savePng(dataUrl, 'Joris-van-Bohemen-Flyer-Story.png');
    }, 'Der Story-PNG-Export ist fehlgeschlagen.');
  };

  // --------------------------------------------------
  // MOBILE PNG EXPORT
  // --------------------------------------------------

  const downloadMobilePng = async () => {
    await runExport(async () => {
      if (!mobileScrollRef.current) {
        throw new Error('Mobile-Element nicht gefunden');
      }

      const dataUrl = await createPng(mobileScrollRef.current, {
        pixelRatio: 1,
        backgroundColor: BACKGROUND_LIGHT,
      });

      savePng(dataUrl, 'Joris-van-Bohemen-Flyer-Mobile.png');
    }, 'Der Mobile-PNG-Export ist fehlgeschlagen.');
  };

  // --------------------------------------------------
  // BUSINESS CARD VECTOR PDF EXPORT
  // --------------------------------------------------

  const downloadVisitenkartePdf = async () => {
    if (exporting) return;

    // Popup synchron öffnen, damit es nicht vom Browser
    // als unerwünschtes Popup blockiert wird.
    const printWindow = window.open('', '_blank');

    if (!printWindow) {
      alert(
        'Das Druckfenster wurde blockiert. Bitte erlaube Pop-ups für diese Webseite und versuche es erneut.',
      );
      return;
    }

    await runExport(async () => {
      try {
        if (
          !visitenkarteFrontRef.current ||
          !visitenkarteBackRef.current
        ) {
          throw new Error('Visitenkarten-Element nicht gefunden');
        }

        await prepareElement(visitenkarteFrontRef.current);
        await prepareElement(visitenkarteBackRef.current);

        const printDocument = printWindow.document;

        printDocument.open();
        printDocument.write(`
          <!DOCTYPE html>
          <html lang="de">
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>Joris van Bohemen – Visitenkarte</title>
            </head>
            <body>
              <main id="print-root"></main>
            </body>
          </html>
        `);
        printDocument.close();

        // ----------------------------------------------
        // STYLESHEETS ÜBERNEHMEN
        // ----------------------------------------------

        const stylesheetPromises: Promise<void>[] = [];

        document
          .querySelectorAll<HTMLLinkElement>('link[rel="stylesheet"]')
          .forEach((stylesheet) => {
            const link = printDocument.createElement('link');

            link.rel = 'stylesheet';
            link.href = stylesheet.href;

            const loaded = new Promise<void>((resolve) => {
              link.onload = () => resolve();
              link.onerror = () => resolve();
            });

            stylesheetPromises.push(loaded);
            printDocument.head.appendChild(link);
          });

        // Inline-Styles übernehmen
        document.querySelectorAll('style').forEach((style) => {
          const clonedStyle = printDocument.createElement('style');
          clonedStyle.textContent = style.textContent;
          printDocument.head.appendChild(clonedStyle);
        });

        // ----------------------------------------------
        // PRINT CSS
        // ----------------------------------------------

        const printStyles = printDocument.createElement('style');

        printStyles.textContent = `
          @page {
            size: ${CARD_PDF_WIDTH}mm ${CARD_PDF_HEIGHT}mm;
            margin: 0;
          }

          html,
          body {
            width: ${CARD_PDF_WIDTH}mm;
            margin: 0 !important;
            padding: 0 !important;
            background: white;
          }

          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          #print-root {
            width: ${CARD_PDF_WIDTH}mm;
            margin: 0;
            padding: 0;
          }

          .print-card {
            width: ${CARD_PDF_WIDTH}mm !important;
            height: ${CARD_PDF_HEIGHT}mm !important;

            /* Inhalt exakt mittig auf der Druckfläche platzieren */
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;

            box-sizing: border-box !important;
            margin: 0 !important;
            padding: 0 !important;

            overflow: hidden !important;

            break-after: page;
            page-break-after: always;
          }

          .print-card:last-child {
            break-after: auto;
            page-break-after: auto;
          }

          @media print {
            html,
            body {
              width: ${CARD_PDF_WIDTH}mm;
              height: auto;
              margin: 0 !important;
              padding: 0 !important;
            }
          }
        `;

        printDocument.head.appendChild(printStyles);

        // ----------------------------------------------
        // VORDER- UND RÜCKSEITE ÜBERNEHMEN
        // ----------------------------------------------

        const printRoot = printDocument.getElementById('print-root');

        if (!printRoot) {
          throw new Error('Druckbereich konnte nicht erstellt werden');
        }

        const frontClone = visitenkarteFrontRef.current.cloneNode(
          true,
        ) as HTMLDivElement;

        const backClone = visitenkarteBackRef.current.cloneNode(
          true,
        ) as HTMLDivElement;

        frontClone.classList.add('print-card');
        backClone.classList.add('print-card');

        printRoot.appendChild(frontClone);
        printRoot.appendChild(backClone);

        // ----------------------------------------------
        // AUF STYLESHEETS UND SCHRIFTEN WARTEN
        // ----------------------------------------------

        await Promise.all(stylesheetPromises);
        await printDocument.fonts.ready;

        // Bilder laden
        const printImages = Array.from(
          printDocument.querySelectorAll('img'),
        );

        await Promise.all(
          printImages.map(async (img) => {
            try {
              await img.decode();
            } catch {
              console.warn(
                'Druckbild konnte nicht geladen werden:',
                img.src,
              );
            }
          }),
        );

        // SVG-QR-Code und Layout vollständig rendern lassen
        await new Promise<void>((resolve) => {
          printWindow.requestAnimationFrame(() => {
            printWindow.requestAnimationFrame(() => resolve());
          });
        });

        printWindow.focus();
        printWindow.print();

      } catch (error) {
        printWindow.close();
        throw error;
      }
    }, 'Der Visitenkarten-PDF-Export ist fehlgeschlagen.');
  };

  // --------------------------------------------------
  // UI
  // --------------------------------------------------

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
            onClick={downloadA4Png}
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
            onClick={downloadStoryPng}
            disabled={exporting}
            className="rounded-xl bg-[#3D3229] px-5 py-3 text-white transition-colors hover:bg-[#B5725A] disabled:opacity-50"
          >
            Story PNG
          </button>

          <button
            onClick={downloadMobilePng}
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
          A4 · 2480 × 3508 px · 300 DPI
        </p>

        <div
          ref={a4Ref}
          className="mx-auto"
          style={{
            width: `${A4_WIDTH}px`,
            height: `${A4_HEIGHT}px`,
            minWidth: `${A4_WIDTH}px`,
            minHeight: `${A4_HEIGHT}px`,
            flexShrink: 0,
            display: 'block',
            boxSizing: 'border-box',
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

        <div
          ref={mobileScrollRef}
          className="mx-auto"
        >
          <FlyerMobileScroll />
        </div>
      </section>

      {/* BUSINESS CARD */}

      <section className="mb-24">

        <div className="mx-auto mb-6 max-w-[900px]">
          <h2 className="font-serif text-3xl text-[#3D3229]">
            Visitenkarte
          </h2>

          <p className="mt-2 text-[#3D3229]/60">
            Vorder- und Rückseite · Endformat 85 × 55 mm
            · 2 mm Beschnitt je Seite · PDF 89 × 59 mm.
          </p>

          <button
            onClick={downloadVisitenkartePdf}
            disabled={exporting}
            className="mt-5 rounded-xl bg-[#3D3229] px-5 py-3 text-white transition-colors hover:bg-[#B5725A] disabled:opacity-50"
          >
            Visitenkarte PDF / Drucken
          </button>

          <p className="mt-2 text-sm text-[#3D3229]/60">
            Im Druckdialog „Als PDF speichern“ auswählen.
          </p>
        </div>

        <div className="flex flex-wrap items-start justify-center gap-8">

          {/* FRONT */}

          <div>
            <p className="mb-3 text-sm text-[#3D3229]/60">
              Vorderseite
            </p>

            <div
              ref={visitenkarteFrontRef}
              style={{
                width: `${CARD_PDF_WIDTH}mm`,
                height: `${CARD_PDF_HEIGHT}mm`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxSizing: 'border-box',
                background: BACKGROUND_LIGHT,
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: `${CARD_WIDTH}mm`,
                  height: `${CARD_HEIGHT}mm`,
                  flex: 'none',
                  overflow: 'hidden',
                }}
              >
                <VisitenkarteVorderseite />
              </div>
            </div>
          </div>

          {/* BACK */}

          <div>
            <p className="mb-3 text-sm text-[#3D3229]/60">
              Rückseite
            </p>

            <div
              ref={visitenkarteBackRef}
              style={{
                width: `${CARD_PDF_WIDTH}mm`,
                height: `${CARD_PDF_HEIGHT}mm`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxSizing: 'border-box',
                background: BACKGROUND_DARK,
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: `${CARD_WIDTH}mm`,
                  height: `${CARD_HEIGHT}mm`,
                  flex: 'none',
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
