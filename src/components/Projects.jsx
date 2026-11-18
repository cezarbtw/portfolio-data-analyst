import React, { useState, useEffect, useRef, useCallback } from 'react';
import { featuredProject, otherProjects } from '../data/portfolioData';
import {
  NerPipelineDiagram,
  TimeSeriesDiagram,
  YoloInspectionDiagram,
  RelationalSchemaDiagram,
} from './TechnicalDiagrams';
import ImageLightbox from './ImageLightbox';

/* ─── Preview cursor fixo ─────────────────────────────── */
function CursorPreview({ project, pos }) {
  if (!project || !pos) return null;

  const getVisual = (p) => {
    if (p.visualType === 'image' && p.image) {
      return (
        <img
          src={p.image.url}
          alt={p.title}
          className="w-full h-full object-cover"
          decoding="async"
        />
      );
    }
    if (p.visualType === 'diagram-ner') return <NerPipelineDiagram compact />;
    if (p.visualType === 'diagram-ts')  return <TimeSeriesDiagram compact />;
    if (p.visualType === 'diagram-yolo') return <YoloInspectionDiagram compact />;
    if (p.visualType === 'diagram-er')  return <RelationalSchemaDiagram compact />;
    return null;
  };

  const visual = getVisual(project);
  if (!visual) return null;

  return (
    <div
      className="project-cursor-preview visible"
      style={{
        left: pos.x,
        top: pos.y,
        width: 220,
        height: 140,
        overflow: 'hidden',
        border: '1px solid var(--rule)',
        background: 'var(--canvas)',
      }}
      aria-hidden="true"
    >
      {visual}
    </div>
  );
}

