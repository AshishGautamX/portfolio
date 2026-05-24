import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { Icon: Github, href: "https://github.com/AshishGautamX", label: "GitHub", testId: "link-hero-github" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/ashishgautamx", label: "LinkedIn", testId: "link-hero-linkedin" },
  { Icon: Mail, href: "mailto:gautamashishbxr@gmail.com", label: "Email", testId: "link-hero-email" },
];

const highlights = [
  { label: "Frontend Dev Intern @ Adcuesta", color: "text-primary" },
  { label: "SIH'25 National Winner · ISRO Quantum Frontiers Award", color: "text-yellow-400" },
  { label: "NHIDE 2026 Finalist · Top 20 Nationally", color: "text-cyan-400" },
];

export default function HeroSection() {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    const el = document.querySelector("#projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]" />

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-foreground"
              data-testid="text-hero-name"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ashish Gautam
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl font-semibold text-primary pt-1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Frontend Developer · CS Undergrad · SIH'25 Winner
            </motion.p>

            <motion.p
              className="text-base md:text-lg text-muted-foreground leading-relaxed"
              data-testid="text-hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Third-year CS undergrad who spent the last year building production dashboards
              and shipping real features at a startup. I turn complex workflows into clean, fast interfaces.
            </motion.p>

            <motion.div
              className="flex flex-col gap-2 pt-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60 shrink-0" style={{ color: "inherit" }} />
                  <span className={`text-sm font-medium ${h.color}`}>{h.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="flex gap-3 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {socialLinks.map(({ Icon, href, label, testId }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-3 rounded-full bg-card hover-elevate transition-all shadow-lg"
                  aria-label={label}
                  data-testid={testId}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-3 pt-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="text-base px-8 transition-transform hover:scale-105 shadow-lg hover:shadow-xl gap-2"
                data-testid="button-view-projects"
              >
                <ExternalLink className="h-4 w-4" />
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToContact}
                className="text-base px-8 transition-transform hover:scale-105 shadow-lg gap-2"
                data-testid="button-hire-me"
              >
                Let's Connect
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl" />
                <img
                  src="/ashish.jpeg"
                  alt="Ashish Gautam"
                  className="w-full h-full object-cover rounded-full border-4 border-primary/20 shadow-2xl relative z-10"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}