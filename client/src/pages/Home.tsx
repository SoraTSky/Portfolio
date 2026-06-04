import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * COSMIC MINIMALISM DESIGN PHILOSOPHY
 * - Deep space black (#0a0e27) and dark navy (#1a1f3a) backgrounds
 * - Star-yellow (#ffd700) accents for focal points and interactions
 * - Playfair Display for elegant headings, Inter for clean body text
 * - Asymmetric layouts with generous whitespace
 * - Smooth scroll-triggered animations and hover glow effects
 * - Floating particles and subtle gradients for depth
 */

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function Home() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate floating particles for background
    const newParticles: Particle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 8 + 12,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  const projects = [
    {
      title: "API Gateway Platform",
      description: "Built a scalable API gateway with real-time monitoring and routing capabilities.",
      tags: ["TypeScript", "Node.js", "React"],
      link: "#",
    },
    {
      title: "Design System",
      description: "Created a comprehensive design system with 50+ components and accessibility features.",
      tags: ["React", "Tailwind CSS", "Storybook"],
      link: "#",
    },
    {
      title: "Real-time Dashboard",
      description: "Developed a live analytics dashboard with WebSocket integration and data visualization.",
      tags: ["React", "D3.js", "WebSocket"],
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Animated particle background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-accent opacity-30"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animation: `drift ${particle.duration}s linear ${particle.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes drift {
          0% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100vh) translateX(100px);
            opacity: 0.1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }

        .animate-in-right {
          animation: slideInRight 0.6s ease-out forwards;
        }

        .glow-hover {
          transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .glow-hover:hover {
          box-shadow: 0 0 20px rgba(255, 215, 0, 0.4), 0 0 40px rgba(255, 215, 0, 0.2);
          transform: translateY(-4px);
        }

        .accent-underline {
          position: relative;
          display: inline-block;
        }

        .accent-underline::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #ffd700, transparent);
          border-radius: 1px;
        }

        .card-glow {
          border: 1px solid rgba(255, 215, 0, 0.1);
          transition: all 0.3s ease-out;
        }

        .card-glow:hover {
          border-color: rgba(255, 215, 0, 0.3);
          box-shadow: 0 0 20px rgba(255, 215, 0, 0.15), inset 0 0 20px rgba(255, 215, 0, 0.05);
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-accent" style={{ fontFamily: "'Playfair Display', serif" }}>
            Starlight
          </div>
          <div className="flex items-center gap-8">
            <a href="#projects" className="text-sm text-foreground/70 hover:text-accent transition-colors">
              Projects
            </a>
            <a href="#about" className="text-sm text-foreground/70 hover:text-accent transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm text-foreground/70 hover:text-accent transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8">
              <div className="space-y-4 animate-in-left">
                <p className="text-accent text-sm font-semibold tracking-widest uppercase">Welcome to my portfolio</p>
                <h1
                  className="text-5xl lg:text-6xl font-bold leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Crafting Digital <span className="accent-underline">Experiences</span>
                </h1>
                <p className="text-lg text-foreground/70 max-w-md">
                  Full-stack developer passionate about building beautiful, performant web applications with modern
                  technologies.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 animate-in-up" style={{ animationDelay: "0.2s" }}>
                <Button
                  size="lg"
                  className="bg-accent text-background hover:bg-accent/90 glow-hover"
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                >
                  View My Work
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent/10"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Get in Touch
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4 animate-in-up" style={{ animationDelay: "0.4s" }}>
                <a href="#" className="text-foreground/50 hover:text-accent transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-foreground/50 hover:text-accent transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-foreground/50 hover:text-accent transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative h-96 lg:h-full animate-in-right">
              <div
                className="absolute inset-0 rounded-lg overflow-hidden"
                style={{
                  backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663658443919/CDraiz3b3xC9g5TWvCTxuh/hero-cosmic-main-8NJYm6cUh9egB67mNJBAVZ.webp')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-24 px-4 border-t border-border">
        <div className="container">
          <div className="space-y-16">
            {/* Section Header */}
            <div className="space-y-4">
              <p className="text-accent text-sm font-semibold tracking-widest uppercase">Featured Work</p>
              <h2 className="text-4xl lg:text-5xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                Recent Projects
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-accent to-transparent rounded-full" />
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group card-glow rounded-lg p-6 bg-card/50 backdrop-blur-sm hover:bg-card/80 cursor-pointer"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${0.1 * (index + 1)}s forwards`,
                    opacity: 0,
                  }}
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                      <ExternalLink className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-foreground/60 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 px-4 border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-accent text-sm font-semibold tracking-widest uppercase">About Me</p>
                <h2 className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Building the Future, One Line at a Time
                </h2>
              </div>
              <p className="text-foreground/70 leading-relaxed">
                With over 5 years of experience in full-stack development, I specialize in creating scalable web
                applications that combine beautiful design with robust functionality. I'm passionate about clean code,
                user experience, and continuous learning.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source, or
                enjoying the outdoors.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
                { label: "Backend", items: ["Node.js", "PostgreSQL", "GraphQL"] },
                { label: "Tools", items: ["Git", "Docker", "AWS"] },
                { label: "Design", items: ["Figma", "UI/UX", "Accessibility"] },
              ].map((category, index) => (
                <div
                  key={index}
                  className="card-glow rounded-lg p-4 bg-card/50 backdrop-blur-sm"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${0.1 * (index + 1)}s forwards`,
                    opacity: 0,
                  }}
                >
                  <h4 className="font-semibold text-accent mb-3">{category.label}</h4>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-foreground/70">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 px-4 border-t border-border">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <p className="text-accent text-sm font-semibold tracking-widest uppercase">Get in Touch</p>
              <h2 className="text-4xl lg:text-5xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                Let's Create Something Amazing
              </h2>
              <p className="text-lg text-foreground/70">
                Have a project in mind? I'd love to hear about it. Reach out and let's discuss how we can work together.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-accent text-background hover:bg-accent/90 glow-hover"
                onClick={() => (window.location.href = "mailto:hello@example.com")}
              >
                Send me an Email
              </Button>
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 border-t border-border bg-card/30 backdrop-blur-sm">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm text-foreground/60">© 2024 Starlight Portfolio. All rights reserved.</div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-foreground/60 hover:text-accent transition-colors">
                Privacy
              </a>
              <a href="#" className="text-sm text-foreground/60 hover:text-accent transition-colors">
                Terms
              </a>
              <a href="#" className="text-sm text-foreground/60 hover:text-accent transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
