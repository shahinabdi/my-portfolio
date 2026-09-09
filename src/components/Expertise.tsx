import { expertiseAreas, technologyStack, linuxAreas } from '@/data/expertise';
import { Terminal } from 'lucide-react';

export function Expertise() {
  return (
    <section id="expertise" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <div className="reveal mb-12 flex items-baseline gap-4">
          <span className="section-number">03</span>
          <h2 className="text-2xl font-bold tracking-tight text-ink-900 lg:text-3xl">
            Expertise
          </h2>
          <div className="divider ml-4 flex-1" />
        </div>

        {/* Engineering domains */}
        <div className="grid gap-px overflow-hidden rounded-xl border border-ink-200 bg-ink-200 sm:grid-cols-2 lg:grid-cols-3">
          {expertiseAreas.map((area) => (
            <div
              key={area.number}
              className="reveal group bg-white p-6 transition-colors hover:bg-ink-50 lg:p-8"
            >
              <span className="font-mono text-xs text-accent-500">{area.number}</span>
              <h3 className="mt-3 text-base font-semibold leading-snug text-ink-900">
                {area.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{area.description}</p>
            </div>
          ))}
        </div>

        {/* Technology stack */}
        <div className="reveal mt-12">
          <div className="mb-4 flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-ink-400">
              Technology Stack
            </span>
            <div className="h-px flex-1 bg-ink-200" />
          </div>
          <div className="flex flex-wrap gap-2">
            {technologyStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-ink-200 bg-ink-50 px-3 py-1.5 font-mono text-xs text-ink-600 transition-colors hover:border-ink-400 hover:text-ink-900"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Linux positioning */}
        <div className="reveal mt-12 rounded-xl border border-ink-200 bg-ink-900 p-6 lg:p-8">
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4 text-accent-400" strokeWidth={2.5} />
            <span className="font-mono text-xs uppercase tracking-widest text-accent-400">
              Linux
            </span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-ink-300">
            Deep experience working in Linux environments — development tooling, system
            customization, and developer workflows. Not a system administrator, but an
            engineer comfortable operating at the system level.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {linuxAreas.map((area) => (
              <span
                key={area}
                className="rounded-md border border-ink-700 bg-ink-800 px-3 py-1.5 font-mono text-xs text-ink-200"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
