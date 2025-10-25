import { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast({
          title: 'Message sent!',
          description: data.message || "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast({
          title: 'Error',
          description: data.message || 'Failed to send message. Please try again.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground">
            Have a project in mind? Let's work together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="p-8">
            <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="focus:border-orange-500 focus:ring-orange-500"
                  data-testid="input-name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="focus:border-orange-500 focus:ring-orange-500"
                  data-testid="input-email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className="focus:border-orange-500 focus:ring-orange-500"
                  data-testid="input-message"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0"
                data-testid="button-submit"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-orange-500 mt-1" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Email</p>
                    <a
                      href="mailto:mithunursmithun@gmail.com"
                      className="text-foreground hover:text-orange-500 transition-colors"
                      data-testid="link-email-direct"
                    >
                      mithunursmithun@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-orange-500 mt-1" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Phone</p>
                    <a
                      href="tel:+919900418013"
                      className="text-foreground hover:text-orange-500 transition-colors"
                      data-testid="link-phone-direct"
                    >
                      +91-9900418013
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-orange-500 mt-1" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Location</p>
                    <p className="text-foreground">Bengaluru, Karnataka</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-orange-500/10 to-orange-600/10 border-orange-500/20">
              <h3 className="text-xl font-semibold mb-4">Looking for collaboration?</h3>
              <p className="text-muted-foreground mb-4">
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              <p className="text-sm text-muted-foreground">
                Response time: Usually within 24 hours
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
