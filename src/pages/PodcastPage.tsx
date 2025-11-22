import { Navbar } from '@/components/Navbar';
import { Podcast } from '@/components/Podcast';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';

const PodcastPage = () => {
  return (
    <div className="smooth-scroll">
      <Navbar />
      <div className="pt-20">
        <Podcast />
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default PodcastPage;
