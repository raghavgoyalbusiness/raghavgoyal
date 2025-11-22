import { Navbar } from '@/components/Navbar';
import { Projects } from '@/components/Projects';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';

const ProjectsPage = () => {
  return (
    <div className="smooth-scroll">
      <Navbar />
      <div className="pt-20">
        <Projects />
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default ProjectsPage;
