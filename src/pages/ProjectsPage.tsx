import { Navbar } from '@/components/Navbar';
import { Projects } from '@/components/Projects';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { PageTransition } from '@/components/PageTransition';
import { Seo } from '@/components/Seo';

const ProjectsPage = () => {
  return (
    <PageTransition>
      <Seo
        title="Projects — Raghav Goyal"
        description="Projects Raghav Goyal is building, including Anton (AI micro-influencer discovery) and Influencer Connect."
        path="/projects"
      />
      <div className="smooth-scroll">
        <Navbar />
        <main className="pt-20">
          <h1 className="sr-only">Projects</h1>
          <Projects />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </PageTransition>
  );
};

export default ProjectsPage;
