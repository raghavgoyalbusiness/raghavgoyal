import { Navbar } from '@/components/Navbar';
import { Leadership } from '@/components/Leadership';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { PageTransition } from '@/components/PageTransition';
import { Seo } from '@/components/Seo';

const LeadershipPage = () => {
  return (
    <PageTransition>
      <Seo
        title="Leadership — Raghav Goyal"
        description="Leadership roles and community work by Raghav Goyal across student, marketing, and founder communities."
        path="/leadership"
      />
      <div className="smooth-scroll">
        <Navbar />
        <main className="pt-20">
          <h1 className="sr-only">Leadership</h1>
          <Leadership />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </PageTransition>
  );
};

export default LeadershipPage;
