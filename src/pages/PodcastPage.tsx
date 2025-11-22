import { Navbar } from '@/components/Navbar';
import { Podcast } from '@/components/Podcast';
import { Footer } from '@/components/Footer';

const PodcastPage = () => {
  return (
    <div className="smooth-scroll">
      <Navbar />
      <div className="pt-20">
        <Podcast />
      </div>
      <Footer />
    </div>
  );
};

export default PodcastPage;
