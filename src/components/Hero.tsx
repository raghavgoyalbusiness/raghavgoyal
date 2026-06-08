import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import headshot from '@/assets/raghav-headshot.jpeg';

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur px-4 py-1.5 text-xs sm:text-sm text-foreground/70 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for partnerships & founder collabs
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading font-bold text-[clamp(2.75rem,8vw,7rem)] leading-[0.95] tracking-tight text-balance"
          >
            Marketing, <br />
            partnerships <br />
            <span className="text-primary">& AI-powered</span> growth.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 max-w-2xl text-lg sm:text-xl text-foreground/60 leading-relaxed"
          >
            I'm <span className="text-foreground font-medium">Raghav Goyal</span> — founder of{' '}
            <span className="text-foreground">Influencer Connect</span>, AI Forge incubator
            participant, and host of{' '}
            <span className="text-primary">The 3AM Show</span>. I help brands and creators move
            faster with smarter partnerships.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#work"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all glow-amber"
            >
              View my work
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface/40 px-7 py-3.5 text-sm font-semibold text-foreground hover:border-primary/60 hover:bg-surface transition-all"
            >
              Let's work together
            </a>
          </motion.div>

          {/* Mini stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl"
          >
            {[
              { v: '20', l: 'Founder at' },
              { v: '1', l: 'AI agent shipped' },
              { v: '3AM', l: 'Show host' },
              { v: '∞', l: 'Restless energy' },
            ].map((s) => (
              <div key={s.l} className="border-l border-border pl-4">
                <div className="font-heading text-2xl font-semibold text-primary">{s.v}</div>
                <div className="text-xs text-foreground/50 mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating headshot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden xl:block absolute right-10 top-1/2 -translate-y-1/2"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/30 blur-3xl rounded-full" />
            <div className="relative w-[280px] h-[360px] rounded-3xl overflow-hidden border border-primary/30">
              <img src={headshot} alt="Raghav Goyal" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/40 hover:text-primary transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
};
