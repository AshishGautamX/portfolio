import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Github, Phone, Send, Terminal, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "gautamashishbxr@gmail.com",
    href: "mailto:gautamashishbxr@gmail.com",
    testId: "link-contact-email",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-7903497779",
    href: "tel:+917903497779",
    testId: "link-contact-phone",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/ashishgautamx",
    href: "https://www.linkedin.com/in/ashishgautamx",
    testId: "link-contact-linkedin",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/AshishGautamX",
    href: "https://github.com/AshishGautamX",
    testId: "link-contact-github",
  },
];

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Direct mailto fallback or form handling
      const mailtoLink = `mailto:gautamashishbxr@gmail.com?subject=Contact from ${encodeURIComponent(
        formData.name
      )}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${encodeURIComponent(formData.email)}`;
      window.location.href = mailtoLink;

      toast({
        title: "Message Initiated",
        description: "Opening your default mail client with prefilled details.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      toast({
        title: "Failed to dispatch",
        description: "Please email directly at gautamashishbxr@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-b border-border bg-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            <Terminal className="h-3.5 w-3.5 text-foreground" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-foreground" data-testid="text-section-contact">
            Get In Touch
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-2xl">
            Available for AI infrastructure roles, backend systems engineering, and distributed computing discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Channels */}
          <div className="lg:col-span-5 space-y-4 font-mono text-xs">
            <span className="uppercase tracking-wider text-muted-foreground block mb-2">
              Direct Contact Details
            </span>

            {contactLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-4 rounded-lg border border-border bg-card hover:border-foreground/30 transition-all flex items-center justify-between group"
                  data-testid={item.testId}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    <div>
                      <span className="text-[10px] text-muted-foreground uppercase block">
                        {item.label}
                      </span>
                      <span className="text-foreground font-semibold">
                        {item.value}
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}

            <div className="p-4 rounded-lg border border-border bg-muted/30 text-muted-foreground space-y-1">
              <span className="text-foreground font-semibold block">Location</span>
              <span>Bilaspur, Chhattisgarh / Remote Available</span>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="lg:col-span-7 p-6 md:p-8 rounded-lg border border-border bg-card shadow-sm">
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground block mb-6">
              Send a Direct Message
            </span>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-xs font-mono">Name</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name / Organization"
                  className="font-mono text-xs bg-muted/30 border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs font-mono">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className="font-mono text-xs bg-muted/30 border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-xs font-mono">Message</Label>
                <Textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your team, system architecture, or problem statement..."
                  className="font-mono text-xs bg-muted/30 border-border"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full font-mono text-xs bg-foreground text-background hover:bg-foreground/90 transition-all gap-2 h-10 mt-2"
              >
                <Send className="h-3.5 w-3.5" />
                <span>{isSubmitting ? "Dispatching..." : "Send Message"}</span>
              </Button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
