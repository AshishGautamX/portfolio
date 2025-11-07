import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-semibold text-center mb-4"
          data-testid="text-section-contact"
        >
          Get In Touch
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Let's collaborate to turn your ideas into reality.
        </p>

        <div className="grid md:grid-cols-5 gap-12">
          <Card className="md:col-span-3 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  data-testid="input-name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  data-testid="input-email"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  data-testid="input-message"
                />
              </div>

              <Button type="submit" size="lg" className="w-full" data-testid="button-send">
                Send Message
              </Button>
            </form>
          </Card>

          <div className="md:col-span-2 space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">Connect With Me</h3>
              <div className="space-y-4">
                <a
                  href="mailto:ashishgautam835@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors hover-elevate active-elevate-2 p-2 rounded-md"
                  data-testid="link-email"
                >
                  <Mail className="h-5 w-5" />
                  <span className="text-sm">ashishgautam835@gmail.com</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/ashishgautamx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors hover-elevate active-elevate-2 p-2 rounded-md"
                  data-testid="link-linkedin"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="text-sm">linkedin.com/in/ashishgautamx</span>
                </a>

                <a
                  href="https://github.com/ashishgautamx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors hover-elevate active-elevate-2 p-2 rounded-md"
                  data-testid="link-github"
                >
                  <Github className="h-5 w-5" />
                  <span className="text-sm">github.com/ashishgautamx</span>
                </a>
              </div>
            </Card>

            <Card className="p-6 bg-primary/5">
              <p className="text-sm text-muted-foreground leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be
                part of your vision. Whether you need technical development, research support, or
                both, feel free to reach out!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
