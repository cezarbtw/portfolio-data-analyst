import React from 'react';
import { experiencesData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experiencia" className="py-16 sm:py-20 border-b border-[#E5E3DD] dark:border-[#282826]">
      <div className="mx-auto max-w-[720px] px-6">
        <h2 className="text-2xl sm:text-3xl font-serif font-medium text-[#1C1C1A] dark:text-[#EAE8E3]">
          Experiência Profissional
        </h2>
        <p className="mt-2 text-base text-[#6B6B66] dark:text-[#96948E]">
          Atuação com engenharia de dados, saneamento de bases orçamentárias e elaboração de relatórios analíticos.
        </p>

        <div className="mt-10 space-y-12">
          {experiencesData.map((exp, idx) => (
            <div key={idx} className="space-y-3">
              <div>
                <span className="text-xs font-mono text-[#6B6B66] dark:text-[#96948E]">
                  {exp.period}
                </span>
                <h3 className="text-lg font-sans font-medium text-[#1C1C1A] dark:text-[#EAE8E3]">
                  {exp.role}
                </h3>
                <p className="text-sm text-[#6B6B66] dark:text-[#96948E]">
                  {exp.organization}
                </p>
              </div>

              <ul className="space-y-2 text-[16px] leading-[1.65] text-[#1C1C1A] dark:text-[#EAE8E3] list-disc list-outside pl-5">
                {exp.deliverables.map((item, dIdx) => (
                  <li key={dIdx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
