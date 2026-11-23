import React from 'react';
import GoiasMap from './GoiasMap';
import PixelIcon from './PixelIcon';

export default function Hero() {
  const stackEvolution = [
    {
      year: '2023',
      title: 'Séries Temporais & Modelagem Relacional',
      tech: 'Python · SQL · MySQL · DAX',
      description:
        'Desenvolvimento de relatórios executivos com modelagem dimensional (Star Schema) no Power BI, análise estatística de séries temporais em Python e estruturação de bancos relacionais em SQL.',
    },
    {
      year: '2024',
      title: 'Escala Pública nos 246 Municípios (ETL & Power BI)',
      tech: 'Python · Pandas · Power BI · API NER',
      description:
        'Construção de esteiras ETL em Python para o Portal do Cidadão do TCM-GO, saneamento de indicadores de meio ambiente dos 246 municípios e rotinas de validação de API com consultas SQL.',
    },
  ];

  return (
    <section id="sobre" className="pt-2 sm:pt-4">
      {/* ─── 1ª DOBRA: IDENTIDADE TIPOGRÁFICA CENTRALIZADA ─── */}
      <div className="flex flex-col items-center text-center">
        {/* Microelemento de Terminal / Telemetria no topo */}
        <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 px-3 py-1 bg-[var(--surface)] border border-[var(--line)] rounded-card font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[var(--muted)] mb-5 text-center">
          <span className="text-[var(--accent)] font-semibold">$</span>
          <span>pipeline.gov.br.tcmgo</span>
          <span className="text-[var(--line)] hidden sm:inline">·</span>
          <span className="text-[var(--accent)] flex items-center gap-1.5 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] inline-block" />
            AUDIT_ACTIVE
          </span>
        </div>

        {/* 1. Nome Gigante em Chakra Petch com entrelinha aberta e respiro */}
        <h1 className="font-display font-bold text-[clamp(2.5rem,7.5vw,6.5rem)] tracking-tight leading-[1.1] text-[var(--ink)] max-w-[18ch] mx-auto break-words">
          <span className="hero-mask-line revealed block">Abraão Leopoldino</span>
        </h1>

        {/* 2. Subtítulo em Mono bem espaçado da frase e do nome */}
        <p className="mt-6 sm:mt-7 font-mono text-[12px] sm:text-[13px] uppercase tracking-[0.1em] text-[var(--accent)] font-semibold">
          Analista de Dados · Business Intelligence · Goiás
        </p>

        {/* 3. Frase Curta (~60ch) com entrelinha arejada e confortável */}
        <p className="mt-5 sm:mt-6 font-body text-[15px] sm:text-[17px] leading-[1.8] text-[var(--ink)] max-w-[58ch] mx-auto">
          Atuo na construção de esteiras ETL em Python, modelagem dimensional e relatórios analíticos no Power BI para o Portal do Cidadão no TCM-GO, consolidando indicadores dos 246 municípios goianos.
        </p>

        {/* 4. Links em Linha Centralizados com Espaçamento Generoso */}
        <div className="mt-7 sm:mt-9 flex flex-wrap items-center justify-center gap-6 sm:gap-9 font-mono text-[12px] sm:text-[13px] uppercase tracking-wider">
          <a
            href="mailto:abraaocezarIL@outlook.com"
            className="link-underline text-[var(--ink)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-2"
          >
            <PixelIcon name="mail" size={15} className="text-[var(--accent)]" />
            <span>E-mail</span>
          </a>

          <a
            href="https://www.linkedin.com/in/cezarinaciol/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-[var(--ink)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-2"
          >
            <PixelIcon name="linkedin" size={15} className="text-[var(--accent)]" />
            <span>LinkedIn</span>
            <span className="arrow-ext text-[var(--muted)]">↗</span>
          </a>

          <a
            href="https://github.com/cezarbtw"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-[var(--ink)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-2"
          >
            <PixelIcon name="github" size={15} className="text-[var(--accent)]" />
            <span>GitHub</span>
            <span className="arrow-ext text-[var(--muted)]">↗</span>
          </a>

          <a
            href="#projetos"
            className="link-underline text-[var(--ink)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-2"
          >
            <PixelIcon name="chart" size={15} className="text-[var(--accent)]" />
            <span>Power BI</span>
            <span className="text-[var(--muted)]">↓</span>
          </a>
        </div>
      </div>

      {/* ─── 5. O MAPA CENTRALIZADO GRANDE (Topo visível na 1ª dobra < 720px chamando o scroll) ─── */}
      <div className="mt-14 sm:mt-20 mb-20 sm:mb-28">
        <GoiasMap />
      </div>

      {/* ─── 6. LINHA DO TEMPO PÓS-MAPA: EVOLUÇÃO DE STACK & PROJETOS (max 640px) ─── */}
      <div id="timeline" className="max-w-[640px] w-full mx-auto">
        {/* Cabeçalho da Seção Timeline */}
        <div className="mb-8 text-left">
          <div className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-wider text-[var(--accent)] mb-2">
            <PixelIcon name="clock" size={14} />
            <span>Evolução Técnica</span>
          </div>
          <h2 className="font-display font-bold text-[22px] sm:text-[26px] text-[var(--ink)] leading-[1.25]">
            Trajetória de Projetos
          </h2>
        </div>

        {/* Itens Cronológicos de Stack & Projetos */}
        <div className="space-y-5">
          {stackEvolution.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-card bg-[var(--surface)] border border-[var(--line)] hover:border-[var(--accent)] transition-colors text-left"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-3">
                <span className="font-mono text-[13px] font-bold text-[var(--accent)] tracking-wider">
                  {item.year}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--muted)]">
                  {item.tech}
                </span>
              </div>
              <h3 className="font-body font-semibold text-[16px] text-[var(--ink)] mb-2.5 leading-[1.35]">
                {item.title}
              </h3>
              <p className="font-body text-[14px] sm:text-[15px] leading-[1.75] text-[var(--muted)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
