import { Navbar } from '@/components/Navbar';
import { About } from '@/components/About';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';

const AboutPage = () => {
  return (
    <div className="smooth-scroll">
      <Navbar />
      <div className="pt-20">
        <About />
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default AboutPage;
