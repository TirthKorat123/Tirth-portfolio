import { ExternalLink, Github, Hotel, DollarSign, Shirt, Gamepad2, Layout } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ProjectsSection = () => {
  const projects = [
    {
      title: 'Hotel Management System',
      description: 'Console-based application for managing hotel operations including room booking, guest registration, billing, and staff management.',
      tech: ['Java', 'JDBC', 'MySQL'],
      icon: Hotel,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Expense Tracker (Web)',
      description: 'Track income and expenses, calculate balance, and save data locally. Features clean UI and intuitive user experience.',
      tech: ['HTML', 'CSS', 'JavaScript', 'localStorage'],
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Expense Tracker (MERN)',
      description: 'Full-stack expense tracking application with database persistence, user authentication, and modern responsive UI.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      icon: Layout,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'SurTexPro',
      description: 'Textile market management app that tracks orders, clients, products, payments, material details, and completion status.',
      tech: ['MERN Stack', 'REST API'],
      icon: Shirt,
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Tic-Tac-Toe Game',
      description: 'Browser-based 2-player game with win/draw logic, score tracking, and smooth animations.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      icon: Gamepad2,
      color: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Portfolio</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border card-hover flex flex-col"
            >
              {/* Project icon with gradient background */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <project.icon className="w-7 h-7 text-foreground" />
              </div>

              <h3 className="font-display text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 mt-auto">
                <Button variant="outline" size="sm" className="flex-1">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Details
                </Button>
                <Button variant="ghost" size="sm">
                  <Github className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
