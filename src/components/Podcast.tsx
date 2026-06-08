import { AnimatedSection } from '@/components/AnimatedSection';
import { Headphones, Mic, Play } from 'lucide-react';
import artwork from '@/assets/podcast-artwork.jpg';

export const Podcast = () => {
  return (
    <section id="podcast" className="py-24 md:py-32 border-t border-border/60 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimatedSection>
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="absolute -inset-6 bg-primary/20 blur-3xl rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-primary/30 aspect-square">
                <img src={artwork} alt="The 3AM Show" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-primary">Podcast</div>
                    <div className="font-heading text-2xl font-bold">The 3AM Show</div>
                  </div>
                  <button
                    className="h-14 w-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-105 transition-transform glow-amber"
                    aria-label="Play preview"
                  >
                    <Play className="h-5 w-5 ml-0.5" fill="currentColor" />
                  </button>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="text-xs uppercase tracking-[0.2em] text-primary mb-4">
              04 — The 3AM Show
            </div>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-balance mb-6">
              Conversations from the <span className="text-primary">restless hours.</span>
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              The 3AM Show is a podcast for the people building when everyone else is sleeping.
              Honest talks with founders, creators, and operators about what's actually working,
              what's broken, and what keeps them up at night. No sponsored fluff — just the
              conversations I wish I had earlier.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all glow-amber"
              >
                <Headphones className="h-4 w-4" />
                Listen to episodes
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3 text-sm font-semibold text-foreground hover:border-primary/60 transition-all"
              >
                <Mic className="h-4 w-4" />
                Come on the show
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
