import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    title: "Mulyankan AI",
    subtitle: "AI-Powered Grading Platform",
    description:
      "Full-stack AI grading platform with JWT-secured REST APIs and rubric-based evaluation across 9+ curriculum levels. Integrated OCR pipeline and batch grading jobs with real-time status polling, supporting PDF, DOCX, and image submissions.",
    impact: [
      "Reduces teacher grading workload by 3–5 hrs/week",
      "Criterion-wise scores with AI-generated feedback",
      "Multi-format submissions: PDF, DOCX, images",
    ],
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "Ollama", "Gemini API"],
    demoUrl: "https://mulyankanai.netlify.app/",
    codeUrl: "https://github.com/AshishGautamX",
    hasLive: true,
    period: "Jan 2025 – Sep 2025",
    gradient: "from-violet-500/20 via-purple-500/10 to-background",
    accentColor: "border-violet-500/40",
    badgeColor: "bg-violet-500/10 text-violet-400 border-violet-500/30",
  },
  {
    title: "NextGame Platform",
    subtitle: "Full-Stack Gaming Platform",
    description:
      "Engineered mobile gameplay for 37+ game files via viewport scaling, swipe, D-pad, and touch-to-mouse input layers. Led full-stack migration from PHP to Next.js App Router, building 13 REST API route handlers, 11 pages, and 10 reusable components.",
    impact: [
      "37+ games with mobile touch controls",
      "Session-protected dynamic routes with point rewards",
      "Preserved 4 legacy MySQL tables via Prisma",
    ],
    tags: ["Next.js", "React", "TypeScript", "Prisma", "MySQL", "App Router"],
    demoUrl: "https://playcade.store",
    codeUrl: "https://github.com/AshishGautamX",
    hasLive: true,
    period: "Dec 2025 – Present",
    gradient: "from-cyan-500/20 via-blue-500/10 to-background",
    accentColor: "border-cyan-500/40",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 md:py-32" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl md:text-4xl font-semibold mb-4"
            data-testid="text-section-projects"
          >
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Production-grade applications — live, used daily, built to scale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="h-full"
            >
              <Card
                className={`overflow-hidden transition-all duration-300 hover:shadow-2xl h-full flex flex-col border-2 ${project.accentColor} hover:scale-[1.01]`}
                data-testid={`card-project-${index}`}
              >
                {/* Header gradient band */}
                <div className={`bg-gradient-to-br ${project.gradient} px-6 pt-6 pb-4`}>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h3
                        className="text-xl font-bold text-foreground"
                        data-testid={`text-project-title-${index}`}
                      >
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-0.5">{project.subtitle}</p>
                    </div>
                    {/* Live badge */}
                    {project.hasLive && (
                      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/15 border border-green-500/30 text-green-400 text-xs font-semibold shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        Live
                      </span>
                    )}
                  </div>
                  <Badge variant="outline" className="text-xs text-muted-foreground border-border/50">
                    {project.period}
                  </Badge>
                </div>

                <div className="p-6 space-y-4 flex flex-col flex-grow">
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Impact bullets */}
                  <ul className="space-y-1.5">
                    {project.impact.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className={`text-xs ${project.badgeColor}`}
                        data-testid={`badge-tag-${index}-${tagIndex}`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <motion.div
                    className="flex gap-3 pt-2 mt-auto"
                    initial={{ opacity: 0.7 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0.8 }}
                  >
                    {project.hasLive && (
                      <Button
                        size="sm"
                        onClick={() => window.open(project.demoUrl, "_blank")}
                        data-testid={`button-live-${index}`}
                        className="bg-green-600 hover:bg-green-500 text-white gap-2 transition-all hover:scale-105 shadow-md hover:shadow-green-500/25"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Site
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.codeUrl, "_blank")}
                      data-testid={`button-code-${index}`}
                      className="transition-transform hover:scale-105 gap-2"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </Button>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}