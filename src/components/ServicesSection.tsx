import { Code, Database, Globe, Server, Layers, Users } from 'lucide-react';

export const ServicesSection = () => {
  const services = [
    {
      icon: Layers,
      title: 'MERN Stack Development',
      description: 'Build responsive, scalable web applications using MongoDB, Express.js, React, and Node.js.',
    },
    {
      icon: Globe,
      title: 'Frontend Development',
      description: 'Create modern, interactive user interfaces with React, HTML5, CSS3, and JavaScript.',
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Develop robust APIs, authentication systems, and database handling with Node.js and Express.',
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Design and implement efficient database schemas using MongoDB and MySQL.',
    },
  ];

  const targetAudience = [
    'Students needing project assistance',
    'Startups looking for MVP development',
    'Small businesses requiring web presence',
    'Project owners seeking technical expertise',
  ];

  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Services</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
            What I <span className="gradient-text">Do</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border card-hover relative overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Target Audience */}
        <div className="p-8 rounded-2xl bg-card border border-border">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-primary" />
            <h3 className="font-display text-xl font-bold">Who I Work With</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {targetAudience.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg bg-secondary"
              >
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
