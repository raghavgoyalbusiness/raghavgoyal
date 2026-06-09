import { Navbar } from '@/components/Navbar';
import { Podcast } from '@/components/Podcast';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { PageTransition } from '@/components/PageTransition';
import { Seo } from '@/components/Seo';

const PodcastPage = () => {
  return (
    <PageTransition>
      <Seo
        title="The 3AM Show — Podcast by Raghav Goyal"
        description="The 3AM Show: candid conversations with founders, marketers, and creators, hosted by Raghav Goyal."
        path="/podcast"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'PodcastSeries',
          name: 'The 3AM Show',
          author: { '@type': 'Person', name: 'Raghav Goyal' },
          url: 'https://raghav-goyal.com/podcast',
        }}
      />
      <div className="smooth-scroll">
        <Navbar />
        <main className="pt-20">
          <h1 className="sr-only">The 3AM Show Podcast</h1>
          <Podcast />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </PageTransition>
  );
};

export default PodcastPage;
