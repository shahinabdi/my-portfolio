export interface Experience {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  achievements: string[];
  technologies: string[];
  metrics?: { label: string; value: string; sub?: string }[];
}

export const experiences: Experience[] = [
  {
    company: 'Société Générale',
    role: 'Ingénieur DevOps',
    period: 'Mars 2025 — Aujourd\u2019hui',
    current: true,
    achievements: [
      'Migration de la plateforme Python de Python 3.8 vers Python 3.12, r\u00e9duisant les incidents de production d\u2019environ 40 % et am\u00e9liorant la lisibilit\u00e9 des erreurs.',
      'Migration des pipelines CI/CD de Jenkins vers GitHub Actions, avec am\u00e9lioration de leur qualit\u00e9, fiabilit\u00e9, maintenabilit\u00e9 et s\u00e9curit\u00e9.',
      'Modernisation d\u2019une base de code d\u00e9velopp\u00e9e depuis environ 5 ans : gestion de l\u2019obsolescence technique, refactoring et am\u00e9lioration de la qualit\u00e9 du code.',
      'Introduction de uv comme gestionnaire de paquets et d\u2019environnements Python, r\u00e9duisant le temps de cr\u00e9ation des images de 8 \u00e0 3 minutes (-62,5 %) et standardisant la gestion des d\u00e9pendances.',
      'Adoption de Ruff pour automatiser le linting et le formatage, renfor\u00e7ant les standards de qualit\u00e9 Python.',
      'Am\u00e9lioration de la strat\u00e9gie de gestion des secrets et renforcement des pratiques de s\u00e9curit\u00e9 dans les workflows CI/CD.',
      'Gestion et supervision des environnements de production et de staging, avec monitoring de la production et suivi de la disponibilit\u00e9 des services.',
      'Participation aux on-call et gestion des incidents de production, avec analyse et r\u00e9solution des probl\u00e8mes afin d\u2019assurer la continuit\u00e9 de service.',
      'Provisionnement avec Ansible et Terraform d\u2019un environnement UAT suppl\u00e9mentaire pour la documentation, les tests de nouveaux environnements et la mesure du temps de reprise (DR).',
      'Orchestration de clusters Kubernetes pour les environnements de production et de staging.',
      'Exploitation et int\u00e9gration de RabbitMQ dans un environnement de microservices et contribution au diagnostic des \u00e9changes asynchrones.',
    ],
    technologies: [
      'Python 3.12',
      'uv',
      'Ruff',
      'GitHub Actions',
      'Jenkins',
      'Kubernetes',
      'Docker',
      'Terraform',
      'Ansible',
      'RabbitMQ',
      'Linux / RHEL',
      'Git',
      'CI/CD',
    ],
    metrics: [
      { label: 'Python 3.8 \u2192 3.12', value: '-40%', sub: 'production incidents' },
      { label: '8 min \u2192 3 min', value: '-62.5%', sub: 'image creation time' },
    ],
  },
  {
    company: 'Institut d\u2019Astrophysique Spatiale',
    role: 'D\u00e9veloppeur Python',
    period: 'Juillet 2023 — Mars 2025',
    achievements: [
      'Optimisation du code Python pour la mission PLATO de l\u2019ESA, am\u00e9liorant les performances de 40 %.',
      'Mise en place de tests unitaires et d\u2019int\u00e9gration rigoureux, r\u00e9duisant les bugs de 30 %.',
      'Int\u00e9gration du code optimis\u00e9 dans le pipeline de traitement des donn\u00e9es, acc\u00e9l\u00e9rant l\u2019analyse de 25 %.',
    ],
    technologies: ['Python', 'ESA PLATO', 'Unit Testing', 'Data Pipelines', 'Scientific Computing'],
    metrics: [
      { label: 'Performance', value: '+40%', sub: 'code optimization' },
      { label: 'Bug rate', value: '-30%', sub: 'via rigorous testing' },
      { label: 'Analysis speed', value: '+25%', sub: 'data pipeline' },
    ],
  },
  {
    company: 'Institut d\u2019Astrophysique Spatiale',
    role: 'D\u00e9veloppeur Python',
    period: 'Ao\u00fbt 2021 — Juin 2023',
    achievements: [
      'D\u00e9veloppement d\u2019une plateforme de gestion de bases de donn\u00e9es avec Django, am\u00e9liorant l\u2019efficacit\u00e9 du traitement des donn\u00e9es de 35 %.',
      'Cr\u00e9ation d\u2019une interface utilisateur int\u00e9gr\u00e9e au backend.',
      'Conteneurisation du projet avec Docker et Docker Compose.',
    ],
    technologies: ['Python', 'Django', 'Docker', 'Docker Compose', 'PostgreSQL'],
    metrics: [{ label: 'Data processing', value: '+35%', sub: 'efficiency' }],
  },
  {
    company: 'LATMOS',
    role: 'D\u00e9veloppeur Python / Fortran',
    period: 'Mars 2020 — Ao\u00fbt 2021',
    achievements: [
      'Optimisation de programmes Python pour des calculs atmosph\u00e9riques complexes, r\u00e9duisant le temps de calcul de 45 %.',
      'Gestion et analyse de vastes ensembles de donn\u00e9es atmosph\u00e9riques avec MongoDB et R.',
      'R\u00e9alisation de simulations de spectres terrestres sur 111\u202f766 spectres.',
    ],
    technologies: ['Python', 'Fortran', 'MongoDB', 'R', 'Scientific Computing'],
    metrics: [
      { label: 'Computation time', value: '-45%', sub: 'atmospheric calculations' },
      { label: 'Spectra simulated', value: '111,766', sub: 'terrestrial spectra' },
    ],
  },
];
