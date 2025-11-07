import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-semibold text-center mb-16"
          data-testid="text-section-about"
        >
          About Me
        </h2>

        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3 space-y-6">
            <p className="text-lg text-foreground leading-relaxed" data-testid="text-about-p1">
              I am a Technical Developer that has worked with a research-support organization and
              has practical experience in creating tools, web platforms, and reports that help
              transform the data into actionable information.
            </p>

            <p className="text-lg text-foreground leading-relaxed" data-testid="text-about-p2">
              My main strength is that I can combine web development and research-report writing,
              which allows me not only to gather and analyze the information but also to present
              the results in a professional way.
            </p>
          </div>

          <div className="md:col-span-2 flex justify-center">
            <Card className="p-8">
              <Avatar className="h-48 w-48">
                <AvatarFallback className="text-5xl bg-primary/10 text-primary">
                  AG
                </AvatarFallback>
              </Avatar>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
