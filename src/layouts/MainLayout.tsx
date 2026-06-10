import { Navigation } from "../sections/Navigation";
import { Footer } from "../sections/Footer";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}