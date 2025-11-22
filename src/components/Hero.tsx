import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Linkedin, Headphones, MapPin } from 'lucide-react';
import headshotImage from '@/assets/raghav-headshot.jpeg';

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section id="home" className="min-h-screen section-night relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-night via-night to-night-muted opacity-90" />
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="min-h-screen flex items-center py-12 lg:py-0">
          <div className="grid lg:grid-cols-[1fr_380px] gap-8 lg:gap-20 items-center w-full">
            {/* Left Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6 lg:space-y-8 order-2 lg:order-1"
            >
              <motion.div variants={itemVariants} className="space-y-3 text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading leading-tight">
                  Raghav Goyal
                </h1>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-night-foreground/90">
                  Marketing & Partnerships · Influencer Campaigns · Host of{' '}
                  <span className="text-primary">The 3AM Show</span>
                </h2>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg text-night-foreground/80 max-w-2xl leading-relaxed lg:pr-8"
              >
                I'm a marketing and business enthusiast with a passion for building bridges between brands, creators, and communities. 
                From volunteering abroad and leading university initiatives to securing funding for my own startup, Influencer-Connect.com, 
                I've strengthened my skills in influencer marketing, digital strategy, and partnership building.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/raghavgoyal010205"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Linkedin className="h-5 w-5" />
                    Connect on LinkedIn
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-night-border hover:bg-night-muted text-night-foreground font-semibold"
                  asChild
                >
                  <a
                    href="#podcast"
                    className="flex items-center gap-2"
                  >
                    <Headphones className="h-5 w-5" />
                    Listen to The 3AM Show
                  </a>
                </Button>
              </motion.div>

              {/* Location */}
              <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-2 text-night-foreground/70 pt-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">London, England, United Kingdom</span>
              </motion.div>
            </motion.div>

            {/* Right Content - Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="order-1 lg:order-2"
            >
              <div className="relative max-w-[320px] mx-auto lg:mx-0">
                <div className="relative rounded-2xl overflow-hidden border-3 border-primary/30 shadow-2xl hover-lift">
                  <img
                    src={headshotImage}
                    alt="Raghav Goyal - Marketing & Partnerships Professional"
                    className="w-full h-auto object-cover"
                  />
                  {/* Gradient overlay for night theme effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-night/40 to-transparent pointer-events-none"></div>
                </div>
                
                {/* Floating accent cards */}
                <div className="hidden lg:block absolute -bottom-6 -left-6 card-night border-2 border-primary/50 px-4 py-3 hover-lift">
                  <p className="text-sm font-semibold text-primary">Influencer-Connect</p>
                  <p className="text-xs text-night-foreground/70">Startup Founder</p>
                </div>
                <div className="hidden lg:block absolute -top-6 -right-6 card-night border-2 border-accent/50 px-4 py-3 hover-lift">
                  <p className="text-sm font-semibold text-accent">The 3AM Show</p>
                  <p className="text-xs text-night-foreground/70">Podcast Host</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
