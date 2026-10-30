import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ActivityHeatmapSection from "@/components/ActivityHeatmapSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background w-full max-w-full overflow-x-hidden">
      <Navbar />
      <main className="w-full max-w-full overflow-x-hidden">
        <HeroSection />
        <ProjectsSection />
        <ActivityHeatmapSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
