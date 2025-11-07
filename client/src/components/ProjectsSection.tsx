import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

import dashboardImg from "@assets/generated_images/Research_Dashboard_Interface_a66c6db9.png";
import reportGenImg from "@assets/generated_images/APA_Report_Generator_App_da4e5f7b.png";
import dataVizImg from "@assets/generated_images/Data_Visualization_Platform_08fd2e3b.png";
import docsPortalImg from "@assets/generated_images/Documentation_Portal_Interface_b0ae8268.png";

const projects = [
  {
    title: "Automated Research Dashboard",
    description:
      "Interactive dashboard built with Python and Flask for real-time research data analysis and visualization.",
    image: dashboardImg,
    tags: ["Python", "Flask", "Data Analysis"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Publication-Ready APA Report Generator",
    description:
      "React-based tool that generates publication-ready research reports in APA format with automated citations.",
    image: reportGenImg,
    tags: ["React", "TypeScript", "APA"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Data Visualization Platform",
    description:
      "Interactive charting platform with real-time data visualization capabilities and customizable dashboards.",
    image: dataVizImg,
    tags: ["JavaScript", "D3.js", "Charts"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Technical Documentation Portal",
    description:
      "Automated system for converting Markdown documentation to professionally formatted PDF reports.",
    image: docsPortalImg,
    tags: ["Node.js", "Markdown", "PDF"],
    demoUrl: "#",
    codeUrl: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-semibold text-center mb-16"
          data-testid="text-section-projects"
        >
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-elevate transition-all duration-300"
              data-testid={`card-project-${index}`}
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  data-testid={`img-project-${index}`}
                />
              </div>

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

                <div className="flex gap-3 pt-2">
                  <Button
                    variant="default"
                    size="sm"
                    onClick={() => console.log(`View demo: ${project.title}`)}
                    data-testid={`button-demo-${index}`}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => console.log(`View code: ${project.title}`)}
                    data-testid={`button-code-${index}`}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
