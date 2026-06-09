import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Podcast } from '@/components/Podcast';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { Seo } from '@/components/Seo';

const Index = () => {
  return (
    <div className="smooth-scroll bg-background min-h-screen noise">
      <Seo
        title="Raghav Goyal — Marketing, Partnerships & AI Growth"
        description="Founder of Influencer Connect, AI Forge participant, and host of The 3AM Show. Marketing, partnerships, and AI-powered growth."
        path="/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Raghav Goyal',
          url: 'https://raghav-goyal.com/',
          jobTitle: 'Founder, Influencer Connect',
          sameAs: [
            'https://www.instagram.com/raghavgoyalx/',
            'https://x.com/Raghavgoyalx',
            'https://www.raghavgoyal.co.uk/',
            'https://github.com/raghavgoyalbusiness',
            'https://www.linkedin.com/in/raghavgoyal010205/',
            'https://www.influencer-connect.com/',
            'https://www.youtube.com/@RaghavGoyalofficialx',
          ],
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Podcast />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
