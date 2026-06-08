import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Projects', href: '#projects' },
  { name: 'Podcast', href: '#podcast' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/70 backdrop-blur-xl border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="group flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary group-hover:scale-125 transition-transform" />
            <span className="font-heading font-semibold tracking-tight text-foreground">
              Raghav<span className="text-primary">.</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm text-foreground/60 hover:text-foreground transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-3 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Let's talk →
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            className="md:hidden p-2 text-foreground"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-foreground/80 hover:text-primary transition-colors border-b border-border/40 last:border-0"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.nav>
  );
};
