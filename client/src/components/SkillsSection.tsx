import { Code, Cpu, Database, Wrench, Terminal } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: typeof Code;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: Code,
    skills: ["Python", "SQL", "C/C++", "JavaScript", "HTML/CSS"],
  },
  {
    title: "AI/ML & Frameworks",
    icon: Cpu,
    skills: ["PyTorch", "FastAPI", "Django", "Flask", "Next.js", "React", "Node.js", "Express.js"],
  },
  {
    title: "Databases & Caching",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "Redis", "Supabase", "MongoDB"],
  },
  {
    title: "Infrastructure & Tools",
    icon: Wrench,
    skills: ["AWS", "Docker", "Git", "GitHub Actions", "CI/CD Pipelines", "REST APIs", "Postman"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-28 border-b border-border bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
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
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-xl border border-border bg-card/40 space-y-4"
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
                      className="px-3 py-1 rounded-md bg-muted text-foreground border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
