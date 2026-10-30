import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const socialIcons = [
  { Icon: Mail, href: "mailto:gautamashishbxr@gmail.com", label: "Email", testId: "link-footer-email" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/ashishgautamx", label: "LinkedIn", testId: "link-footer-linkedin" },
  { Icon: Github, href: "https://github.com/AshishGautamX", label: "GitHub", testId: "link-footer-github" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border py-10 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-xs">
          
          <div>
            <span className="text-foreground font-semibold block">Ashish Gautam</span>
            <span className="text-muted-foreground text-[11px] block mt-0.5">
              AI & Systems Engineer · Distributed Backends & Low-Latency Infrastructure
            </span>
          </div>

          <div className="flex items-center gap-4 text-muted-foreground">
            {socialIcons.map(({ Icon, href, label, testId }, index) => (
              <a
                key={index}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="hover:text-foreground transition-colors p-2 rounded border border-transparent hover:border-border"
                aria-label={label}
                data-testid={testId}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}

            <button
              onClick={scrollToTop}
              className="p-2 rounded border border-border hover:bg-muted text-foreground transition-colors flex items-center gap-1.5 ml-2"
              title="Return to top"
            >
              <ArrowUp className="h-3.5 w-3.5" />
              <span className="text-[10px] uppercase">Top</span>
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
