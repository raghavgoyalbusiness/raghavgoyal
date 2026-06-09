import { Navbar } from '@/components/Navbar';
import { Experience } from '@/components/Experience';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { PageTransition } from '@/components/PageTransition';
import { Seo } from '@/components/Seo';

const ExperiencePage = () => {
  return (
    <PageTransition>
      <Seo
        title="Experience — Raghav Goyal"
        description="Raghav Goyal's professional experience across founding Influencer Connect, AI Forge, and brand partnerships."
        path="/experience"
      />
      <div className="smooth-scroll">
        <Navbar />
        <main className="pt-20">
          <h1 className="sr-only">Professional Experience</h1>
          <Experience />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </PageTransition>
  );
};

export default ExperiencePage;
