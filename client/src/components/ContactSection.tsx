import { Mail, Linkedin, Github, Terminal } from "lucide-react";
import { motion } from "framer-motion";

const directChannels = [
  {
    icon: Mail,
    label: "Email",
    value: "gautamashishbxr@gmail.com",
    href: "mailto:gautamashishbxr@gmail.com",
    testId: "link-contact-email",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/ashishgautamx",
    href: "https://www.linkedin.com/in/ashishgautamx",
    testId: "link-contact-linkedin",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/AshishGautamX",
    href: "https://github.com/AshishGautamX",
    testId: "link-contact-github",
  },
];

export default function ContactSection() {
  return (
    <section id="contact-mobile" className="md:hidden py-14 border-b border-border bg-transparent w-full overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            <Terminal className="h-3.5 w-3.5 text-foreground" />
            <span>Connect</span>
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground" data-testid="text-section-contact">
            Get In Touch
          </h2>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Available for AI infrastructure roles, low-latency inference pipelines, and distributed backend systems engineering.
          </p>

          <div className="grid grid-cols-1 gap-2.5 pt-2">
            {directChannels.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-3.5 rounded-lg border border-border bg-card/60 backdrop-blur-xs flex items-center justify-between group shadow-xs min-h-[48px]"
                  data-testid={item.testId}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Icon className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-foreground transition-colors" />
                    <span className="text-xs font-mono font-medium text-foreground truncate">
                      {item.value}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
