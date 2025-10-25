import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-background to-background"
        style={{
          backgroundImage: `
            radial-gradient(at 0% 0%, rgba(251, 146, 60, 0.1) 0px, transparent 50%),
            radial-gradient(at 100% 0%, rgba(249, 115, 22, 0.1) 0px, transparent 50%),
            radial-gradient(at 100% 100%, rgba(234, 88, 12, 0.1) 0px, transparent 50%),
            radial-gradient(at 0% 100%, rgba(251, 146, 60, 0.1) 0px, transparent 50%)
          `,
        }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-up">
          <p className="text-lg sm:text-xl text-muted-foreground font-light tracking-wide">
            Hi, I'm
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
              Mithun Raj Urs T V
            </span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground">
            Full-Stack Developer & AI Enthusiast
          </p>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed">
            Building intelligent, scalable web applications with modern technologies.
            Passionate about creating impactful solutions in education and healthcare.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0 min-h-11 px-8 shadow-lg transition-all"
              data-testid="button-view-projects"
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="min-h-11 px-8 hover-elevate"
              data-testid="button-contact-me"
            >
              Contact Me
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
