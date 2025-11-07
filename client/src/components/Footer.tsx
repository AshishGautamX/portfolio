import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const socialIcons = [
  { Icon: Mail, href: "mailto:ashishgautam835@gmail.com", label: "Email", testId: "link-footer-email" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/ashishgautamx", label: "LinkedIn", testId: "link-footer-linkedin" },
  { Icon: Github, href: "https://github.com/ashishgautamx", label: "GitHub", testId: "link-footer-github" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            © {new Date().getFullYear()} Ashish Gautam — Technical Developer & Research Writer
          </p>

          <div className="flex items-center gap-4">
            {socialIcons.map(({ Icon, href, label, testId }, index) => (
              <motion.a
                key={index}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-muted-foreground hover:text-foreground transition-colors hover-elevate active-elevate-2 p-2 rounded-md"
                aria-label={label}
                data-testid={testId}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
