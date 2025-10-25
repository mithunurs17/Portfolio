import { MapPin, Mail, Phone, Linkedin } from 'lucide-react';
import { Card } from '@/components/ui/card';

export function About() {
  const contacts = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bengaluru, Karnataka',
      href: null,
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'mithunursmithun@gmail.com',
      href: 'mailto:mithunursmithun@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-9900418013',
      href: 'tel:+919900418013',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/mithunurs',
      href: 'https://linkedin.com/in/mithunurs',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building the future, one line of code at a time
          </p>
        </div>

        <Card className="max-w-4xl mx-auto p-6 sm:p-8 md:p-12 border-border hover-elevate transition-all duration-300">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Professional Summary</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate Full-Stack Developer with expertise in building modern web applications
                using React, Next.js, Node.js, and TypeScript. My journey in technology is driven by a
                desire to create meaningful solutions that make a real impact. From developing intelligent
                learning platforms to AI-powered healthcare solutions, I focus on combining technical
                excellence with user-centric design.
              </p>
            </div>

            <div className="border-t border-border pt-8">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contacts.map((contact) => (
                  <div
                    key={contact.label}
                    className="flex items-start gap-3 p-4 rounded-lg hover-elevate transition-all"
                    data-testid={`contact-${contact.label.toLowerCase()}`}
                  >
                    <contact.icon className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-muted-foreground mb-1">
                        {contact.label}
                      </p>
                      {contact.href ? (
                        <a
                          href={contact.href}
                          className="text-foreground hover:text-orange-500 transition-colors break-words"
                          target={contact.href.startsWith('http') ? '_blank' : undefined}
                          rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          data-testid={`link-${contact.label.toLowerCase()}`}
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-foreground break-words">{contact.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </Card>
      </div>
    </section>
  );
}
