import React from 'react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section
      id="competencias"
      className="rule-b"
      style={{ padding: '5rem 0', background: 'var(--canvas)' }}
    >
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12">

        {/* Cabeçalho da seção */}
        <div className="flex items-baseline gap-4 mb-12 rule-b pb-6">
          <span className="font-mono text-[11px] text-[var(--muted)] uppercase tracking-widest">03</span>
          <h2 className="text-display-md font-display text-[var(--ink)]">Competências</h2>
        </div>

        {/* Layout assimétrico: label à esquerda, itens à direita */}
        <div className="space-y-0">
          {skillsData.map((skill, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 lg:grid-cols-12 gap-0 rule-x py-8 first:border-t-0 first:pt-0"
            >
              {/* Esquerda: categoria */}
              <div className="lg:col-span-4 lg:pr-8 mb-2 lg:mb-0">
                <h3 className="font-body font-semibold text-[14px] text-[var(--muted)] uppercase tracking-wider">
                  {skill.category}
                </h3>
              </div>

              {/* Direita: itens em texto corrido */}
              <div className="lg:col-span-8">
                <p className="font-body text-[16px] leading-[1.68] text-[var(--ink)]">
                  {skill.items}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
