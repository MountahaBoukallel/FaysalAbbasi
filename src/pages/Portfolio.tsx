import HeroSection from "@/components/portfolio/HeroSection";
import ScrollNavigation from "@/components/navigation/ScrollNavigation";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import EducationSection from "@/components/portfolio/EducationSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import BlogSection from "@/components/blog/BlogSection";

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <ScrollNavigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ExperienceSection />
      <BlogSection />
    </div>
  );
};

export default Portfolio;