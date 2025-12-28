import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';
import heroBg from '@/assets/hero-bg.jpg';

export const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
      style={{
        backgroundImage: `linear-gradient(to bottom, hsl(222 47% 6% / 0.85), hsl(222 47% 6% / 0.95)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">Available for opportunities</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Hi, I'm{' '}
              <span className="gradient-text">Tirth Korat</span>
            </h1>

            <h2 className="font-display text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Full Stack / MERN Developer &
              <br />
              Computer Engineering Student
            </h2>

            <p className="text-muted-foreground text-lg mb-8 max-w-lg animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Passionate about building scalable web applications with modern technologies.
              Highly adaptable problem-solver ready to create impactful digital experiences.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button
                variant="hero"
                size="xl"
                onClick={() => scrollToSection('#projects')}
              >
                View Projects
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                variant="heroOutline"
                size="xl"
                onClick={() => scrollToSection('#contact')}
              >
                Contact Me
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div>
                <div className="font-display text-3xl font-bold gradient-text">8.26</div>
                <div className="text-sm text-muted-foreground">CGPA</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold gradient-text">5+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold gradient-text">MERN</div>
                <div className="text-sm text-muted-foreground">Stack</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in-right">
            <div className="relative">
              {/* Glowing border */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-50 animate-pulse-slow" />
              
              {/* Image container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 glow-box">
                <img
                  src={profilePhoto}
                  alt="Tirth Korat - Full Stack Developer"
                  className="w-full h-full object-cover scale-150 object-top"
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -right-4 top-1/4 px-4 py-2 rounded-lg bg-card border border-border shadow-lg animate-float">
                <span className="text-sm font-medium">React.js</span>
              </div>
              <div className="absolute -left-4 bottom-1/4 px-4 py-2 rounded-lg bg-card border border-border shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-sm font-medium">Node.js</span>
              </div>
              <div className="absolute right-8 -bottom-2 px-4 py-2 rounded-lg bg-card border border-border shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                <span className="text-sm font-medium">MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
};
