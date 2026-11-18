import React from 'react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="competencias" className="py-16 sm:py-20 border-b border-[#E5E3DD] dark:border-[#282826]">
      <div className="mx-auto max-w-[720px] px-6">
        <h2 className="text-2xl sm:text-3xl font-serif font-medium text-[#1C1C1A] dark:text-[#EAE8E3]">
          Competências Técnicas
        </h2>
        <p className="mt-2 text-base text-[#6B6B66] dark:text-[#96948E]">
          Ferramentas e metodologias aplicadas no ciclo de análise e engenharia de dados.
        </p>

        <div className="mt-8 space-y-4 text-[16px] leading-[1.65]">
          {skillsData.map((skill, idx) => (
            <p key={idx} className="text-[#1C1C1A] dark:text-[#EAE8E3]">
              <strong className="font-medium text-[#1C1C1A] dark:text-[#EAE8E3]">
                {skill.category}:
              </strong>{' '}
              <span className="text-[#6B6B66] dark:text-[#96948E] font-mono text-sm">
                {skill.items}
              </span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
