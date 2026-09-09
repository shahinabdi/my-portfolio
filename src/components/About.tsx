import { siteConfig } from '@/data/site';
import { useLanguage } from '@/i18n';

export function About() {
  const { t } = useLanguage();
  const profileStats = [
    { value: '6+', label: t.years },
    { value: 'Python', label: t.platform },
    { value: 'DevOps', label: t.cicd },
    { value: 'Production', label: t.engineering },
    { value: 'Scientific', label: t.scientific },
  ];
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <div className="reveal mb-12 flex items-baseline gap-4">
          <span className="section-number">01</span>
          <h2 className="text-2xl font-bold tracking-tight text-ink-900 lg:text-3xl">{t.sections[0]}</h2>
          <div className="divider ml-4 flex-1" />
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Professional story */}
          <div className="reveal lg:col-span-7">
            <p className="text-lg leading-relaxed text-ink-700">
              {t.aboutLead}
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-500">
              {t.aboutBody}
            </p>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {t.aboutPoints.map((point) => (
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
                  {t.profile}
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
                  <span className="text-ink-600">{siteConfig.location}</span> · {t.available}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
