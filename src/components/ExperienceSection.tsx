import { Briefcase, Calendar, Building } from 'lucide-react';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Experience</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-card border border-border card-hover relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            
            <div className="relative">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Building className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold">Data Analytics Intern</h3>
                  <p className="text-primary font-medium text-lg">IBM (CSRBOX Program)</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>15 Days</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Briefcase className="w-4 h-4" />
                  <span>Data Analytics</span>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-muted-foreground">Key Learnings & Highlights:</p>
                <ul className="space-y-2">
                  {[
                    'Gained valuable industry exposure in data analytics',
                    'Learned foundational analytics concepts and methodologies',
                    'Participated in practical training sessions',
                    'Collaborated with professionals on real-world scenarios',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
