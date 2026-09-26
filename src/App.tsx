import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';

import { ScrollToTop } from './components/ScrollToTop';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

import { MainLayout } from './layouts/MainLayout';

import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Services } from './sections/Services';
import { Philosophy } from './sections/Philosophy';
import { Contact } from './sections/Contact';

import { BlogIndex } from './pages/blog/BlogIndex';
import { PsychologischeFlexibilitaet } from './pages/blog/PsychologischeFlexibilitaet';

import { ServicesIndex } from './pages/services/ServicesIndex';
import { PsychologischeBeratung } from './pages/services/PsychologischeBeratung';
import { YogaAchtsamkeit } from './pages/services/YogaAchtsamkeit';
import { ActWertearbeit } from './pages/services/ActWertearbeit';

import { Privacy } from './pages/Privacy';
import { Imprint } from './pages/Imprint';

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Philosophy />
      <Contact />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#F5F0E8]">
        <BrowserRouter>
          <ScrollToTop />
          <Routes>

            {/* HOME */}
            <Route
              path="/"
              element={
                <MainLayout>
                  <HomePage />
                </MainLayout>
              }
            />

            {/* BLOG INDEX */}
            <Route
              path="/blog"
              element={
                <MainLayout>
                  <BlogIndex />
                </MainLayout>
              }
            />

            {/* BLOG ARTICLE */}
            <Route
              path="/blog/psychologische-flexibilitaet"
              element={
                <MainLayout>
                  <PsychologischeFlexibilitaet />
                </MainLayout>
              }
            />

            {/* SERVICES INDEX */}
            <Route
              path="/services"
              element={
                <MainLayout>
                  <ServicesIndex />
                </MainLayout>
              }
            />

              {/* SERVICE PAGES */}
              <Route
                path="/services/counseling"
                element={
                  <MainLayout>
                    <PsychologischeBeratung />
                  </MainLayout>
                }
              />

              <Route
                path="/services/yoga"
                element={
                  <MainLayout>
                    <YogaAchtsamkeit />
                  </MainLayout>
                }
              />

              <Route
                path="/services/act"
                element={
                  <MainLayout>
                    <ActWertearbeit />
                  </MainLayout>
                }
              />  

            {/* PRIVACY */}
            <Route
              path="/privacy"
              element={
                <MainLayout>
                  <Privacy />
                </MainLayout>
              }
            />
            
            {/* IMPRINT */}
            <Route
              path="/imprint"
              element={
                <MainLayout>
                  <Imprint />
                </MainLayout>
              }
            />

          </Routes>
        </BrowserRouter>
        <Analytics />
        <SpeedInsights />
      </div>
    </LanguageProvider>
  );
}

export default App;
