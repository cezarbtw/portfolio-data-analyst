import React, { useState, useEffect } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const navLinks = [
    { href: '#projetos', label: 'Projetos' },
    { href: '#experiencia', label: 'Experiência' },
    { href: '#competencias', label: 'Competências' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 h-[56px] bg-[var(--bg)] border-b border-[var(--line)]">
        <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
          {/* Nome à esquerda: Instrument Serif 20px */}
          <a
            href="/"
            className="font-display text-[20px] leading-none text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
          >
            <span className="hidden sm:inline">Abraão Cezar Inácio</span>
            <span className="sm:hidden">AC</span>
          </a>

          {/* Desktop links: mono 12px, uppercase, letter-spacing 0.08em */}
          <nav aria-label="Navegação principal" className="hidden sm:block">
            <ul className="flex items-center gap-6 font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--muted)]">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="link-underline text-[var(--ink)] hover:text-[var(--accent)] transition-colors py-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu trigger: botão "Menu" */}
          <div className="sm:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Abrir menu"
              aria-expanded={mobileMenuOpen}
              className="font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--ink)] px-2 py-1 border border-[var(--line)] bg-[var(--bg)]"
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile em tela cheia (DESIGN.md: abre lista em tela cheia) */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação móvel"
          className="fixed inset-0 z-50 bg-[var(--bg)] flex flex-col justify-between p-6 sm:hidden"
        >
          {/* Topo do menu tela cheia */}
          <div className="flex items-center justify-between h-[56px] border-b border-[var(--line)] -mx-6 px-6 -mt-6">
            <span className="font-display text-[20px] text-[var(--ink)]">
              AC
            </span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Fechar menu"
              className="font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--ink)] px-2 py-1 border border-[var(--line)] bg-[var(--bg)]"
            >
              Fechar [×]
            </button>
          </div>

          {/* Lista de navegação em tela cheia */}
          <nav className="my-auto">
            <ul className="flex flex-col gap-6">
              {navLinks.map((link, idx) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-display text-[32px] text-[var(--ink)] hover:text-[var(--accent)] transition-colors block"
                  >
                    <span className="font-mono text-[12px] text-[var(--muted)] mr-3 tracking-[0.08em]">
                      0{idx + 1}
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Rodapé do menu mobile */}
          <div className="pt-6 border-t border-[var(--line)]">
            <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--muted)]">
              Abraão Cezar Inácio · Goiás, Brasil
            </p>
          </div>
        </div>
      )}
    </>
  );
}
