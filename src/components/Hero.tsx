import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-dark-900">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/3 text-center md:text-left mb-8 md:mb-0">
          <img
            src="https://media.licdn.com/dms/image/v2/D4E03AQENtdInfN2kBA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718622695569?e=1745452800&v=beta&t=S_dA2lCcEu1crEMOlwhYAxBliGJQp58dwyfvPgV9kcw"
            alt="Profile"
            className="rounded-full w-48 h-48 mx-auto md:mx-0 mb-6 object-cover border-4 border-dark-700"
          />
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="https://github.com/shahinabdi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/shahinabdi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:contact@shahinabdi.fr"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="md:w-2/3 text-center md:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-4"
          >
            Shahin ABDI
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl text-gray-400 mb-8"
          >
            DevOps Engineer - Python | Test Automation Engineer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-400 mb-8"
          >
            Paris, France
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a 
              href="#experience"
              className="inline-flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-colors"
            >
              View Experience <ArrowDown size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}