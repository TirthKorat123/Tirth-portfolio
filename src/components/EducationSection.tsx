import { GraduationCap, Award } from 'lucide-react';

export const EducationSection = () => {
  const education = [
    {
      degree: 'B.E. Computer Engineering',
      institution: 'Gujarat Technological University (GEC Rajkot)',
      duration: '2022 - 2026',
      score: 'CGPA: 8.26 | CPI: 8.51',
      current: true,
    },
    {
      degree: 'Higher Secondary (12th)',
      institution: 'Wisdom International School',
      duration: '2021 - 2022',
      score: 'Percentage: 84.92%',
      current: false,
    },
    {
      degree: 'Secondary (10th)',
      institution: 'Wisdom International School',
      duration: '2019 - 2020',
      score: 'Percentage: 84.67%',
      current: false,
    },
  ];

  return (
    <section id="education" className="py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Education</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
            Academic <span className="gradient-text">Journey</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            {education.map((item, index) => (
              <div key={index} className="relative flex gap-6 pb-12 last:pb-0">
                {/* Timeline dot */}
                <div className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${
                  item.current 
                    ? 'bg-primary shadow-lg shadow-primary/30' 
                    : 'bg-secondary border-2 border-primary/30'
                }`}>
                  <GraduationCap className={`w-7 h-7 ${item.current ? 'text-primary-foreground' : 'text-primary'}`} />
                </div>

                {/* Content card */}
                <div className="flex-1 p-6 rounded-xl bg-card border border-border card-hover">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-display text-xl font-bold">{item.degree}</h3>
                      <p className="text-muted-foreground">{item.institution}</p>
                    </div>
                    {item.current && (
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary">
                        Current
                      </span>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <span className="text-muted-foreground">{item.duration}</span>
                    <div className="flex items-center gap-1 text-primary font-medium">
                      <Award className="w-4 h-4" />
                      {item.score}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
