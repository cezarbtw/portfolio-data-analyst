import React, { useState, useEffect } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  // Travar o scroll do body quando o menu tela cheia estiver aberto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Barra de leitura fina de 2px e Scroll-spy
  useEffect(() => {
    const sections = ['projetos', 'experiencia', 'competencias', 'contato'];

    const handleScroll = () => {
      // 1. Barra de leitura (2px no topo)
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));

      // 2. Scroll-spy para detecção da seção ativa
      const scrollPos = window.scrollY + 140;
      let current = '';
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          current = sections[i];
          break;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'projetos', href: '#projetos', label: 'Projetos' },
    { id: 'experiencia', href: '#experiencia', label: 'Experiência' },
    { id: 'competencias', href: '#competencias', label: 'Competências' },
    { id: 'contato', href: '#contato', label: 'Contato' },
  ];

  return (
    <>
      {/* ─── Barra de leitura fina de 2px no topo (DESIGN.md) ─── */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-[var(--accent)] z-50 pointer-events-none transition-[width] duration-75"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <header className="fixed top-0 left-0 right-0 z-40 h-[56px] bg-[var(--bg)] border-b border-[var(--line)]">
        <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
          {/* Nome à esquerda: Instrument Serif 20px */}
          <a
            href="/"
            className="font-display text-[20px] leading-none text-[var(--ink)] hover:text-[var(--accent)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
          >
            <span className="hidden sm:inline">Abraão Cezar Inácio</span>
            <span className="sm:hidden">AC</span>
          </a>

          {/* Desktop links: mono 12px, uppercase, letter-spacing 0.08em */}
          <nav aria-label="Navegação principal" className="hidden sm:block">
            <ul className="flex items-center gap-6 font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--muted)]">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      aria-current={isActive ? 'page' : undefined}
                      className={`py-1 transition-colors relative ${
                        isActive
                          ? 'text-[var(--ink)] font-semibold border-b-2 border-[var(--accent)]'
                          : 'link-underline text-[var(--ink)] hover:text-[var(--accent)]'
                      } focus-visible:outline-2 focus-visible:outline-[var(--accent)]`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile menu trigger: botão "Menu" */}
          <div className="sm:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Abrir menu"
              aria-expanded={mobileMenuOpen}
              className="font-mono text-[12px] uppercase tracking-[0.08em] px-2.5 py-1 border border-[var(--line)] text-[var(--ink)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      {/* ─── Menu Mobile Tela Cheia (DESIGN.md) ─── */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação mobile"
          className="fixed inset-0 z-50 bg-[var(--bg)] text-[var(--ink)] flex flex-col justify-between p-6 sm:hidden animate-fadeIn"
        >
          {/* Topo do modal: "AC" + Fechar */}
          <div className="flex items-center justify-between pb-6 border-b border-[var(--line)]">
            <span className="font-display text-[22px] text-[var(--ink)]">
              Abraão Cezar Inácio
            </span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Fechar menu"
              className="font-mono text-[12px] uppercase tracking-[0.08em] px-3 py-1 border border-[var(--line)] text-[var(--ink)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
            >
              Fechar [×]
            </button>
          </div>

          {/* Links de navegação em lista vertical */}
          <nav aria-label="Navegação mobile" className="py-8">
            <ul className="flex flex-col gap-6">
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.href} className="border-b border-[var(--line)] pb-4">
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-baseline justify-between group"
                    >
                      <span className="font-display text-[32px] text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors">
                        {link.label}
                      </span>
                      <span className={`font-mono text-[12px] ${isActive ? 'text-[var(--accent)] font-semibold' : 'text-[var(--muted)]'}`}>
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Rodapé do menu mobile */}
          <div className="pt-6 border-t border-[var(--line)] font-mono text-[12px] text-[var(--muted)] uppercase tracking-[0.08em] flex items-center justify-between">
            <span>Goiás, Brasil</span>
            <span>TCM-GO</span>
          </div>
        </div>
      )}
    </>
  );
}
