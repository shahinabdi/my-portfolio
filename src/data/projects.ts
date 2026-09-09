export interface Project {
  name: string;
  category: string;
  description: string;
  problem: string;
  contribution: string;
  technologies: string[];
  links?: { label: string; url: string }[];
}

export const projects: Project[] = [
  {
    name: 'Python Optimization Tips',
    category: 'Python / Performance',
    description:
      'A collection of Python optimization techniques showing how small changes lead to significant performance improvements, with real examples and measurable metrics.',
    problem:
      'Python performance is often treated as a black box. Many developers lack clear, metric-backed examples of how specific code-level changes translate into real speedups.',
    contribution:
      'Built a curated set of optimization patterns \u2014 from list comprehensions to data structure choices \u2014 each documented with before/after benchmarks and measurable results.',
    technologies: ['Python', 'Benchmarking', 'Data Structures', 'Performance'],
    links: [{ label: 'GitHub', url: 'https://github.com/shahinabdi/python-optimization-tips' }],
  },
  {
    name: 'ESA PLATO Mission \u2014 Pipeline Optimization',
    category: 'Scientific Computing / Astrophysics',
    description:
      'Optimization of Python code for ESA\u2019s PLATO mission data processing pipeline, improving performance by 40% and accelerating analysis by 25%.',
    problem:
      'The PLATO mission\u2019s data processing pipeline needed to handle large-scale scientific datasets efficiently, with strict correctness requirements.',
    contribution:
      'Profiled and optimized critical Python code paths, introduced rigorous unit and integration testing (reducing bugs by 30%), and integrated the optimized code into the mission\u2019s data processing pipeline.',
    technologies: ['Python', 'Scientific Computing', 'Unit Testing', 'Data Pipelines', 'ESA PLATO'],
  },
  {
    name: 'Django Database Management Platform',
    category: 'Web / Data Engineering',
    description:
      'A full-stack database management platform built with Django, featuring a custom user interface integrated with the backend, improving data processing efficiency by 35%.',
    problem:
      'Scientific teams needed a unified platform to manage and process large datasets with a usable interface.',
    contribution:
      'Developed the Django backend and integrated user interface, then containerized the entire stack with Docker and Docker Compose for reproducible deployments.',
    technologies: ['Python', 'Django', 'Docker', 'Docker Compose', 'PostgreSQL'],
  },
  {
    name: 'Atmospheric Spectra Simulation',
    category: 'Scientific Computing / Astrophysics',
    description:
      'Optimization of Python and Fortran programs for complex atmospheric calculations, reducing computation time by 45% across 111,766 terrestrial spectra simulations.',
    problem:
      'Atmospheric calculations required processing massive datasets with computationally intensive simulations across hundreds of thousands of spectra.',
    contribution:
      'Optimized Python and Fortran programs, managed large datasets with MongoDB and R, and ran simulations across 111,766 terrestrial spectra.',
    technologies: ['Python', 'Fortran', 'MongoDB', 'R', 'Scientific Computing'],
  },
  {
    name: 'Git Configuration Setup',
    category: 'Developer Tooling',
    description:
      'A professional Git configuration setup with optimized settings, useful aliases, and commit message templates for improved developer workflows.',
    problem:
      'Inconsistent Git configurations across teams lead to messy history and inefficient workflows.',
    contribution:
      'Created a reusable, well-documented Git configuration with optimized settings, aliases, and commit message templates.',
    technologies: ['Git', 'Developer Tooling', 'Workflow Automation'],
    links: [{ label: 'GitHub', url: 'https://github.com/shahinabdi/git-config' }],
  },
];
