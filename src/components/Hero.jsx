import React from 'react';
import { personalInfo, bioData } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="top" className="pt-16 pb-12 sm:pt-24 sm:pb-16 border-b border-[#E5E3DD] dark:border-[#282826]">
      <div className="mx-auto max-w-[720px] px-6">
        <h1 className="text-3xl sm:text-4xl md:text-[44px] font-serif font-medium tracking-normal text-[#1C1C1A] dark:text-[#EAE8E3] leading-[1.2]">
          {personalInfo.name}
        </h1>

        <p className="mt-2 text-base font-mono text-[#6B6B66] dark:text-[#96948E]">
          {personalInfo.role} · Goiás, Brasil
        </p>

        <div className="mt-8 space-y-4 text-[17px] leading-[1.65] text-[#1C1C1A] dark:text-[#EAE8E3]">
          {bioData.intro.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-[#E5E3DD] dark:border-[#282826] flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-[#1F4E5F] dark:text-[#6EA3B4] hover:underline underline-offset-4 font-medium"
          >
            {personalInfo.email}
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-[#1F4E5F] dark:text-[#6EA3B4] hover:underline underline-offset-4 font-medium inline-flex items-center gap-1"
          >
            <span>LinkedIn</span>
            <span aria-hidden="true">↗</span>
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="text-[#1F4E5F] dark:text-[#6EA3B4] hover:underline underline-offset-4 font-medium inline-flex items-center gap-1"
          >
            <span>GitHub</span>
            <span aria-hidden="true">↗</span>
          </a>

          <a
            href={personalInfo.powerBiReportUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[#1F4E5F] dark:text-[#6EA3B4] hover:underline underline-offset-4 font-medium inline-flex items-center gap-1"
            title="Relatório no Power BI Service (requer autenticação institucional Microsoft)"
          >
            <span>Power BI Service</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
