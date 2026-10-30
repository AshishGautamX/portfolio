import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ActivityHeatmapSection from "@/components/ActivityHeatmapSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackgroundFloatingObjects from "@/components/BackgroundFloatingObjects";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import TravelingAvatar from "@/components/TravelingAvatar";

export default function Portfolio() {
  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background w-full max-w-full overflow-x-hidden">
      {/* Mobile & Desktop Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* Traveling Avatar Flight Animation (Hero to Navbar Curve) */}
      <TravelingAvatar />

      {/* Dynamic Background Floating Geometry & Ambient Particles */}
      <BackgroundFloatingObjects />

      <Navbar />

      <main className="relative z-10 w-full max-w-full overflow-x-hidden">
        {/* 1. Hero Overview */}
        <HeroSection />

        {/* 2. Moved Upward: Live GitHub Activity Heatmap & Shipping Cadence */}
        <ActivityHeatmapSection />

        {/* 3. Core Systems Projects */}
        <ProjectsSection />

        {/* 4. Experience & National Honors */}
        <AboutSection />

        {/* 5. Technical Capabilities */}
        <SkillsSection />

        {/* 6. Direct Contact */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
