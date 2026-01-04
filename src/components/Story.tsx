import { AnimatedSection } from '@/components/AnimatedSection';
import aboutImage from '@/assets/raghav-about.jpeg';

export const Story = () => {
  return (
    <section id="story" className="section-light py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <AnimatedSection delay={0.2}>
            <div className="rounded-2xl overflow-hidden border-2 border-primary/20 shadow-lg hover-lift">
              <img
                src={aboutImage}
                alt="Raghav Goyal"
                className="w-full h-auto object-cover"
              />
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection delay={0.4} className="space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gradient-primary">
                From bullied kid to founder at 20
              </h2>
              <p className="text-xl sm:text-2xl text-primary font-medium">
                Bad grades. Low confidence. Big dreams anyway.
              </p>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-foreground/80 leading-relaxed">
              <p>
                Growing up, school wasn't kind to me. I was the kid who got bullied, the one teachers didn't expect much from, the one whose report cards always came with "could do better" written in red.
              </p>
              
              <p>
                For a while, I believed that. I thought bad grades meant I'd never do anything meaningful.
              </p>
              
              <p>
                What changed everything was when I stopped trying to "fit in" and started building. I threw myself into marketing, content and tech. I learned by doing – freelancing, interning, cold-emailing people way smarter than me, and saying yes to every chance to create something from scratch.
              </p>
              
              <p>
                Today, at 20, I'm the founder of an influencer marketing agency, a software company – Influencer Connect Ltd, and I host The Three AM Show podcast. I work with creators and brands, build digital products, and share the lessons I wish someone had given me when I felt completely lost.
              </p>
              
              <p>
                I'm not here because I was the smartest in the classroom. I'm here because I refused to let bullying and bad grades be the final story. If you've ever been underestimated, this is your proof: you can still build something insane out of your life.
              </p>
            </div>

            {/* Quote */}
            <div className="mt-8 p-6 bg-primary/10 border-l-4 border-primary rounded-r-lg">
              <p className="text-lg sm:text-xl font-semibold text-foreground italic">
                "Your grades are a snapshot. Your potential is a movie."
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
