import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Language = 'fr' | 'en';

const translations = {
  fr: {
    nav: ['À propos', 'Expérience', 'Expertise', 'Projets', 'Formation', 'Contact'],
    cv: 'Télécharger le CV',
    viewExperience: "Voir l'expérience",
    basedInFrance: 'Basé en France',
    tagline: 'Concevoir, moderniser et exploiter des plateformes Python fiables.',
    heroDescription:
      "Ingénieur DevOps / Développeur Python avec plus de 6 ans d'expérience en développement Python, CI/CD, ingénierie de production, calcul scientifique et automatisation des infrastructures.",
    sections: ['À propos', 'Expérience', 'Expertise', 'Projets', 'Formation', 'Contact'],
    aboutLead:
      "Ingénieur DevOps / Développeur Python avec plus de 6 ans d'expérience en développement Python, DevOps, CI/CD et applications scientifiques.",
    aboutBody:
      "J'interviens sur tout le cycle de vie des plateformes Python : modernisation de bases de code existantes, migration de versions, construction de pipelines CI/CD et exploitation d'environnements de production. Mon parcours en astrophysique et en calcul scientifique m'apporte une approche particulière de la performance, de l'intégrité des données et des charges de calcul.",
    aboutPoints: ['Environnements de production', 'Monitoring et gestion des incidents', 'Astreinte', 'Modernisation de plateformes Python', 'Ingénierie des pipelines CI/CD', 'Orchestration Kubernetes', 'Conteneurisation Docker', "Automatisation de l'infrastructure", 'Data science et calcul scientifique', 'Parcours en astrophysique'],
    profile: 'Profil ingénierie',
    years: 'Années',
    platform: 'Plateforme',
    cicd: 'CI/CD',
    engineering: 'Ingénierie',
    scientific: 'Calcul scientifique',
    available: 'Disponible pour des postes en ingénierie',
    current: "En poste",
    problem: 'Problème',
    contribution: 'Contribution',
    technologyStack: 'Stack technique',
    linuxDescription:
      'Administration, maintenance et optimisation des environnements Linux.',
    linuxAreas: ['Environnement de développement Linux', 'Outils', 'Personnalisation du système', 'Workflows développeur', 'RHEL'],
    astrophysicsNote:
      "Le parcours en astrophysique est un vrai différenciateur : il apporte une solide expérience du calcul scientifique, du traitement de données à grande échelle et du code soumis à de fortes contraintes de performance.",
    contactLead: 'Construisons des systèmes fiables.',
    contactBody: 'Ouvert aux postes en DevOps et en ingénierie Python. Échangeons via les canaux ci-dessous.',
    location: 'Localisation',
    getInTouch: 'Me contacter',
    footerRole: 'Ingénieur DevOps / Développeur Python',
    languageLabel: 'Langue',
    switchTo: 'Passer en anglais',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    categories: ['Python / Performance', 'Calcul scientifique / Astrophysique', 'Web / Ingénierie des données', 'Outils développeur'],
    experienceRoles: ['Ingénieur DevOps', 'Développeur Python', 'Développeur Python', 'Développeur Python / Fortran'],
  },
  en: {
    nav: ['About', 'Experience', 'Expertise', 'Projects', 'Education', 'Contact'],
    cv: 'Download CV',
    viewExperience: 'View Experience',
    basedInFrance: 'Based in France',
    tagline: 'Building, modernizing and operating reliable Python platforms.',
    heroDescription:
      'DevOps Engineer / Python Developer with 6+ years of experience across Python development, CI/CD, production engineering, scientific computing and infrastructure automation.',
    sections: ['About', 'Experience', 'Expertise', 'Projects', 'Education', 'Contact'],
    aboutLead:
      'DevOps Engineer / Python Developer with 6+ years of experience in Python development, DevOps, CI/CD and scientific applications.',
    aboutBody:
      'I work across the full lifecycle of Python platforms, from modernizing legacy codebases and migrating language versions to building CI/CD pipelines and operating production environments. My background in astrophysics and scientific computing gives me a unique perspective on performance, data integrity and computational workloads.',
    aboutPoints: ['Production environments', 'Monitoring and incident management', 'On-call', 'Python platform modernization', 'CI/CD pipeline engineering', 'Kubernetes orchestration', 'Docker containerization', 'Infrastructure automation', 'Data science and scientific computing', 'Astrophysics background'],
    profile: 'Engineering profile',
    years: 'Years',
    platform: 'Platform',
    cicd: 'CI/CD',
    engineering: 'Engineering',
    scientific: 'Scientific computing',
    available: 'Available for engineering roles',
    current: 'Current',
    problem: 'Problem',
    contribution: 'Contribution',
    technologyStack: 'Technology stack',
    linuxDescription:
      'Linux environment administration, maintenance and optimization.',
    linuxAreas: ['Linux development environment', 'Tooling', 'System customization', 'Developer workflows', 'RHEL'],
    astrophysicsNote:
      'The astrophysics background is a differentiator, bringing deep experience with scientific computing, large-scale data processing and performance-critical code.',
    contactLead: "Let's build reliable systems.",
    contactBody: 'Open to DevOps and Python engineering roles. Reach out through any of the channels below.',
    location: 'Location',
    getInTouch: 'Get in touch',
    footerRole: 'DevOps Engineer / Python Developer',
    languageLabel: 'Language',
    switchTo: 'Passer en français',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    categories: ['Python / Performance', 'Scientific Computing / Astrophysics', 'Web / Data Engineering', 'Developer Tooling'],
    experienceRoles: ['DevOps Engineer', 'Python Developer', 'Python Developer', 'Python / Fortran Developer'],
  },
} as const;

