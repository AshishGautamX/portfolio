import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Trophy,
  Zap,
  Users,
  TrendingUp,
  Briefcase,
  GraduationCap,
  Calendar,
  Award
} from "lucide-react";

// Existing skills data preserved
const skillsData = [
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
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
  { label: "SIH'25 Winner", value: "National Level", icon: Trophy, color: "text-yellow-500" },
  { label: "Latency Reduced", value: "40%", icon: Zap, color: "text-blue-500" },
  { label: "Active Users Served", value: "1,000+", icon: Users, color: "text-green-500" },
  { label: "Load Time Improved", value: "30%", icon: TrendingUp, color: "text-purple-500" },
];

const experiences = [
  {
    role: "Technical Developer",
    company: "Thesisly",
    period: "Sept 2025 – Present",
    description: "Architecting production-grade AI models and optimizing inference latency. Improving model accuracy by 15% through hyperparameter tuning.",
    type: "work"
  },
  {
    role: "Frontend Developer Intern",
    company: "Adcuesta",
    period: "Dec 2025 – Present",
    description: "Engineering responsive Next.js interfaces. Improved page load times by 30% and enhanced user engagement metrics by 25%.",
    type: "work"
  },
  {
    role: "B.Tech in Computer Science",
    company: "Guru Ghasidas University",
    period: "2023 – 2027",
    description: "CGPA: 8.0/10. Active Problem Solver with 200+ algorithmic problems solved.",
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
              I am a <strong className="font-semibold text-foreground">Technical Developer</strong> and <strong className="font-semibold text-foreground">Researcher</strong> passionate about bridging the gap between complex AI models and user-friendly web applications. With a strong foundation in Computer Science and hands-on experience in building scalable systems, I specialize in creating tools that transform raw data into actionable insights.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently, I am optimizing AI inference at <strong className="font-semibold text-foreground">Thesisly</strong> and crafting high-performance interfaces at <strong className="font-semibold text-foreground">Adcuesta</strong>. My work is driven by a commitment to efficiency, accuracy, and seamless user experience.
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

          {/* Quick Info / Achievements Column */}
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
                    <div className="text-sm text-muted-foreground">Smart India Hackathon 2025</div>
                  </div>
                </div>
              </Card>

              <Card className="p-4 border-l-4 border-l-blue-500 bg-background/50">
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-blue-500 mt-1 shrink-0" />
                  <div>
                    <div className="font-semibold">Head of Operations</div>
                    <div className="text-sm text-muted-foreground">GDGC-GGV (Google Developer Group)</div>
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
          <h3 className="text-2xl font-semibold text-center mb-10">Experience & Education</h3>
          <div className="relative border-l-2 border-primary/20 ml-4 md:ml-0 md:pl-0 space-y-10">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 md:pl-0 md:grid md:grid-cols-5 md:gap-8 group"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-colors md:left-auto md:right-1/2 md:mr-[-8px] md:translate-x-1/2 z-10"></div>

                {/* Date (Left on Desktop) */}
                <div className={`md:col-span-2 md:text-right ${index % 2 === 0 ? "md:order-1" : "md:order-3"} mb-2 md:mb-0`}>
                  <Badge variant="outline" className="text-sm px-3 py-1">
                    <Calendar className="h-3 w-3 mr-2" />
                    {exp.period}
                  </Badge>
                </div>

                {/* Spacer for center line */}
                <div className="hidden md:block md:col-span-1 md:order-2"></div>

                {/* Content (Right on Desktop) */}
                <Card className={`md:col-span-2 p-6 md:order-${index % 2 === 0 ? "3" : "1"} hover-elevate transition-all`}>
                  <div className="flex items-center gap-3 mb-2">
                    {exp.type === 'work' ? (
                      <Briefcase className="h-5 w-5 text-primary" />
                    ) : (
                      <GraduationCap className="h-5 w-5 text-primary" />
                    )}
                    <h4 className="text-lg font-bold">{exp.role}</h4>
                  </div>
                  <div className="text-primary font-medium mb-2">{exp.company}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exp.description}
                  </p>
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
