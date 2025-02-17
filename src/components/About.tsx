import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import type { Skill } from '../types';

const skills: Skill[] = [
  { name: 'Frontend Development', percentage: 90 },
  { name: 'Backend Development', percentage: 85 },
  { name: 'UI/UX Design', percentage: 75 },
  { name: 'DevOps', percentage: 70 },
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                I'm a passionate Full Stack Developer with over 5 years of experience
                building web applications. I specialize in React, Node.js, and cloud
                technologies, focusing on creating scalable and user-friendly solutions.
              </p>
              <p className="text-lg text-gray-600">
                When I'm not coding, you can find me contributing to open-source
                projects, writing technical blog posts, or exploring new technologies.
              </p>
            </div>
            <div>
              {skills.map((skill, index) => (
                <div key={skill.name} className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.percentage}%` } : {}}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="h-full bg-blue-600 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}