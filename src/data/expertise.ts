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

export const technologyStack: string[] = [
  'Python',
  'Go',
  'Rust',
  'Fortran',
  'Django',
  'Flask',
  'GitHub Actions',
  'Jenkins',
  'GitLab CI/CD',
  'Docker',
  'Kubernetes',
  'Terraform',
  'Ansible',
  'RabbitMQ',
  'AWS',
  'Linux',
  'RHEL',
  'Ruff',
  'uv',
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'Airflow',
  'Git',
];

export const linuxAreas = [
  'Linux Development Environment',
  'Tooling',
  'System Customization',
  'Developer Workflows',
  'RHEL',
];
