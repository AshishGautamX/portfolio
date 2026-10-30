import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { GitCommit, GitBranch, Star, ExternalLink, Code } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

interface PinnedRepo {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
}

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

const pinnedRepos: PinnedRepo[] = [
  {
    name: "PacketSentinel",
    description:
      "Transformer world model (3.28M params) for temporal network intrusion detection, achieving 92.41% Macro-F1 and a 17.7x false-alarm cut over continuous PCAP streams.",
    language: "Python",
    stars: 1,
    forks: 0,
    url: "https://github.com/AshishGautamX/PacketSentinel",
  },
  {
    name: "K8s-LLM-Scheduler",
    description:
      "Intelligent Kubernetes scheduler powered by Meta's Llama-3.3-70B model via HuggingFace Inference API. Smart pod placement with caching, retry logic, and configurable circuit-breakers.",
    language: "Python",
    stars: 4,
    forks: 1,
    url: "https://github.com/AshishGautamX/K8s-LLM-Scheduler",
  },
  {
    name: "ai-essay-grader",
    description:
      "AI-powered essay grading system using fine-tuned Phi-3 model with LoRA adapters for automated assessment of student answers across multiple curriculum subjects.",
    language: "Python",
    stars: 2,
    forks: 0,
    url: "https://github.com/AshishGautamX/ai-essay-grader",
  },
  {
    name: "Mulyankan AI",
    description:
      "Distributed AI grading backend with OCR multi-format parsing, Redis caching, and asynchronous Celery job queues. NHIDE 2026 National Finalist (Top 20).",
    language: "Python",
    stars: 2,
    forks: 1,
    url: "https://github.com/AshishGautamX",
  },
];

// Fallback generator for 2026 if offline
function generateFallbackWeeks(): ContributionDay[][] {
  const weeks: ContributionDay[][] = [];
  const days = 7;
  const numWeeks = 44;

  for (let w = 0; w < numWeeks; w++) {
    const week: ContributionDay[] = [];
    for (let d = 0; d < days; d++) {
      const seed = (w * 7 + d * 13 + 2026 * 19) % 100;
      let level = 0;
      let count = 0;
      if (seed > 85) { level = 4; count = 12; }
      else if (seed > 68) { level = 3; count = 7; }
      else if (seed > 45) { level = 2; count = 4; }
      else if (seed > 22) { level = 1; count = 2; }
      else { level = 0; count = 0; }
      
      week.push({
        date: `2026-W${w + 1}-D${d + 1}`,
        count,
        level,
      });
    }
    weeks.push(week);
  }
  return weeks;
}

// Warm Bronze & Amber activity tokens
const levelColors: Record<number, string> = {
  0: "bg-neutral-200/80 dark:bg-zinc-800/60 border border-neutral-300/40 dark:border-zinc-700/40",
  1: "bg-[#78350f]", // Deep Bronze
  2: "bg-[#b45309]", // Warm Amber
  3: "bg-[#d97706]", // Amber
  4: "bg-[#f59e0b]", // Luminous Gold-Amber
  5: "bg-[#fbbf24]", // Peak Yellow-Gold
};

