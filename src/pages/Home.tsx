import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';

const Home = () => {
  return (
    <div className="smooth-scroll">
      <Navbar />
      <Hero />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Home;
