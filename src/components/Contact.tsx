import { AnimatedSection } from '@/components/AnimatedSection';
import { ArrowUpRight, Mail, Linkedin, Instagram } from 'lucide-react';

const links = [
  { label: 'Email', value: 'raghav.goyal1909176@gmail.com', href: 'mailto:raghav.goyal1909176@gmail.com', icon: Mail },
  { label: 'LinkedIn', value: '/in/raghavgoyal010205', href: 'https://www.linkedin.com/in/raghavgoyal010205', icon: Linkedin },
  { label: 'Instagram', value: '@raghavgoyalx', href: 'https://www.instagram.com/raghavgoyalx', icon: Instagram },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border/60 relative">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-10 relative">
        <AnimatedSection>
          <div className="text-xs uppercase tracking-[0.2em] text-primary mb-4 text-center">
            05 — Contact
          </div>
          <h2 className="font-heading font-bold text-5xl sm:text-6xl lg:text-8xl tracking-tight text-center text-balance">
            Let's build <br />
            <span className="text-primary">something loud.</span>
          </h2>
          <p className="mt-8 text-lg text-foreground/60 max-w-2xl mx-auto text-center leading-relaxed">
            Pitch me a brief, a podcast idea, a partnership, or just say hi. I read everything
            myself and reply faster than I probably should.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-16 max-w-3xl mx-auto grid sm:grid-cols-3 gap-4">
            {links.map((l) => {
              const Icon = l.icon;
              return (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-border bg-surface/40 p-6 hover:border-primary/60 hover:bg-surface transition-all"
                >
                  <div className="flex items-start justify-between mb-6">
                    <Icon className="h-5 w-5 text-primary" />
                    <ArrowUpRight className="h-4 w-4 text-foreground/40 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <div className="text-xs uppercase tracking-wider text-foreground/50 mb-1">
                    {l.label}
                  </div>
                  <div className="text-sm font-medium text-foreground break-all">{l.value}</div>
                </a>
              );
            })}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.35}>
          <div className="mt-16 text-center">
            <a
              href="mailto:raghav.goyal1909176@gmail.com"
              className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-all glow-amber"
            >
              Start a conversation
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
