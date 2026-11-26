import React, { useEffect, useRef, useState, useCallback } from 'react';
import goiasData from '../assets/goias.svg.json';

export default function GoiasMap() {
  const svgRef = useRef(null);
  const [activeMunicipality, setActiveMunicipality] = useState(null); // { name, x, y }
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Onda de "acender" ao carregar (≤1s) — respeita prefers-reduced-motion
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const municipios = goiasData.municipios;
    const total = municipios.length;
    const totalDuration = 1000;

    municipios.forEach((m, idx) => {
      const delay = (idx / total) * totalDuration;
      setTimeout(() => {
        const el = svgRef.current?.querySelector(`[data-id="${m.id}"]`);
        if (!el) return;
        el.classList.add('mapa-aceso');
        setTimeout(() => el.classList.remove('mapa-aceso'), 200);
      }, delay);
    });
  }, []);

  const handleMouseEnter = useCallback((e, name) => {
    if (isMobile) return;
    const svgEl = svgRef.current;
    if (!svgEl) return;
    const rect = svgEl.getBoundingClientRect();
    const pathRect = e.currentTarget.getBoundingClientRect();
    setActiveMunicipality({
      name,
      x: pathRect.left - rect.left + pathRect.width / 2,
      y: Math.max(10, pathRect.top - rect.top - 8),
    });
  }, [isMobile]);

  const handleMouseLeave = useCallback(() => {
    if (!isMobile) setActiveMunicipality(null);
  }, [isMobile]);

  const handleTouch = useCallback((name) => {
    setActiveMunicipality({ name });
  }, []);

  return (
    <div
      className="relative w-full mx-auto select-none"
      style={{ maxWidth: 'min(760px, 92vw)' }}
    >
      {/* ─── Legenda discreta superior com coordenadas reais e contagem ─── */}
      <div className="flex items-center justify-between font-mono text-[11px] text-[var(--muted)] mb-3 pb-2 border-b border-[var(--line)]">
        <span className="tracking-wide">Goiás · Brasil</span>
        <span className="tracking-wide">15°55′S 50°08′W · 246 municípios</span>
      </div>

      {/* ─── SVG da Malha de Goiás ─── */}
      <div className="relative flex justify-center py-1">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${goiasData.width} ${goiasData.height}`}
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-auto max-h-[520px] text-[var(--ink)]"
          aria-label="Mapa de Goiás com 246 municípios"
          role="img"
        >
          <g>
            {goiasData.municipios.map((m) => (
              <path
                key={m.id}
                data-id={m.id}
                d={m.d}
                className="mapa-municipio focus:fill-[var(--accent)] outline-none"
                tabIndex={0}
                aria-label={m.name}
                onMouseEnter={(e) => handleMouseEnter(e, m.name)}
                onMouseLeave={handleMouseLeave}
                onFocus={(e) => handleMouseEnter(e, m.name)}
                onBlur={handleMouseLeave}
                onTouchStart={() => handleTouch(m.name)}
                onClick={() => handleTouch(m.name)}
              />
            ))}
          </g>
        </svg>

        {/* Rótulo Desktop no hover flutuante */}
        {!isMobile && activeMunicipality && activeMunicipality.x !== undefined && (
          <div
            className="absolute pointer-events-none font-body font-medium text-[12px] text-[var(--ink)] bg-[var(--surface)] border border-[var(--line)] px-2.5 py-1 whitespace-nowrap z-20 rounded-card shadow-sm"
            style={{
              left: activeMunicipality.x,
              top: activeMunicipality.y,
              transform: 'translate(-50%, -100%)',
            }}
            aria-hidden="true"
          >
            <span className="text-[var(--accent)] mr-1.5 font-bold">●</span>
            {activeMunicipality.name}
          </div>
        )}
      </div>

      {/* ─── Dica de Interação em Português Normal ─── */}
      <div className="mt-2 pt-2 border-t border-[var(--line)] flex flex-wrap items-center justify-between gap-2 font-body text-[13px] text-[var(--muted)]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--muted)] shrink-0 inline-block" />
          {activeMunicipality?.name ? (
            <span className="text-[var(--accent)] font-semibold">
              Município: {activeMunicipality.name}
            </span>
          ) : (
            <span>Passe o mouse para ver cada município</span>
          )}
        </div>
        <span className="font-mono text-[11px] text-[var(--muted)]">Malha IBGE</span>
      </div>
    </div>
  );
}
