import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contato" className="py-16 sm:py-20">
      <div className="mx-auto max-w-[720px] px-6">
        <h2 className="text-2xl sm:text-3xl font-serif font-medium text-[#1C1C1A] dark:text-[#EAE8E3]">
          Contato
        </h2>
        <p className="mt-2 text-base text-[#6B6B66] dark:text-[#96948E]">
          Disponível para atuação profissional em análise de dados, Business Intelligence e engenharia de analytics.
        </p>

        <div className="mt-8 space-y-3 text-[16px]">
          <p>
            <span className="text-[#6B6B66] dark:text-[#96948E] w-24 inline-block font-mono text-xs uppercase">
              E-mail
            </span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-[#1F4E5F] dark:text-[#6EA3B4] hover:underline underline-offset-4 font-medium"
            >
              {personalInfo.email}
            </a>
          </p>

          <p>
            <span className="text-[#6B6B66] dark:text-[#96948E] w-24 inline-block font-mono text-xs uppercase">
              Telefone
            </span>
            <a
              href={`tel:+5562982801501`}
              className="text-[#1F4E5F] dark:text-[#6EA3B4] hover:underline underline-offset-4 font-medium"
            >
              {personalInfo.phone}
            </a>
          </p>

          <p>
            <span className="text-[#6B6B66] dark:text-[#96948E] w-24 inline-block font-mono text-xs uppercase">
              WhatsApp
            </span>
            <a
              href={`https://wa.me/${personalInfo.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="text-[#1F4E5F] dark:text-[#6EA3B4] hover:underline underline-offset-4 font-medium inline-flex items-center gap-1"
            >
              <span>Iniciar conversa no WhatsApp</span>
              <span aria-hidden="true">↗</span>
            </a>
          </p>

          <p>
            <span className="text-[#6B6B66] dark:text-[#96948E] w-24 inline-block font-mono text-xs uppercase">
              LinkedIn
            </span>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-[#1F4E5F] dark:text-[#6EA3B4] hover:underline underline-offset-4 font-medium inline-flex items-center gap-1"
            >
              <span>linkedin.com/in/cezarinaciol</span>
              <span aria-hidden="true">↗</span>
            </a>
          </p>

          <p>
            <span className="text-[#6B6B66] dark:text-[#96948E] w-24 inline-block font-mono text-xs uppercase">
              GitHub
            </span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="text-[#1F4E5F] dark:text-[#6EA3B4] hover:underline underline-offset-4 font-medium inline-flex items-center gap-1"
            >
              <span>github.com/{personalInfo.githubUsername}</span>
              <span aria-hidden="true">↗</span>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
