import { Navbar } from '@/components/Navbar';
import { Education } from '@/components/Education';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { PageTransition } from '@/components/PageTransition';
import { Seo } from '@/components/Seo';

const EducationPage = () => {
  return (
    <PageTransition>
      <Seo
        title="Education — Raghav Goyal"
        description="Raghav Goyal's academic background and education."
        path="/education"
      />
      <div className="smooth-scroll">
        <Navbar />
        <main className="pt-20">
          <h1 className="sr-only">Education</h1>
          <Education />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </PageTransition>
  );
};

export default EducationPage;
