import { ArrowRight, Download, Github, Linkedin, MapPin } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { useLanguage } from '@/i18n';

const heroMeta = ['Python', 'DevOps', 'Cloud', 'Production Engineering'];

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Metadata line */}
        <div className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-ink-400">
          <span className="text-accent-600">// portfolio</span>
          <span className="h-px w-8 bg-ink-300" />
          <span>v2.0 - 2026</span>
        </div>

        {/* Name */}
        <h1 className="text-5xl font-bold tracking-tighter text-ink-900 sm:text-6xl lg:text-7xl">
          Shahin ABDI
        </h1>

        {/* Roles */}
        <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1 font-mono text-lg text-ink-500 lg:text-xl">
          <span className="text-ink-800">{t.experienceRoles[0]}</span>
          <span className="text-ink-300">/</span>
          <span className="text-ink-800">{t.experienceRoles[1]}</span>
        </div>

        {/* Tagline */}
        <p className="mt-8 max-w-prose text-xl leading-relaxed text-ink-700 lg:text-2xl">
          {t.tagline}
        </p>

        {/* Supporting text */}
        <p className="mt-4 max-w-prose text-base leading-relaxed text-ink-500">
          {t.heroDescription}
        </p>

        {/* Metadata tags */}
        <div className="mt-8 flex flex-wrap gap-2">
          {[t.basedInFrance, ...heroMeta].map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 bg-ink-50 px-3 py-1 font-mono text-xs text-ink-500"
            >
              {tag === t.basedInFrance && <MapPin className="h-3 w-3 text-accent-500" />}
              {tag}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#experience"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 rounded-md bg-ink-900 px-6 py-3 text-sm font-medium text-ink-50 transition-all hover:bg-ink-800 hover:shadow-lg"
          >
            {t.viewExperience}
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={siteConfig.cvUrl}
            download
            className="inline-flex items-center gap-2 rounded-md border border-ink-300 px-6 py-3 text-sm font-medium text-ink-700 transition-all hover:border-ink-900 hover:text-ink-900"
          >
            <Download className="h-4 w-4" />
            {t.cv}
          </a>
          <div className="flex items-center gap-1">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-md p-2.5 text-ink-400 transition-colors hover:bg-ink-100 hover:text-ink-900"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-md p-2.5 text-ink-400 transition-colors hover:bg-ink-100 hover:text-ink-900"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
