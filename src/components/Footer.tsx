import { Github, Linkedin, Mail } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { useLanguage } from '@/i18n';

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-ink-200 py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          {/* Identity */}
          <div>
            <p className="font-mono text-sm font-semibold text-ink-900">Shahin ABDI</p>
            <p className="mt-0.5 font-mono text-xs text-ink-400">
              {t.footerRole}
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-1">
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-md p-2 text-ink-400 transition-colors hover:bg-ink-100 hover:text-ink-900"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-md p-2 text-ink-400 transition-colors hover:bg-ink-100 hover:text-ink-900"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Email"
              className="rounded-md p-2 text-ink-400 transition-colors hover:bg-ink-100 hover:text-ink-900"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-6 border-t border-ink-100 pt-4">
          <p className="font-mono text-xs text-ink-400">
            © 2026 Shahin ABDI
          </p>
        </div>
      </div>
    </footer>
  );
}
