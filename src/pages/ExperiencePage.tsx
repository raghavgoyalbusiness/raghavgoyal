import { Navbar } from '@/components/Navbar';
import { Experience } from '@/components/Experience';
import { Footer } from '@/components/Footer';

const ExperiencePage = () => {
  return (
    <div className="smooth-scroll">
      <Navbar />
      <div className="pt-20">
        <Experience />
      </div>
      <Footer />
    </div>
  );
};

export default ExperiencePage;
