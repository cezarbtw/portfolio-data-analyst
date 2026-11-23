import React from 'react';
import PixelIcon from './PixelIcon';

export default function Footer() {
  return (
    <footer className="w-full border-t border-[var(--line)] bg-[var(--surface)] py-8 px-5 sm:px-8">
      <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--muted)] text-center sm:text-left">
        <div className="flex items-center gap-2">
          <span>© {new Date().getFullYear()} Abraão Leopoldino</span>
          <span className="text-[var(--line)] hidden sm:inline">·</span>
          <span className="text-[var(--ink)]">Goiás, Brasil</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[10px] sm:text-[11px]">
          <span>Malha IBGE // 246 MUNICÍPIOS</span>
          <span className="text-[var(--line)]">·</span>
          <span>Ícones: Pixelarticons (MIT)</span>
          <span className="text-[var(--line)]">·</span>
          <a
            href="https://github.com/cezarbtw"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-[var(--accent)] hover:text-[var(--ink)] transition-colors inline-flex items-center gap-1"
          >
            <PixelIcon name="github" size={12} />
            <span>Código</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
