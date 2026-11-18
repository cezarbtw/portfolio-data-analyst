import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Header() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('top');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));

      const sections = ['top', 'projetos', 'experiencia', 'competencias', 'contato'];
      const sp = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= sp) { setActiveSection(sections[i]); break; }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'projetos',    label: 'Projetos' },
    { id: 'experiencia', label: 'Experiência' },
    { id: 'competencias',label: 'Competências' },
    { id: 'contato',     label: 'Contato' },
  ];

  return (
    <header
      className="sticky top-0 z-40 w-full bg-[var(--canvas)]/95 backdrop-blur-sm"
      style={{ borderBottom: '1px solid var(--rule)', height: 'var(--header-h)' }}
    >
      {/* Barra de progresso 2px */}
      <div
        className="absolute top-0 left-0 h-[2px] bg-[var(--strong)] transition-all duration-75 ease-out"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12 h-full flex items-center justify-between">

        {/* Logo / nome */}
        <a
          href="#top"
          className="font-mono text-[13px] font-medium text-[var(--ink)] hover:text-[var(--strong)] transition-colors whitespace-nowrap"
        >
          <span className="hidden sm:inline">{personalInfo.name}</span>
          <span className="sm:hidden">{personalInfo.initials}</span>
        </a>

        {/* Nav desktop */}
        <nav aria-label="Navegação" className="hidden sm:block">
          <ul className="flex items-center gap-6 text-[13px] font-body text-[var(--muted)]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`transition-colors py-1 ${
                      isActive
                        ? 'text-[var(--strong)] font-medium'
                        : 'hover:text-[var(--ink)]'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Botão mobile */}
        <div className="sm:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Menu"
            className="font-mono text-[11px] px-2.5 py-1 text-[var(--ink)]"
            style={{ border: '1px solid var(--rule)' }}
          >
            {mobileMenuOpen ? '[×]' : '[≡]'}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div
          className="sm:hidden bg-[var(--canvas)] px-5 py-3"
          style={{ borderTop: '1px solid var(--rule)' }}
        >
          <nav aria-label="Menu móvel">
            <ul className="flex flex-col gap-2 text-sm font-body text-[var(--muted)]">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 hover:text-[var(--ink)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
