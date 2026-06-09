import { AnimatedSection } from '@/components/AnimatedSection';
import { ArrowUpRight, Sparkles, Users } from 'lucide-react';

const projects = [
  {
    name: 'Anton',
    tagline: 'AI agent for micro-influencer discovery',
    desc: 'Anton scans the long-tail of creator platforms to surface the right micro-influencers for a brief in minutes — not weeks. Built inside the AI Forge incubator.',
    status: 'In incubation',
    icon: Sparkles,
    accent: true,
  },
  {
    name: 'Influencer Connect',
    tagline: 'The company',
    desc: 'A smarter matchmaking layer between brands and creators. Funded, building, and growing — focused on making partnerships less of a guessing game.',
    status: 'Founder',
    icon: Users,
    accent: false,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 border-t border-border/60">
      <div className="container mx-auto px-6 lg:px-10">
        <AnimatedSection>
          <div className="text-xs uppercase tracking-[0.2em] text-primary mb-4">03 — Builds</div>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight max-w-3xl mb-16 text-balance">
            Things I'm actively building.
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <AnimatedSection key={p.name} delay={i * 0.1}>
                <div
                  className={`group relative overflow-hidden rounded-3xl border ${
                    p.accent
                      ? 'border-primary/40 bg-gradient-to-br from-primary/10 via-surface to-surface'
                      : 'border-border bg-surface/60'
                  } p-8 sm:p-10 h-full hover:border-primary/60 transition-all`}
                >
                  <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-colors" />

                  <div className="relative flex items-start justify-between mb-8">
                    <div
                      className={`h-12 w-12 rounded-2xl flex items-center justify-center ${
                        p.accent ? 'bg-primary text-primary-foreground' : 'bg-surface-elevated text-primary border border-border'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs uppercase tracking-wider text-foreground/50 border border-border rounded-full px-3 py-1">
                      {p.status}
                    </span>
                  </div>

                  <h3 className="font-heading text-3xl sm:text-4xl font-bold mb-2">{p.name}</h3>
                  <p className="text-primary text-sm font-medium mb-4">{p.tagline}</p>
                  <p className="text-foreground/70 leading-relaxed mb-8">{p.desc}</p>

                  <div className="flex items-center gap-2 text-sm text-foreground/60 group-hover:text-primary transition-colors">
                    <span>Read about {p.name}</span>
                    <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};
