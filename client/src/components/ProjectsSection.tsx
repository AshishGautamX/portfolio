import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    title: "SwayamGrading",
    description:
      "SwayamGrading is an AI-powered grading application designed to help educators automate evaluation and provide instant, transparent, and consistent results. The app supports assignment uploads, automatic evaluation, analytics, and feedback generation—reducing manual effort and saving time for both teachers and students.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
    tags: ["AI", "Education", "Flask", "NLP"],
    demoUrl: "https://swayamgrading.onrender.com",
    codeUrl: "https://swayamgrading.onrender.com",
  },
  {
    title: "AI Essay Grader",
    description:
      "An AI-powered essay grading system using fine-tuned Phi-3 model with LoRA adapters for automated assessment of student answers across multiple subjects.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
    tags: ["AI", "Machine Learning", "Python", "LoRA"],
    demoUrl: "https://github.com/AshishGautamX/ai-essay-grader",
    codeUrl: "https://github.com/AshishGautamX/ai-essay-grader",
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 md:py-32" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-center mb-16"
          data-testid="text-section-projects"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <Card
                className="overflow-hidden transition-all duration-300 hover:shadow-2xl"
                data-testid={`card-project-${index}`}
              >
                <motion.div
                  className="aspect-video overflow-hidden bg-muted"
                  animate={{
                    scale: hoveredIndex === index ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    data-testid={`img-project-${index}`}
                  />
                </motion.div>

                <div className="p-6 space-y-4">
                  <h3
                    className="text-xl font-semibold"
                    data-testid={`text-project-title-${index}`}
                  >
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" data-testid={`badge-tag-${index}-${tagIndex}`}>
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <motion.div
                    className="flex gap-3 pt-2"
                    initial={{ opacity: 0.7 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0.7 }}
                  >
                    <Button
                      variant="default"
                      size="sm"
                      onClick={() => window.open(project.demoUrl, '_blank')}
                      data-testid={`button-demo-${index}`}
                      className="transition-transform hover:scale-105"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.codeUrl, '_blank')}
                      data-testid={`button-code-${index}`}
                      className="transition-transform hover:scale-105"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      View Code
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