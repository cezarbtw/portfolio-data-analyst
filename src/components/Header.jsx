import React, { useState, useEffect } from 'react';
import PixelIcon from './PixelIcon';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
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

      // 2. Scroll-spy
      const scrollPos = window.scrollY + 160;
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
    { id: 'projetos', href: '#projetos', label: 'Projetos', icon: 'folder' },
    { id: 'experiencia', href: '#experiencia', label: 'Experiência', icon: 'briefcase' },
    { id: 'competencias', href: '#competencias', label: 'Competências', icon: 'chart' },
    { id: 'contato', href: '#contato', label: 'Contato', icon: 'mail' },
  ];

  return (
    <>
      {/* ─── Barra de leitura fina de 2px no topo ─── */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-[var(--accent)] z-50 pointer-events-none transition-[width] duration-75"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* ─── Cabeçalho Fixo no Topo (Container ~1100px) ─── */}
      <header className="fixed top-0 left-0 right-0 z-40 h-[56px] bg-noise border-b border-[var(--line)]">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 h-full flex items-center justify-between">
          {/* Logo / Monograma à esquerda */}
          <a
            href="/"
            className="flex items-center gap-2.5 text-[var(--ink)] hover:text-[var(--accent)] transition-colors focus-visible:outline-none"
            aria-label="Ir para o topo"
          >
            <span className="w-7 h-7 rounded-card bg-[var(--surface)] border border-[var(--line)] flex items-center justify-center font-display font-bold text-[12px] text-[var(--accent)]">
              AL
            </span>
            <span className="font-display font-bold text-[16px] sm:text-[18px] tracking-wide text-[var(--ink)]">
              <span className="hidden sm:inline">Abraão Leopoldino</span>
              <span className="sm:hidden">Abraão L.</span>
            </span>
          </a>

          {/* Navegação Desktop: links de âncora + tema */}
          <div className="hidden md:flex items-center gap-6">
            <nav aria-label="Navegação principal">
              <ul className="flex items-center gap-6 font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--muted)]">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <li key={link.id}>
                      <a
                        href={link.href}
                        className={`py-1 transition-colors relative ${
                          isActive
                            ? 'text-[var(--accent)] font-semibold border-b border-[var(--accent)]'
                            : 'link-underline text-[var(--ink)] hover:text-[var(--accent)]'
                        }`}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Toggle de Tema Desktop */}
            <div className="pl-4 border-l border-[var(--line)]">
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={`Alternar para modo ${theme === 'dark' ? 'claro' : 'escuro'}`}
                className="flex items-center gap-2 px-2.5 py-1.5 border border-[var(--line)] rounded-card font-mono text-[11px] uppercase tracking-wider text-[var(--ink)] hover:border-[var(--accent)] transition-colors focus-visible:outline-none"
              >
                <PixelIcon name={theme === 'dark' ? 'sun' : 'moon'} size={13} className="text-[var(--accent)]" />
                <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
              </button>
            </div>
          </div>

          {/* Navegação Mobile: Toggle compacto + Botão Menu */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Alternar modo de cor"
              className="p-2 border border-[var(--line)] rounded-card text-[var(--ink)] hover:border-[var(--accent)] transition-colors focus-visible:outline-none"
            >
              <PixelIcon name={theme === 'dark' ? 'sun' : 'moon'} size={14} className="text-[var(--accent)]" />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Abrir menu"
              className="flex items-center gap-1.5 px-3 py-1.5 border border-[var(--line)] rounded-card font-mono text-[12px] uppercase tracking-wider text-[var(--ink)] hover:border-[var(--accent)] transition-colors focus-visible:outline-none"
            >
              <PixelIcon name="menu" size={13} />
              <span>Menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* ─── Menu Mobile em Tela Cheia ─── */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu móvel"
          className="md:hidden fixed inset-0 z-50 bg-noise text-[var(--ink)] flex flex-col justify-between p-6"
        >
          {/* Topo do modal */}
          <div className="flex items-center justify-between pb-4 border-b border-[var(--line)]">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-card bg-[var(--surface)] border border-[var(--line)] flex items-center justify-center font-display font-bold text-[12px] text-[var(--accent)]">
                AL
              </span>
              <span className="font-display font-bold text-[18px]">Abraão Leopoldino</span>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Fechar menu"
              className="p-2 border border-[var(--line)] rounded-card text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
            >
              <PixelIcon name="close" size={16} />
            </button>
          </div>

          {/* Links do menu mobile com ícones pixel-art */}
          <nav aria-label="Navegação móvel" className="py-6">
            <ul className="space-y-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3 p-3 rounded-card font-body text-[16px] transition-colors ${
                        isActive
                          ? 'bg-[var(--accent-subtle)] text-[var(--accent)] font-semibold border-l-2 border-[var(--accent)]'
                          : 'text-[var(--ink)] hover:bg-[var(--surface)]'
                      }`}
                    >
                      <PixelIcon
                        name={link.icon}
                        size={18}
                        className={isActive ? 'text-[var(--accent)]' : 'text-[var(--muted)]'}
                      />
                      <span>{link.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Rodapé do modal */}
          <div className="pt-4 border-t border-[var(--line)] flex items-center justify-between font-mono text-[11px] text-[var(--muted)]">
            <span>Goiás, Brasil · TCM-GO</span>
            <div className="flex items-center gap-4">
              <a href="https://github.com/cezarbtw" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)]">
                <PixelIcon name="github" size={16} />
              </a>
              <a href="https://www.linkedin.com/in/cezarinaciol/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)]">
                <PixelIcon name="linkedin" size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
