export const Skills = () => {
  const skills = [
    'Influencer & Creator Partnerships',
    'Content Creation & Strategy',
    'Analytics & Optimization',
    'Project Management',
    'Stakeholder Management',
    'Digital Marketing',
    'Social Media Management',
    'Campaign Planning',
    'Brand Storytelling',
    'Community Building',
  ];

  const tools = [
    'PowerPoint',
    'Canva',
    'HubSpot',
    'Google Analytics',
    'Modash',
    'Sprout Social',
    'Upfluence',
    'Tagger Media',
    'Apollo.io',
    'Airtable',
    'Notion',
    'HashFame',
  ];

  return (
    <section id="skills" className="section-light py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center text-gradient-primary">
          Skills & Tools
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-1 h-8 bg-primary rounded-full"></span>
              Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover-lift border border-primary/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-1 h-8 bg-accent rounded-full"></span>
              Tools
            </h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-accent/10 text-accent-foreground rounded-full text-sm font-medium hover-lift border border-accent/20"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
