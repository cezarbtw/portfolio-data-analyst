import React, { useEffect, useRef, useState, useCallback } from 'react';
import goiasData from '../assets/goias.svg.json';

export default function GoiasMap() {
  const svgRef = useRef(null);
  const [hovered, setHovered] = useState(null); // { name, x, y }

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
        setTimeout(() => el.classList.remove('mapa-aceso'), 240);
      }, delay);
    });
  }, []);

  const handleMouseEnter = useCallback((e, name) => {
    const svgEl = svgRef.current;
    if (!svgEl) return;
    const rect = svgEl.getBoundingClientRect();
    const pathRect = e.currentTarget.getBoundingClientRect();
    setHovered({
      name,
      x: pathRect.left - rect.left + pathRect.width / 2,
      y: Math.max(0, pathRect.top - rect.top - 8),
    });
  }, []);

  const handleMouseLeave = useCallback(() => setHovered(null), []);

  return (
    <div className="relative w-full max-w-[440px] select-none">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${goiasData.width} ${goiasData.height}`}
        className="w-full h-auto text-[var(--ink)]"
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
            />
          ))}
        </g>
      </svg>

      {/* Rótulo mono com o nome do município no hover */}
      {hovered && (
        <div
          className="absolute pointer-events-none font-mono text-[12px] uppercase tracking-[0.08em] font-medium text-[var(--ink)] bg-[var(--bg)] border border-[var(--line)] px-2.5 py-1 whitespace-nowrap z-20 leading-tight"
          style={{
            left: hovered.x,
            top: hovered.y,
            transform: 'translate(-50%, -100%)',
          }}
          aria-hidden="true"
        >
          {hovered.name}
        </div>
      )}

      {/* Legenda mono discreta */}
      <p className="mt-3 text-center font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--muted)]">
        {goiasData.total} municípios · Goiás, Brasil
      </p>
    </div>
  );
}
