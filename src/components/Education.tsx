import { GraduationCap, Award, BookOpen } from 'lucide-react';

export const Education = () => {
  const education = [
    {
      institution: 'University of Westminster',
      degree: 'Bachelor of Business Administration (Marketing)',
      field: 'Business, Management, Marketing, and Related Support Services',
      period: 'September 2022 - June 2025',
      icon: GraduationCap,
    },
    {
      institution: 'Experience Haus',
      degree: 'Product Design',
      field: 'Industry Design',
      period: 'January 2025 - March 2025',
      icon: BookOpen,
    },
    {
      institution: 'Jayshree Periwal International School',
      degree: 'High School Diploma',
      field: 'Business Administration and Management, General',
      period: 'March 2020 - May 2022',
      icon: GraduationCap,
    },
  ];

  const certifications = [
    'Foundations of Diversity, Equity, Inclusion, and Belonging',
    'Westminster Employability Award - Platinum',
    'Microsoft Certified: Azure AI Fundamentals',
    'Editing Mastery for Short-Form Content Using CapCut',
  ];

  return (
    <section id="education" className="section-light py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center text-gradient-primary">
          Education & Certifications
        </h2>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="h-7 w-7 text-primary" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => {
                const Icon = edu.icon;
                return (
                  <div
                    key={index}
                    className="bg-card border-2 border-border rounded-lg p-6 hover-lift transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-1">{edu.degree}</h4>
                        <p className="text-lg font-medium text-primary mb-2">{edu.institution}</p>
                        <p className="text-sm text-foreground/70 mb-2">{edu.field}</p>
                        <p className="text-sm text-muted-foreground">{edu.period}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Award className="h-7 w-7 text-accent" />
              Certifications
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-card border-2 border-border rounded-lg p-5 hover-lift transition-all duration-300 flex items-start gap-3"
                >
                  <Award className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-foreground/80">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
