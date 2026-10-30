import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowRight, Award, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { Magnetic } from "@/components/ui/Magnetic";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const socialLinks = [
  { Icon: Github, href: "https://github.com/AshishGautamX", label: "GitHub", testId: "link-hero-github" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/ashishgautamx", label: "LinkedIn", testId: "link-hero-linkedin" },
  { Icon: Mail, href: "mailto:gautamashishbxr@gmail.com", label: "Email", testId: "link-hero-email" },
];

// Smooth Animated Number Counter
function CountingNumber({ value }: { value: string }) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const match = value.match(/([0-9.,]+)/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const numStr = match[1].replace(/,/g, "");
    const target = parseFloat(numStr);
    const prefix = value.startsWith("-") ? "-" : "";
    const suffix = value.replace(/[-0-9.,]/g, "");

    const duration = 1200;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = target * ease;

      const formatted = Number.isInteger(target)
        ? Math.round(current).toLocaleString()
        : current.toFixed(2);

      setDisplay(`${prefix}${formatted}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const handle = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(handle);
  }, [value]);

  return <span>{display}</span>;
}

export default function HeroSection() {
  const [publicRepos, setPublicRepos] = useState<number | null>(null);
  const [contributions2026, setContributions2026] = useState<number>(983);

  useEffect(() => {
    // Dynamic fetch of public repositories count (never hardcoded)
    fetch("https://api.github.com/users/AshishGautamX")
      .then((r) => r.json())
      .then((data) => {
        if (typeof data.public_repos === "number") {
          setPublicRepos(data.public_repos);
        }
      })
      .catch(() => {});

    // Dynamic fetch of 2026 GitHub contributions
    fetch("https://github-contributions-api.jogruber.de/v4/AshishGautamX?y=2026")
      .then((r) => r.json())
      .then((data) => {
        if (data?.total?.["2026"]) {
          setContributions2026(data.total["2026"]);
        }
      })
      .catch(() => {});
  }, []);

  const metrics = [
    { label: "2026 Contributions", value: `${contributions2026}`, highlight: true },
    { label: "Intrusion Macro-F1", value: "92.41%" },
    { label: "Inference Latency Cut", value: "-40%" },
    { label: "Public & Org Repos", value: publicRepos ? `${publicRepos}+` : "Active" },
  ];

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    const el = document.querySelector("#projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 border-b border-border bg-transparent relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Main Hero Grid */}
        <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-8 md:gap-12">
          
          {/* Left Text Column */}
          <motion.div
            className="w-full md:flex-1 space-y-6"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Engineering Status Pill with Animated Glowing Pulse */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card text-xs font-mono text-muted-foreground shadow-xs hover:border-foreground/30 transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>AI & Systems Engineer · Backend Infrastructure</span>
            </motion.div>

            {/* Name and Core Statement */}
            <div className="space-y-3">
              <motion.h1
                className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight text-foreground text-balance"
                data-testid="text-hero-name"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                Ashish Gautam
              </motion.h1>
              <motion.p
                className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed font-normal text-balance"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                Building low-latency inference pipelines, model quantization architectures, and distributed backend systems.
              </motion.p>
            </div>

            {/* Current Work & Accolades */}
            <motion.div
              className="space-y-2 pt-1 font-mono text-xs text-foreground/90"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
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
            </motion.div>

            {/* Action Buttons & Social Links */}
            <motion.div
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
            >
              <Magnetic strength={0.25}>
                <Button
                  onClick={scrollToProjects}
                  className="w-full sm:w-auto font-medium text-sm h-11 px-6 bg-foreground text-background hover:bg-foreground/90 transition-all gap-2 group hover:scale-[1.02] active:scale-[0.98]"
                  data-testid="button-view-projects"
                >
                  <span>View Systems Work</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Magnetic>

              <Magnetic strength={0.2}>
                <Button
                  variant="outline"
                  onClick={scrollToContact}
                  className="w-full sm:w-auto font-medium text-sm h-11 px-6 border-border bg-card hover:bg-muted text-foreground transition-all hover:scale-[1.02] active:scale-[0.98]"
                  data-testid="button-hire-me"
                >
                  Contact
                </Button>
              </Magnetic>

              <div className="flex items-center gap-2 pt-2 sm:pt-0 sm:pl-3 sm:border-l border-border">
                {socialLinks.map(({ Icon, href, label, testId }, i) => (
                  <Magnetic key={i} strength={0.35}>
                    <motion.a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2.5 rounded-md border border-border bg-card text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center shadow-xs"
                      aria-label={label}
                      data-testid={testId}
                    >
                      <Icon className="h-4 w-4" />
                    </motion.a>
                  </Magnetic>
                ))}
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Full-Color Portrait with Subtle Floating Hover */}
          <motion.div
            className="shrink-0 self-center md:self-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full border-2 border-border p-1 bg-card shadow-md relative"
            >
              <img
                src="/ashish.jpeg"
                alt="Ashish Gautam"
                className="w-full h-full object-cover rounded-full"
              />
              {/* Subtle active status dot */}
              <div className="absolute bottom-1 right-2 w-4 h-4 rounded-full bg-emerald-500 border-2 border-background" />
            </motion.div>
          </motion.div>

        </div>

        {/* Minimal Uncluttered Metrics Strip with Cursor Spotlight Cards */}
        <div className="mt-12 pt-8 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs">
          {metrics.map((m, i) => (
            <SpotlightCard
              key={i}
              className="p-3 sm:p-4 hover:border-foreground/30 transition-colors shadow-xs"
            >
              <span className={`text-xl sm:text-2xl font-bold block ${m.highlight ? "text-amber-500" : "text-foreground"}`}>
                <CountingNumber value={m.value} />
              </span>
              <span className="text-[11px] text-muted-foreground uppercase tracking-wider block mt-1">
                {m.label}
              </span>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
}
