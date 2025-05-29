
import { useEffect } from 'react';
import HeroBanner from '@/components/HeroBanner';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import CertificationsSection from '@/components/CertificationsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  useEffect(() => {
    // Console Easter Egg
    const consoleArt = `
    ╔═══════════════════════════════════════════════════════════════╗
    ║                                                               ║
    ║    ███╗   ██╗██╗████████╗██╗███████╗██╗  ██╗                 ║
    ║    ████╗  ██║██║╚══██╔══╝██║██╔════╝██║  ██║                 ║
    ║    ██╔██╗ ██║██║   ██║   ██║███████╗███████║                 ║
    ║    ██║╚██╗██║██║   ██║   ██║╚════██║██╔══██║                 ║
    ║    ██║ ╚████║██║   ██║   ██║███████║██║  ██║                 ║
    ║    ╚═╝  ╚═══╝╚═╝   ╚═╝   ╚═╝╚══════╝╚═╝  ╚═╝                 ║
    ║                                                               ║
    ║              Welcome to my portfolio! 🚀                     ║
    ║                                                               ║
    ║    Thanks for checking out the console! Here's a secret:     ║
    ║    This site was built with React, TypeScript, and lots     ║
    ║    of caffeine. Want to collaborate? Let's connect!          ║
    ║                                                               ║
    ║    GitHub: https://github.com/nitishnaik                     ║
    ║    Email: nitish@example.com                                  ║
    ║                                                               ║
    ╚═══════════════════════════════════════════════════════════════╝
    `;

    console.log('%c' + consoleArt, 'color: #8B5CF6; font-family: monospace; font-size: 12px;');
    console.log('%c🎯 Pro tip: Try typing "nitish.contact()" in the console!', 'color: #06B6D4; font-weight: bold;');
    
    // Add console functions for fun
    (window as any).nitish = {
      contact: () => {
        console.log('%c📧 Redirecting to contact form...', 'color: #10B981; font-weight: bold;');
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
        return 'Thanks for using the console! 🚀';
      },
      skills: () => {
        console.log('%c🛠️ My skills include:', 'color: #8B5CF6; font-weight: bold;');
        console.log('JavaScript, TypeScript, React, Node.js, Python, and more!');
        return 'Check out the skills section for details!';
      },
      projects: () => {
        console.log('%c💼 Featured projects:', 'color: #EC4899; font-weight: bold;');
        console.log('DevTracker, Code Collab, AI Study Buddy, and more!');
        return 'Scroll to projects section to see them all!';
      }
    };

    // Smooth scroll for navigation
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroBanner />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Skills Section */}
      <SkillsSection />
      
      {/* Projects Section */}
      <ProjectsSection />
      
      {/* Experience Section */}
      <ExperienceSection />
      
      {/* Certifications Section */}
      <CertificationsSection />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default Index;
