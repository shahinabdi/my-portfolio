export interface ExpertiseArea {
  number: string;
  title: string;
  description: string;
}

export const expertiseAreas: ExpertiseArea[] = [
  {
    number: '01',
    title: 'Python Platform Engineering & Modernization',
    description:
      'Modernisation, migration de versions, gestion des d\u00e9pendances et industrialisation de plateformes Python.',
  },
  {
    number: '02',
    title: 'DevOps & CI/CD',
    description:
      'Conception, migration et optimisation de pipelines de d\u00e9ploiement.',
  },
  {
    number: '03',
    title: 'Production Engineering & Reliability',
    description:
      'Monitoring, on-call, gestion des incidents et am\u00e9lioration de la fiabilit\u00e9.',
  },
  {
    number: '04',
    title: 'Software Quality & Developer Experience',
    description:
      'Code quality, testing, linting, formatting, developer tooling and legacy modernization.',
  },
  {
    number: '05',
    title: 'Cloud & Infrastructure Engineering',
    description:
      'Cloud, containers, Kubernetes, infrastructure as code and environment provisioning.',
  },
  {
    number: '06',
    title: 'Data Engineering & Scientific Computing',
    description:
      'Large-scale data processing, scientific applications and computational workloads.',
  },
];

export const skillCategories = [
  {
    title: { fr: 'Langages', en: 'Languages' },
    skills: {
      fr: ['Python (expert)', 'Go (intermédiaire)', 'Rust (débutant)', 'Fortran', 'JavaScript', 'TypeScript'],
      en: ['Python (expert)', 'Go (intermediate)', 'Rust (beginner)', 'Fortran', 'JavaScript', 'TypeScript'],
    },
  },
  {
    title: { fr: 'Backend & API', en: 'Backend & APIs' },
    skills: { fr: ['Django', 'Flask', 'API REST'], en: ['Django', 'Flask', 'REST APIs'] },
  },
  {
    title: { fr: 'DevOps & CI/CD', en: 'DevOps & CI/CD' },
    skills: {
      fr: ['GitHub Actions', 'Jenkins', 'GitLab CI/CD', 'Docker', 'Docker Compose', 'Kubernetes', 'Helm', 'Ansible', 'Terraform'],
      en: ['GitHub Actions', 'Jenkins', 'GitLab CI/CD', 'Docker', 'Docker Compose', 'Kubernetes', 'Helm', 'Ansible', 'Terraform'],
    },
  },
  {
    title: { fr: 'Messagerie & systèmes distribués', en: 'Messaging & Distributed Systems' },
    skills: { fr: ['RabbitMQ'], en: ['RabbitMQ'] },
  },
  {
    title: { fr: 'Qualité logicielle & tests', en: 'Software Quality & Testing' },
    skills: {
      fr: ['Tests unitaires', 'Tests d’intégration', 'Tests end-to-end (E2E)', 'Revue de code', 'Modernisation du code legacy', 'SonarQube'],
      en: ['Unit testing', 'Integration testing', 'End-to-end (E2E) testing', 'Code review', 'Legacy code modernization', 'SonarQube'],
    },
  },
  {
    title: { fr: 'Cloud, données & observabilité', en: 'Cloud, Data & Observability' },
    skills: {
      fr: ['AWS', 'ETL', 'Airflow', 'PostgreSQL', 'MySQL', 'MongoDB', 'Grafana', 'Prometheus', 'ELK'],
      en: ['AWS', 'ETL', 'Airflow', 'PostgreSQL', 'MySQL', 'MongoDB', 'Grafana', 'Prometheus', 'ELK'],
    },
  },
  {
    title: { fr: 'Systèmes, sécurité & méthodes', en: 'Systems, Security & Methods' },
    skills: {
      fr: ['Administration Linux', 'Red Hat Enterprise Linux (RHEL)', 'Gestion des secrets', 'Agile', 'Jira', 'Gestion du changement'],
      en: ['Linux administration', 'Red Hat Enterprise Linux (RHEL)', 'Secrets management', 'Agile', 'Jira', 'Change management'],
    },
  },
];

export const linuxAreas = [
  'Linux Development Environment',
  'Tooling',
  'System Customization',
  'Developer Workflows',
  'RHEL',
];
