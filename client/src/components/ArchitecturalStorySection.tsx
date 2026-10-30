import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Cpu, ShieldCheck, GitCommit, ArrowRight, CheckCircle2, Server, Activity } from "lucide-react";

interface Chapter {
  id: string;
  number: string;
  epoch: string;
  label: string;
  title: string;
  narrative: string;
  metricValue: string;
  metricLabel: string;
  stack: string[];
  proofPoints: string[];
  status: string;
}

const chapters: Chapter[] = [
  {
    id: "orchestration",
    number: "01",
    epoch: "2025 – PRESENT",
    label: "SYSTEMS FOUNDATIONS",
    title: "Centralized reporting and 17+ REST APIs at Adcuesta.",
    narrative:
      "Working as a Software Developer Intern at Adcuesta, I took end-to-end ownership of building and shipping a production-grade operations dashboard across 12 screens. By engineering a centralized reporting layer and writing high-efficiency SQL queries across 7 core business processes, we cut manual reporting time by 60–80%.",
    metricValue: "60–80%",
    metricLabel: "REPORTING TIME SAVED",
    stack: ["Next.js", "TypeScript", "SQL Databases", "REST APIs"],
    proofPoints: [
      "12 production admin screens shipped end-to-end",
      "Integrated 17+ backend REST APIs for operational workflows",
      "Consolidated 7 core business processes, cutting setup time by 50–70%"
    ],
    status: "In Production"
  },
  {
    id: "inference",
    number: "02",
    epoch: "2025 – PRESENT",
    label: "INFERENCE & QUANTIZATION",
    title: "Model scaling, Dockerization, and latency reduction at Thesisly.",
    narrative:
      "At Thesisly as an AI Developer, I debugged, optimized, and scaled backend AI model systems to support 1,000+ active users. By implementing model quantization and containerization, we reduced inference latency by 40% while raising model accuracy by 15% through hyperparameter tuning and automated CI/CD pipelines.",
    metricValue: "-40%",
    metricLabel: "INFERENCE LATENCY CUT",
    stack: ["PyTorch", "Model Quantization", "Docker", "CI/CD (Git)"],
    proofPoints: [
      "Scaled backend AI serving for 1,000+ concurrent active users",
      "Shipped automated CI/CD pipelines achieving 95% test coverage",
      "Reduced deployment bugs by 60% and accelerated release cadence"
    ],
    status: "Live & Scaled"
  },
  {
    id: "defense",
    number: "03",
    epoch: "2025 – 2026",
    label: "WORLD MODELS & DEFENSE",
    title: "ISRO Quantum Frontiers Award & PacketSentinel World Model.",
    narrative:
      "Honored as National Winner of ISRO's Quantum Frontiers Award at Smart India Hackathon 2025 among 15,000+ participants for building a quantum-secure architecture. Concurrently architected PacketSentinel: a 3.28M parameter Transformer-based world model for temporal intrusion detection, cutting false alarms by 17.7x.",
    metricValue: "92.41%",
    metricLabel: "MACRO-F1 ACCURACY",
    stack: ["PyTorch", "Transformers", "Captum", "Post-Quantum Crypto"],
    proofPoints: [
      "ISRO Quantum Frontiers Award at SIH 2025 (15,000+ competitors)",
      "92.41% Macro-F1 at 0.56% FPR on 91-feature continuous PCAP pipelines",
      "Served 16,190 windows/sec inference throughput on NVIDIA L4 GPU"
    ],
    status: "SIH National Winner"
  },
  {
    id: "cadence",
    number: "04",
    epoch: "2026 – PRESENT",
    label: "SHIPPING CADENCE",
    title: "1,024 contributions: distributed queues, schedulers & open source.",
    narrative:
      "Engineering excellence is an active daily practice. Across public and private engineering repositories, I built intelligent Kubernetes schedulers (K8s-LLM-Scheduler with Llama-3.3-70B), full-stack AI grading backends with Celery and Redis (Mulyankan AI, NHIDE National Finalist), and fine-tuned Phi-3 models with LoRA adapters.",
    metricValue: "1,000+",
    metricLabel: "ANNUAL CONTRIBUTIONS",
    stack: ["Kubernetes", "Redis", "Celery", "FastAPI", "PostgreSQL"],
    proofPoints: [
      "NHIDE 2026 National Finalist (Top 20 teams nationally for Mulyankan AI)",
      "K8s-LLM-Scheduler: Autonomous pod scheduling with fallback circuit breakers",
      "Consistently maintained public and private production code repositories"
    ],
    status: "Active Shipping"
  }
];

export default function ArchitecturalStorySection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeChapter = chapters[activeIdx];

  return (
    <section id="story" className="py-24 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-foreground inline-block"></span>
            <span>Architectural Progression</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-foreground">
            From Software Engineering to AI & Distributed Systems
          </h2>
          <p className="text-sm text-muted-foreground mt-2 max-w-2xl font-mono">
            A structured sequence of engineering challenges solved, from high-throughput operations dashboards to transformer world models and quantum-secure defenses.
          </p>
        </div>

        {/* Storytelling Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Chapter Selector Rail */}
          <div className="lg:col-span-4 space-y-2 font-mono">
            {chapters.map((ch, idx) => {
              const isSelected = idx === activeIdx;
              return (
                <button
                  key={ch.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-full text-left p-4 rounded-md border transition-all flex items-start justify-between gap-4 ${
                    isSelected
                      ? "bg-card border-foreground/30 shadow-sm"
                      : "bg-transparent border-border/50 text-muted-foreground hover:border-border hover:text-foreground"
                  }`}
                  data-testid={`story-chapter-${ch.id}`}
                >
                  <div className="flex items-start gap-3">
                    <span className={`text-xs font-bold pt-0.5 ${isSelected ? "text-foreground" : "text-muted-foreground/60"}`}>
                      {ch.number}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-semibold uppercase tracking-wider ${isSelected ? "text-foreground" : "text-muted-foreground"}`}>
                          {ch.label}
                        </span>
                      </div>
                      <span className="text-[11px] text-muted-foreground/80 block mt-0.5">
                        {ch.epoch}
                      </span>
                    </div>
                  </div>
                  {isSelected && (
                    <ArrowRight className="h-4 w-4 text-foreground shrink-0 mt-1" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Chapter Display */}
          <div className="lg:col-span-8 bg-card border border-border rounded-lg p-7 md:p-8 relative min-h-[360px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeChapter.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="space-y-6"
              >
                {/* Header Tagline */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-muted text-foreground border border-border">
                      {activeChapter.label} · {activeChapter.epoch}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    {activeChapter.status}
                  </span>
                </div>

                {/* Main Chapter Title and Prose */}
                <div>
                  <h3 className="text-xl md:text-2xl font-normal text-foreground tracking-tight">
                    {activeChapter.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-3 font-sans">
                    {activeChapter.narrative}
                  </p>
                </div>

                {/* Proof Points */}
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider block">
                    Verified Production Deliverables:
                  </span>
                  <div className="grid grid-cols-1 gap-2">
                    {activeChapter.proofPoints.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs text-foreground/90 font-mono">
                        <CheckCircle2 className="h-3.5 w-3.5 text-foreground shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Metric & Tech Strip */}
                <div className="pt-6 border-t border-border/60 flex flex-wrap items-center justify-between gap-4 font-mono">
                  <div>
                    <span className="text-2xl font-bold text-foreground">
                      {activeChapter.metricValue}
                    </span>
                    <span className="block text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">
                      {activeChapter.metricLabel}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {activeChapter.stack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] px-2 py-1 rounded bg-muted/60 text-foreground border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}

