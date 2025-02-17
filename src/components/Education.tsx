import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import type { Education, Certification } from '../types';

const education: Education[] = [
  {
    degree: 'Data Science & Management (RNCP level 7)',
    institution: 'IA School- Groupe GEMA',
    period: 'September 2020 - September 2022',
    location: 'Paris, France',
    keywords: ['Data Science', 'Machine Learning', 'Management', 'Big Data', 'AI Applications']
  },
  {
    degree: 'Space Science and Technology (M1) & Tools and Systems of Astronomy and Space (M2)',
    institution: 'Paris-Meudon Observatory',
    period: 'September 2017 - September 2020',
    location: 'Paris, France',
    keywords: ['Astronomy', 'Space Technology', 'Data Analysis', 'Scientific Computing']
  }
];

const certifications = [
  {
    status: 'Completed',
    items: [
      'Gitlab CI CD Pipeline Development – Udemy (Nov 2024)',
      'Unit Testing and TDD in Python – Udemy (Dec 2024)',
      'Introduction to FASTAPI – Data Camp (Jan 2025)',
      'Introduction to Kubernetes – Data Camp (Jan 2025)'
    ]
  },
  {
    status: 'Pursuing (Expected Q2 2025)',
    items: [
      'AWS Cloud Practitioner (CLF-C02)',
      'Kubernetes Certified Application Developer (CKAD)'
    ]
  }
];

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Education</h2>
          
          {/* Academic Education */}
          <div className="space-y-8 mb-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-800 rounded-lg p-6 border border-dark-700"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
                <p className="text-blue-400 mb-1">{edu.institution}</p>
                <p className="text-gray-400 mb-1">{edu.period}</p>
                {edu.location && (
                  <p className="text-gray-500 mb-4">{edu.location}</p>
                )}
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {edu.keywords.map((keyword, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-dark-700 text-blue-400 text-sm rounded-full"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <h3 className="text-2xl font-bold text-white mb-6">Certifications</h3>
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-dark-800 rounded-lg p-6 border border-dark-700">
                <h4 className="text-lg font-semibold text-blue-400 mb-4">{cert.status}</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {cert.items.map((item, i) => (
                    <li key={i} className="pl-2">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}