import { Navbar } from '@/components/Navbar';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { PageTransition } from '@/components/PageTransition';

const ContactPage = () => {
  return (
    <PageTransition>
      <div className="smooth-scroll">
        <Navbar />
        <div className="pt-20">
          <Contact />
        </div>
        <Footer />
        <BackToTop />
      </div>
    </PageTransition>
  );
};

export default ContactPage;
