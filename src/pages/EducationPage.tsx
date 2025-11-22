import { Navbar } from '@/components/Navbar';
import { Education } from '@/components/Education';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';

const EducationPage = () => {
  return (
    <div className="smooth-scroll">
      <Navbar />
      <div className="pt-20">
        <Education />
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default EducationPage;
