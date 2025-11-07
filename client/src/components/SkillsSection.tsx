import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, FileText, BarChart3, BookOpen } from "lucide-react";

const skills = [
  {
    name: "Full-stack Development",
    description: "HTML, CSS, JS, React, Python, Flask, Node.js",
    icon: Code,
    proficiency: 90,
  },
  {
    name: "Research Report Writing",
    description: "APA / IEEE / Harvard formats",
    icon: FileText,
    proficiency: 85,
  },
  {
    name: "Data Visualization",
    description: "Charts, Dashboards, Automation",
    icon: BarChart3,
    proficiency: 88,
  },
  {
    name: "Technical Documentation",
    description: "Academic-type reporting",
    icon: BookOpen,
    proficiency: 87,
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-semibold text-center mb-16"
          data-testid="text-section-skills"
        >
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card
                key={index}
                className="p-6 hover-elevate transition-all duration-300"
                data-testid={`card-skill-${index}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-md bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-xl font-semibold mb-1"
                      data-testid={`text-skill-name-${index}`}
                    >
                      {skill.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Proficiency</span>
                    <span className="font-medium">{skill.proficiency}%</span>
                  </div>
                  <Progress value={skill.proficiency} className="h-2" />
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
