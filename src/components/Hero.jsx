import React, { useEffect, useRef, useState } from 'react';
import { personalInfo, heroData } from '../data/portfolioData';
import GoiasMap from './GoiasMap';

function useCountUp(target, duration = 1200, started = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { setCount(target); return; }
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const pct = Math.min((ts - start) / duration, 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - pct, 3);
      setCount(Math.round(eased * target));
      if (pct < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);
  return count;
}

export default function Hero() {
  const factsRef = useRef(null);
  const [factsVisible, setFactsVisible] = useState(false);
  const [linesRevealed, setLinesRevealed] = useState(false);
  const count246 = useCountUp(246, 1200, factsVisible);

  // Revelar linhas do hero
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { setLinesRevealed(true); return; }
    const timer = setTimeout(() => {
      setLinesRevealed(true);
    }, 80);
    return () => clearTimeout(timer);
  }, []);

  // IntersectionObserver para contagem dos fatos
  useEffect(() => {
    const el = factsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setFactsVisible(true); obs.disconnect(); } },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Stagger de linhas
  const lineDelay = (i) => ({ transitionDelay: linesRevealed ? `${i * 80}ms` : '0ms' });

  return (
    <section
      id="top"
      className="rule-b"
      style={{ paddingTop: 'calc(var(--header-h) + 3rem)', paddingBottom: '4rem' }}
    >
      {/* Grade estrutural: linha horizontal superior */}
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12">

        {/* Layout assimétrico: 55% texto / 45% mapa */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-16">

          {/* Coluna esquerda: nome + cargo + intro + links */}
          <div className="flex-1 min-w-0">

            {/* Nome display — máscara linha a linha */}
            <h1 className="overflow-hidden" aria-label={heroData.headline}>
              <span
                className={`hero-line ${linesRevealed ? 'revealed' : ''}`}
                style={lineDelay(0)}
              >
                <span className="text-display-xl font-display text-[var(--ink)] block">
                  {/* Quebra em 2 linhas editorialmente */}
                  Abraão
                </span>
              </span>
              <span
                className={`hero-line ${linesRevealed ? 'revealed' : ''}`}
                style={lineDelay(1)}
              >
                <span className="text-display-xl font-display text-[var(--ink)] block">
                  Cezar
                </span>
              </span>
              <span
                className={`hero-line ${linesRevealed ? 'revealed' : ''}`}
                style={lineDelay(2)}
              >
                <span className="text-display-xl font-display text-[var(--ink)] block">
                  Inácio
                </span>
              </span>
            </h1>

            {/* Cargo em Hanken Grotesk */}
            <div
              className={`hero-line mt-4 ${linesRevealed ? 'revealed' : ''}`}
              style={lineDelay(3)}
            >
              <span className="font-body text-base font-medium text-[var(--muted)] block tracking-wide uppercase">
                {personalInfo.role}
              </span>
            </div>

            {/* Linha de grade após cargo */}
            <div className="rule-x mt-6 mb-6" />

            {/* Intro */}
            <div className="space-y-4 text-[16px] leading-[1.7] text-[var(--ink)] font-body">
              {heroData.intro.map((p, i) => (
                <p
                  key={i}
                  className={`hero-line ${linesRevealed ? 'revealed' : ''}`}
                  style={lineDelay(4 + i)}
                >
                  <span className="block">{p}</span>
                </p>
              ))}
            </div>

            {/* Links */}
            <div
              className={`hero-line mt-8 ${linesRevealed ? 'revealed' : ''}`}
              style={lineDelay(6)}
            >
              <span className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-body block">
                <a href={`mailto:${personalInfo.email}`} className="link-underline text-[var(--ink)] font-medium">
                  {personalInfo.email}
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer"
                   className="link-underline text-[var(--ink)] font-medium inline-flex items-center gap-1">
                  LinkedIn <span aria-hidden="true" className="text-[var(--muted)]">↗</span>
                </a>
                <a href={personalInfo.github} target="_blank" rel="noreferrer"
                   className="link-underline text-[var(--ink)] font-medium inline-flex items-center gap-1">
                  GitHub <span aria-hidden="true" className="text-[var(--muted)]">↗</span>
                </a>
                <a href="#projetos" className="link-underline text-[var(--ink)] font-medium inline-flex items-center gap-1">
                  Ver projetos <span aria-hidden="true">↓</span>
                </a>
              </span>
            </div>
          </div>

          {/* Coluna direita: mapa SVG */}
          <div
            className={`w-full lg:w-[42%] lg:pt-4 hero-line ${linesRevealed ? 'revealed' : ''}`}
            style={lineDelay(1)}
          >
            <GoiasMap />
          </div>
        </div>

        {/* Faixa de fatos com contagem */}
        <div ref={factsRef} className="mt-12 pt-8 rule-x">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
            {/* Fato 1: 246 com contagem */}
            <div className="sm:rule-r pr-0 sm:pr-8 pb-6 sm:pb-0">
              <div className="text-display-lg font-display text-[var(--strong)]" aria-label="246">
                {factsVisible ? count246 : 0}
              </div>
              <div className="mt-1 text-xs font-mono text-[var(--muted)] uppercase tracking-wider">
                Municípios de Goiás · TCM-GO
              </div>
            </div>

            {/* Fato 2: stack */}
            <div className="sm:rule-r px-0 sm:px-8 py-6 sm:py-0 rule-x sm:border-t-0">
              <div className="text-display-lg font-display text-[var(--ink)]">
                Power BI
              </div>
              <div className="mt-1 text-xs font-mono text-[var(--muted)] uppercase tracking-wider">
                Python · SQL · DAX · ETL
              </div>
            </div>

            {/* Fato 3: setor */}
            <div className="pl-0 sm:pl-8 pt-6 sm:pt-0 rule-x sm:border-t-0">
              <div className="text-display-lg font-display text-[var(--ink)]">
                Público
              </div>
              <div className="mt-1 text-xs font-mono text-[var(--muted)] uppercase tracking-wider">
                Controle externo · Transparência
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
