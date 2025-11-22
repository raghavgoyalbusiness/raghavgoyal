import { Navbar } from '@/components/Navbar';
import { Education } from '@/components/Education';
import { Footer } from '@/components/Footer';

const EducationPage = () => {
  return (
    <div className="smooth-scroll">
      <Navbar />
      <div className="pt-20">
        <Education />
      </div>
      <Footer />
    </div>
  );
};

export default EducationPage;
