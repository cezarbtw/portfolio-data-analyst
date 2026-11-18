import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Header() {
  return (
    <header className="border-b border-[#E5E3DD] dark:border-[#282826] bg-[#FAF9F6]/90 dark:bg-[#141413]/90 backdrop-blur-sm sticky top-0 z-30 transition-colors">
      <div className="mx-auto max-w-[1040px] px-6 py-4 flex items-center justify-between">
        <a
          href="#top"
          className="text-base font-serif font-medium tracking-normal text-[#1C1C1A] dark:text-[#EAE8E3] hover:text-[#1F4E5F] dark:hover:text-[#6EA3B4] transition-colors"
        >
          {personalInfo.name}
        </a>

        <nav aria-label="Navegação principal">
          <ul className="flex items-center space-x-6 text-sm text-[#6B6B66] dark:text-[#96948E]">
            <li>
              <a
                href="#projetos"
                className="hover:text-[#1C1C1A] dark:hover:text-[#EAE8E3] transition-colors"
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#experiencia"
                className="hover:text-[#1C1C1A] dark:hover:text-[#EAE8E3] transition-colors"
              >
                Experiência
              </a>
            </li>
            <li>
              <a
                href="#competencias"
                className="hover:text-[#1C1C1A] dark:hover:text-[#EAE8E3] transition-colors"
              >
                Competências
              </a>
            </li>
            <li>
              <a
                href="#contato"
                className="hover:text-[#1C1C1A] dark:hover:text-[#EAE8E3] transition-colors"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
