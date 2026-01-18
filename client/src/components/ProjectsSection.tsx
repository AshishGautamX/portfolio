import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    title: "SmearVision AI",
    description:
      "Developed ensemble deep-learning pipeline combining 4 architectures (ResNet50, EfficientNet-B2, DenseNet121, ViT) for Multiple Myeloma detection, achieving 100% sensitivity and 0.867 F1-score on 1,615 clinical plasma cell images. Implemented patient-aware data splitting preventing data leakage.",
    tags: ["Python", "PyTorch", "timm", "Optuna", "OpenCV"],
    demoUrl: "https://github.com/AshishGautamX/SmearVision-AI",
    codeUrl: "https://github.com/AshishGautamX/SmearVision-AI",
  },
  {
    title: "AI-Powered Essay Grader",
    description:
      "Fine-tuned Phi-3-mini (3.8B parameters) using LoRA on 10,000+ essay samples, achieving 85% agreement rate with human graders. Optimized model size by 75% via 4-bit quantization, enabling deployment on consumer hardware with 2GB VRAM while maintaining 90% of original accuracy.",
    tags: ["Python", "PyTorch", "LoRA", "Hugging Face"],
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
              className="h-full"
            >
              <Card
                className="overflow-hidden transition-all duration-300 hover:shadow-2xl h-full flex flex-col"
                data-testid={`card-project-${index}`}
              >
                <motion.div
                  className="aspect-video overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-background"
                  animate={{
                    scale: hoveredIndex === index ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full flex items-center justify-center text-primary/20">
                    <Github className="w-16 h-16 opacity-50" />
                  </div>
                </motion.div>

                <div className="p-6 space-y-4 flex flex-col flex-grow">
                  <h3
                    className="text-xl font-semibold"
                    data-testid={`text-project-title-${index}`}
                  >
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed flex-grow">{project.description}</p>

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
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.codeUrl, '_blank')}
                      data-testid={`button-code-${index}`}
                      className="transition-transform hover:scale-105"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      View on GitHub
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