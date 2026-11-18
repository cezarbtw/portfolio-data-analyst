import React from 'react';
import { experiencesData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section
      id="experiencia"
      className="rule-b"
      style={{ padding: '5rem 0' }}
    >
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12">

        {/* Cabeçalho da seção */}
        <div className="flex items-baseline gap-4 mb-12 rule-b pb-6">
          <span className="font-mono text-[11px] text-[var(--muted)] uppercase tracking-widest">02</span>
          <h2 className="text-display-md font-display text-[var(--ink)]">Experiência</h2>
        </div>

        {/* Layout assimétrico: período à esquerda, detalhes à direita */}
        <div className="space-y-0">
          {experiencesData.map((exp, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 lg:grid-cols-12 gap-0 rule-x py-10 first:border-t-0 first:pt-0"
            >
              {/* Coluna esquerda: período + org em mono */}
              <div className="lg:col-span-4 lg:pr-8 mb-4 lg:mb-0">
                <span className="font-mono text-[12px] font-medium text-[var(--strong)] block">
                  {exp.period}
                </span>
                <span className="font-mono text-[11px] text-[var(--muted)] block mt-0.5 leading-snug">
                  {exp.organization}
                </span>
              </div>

              {/* Coluna direita: cargo + entregas */}
              <div className="lg:col-span-8 space-y-4">
                <h3 className="font-body text-[18px] sm:text-[20px] font-semibold text-[var(--ink)] leading-snug">
                  {exp.role}
                </h3>
                <ul className="space-y-2.5 font-body text-[15px] leading-[1.68] text-[var(--ink)]">
                  {exp.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="flex gap-3">
                      <span className="font-mono text-[var(--strong)] shrink-0 mt-[0.25em]">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