export type Translation = (typeof translations)[Language];

export const localizedExperience = {
  fr: [
    {
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
      metrics: [
        { label: 'Python 3.8 → 3.12', value: '-40%', sub: 'incidents de production' },
        { label: '8 min → 3 min', value: '-62,5%', sub: 'temps de création des images' },
      ],
    },
    {
      achievements: [
        'Optimisation d’applications Python pour la mission spatiale PLATO de l’ESA, avec une réduction des temps d’exécution jusqu’à 40 % grâce au profiling et à l’optimisation algorithmique.',
        'Conception de tests unitaires et d’intégration pour garantir la qualité et la stabilité des développements.',
        'Développement et optimisation de pipelines de traitement de données et automatisation des workflows de test sous Linux.',
        'Participation aux pipelines GitLab CI/CD et collaboration avec les équipes scientifiques pour résoudre les incidents et améliorer les développements en continu.',
      ],
      metrics: [{ label: 'Temps d’exécution', value: '-40%', sub: 'jusqu’à' }],
    },
    {
      achievements: [
        'Développement d’une plateforme web de gestion de données basée sur Django, incluant des API REST et des fonctionnalités backend.',
        'Développement et intégration d’interfaces web connectées au backend Django.',
        'Conteneurisation avec Docker et orchestration des services via Docker Compose.',
        'Automatisation des déploiements et des tâches d’administration avec Ansible et Bash, avec mise en place de workflows reproductibles.',
        'Administration et optimisation d’environnements Linux.',
      ],
      metrics: [],
    },
    {
      achievements: [
        'Développement et optimisation d’applications scientifiques Python et Fortran pour le traitement de données atmosphériques.',
        'Réduction des temps d’exécution jusqu’à 45 % grâce au profiling, à l’optimisation algorithmique et à la vectorisation.',
        'Mise en œuvre de traitements parallèles et de solutions HPC pour l’analyse de grands volumes de données.',
        'Développement de pipelines automatisés de prétraitement, validation et analyse de données scientifiques.',
        'Traitement de plus de 111 000 spectres et gestion de données scientifiques avec MongoDB.',
        'Automatisation des traitements avec Python et Bash sous Linux, en utilisant NumPy, Pandas et SciPy.',
      ],
      metrics: [
        { label: 'Temps d’exécution', value: '-45%', sub: 'jusqu’à' },
        { label: 'Spectres traités', value: '111 000+', sub: 'données atmosphériques' },
      ],
    },
  ],
  en: [
    {
      achievements: [
        'Migrated the Python platform from Python 3.8 to Python 3.12, reducing production incidents by approximately 40% and improving error readability.',
        'Migrated CI/CD pipelines from Jenkins to GitHub Actions, improving their quality, reliability, maintainability and security.',
        'Modernized a codebase developed over approximately five years through technical-debt management, refactoring and code-quality improvements.',
        'Introduced uv for Python package and environment management, reducing image creation time from 8 to 3 minutes (-62.5%) and standardizing dependency management.',
        'Adopted Ruff to automate linting and formatting, strengthening Python quality standards.',
        'Improved secrets-management strategy and strengthened security practices in CI/CD workflows.',
        'Monitored production and staging environments in real time, tracking availability, performance and product health to ensure high availability.',
        'Participated in on-call rotations and handled production incidents from detection and diagnosis through resolution and follow-up to ensure service continuity and product availability.',
        'Provisioned an additional UAT environment with Ansible and Terraform for documentation, new-environment testing and disaster-recovery timing.',
        'Orchestrated Kubernetes clusters for production and staging environments, optimizing resources and scalability.',
        'Operated and integrated RabbitMQ in a microservices environment and contributed to diagnosing asynchronous exchanges.',
      ],
      metrics: [
        { label: 'Python 3.8 → 3.12', value: '-40%', sub: 'production incidents' },
        { label: '8 min → 3 min', value: '-62.5%', sub: 'image creation time' },
      ],
    },
    {
      achievements: [
        'Optimized Python applications for ESA’s PLATO space mission, reducing execution times by up to 40% through profiling and algorithmic optimization.',
        'Designed unit and integration tests to ensure development quality and stability.',
        'Developed and optimized data-processing pipelines and automated test workflows on Linux.',
        'Contributed to GitLab CI/CD pipelines and collaborated with scientific teams to resolve incidents and continuously improve development.',
      ],
      metrics: [{ label: 'Execution time', value: '-40%', sub: 'up to' }],
    },
    {
      achievements: [
        'Developed a Django-based web data-management platform, including REST APIs and backend features.',
        'Developed and integrated web interfaces connected to the Django backend.',
        'Containerized applications with Docker and orchestrated services with Docker Compose.',
        'Automated deployments and administration tasks with Ansible and Bash, creating reproducible workflows.',
        'Administered and optimized Linux environments.',
      ],
      metrics: [],
    },
    {
      achievements: [
        'Developed and optimized scientific Python and Fortran applications for atmospheric data processing.',
        'Reduced execution times by up to 45% through profiling, algorithmic optimization and vectorization.',
        'Implemented parallel processing and HPC solutions to analyze large data volumes.',
        'Developed automated pipelines for scientific data preprocessing, validation and analysis.',
        'Processed more than 111,000 spectra and managed scientific data with MongoDB.',
        'Automated processing with Python and Bash on Linux using NumPy, Pandas and SciPy.',
      ],
      metrics: [
        { label: 'Execution time', value: '-45%', sub: 'up to' },
        { label: 'Spectra processed', value: '111,000+', sub: 'atmospheric data' },
      ],
    },
  ],
} as const;

