import React from 'react';
import { experiencesData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section
      id="experiencia"
      className="py-16 sm:py-24 border-b border-[#E5E3DD] dark:border-[#282826] bg-[#FAF9F6] dark:bg-[#141413] transition-colors"
    >
      <div className="mx-auto max-w-[760px] px-5 sm:px-6">
        <p className="text-xs font-mono uppercase tracking-wider text-[#1F4E5F] dark:text-[#6EA3B4] font-medium">
          Trajetória
        </p>
        <h2 className="mt-1 text-2xl sm:text-3xl font-serif font-medium text-[#1C1C1A] dark:text-[#EAE8E3]">
          Experiência Profissional
        </h2>
        <p className="mt-2 text-base text-[#444440] dark:text-[#A8A69E]">
          Atuação prática em engenharia analítica, esteiras ETL, reconciliação de dados orçamentários e inteligência de negócios.
        </p>

        {/* Two-column layout: period in mono at left, details at right */}
        <div className="mt-12 space-y-12">
          {experiencesData.map((exp, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 pt-8 first:pt-0 border-t first:border-t-0 border-[#E5E3DD] dark:border-[#282826]"
            >
              {/* Left Column: Period (Mono) */}
              <div className="md:col-span-4">
                <span className="text-xs sm:text-[13px] font-mono text-[#1F4E5F] dark:text-[#6EA3B4] font-medium block">
                  {exp.period}
                </span>
                <span className="text-xs font-mono text-[#444440] dark:text-[#A8A69E] block mt-0.5">
                  {exp.organization}
                </span>
              </div>

              {/* Right Column: Role & Deliverables */}
              <div className="md:col-span-8 space-y-3">
                <h3 className="text-lg sm:text-[19px] font-sans font-semibold text-[#1C1C1A] dark:text-[#EAE8E3] leading-snug">
                  {exp.role}
                </h3>

                <ul className="space-y-2.5 text-[15px] sm:text-[16px] leading-[1.65] text-[#1C1C1A] dark:text-[#EAE8E3] list-disc list-outside pl-4">
                  {exp.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="pl-1">
                      {item}
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
