import { AnimatedSection } from '@/components/AnimatedSection';
import { ArrowUpRight, Mail, Linkedin, Instagram, Globe, Briefcase } from 'lucide-react';

const links = [
  { label: 'Email', value: 'raghav.goyal1909176@gmail.com', href: 'mailto:raghav.goyal1909176@gmail.com', icon: Mail },
  { label: 'LinkedIn', value: '/in/raghavgoyal010205', href: 'https://www.linkedin.com/in/raghavgoyal010205', icon: Linkedin },
  { label: 'Instagram', value: '@raghavgoyalx', href: 'https://www.instagram.com/raghavgoyalx', icon: Instagram },
];

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/raghavgoyalx/', icon: Instagram },
  { label: 'X', href: 'https://x.com/Raghavgoyalx', icon: XIcon },
  { label: 'Website', href: 'https://www.raghavgoyal.co.uk/', icon: Globe },
  { label: 'GitHub', href: 'https://github.com/raghavgoyalbusiness', icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/raghavgoyal010205/', icon: Linkedin },
  { label: 'Influencer Connect', href: 'https://www.influencer-connect.com/', icon: Briefcase },
  { label: 'YouTube', href: 'https://www.youtube.com/@RaghavGoyalofficialx', icon: YoutubeIcon },
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
          <div className="mt-20 text-center">
            <div className="text-xs uppercase tracking-[0.2em] text-foreground/50 mb-6">
              Find me online
            </div>
            <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
              {socialLinks.map((l) => {
                const Icon = l.icon;
                return (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2.5 rounded-full border border-border bg-surface/40 px-5 py-2.5 text-sm text-foreground/80 hover:border-primary/60 hover:text-primary hover:bg-surface transition-all"
                  >
                    <Icon className="h-4 w-4" />
                    {l.label}
                    <ArrowUpRight className="h-3 w-3 text-foreground/40 group-hover:text-primary transition-all" />
                  </a>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <div className="mt-16 text-center">
            <a
              href="https://www.linkedin.com/in/raghavgoyal010205/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-all glow-amber"
            >
              Connect with me
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

