import React from 'react';
import GoiasMap from './GoiasMap';
import PixelIcon from './PixelIcon';

export default function Hero() {
  return (
    <section id="sobre" className="pt-8 sm:pt-12 pb-8 sm:pb-14 border-b border-[var(--line)]">
      {/* ─── 1ª DOBRA: IDENTIDADE TIPOGRÁFICA CENTRALIZADA ─── */}
      <div className="flex flex-col items-center text-center">
        {/* 1. Nome em Chakra Petch com entrelinha aberta e respiro */}
        <h1 className="font-display font-bold text-[clamp(2.5rem,7.5vw,6rem)] tracking-tight leading-[1.08] text-[var(--ink)] max-w-[18ch] mx-auto break-words">
          Abraão Leopoldino
        </h1>

        {/* 2. Subtítulo em fonte do corpo com peso médio e cor coral */}
        <p className="mt-5 sm:mt-6 font-body font-medium text-[15px] sm:text-[17px] text-[var(--accent)] tracking-wide">
          Analista de Dados · Business Intelligence · Goiás
        </p>

        {/* 3. Frase Curta (~58ch) com entrelinha arejada e confortável */}
        <p className="mt-4 sm:mt-5 font-body text-[15px] sm:text-[17px] leading-[1.8] text-[var(--ink)] max-w-[58ch] mx-auto">
          Atuo na construção de esteiras ETL em Python, modelagem dimensional e relatórios analíticos no Power BI para o Portal do Cidadão no TCM-GO, consolidando indicadores dos 246 municípios goianos.
        </p>

        {/* 4. Links em Linha Centralizados com Ícones Vetoriais Padronizados */}
        <div className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-8 font-body font-medium text-[14px]">
          <a
            href="mailto:abraaocezarIL@outlook.com"
            className="link-underline text-[var(--ink)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-2"
          >
            <PixelIcon name="mail" size={16} className="text-[var(--accent)]" />
            <span>E-mail</span>
          </a>

          <a
            href="https://www.linkedin.com/in/cezarinaciol/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-[var(--ink)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-2"
          >
            <PixelIcon name="linkedin" size={16} className="text-[var(--accent)]" />
            <span>LinkedIn</span>
            <span className="arrow-ext text-[var(--muted)] text-[12px]">↗</span>
          </a>

          <a
            href="https://github.com/cezarbtw"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-[var(--ink)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-2"
          >
            <PixelIcon name="github" size={16} className="text-[var(--accent)]" />
            <span>GitHub</span>
            <span className="arrow-ext text-[var(--muted)] text-[12px]">↗</span>
          </a>

          <a
            href="#projetos"
            className="link-underline text-[var(--ink)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-2"
          >
            <PixelIcon name="chart" size={16} className="text-[var(--accent)]" />
            <span>Power BI</span>
            <span className="text-[var(--muted)] text-[12px]">↓</span>
          </a>
        </div>
      </div>

      {/* ─── 5. O MAPA CENTRALIZADO GRANDE (Protagonista) ─── */}
      <div className="mt-12 sm:mt-16">
        <GoiasMap />
      </div>

      {/* ─── 6. MINI LINHA DO TEMPO EM TEXTO SIMPLES (Sem cards duplicados) ─── */}
      <div className="mt-8 sm:mt-10 text-center font-body text-[13px] sm:text-[14px] text-[var(--muted)]">
        <span className="font-mono font-bold text-[var(--accent)]">2024</span> Atuação no TCM-GO (Portal do Cidadão)
        <span className="text-[var(--line)] mx-2.5">·</span>
        <span className="font-mono font-bold text-[var(--accent)]">2023</span> Projetos em Power BI & Modelagem
      </div>
    </section>
  );
}
