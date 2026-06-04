import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform with real-time inventory and payment integration.',
    tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    link: '#',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Interactive dashboard for real-time data visualization and business insights.',
    tags: ['React', 'D3.js', 'TypeScript', 'Tailwind'],
    link: '#',
  },
  {
    title: 'Social Media App',
    description: 'Full-stack social platform with real-time messaging and notifications.',
    tags: ['React', 'Firebase', 'WebSockets', 'Material-UI'],
    link: '#',
  },
  {
    title: 'AI Chat Interface',
    description: 'Conversational AI interface with natural language processing capabilities.',
    tags: ['React', 'OpenAI', 'Python', 'FastAPI'],
    link: '#',
  },
  {
    title: 'Design System',
    description: 'Comprehensive component library and design system documentation.',
    tags: ['Storybook', 'React', 'TypeScript', 'Figma'],
    link: '#',
  },
  {
    title: 'Mobile App',
    description: 'Cross-platform mobile application with offline-first architecture.',
    tags: ['React Native', 'Firebase', 'Redux', 'Expo'],
    link: '#',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold display-font mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of recent projects showcasing my expertise in modern web development and design
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-1/2 -left-40 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
