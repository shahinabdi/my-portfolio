import { projects, type Project } from '@/data/projects';
import { ArrowUpRight } from 'lucide-react';
import { localizedProjects, useLanguage } from '@/i18n';

function ProjectCard({ project, content, category, t }: { project: Project; content: typeof localizedProjects.en[number]; category: string; t: ReturnType<typeof useLanguage>['t'] }) {
  return (
    <article className="reveal group relative rounded-xl border border-ink-200 bg-white p-6 transition-all hover:border-ink-400 hover:shadow-md lg:p-8">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="font-mono text-xs text-accent-500">{category}</span>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink-900">
            {project.name}
          </h3>
        </div>
        {project.links && project.links[0] && (
          <a
            href={project.links[0].url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} on GitHub`}
            className="shrink-0 rounded-md p-2 text-ink-400 transition-colors hover:bg-ink-100 hover:text-ink-900"
          >
            <ArrowUpRight className="h-5 w-5" />
          </a>
        )}
      </div>

      {/* Description */}
      <p className="mt-4 text-sm leading-relaxed text-ink-600">{content[1]}</p>

      {/* Problem & Contribution */}
      <div className="mt-6 space-y-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-ink-400">
            {t.problem}
          </span>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{content[2]}</p>
        </div>
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-ink-400">
            {t.contribution}
          </span>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{content[3]}</p>
        </div>
      </div>

      {/* Technologies */}
      <div className="mt-6 flex flex-wrap gap-1.5">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded border border-ink-200 bg-ink-50 px-2 py-0.5 font-mono text-xs text-ink-500"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}

export function Projects() {
  const { language, t } = useLanguage();
  return (
    <section id="projects" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <div className="reveal mb-12 flex items-baseline gap-4">
          <span className="section-number">04</span>
          <h2 className="text-2xl font-bold tracking-tight text-ink-900 lg:text-3xl">
            {t.sections[3]}
          </h2>
          <div className="divider ml-4 flex-1" />
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} content={localizedProjects[language][index]} category={t.categories[index === 4 ? 3 : index === 1 || index === 3 ? 1 : index === 2 ? 2 : 0]} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
