import { Briefcase, GraduationCap, Trophy, Award, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "AI Developer",
    company: "Thesisly",
    period: "Sept. 2025 – Present",
    location: "Remote",
    points: [
      "Debugged, optimized, and scaled backend AI model systems to support 1,000+ active users, reducing inference latency by 40% via model quantization and Docker containerization.",
      "Collaborated directly with frontend and product teams to integrate third-party services and ship features end-to-end, improving model accuracy by 15% via hyperparameter tuning.",
      "Engineered robust automated CI/CD testing pipelines in Git achieving 95% code coverage, reducing deployment bugs by 60% and accelerating release cycles.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Adcuesta",
    period: "Dec. 2025 – Present",
    location: "Remote",
    points: [
      "Built and shipped a production-grade operations dashboard using React, Next.js, and TypeScript, delivering 12 admin screens and integrating 17+ backend REST APIs.",
      "Worked closely with SQL databases to write efficient queries for a centralized reporting layer with 10 KPI widgets and CSV exports, reducing manual reporting time by 60–80%.",
      "Demonstrated strong ownership of end-to-end task delivery by consolidating 7 core business processes, cutting configuration setup time by 50–70%.",
    ],
  },
];

const achievements = [
  {
    title: "National Winner · Smart India Hackathon 2025",
    subtitle: "ISRO's Quantum Frontiers Award",
    description: "Awarded among 15,000+ competitors for architecting a quantum-secure communication defense system.",
    icon: Trophy,
    badge: "ISRO Winner",
  },
  {
    title: "NHIDE 2026 Hackathon Finalist",
    subtitle: "National Finalist (Top 20 Teams)",
    description: "Recognized nationally for building Mulyankan AI: distributed grading engine with OCR and Celery queues.",
    icon: Award,
    badge: "Top 20 Nationally",
  },
];

export default function AboutSection() {
  return (
    <section id="experience" className="py-20 md:py-28 border-b border-border bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            <Briefcase className="h-3.5 w-3.5 text-foreground" />
            <span>Track Record</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-foreground" data-testid="text-section-about">
            Experience & Education
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-2xl">
            Software engineering at scale, backend model optimization, and competitive hackathon recognition.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Experience Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground block mb-2">
              Professional Roles
            </span>

            {experiences.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: idx * 0.1 }}
                className="p-6 sm:p-7 rounded-xl border border-border bg-card/40 space-y-4"
                data-testid={`experience-card-${idx}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-border pb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground tracking-tight">
                      {item.role}
                    </h3>
                    <span className="text-sm font-mono text-muted-foreground">
                      {item.company} · {item.location}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground sm:text-right shrink-0">
                    {item.period}
                  </span>
                </div>

                <div className="space-y-2 pt-1">
                  {item.points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-muted-foreground leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-foreground/50 shrink-0 mt-1.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Education Card */}
            <div className="p-6 sm:p-7 rounded-xl border border-border bg-card/40 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h3 className="text-base font-semibold text-foreground tracking-tight">
                    B.Tech in Computer Science and Engineering
                  </h3>
                  <span className="text-xs font-mono text-muted-foreground">
                    Guru Ghasidas University · Bilaspur, Chhattisgarh
                  </span>
                </div>
                <span className="text-xs font-mono text-muted-foreground sm:text-right shrink-0">
                  Aug. 2023 – June 2027
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed pt-2">
                Core coursework: Distributed Systems, Operating Systems, Computer Networks, Database Architecture, and Algorithms.
              </p>
            </div>
          </div>

          {/* Honors & Hackathons */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground block mb-2">
              Honors & National Awards
            </span>

            {achievements.map((ach, idx) => {
              const Icon = ach.icon;
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-xl border border-border bg-card/40 space-y-2.5"
                  data-testid={`achievement-card-${idx}`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-500 border border-amber-500/30">
                      {ach.badge}
                    </span>
                    <Icon className="h-4 w-4 text-foreground" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground tracking-tight">
                    {ach.title}
                  </h3>
                  <span className="text-xs font-mono text-muted-foreground block">
                    {ach.subtitle}
                  </span>
                  <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                    {ach.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
