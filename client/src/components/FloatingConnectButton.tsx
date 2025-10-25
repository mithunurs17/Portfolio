import { useState, useEffect } from 'react';
import { Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FloatingConnectButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href="https://linkedin.com/in/mithunurs"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 animate-fade-in"
      data-testid="link-floating-connect"
    >
      <Button
        size="lg"
        className="bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0 shadow-lg animate-pulse-glow rounded-full px-6"
      >
        <Linkedin className="mr-2 h-5 w-5" />
        Let's Connect
      </Button>
    </a>
  );
}
