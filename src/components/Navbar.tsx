import { useEffect, useState } from 'react';
import { Menu, X, Download, Terminal } from 'lucide-react';
import { navItems, siteConfig } from '@/data/site';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useLanguage } from '@/i18n';

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const sectionIds = navItems.map((n) => n.id);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-ink-200 bg-ink-50/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, 'top')}
          className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-ink-900"
        >
          <Terminal className="h-4 w-4 text-accent-600" strokeWidth={2.5} />
          <span>SA</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item, index) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`group flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors ${
                  activeSection === item.id
                    ? 'text-ink-900'
                    : 'text-ink-400 hover:text-ink-700'
                }`}
              >
                <span className="font-mono text-xs text-accent-500/70 group-hover:text-accent-500">
                  {item.number}
                </span>
                <span className="font-medium">{t.nav[index]}</span>
                {activeSection === item.id && (
                  <span className="h-1 w-1 rounded-full bg-accent-500" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
            aria-label={`${t.languageLabel}: ${t.switchTo}`}
            className="rounded-md border border-ink-300 px-3 py-2 font-mono text-xs font-medium text-ink-600 transition-colors hover:border-ink-900 hover:text-ink-900"
          >
            {language === 'fr' ? 'EN' : 'FR'}
          </button>
          <a
            href={siteConfig.cvUrl}
            download
            className="inline-flex items-center gap-2 rounded-md border border-ink-300 px-4 py-2 text-sm font-medium text-ink-700 transition-colors hover:border-ink-900 hover:bg-ink-900 hover:text-ink-50"
          >
            <Download className="h-3.5 w-3.5" />
            CV
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="flex items-center justify-center rounded-md p-2 text-ink-700 md:hidden"
          aria-label={mobileOpen ? t.closeMenu : t.openMenu}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-ink-200 bg-ink-50 md:hidden">
          <ul className="space-y-1 px-6 py-4">
            <li>
              <button
                type="button"
                onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left font-mono text-sm text-ink-500 hover:bg-ink-100 hover:text-ink-800"
              >
                <span>{t.languageLabel}</span>
                <span className="font-semibold text-accent-600">{language === 'fr' ? 'EN' : 'FR'}</span>
              </button>
            </li>
            {navItems.map((item, index) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`flex items-center gap-3 rounded-md px-3 py-3 text-base transition-colors ${
                    activeSection === item.id
                      ? 'bg-ink-100 text-ink-900'
                      : 'text-ink-500 hover:bg-ink-100 hover:text-ink-800'
                  }`}
                >
                  <span className="font-mono text-xs text-accent-500">{item.number}</span>
                  {t.nav[index]}
                </a>
              </li>
            ))}
            <li>
              <a
                href={siteConfig.cvUrl}
                download
                onClick={() => setMobileOpen(false)}
                className="mt-2 flex items-center gap-2 rounded-md border border-ink-300 px-3 py-3 text-base font-medium text-ink-700"
              >
                <Download className="h-4 w-4" />
                {t.cv}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
