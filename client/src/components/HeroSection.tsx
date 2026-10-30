import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Award, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { Icon: Github, href: "https://github.com/AshishGautamX", label: "GitHub", testId: "link-hero-github" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/ashishgautamx", label: "LinkedIn", testId: "link-hero-linkedin" },
  { Icon: Mail, href: "mailto:gautamashishbxr@gmail.com", label: "Email", testId: "link-hero-email" },
];

const metrics = [
  { label: "2026 Contributions", value: "1,024", highlight: true },
  { label: "Intrusion Macro-F1", value: "92.41%" },
  { label: "Inference Latency Cut", value: "-40%" },
  { label: "Public & Private Repos", value: "59" },
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
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 border-b border-border bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Main Hero Grid */}
        <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-8 md:gap-12">
          
          {/* Left Text Column */}
          <motion.div
            className="w-full md:flex-1 space-y-6"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Engineering Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card text-xs font-mono text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>AI & Systems Engineer · Backend Infrastructure</span>
            </div>

            {/* Name and Core Statement */}
            <div className="space-y-3">
              <h1
                className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight text-foreground text-balance"
                data-testid="text-hero-name"
              >
                Ashish Gautam
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed font-normal text-balance">
                Building low-latency inference pipelines, model quantization architectures, and distributed backend systems.
              </p>
            </div>

            {/* Current Work & Accolades */}
            <div className="space-y-2 pt-1 font-mono text-xs text-foreground/90">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground shrink-0" />
                <span>
                  <strong>AI Developer</strong> @ Thesisly & <strong>Software Developer Intern</strong> @ Adcuesta
                </span>
              </div>
              <div className="flex items-center gap-2 text-amber-500 dark:text-amber-400">
                <Trophy className="h-3.5 w-3.5 shrink-0" />
                <span>
                  <strong>National Winner</strong>, Smart India Hackathon 2025 · <strong>ISRO's Quantum Frontiers Award</strong>
                </span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Award className="h-3.5 w-3.5 shrink-0" />
                <span>NHIDE 2026 Hackathon Finalist (Top 20 Nationally for Mulyankan AI)</span>
              </div>
            </div>

            {/* Action Buttons & Social Links */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Button
                onClick={scrollToProjects}
                className="font-medium text-sm h-11 px-6 bg-foreground text-background hover:bg-foreground/90 transition-all gap-2"
                data-testid="button-view-projects"
              >
                <span>View Systems Work</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                onClick={scrollToContact}
                className="font-medium text-sm h-11 px-6 border-border bg-card hover:bg-muted text-foreground transition-all"
                data-testid="button-hire-me"
              >
                Contact
              </Button>

              <div className="flex items-center gap-2 pt-2 sm:pt-0 sm:pl-3 sm:border-l border-border">
                {socialLinks.map(({ Icon, href, label, testId }, i) => (
                  <a
                    key={i}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="p-2.5 rounded-md border border-border bg-card text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                    aria-label={label}
                    data-testid={testId}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right Column: Full-Color Portrait (Natural & Clean) */}
          <motion.div
            className="shrink-0 self-center md:self-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full border-2 border-border p-1 bg-card shadow-md">
              <img
                src="/ashish.jpeg"
                alt="Ashish Gautam"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>

        </div>

        {/* Minimal Uncluttered Metrics Strip */}
        <div className="mt-12 pt-8 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs">
          {metrics.map((m, i) => (
            <div key={i} className="p-3 sm:p-4 rounded-lg bg-card/60 border border-border">
              <span className={`text-xl sm:text-2xl font-bold block ${m.highlight ? "text-amber-500" : "text-foreground"}`}>
                {m.value}
              </span>
              <span className="text-[11px] text-muted-foreground uppercase tracking-wider block mt-1">
                {m.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
