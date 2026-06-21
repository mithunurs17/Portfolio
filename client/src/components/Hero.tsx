import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';

const SPOTLIGHT_R = 260;

// Exact asset URLs from the Lithos spec — swap these for your own images whenever you're ready.
const BG_IMAGE_1 =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_195923_b0ba8ace-1d1d-4f2c-9a28-1ab84b330680.png&w=1280&q=85';
const BG_IMAGE_2 =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_201152_bba90a12-bf12-459f-91f0-51f237dbaf3b.png&w=1280&q=85';

interface RevealLayerProps {
  image: string;
  cursorX: number;
  cursorY: number;
}

function RevealLayer({ image, cursorX, cursorY }: RevealLayerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [maskUrl, setMaskUrl] = useState('');

  // Size the hidden canvas to the viewport
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  // Redraw the soft spotlight gradient every time the cursor moves
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const gradient = ctx.createRadialGradient(cursorX, cursorY, 0, cursorX, cursorY, SPOTLIGHT_R);
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.4, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.6, 'rgba(255,255,255,0.75)');
    gradient.addColorStop(0.75, 'rgba(255,255,255,0.4)');
    gradient.addColorStop(0.88, 'rgba(255,255,255,0.12)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(cursorX, cursorY, SPOTLIGHT_R, 0, Math.PI * 2);
    ctx.fill();

    setMaskUrl(canvas.toDataURL());
  }, [cursorX, cursorY]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ display: 'none' }}
      />
      <div
        className="absolute inset-0 z-30 bg-center bg-cover bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: `url(${image})`,
          maskImage: maskUrl ? `url(${maskUrl})` : undefined,
          WebkitMaskImage: maskUrl ? `url(${maskUrl})` : undefined,
          maskSize: '100% 100%',
          WebkitMaskSize: '100% 100%',
        }}
      />
    </>
  );
}

export function Hero() {
  // Cursor tracking for the spotlight, with eased follow
  const mouse = useRef({ x: -999, y: -999 });
  const smooth = useRef({ x: -999, y: -999 });
  const rafRef = useRef<number>();
  const [cursorPos, setCursorPos] = useState({ x: -999, y: -999 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const loop = () => {
      smooth.current.x += (mouse.current.x - smooth.current.x) * 0.1;
      smooth.current.y += (mouse.current.y - smooth.current.y) * 0.1;
      setCursorPos({ x: smooth.current.x, y: smooth.current.y });
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

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
      className="relative w-full overflow-hidden h-screen bg-black text-white"
      style={{ height: '100dvh' }}
    >
      {/* Base image (z-10), slow Ken Burns zoom on load */}
      <div
        className="absolute inset-0 z-10 bg-center bg-cover bg-no-repeat hero-anim hero-zoom"
        style={{ backgroundImage: `url(${BG_IMAGE_1})` }}
      />

      {/* Cursor-following spotlight reveal layer (z-30) */}
      <RevealLayer image={BG_IMAGE_2} cursorX={cursorPos.x} cursorY={cursorPos.y} />

      {/* Content (z-50) */}
      <div className="relative z-50 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left side - Text content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <p
              className="text-lg sm:text-xl font-light tracking-wide text-zinc-400 hero-anim hero-fade"
              style={{ animationDelay: '0.25s' }}
            >
              Hi, I'm
            </p>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight whitespace-nowrap hero-anim hero-reveal"
              style={{ animationDelay: '0.42s' }}
            >
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
                Mithun Raj Urs T V
              </span>
            </h1>

            <p
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-zinc-100 hero-anim hero-fade"
              style={{ animationDelay: '0.6s' }}
            >
              Full-Stack Developer & AI Enthusiast
            </p>

            <p
              className="max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed text-zinc-300 hero-anim hero-fade"
              style={{ animationDelay: '0.7s' }}
            >
              Building intelligent, scalable web applications with modern technologies.
              Passionate about creating impactful solutions in education and healthcare.
            </p>

            <div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-6 hero-anim hero-fade"
              style={{ animationDelay: '0.85s' }}
            >
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
                className="border-orange-400/30 text-orange-400 hover:bg-orange-400/10 hover:border-orange-400/50 transition-all duration-300 px-8 py-3"
              >
                More About Me
              </Button>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div
            className="flex-1 flex justify-center lg:justify-end hero-anim hero-fade"
            style={{ animationDelay: '0.5s' }}
          >
            <div className="relative">
              <div className="absolute -top-1/4 inset-x-0 h-1/2 blur-3xl bg-gradient-to-b from-orange-500/25 to-transparent"></div>

              <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-black">
                <img
                  src="/assets/image.png"
                  alt="Mithun Raj Urs T V"
                  className="w-full h-full object-cover object-center"
                  style={{ filter: 'contrast(1.1) brightness(1.05) saturate(1.1)' }}
                />
                <div
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{ background: 'radial-gradient(circle at center, rgba(0,0,0,0) 75%, rgba(0,0,0,1) 100%)' }}
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500/10 via-transparent to-orange-600/10"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-orange-500/10 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle text-zinc-500">
          <ChevronDown className="h-6 w-6" />
        </div>
      </div>
    </section>
  );
}