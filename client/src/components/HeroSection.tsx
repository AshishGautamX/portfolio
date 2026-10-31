import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowRight, Award, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { Magnetic } from "@/components/ui/Magnetic";

const socialLinks = [
  { Icon: Github, href: "https://github.com/AshishGautamX", label: "GitHub", testId: "link-hero-github" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/ashishgautamx", label: "LinkedIn", testId: "link-hero-linkedin" },
  { Icon: Mail, href: "mailto:gautamashishbxr@gmail.com", label: "Email", testId: "link-hero-email" },
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
    <section id="home" className="pt-28 pb-16 md:pt-32 md:pb-20 border-b border-border bg-transparent relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Main Hero Grid */}
        <div className="flex flex-col-reverse md:flex-row items-start md:items-start justify-between gap-8 md:gap-12 lg:gap-16">

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
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/25 bg-emerald-500/10 text-[11px] sm:text-xs font-mono text-emerald-600 dark:text-emerald-400 shadow-xs w-fit"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono tracking-tight font-medium">AI &amp; Systems Engineer</span>
              <span className="hidden sm:inline text-emerald-500/40">·</span>
              <span className="hidden sm:inline text-muted-foreground">Backend Infrastructure</span>
            </motion.div>

            {/* Name and Core Statement */}
            <div className="space-y-3">
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground"
                data-testid="text-hero-name"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                Ashish Gautam
              </motion.h1>
              <motion.p
                className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed font-normal"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                Architecting <span className="text-foreground font-semibold">low-latency inference pipelines</span>, <span className="text-foreground font-semibold">model quantization</span> architectures, and <span className="text-foreground font-semibold">distributed backend systems</span>.
              </motion.p>
            </div>

            {/* Key Credentials & National Honors - High Impact Structured Cards */}
            <motion.div
              className="space-y-2.5 pt-1 w-full"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {/* 1. National Winner ISRO SIH 2025 Highlight Card */}
              <div className="p-3 sm:p-3.5 rounded-xl border border-amber-500/30 bg-amber-500/5 dark:bg-amber-500/10 flex items-start gap-3 transition-colors shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-500 flex items-center justify-center shrink-0 mt-0.5">
                  <Trophy className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="font-semibold text-xs sm:text-sm text-foreground">
                      National Winner <span className="text-amber-500 font-bold">· SIH 2025</span>
                    </span>
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-500 border border-amber-500/30">
                      ISRO Award
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-muted-foreground mt-0.5 leading-relaxed">
                    Awarded ISRO's Quantum Frontiers Award among 15,000+ national teams.
                  </p>
                </div>
              </div>

              {/* 2. Active Engineering Roles Card */}
              <div className="p-3 sm:p-3.5 rounded-xl border border-border/80 bg-card/60 backdrop-blur-xs flex items-start gap-3 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="font-semibold text-xs sm:text-sm text-foreground flex items-center gap-1.5 flex-wrap">
                      <span>AI Developer @ Thesisly</span>
                      <span className="text-muted-foreground/40 font-normal">·</span>
                      <span>SDE Intern @ Adcuesta</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-500 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                      Active
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-muted-foreground mt-0.5 leading-relaxed">
                    Model quantization (-40% latency cut), Docker pipelines &amp; operations APIs.
                  </p>
                </div>
              </div>

              {/* 3. NHIDE 2026 National Finalist Card */}
              <div className="p-3 sm:p-3.5 rounded-xl border border-border/80 bg-card/40 flex items-start gap-3 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-muted text-muted-foreground border border-border/60 flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="font-semibold text-xs sm:text-sm text-foreground">
                      NHIDE 2026 National Finalist
                    </span>
                    <span className="text-[10px] font-mono text-muted-foreground px-2 py-0.5 rounded-full bg-muted border border-border">
                      Top 20 Teams
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-muted-foreground mt-0.5 leading-relaxed">
                    Mulyankan AI: Distributed async grading architecture with Redis &amp; Celery queues.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons & Social Links - Fully Responsive on Mobile */}
            <motion.div
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
            >
              <Magnetic strength={0.25} className="w-full sm:w-auto">
                <Button
                  onClick={scrollToProjects}
                  className="w-full sm:w-auto font-medium text-sm h-11 px-6 bg-foreground text-background hover:bg-foreground/90 transition-all gap-2 group hover:scale-[1.02] active:scale-[0.98] justify-center cursor-pointer"
                  data-testid="button-view-projects"
                >
                  <span>View Systems Work</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Magnetic>

              <Magnetic strength={0.2} className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  onClick={scrollToContact}
                  className="w-full sm:w-auto font-medium text-sm h-11 px-6 border border-border/80 bg-muted/40 hover:bg-muted text-foreground transition-all hover:scale-[1.02] active:scale-[0.98] justify-center shadow-xs cursor-pointer"
                  data-testid="button-hire-me"
                >
                  Contact
                </Button>
              </Magnetic>

              <div className="flex items-center justify-center sm:justify-start gap-2 pt-2 sm:pt-0 sm:pl-3 sm:border-l border-border w-full sm:w-auto">
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

            {/* Right Column: Invisible Layout Anchor for TravelingAvatar (Positioned at upper-right alongside name & statement) */}
            <div className="shrink-0 self-center md:self-start md:mt-2 lg:mt-3 mb-2 md:mb-0 pointer-events-none">
              <div
                id="hero-avatar-anchor"
                className="w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-60 lg:h-60 rounded-full opacity-0 pointer-events-none select-none"
                aria-hidden="true"
              />
            </div>

          </div>

        </div>
    </section>
  );
}
