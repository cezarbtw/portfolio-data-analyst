import React, { useEffect, useRef, useState, useCallback } from 'react';
import { municipios, MAPA_WIDTH, MAPA_HEIGHT } from '../data/goiasMapPaths';

export default function GoiasMap() {
  const svgRef = useRef(null);
  const [hovered, setHovered] = useState(null); // { name, x, y }
  const [animated, setAnimated] = useState(false);

  // Animação de "acendimento" ao montar: municípios acendem em onda (≤1.2s)
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { setAnimated(true); return; }

    const shuffled = [...municipios].map((m) => m.id).sort(() => Math.random() - 0.5);
    const total = shuffled.length;
    const duration = 1200;

    shuffled.forEach((id, i) => {
      const delay = (i / total) * duration;
      setTimeout(() => {
        const el = svgRef.current?.querySelector(`[data-id="${id}"]`);
        if (!el) return;
        el.classList.add('aceso');
        setTimeout(() => el.classList.remove('aceso'), 300);
      }, delay);
    });

    setTimeout(() => setAnimated(true), duration + 400);
  }, []);

  const handleMouseEnter = useCallback((e, name) => {
    const svgEl = svgRef.current;
    if (!svgEl) return;
    const rect = svgEl.getBoundingClientRect();
    const pathRect = e.currentTarget.getBoundingClientRect();
    setHovered({
      name,
      x: pathRect.left - rect.left + pathRect.width / 2,
      y: pathRect.top - rect.top - 10,
    });
  }, []);

  const handleMouseLeave = useCallback(() => setHovered(null), []);

  return (
    <div className="relative w-full max-w-[420px] mx-auto lg:mx-0 select-none">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${MAPA_WIDTH} ${MAPA_HEIGHT}`}
        className="w-full h-auto"
        aria-label="Mapa de Goiás com 246 municípios"
        role="img"
      >
        <g>
          {municipios.map((m) => (
            <path
              key={m.id}
              data-id={m.id}
              d={m.d}
              className="mapa-municipio focus:fill-[var(--strong)] outline-none"
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

      {/* Tooltip mono com nome do município */}
      {hovered && (
        <div
          className="absolute pointer-events-none font-mono text-[11px] font-medium text-[var(--ink)] bg-[var(--canvas)] border border-[var(--rule)] px-2 py-0.5 whitespace-nowrap z-10 leading-tight"
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

      {/* Legenda */}
      <p className="mt-2 text-[11px] font-mono text-[var(--muted)] text-center">
        246 municípios · Goiás, Brasil
      </p>
    </div>
  );
}
