import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, FileText, BarChart3, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [animatedValues, setAnimatedValues] = useState(skills.map(() => 0));

  useEffect(() => {
    if (isInView) {
      skills.forEach((skill, index) => {
        let progress = 0;
        const interval = setInterval(() => {
          progress += 2;
          if (progress >= skill.proficiency) {
            progress = skill.proficiency;
            clearInterval(interval);
          }
          setAnimatedValues(prev => {
            const newValues = [...prev];
            newValues[index] = progress;
            return newValues;
          });
        }, 20);
      });
    }
  }, [isInView]);

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
                      <span className="font-medium">{animatedValues[index]}%</span>
                    </div>
                    <Progress value={animatedValues[index]} className="h-2" />
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
