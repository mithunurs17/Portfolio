import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/mithunurs"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover-elevate transition-all text-muted-foreground hover:text-orange-500"
              data-testid="link-footer-linkedin"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover-elevate transition-all text-muted-foreground hover:text-orange-500"
              data-testid="link-footer-github"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:mithunursmithun@gmail.com"
              className="p-2 rounded-lg hover-elevate transition-all text-muted-foreground hover:text-orange-500"
              data-testid="link-footer-email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Mithun Raj Urs T V. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToTop}
            className="hover-elevate"
            data-testid="button-scroll-top"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
