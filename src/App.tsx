import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

import { MainLayout } from './layouts/MainLayout';

import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Services } from './sections/Services';
import { Philosophy } from './sections/Philosophy';
import { Testimonials } from './sections/Testimonials';
import { Contact } from './sections/Contact';

import { BlogIndex } from './pages/blog/BlogIndex';
import { PsychologischeFlexibilitaet } from './pages/blog/PsychologischeFlexibilitaet';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Philosophy />
      <Testimonials />
      <Contact />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#F5F0E8]">
        <BrowserRouter>
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

          </Routes>
        </BrowserRouter>
        <Analytics />
        <SpeedInsights />
      </div>
    </LanguageProvider>
  );
}

export default App;