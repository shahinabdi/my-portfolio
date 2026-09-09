import { Mail, MapPin, Linkedin, Globe, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { useLanguage } from '@/i18n';

export function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <div className="reveal mb-12 flex items-baseline gap-4">
          <span className="section-number">06</span>
          <h2 className="text-2xl font-bold tracking-tight text-ink-900 lg:text-3xl">
            {t.sections[5]}
          </h2>
          <div className="divider ml-4 flex-1" />
        </div>

        <div className="reveal">
          <p className="text-3xl font-bold tracking-tight text-ink-900 lg:text-5xl">
            {t.contactLead}
          </p>
          <p className="mt-4 max-w-prose text-base leading-relaxed text-ink-500">
            {t.contactBody}
          </p>

          {/* Contact details */}
          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-ink-200 bg-ink-200 sm:grid-cols-2">
            <a
              href={`mailto:${siteConfig.email}`}
              className="group flex items-center gap-4 bg-white p-5 transition-colors hover:bg-ink-50"
            >
              <Mail className="h-5 w-5 text-accent-500" />
              <div>
                <p className="font-mono text-xs text-ink-400">Email</p>
                <p className="text-sm font-medium text-ink-900">{siteConfig.email}</p>
              </div>
              <ArrowRight className="ml-auto h-4 w-4 text-ink-300 transition-transform group-hover:translate-x-1 group-hover:text-ink-600" />
            </a>

            <div className="flex items-center gap-4 bg-white p-5">
              <MapPin className="h-5 w-5 text-accent-500" />
              <div>
                <p className="font-mono text-xs text-ink-400">{t.location}</p>
                <p className="text-sm font-medium text-ink-900">{siteConfig.location}</p>
              </div>
            </div>

            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-white p-5 transition-colors hover:bg-ink-50"
            >
              <Linkedin className="h-5 w-5 text-accent-500" />
              <div>
                <p className="font-mono text-xs text-ink-400">LinkedIn</p>
                <p className="text-sm font-medium text-ink-900">/in/shahinabdi</p>
              </div>
              <ArrowRight className="ml-auto h-4 w-4 text-ink-300 transition-transform group-hover:translate-x-1 group-hover:text-ink-600" />
            </a>

            <a
              href={siteConfig.links.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-white p-5 transition-colors hover:bg-ink-50"
            >
              <Globe className="h-5 w-5 text-accent-500" />
              <div>
                <p className="font-mono text-xs text-ink-400">Portfolio</p>
                <p className="text-sm font-medium text-ink-900">shahinabdi.github.io</p>
              </div>
              <ArrowRight className="ml-auto h-4 w-4 text-ink-300 transition-transform group-hover:translate-x-1 group-hover:text-ink-600" />
            </a>
          </div>

          {/* Primary CTA */}
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-ink-900 px-6 py-3 text-sm font-medium text-ink-50 transition-all hover:bg-ink-800 hover:shadow-lg"
          >
            <Mail className="h-4 w-4" />
            {t.getInTouch}
          </a>
        </div>
      </div>
    </section>
  );
}
