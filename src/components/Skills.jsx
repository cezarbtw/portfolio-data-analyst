import React from 'react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section
      id="competencias"
      className="py-16 sm:py-24 border-b border-[#E5E3DD] dark:border-[#282826] bg-[#F3F1EB] dark:bg-[#1A1918] transition-colors"
    >
      <div className="mx-auto max-w-[760px] px-5 sm:px-6">
        <p className="text-xs font-mono uppercase tracking-wider text-[#1F4E5F] dark:text-[#6EA3B4] font-medium">
          Domínio Técnico
        </p>
        <h2 className="mt-1 text-2xl sm:text-3xl font-serif font-medium text-[#1C1C1A] dark:text-[#EAE8E3]">
          Competências
        </h2>
        <p className="mt-2 text-base text-[#444440] dark:text-[#A8A69E]">
          Ferramentas, linguagens e metodologias utilizadas no ciclo analítico e de engenharia de dados.
        </p>

        {/* 2-Column Grid: group in bold, items in body font separated by comma */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
          {skillsData.map((skill, idx) => (
            <div
              key={idx}
              className="space-y-2 border-t border-[#E5E3DD] dark:border-[#282826] pt-4"
            >
              <h3 className="text-[15px] sm:text-base font-sans font-semibold text-[#1C1C1A] dark:text-[#EAE8E3]">
                {skill.category}
              </h3>
              <p className="text-[14px] sm:text-[15px] leading-relaxed font-sans text-[#444440] dark:text-[#A8A69E]">
                {skill.items}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
