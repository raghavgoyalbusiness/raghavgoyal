import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { PageTransition } from '@/components/PageTransition';

const Home = () => {
  return (
    <PageTransition>
      <div className="smooth-scroll">
        <Navbar />
        <Hero />
        <Footer />
        <BackToTop />
      </div>
    </PageTransition>
  );
};

export default Home;
