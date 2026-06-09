import { Navbar } from '@/components/Navbar';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { PageTransition } from '@/components/PageTransition';
import { Seo } from '@/components/Seo';

const ContactPage = () => {
  return (
    <PageTransition>
      <Seo
        title="Contact Raghav Goyal"
        description="Get in touch with Raghav Goyal for partnerships, podcast guesting, and influencer marketing collaborations."
        path="/contact"
      />
      <div className="smooth-scroll">
        <Navbar />
        <main className="pt-20">
          <h1 className="sr-only">Contact Raghav Goyal</h1>
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </PageTransition>
  );
};

export default ContactPage;
