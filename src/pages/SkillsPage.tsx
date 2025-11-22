import { Navbar } from '@/components/Navbar';
import { Skills } from '@/components/Skills';
import { Footer } from '@/components/Footer';

const SkillsPage = () => {
  return (
    <div className="smooth-scroll">
      <Navbar />
      <div className="pt-20">
        <Skills />
      </div>
      <Footer />
    </div>
  );
};

export default SkillsPage;
