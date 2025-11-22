import { Navbar } from '@/components/Navbar';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';

const ContactPage = () => {
  return (
    <div className="smooth-scroll">
      <Navbar />
      <div className="pt-20">
        <Contact />
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default ContactPage;
