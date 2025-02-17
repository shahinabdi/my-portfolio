import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail } from 'lucide-react';
import type { SocialLink } from '../types';

const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/shahinabdi',
    icon: Github,
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/shahinabdi',
    icon: Linkedin,
  },
  {
    platform: 'Email',
    url: 'mailto:contact@shahinabdi.fr',
    icon: Mail,
  },
];

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-white">
            Get in Touch
          </h2>
          
          <div className="flex justify-center gap-12">
            {socialLinks.map(({ platform, url, icon: Icon }) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                aria-label={platform}
              >
                <Icon size={48} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}