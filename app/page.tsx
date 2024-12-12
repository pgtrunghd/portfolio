// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AboutSection } from "./(home)/about-section";
import { ContactSection } from "./(home)/contact-section";
import { EducationSection } from "./(home)/education-section";
import { HeroSection } from "./(home)/hero-section";
import { ProjectSection } from "./(home)/project-section";
import { SkillSection } from "./(home)/skill-section";
import { WorkSection } from "./(home)/work-section";

export default function Home() {
  return (
    <main className="flex flex-col space-y-10">
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <EducationSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
}
