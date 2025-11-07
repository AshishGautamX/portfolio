import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            © {new Date().getFullYear()} Ashish Gautam — Technical Developer & Research Writer
          </p>

          <div className="flex items-center gap-4">
            <a
              href="mailto:ashishgautam835@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors hover-elevate active-elevate-2 p-2 rounded-md"
              aria-label="Email"
              data-testid="link-footer-email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/ashishgautamx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors hover-elevate active-elevate-2 p-2 rounded-md"
              aria-label="LinkedIn"
              data-testid="link-footer-linkedin"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/ashishgautamx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors hover-elevate active-elevate-2 p-2 rounded-md"
              aria-label="GitHub"
              data-testid="link-footer-github"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
