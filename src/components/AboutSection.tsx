import { MapPin, Code, Rocket } from 'lucide-react';

export const AboutSection = () => {
  const highlights = [
    { icon: MapPin, text: 'Based in Gujarat, India' },
    { icon: Code, text: 'Passionate about full-stack web development' },
    { icon: Rocket, text: 'Eager to work on real-world projects' },
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">About Me</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
            Know Me <span className="gradient-text">Better</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a Computer Engineering student with a solid foundation in programming and 
              Object-Oriented Software Development. I aim to apply my technical expertise and 
              logical thinking in a Full Stack Developer role.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am highly adaptable, enjoy problem-solving, and continuously seek opportunities 
              to learn and grow in real-world development environments. My goal is to build 
              impactful applications that solve real problems.
            </p>
          </div>

          <div className="space-y-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-foreground font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
