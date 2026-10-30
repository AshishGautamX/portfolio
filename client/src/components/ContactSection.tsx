import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Github, Phone, Send, Terminal, CheckCircle2, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";
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
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Server responded with error");
      }

      setIsSubmitted(true);
      toast({
        title: "Message Delivered",
        description: "Your message has been received! I'll get back to you shortly.",
      });
    } catch {
      // Fallback: Open mailto client if offline or server unreachable
      const mailtoLink = `mailto:gautamashishbxr@gmail.com?subject=Contact from ${encodeURIComponent(
        formData.name
      )}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${encodeURIComponent(formData.email)}`;
      window.location.href = mailtoLink;

      toast({
        title: "Redirecting to Mail Client",
        description: "Opening mail client with prefilled details.",
      });
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-16 md:py-28 border-b border-border bg-transparent w-full overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Section Header with Scroll Fade */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="mb-10 md:mb-16"
        >
          <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            <Terminal className="h-3.5 w-3.5 text-foreground" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-foreground" data-testid="text-section-contact">
            Get In Touch
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-2xl leading-relaxed">
            Available for AI infrastructure roles, low-latency inference pipelines, and distributed backend engineering discussions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

          {/* Direct Channels with Staggered Scroll Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-5 space-y-3 font-mono text-xs w-full"
          >
            <span className="uppercase tracking-wider text-muted-foreground block mb-2 text-[11px]">
              Direct Contact Details
            </span>

            {contactLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={idx}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.01, x: 2 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-3.5 sm:p-4 rounded-lg border border-border bg-card/60 backdrop-blur-xs hover:border-foreground/30 transition-all flex items-center justify-between group shadow-xs min-h-[52px]"
                  data-testid={item.testId}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Icon className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-foreground transition-colors" />
                    <div className="min-w-0">
                      <span className="text-[10px] text-muted-foreground uppercase block truncate">
                        {item.label}
                      </span>
                      <span className="text-foreground font-semibold truncate block text-xs sm:text-sm">
                        {item.value}
                      </span>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Quick Message Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="lg:col-span-7 p-5 sm:p-7 md:p-8 rounded-xl border border-border bg-card/70 backdrop-blur-xs shadow-xs w-full"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center space-y-4 font-mono"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Message Dispatched
                </h3>
                <p className="text-xs text-muted-foreground max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>! Your note has been received. Ashish will follow up at <strong>{formData.email}</strong> shortly.
                </p>
                <Button
                  onClick={handleReset}
                  variant="outline"
                  size="sm"
                  className="font-mono text-xs gap-2 mt-4 min-h-[44px]"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>Send Another Message</span>
                </Button>
              </motion.div>
            ) : (
              <>
                <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground block mb-5">
                  Send a Direct Message
                </span>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-xs font-mono">
                      Your Name / Org
                    </Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Jane Doe · Anthropic"
                      className="font-mono text-xs bg-muted/30 border-border h-11"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-xs font-mono">
                      Your Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. jane@company.com"
                      className="font-mono text-xs bg-muted/30 border-border h-11"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="message" className="text-xs font-mono">
                      Message / Systems Scope
                    </Label>
                    <Textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder=""
                      className="font-mono text-xs bg-muted/30 border-border resize-none leading-relaxed p-3"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full font-mono text-xs bg-foreground text-background hover:bg-foreground/90 transition-all gap-2 h-11 mt-3 min-h-[44px] cursor-pointer"
                  >
                    <Send className="h-4 w-4" />
                    <span>{isSubmitting ? "Dispatching Message..." : "Dispatch Message"}</span>
                  </Button>
                </form>
              </>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
