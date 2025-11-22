import { Rocket, Globe, TrendingUp, Target } from 'lucide-react';
import travelImage from '@/assets/raghav-travel.jpeg';
import influencerConnectBg from '@/assets/influencer-connect-bg.jpg';
import marketingDashboard from '@/assets/marketing-dashboard.jpg';

export const Projects = () => {
  const projects = [
    {
      icon: Rocket,
      title: 'Influencer-Connect.com',
      category: 'Startup',
      description: 'A platform connecting brands and creators, securing funding through university entrepreneurship initiatives.',
      outcomes: [
        'Built from ground up: strategy, product, and partnerships',
        'Secured funding for development and launch',
        'Focused on bridging the gap between brands and influencer marketing',
      ],
      color: 'primary',
      image: influencerConnectBg,
    },
    {
      icon: Globe,
      title: 'Think Pacific Projects',
      category: 'Global Impact',
      description: 'Digital transformation and capacity-building for social enterprises in Chiang Mai, Thailand.',
      outcomes: [
        'Led UX audits and built e-commerce storefront for Studio Naenna',
        'Designed onboarding toolkit for Bella Goose Café',
        'Delivered website and social media audits for Superbee',
        'Conducted public workshops on digital skills and entrepreneurship',
      ],
      color: 'accent',
      image: travelImage,
    },
    {
      icon: TrendingUp,
      title: 'NK Sales Centre Modernisation',
      category: 'Family Business',
      description: 'First marketing manager role transforming a traditional family business into a digital-first operation.',
      outcomes: [
        'Built complete digital foundation: website, social media, Google Business',
        'Launched multi-channel campaigns driving 30%+ engagement',
        'Created first internship program bringing fresh talent',
        'Implemented pricing and competitor research models',
      ],
      color: 'primary',
      image: marketingDashboard,
    },
    {
      icon: Target,
      title: 'Convogue Campaign Management',
      category: 'Influencer Marketing',
      description: 'Built and managed comprehensive influencer database and client acquisition pipeline.',
      outcomes: [
        'Researched and categorized creators using top influencer marketing platforms',
        'Reached out to 100+ potential clients daily achieving 35% response rate',
        '2.5% conversion rate from outreach to closed deals',
        'Managed end-to-end process with Airtable, Notion, and HubSpot',
      ],
      color: 'accent',
    },
  ];

  return (
    <section id="projects" className="section-light py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center text-gradient-primary">
          Projects & Impact
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="bg-card border-2 border-border rounded-lg overflow-hidden hover-lift transition-all duration-300"
              >
                {/* Project Image (if available) */}
                {project.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
                  </div>
                )}

                <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3 rounded-lg ${project.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'}`}>
                      <Icon className={`h-8 w-8 ${project.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                          project.color === 'primary'
                            ? 'bg-primary/20 text-primary'
                            : 'bg-accent/20 text-accent-foreground'
                        }`}
                      >
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-foreground/80 mb-6">{project.description}</p>

                  <div>
                    <h4 className="text-sm font-semibold mb-3 text-foreground/70">Key Outcomes:</h4>
                    <ul className="space-y-2">
                      {project.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className={`mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 ${
                            project.color === 'primary' ? 'bg-primary' : 'bg-accent'
                          }`}></span>
                          <span className="text-sm text-foreground/70">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
