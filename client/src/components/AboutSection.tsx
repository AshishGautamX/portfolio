import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Trophy,
  Zap,
  Monitor,
  TrendingUp,
  Briefcase,
  GraduationCap,
  Calendar,
  Award
} from "lucide-react";

const skillsData = [
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
];

const ScrollingSkills = () => {
  const [isPaused, setIsPaused] = useState(false);
  const triplicatedSkills = [...skillsData, ...skillsData, ...skillsData];

  return (
    <div className="relative overflow-hidden py-8">
      <motion.div
        className="flex gap-8"
        animate={{
          x: isPaused ? undefined : [0, -(skillsData.length * 88)],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 50,
            ease: "linear",
          },
        }}
        style={{ width: "max-content" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {triplicatedSkills.map((skill, index) => (
          <motion.div
            key={`skill-${index}`}
            className="flex flex-col items-center gap-2 min-w-[80px]"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-16 h-16 flex items-center justify-center bg-card rounded-lg shadow-lg p-3 border-2 border-border">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-full h-full object-contain dark:brightness-100 brightness-90 contrast-110"
                style={{ filter: "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))" }}
              />
            </div>
            <span className="text-xs font-medium text-foreground">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const stats = [
  { label: "Production Screens", value: "12+", icon: Monitor, color: "text-primary" },
  { label: "APIs Integrated", value: "17+", icon: Zap, color: "text-blue-500" },
  { label: "Reporting Time Saved", value: "60–80%", icon: TrendingUp, color: "text-green-500" },
  { label: "SIH'25 Winner", value: "National", icon: Trophy, color: "text-yellow-500" },
];

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Adcuesta · Admin Panel + NextGame",
    period: "Dec 2025 – Present",
    description: "Built 12 production screens used daily by the ops team. Integrated 17+ APIs across campaign, publisher, and advertiser workflows. Led PHP → Next.js migration for the NextGame Platform.",
    type: "work"
  },
  {
    role: "B.Tech in Computer Science",
    company: "Guru Ghasidas University",
    period: "Aug 2023 – June 2027",
    description: "CGPA: 7.9/10. Active problem-solver with competitive programming experience.",
    type: "education"
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 bg-card/30" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {/* Bio Column */}
          <motion.div
            className="md:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">The Developer Journey</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a <strong className="font-semibold text-foreground">Frontend Developer</strong> and third-year CS undergrad who has spent the last year building production dashboards and shipping real features at <strong className="font-semibold text-foreground">Adcuesta</strong>. I love turning complex workflows into clean, fast interfaces — and I'm always looking for the next place to take that further.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My work at Adcuesta covers two live products: an <strong className="font-semibold text-foreground">operations dashboard</strong> used daily by the ops team, and the <strong className="font-semibold text-foreground">NextGame Platform</strong> — a full-stack gaming platform I helped migrate from PHP to Next.js App Router.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="p-4 border-primary/10 bg-background/50 backdrop-blur hover:bg-background/80 transition-colors"
                >
                  <div className={`mb-2 ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Achievements Column */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Key Achievements</h3>
            <div className="space-y-4">
              <Card className="p-4 border-l-4 border-l-yellow-500 bg-background/50">
                <div className="flex items-start gap-3">
                  <Trophy className="h-5 w-5 text-yellow-500 mt-1 shrink-0" />
                  <div>
                    <div className="font-semibold">ISRO Quantum Frontiers Award</div>
                    <div className="text-sm text-muted-foreground">Smart India Hackathon 2025 · 15,000+ participants</div>
                  </div>
                </div>
              </Card>

              <Card className="p-4 border-l-4 border-l-cyan-500 bg-background/50">
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-cyan-500 mt-1 shrink-0" />
                  <div>
                    <div className="font-semibold">NHIDE 2026 Finalist</div>
                    <div className="text-sm text-muted-foreground">Top 20 nationally · Mulyankan AI · EdTech impact</div>
                  </div>
                </div>
              </Card>

              <Card className="p-4 border-l-4 border-l-purple-500 bg-background/50">
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-purple-500 mt-1 shrink-0" />
                  <div>
                    <div className="font-semibold">Head of Operations</div>
                    <div className="text-sm text-muted-foreground">GDGC-GGV · Google Developer Group</div>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-2xl font-semibold text-center mb-10">Experience &amp; Education</h3>
          <div className="relative border-l-2 border-primary/20 ml-4 md:ml-0 md:pl-0 space-y-10">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 md:pl-0 md:grid md:grid-cols-5 md:gap-8 group"
              >
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-colors md:left-auto md:right-1/2 md:mr-[-8px] md:translate-x-1/2 z-10" />

                <div className={`md:col-span-2 md:text-right ${index % 2 === 0 ? "md:order-1" : "md:order-3"} mb-2 md:mb-0`}>
                  <Badge variant="outline" className="text-sm px-3 py-1">
                    <Calendar className="h-3 w-3 mr-2" />
                    {exp.period}
                  </Badge>
                </div>

                <div className="hidden md:block md:col-span-1 md:order-2" />

                <Card className={`md:col-span-2 p-6 md:order-${index % 2 === 0 ? "3" : "1"} hover-elevate transition-all`}>
                  <div className="flex items-center gap-3 mb-2">
                    {exp.type === "work" ? (
                      <Briefcase className="h-5 w-5 text-primary" />
                    ) : (
                      <GraduationCap className="h-5 w-5 text-primary" />
                    )}
                    <h4 className="text-lg font-bold">{exp.role}</h4>
                  </div>
                  <div className="text-primary font-medium mb-2">{exp.company}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-center mb-8 text-primary">
            Technical Arsenal
          </h3>
          <Card className="p-6 bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-primary/20 shadow-xl overflow-hidden">
            <ScrollingSkills />
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
