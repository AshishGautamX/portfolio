import { Code, Cpu, Database, Wrench, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

interface SkillCategory {
  title: string;
  icon: typeof Code;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages & Core Tools",
    icon: Code,
    skills: ["Python", "SQL", "C/C++", "JavaScript", "HTML/CSS", "Bash/Linux", "Git"],
  },
  {
    title: "AI/ML Systems & Optimization",
    icon: Cpu,
    skills: ["PyTorch", "Transformers", "LoRA", "HuggingFace", "Quantization", "Captum", "Model Pruning", "Inference Pipelines"],
  },
  {
    title: "Distributed Backends & Caching",
    icon: Database,
    skills: ["FastAPI", "Celery Workers", "Redis", "PostgreSQL", "Prisma ORM", "Docker", "REST APIs"],
  },
  {
    title: "Cloud Infrastructure & Networking",
    icon: Wrench,
    skills: ["Kubernetes (K8s)", "Pod Schedulers", "Circuit Breakers", "PCAP Analysis", "Socket Protocols", "CI/CD Actions"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-28 border-b border-border bg-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with Scroll Fade */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            <Terminal className="h-3.5 w-3.5 text-foreground" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-foreground" data-testid="text-section-skills">
            Skills & Infrastructure Stack
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-2xl">
            Core systems programming, machine learning toolchains, and distributed backends.
          </p>
        </motion.div>

        {/* Categories Grid with Staggered Scroll Animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
              >
                <SpotlightCard
                  className="p-5 sm:p-7 rounded-xl border border-border bg-card/50 backdrop-blur-xs space-y-4 shadow-xs h-full"
                  data-testid={`card-skill-${idx}`}
                >
                  <div className="flex items-center gap-2.5 border-b border-border pb-3">
                    <Icon className="h-4 w-4 text-foreground" />
                    <h3 className="text-base font-semibold text-foreground tracking-tight">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md bg-muted/80 text-foreground border border-border text-[11px] sm:text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
