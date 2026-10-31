import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { 
  GraduationCap, 
  Briefcase, 
  Trophy, 
  Award, 
  Sparkles, 
  Terminal,
  CheckCircle2 
} from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

interface StoryMilestone {
  year: string;
  epoch: string;
  headline: string;
  roleOrAward: string;
  narrative: string;
  highlights: string[];
  icon: typeof Trophy;
  accent: "amber" | "emerald" | "default";
  statusBadge?: string;
}

const milestones: StoryMilestone[] = [
  {
    year: "2023",
    epoch: "AUG. 2023 – JUNE 2027",
    headline: "building from first principles.",
    roleOrAward: "B.Tech in Computer Science · Guru Ghasidas Central University",
    narrative:
      "Immersed in core computer science and low-level systems. Deep-dived into Distributed Systems, Operating Systems, Computer Networks, and Database Internals, building foundational algorithms and experiments from scratch.",
    highlights: ["Distributed Systems", "Operating Systems", "Database Internals", "Algorithm Complexity"],
    icon: GraduationCap,
    accent: "default",
    statusBadge: "Undergraduate",
  },
  {
    year: "SEPT. 2025",
    epoch: "SEPT. 2025 – PRESENT",
    headline: "cutting latency at scale.",
    roleOrAward: "AI Developer · Thesisly",
    narrative:
      "Debugged, optimized, and scaled model serving architecture to support 1,000+ active users. Slashed inference latency by 40% via model quantization and containerization, while boosting model accuracy by 15% through precision hyperparameter tuning and automated CI/CD testing.",
    highlights: ["-40% Inference Latency", "1,000+ Active Users", "Model Quantization", "95% CI/CD Coverage"],
    icon: Briefcase,
    accent: "emerald",
    statusBadge: "Active Role",
  },
  {
    year: "DEC. 2025",
    epoch: "SMART INDIA HACKATHON 2025",
    headline: "national recognition from ISRO.",
    roleOrAward: "National Winner · ISRO's Quantum Frontiers Award",
    narrative:
      "Awarded ISRO's prestigious Quantum Frontiers Award among 15,000+ competing engineering teams nationally. Architected a post-quantum cryptographic defense communication protocol resistant to timing analysis and eavesdropping, evaluated by defense intelligence scientists.",
    highlights: ["ISRO Quantum Frontiers Award", "15,000+ Competing Teams", "Post-Quantum Security", "National Recognition"],
    icon: Trophy,
    accent: "amber",
    statusBadge: "ISRO Winner",
  },
  {
    year: "DEC. 2025",
    epoch: "DEC. 2025 – PRESENT",
    headline: "shipping end-to-end backends.",
    roleOrAward: "Software Developer Intern · Adcuesta",
    narrative:
      "Took full engineering ownership of a production operations dashboard delivering 12 admin screens and integrating 17+ backend REST APIs. Engineered high-efficiency SQL queries for a centralized reporting layer, cutting manual operational time by 60–80%.",
    highlights: ["17+ REST APIs", "60–80% Reporting Time Saved", "12 Admin Screens", "7 Core Business Pipelines"],
    icon: Briefcase,
    accent: "emerald",
    statusBadge: "Active Role",
  },
  {
    year: "2026",
    epoch: "NHIDE 2026 HACKATHON",
    headline: "orchestrating distributed queues.",
    roleOrAward: "NHIDE 2026 National Finalist · Mulyankan AI",
    narrative:
      "Selected among the top 20 teams nationally for engineering Mulyankan AI: a high-throughput automated grading engine evaluating 9+ curriculum tiers. Built an asynchronous OCR processing pipeline powered by Redis caching, Celery background workers, and PostgreSQL schema.",
    highlights: ["Top 20 Teams Nationally", "Async Celery Workers", "Redis Caching", "9+ Curriculum Tiers"],
    icon: Award,
    accent: "amber",
    statusBadge: "Top 20 Nationally",
  },
  {
    year: "NOW",
    epoch: "CURRENT FRONTIER · 2026",
    headline: "now, autonomous systems & world models.",
    roleOrAward: "Research & Systems Infrastructure",
    narrative:
      "Pushing the boundaries of Transformer world models with PacketSentinel (3.28M parameter network state forecasting with 92.41% Macro-F1) and intelligent Kubernetes schedulers powered by Meta Llama-3.3-70B. Over 1,000 annual contributions shipped with obsessive engineering rigor.",
    highlights: ["PacketSentinel World Model", "K8s-LLM-Scheduler", "1,000+ Contributions", "Autonomous Pod Placement"],
    icon: Sparkles,
    accent: "default",
    statusBadge: "Active Frontier",
  },
];

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pathD, setPathD] = useState<string>("");

  // Scroll-linked smooth path drawing
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  // Calculate dynamic serpentine/zig-zag SVG path through all node centers
  const calculateZigzagPath = useCallback(() => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();

    const points: { x: number; y: number }[] = [];

    for (let i = 0; i < milestones.length; i++) {
      const el = document.getElementById(`zigzag-node-${i}`);
      if (el) {
        const rect = el.getBoundingClientRect();
        const x = rect.left - containerRect.left + rect.width / 2;
        const y = rect.top - containerRect.top + rect.height / 2;
        points.push({ x, y });
      }
    }

    if (points.length < 2) return;

    let d = `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`;

    for (let i = 0; i < points.length - 1; i++) {
      const p1 = points[i];
      const p2 = points[i + 1];
      const dx = p2.x - p1.x;
      const dy = p2.y - p1.y;

      // Smooth S-curve control points creating organic zig-zag meander
      const cp1x = p1.x + dx * 0.15;
      const cp1y = p1.y + dy * 0.55;
      const cp2x = p2.x - dx * 0.15;
      const cp2y = p1.y + dy * 0.45;

      d += ` C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
    }

    setPathD(d);
  }, []);

  useEffect(() => {
    calculateZigzagPath();

    const handleResize = () => {
      calculateZigzagPath();
    };

    window.addEventListener("resize", handleResize, { passive: true });

    // Multi-stage layout recalculation to ensure precise coordinates on font load & dynamic layout
    const t1 = setTimeout(calculateZigzagPath, 60);
    const t2 = setTimeout(calculateZigzagPath, 250);
    const t3 = setTimeout(calculateZigzagPath, 600);

    if (document.fonts) {
      document.fonts.ready.then(calculateZigzagPath).catch(() => {});
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [calculateZigzagPath]);

  return (
    <section id="experience" className="py-20 md:py-28 border-b border-border bg-transparent relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <div className="mb-14 md:mb-20 text-left">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            <Briefcase className="h-3.5 w-3.5 text-foreground" />
            <span>Track Record</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-foreground" data-testid="text-section-about">
            Experience &amp; Education
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-2xl leading-relaxed">
            Software engineering at scale, backend model optimization, and competitive hackathon recognition.
          </p>
        </div>

        {/* Dynamic Zig-Zag Storytelling Canvas */}
        <div ref={containerRef} className="relative w-full">

          {/* ─── Responsive Serpentine / Zig-Zag SVG Layer ─── */}
          {pathD && (
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="storyZigzagGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="35%" stopColor="#10b981" />
                  <stop offset="70%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Background Faded Dashed Guide Track */}
              <path
                d={pathD}
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                className="text-border/70"
              />

              {/* Foreground Animated Glowing Zig-Zag Path */}
              <motion.path
                d={pathD}
                fill="none"
                stroke="url(#storyZigzagGradient)"
                strokeWidth="3.5"
                strokeLinecap="round"
                filter="url(#glow)"
                style={{ pathLength }}
              />
            </svg>
          )}

          {/* ─── Chronological Milestone Cards Positioned Along the Zig-Zag Apexes ─── */}
          <div className="space-y-12 sm:space-y-16 md:space-y-24 relative z-20">
            {milestones.map((item, idx) => {
              const Icon = item.icon;
              const isEven = idx % 2 === 1;

              const isAmber = item.accent === "amber";
              const isEmerald = item.accent === "emerald";

              const badgeColor = isAmber
                ? "bg-amber-500/10 text-amber-500 border-amber-500/30"
                : isEmerald
                ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/30"
                : "bg-muted text-foreground border-border";

              const dotColor = isAmber
                ? "bg-amber-500 ring-4 ring-amber-500/20"
                : isEmerald
                ? "bg-emerald-500 ring-4 ring-emerald-500/20"
                : "bg-foreground ring-4 ring-foreground/20";

              return (
                <div
                  key={idx}
                  className="relative flex flex-col md:flex-row items-center justify-between"
                >
                  {/* ─── Dynamic Milestone Apex Node on the Zig-Zag Line ─── */}
                  {/* On Desktop & Mobile: Alternates smoothly across the screen */}
                  <div
                    id={`zigzag-node-${idx}`}
                    className={`absolute z-30 flex items-center justify-center top-6 -translate-y-1/2 -translate-x-1/2 ${
                      isEven ? "left-[82%] md:left-[72%]" : "left-[18%] md:left-[28%]"
                    }`}
                  >
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.3 }}
                      className={`w-4 h-4 rounded-full ${dotColor} shadow-md`}
                    />
                  </div>

                  {/* ─── Milestone Content Card with Original Subtle Orange Hover ─── */}
                  <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className={`w-full ${
                      isEven
                        ? "w-[90%] sm:w-[86%] md:w-[46%] ml-auto"
                        : "w-[90%] sm:w-[86%] md:w-[46%] mr-auto"
                    }`}
                  >
                    <SpotlightCard
                      className={`p-5 sm:p-6 rounded-xl border bg-card/60 backdrop-blur-xs transition-colors shadow-xs relative overflow-hidden group ${
                        isAmber
                          ? "border-amber-500/30 bg-amber-500/5 dark:bg-amber-500/10"
                          : isEmerald
                          ? "border-emerald-500/30 bg-emerald-500/5 dark:bg-emerald-500/10"
                          : "border-border"
                      }`}
                    >
                      {/* Top Bar: Epoch & Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono font-semibold text-foreground/90 tracking-wider">
                            {item.year}
                          </span>
                          <span className="text-muted-foreground/40 font-mono text-xs">·</span>
                          <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                            {item.epoch}
                          </span>
                        </div>

                        {item.statusBadge && (
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${badgeColor}`}>
                            {item.statusBadge}
                          </span>
                        )}
                      </div>

                      {/* Headline in Storytelling Style (from Image 2) */}
                      <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground lowercase mb-1 group-hover:text-primary transition-colors">
                        {item.headline}
                      </h3>

                      {/* Role or Award Identifier */}
                      <div className="flex items-center gap-2 text-xs font-medium text-foreground/85 mb-2.5">
                        <Icon className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                        <span>{item.roleOrAward}</span>
                      </div>

                      {/* Narrative Prose */}
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {item.narrative}
                      </p>

                      {/* Key Highlights / Metrics Strip */}
                      <div className="pt-3 border-t border-border/60 mt-3.5 flex flex-wrap gap-1.5 font-mono text-[10px] sm:text-[11px]">
                        {item.highlights.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded bg-muted/60 text-muted-foreground border border-border/60"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                    </SpotlightCard>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
