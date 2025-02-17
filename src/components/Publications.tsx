import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';
import type { Publication } from '../types';

const publications: Publication[] = [
  {
    title: 'Total solar eclipse 2017 in USA: deep coronal spectra',
    authors: ['Koutchmy, S.', 'Abdi, S.', 'et al.'],
    journal: 'SF2A',
    year: 2019,
    link: 'https://ui.adsabs.harvard.edu/abs/2019sf2a.conf..363K/abstract',
    abstract: 'This paper presents deep coronal spectra obtained during the 2017 total solar eclipse in the USA. It discusses the methodology, observations, and implications for our understanding of the solar corona.'
  },
  {
    title: 'New deep coronal spectra from the 2017 total solar eclipse',
    authors: ['Koutchmy, S.', 'Abdi, S.', 'et al.'],
    journal: 'Astronomy & Astrophysics',
    year: 2019,
    link: 'https://www.aanda.org/articles/aa/abs/2019/12/aa35681-19/aa35681-19.html',
    abstract: 'This study provides an in-depth analysis of new deep coronal spectra collected during the 2017 total solar eclipse. It offers insights into the composition and dynamics of the solar corona.'
  },
  {
    title: 'Eclipse 2017: new results on the dynamical inner-corona',
    authors: ['Koutchmy, S.', 'Abdi, S.', 'et al.'],
    journal: 'SF2A',
    year: 2019,
    link: 'https://ui.adsabs.harvard.edu/abs/2019sf2a.conf..361K/abstract',
    abstract: 'This paper presents new findings on the dynamical inner-corona based on observations from the 2017 solar eclipse. It discusses the implications for our understanding of solar dynamics and coronal heating.'
  },
  {
    title: 'Pointing the NTT at the Sun: Studying the Solar Corona During the Total Eclipse',
    authors: ['Koutchmy, S.', 'Abdi, S.', 'et al.'],
    journal: 'The Messenger',
    year: 2019,
    link: 'https://www.eso.org/sci/publications/messenger/archive/no.177-sep19/messenger-no177-54-55.pdf',
    abstract: 'This article describes the innovative use of the New Technology Telescope (NTT) to study the solar corona during a total eclipse. It details the technical challenges and scientific outcomes of this unique observational approach.'
  }
];

export default function Publications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="publications" className="py-20 bg-dark-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Publications</h2>
          <div className="space-y-8">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-900 rounded-lg p-6 border border-dark-700"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{pub.title}</h3>
                <p className="text-gray-400 mb-2">{pub.authors.join(', ')}</p>
                <p className="text-blue-400 mb-2">
                  {pub.journal} ({pub.year})
                </p>
                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-4"
                  >
                    Read Paper <ExternalLink size={16} />
                  </a>
                )}
                {pub.abstract && (
                  <p className="text-gray-500 text-sm">{pub.abstract}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}