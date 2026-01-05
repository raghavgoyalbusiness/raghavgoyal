import { CheckCircle2 } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import casualImage from '@/assets/raghav-casual.jpeg';

export const About = () => {
  const interests = [
    'Influencer marketing & creator partnerships',
    'Brand collaborations & digital platforms',
    'Content creation & social-first strategy',
    'Product design & user experience',
  ];

  return (
    <section id="about" className="section-light py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center text-gradient-primary">
            About Me
          </h2>
        </AnimatedSection>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12 items-start">
          {/* Image */}
          <AnimatedSection delay={0.2}>
            <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="rounded-2xl overflow-hidden border-2 border-primary/20 shadow-lg hover-lift">
                <img
                  src={casualImage}
                  alt="Raghav Goyal"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection delay={0.4} className="lg:col-span-2 space-y-8">
            <div className="space-y-6 text-base sm:text-lg text-foreground/80 leading-relaxed">
              <p>
                I'm a marketing and business enthusiast with a passion for building bridges between brands, creators, and communities. 
                Over the last few years at the University of Westminster, I've immersed myself in leadership, entrepreneurship, and global 
                experiences — from volunteering abroad and leading university initiatives to securing funding for my own startup, 
                Influencer-Connect.com. These experiences have strengthened my skills in influencer marketing, digital strategy, and partnership building.
              </p>
              
              <p>
                Currently, I'm expanding my expertise in marketing, partnerships, and product design. I've worked with brands to run ad campaigns, 
                manage social media content, and execute influencer activations, gaining hands-on experience in both B2B and B2C environments. 
                I enjoy creating strategies that deliver measurable results, designing seamless digital experiences, and telling brand stories that resonate.
              </p>
              
              <p>
                I have volunteered and taught from community knowledge-exchange sessions to global volunteering experiences which keeps my 
                perspective human-centred and purpose-driven.
              </p>
              
              <p>
                Looking ahead, my goal is to grow as a marketing and partnerships professional with a focus on influencer marketing, 
                brand collaborations, and digital platforms. I'm particularly interested in working with organisations that champion innovation, 
                creativity, and impact — whether in tech, media, hospitality, or the creator economy.
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-6">What I'm Most Interested In</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{interest}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
