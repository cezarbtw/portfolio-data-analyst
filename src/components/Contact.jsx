import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  return (
    <section
      id="contato"
      className="py-16 sm:py-24 bg-[#FAF9F6] dark:bg-[#141413] transition-colors"
    >
      <div className="mx-auto max-w-[760px] px-5 sm:px-6">
        <p className="text-xs font-mono uppercase tracking-wider text-[#1F4E5F] dark:text-[#6EA3B4] font-medium">
          Comunicação Direta
        </p>
        <h2 className="mt-1 text-2xl sm:text-3xl font-serif font-medium text-[#1C1C1A] dark:text-[#EAE8E3]">
          Contato
        </h2>
        <p className="mt-2 text-base text-[#444440] dark:text-[#A8A69E]">
          Disponível para oportunidades profissionais em Análise de Dados, Business Intelligence e Engenharia Analítica.
        </p>

        <div className="mt-10 space-y-4 text-[15px] sm:text-[16px]">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
            <span className="text-[#444440] dark:text-[#A8A69E] w-28 shrink-0 font-mono text-xs uppercase">
              E-mail
            </span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="editorial-link text-[#1F4E5F] dark:text-[#6EA3B4] font-medium"
            >
              {personalInfo.email}
            </a>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
            <span className="text-[#444440] dark:text-[#A8A69E] w-28 shrink-0 font-mono text-xs uppercase">
              Telefone
            </span>
            <a
              href={`tel:+5562982801501`}
              className="editorial-link text-[#1F4E5F] dark:text-[#6EA3B4] font-medium"
            >
              {personalInfo.phone}
            </a>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
            <span className="text-[#444440] dark:text-[#A8A69E] w-28 shrink-0 font-mono text-xs uppercase">
              WhatsApp
            </span>
            <a
              href={`https://wa.me/${personalInfo.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="editorial-link external-link text-[#1F4E5F] dark:text-[#6EA3B4] font-medium inline-flex items-center gap-1"
            >
              <span>Conversar via WhatsApp</span>
              <span className="arrow-icon" aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
            <span className="text-[#444440] dark:text-[#A8A69E] w-28 shrink-0 font-mono text-xs uppercase">
              LinkedIn
            </span>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="editorial-link external-link text-[#1F4E5F] dark:text-[#6EA3B4] font-medium inline-flex items-center gap-1"
            >
              <span>linkedin.com/in/cezarinaciol</span>
              <span className="arrow-icon" aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
            <span className="text-[#444440] dark:text-[#A8A69E] w-28 shrink-0 font-mono text-xs uppercase">
              GitHub
            </span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="editorial-link external-link text-[#1F4E5F] dark:text-[#6EA3B4] font-medium inline-flex items-center gap-1"
            >
              <span>github.com/{personalInfo.githubUsername}</span>
              <span className="arrow-icon" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
