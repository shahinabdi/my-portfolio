import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Globe, Star } from 'lucide-react';
import type { Project } from '../types';

const projects: Project[] = [
  {
    title: 'PLATO Mission Data Pipeline',
    description: 'Data processing pipeline for ESA\'s PLATO space mission, handling astronomical observations and data validation.',
    highlights: [
      'Optimized Python code performance within a 30-person team, achieving 40% execution speed improvement',
      'Implemented Docker configurations for test environments and containerization',
      'Enhanced GitLab CI/CD pipeline reducing bugs by 30%',
      'Created comprehensive documentation for containerized testing practices'
    ],
    technologies: ['Python', 'Docker', 'GitLab CI/CD', 'Git', 'Unix', 'Test Automation'],
    category: 'Space Mission',
    featured: true
  },
  {
    title: 'Scientific Data Management Platform',
    description: 'Django-based platform for managing and processing scientific data, serving 500+ daily users.',
    highlights: [
      'Built platform with 35% improvement in data processing efficiency',
      'Implemented React frontend reducing page load time by 60%',
      'Developed RESTful API with 99% availability',
      'Orchestrated multi-service Docker architecture with 10+ microservices'
    ],
    technologies: ['Django', 'React', 'Docker', 'PostgreSQL', 'RESTful API', 'Microservices'],
    category: 'Web Application'
  },
  {
    title: 'REGARDS Data Integration',
    description: 'ETL pipeline for migrating and validating large-scale scientific data into the REGARDS OSS platform.',
    highlights: [
      'Processed 100GB+ of Excel data with 99.99% accuracy in PostgreSQL migration',
      'Reduced data errors by 75% through custom validation rules',
      'Implemented real-time monitoring with sub-minute alert response'
    ],
    technologies: ['Python', 'PostgreSQL', 'ETL', 'Excel', 'Data Validation', 'Monitoring'],
    category: 'Data Integration'
  }
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-dark-800 rounded-xl overflow-hidden border border-dark-700 hover:border-blue-500 transition-colors"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <span className="text-sm text-blue-400">{project.category}</span>
          </div>
          {project.featured && (
            <span className="flex items-center text-yellow-400">
              <Star size={16} className="mr-1" /> Featured
            </span>
          )}
        </div>

        <p className="text-gray-400 mb-4">{project.description}</p>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Achievements:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-400">
            {project.highlights.map((highlight, index) => (
              <li key={index} className="text-sm">{highlight}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-dark-700 text-blue-400 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {(project.links?.github || project.links?.demo) && (
          <div className="flex gap-4 mt-4">
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Github size={20} /> Code
              </a>
            )}
            {project.links?.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Globe size={20} /> Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Showcasing my work in space missions, scientific computing, and data processing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/shahinabdi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              <Github size={20} />
              View More Projects
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}