import { ExternalLink, Github, Terminal, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

interface Project {
  title: string;
  category: string;
  tagline: string;
  description: string;
  keyHighlights: string[];
  metrics: { label: string; value: string }[];
  techStack: string[];
  codeUrl?: string;
  liveUrl?: string;
  award?: string;
}

const projects: Project[] = [
  {
    title: "PacketSentinel",
    category: "World Model & Network Security",
    tagline: "Transformer world model for continuous temporal network intrusion detection",
    description:
      "Engineered an autoregressive world model (3.28M parameters) forecasting network states over a 91-feature continuous PCAP pipeline. Addressed extreme 80%+ class imbalance using Focal Loss and effective-number weighting, outperforming baseline models by 17.7x in false-alarm reduction.",
    keyHighlights: [
      "92.41% Macro-F1 at 0.56% False Positive Rate on real-world intrusion PCAPs",
      "Generalized to CIC-IoT-2023 at 99.83% Macro-F1 with zero architecture changes",
      "Streamlit inference dashboard with Captum attribution, serving 16,190 windows/sec on an NVIDIA L4 GPU",
    ],
    metrics: [
      { label: "Macro-F1", value: "92.41%" },
      { label: "False Alarm Cut", value: "17.7x" },
      { label: "Throughput", value: "16,190 w/s" },
    ],
    techStack: ["PyTorch", "Transformers", "Captum", "Streamlit", "NVIDIA L4"],
    codeUrl: "https://github.com/AshishGautamX/PacketSentinel",
  },
  {
    title: "Mulyankan AI (SwayamGrading)",
    category: "Distributed AI Systems",
    tagline: "Full-stack AI grading engine with asynchronous OCR & Celery queues",
    award: "NHIDE 2026 National Finalist · Top 20 Nationally",
    description:
      "Designed robust backend REST APIs and distributed job queues for an automated assessment platform evaluating 9+ curriculum tiers. Handled multi-format submissions (PDF, DOCX, handwritten scans) via an asynchronous OCR pipeline, saving educators 3–5 hours per week.",
    keyHighlights: [
      "Fault-tolerant batch processing using Redis caching and Celery background workers",
      "Centralized schema design with PostgreSQL and Prisma with real-time evaluation polling",
      "Recognized among top 20 teams nationally at the NHIDE 2026 Hackathon",
    ],
    metrics: [
      { label: "Workload Cut", value: "3–5 hrs/wk" },
      { label: "Standing", value: "Top 20 Teams" },
      { label: "Curricula", value: "9+ Tiers" },
    ],
    techStack: ["Python", "FastAPI", "PostgreSQL", "Redis", "Celery", "Prisma"],
    codeUrl: "https://github.com/AshishGautamX",
    liveUrl: "https://mulyankanai.netlify.app/",
  },
  {
    title: "K8s-LLM-Scheduler",
    category: "Cloud-Native Infrastructure",
    tagline: "Intelligent Kubernetes pod scheduler powered by Meta's Llama-3.3-70B",
    description:
      "Custom Kubernetes scheduler using Meta's Llama-3.3-70B model via HuggingFace Inference API to analyze cluster telemetry and determine optimal node placement under varying traffic loads.",
    keyHighlights: [
      "Configurable circuit breakers and exponential backoff retry fallbacks",
      "Dynamic token caching for sub-50ms repeat scheduling decisions",
      "Containerized lightweight deployment ready for bare-metal or cloud K8s clusters",
    ],
    metrics: [
      { label: "LLM Model", value: "Llama-3.3-70B" },
      { label: "Availability", value: "Circuit-Ready" },
      { label: "Cache Hit", value: ">85%" },
    ],
    techStack: ["Python", "Kubernetes", "Meta Llama-3.3-70B", "HuggingFace", "Docker"],
    codeUrl: "https://github.com/AshishGautamX/K8s-LLM-Scheduler",
  },
  {
    title: "Quantum-Secure Architecture",
    category: "Defense Protocols",
    tagline: "Cryptographic defense protocol for eavesdropping-resistant communication",
    award: "SIH 2025 National Winner · ISRO's Quantum Frontiers Award",
    description:
      "Awarded ISRO's Quantum Frontiers Award among 15,000+ competitors at Smart India Hackathon 2025 for engineering a post-quantum secure communication system protecting mission-critical network channels against timing analysis and eavesdropping.",
    keyHighlights: [
      "Evaluated by national scientists from ISRO and defense intelligence",
      "Engineered hardware-aware cryptographic key verification protocols",
      "Validated fundamental systems engineering and algorithm complexity",
    ],
    metrics: [
      { label: "Award", value: "ISRO Winner" },
      { label: "Competitors", value: "15,000+ Teams" },
      { label: "Security", value: "Post-Quantum" },
    ],
    techStack: ["Python", "Post-Quantum Cryptography", "Socket Protocols", "Network Security"],
    codeUrl: "https://github.com/AshishGautamX",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-28 border-b border-border bg-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            <Terminal className="h-3.5 w-3.5 text-foreground" />
            <span>Featured Deliverables</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-foreground" data-testid="text-section-projects">
            Systems & Infrastructure Projects
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-2xl">
            Transformer world models, distributed job queues, and cloud-native schedulers with verified metrics.
          </p>
        </div>

        {/* Project Cards with Spotlight Cursor Tracking */}
        <div className="space-y-8 md:space-y-12">
          {projects.map((project, index) => (
            <SpotlightCard
              key={index}
              className="p-6 sm:p-8 rounded-xl border border-border bg-card/50 hover:border-foreground/40 transition-colors space-y-6 shadow-xs hover:shadow-md relative overflow-hidden"
              data-testid={`card-project-${index}`}
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-border pb-5">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                      {project.title}
                    </h3>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-muted text-foreground border border-border">
                      {project.category}
                    </span>
                    {project.award && (
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-500 border border-amber-500/30">
                        {project.award}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground font-mono">
                    {project.tagline}
                  </p>
                </div>

                {/* Links */}
                <div className="flex items-center gap-2 shrink-0 pt-2 sm:pt-0">
                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-md border border-border hover:bg-muted text-foreground text-xs font-mono transition-colors flex items-center gap-1.5 min-h-[44px]"
                      data-testid={`link-code-${index}`}
                    >
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-md bg-foreground text-background hover:bg-foreground/90 text-xs font-mono transition-colors flex items-center gap-1.5 min-h-[44px]"
                      data-testid={`link-demo-${index}`}
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              {/* Key Highlights */}
              <div className="space-y-2 pt-1 font-mono text-xs">
                {project.keyHighlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-foreground/90">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground shrink-0 mt-1.5" />
                    <span className="leading-relaxed">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Metrics & Tech Stack */}
              <div className="pt-4 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
                <div className="flex flex-wrap gap-4">
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx}>
                      <span className="font-bold text-foreground text-sm block">
                        {m.value}
                      </span>
                      <span className="text-[10px] text-muted-foreground uppercase">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 sm:pt-0">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-muted text-muted-foreground text-[11px] border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
}
