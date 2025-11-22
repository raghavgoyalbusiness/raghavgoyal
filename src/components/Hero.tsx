import { Button } from '@/components/ui/button';
import { Linkedin, Headphones, MapPin } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen section-night relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-night via-night to-night-muted opacity-90" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full py-20">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <p className="text-accent text-sm md:text-base font-medium tracking-wide uppercase">
                  Built at 3AM
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading leading-tight">
                  Raghav Goyal
                </h1>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-night-foreground/90">
                  Marketing & Partnerships · Influencer Campaigns · Host of{' '}
                  <span className="text-primary">The 3AM Show</span>
                </h2>
              </div>

              <p className="text-base sm:text-lg text-night-foreground/80 max-w-2xl leading-relaxed">
                I'm a marketing and business enthusiast with a passion for building bridges between brands, creators, and communities. 
                From volunteering abroad and leading university initiatives to securing funding for my own startup, Influencer-Connect.com, 
                I've strengthened my skills in influencer marketing, digital strategy, and partnership building.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
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
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-night-foreground/70">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">London, England, United Kingdom</span>
              </div>
            </div>

            {/* Right Content - Card Stack */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="space-y-4">
                  {[
                    { name: 'Influencer-Connect', label: 'Startup', color: 'primary' },
                    { name: 'NK Sales Centre', label: 'Family Business', color: 'accent' },
                    { name: 'Think Pacific', label: 'Global Project', color: 'primary' },
                    { name: 'WeNetwork', label: 'Community', color: 'accent' },
                  ].map((item, index) => (
                    <div
                      key={item.name}
                      className="card-night hover-lift border-2 border-night-border transform transition-all duration-300"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                      }}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                              item.color === 'primary'
                                ? 'bg-primary/20 text-primary'
                                : 'bg-accent/20 text-accent'
                            }`}
                          >
                            {item.label}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
