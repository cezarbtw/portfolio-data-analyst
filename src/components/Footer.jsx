import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer
      className="rule-x py-6"
      style={{ background: 'var(--canvas)' }}
    >
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-baseline justify-between gap-2">
        <p className="font-mono text-[11px] text-[var(--muted)]">
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
        <p className="font-mono text-[11px] text-[var(--muted)]">
          Goiás, Brasil · Analista de Dados & BI
        </p>
      </div>
    </footer>
  );
}
