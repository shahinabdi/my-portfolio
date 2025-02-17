import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import type { Experience } from '../types';

const experiences: Experience[] = [
  {
    title: 'Python Developer for PLATO Mission (ESA)',
    company: 'Institut d\'Astrophysique Spatiale (IAS)',
    period: 'July 2023 - Present',
    location: 'Paris, France',
    description: [
      'Optimized Python code performance within a 30-person development team, achieving 40% execution speed improvement through code refactoring and optimization techniques',
      'Adapted existing codebase for containerization and implemented Docker configurations for test environments',
      'Enhanced GitLab CI/CD pipeline with automated test suites, contributing to 30% overall bug reduction in team deliverables',
      'Collaborated with 6 core developers, focusing on code optimization, test automation, and Docker implementation',
      'Created documentation and examples for containerized testing practices adopted by the development team'
    ],
    keywords: ['Python', 'Docker', 'GitLab CI/CD', 'Test Automation', 'Code Optimization', 'Documentation']
  },
  {
    title: 'Scientific Data Management Platform',
    company: 'Institut d\'Astrophysique Spatiale (IAS)',
    period: 'January 2022 - June 2023',
    location: 'Paris, France',
    description: [
      'Developed Django-based platform handling 500+ daily users with 35% improvement in data processing efficiency',
      'Implemented React frontend reducing page load time by 60% and RESTful API with 99% availability',
      'Orchestrated multi-service Docker architecture managing 10+ microservices with automated scaling',
      'Established coding standards and review processes, reducing technical debt by 40%'
    ],
    keywords: ['Django', 'React', 'Docker', 'RESTful API', 'Microservices', 'Code Standards']
  },
  {
    title: 'REGARDS Data Integration',
    company: 'Institut d\'Astrophysique Spatiale (IAS)',
    period: 'August 2021 - December 2021',
    location: 'Paris, France',
    description: [
      'Built ETL pipeline processing 100GB+ of Excel data with 99.99% accuracy in PostgreSQL migration',
      'Integrated REGARDS OSS platform with custom validation rules, reducing data errors by 75%',
      'Implemented real-time monitoring system with sub-minute alert response for critical issues'
    ],
    keywords: ['ETL', 'PostgreSQL', 'Data Migration', 'Monitoring', 'REGARDS OSS']
  },
  {
    title: 'Python / Fortran Developer',
    company: 'LATMOS',
    period: 'March 2020 - August 2021',
    location: 'Paris, France',
    description: [
      'Optimized Python codebase for atmospheric calculations, achieving 45% faster computation cycles',
      'Designed MongoDB/R-based pipeline processing 5TB+ of atmospheric data with 99.9% accuracy',
      'Successfully simulated 111K+ terrestrial spectra with distributed computing across 50+ nodes'
    ],
    keywords: ['Python', 'Fortran', 'MongoDB', 'R', 'Distributed Computing', 'Data Processing']
  }
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 bg-dark-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Professional Experience</h2>
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-dark-600"
              >
                <div className="absolute left-0 top-0 w-2 h-2 bg-blue-500 rounded-full transform -translate-x-1/2"></div>
                <div className="bg-dark-900 rounded-lg p-6 border border-dark-700">
                  <h3 className="text-xl font-semibold text-white mb-2">{experience.title}</h3>
                  <p className="text-blue-400 mb-1">{experience.company}</p>
                  <p className="text-gray-400 mb-1">{experience.period}</p>
                  {experience.location && (
                    <p className="text-gray-500 mb-4">{experience.location}</p>
                  )}
                  
                  <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                    {experience.description.map((desc, i) => (
                      <li key={i} className="pl-2">{desc}</li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {experience.keywords.map((keyword, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-dark-700 text-blue-400 text-sm rounded-full"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}