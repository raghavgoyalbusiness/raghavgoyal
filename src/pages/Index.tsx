import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Podcast } from '@/components/Podcast';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';

const Index = () => {
  return (
    <div className="smooth-scroll bg-background min-h-screen noise">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Podcast />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
