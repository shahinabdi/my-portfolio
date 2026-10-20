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
    period: 'Mars 2025 — Aujourd’hui',
    current: true,
    achievements: [
      'Migration de la plateforme Python 3.8 vers Python 3.12, réduisant les incidents de production d’environ 40 % et améliorant la lisibilité des erreurs.',
      'Migration des pipelines CI/CD de Jenkins vers GitHub Actions, avec amélioration de leur qualité, fiabilité, maintenabilité et sécurité.',
      'Modernisation d’une base de code développée depuis environ 5 ans : gestion de l’obsolescence technique, refactoring et amélioration de la qualité du code.',
      'Introduction de uv comme gestionnaire de paquets et d’environnements Python, réduisant le temps de création des images de 8 à 3 minutes (-62,5 %) et standardisant la gestion des dépendances.',
      'Adoption de Ruff pour automatiser le linting et le formatage, renforçant les standards de qualité Python.',
      'Amélioration de la stratégie de gestion des secrets et renforcement des pratiques de sécurité dans les workflows CI/CD.',
      'Supervision en temps réel des environnements de production et de staging, avec suivi de la disponibilité, des performances et de la santé du produit afin de garantir sa haute disponibilité.',
      'Participation aux rotations d’astreinte et gestion des incidents de production : détection, diagnostic, résolution et suivi afin d’assurer la continuité de service et la disponibilité du produit.',
      'Provisionnement avec Ansible et Terraform d’un environnement UAT supplémentaire pour la documentation, les tests de nouveaux environnements et la mesure du temps de reprise (DR).',
      'Orchestration de clusters Kubernetes pour les environnements de production et de staging, avec optimisation des ressources et de l’évolutivité.',
      'Exploitation et intégration de RabbitMQ dans un environnement de microservices et contribution au diagnostic des échanges asynchrones.',
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
      { label: 'Python 3.8 → 3.12', value: '-40%', sub: 'incidents de production' },
      { label: '8 min → 3 min', value: '-62,5%', sub: 'temps de création des images' },
    ],
  },
  {
    company: 'Institut d’Astrophysique Spatiale',
    role: 'Développeur Python',
    period: 'Juillet 2023 — Mars 2025',
    achievements: [
      'Optimisation d’applications Python pour la mission spatiale PLATO de l’ESA, avec une réduction des temps d’exécution jusqu’à 40 % grâce au profiling et à l’optimisation algorithmique.',
      'Conception de tests unitaires et d’intégration pour garantir la qualité et la stabilité des développements.',
      'Développement et optimisation de pipelines de traitement de données et automatisation des workflows de test sous Linux.',
      'Participation aux pipelines GitLab CI/CD et collaboration avec les équipes scientifiques pour résoudre les incidents et améliorer les développements en continu.',
    ],
    technologies: ['Python', 'ESA PLATO', 'Tests unitaires', 'Tests d’intégration', 'GitLab CI/CD', 'Linux'],
    metrics: [{ label: 'Temps d’exécution', value: '-40%', sub: 'jusqu’à' }],
  },
  {
    company: 'Institut d’Astrophysique Spatiale',
    role: 'Développeur Python',
    period: 'Août 2021 — Juin 2023',
    achievements: [
      'Développement d’une plateforme web de gestion de données basée sur Django, incluant des API REST et des fonctionnalités backend.',
      'Développement et intégration d’interfaces web connectées au backend Django.',
      'Conteneurisation avec Docker et orchestration des services via Docker Compose.',
      'Automatisation des déploiements et des tâches d’administration avec Ansible et Bash, avec mise en place de workflows reproductibles.',
      'Administration et optimisation d’environnements Linux.',
    ],
    technologies: ['Python', 'Django', 'API REST', 'Docker', 'Docker Compose', 'Ansible', 'Bash', 'Linux'],
  },
  {
    company: 'LATMOS',
    role: 'Développeur Python / Fortran',
    period: 'Mars 2020 — Août 2021',
    achievements: [
      'Développement et optimisation d’applications scientifiques Python et Fortran pour le traitement de données atmosphériques.',
      'Réduction des temps d’exécution jusqu’à 45 % grâce au profiling, à l’optimisation algorithmique et à la vectorisation.',
      'Mise en œuvre de traitements parallèles et de solutions HPC pour l’analyse de grands volumes de données.',
      'Développement de pipelines automatisés de prétraitement, validation et analyse de données scientifiques.',
      'Traitement de plus de 111 000 spectres et gestion de données scientifiques avec MongoDB.',
      'Automatisation des traitements avec Python et Bash sous Linux, en utilisant NumPy, Pandas et SciPy.',
    ],
    technologies: ['Python', 'Fortran', 'MongoDB', 'NumPy', 'Pandas', 'SciPy', 'Bash', 'Linux', 'HPC'],
    metrics: [
      { label: 'Temps d’exécution', value: '-45%', sub: 'jusqu’à' },
      { label: 'Spectres traités', value: '111 000+', sub: 'données atmosphériques' },
    ],
  },
];
