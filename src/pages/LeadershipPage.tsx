import { Navbar } from '@/components/Navbar';
import { Leadership } from '@/components/Leadership';
import { Footer } from '@/components/Footer';

const LeadershipPage = () => {
  return (
    <div className="smooth-scroll">
      <Navbar />
      <div className="pt-20">
        <Leadership />
      </div>
      <Footer />
    </div>
  );
};

export default LeadershipPage;
