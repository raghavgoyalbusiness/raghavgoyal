import { Navbar } from '@/components/Navbar';
import { Podcast } from '@/components/Podcast';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { PageTransition } from '@/components/PageTransition';

const PodcastPage = () => {
  return (
    <PageTransition>
      <div className="smooth-scroll">
        <Navbar />
        <div className="pt-20">
          <Podcast />
        </div>
        <Footer />
        <BackToTop />
      </div>
    </PageTransition>
  );
};

export default PodcastPage;