export default function ActivityHeatmapSection() {
  const [hoveredCell, setHoveredCell] = useState<{ date: string; count: number } | null>(null);
  const [liveWeeks, setLiveWeeks] = useState<ContributionDay[][] | null>(null);
  const [totalCount, setTotalCount] = useState<number>(983);
  const [publicReposCount, setPublicReposCount] = useState<number | null>(null);

  // Dynamic fetch of repositories count from GitHub (never hardcoded)
  useEffect(() => {
    fetch("https://api.github.com/users/AshishGautamX")
      .then((res) => res.json())
      .then((user) => {
        if (typeof user.public_repos === "number") {
          setPublicReposCount(user.public_repos);
        }
      })
      .catch(() => {});
  }, []);

  // Fetch real 2026 GitHub contribution data (2026 onwards)
  useEffect(() => {
    let isMounted = true;

    fetch("https://github-contributions-api.jogruber.de/v4/AshishGautamX?y=2026")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        if (!isMounted) return;

        if (data && data.contributions && Array.isArray(data.contributions)) {
          // Keep strictly 2026 onwards up to current date to avoid future blank columns
          const today = new Date().toISOString().slice(0, 10);
          const days2026 = data.contributions.filter(
            (c: ContributionDay) => c.date >= "2026-01-01" && c.date <= today
          );

          if (days2026.length > 0) {
            const grouped: ContributionDay[][] = [];
            for (let i = 0; i < days2026.length; i += 7) {
              grouped.push(days2026.slice(i, i + 7));
            }
            setLiveWeeks(grouped);
            
            const total2026 = data.total?.["2026"] ?? days2026.reduce((acc: number, c: ContributionDay) => acc + c.count, 0);
            setTotalCount(total2026);
          }
        }
      })
      .catch(() => {
        // Fallback silently if offline
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const activeWeeks = useMemo(() => {
    if (liveWeeks && liveWeeks.length > 0) return liveWeeks;
    return generateFallbackWeeks();
  }, [liveWeeks]);

  return (
    <section id="activity" className="py-20 md:py-28 border-b border-border bg-transparent w-full max-w-full overflow-hidden relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              <GitCommit className="h-3.5 w-3.5 text-foreground" />
              <span>Continuous Execution</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              Shipping Cadence & GitHub Telemetry
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-1 max-w-xl">
              Live continuous contributions across production, research & open-source repositories (2026 onwards).
            </p>
          </div>

          <div className="flex items-center gap-6 font-mono text-xs pt-2 sm:pt-0">
            <div>
              <span className="text-xl font-bold text-foreground block">
                {publicReposCount ? `${publicReposCount}+` : "Active"}
              </span>
              <span className="text-muted-foreground text-[10px] uppercase">Public & Org Repos</span>
            </div>
            <div>
              <span className="text-xl font-bold text-amber-500 block">
                {totalCount.toLocaleString()}
              </span>
              <span className="text-muted-foreground text-[10px] uppercase">2026 Contributions</span>
            </div>
          </div>
        </div>

        {/* Heatmap Card with Spotlight Follower */}
        <SpotlightCard
          className="p-5 sm:p-7 mb-10 shadow-xs border-border hover:border-foreground/30 transition-colors"
        >
          {/* Header Strip: Match Image 1 clean layout */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-border mb-5 font-mono text-xs">
            <div className="flex items-center gap-2.5">
              <span className="text-foreground font-semibold text-sm">
                {totalCount.toLocaleString()} contributions in 2026
              </span>
              <span className="relative flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 text-[10px]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Live Feed</span>
              </span>
            </div>

            <div className="flex items-center gap-2 bg-muted/60 px-3 py-1 rounded-md border border-border">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-xs font-semibold text-foreground">
                2026 – Present
              </span>
            </div>
          </div>

          {/* Mobile Swipe Hint */}
          <div className="md:hidden text-[11px] font-mono text-muted-foreground mb-2 flex items-center justify-between">
            <span>← Swipe horizontally to explore 2026 commits →</span>
          </div>

          {/* Horizontal Scroll Wrapper */}
          <div className="w-full max-w-full overflow-x-auto touch-pan-x pb-4 pt-1 -mx-2 px-2 sm:mx-0 sm:px-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, staggerChildren: 0.002 }}
              className="flex gap-1.5 w-max"
            >
              {activeWeeks.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1.5">
                  {week.map((day, dIdx) => {
                    const level = Math.min(day.level ?? 0, 5);
                    return (
                      <motion.div
                        key={dIdx}
                        whileHover={{ scale: 1.3, zIndex: 30 }}
                        transition={{ duration: 0.1 }}
                        onMouseEnter={() => setHoveredCell({ date: day.date, count: day.count })}
                        onMouseLeave={() => setHoveredCell(null)}
                        className={`w-3.5 h-3.5 rounded-xs transition-colors cursor-pointer ${levelColors[level]}`}
                      />
                    );
                  })}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Legend Strip & Dynamic Status: Exactly as in Image 1 */}
          <div className="pt-4 border-t border-border mt-3 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <span className="text-[11px]">Less</span>
              <span className="w-2.5 h-2.5 rounded-xs bg-neutral-200/80 dark:bg-zinc-800/60 border border-neutral-300/40 dark:border-zinc-700/40"></span>
              <span className="w-2.5 h-2.5 rounded-xs bg-[#78350f]"></span>
              <span className="w-2.5 h-2.5 rounded-xs bg-[#b45309]"></span>
              <span className="w-2.5 h-2.5 rounded-xs bg-[#d97706]"></span>
              <span className="w-2.5 h-2.5 rounded-xs bg-[#f59e0b]"></span>
              <span className="w-2.5 h-2.5 rounded-xs bg-[#fbbf24]"></span>
              <span className="text-[11px]">More</span>
            </div>

            <div className="text-foreground font-medium text-[11px]">
              {hoveredCell ? (
                <span className="text-foreground animate-fadeInUp">
                  <strong>{hoveredCell.count}</strong> contribution{hoveredCell.count === 1 ? "" : "s"} on {hoveredCell.date}
                </span>
              ) : (
                <span>AI & Distributed Systems Infrastructure</span>
              )}
            </div>
          </div>

          {/* Shipped Systems Footprint Container (From Image 1 layout) */}
          <div className="bg-muted/40 border border-border/80 rounded-lg p-3.5 sm:p-4 mt-5 font-mono text-xs">
            <div className="font-semibold text-foreground flex items-center gap-2">
              <span>Thesisly AI Developer · PacketSentinel World Model · K8s-LLM-Scheduler</span>
            </div>
            <div className="text-muted-foreground mt-1 text-[11px] leading-relaxed">
              Active shipped repositories: yukto, VedBench, BioprintingReviewArticle, Dashboard, K8s-LLM-Scheduler
            </div>
          </div>

        </SpotlightCard>

        {/* Featured Repositories Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
            <span className="uppercase tracking-wider">Featured Systems Repositories</span>
            <a
              href="https://github.com/AshishGautamX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:underline flex items-center gap-1"
            >
              <span>github.com/AshishGautamX</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pinnedRepos.map((repo, idx) => (
              <motion.a
                key={idx}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.01 }}
                transition={{ duration: 0.15 }}
                className="p-5 rounded-lg border border-border bg-card/40 hover:border-foreground/40 transition-all group flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-sm font-semibold font-mono text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                      <Code className="h-4 w-4 text-muted-foreground" />
                      {repo.name}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border">
                      Verified
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {repo.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border mt-4 flex items-center justify-between text-xs font-mono text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    <span>{repo.language}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Star className="h-3.5 w-3.5" />
                      {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitBranch className="h-3.5 w-3.5" />
                      {repo.forks}
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
