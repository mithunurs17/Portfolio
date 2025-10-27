import { ChevronDown } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';

export function Hero() {
  const { theme } = useTheme();
  
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
        className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
          theme === 'dark' 
            ? 'bg-zinc-950 text-white' 
            : 'bg-gradient-to-br from-slate-50 via-white to-slate-100 text-zinc-900'
        }`}
      >
      {/* 2. Removed the light-mode background div */}

      {/* Dynamic background based on theme */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: theme === 'dark' 
            ? `radial-gradient(ellipse at 100% 0%, rgba(150, 100, 80, 0.1) 0px, transparent 60%)`
            : `radial-gradient(ellipse at 100% 0%, rgba(251, 146, 60, 0.1) 0px, transparent 60%)`,
        }}
      />

      {/* 4. Removed the light-mode grid pattern div */}
      
      {/* Hexagon pattern - theme aware */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: theme === 'dark'
            ? 'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(60deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(-60deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)'
            : 'linear-gradient(rgba(0, 0, 0, 0.02) 1px, transparent 1px), linear-gradient(60deg, rgba(0, 0, 0, 0.02) 1px, transparent 1px), linear-gradient(-60deg, rgba(0, 0, 0, 0.02) 1px, transparent 1px)',
          backgroundSize: '34px 60px',
          backgroundPosition: '0 0, 0 0, 0 0',
        }}
      />

      {/* Scattered SVG hexagons - theme aware */}
      {/* Top-left hexagons */}
      <div className="absolute top-20 left-20 w-48 h-48 opacity-50 pointer-events-none">
        <svg width="100" height="115" viewBox="0 0 100 115" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 transform -rotate-12">
          <path d="M50 0L93.3013 28.75V86.25L50 115L6.69873 86.25V28.75L50 0Z" fill={theme === 'dark' ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.03)"}/>
        </svg>
        <svg width="80" height="92" viewBox="0 0 100 115" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-16 left-24 transform rotate-12">
          <path d="M50 0L93.3013 28.75V86.25L50 115L6.69873 86.25V28.75L50 0Z" fill={theme === 'dark' ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.03)"}/>
        </svg>
      </div>

      {/* Top-right hexagons */}
      <div className="absolute top-10 right-10 w-64 h-64 opacity-70 pointer-events-none">
        <svg width="120" height="138" viewBox="0 0 100 115" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 right-0 transform rotate-12">
          <path d="M50 0L93.3013 28.75V86.25L50 115L6.69873 86.25V28.75L50 0Z" fill={theme === 'dark' ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.03)"}/>
        </svg>
        <svg width="90" height="104" viewBox="0 0 100 115" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-24 right-32 transform -rotate-6">
          <path d="M50 0L93.3013 28.75V86.25L50 115L6.69873 86.25V28.75L50 0Z" fill={theme === 'dark' ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.03)"}/>
        </svg>
        <svg width="70" height="81" viewBox="0 0 100 115" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-48 right-10 transform rotate-45">
          <path d="M50 0L93.3013 28.75V86.25L50 115L6.69873 86.25V28.75L50 0Z" fill={theme === 'dark' ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.03)"}/>
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left side - Text content */}
          <div className="flex-1 text-center lg:text-left space-y-8 animate-fade-up">
            {/* Theme-aware text colors */}
            <p className={`text-lg sm:text-xl font-light tracking-wide ${
              theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              Hi, I'm
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight whitespace-nowrap">
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
                Mithun Raj Urs T V
              </span>
            </h1>

            {/* Theme-aware text colors */}
            <p className={`text-xl sm:text-2xl md:text-3xl font-semibold ${
              theme === 'dark' ? 'text-zinc-100' : 'text-zinc-800'
            }`}>
              Full-Stack Developer & AI Enthusiast
            </p>

            <p className={`max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed ${
              theme === 'dark' ? 'text-zinc-300' : 'text-zinc-600'
            }`}>
              Building intelligent, scalable web applications with modern technologies.
              Passionate about creating impactful solutions in education and healthcare.
            </p>

            {/* Enhanced CTA Section */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-6">
              <Button
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white shadow-lg hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300 hover:-translate-y-1 px-8 py-3"
                data-testid="button-view-projects"
              >
                View My Work
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('about')}
                className="border-orange-400/30 text-orange-600 dark:text-orange-400 hover:bg-orange-400/10 hover:border-orange-400/50 transition-all duration-300 px-8 py-3"
              >
                More About Me
              </Button>
            </div>

            {/* Stats Section */}
            {/* <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500 mb-1">4+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500 mb-1">10+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div> */}
          </div>

          {/* Right side - Image with spotlight effect */}
          <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Theme-aware spotlight effect */}
                <div className={`absolute -top-1/4 inset-x-0 h-1/2 blur-3xl ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-b from-orange-500/25 to-transparent' 
                    : 'bg-gradient-to-b from-orange-400/20 to-transparent'
                }`}></div>

             {/* Image container */}
<div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-black">
  <img
    src="/assets/image.png"
    alt="Mithun Raj Urs T V"
    className="w-full h-full object-cover object-center"
    style={{
      filter: 'contrast(1.1) brightness(1.05) saturate(1.1)',
    }}
  />

  {/* Full black fade background blending with edges */}
  <div
    className="absolute inset-0 rounded-full pointer-events-none"
    style={{
      background:
        'radial-gradient(circle at center, rgba(0,0,0,0) 75%, rgba(0,0,0,1) 100%)',
    }}
  />

  {/* Soft glow ring for smooth blending */}
  <div
    className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500/10 via-transparent to-orange-600/10"
  ></div>

  {/* Gentle top light overlay */}
  <div
    className="absolute inset-0 rounded-full bg-gradient-to-b from-orange-500/10 via-transparent to-transparent"
  ></div>
</div>



            </div>
          </div>
        </div>

        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle ${
          theme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'
        }`}>
          <ChevronDown className="h-6 w-6" />
        </div>
      </div>
    </section>
  );
}

