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

  // Onda de "acender" ao carregar (≤1,2s, uma vez) — respeita prefers-reduced-motion
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const municipios = goiasData.municipios;
    const total = municipios.length;
    const totalDuration = 1000; // 1s (≤1,2s)

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
    <div className="relative w-full max-w-[720px] mx-auto select-none overflow-hidden">
      {/* ─── Microelementos de Telemetria e Coordenadas Técnicas ─── */}
      <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-1.5 font-mono text-[10px] sm:text-[11px] text-[var(--muted)] mb-4 border-b border-[var(--line)] pb-2.5 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <span className="text-[var(--accent)] font-semibold">//</span>
          <span className="tracking-wider uppercase">db.goias.municipalities</span>
          <span className="text-[var(--line)]">·</span>
          <span className="text-[var(--ink)] font-medium">UF: 52</span>
        </div>
        <div className="tracking-wider text-[10px] sm:text-[11px] text-[var(--muted)]">
          15°55′S 50°08′W · 246 MUNICÍPIOS
        </div>
      </div>

      {/* ─── SVG da Malha de Goiás flutuando diretamente sobre o ruído de fundo ─── */}
      <div className="relative flex justify-center py-2">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${goiasData.width} ${goiasData.height}`}
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-auto max-h-[520px] text-[var(--ink)] drop-shadow-none"
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

        {/* Rótulo Desktop no hover posicionado flutuante */}
        {!isMobile && activeMunicipality && activeMunicipality.x !== undefined && (
          <div
            className="absolute pointer-events-none font-mono text-[11px] uppercase tracking-[0.08em] font-semibold text-[var(--ink)] bg-[var(--surface)] border border-[var(--line)] px-2.5 py-1 whitespace-nowrap z-20 rounded-card shadow-none"
            style={{
              left: activeMunicipality.x,
              top: activeMunicipality.y,
              transform: 'translate(-50%, -100%)',
            }}
            aria-hidden="true"
          >
            <span className="text-[var(--accent)] mr-1.5">●</span>
            {activeMunicipality.name}
          </div>
        )}
      </div>

      {/* ─── Rodapé Técnico com Status de Interação ─── */}
      <div className="mt-4 pt-2.5 border-t border-[var(--line)] flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[10px] sm:text-[11px] text-[var(--muted)] text-center sm:text-left">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]" />
          </span>
          {activeMunicipality?.name ? (
            <span className="text-[var(--accent)] font-semibold uppercase tracking-wider">
              MUNICÍPIO: {activeMunicipality.name}
            </span>
          ) : (
            <span className="tracking-wider">HOVER OU TOQUE PARA AUDITAR</span>
          )}
        </div>
        <div className="text-[9px] sm:text-[10px] tracking-wider uppercase text-[var(--muted)]">
          MALHA VETORIAL IBGE // ILUSTRAÇÃO CONCEITUAL
        </div>
      </div>
    </div>
  );
}
