import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProjectsSection } from '@/components/ProjectsSection';
import { AboutSection } from '@/components/AboutSection';
import { ContactSection } from '@/components/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <Header />
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
