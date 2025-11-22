import { useState } from 'react';
import { Mail, Linkedin, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: 'Message Sent!',
        description: 'Thank you for reaching out. I\'ll get back to you soon.',
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section-light py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center text-gradient-primary">
          Get In Touch
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-foreground/80 leading-relaxed mb-8">
                I'm always interested in hearing about new opportunities, collaborations, and projects. 
                Whether you're looking for a marketing professional, want to discuss influencer partnerships, 
                or just want to chat about The 3AM Show, feel free to reach out.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="mailto:raghavgoyal010205@gmail.com"
                className="flex items-center gap-4 p-4 bg-card border-2 border-border rounded-lg hover-lift transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground">raghavgoyal010205@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/raghavgoyal010205"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card border-2 border-border rounded-lg hover-lift transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm text-muted-foreground">LinkedIn</p>
                  <p className="text-foreground">raghavgoyal010205</p>
                </div>
              </a>

              <a
                href="tel:+447392147176"
                className="flex items-center gap-4 p-4 bg-card border-2 border-border rounded-lg hover-lift transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground">+44 7392 147176</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
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
                  className="w-full"
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
                  className="w-full"
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
                  placeholder="Tell me about your project or opportunity..."
                  required
                  rows={5}
                  className="w-full resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