export const localizedExpertise = {
  fr: [
    ['Ingénierie et modernisation de plateformes Python', 'Modernisation, migration de versions, gestion des dépendances et industrialisation de plateformes Python.'],
    ['DevOps et CI/CD', 'Conception, migration et optimisation de pipelines de déploiement.'],
    ['Ingénierie de production et fiabilité', 'Monitoring, astreinte, gestion des incidents et amélioration de la fiabilité.'],
    ['Qualité logicielle et expérience développeur', 'Qualité du code, tests, linting, formatage, outils développeur et modernisation du legacy.'],
    ['Cloud et ingénierie des infrastructures', 'Cloud, conteneurs, Kubernetes, infrastructure as code et provisionnement denvironnements.'],
    ['Ingénierie des données et calcul scientifique', 'Traitement de données à grande échelle, applications scientifiques et charges de calcul.'],
  ],
  en: [
    ['Python Platform Engineering & Modernization', 'Modernization, version migrations, dependency management and industrialization of Python platforms.'],
    ['DevOps & CI/CD', 'Design, migration and optimization of deployment pipelines.'],
    ['Production Engineering & Reliability', 'Monitoring, on-call, incident management and reliability improvements.'],
    ['Software Quality & Developer Experience', 'Code quality, testing, linting, formatting, developer tooling and legacy modernization.'],
    ['Cloud & Infrastructure Engineering', 'Cloud, containers, Kubernetes, infrastructure as code and environment provisioning.'],
    ['Data Engineering & Scientific Computing', 'Large-scale data processing, scientific applications and computational workloads.'],
  ],
} as const;

