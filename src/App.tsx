import { LanguageProvider } from './context/LanguageContext';
import { Navigation } from './sections/Navigation';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Services } from './sections/Services';
import { Philosophy } from './sections/Philosophy';
import { Testimonials } from './sections/Testimonials';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#F5F0E8]">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Services />
          <Philosophy />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
