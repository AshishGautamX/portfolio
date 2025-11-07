import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="space-y-6 animate-in fade-in duration-1000">
          <h1
            className="text-5xl md:text-7xl font-bold text-foreground tracking-tight"
            data-testid="text-hero-name"
          >
            Ashish Gautam
          </h1>

          <p
            className="text-xl md:text-2xl text-muted-foreground font-medium"
            data-testid="text-hero-title"
          >
            Technical Developer | Research Report Writer | Data Visualization & Automation
          </p>

          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-hero-tagline"
          >
            I build web tools and data-driven reports that turn research into impact.
          </p>

          <div className="pt-6">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="text-base px-8"
              data-testid="button-hire-me"
            >
              Hire Me
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
}
