import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Podcast } from '@/components/Podcast';
import { Projects } from '@/components/Projects';
import { Leadership } from '@/components/Leadership';
import { Education } from '@/components/Education';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="smooth-scroll">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Podcast />
      <Projects />
      <Leadership />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
