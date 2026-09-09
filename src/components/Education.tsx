import { education } from '@/data/education';
import { Telescope } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <div className="reveal mb-12 flex items-baseline gap-4">
          <span className="section-number">05</span>
          <h2 className="text-2xl font-bold tracking-tight text-ink-900 lg:text-3xl">
            Education
          </h2>
          <div className="divider ml-4 flex-1" />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {education.map((edu) => (
            <div
              key={edu.institution}
              className="reveal rounded-xl border border-ink-200 bg-white p-6 lg:p-8"
            >
              <div className="flex items-center gap-2">
                {edu.institution.includes('Astrophysique') ||
                edu.institution.includes('Paris') ? (
                  <Telescope className="h-4 w-4 text-accent-500" strokeWidth={2} />
                ) : (
                  <span className="h-2 w-2 rounded-full bg-ink-300" />
                )}
                <span className="font-mono text-xs text-ink-400">{edu.period}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-ink-900">{edu.institution}</h3>
              <p className="mt-1 text-sm font-medium text-ink-700">{edu.degree}</p>
              <p className="mt-0.5 text-sm text-ink-500">{edu.detail}</p>
            </div>
          ))}
        </div>

        {/* Astrophysics differentiator note */}
        <p className="reveal mt-8 max-w-prose text-sm leading-relaxed text-ink-400">
          The astrophysics background is a differentiator — it brings deep experience with
          scientific computing, large-scale data processing, and performance-critical code.
        </p>
      </div>
    </section>
  );
}