/* ─── Linha de projeto (Tier 2) ───────────────────────── */
function ProjectRow({ project, onToggle, isOpen, setLightboxImage, onMouseEnter, onMouseLeave }) {
  const getVisual = () => {
    if (project.visualType === 'image' && project.image) {
      return (
        <div
          className="relative group cursor-zoom-in"
          onClick={() => setLightboxImage({ url: project.image.url, title: project.title, caption: project.image.caption })}
        >
          <img
            src={project.image.url}
            alt={project.title}
            className="w-full h-auto object-cover"
            style={{ border: '1px solid var(--rule)' }}
            decoding="async"
          />
          {project.image.caption && (
            <p className="mt-1.5 text-[11px] font-mono text-[var(--muted)]">{project.image.caption}</p>
          )}
        </div>
      );
    }
    if (project.visualType === 'diagram-ner') return <NerPipelineDiagram />;
    if (project.visualType === 'diagram-ts')  return <TimeSeriesDiagram />;
    if (project.visualType === 'diagram-yolo') return <YoloInspectionDiagram />;
    if (project.visualType === 'diagram-er')  return <RelationalSchemaDiagram />;
    return null;
  };

  return (
    <article
      className="rule-x py-8 group"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Linha do projeto */}
      <div className="flex items-baseline gap-4 cursor-pointer" onClick={onToggle}>
        <span className="font-mono text-[13px] text-[var(--muted)] shrink-0 group-hover:text-[var(--strong)] transition-colors w-6">
          {project.number}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="text-display-md font-display text-[var(--ink)] group-hover:text-[var(--strong)] transition-colors leading-tight">
            {project.title}
          </h3>
          <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="font-mono text-[11px] text-[var(--muted)] uppercase tracking-wider">
              {project.context}
            </span>
            <span className="font-mono text-[11px] text-[var(--muted)]">
              {project.tools}
            </span>
          </div>
        </div>
        <span className="font-mono text-[11px] text-[var(--muted)] shrink-0 ml-auto group-hover:text-[var(--strong)] transition-colors">
          {isOpen ? '−' : '+'}
        </span>
      </div>

      {/* Conteúdo expandido */}
      {isOpen && (
        <div className="mt-6 ml-10 space-y-6">
          <p className="text-[16px] leading-[1.7] font-body text-[var(--ink)]">
            {project.summary}
          </p>

          {getVisual() && (
            <div className="mt-4">{getVisual()}</div>
          )}

          {/* Estudo de caso */}
          {project.caseStudy && (
            <div className="space-y-4 pl-4" style={{ borderLeft: '2px solid var(--strong)' }}>
              {[
                { label: 'Problema', text: project.caseStudy.problem },
                { label: 'Solução', text: project.caseStudy.solution },
                { label: 'Arquitetura', text: project.caseStudy.architecture },
                { label: 'Resultado', text: project.caseStudy.results },
              ].map(({ label, text }) => (
                <div key={label}>
                  <h5 className="font-mono text-[10px] uppercase tracking-widest text-[var(--strong)] mb-1">
                    {label}
                  </h5>
                  <p className="text-[15px] leading-[1.65] font-body text-[var(--ink)]">{text}</p>
                </div>
              ))}
            </div>
          )}

          {/* Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer"
                 className="link-underline font-body font-medium text-[var(--ink)] inline-flex items-center gap-1">
                Código no GitHub <span aria-hidden="true" className="text-[var(--muted)]">↗</span>
              </a>
            )}
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noreferrer"
                 className="link-underline font-body font-medium text-[var(--ink)] inline-flex items-center gap-1">
                {project.demoLabel || 'Ver projeto'} <span aria-hidden="true" className="text-[var(--muted)]">↗</span>
              </a>
            )}
          </div>
        </div>
      )}
    </article>
  );
}

/* ─── Componente principal ────────────────────────────── */
export default function Projects() {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [openProjects, setOpenProjects] = useState({});
  const [cursorPos, setCursorPos] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  const toggleProject = (id) =>
    setOpenProjects((prev) => ({ ...prev, [id]: !prev[id] }));

  // Cursor preview — só desktop
  const handleMouseMove = useCallback((e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  const currentScreen = featuredProject.screens[activeScreenIndex];

  return (
    <section
      id="projetos"
      className="rule-b"
      style={{ padding: '5rem 0' }}
    >
      <ImageLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
      <CursorPreview project={hoveredProject} pos={cursorPos} />

      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12">

        {/* Cabeçalho da seção */}
        <div className="flex items-baseline gap-4 mb-12 rule-b pb-6">
          <span className="font-mono text-[11px] text-[var(--muted)] uppercase tracking-widest">01</span>
          <h2 className="text-display-md font-display text-[var(--ink)]">Projetos</h2>
        </div>

        {/* ════════════════════════════════════════════════════
            TIER 1: TCM-GO — Projeto principal em destaque
            ════════════════════════════════════════════════════ */}
        <article className="rule-b pb-16 mb-16">
          {/* Número + contexto */}
          <div className="flex items-baseline gap-4 mb-4">
            <span className="font-mono text-[clamp(2.5rem,6vw,5rem)] font-medium leading-none text-[var(--strong)]">
              {featuredProject.number}
            </span>
            <span className="font-mono text-[11px] text-[var(--muted)] uppercase tracking-wider">
              {featuredProject.context}
            </span>
          </div>

          {/* Título display */}
          <h3 className="text-display-lg font-display text-[var(--ink)] leading-tight mb-6">
            {featuredProject.title}
          </h3>

          {/* Sumário */}
          <p className="text-[16px] leading-[1.7] font-body text-[var(--ink)] max-w-[65ch] mb-4">
            {featuredProject.summary}
          </p>
          <p className="font-mono text-[12px] text-[var(--muted)] mb-8">
            {featuredProject.tools}
          </p>

          {/* Tabs segmentadas (fonte do corpo, legíveis) */}
          <div
            role="tablist"
            aria-label="Dimensões do painel Power BI"
            className="flex flex-wrap gap-1.5 mb-5"
          >
            {featuredProject.screens.map((screen, idx) => {
              const isActive = activeScreenIndex === idx;
              return (
                <button
                  key={screen.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveScreenIndex(idx)}
                  className="font-body text-[13px] px-3 py-1.5 transition-all"
                  style={{
                    border: '1px solid var(--rule)',
                    background: isActive ? 'var(--strong)' : 'transparent',
                    color: isActive ? '#fff' : 'var(--muted)',
                    fontWeight: isActive ? '500' : '400',
                  }}
                >
                  {screen.tab}
                </button>
              );
            })}
          </div>

          {/* Pergunta analítica */}
          <div
            className="mb-4 p-4 font-body text-[15px] text-[var(--ink)] leading-relaxed"
            style={{ borderLeft: '2px solid var(--strong)', background: 'rgba(217,65,30,0.04)' }}
          >
            <span className="font-mono text-[10px] text-[var(--strong)] uppercase tracking-widest block mb-1">
              Pergunta analítica respondida
            </span>
            {currentScreen.question}
          </div>

          {/* Imagem em largura total */}
          <div
            className="relative group cursor-zoom-in"
            style={{ border: '1px solid var(--rule)' }}
            onClick={() => setLightboxImage({ url: currentScreen.url, title: currentScreen.title, indicators: currentScreen.indicators })}
          >
            <img
              src={currentScreen.url}
              alt={`${featuredProject.title} – ${currentScreen.title}`}
              width={currentScreen.width}
              height={currentScreen.height}
              className="w-full h-auto object-contain block"
              decoding="sync"
            />
            <span className="absolute bottom-3 right-3 font-mono text-[11px] px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: 'var(--ink)', color: 'var(--canvas)' }}>
              Ampliar [↗]
            </span>
          </div>
          <p className="mt-2 font-mono text-[11px] text-[var(--muted)]">
            Indicadores: {currentScreen.indicators}
          </p>

          {/* Estudo de caso em acordeão */}
          {featuredProject.caseStudy && (
            <div className="mt-8">
              <button
                type="button"
                onClick={() => toggleProject(featuredProject.id)}
                className="font-body text-[14px] font-medium text-[var(--ink)] link-underline"
              >
                {openProjects[featuredProject.id] ? '− Recolher estudo de caso' : '+ Estudo de caso completo'}
              </button>
              {openProjects[featuredProject.id] && (
                <div className="mt-6 space-y-4 pl-4" style={{ borderLeft: '2px solid var(--strong)' }}>
                  {[
                    { label: 'Problema', text: featuredProject.caseStudy.problem },
                    { label: 'Solução', text: featuredProject.caseStudy.solution },
                    { label: 'Arquitetura', text: featuredProject.caseStudy.architecture },
                    { label: 'Resultado', text: featuredProject.caseStudy.results },
                  ].map(({ label, text }) => (
                    <div key={label}>
                      <h5 className="font-mono text-[10px] uppercase tracking-widest text-[var(--strong)] mb-1">
                        {label}
                      </h5>
                      <p className="text-[15px] leading-[1.65] font-body text-[var(--ink)]">{text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Link portal */}
          <div className="mt-6">
            <a
              href={featuredProject.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="link-underline font-body font-medium text-[var(--ink)] inline-flex items-center gap-1 text-sm"
            >
              {featuredProject.demoLabel}
              <span aria-hidden="true" className="text-[var(--muted)]">↗</span>
            </a>
          </div>
        </article>

        {/* ════════════════════════════════════════════════════
            TIER 2: Outros projetos — lista tipográfica
            ════════════════════════════════════════════════════ */}
        <div>
          {otherProjects.map((project) => (
            <ProjectRow
              key={project.id}
              project={project}
              isOpen={!!openProjects[project.id]}
              onToggle={() => toggleProject(project.id)}
              setLightboxImage={setLightboxImage}
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
