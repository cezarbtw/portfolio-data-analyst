import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-[var(--line)] bg-[var(--bg)] py-8">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row items-baseline justify-between gap-4 font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--muted)]">
        <div>
          <span>© {new Date().getFullYear()} Abraão Cezar Inácio</span>
        </div>
        <div>
          <span>Goiás, Brasil · Setor Público</span>
        </div>
      </div>
    </footer>
  );
}
