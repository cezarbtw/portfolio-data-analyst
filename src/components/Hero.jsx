import React from 'react';
import GoiasMap from './GoiasMap';
import PixelIcon from './PixelIcon';

export default function Hero() {
  return (
    <section id="sobre" className="pt-8 sm:pt-12 pb-6 sm:pb-10 border-b border-[var(--line)]">
      {/* ─── 1ª DOBRA: IDENTIDADE TIPOGRÁFICA CENTRALIZADA ─── */}
      <div className="flex flex-col items-center text-center">
        {/* 1. Nome em Bricolage Grotesque */}
        <h1 className="font-display font-bold text-[clamp(2.5rem,7.2vw,5.75rem)] tracking-[-0.03em] leading-[1.03] text-[var(--ink)] max-w-[18ch] mx-auto break-words">
          Abraão Leopoldino
        </h1>

        {/* 2. Subtítulo em coral (único destaque colorido do cabeçalho hero) */}
        <p className="mt-5 sm:mt-6 font-body font-medium text-[15px] sm:text-[17px] text-[var(--accent)] tracking-wide">
          Analista de Dados · Business Intelligence · Goiás
        </p>

        {/* 3. Frase Curta (~58ch) */}
        <p className="mt-4 sm:mt-5 font-body text-[15px] sm:text-[17px] leading-[1.8] text-[var(--ink)] max-w-[58ch] mx-auto">
          Atuo na construção de esteiras ETL em Python, modelagem dimensional e relatórios analíticos no Power BI para o Portal do Cidadão no TCM-GO, consolidando indicadores dos 246 municípios goianos.
        </p>

        {/* 4. Links em Linha Centralizados com Ícones na Cor do Texto (coral só no hover) */}
        <div className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-8 font-body font-medium text-[14px]">
          <a
            href="mailto:abraaocezarIL@outlook.com"
            className="link-underline text-[var(--ink)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-2 group"
          >
            <PixelIcon name="mail" size={16} className="text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors" />
            <span>E-mail</span>
          </a>

          <a
            href="https://www.linkedin.com/in/cezarinaciol/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-[var(--ink)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-2 group"
          >
            <PixelIcon name="linkedin" size={16} className="text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors" />
            <span>LinkedIn</span>
            <span className="arrow-ext text-[var(--muted)] text-[12px]">↗</span>
          </a>

          <a
            href="https://github.com/cezarbtw"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-[var(--ink)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-2 group"
          >
            <PixelIcon name="github" size={16} className="text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors" />
            <span>GitHub</span>
            <span className="arrow-ext text-[var(--muted)] text-[12px]">↗</span>
          </a>

          <a
            href="#projetos"
            className="link-underline text-[var(--ink)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-2 group"
          >
            <PixelIcon name="chart" size={16} className="text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors" />
            <span>Power BI</span>
            <span className="text-[var(--muted)] text-[12px]">↓</span>
          </a>
        </div>
      </div>

      {/* ─── 5. O MAPA CENTRALIZADO GRANDE (Protagonista com contraste corrigido) ─── */}
      <div className="mt-10 sm:mt-12">
        <GoiasMap />
      </div>

      {/* ─── 6. MINI LINHA DO TEMPO EM TEXTO SIMPLES (Sem cards duplicados e sem coral no ano) ─── */}
      <div className="mt-6 sm:mt-8 text-center font-body text-[13px] sm:text-[14px] text-[var(--muted)]">
        <span className="font-mono text-[var(--muted)] font-medium">2024</span> Atuação no TCM-GO (Portal do Cidadão)
        <span className="text-[var(--line)] mx-2.5">·</span>
        <span className="font-mono text-[var(--muted)] font-medium">2023</span> Projetos em Power BI & Modelagem
      </div>
    </section>
  );
}
