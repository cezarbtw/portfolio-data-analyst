import React, { useEffect, useState } from 'react';
import GoiasMap from './GoiasMap';

export default function Hero() {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setRevealed(true);
      return;
    }
    const timer = setTimeout(() => {
      setRevealed(true);
    }, 60);
    return () => clearTimeout(timer);
  }, []);

  const maskStyle = (delayMs) => ({
    transitionDelay: revealed ? `${delayMs}ms` : '0ms',
  });

  return (
    <section id="top" className="border-b border-[var(--line)] py-20 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Layout de 2 colunas: texto à esquerda (col 1-7) e mapa à direita (col 8-12) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Coluna de texto */}
          <div className="lg:col-span-7">
            {/* Nome gigante com revelação por máscara linha a linha (DESIGN.md) */}
            <h1 className="text-[clamp(3.5rem,11vw,9.5rem)] font-display leading-[0.95] tracking-[-0.02em] text-[var(--ink)]">
              <span className={`hero-mask-line ${revealed ? 'revealed' : ''}`} style={maskStyle(0)}>
                Abraão Cezar
              </span>
              <span className={`hero-mask-line ${revealed ? 'revealed' : ''}`} style={maskStyle(80)}>
                Inácio
              </span>
            </h1>

            {/* Subtítulo mono (DESIGN.md) */}
            <div className="mt-6">
              <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--muted)]">
                Analista de Dados · Business Intelligence · Goiás
              </p>
            </div>

            {/* Linha técnica divisora de 1px */}
            <div className="h-px w-full bg-[var(--line)] my-8" />

            {/* 2 frases do texto atual mantendo o conteúdo existente */}
            <div className="space-y-4 font-body text-[18px] leading-[1.6] text-[var(--ink)] max-w-prose">
              <p>
                Atuo na construção de pipelines ETL e relatórios no Power BI para o Portal do Cidadão no Tribunal de Contas dos Municípios de Goiás (TCM-GO), consolidando indicadores de saneamento e políticas públicas dos 246 municípios goianos.
              </p>
              <p>
                Desenvolvi rotinas automatizadas em Python para validação e auditoria da API de reconhecimento de entidades nomeadas (NER), reconciliando dados de extratos e documentos contábeis contra consultas SQL em bases orçamentárias.
              </p>
            </div>

            {/* Links em texto com sublinhado e seta externa */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 font-body text-[16px] sm:text-[18px]">
              <a
                href="mailto:abraaocezarIL@outlook.com"
                className="link-underline text-[var(--ink)] font-medium"
              >
                abraaocezarIL@outlook.com
              </a>
              <a
                href="https://www.linkedin.com/in/cezarinaciol/"
                target="_blank"
                rel="noreferrer"
                className="link-underline text-[var(--ink)] font-medium inline-flex items-center gap-1"
              >
                <span>LinkedIn</span>
                <span aria-hidden="true" className="arrow-ext text-[var(--muted)]">↗</span>
              </a>
              <a
                href="https://github.com/cezarbtw"
                target="_blank"
                rel="noreferrer"
                className="link-underline text-[var(--ink)] font-medium inline-flex items-center gap-1"
              >
                <span>GitHub</span>
                <span aria-hidden="true" className="arrow-ext text-[var(--muted)]">↗</span>
              </a>
              <a
                href="#projetos"
                className="link-underline text-[var(--ink)] font-medium inline-flex items-center gap-1"
              >
                <span>Ver projetos</span>
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          {/* Coluna do Mapa SVG (à direita no desktop, abaixo no mobile) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <GoiasMap />
          </div>
        </div>

        {/* 3 fatos em serifada grande, sem caixas, divididos por linhas de 1px (DESIGN.md) */}
        <div className="mt-16 lg:mt-24 pt-12 border-t border-[var(--line)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
            {/* Fato 1 */}
            <div className="md:pr-8 md:border-r md:border-[var(--line)]">
              <div className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none text-[var(--ink)]">
                246 municípios
              </div>
              <p className="mt-2 font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--muted)]">
                Cobertura estadual · TCM-GO
              </p>
            </div>

            {/* Fato 2 */}
            <div className="md:px-8 md:border-r md:border-[var(--line)] border-t md:border-t-0 pt-6 md:pt-0 border-[var(--line)]">
              <div className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none text-[var(--ink)]">
                Power BI · Python · SQL
              </div>
              <p className="mt-2 font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--muted)]">
                Stack analítica &amp; Engenharia ETL
              </p>
            </div>

            {/* Fato 3 */}
            <div className="md:pl-8 border-t md:border-t-0 pt-6 md:pt-0 border-[var(--line)]">
              <div className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none text-[var(--ink)]">
                Setor público
              </div>
              <p className="mt-2 font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--muted)]">
                Controle externo &amp; Auditoria
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
