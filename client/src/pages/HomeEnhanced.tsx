import { ArrowRight, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * COSMIC MINIMALISM DESIGN PHILOSOPHY - ENHANCED WITH FRAMER MOTION
 * - Deep space black (#0a0e27) and dark navy (#1a1f3a) backgrounds
 * - Star-yellow (#ffd700) accents for focal points and interactions
 * - Playfair Display for elegant headings, Inter for clean body text
 * - Asymmetric layouts with generous whitespace
 * - Smooth scroll-triggered animations and hover glow effects
 * - Floating particles and subtle gradients for depth
 * - Framer Motion for performant, declarative animations
 */

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const slideInVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const slideInRightVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const cardHoverVariants = {
  rest: { y: 0, boxShadow: "0 0 0px rgba(255, 215, 0, 0)" },
  hover: {
    y: -4,
    boxShadow: "0 0 20px rgba(255, 215, 0, 0.15), inset 0 0 20px rgba(255, 215, 0, 0.05)",
    transition: { duration: 0.3 },
  },
};

export default function HomeEnhanced() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
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

  const skills = [
    { label: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
    { label: "Backend", items: ["Node.js", "PostgreSQL", "GraphQL"] },
    { label: "Tools", items: ["Git", "Docker", "AWS"] },
    { label: "Design", items: ["Figma", "UI/UX", "Accessibility"] },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Animated particle background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-accent opacity-30"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: -window.innerHeight,
              x: 100,
              opacity: [0.3, 0.6, 0.1],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
        initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
      >
        <div className="container flex items-center justify-between h-16">
          <motion.div
            className="text-2xl font-bold text-accent"
            style={{ fontFamily: "'Playfair Display', serif" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Starlight
          </motion.div>
          <div className="flex items-center gap-8">
            {["Projects", "About", "Contact"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-foreground/70 hover:text-accent transition-colors"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1), duration: 0.5 }}
                whileHover={{ color: "#ffd700" }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              className="space-y-8"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.div className="space-y-4" variants={slideInVariants}>
                <motion.p className="text-accent text-sm font-semibold tracking-widest uppercase">
                  Welcome to my portfolio
                </motion.p>
                <h1
                  className="text-5xl lg:text-6xl font-bold leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Crafting Digital{" "}
                  <span className="relative inline-block">
                    Experiences
                    <motion.span
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent to-transparent rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    />
                  </span>
                </h1>
                <motion.p className="text-lg text-foreground/70 max-w-md" variants={itemVariants}>
                  Full-stack developer passionate about building beautiful, performant web applications with modern
                  technologies.
                </motion.p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
                <motion.button
                  className="px-6 py-3 rounded-lg bg-accent text-background font-semibold text-sm transition-all duration-300 flex items-center gap-2"
                  whileHover={{
                    boxShadow: "0 0 20px rgba(255, 215, 0, 0.4), 0 0 40px rgba(255, 215, 0, 0.2)",
                    scale: 1.05,
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                >
                  View My Work
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
                <motion.button
                  className="px-6 py-3 rounded-lg border border-accent text-accent font-semibold text-sm transition-all duration-300"
                  whileHover={{
                    backgroundColor: "rgba(255, 215, 0, 0.1)",
                    scale: 1.05,
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Get in Touch
                </motion.button>
              </motion.div>

              {/* Social Links */}
              <motion.div className="flex gap-4 pt-4" variants={itemVariants}>
                {[Github, Linkedin, Mail].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="text-foreground/50 hover:text-accent transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Hero Image */}
            <motion.div
              className="relative h-96 lg:h-full rounded-lg overflow-hidden"
              variants={slideInRightVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                className="absolute inset-0 rounded-lg overflow-hidden border border-accent/20"
                style={{
                  backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663658443919/CDraiz3b3xC9g5TWvCTxuh/hero-cosmic-main-8NJYm6cUh9egB67mNJBAVZ.webp')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                whileHover={{ boxShadow: "0 0 20px rgba(255, 215, 0, 0.15)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="relative py-24 px-4 border-t border-border"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <div className="space-y-16">
            {/* Section Header */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-accent text-sm font-semibold tracking-widest uppercase">Featured Work</p>
              <h2 className="text-4xl lg:text-5xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                Recent Projects
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-accent to-transparent rounded-full" />
            </motion.div>

            {/* Projects Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="group rounded-lg p-6 bg-card/50 backdrop-blur-sm border border-accent/10 hover:bg-card/80 cursor-pointer"
                  variants={itemVariants}
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  custom={cardHoverVariants}
                >
                  <motion.div className="space-y-4" variants={cardHoverVariants}>
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                      <motion.div whileHover={{ x: 4 }} whileTap={{ scale: 0.9 }}>
                        <ExternalLink className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.div>
                    </div>
                    <p className="text-foreground/60 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
                          whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 215, 0, 0.2)" }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="relative py-24 px-4 border-t border-border"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
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
            </motion.div>

            {/* Skills Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.map((category, index) => (
                <motion.div
                  key={index}
                  className="rounded-lg p-4 bg-card/50 backdrop-blur-sm border border-accent/10"
                  variants={itemVariants}
                  whileHover={{
                    boxShadow: "0 0 20px rgba(255, 215, 0, 0.15)",
                    borderColor: "rgba(255, 215, 0, 0.3)",
                  }}
                >
                  <h4 className="font-semibold text-accent mb-3">{category.label}</h4>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        className="text-sm text-foreground/70"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: itemIndex * 0.1 }}
                      >
                        • {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="relative py-24 px-4 border-t border-border"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <motion.div
            className="max-w-2xl mx-auto text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <p className="text-accent text-sm font-semibold tracking-widest uppercase">Get in Touch</p>
              <h2 className="text-4xl lg:text-5xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                Let's Create Something Amazing
              </h2>
              <p className="text-lg text-foreground/70">
                Have a project in mind? I'd love to hear about it. Reach out and let's discuss how we can work together.
              </p>
            </div>

            <motion.div className="flex flex-wrap justify-center gap-4" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.button
                className="px-6 py-3 rounded-lg bg-accent text-background font-semibold text-sm transition-all duration-300"
                variants={itemVariants}
                whileHover={{
                  boxShadow: "0 0 20px rgba(255, 215, 0, 0.4), 0 0 40px rgba(255, 215, 0, 0.2)",
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => (window.location.href = "mailto:hello@example.com")}
              >
                Send me an Email
              </motion.button>
              <motion.button
                className="px-6 py-3 rounded-lg border border-accent text-accent font-semibold text-sm transition-all duration-300"
                variants={itemVariants}
                whileHover={{
                  backgroundColor: "rgba(255, 215, 0, 0.1)",
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Call
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="relative py-12 px-4 border-t border-border bg-card/30 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm text-foreground/60">© 2024 Starlight Portfolio. All rights reserved.</div>
            <div className="flex gap-6 mt-4 md:mt-0">
              {["Privacy", "Terms", "Sitemap"].map((link, index) => (
                <motion.a
                  key={link}
                  href="#"
                  className="text-sm text-foreground/60 hover:text-accent transition-colors"
                  whileHover={{ color: "#ffd700", x: 2 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
