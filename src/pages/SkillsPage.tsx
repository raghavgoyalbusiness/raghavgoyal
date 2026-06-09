import { Navbar } from '@/components/Navbar';
import { Skills } from '@/components/Skills';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { PageTransition } from '@/components/PageTransition';
import { Seo } from '@/components/Seo';

const SkillsPage = () => {
  return (
    <PageTransition>
      <Seo
        title="Skills & Expertise — Raghav Goyal"
        description="Marketing, partnerships, and AI-powered growth skills Raghav Goyal brings to founders and brands."
        path="/skills"
      />
      <div className="smooth-scroll">
        <Navbar />
        <main className="pt-20">
          <h1 className="sr-only">Skills & Expertise</h1>
          <Skills />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </PageTransition>
  );
};

export default SkillsPage;
