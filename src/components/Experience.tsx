import { experiences, type Experience } from '@/data/experiences';

function ExperienceItem({ exp, index }: { exp: Experience; index: number }) {
  return (
    <article className="reveal relative pl-8 lg:pl-12">
      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 flex items-center">
        <span
          className={`h-3 w-3 rounded-full border-2 ${
            exp.current
              ? 'border-accent-500 bg-accent-500'
              : 'border-ink-300 bg-ink-50'
          }`}
        />
        {exp.current && (
          <span className="absolute h-3 w-3 animate-ping rounded-full border-2 border-accent-500 opacity-40" />
        )}
      </div>

      {/* Header */}
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-lg font-semibold text-ink-900">{exp.company}</h3>
        <span
          className={`font-mono text-xs ${
            exp.current ? 'text-accent-600' : 'text-ink-400'
          }`}
        >
          {exp.period}
        </span>
      </div>
      <p className="mt-0.5 font-mono text-sm text-ink-500">{exp.role}</p>

      {/* Current badge */}
      {exp.current && (
        <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-accent-50 px-2.5 py-0.5 font-mono text-xs text-accent-700">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
          Current
        </span>
      )}

      {/* Metrics */}
      {exp.metrics && exp.metrics.length > 0 && (
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {exp.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-lg border border-ink-200 bg-white px-4 py-3"
            >
              <p className="font-mono text-xs text-ink-400">{metric.label}</p>
              <p className="mt-1 text-2xl font-bold tracking-tight text-ink-900">
                {metric.value}
              </p>
              {metric.sub && (
                <p className="mt-0.5 font-mono text-xs text-ink-400">{metric.sub}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Achievements */}
      <ul className="mt-5 space-y-2.5">
        {exp.achievements.map((achievement, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink-600">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-300" />
            <span>{achievement}</span>
          </li>
        ))}
      </ul>

      {/* Technologies */}
      <div className="mt-5 flex flex-wrap gap-1.5">
        {exp.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded border border-ink-200 bg-ink-50 px-2 py-0.5 font-mono text-xs text-ink-500"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Divider between items (not after last) */}
      {index < experiences.length - 1 && (
        <div className="mt-10 mb-10 ml-0 h-px w-px bg-ink-200" />
      )}
    </article>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <div className="reveal mb-12 flex items-baseline gap-4">
          <span className="section-number">02</span>
          <h2 className="text-2xl font-bold tracking-tight text-ink-900 lg:text-3xl">
            Experience
          </h2>
          <div className="divider ml-4 flex-1" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1.5 top-0 bottom-0 w-px bg-ink-200" />
          <div className="space-y-0">
            {experiences.map((exp, index) => (
              <ExperienceItem key={`${exp.company}-${index}`} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
