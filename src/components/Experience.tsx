import { useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  description?: string;
  bullets: string[];
  featured?: boolean;
}

export const Experience = () => {
  const [showEarlier, setShowEarlier] = useState(false);

  const featuredExperience: ExperienceItem[] = [
    {
      company: 'WeNetwork',
      role: 'Administrative Assistant',
      location: 'London Area, United Kingdom',
      period: 'October 2025 - Present',
      bullets: [
        'Supported end-to-end event operations, including in-class inductions and programme delivery for WeNetwork',
        'Conducted data analysis on programme attendance and feedback, enhancing reporting accuracy',
        'Promoted events online and offline, increasing engagement among students and academic staff by 30%',
        'Collaborated with cross-departmental teams to improve coordination, reducing workload by 20%',
      ],
      featured: true,
    },
    {
      company: 'The 3AM Show',
      role: 'Podcast Host',
      location: 'Remote',
      period: 'September 2025 - Present',
      description: 'A late-night podcast for the quiet, the restless, and the people who do their best thinking when the world is asleep.',
      bullets: [
        'Started from a place of insomnia, awkward school years, family trauma and learned to turn sleepless hours into something useful',
        'Topics include bullying, grief, self-help, anxiety and the slow work of rebuilding',
        'Bring on founders, creatives, therapists and people who turned hard nights into businesses and projects',
        'Mix personal stories with concrete tools: micro-routines, resilience practices, and tactical help',
      ],
      featured: true,
    },
    {
      company: 'Convogue',
      role: 'Campaign Manager',
      location: 'Delhi, India',
      period: 'September 2025',
      bullets: [
        'Researched and built an influencer database using Modash, Sprout Social, Upfluence, and Tagger Media',
        'Built and managed client pipeline by reaching out to 100+ potential clients daily using Apollo.io',
        'Achieved 35% response rate and 2.5% conversion to deals',
        'Managed client process with Airtable, Notion and HubSpot',
      ],
      featured: true,
    },
    {
      company: 'Think Pacific',
      role: 'Global Team Internship',
      location: 'Chiang Mai, Thailand',
      period: 'August 2025',
      bullets: [
        'Delivered digital transformation projects for local social enterprises in Chiang Mai',
        'Led UX and website audits, built e-commerce storefront for Studio Naenna',
        'Designed onboarding toolkit for Bella Goose Café to standardize workflows',
        'Conducted website and social-media audits for Superbee with actionable roadmaps',
        'Planned and delivered public workshops on digital skills and entrepreneurship',
      ],
      featured: true,
    },
    {
      company: 'NK Sales Centre',
      role: 'Marketing Manager',
      location: 'Delhi, India',
      period: 'June 2025 - August 2025',
      description: 'First marketing manager in this long-standing family-run business.',
      bullets: [
        'Built NK\'s digital foundation from scratch: LinkedIn, website, Google Business, social media',
        'Designed and launched multi-channel marketing campaigns across Instagram, WhatsApp, hyperlocal platforms',
        'Revamped brand storytelling for mosquito nets and pest control products',
        'Developed and launched NK\'s first-ever internship program',
        'Implemented pricing & competitor research models',
      ],
      featured: true,
    },
    {
      company: 'University of Westminster Students\' Union',
      role: 'Student Trustee',
      location: 'London Area, United Kingdom',
      period: 'August 2024 - June 2025',
      bullets: [
        'Served on the board of trustees representing student interests',
        'Participated in strategic decision-making and governance',
      ],
    },
    {
      company: 'University of Westminster',
      role: 'Student Ambassador',
      location: 'London, England, United Kingdom',
      period: 'September 2023 - June 2025',
      bullets: [
        'Assisted with open days, applicant visit days and information evenings',
        'Delivered talks about course and student life',
        'Supported campus tours and visits from local schools',
        'Supported during arrivals and enrolment',
      ],
    },
    {
      company: 'University of Westminster',
      role: 'Administrator for EDI Programme',
      location: 'London Area, United Kingdom',
      period: 'September 2024 - December 2024',
      bullets: [
        'Provided administrative support to the EDI Programme Manager',
        'Assisted in organizing events related to the EDI Programme',
        'Maintained communications strategy, coordinated events, managed KPIs',
        'Coordinated travel, accommodation bookings, and visa arrangements',
      ],
    },
    {
      company: 'Westminster Business Consultants',
      role: 'International Manager',
      location: 'London Area, United Kingdom',
      period: 'October 2024 - April 2025',
      bullets: [
        'Identified and maintained relationships with international partners and Junior Enterprises',
        'Supported development of partnership agreements',
        'Assisted in planning and execution of international projects',
        'Represented the organisation at international conferences and events',
      ],
    },
  ];

  const earlierExperience: ExperienceItem[] = [
    {
      company: 'University of Westminster',
      role: 'Equality, Diversity and Inclusion Officer',
      location: 'London Area, United Kingdom',
      period: 'March 2024 - June 2024',
      bullets: [
        'Worked with EDI Leads to enhance services for Equality, Diversity and Inclusion',
        'Listened to students and developed interventions and projects',
      ],
    },
    {
      company: 'The University of Westminster Students\' Union',
      role: 'Vice President (Entrepreneurship Society)',
      location: 'London, England, United Kingdom',
      period: 'September 2023 - May 2024',
      bullets: ['Led entrepreneurship initiatives and society activities'],
    },
    {
      company: 'University of Westminster',
      role: 'Marketing And Promotions Intern',
      location: 'London Area, United Kingdom',
      period: 'April 2023 - June 2023',
      bullets: [
        'Organized classical music concerts, developed website, edited media',
        'Promoted concerts using social media and university channels',
        'Conducted post-event evaluation and data analysis',
      ],
    },
    {
      company: 'MentorBoxx',
      role: 'Marketing & Strategy Intern',
      location: 'Pune, Maharashtra',
      period: 'August 2022 - September 2022',
      bullets: ['Supported marketing and strategic planning initiatives'],
    },
    {
      company: 'CollegeTips.in',
      role: 'Intern',
      location: 'Delhi, India',
      period: 'May 2021 - August 2022',
      bullets: ['Contributed to content and operations'],
    },
    {
      company: 'Jayshree Periwal International School',
      role: 'School Captain',
      location: 'Jaipur, Rajasthan, India',
      period: 'July 2020 - August 2021',
      bullets: ['Led student body and represented school at events'],
    },
  ];

  const ExperienceCard = ({ exp }: { exp: ExperienceItem }) => (
    <div className="relative pl-8 pb-12 last:pb-0">
      {/* Timeline dot */}
      <div className={`absolute left-0 top-0 w-4 h-4 rounded-full ${exp.featured ? 'bg-primary' : 'bg-accent'} border-4 border-background`}></div>
      
      {/* Timeline line */}
      <div className="absolute left-[7px] top-4 bottom-0 w-0.5 bg-border"></div>

      <div className={`rounded-lg border ${exp.featured ? 'border-primary/30 bg-primary/5' : 'border-border bg-card'} p-6 hover-lift`}>
        <div className="space-y-3">
          <div>
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-lg font-medium text-primary">{exp.company}</p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{exp.period}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{exp.location}</span>
            </div>
          </div>

          {exp.description && (
            <p className="text-foreground/80 italic">{exp.description}</p>
          )}

          <ul className="space-y-2">
            {exp.bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Briefcase className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span className="text-sm text-foreground/80">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <section id="experience" className="section-light py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center text-gradient-primary">
          Experience Timeline
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Featured Experience */}
          <div>
            {featuredExperience.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} />
            ))}
          </div>

          {/* Earlier Experience - Collapsible */}
          <div className="mt-8">
            <Button
              variant="outline"
              onClick={() => setShowEarlier(!showEarlier)}
              className="w-full flex items-center justify-center gap-2"
            >
              {showEarlier ? (
                <>
                  <ChevronUp className="h-4 w-4" />
                  Hide Earlier Experience
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4" />
                  Show Earlier Experience
                </>
              )}
            </Button>

            {showEarlier && (
              <div className="mt-8">
                {earlierExperience.map((exp, index) => (
                  <ExperienceCard key={index} exp={exp} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
