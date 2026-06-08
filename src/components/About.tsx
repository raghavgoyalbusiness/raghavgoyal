import { AnimatedSection } from '@/components/AnimatedSection';
import about from '@/assets/raghav-casual.jpeg';

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <AnimatedSection className="lg:col-span-5">
            <div className="sticky top-28">
              <div className="text-xs uppercase tracking-[0.2em] text-primary mb-4">
                01 — About
              </div>
              <div className="relative rounded-3xl overflow-hidden border border-border">
                <img src={about} alt="Raghav Goyal" className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="card-night">
                  <div className="text-xs text-foreground/50">Currently</div>
                  <div className="text-sm font-medium mt-1">AI Forge Incubator</div>
                </div>
                <div className="card-night">
                  <div className="text-xs text-foreground/50">Based in</div>
                  <div className="text-sm font-medium mt-1">London, UK</div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="lg:col-span-7 space-y-8">
            <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-balance">
              Building bridges between <span className="text-primary">brands, creators</span> and what's next.
            </h2>

            <div className="space-y-6 text-lg text-foreground/70 leading-relaxed">
              <p>
                I'm a marketing and partnerships professional specialising in influencer marketing,
                brand collaborations, and AI-powered growth tools. I grew up obsessed with how
                culture moves online — and how the right partnership can compound a brand overnight.
              </p>
              <p>
                Today I'm the founder of{' '}
                <span className="text-foreground font-medium">Influencer Connect</span>, building{' '}
                <span className="text-foreground font-medium">Anton</span> — an AI agent for
                micro-influencer discovery — inside the AI Forge incubator. I host{' '}
                <span className="text-primary font-medium">The 3AM Show</span>, where I talk to
                founders, creators, and operators about the messy reality of building.
              </p>
              <p>
                Before this I worked with brands on influencer activations and campaigns, led
                university initiatives at Westminster, taught with Think Pacific in Fiji, and ran
                marketing at Viral Hub. Different rooms, same instinct — find the leverage, then pull.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 pt-4">
              {[
                'Influencer marketing & creator partnerships',
                'AI-powered growth tooling',
                'Brand campaigns & activations',
                'Founder storytelling & podcasting',
              ].map((s) => (
                <div
                  key={s}
                  className="flex items-start gap-3 rounded-xl border border-border/60 bg-surface/40 p-4"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-sm text-foreground/80">{s}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
