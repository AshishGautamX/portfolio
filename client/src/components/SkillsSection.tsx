import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Flame, Code, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  {
    name: "Applied AI Development",
    technologies: ["LLMs", "NLP", "AI Automation", "Flask AI Apps", "Prompt Engineering"],
    icon: Flame,
  },
  {
    name: "Cloud-Native DevOps & MLOps",
    technologies: ["Docker", "Kubernetes", "Microservices", "Automation", "Orchestration"],
    icon: Code,
  },
  {
    name: "Full-stack Development",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Python", "Flask", "Node.js"],
    icon: Code,
  },
  {
    name: "Research Report Writing",
    technologies: ["APA Format", "IEEE Format", "Harvard Format", "Academic Writing"],
    icon: FileText,
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 md:py-32 bg-card/30" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-center mb-16"
          data-testid="text-section-skills"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="p-6 hover-elevate transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  data-testid={`card-skill-${index}`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div
                      className="p-3 rounded-md bg-primary/10"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="h-6 w-6 text-primary" />
                    </motion.div>
                    <div className="flex-1">
                      <h3
                        className="text-xl font-semibold mb-3"
                        data-testid={`text-skill-name-${index}`}
                      >
                        {skill.name}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {skill.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="text-xs"
                            data-testid={`badge-tech-${index}-${techIndex}`}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}