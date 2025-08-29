import { Hero } from '@/components/sections/hero';
import { Features } from '@/components/sections/features';
import { About } from '@/components/sections/about';
import { Contact } from '@/components/sections/contact';
import { Navigation } from '@/components/layout/navigation';
import { Footer } from '@/components/layout/footer';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}