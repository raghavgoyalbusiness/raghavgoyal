import { Navbar } from '@/components/Navbar';
import { Projects } from '@/components/Projects';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { PageTransition } from '@/components/PageTransition';

const ProjectsPage = () => {
  return (
    <PageTransition>
      <div className="smooth-scroll">
        <Navbar />
        <div className="pt-20">
          <Projects />
        </div>
        <Footer />
        <BackToTop />
      </div>
    </PageTransition>
  );
};

export default ProjectsPage;
