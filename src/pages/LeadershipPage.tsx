import { Navbar } from '@/components/Navbar';
import { Leadership } from '@/components/Leadership';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';

const LeadershipPage = () => {
  return (
    <div className="smooth-scroll">
      <Navbar />
      <div className="pt-20">
        <Leadership />
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default LeadershipPage;
