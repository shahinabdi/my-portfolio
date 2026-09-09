import { siteConfig } from '@/data/site';

const profileStats = [
  { value: '6+', label: 'Years' },
  { value: 'Python', label: 'Platform' },
  { value: 'DevOps', label: 'CI/CD' },
  { value: 'Production', label: 'Engineering' },
  { value: 'Scientific', label: 'Computing' },
];

const aboutPoints = [
  'Production environments',
  'Monitoring & incident management',
  'On-call',
  'Python platform modernization',
  'CI/CD pipeline engineering',
  'Kubernetes orchestration',
  'Docker containerization',
  'Infrastructure automation',
  'Data Science & scientific computing',
  'Astrophysics background',
];

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <div className="reveal mb-12 flex items-baseline gap-4">
          <span className="section-number">01</span>
          <h2 className="text-2xl font-bold tracking-tight text-ink-900 lg:text-3xl">About</h2>
          <div className="divider ml-4 flex-1" />
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Professional story */}
          <div className="reveal lg:col-span-7">
            <p className="text-lg leading-relaxed text-ink-700">
              Ingénieur DevOps / Développeur Python avec 6+ ans d'expérience en développement
              Python, DevOps, CI/CD et applications scientifiques.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-500">
              I work across the full lifecycle of Python platforms — from modernizing legacy
              codebases and migrating language versions to building CI/CD pipelines and
              operating production environments. My background in astrophysics and scientific
              computing gives me a unique perspective on performance, data integrity, and
              computational workloads.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {aboutPoints.map((point) => (
                <span
                  key={point}
                  className="flex items-center gap-2 font-mono text-xs text-ink-500"
                >
                  <span className="h-1 w-1 rounded-full bg-accent-500" />
                  {point}
                </span>
              ))}
            </div>
          </div>

          {/* Engineering profile summary */}
          <div className="reveal lg:col-span-5">
            <div className="rounded-xl border border-ink-200 bg-white p-6 lg:p-8">
              <div className="mb-6 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                <span className="font-mono text-xs uppercase tracking-widest text-ink-400">
                  Engineering Profile
                </span>
              </div>
              <dl className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2">
                {profileStats.map((stat) => (
                  <div key={stat.label} className="border-l-2 border-ink-200 pl-4">
                    <dt className="font-mono text-xs text-ink-400">{stat.label}</dt>
                    <dd className="mt-1 text-xl font-bold tracking-tight text-ink-900">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 border-t border-ink-100 pt-4">
                <p className="font-mono text-xs text-ink-400">
                  <span className="text-ink-600">{siteConfig.location}</span> · Available for
                  engineering roles
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
