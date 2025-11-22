import { Navbar } from '@/components/Navbar';
import { Skills } from '@/components/Skills';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';

const SkillsPage = () => {
  return (
    <div className="smooth-scroll">
      <Navbar />
      <div className="pt-20">
        <Skills />
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default SkillsPage;