export const localizedProjects = {
  fr: [
    ['Conseils doptimisation Python', 'Une collection de techniques doptimisation Python montrant comment de petits changements produisent des gains de performance mesurables.', 'Les performances Python sont souvent traitées comme une boîte noire. Beaucoup de développeurs manquent dexemples clairs et mesurés.', 'Création dun ensemble de patterns documentés avec des benchmarks avant/après et des résultats mesurables.'],
    ['Mission ESA PLATO — Optimisation du pipeline', 'Optimisation du code Python du pipeline de traitement des données de la mission PLATO de lESA, avec 40 % de performance en plus et une analyse accélérée de 25 %.', 'Le pipeline devait traiter efficacement de grands volumes de données scientifiques avec des exigences strictes de justesse.', 'Profilage et optimisation des chemins critiques, ajout de tests rigoureux et intégration du code optimisé dans le pipeline de mission.'],
    ['Plateforme Django de gestion de bases de données', 'Plateforme full-stack de gestion de bases de données construite avec Django, avec une interface intégrée au backend et une efficacité accrue de 35 %.', 'Les équipes scientifiques avaient besoin dune plateforme unifiée pour gérer et traiter de grands jeux de données.', 'Développement du backend Django, intégration de linterface et conteneurisation avec Docker et Docker Compose.'],
    ['Simulation de spectres atmosphériques', 'Optimisation de programmes Python et Fortran pour des calculs atmosphériques complexes, réduisant le temps de calcul de 45 % sur 111 766 simulations.', 'Les calculs atmosphériques nécessitaient le traitement de grands volumes de données et des simulations intensives.', 'Optimisation des programmes, gestion des données avec MongoDB et R et exécution des simulations.'],
    ['Configuration Git', 'Configuration Git professionnelle avec paramètres optimisés, alias utiles et modèles de messages de commit.', 'Des configurations Git incohérentes entraînent un historique désordonné et des workflows inefficaces.', 'Création dune configuration Git réutilisable et documentée avec paramètres, alias et modèles de commits.'],
  ],
  en: [
    ['Python Optimization Tips', 'A collection of Python optimization techniques showing how small changes lead to measurable performance improvements.', 'Python performance is often treated as a black box. Many developers lack clear, metric-backed examples.', 'Built a curated set of documented patterns with before-and-after benchmarks and measurable results.'],
    ['ESA PLATO Mission — Pipeline Optimization', 'Optimization of Python code for the ESA PLATO mission data-processing pipeline, improving performance by 40% and accelerating analysis by 25%.', 'The pipeline needed to process large-scale scientific datasets efficiently with strict correctness requirements.', 'Profiled and optimized critical paths, added rigorous testing and integrated the optimized code into the mission pipeline.'],
    ['Django Database Management Platform', 'A full-stack database-management platform built with Django, with an interface integrated into the backend and 35% better processing efficiency.', 'Scientific teams needed a unified platform to manage and process large datasets.', 'Developed the Django backend, integrated the interface and containerized the stack with Docker and Docker Compose.'],
    ['Atmospheric Spectra Simulation', 'Optimization of Python and Fortran programs for complex atmospheric calculations, reducing computation time by 45% across 111,766 simulations.', 'Atmospheric calculations required large datasets and computationally intensive simulations.', 'Optimized the programs, managed data with MongoDB and R and ran the simulations.'],
    ['Git Configuration Setup', 'A professional Git configuration with optimized settings, useful aliases and commit-message templates.', 'Inconsistent Git configurations lead to messy history and inefficient workflows.', 'Created a reusable, documented Git configuration with optimized settings, aliases and commit templates.'],
  ],
} as const;

export const localizedEducation = {
  fr: [
    ['Mastère Chef de projet Data et Intelligence Artificielle', 'RNCP niveau 7'],
    ['M1 SUTS / M2 OSAE', 'Master en Astronomie et Astrophysique'],
  ],
  en: [
    ['Master\'s in Data and Artificial Intelligence Project Management', 'RNCP level 7'],
    ['M1 SUTS / M2 OSAE', 'Master\'s in Astronomy and Astrophysics'],
  ],
} as const;

const LanguageContext = createContext<{ language: Language; setLanguage: (language: Language) => void; t: Translation } | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);
  return <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
