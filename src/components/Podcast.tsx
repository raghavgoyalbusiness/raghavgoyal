import { Button } from '@/components/ui/button';
import { Headphones, Mic, Users, Heart } from 'lucide-react';

export const Podcast = () => {
  const features = [
    {
      icon: Mic,
      title: 'Solo Episodes',
      description: 'Honest personal stories and practical tools from late-night reflections',
    },
    {
      icon: Users,
      title: 'Guest Stories',
      description: 'Founders, creatives, therapists who turned hard nights into success',
    },
    {
      icon: Heart,
      title: 'Guided Check-ins',
      description: 'Small steps and prompts to help make mornings easier',
    },
  ];

  return (
    <section id="podcast" className="section-night py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-night via-night-muted to-night opacity-90" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gradient-primary">
              The 3AM Show
            </h2>
            <p className="text-xl text-night-foreground/90 italic">
              A late-night podcast for the quiet, the restless, and the people who do their best thinking when the world is asleep
            </p>
          </div>

          <div className="space-y-8 mb-12">
            <div className="card-night border-2 border-night-border">
              <p className="text-lg text-night-foreground/90 leading-relaxed">
                I started this show from a place of <span className="text-primary font-medium">insomnia</span>, awkward school years, 
                family trauma and a lot of nights spent replaying the same questions in my head. Over time I learned that those sleepless 
                hours can be turned into something useful: honest stories, small practical steps, and real conversations that help you move forward.
              </p>
            </div>

            <div className="card-night border-2 border-night-border">
              <p className="text-lg text-night-foreground/90 leading-relaxed">
                On this show I talk about <span className="text-accent font-medium">bullying, grief, self-help, anxiety</span> and the slow 
                work of rebuilding, but I don't stop there. I bring on founders, creatives, therapists and people who turned hard nights into 
                businesses, projects and new lives.
              </p>
            </div>

            <div className="card-night border-2 border-night-border">
              <h3 className="text-xl font-semibold mb-4">Each episode mixes:</h3>
              <ul className="space-y-3">
                {[
                  'Honest stories and personal experiences',
                  'Micro-routines that steady your nervous system',
                  'Tiny resilience practices',
                  'Messy, human lessons behind starting something from scratch',
                  'Concrete tools you can try tomorrow',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Headphones className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-night-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="card-night text-center hover-lift border-2 border-night-border">
                  <Icon className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-night-foreground/70">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-lg text-night-foreground/90 mb-6 italic">
              If you're awake at 3 AM or just carrying a 3 AM feeling inside you — this is a place to be seen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                asChild
              >
                <a href="https://open.spotify.com/show/your-show-id" target="_blank" rel="noopener noreferrer">
                  Listen on Spotify
                </a>
              </Button>
              <Button
                size="lg"
                className="bg-night-foreground hover:bg-night-foreground/90 text-night font-semibold"
                asChild
              >
                <a href="https://podcasts.apple.com/podcast/your-podcast-id" target="_blank" rel="noopener noreferrer">
                  Listen on Apple Podcasts
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-night-border hover:bg-night-muted text-night-foreground font-semibold"
                asChild
              >
                <a href="#podcast">All Episodes</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
