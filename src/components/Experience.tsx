import { AnimatedSection } from '@/components/AnimatedSection';

const roles = [
  {
    year: '2024 — Now',
    title: 'Founder',
    org: 'Influencer Connect',
    desc: 'Building a smarter way for brands and micro-influencers to find each other. Secured initial funding, currently inside the AI Forge incubator shipping Anton, our AI discovery agent.',
    tags: ['Founder', 'AI', 'Growth'],
  },
  {
    year: '2024 — Now',
    title: 'Host',
    org: 'The 3AM Show',
    desc: 'Long-form conversations with founders, creators, and operators about the unglamorous parts of building. Recorded when most people are asleep.',
    tags: ['Podcast', 'Storytelling'],
  },
  {
    year: '2024',
    title: 'Marketing Intern',
    org: 'Viral Hub Marketing',
    desc: 'Ran influencer activations and paid social campaigns for D2C and lifestyle clients. Briefs to creators to reporting — full loop.',
    tags: ['Influencer', 'Campaigns'],
  },
  {
    year: '2023 — Now',
    title: 'Student Associate',
    org: 'University of Westminster',
    desc: 'Led student initiatives, ran community programmes, and represented the school in entrepreneurship events across London.',
    tags: ['Leadership', 'Community'],
  },
  {
    year: '2023',
    title: 'Volunteer Educator',
    org: 'Think Pacific — Fiji',
    desc: 'Taught in rural Fijian schools and worked on community development projects. Where I learned that the best marketing is just being useful to real people.',
    tags: ['Volunteering', 'Education'],
  },
];

export const Experience = () => {
  return (
    <section id="work" className="py-24 md:py-32 border-t border-border/60">
      <div className="container mx-auto px-6 lg:px-10">
        <AnimatedSection>
          <div className="text-xs uppercase tracking-[0.2em] text-primary mb-4">02 — Work</div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight max-w-3xl text-balance">
              A short timeline of the rooms I've been in.
            </h2>
            <p className="text-foreground/60 max-w-sm">
              From rural Fiji classrooms to AI incubators — every chapter was about finding the
              leverage point.
            </p>
          </div>
        </AnimatedSection>

        <div className="relative">
          <div className="absolute left-0 md:left-[160px] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-4">
            {roles.map((r, i) => (
              <AnimatedSection key={r.title + r.org} delay={i * 0.05}>
                <div className="group relative grid md:grid-cols-[160px_1fr] gap-4 md:gap-12 pl-6 md:pl-0 py-6 rounded-2xl hover:bg-surface/40 transition-colors px-4 -mx-4">
                  <div className="absolute left-0 md:left-[156px] top-9 h-2 w-2 rounded-full bg-primary ring-4 ring-background" />
                  <div className="text-sm text-foreground/50 md:text-right md:pr-8 md:pt-1">
                    {r.year}
                  </div>
                  <div className="md:pl-12">
                    <div className="flex flex-wrap items-baseline gap-x-3">
                      <h3 className="font-heading text-xl sm:text-2xl font-semibold">
                        {r.title}
                      </h3>
                      <span className="text-foreground/40">/</span>
                      <span className="text-primary font-medium">{r.org}</span>
                    </div>
                    <p className="mt-3 text-foreground/70 leading-relaxed max-w-2xl">{r.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {r.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs rounded-full border border-border bg-surface/60 px-3 py-1 text-foreground/60"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
