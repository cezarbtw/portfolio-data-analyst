import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="border-t border-[#E5E3DD] dark:border-[#282826] py-10 bg-[#FAF9F6] dark:bg-[#141413] text-xs font-mono text-[#444440] dark:text-[#A8A69E] transition-colors">
      <div className="mx-auto max-w-[760px] px-5 sm:px-6 flex flex-col sm:flex-row items-baseline justify-between gap-2">
        <p>© {new Date().getFullYear()} {personalInfo.name}. Todos os direitos reservados.</p>
        <p className="text-[11px] text-[#999790] dark:text-[#666560]">
          Goiás, Brasil · Analista de Dados & BI
        </p>
      </div>
    </footer>
  );
}
