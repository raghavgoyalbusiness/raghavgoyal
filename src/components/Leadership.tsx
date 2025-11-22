import { Users, Award, Shield, Sparkles } from 'lucide-react';

export const Leadership = () => {
  const leadership = [
    {
      icon: Shield,
      role: 'Student Trustee',
      organization: 'University of Westminster Students\' Union',
      period: 'August 2024 - June 2025',
      description: [
        'Served on board of trustees representing student interests',
        'Participated in strategic decision-making and governance',
      ],
    },
    {
      icon: Users,
      role: 'International Manager',
      organization: 'Westminster Business Consultants',
      period: 'October 2024 - April 2025',
      description: [
        'Established relationships with international partners and Junior Enterprises',
        'Supported international project planning and execution',
        'Represented organization at conferences and events',
        'Developed resources and monitored KPIs',
      ],
    },
    {
      icon: Award,
      role: 'Administrator for EDI Programme',
      organization: 'University of Westminster (Vice-Chancellor\'s Office)',
      period: 'September 2024 - December 2024',
      description: [
        'Supported EDI Programme Manager with event organization',
        'Maintained communications strategy and coordinated events',
        'Managed logistics, travel, and accommodation arrangements',
        'Tracked KPIs and compiled case studies',
      ],
    },
    {
      icon: Sparkles,
      role: 'Equality, Diversity and Inclusion Officer',
      organization: 'University of Westminster',
      period: 'March 2024 - June 2024',
      description: [
        'Worked with EDI Leads to enhance services',
        'Listened to students and developed interventions',
        'Created projects to make Westminster inclusive and welcoming',
      ],
    },
    {
      icon: Users,
      role: 'Ambassador',
      organization: 'Westminster Working Cultures',
      period: 'October 2024 - January 2025',
      description: [
        'Promoted professional development programs',
        'Shared experiences from WWC Dubai and UK programs',
      ],
    },
    {
      icon: Award,
      role: 'Vice President',
      organization: 'Entrepreneurship Society',
      period: 'September 2023 - May 2024',
      description: [
        'Led entrepreneurship initiatives and society activities',
        'Organized events and workshops for student entrepreneurs',
      ],
    },
    {
      icon: Users,
      role: 'Orientation Leader',
      organization: 'University of Westminster (PG FANS)',
      period: 'January 2025 - February 2025',
      description: [
        'Welcomed and guided new postgraduate students',
        'Facilitated smooth transition into university life',
      ],
    },
    {
      icon: Sparkles,
      role: 'Mentee',
      organization: 'Future Ready Mentoring at Westminster',
      period: 'April 2024 - June 2024',
      description: [
        'Participated in structured mentoring program',
        'Developed professional skills and career guidance',
      ],
    },
  ];

  return (
    <section id="leadership" className="section-light py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center text-gradient-primary">
          Leadership & Volunteering
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {leadership.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-card border-2 border-border rounded-lg p-6 hover-lift transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg leading-tight">{item.role}</h3>
                    <p className="text-sm text-primary font-medium">{item.organization}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.period}</p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {item.description.map((desc, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                      <span className="text-sm text-foreground/70">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
