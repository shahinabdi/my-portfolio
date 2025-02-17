import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Globe, ExternalLink, Star } from 'lucide-react';
import type { Project } from '../types';

const projects: Project[] = [
  {
    title: 'Astronomical Data Pipeline',
    description: 'A high-performance data processing pipeline for handling large-scale astronomical observations from the PLATO mission.',
    highlights: [
      'Processed over 100TB of astronomical data with 99.9% accuracy',
      'Reduced processing time by 40% through optimization',
      'Implemented parallel processing across 50+ compute nodes',
      'Automated data validation and quality checks'
    ],
    technologies: ['Python', 'NumPy', 'Pandas', 'Dask', 'Docker', 'FastAPI'],
    category: 'Data Processing',
    links: {
      github: 'https://github.com/yourusername/astro-pipeline',
      demo: 'https://demo-link.com'
    },
    featured: true
  },
  {
    title: 'Exoplanet Detection System',
    description: 'Machine learning-based system for detecting and classifying exoplanets from stellar light curves.',
    highlights: [
      'Achieved 95% accuracy in exoplanet detection',
      'Processed data from over 150,000 stars',
      'Reduced false positive rate by 60%',
      'Implemented real-time processing capabilities'
    ],
    technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Matplotlib', 'Docker'],
    category: 'Machine Learning',
    links: {
      github: 'https://github.com/yourusername/exoplanet-detection'
    },
    featured: true
  },
  {
    title: 'Atmospheric Data Visualization',
    description: 'Interactive web platform for visualizing and analyzing atmospheric observation data from multiple satellites.',
    highlights: [
      'Built real-time data visualization dashboard',
      'Handled streaming data from 5 different satellites',
      'Implemented custom data filters and analytics',
      'Reduced data loading time by 65%'
    ],
    technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'Docker'],
    category: 'Web Development',
    links: {
      github: 'https://github.com/yourusername/atmos-viz',
      demo: 'https://demo-link.com'
    }
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
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          {project.featured && (
            <span className="flex items-center text-yellow-400">
              <Star size={16} className="mr-1" /> Featured
            </span>
          )}
        </div>

        <p className="text-gray-400 mb-4">{project.description}</p>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Highlights:</h4>
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

        <div className="flex gap-4 mt-4">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Github size={20} /> Code
            </a>
          )}
          {project.links.demo && (
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
              A collection of my most significant projects in data processing, machine learning, and web development.
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
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              View More Projects <ExternalLink size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}