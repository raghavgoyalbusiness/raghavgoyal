import { Navbar } from '@/components/Navbar';
import { About } from '@/components/About';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { PageTransition } from '@/components/PageTransition';
import { Seo } from '@/components/Seo';

const AboutPage = () => {
  return (
    <PageTransition>
      <Seo
        title="About Raghav Goyal — Marketing & AI Founder"
        description="Learn about Raghav Goyal: founder of Influencer Connect, AI Forge participant, and host of The 3AM Show."
        path="/about"
      />
      <div className="smooth-scroll">
        <Navbar />
        <main className="pt-20">
          <h1 className="sr-only">About Raghav Goyal</h1>
          <About />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </PageTransition>
  );
};

export default AboutPage;
