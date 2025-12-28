import { Code, Database, GitBranch, Users, MessageSquare, Lightbulb } from 'lucide-react';

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Programming & Web',
      icon: Code,
      skills: [
        { name: 'Java', level: 85 },
        { name: 'HTML & CSS', level: 90 },
        { name: 'JavaScript', level: 88 },
        { name: 'React.js', level: 85 },
        { name: 'Node.js', level: 80 },
      ],
    },
    {
      title: 'Databases',
      icon: Database,
      skills: [
        { name: 'MongoDB', level: 72 },
        { name: 'MySQL', level: 78 },
        { name: 'SQL', level: 80 },
      ],
    },
    {
      title: 'Tools & Platforms',
      icon: GitBranch,
      skills: [
        { name: 'Git', level: 85 },
        { name: 'GitHub', level: 88 },
        { name: 'VS Code', level: 90 },
      ],
    },
  ];

  const softSkills = [
    { name: 'Problem Solving', icon: Lightbulb },
    { name: 'Teamwork', icon: Users },
    { name: 'Communication', icon: MessageSquare },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Skills</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="p-6 rounded-2xl bg-card border border-border card-hover"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {softSkills.map((skill, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card border border-border card-hover text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <skill.icon className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-display text-lg font-semibold">{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
