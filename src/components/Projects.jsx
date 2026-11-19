import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

/* ─── Preview flutuante que acompanha o cursor (Desktop) ─── */
function CursorImagePreview({ project, pos }) {
  if (!project || !pos) return null;

  const previewWidth = 280;
  const previewHeight = 175;
  const isNearRightEdge = typeof window !== 'undefined' && pos.x + previewWidth + 40 > window.innerWidth;
  const x = isNearRightEdge ? pos.x - previewWidth - 24 : pos.x + 24;
  const y = Math.max(
    72,
    Math.min(pos.y - previewHeight / 2, (typeof window !== 'undefined' ? window.innerHeight : 800) - previewHeight - 24)
  );

  return (
    <div
      className="hidden lg:block fixed pointer-events-none z-50 overflow-hidden border border-[var(--line)] bg-[var(--bg)] transition-opacity duration-150"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        width: `${previewWidth}px`,
        height: `${previewHeight}px`,
      }}
      aria-hidden="true"
    >
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover block"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-[var(--bg)] p-4 text-center">
          <span className="font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--accent)] font-semibold">
            [IMAGEM]
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--muted)] mt-1">
            Diagrama técnico em preparação
          </span>
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [cursorPos, setCursorPos] = useState(null);

  const handleMouseMove = useCallback((e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <section id="projetos" className="py-20 lg:py-32 border-b border-[var(--line)]">
      {/* Preview flutuante no desktop */}
      <CursorImagePreview project={hoveredProject} pos={cursorPos} />

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Coluna 1-4: Título da seção (sticky em ≥1024px conforme DESIGN.md) */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-[88px]">
              <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--muted)] mb-3">
                <span className="text-[var(--accent)]">01 /</span> Projetos
              </p>
              <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1] text-[var(--ink)]">
                Projetos Selecionados
              </h2>
              <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--muted)]">
                Power BI · Pipelines ETL · Auditoria SQL
              </p>
            </div>
          </div>

          {/* Colunas 5-12: Lista de projetos (cada projeto é uma linha técnica) */}
          <div className="lg:col-span-8 border-t border-[var(--line)]">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/projetos/${project.slug}`}
                viewTransition
                onMouseEnter={() => setHoveredProject(project)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group block py-6 sm:py-8 border-b border-[var(--line)] px-3 sm:px-4 -mx-3 sm:-mx-4 transition-colors duration-150 hover:bg-[var(--accent)]"
              >
                {/* Linha principal: Número + Título */}
                <div className="flex items-baseline gap-4 sm:gap-6">
                  {/* Número mono */}
                  <span className="font-mono text-[14px] sm:text-[16px] text-[var(--muted)] group-hover:text-[var(--bg)] transition-colors duration-150 shrink-0 w-8">
                    {project.number}
                  </span>

                  {/* Título: TCM-GO maior que os demais conforme DESIGN.md */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className={`font-display text-[var(--ink)] group-hover:text-[var(--bg)] transition-colors duration-150 leading-[1.08] ${
                        project.isFeatured
                          ? 'text-[clamp(2rem,4vw,3.25rem)]'
                          : 'text-[clamp(1.6rem,3vw,2.5rem)]'
                      }`}
                    >
                      {project.title}
                    </h3>

                    {/* Metadados: Ano e ferramentas em mono */}
                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--muted)] group-hover:text-[var(--bg)] transition-colors duration-150">
                      <span>{project.year}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.tools}</span>
                    </div>

                    {/* Mobile: imagem abaixo do título dentro da própria linha (DESIGN.md) */}
                    <div className="mt-4 block lg:hidden">
                      {project.image ? (
                        <div className="border border-[var(--line)] bg-[var(--bg)] overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-auto object-cover max-h-[220px] block"
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <div className="border border-[var(--line)] bg-[var(--bg)] p-4 text-center">
                          <span className="font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--accent)] font-semibold block">
                            [IMAGEM]
                          </span>
                          <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--muted)] block mt-0.5">
                            Diagrama técnico
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Seta discreta em mono à direita */}
                  <span
                    aria-hidden="true"
                    className="font-mono text-[14px] text-[var(--muted)] group-hover:text-[var(--bg)] group-hover:translate-x-1 transition-all duration-150 shrink-0 ml-2"
                  >
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
