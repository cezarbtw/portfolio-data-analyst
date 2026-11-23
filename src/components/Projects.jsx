import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import PixelIcon from './PixelIcon';

export default function Projects() {
  return (
    <section id="projetos" className="py-16 sm:py-24 border-b border-[var(--line)]">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
          {/* ─── Coluna 1-4: Título da Seção (Sticky Desktop) ─── */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-[88px] space-y-4">
              <div className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.1em] text-[var(--accent)] font-semibold">
                <PixelIcon name="folder" size={14} />
                <span>01 // Projetos</span>
              </div>
              <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.25rem)] leading-[1.18] text-[var(--ink)]">
                Projetos de Dados
              </h2>
              <p className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.08em] text-[var(--muted)]">
                Power BI · Pipelines ETL · Auditoria SQL
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-card bg-[var(--surface)] border border-[var(--line)] font-mono text-[11px] uppercase tracking-wider text-[var(--muted)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] inline-block" />
                  6 Projetos Catalogados
                </span>
              </div>
              <p className="font-body text-[14px] leading-[1.7] text-[var(--muted)] pt-2 hidden lg:block max-w-[32ch]">
                Casos práticos de saneamento de dados orçamentários, modelagem dimensional e esteiras analíticas.
              </p>
            </div>
          </div>

          {/* ─── Colunas 5-12: Cards com Borda Fina de 1px (Inspirado em tania.dev / Ref A) ─── */}
          <div className="lg:col-span-8 space-y-6">
            {projects.map((project) => {
              const toolsList = project.tools.split('·').map((t) => t.trim());
              return (
                <article
                  key={project.id}
                  className="rounded-card border border-[var(--line)] bg-[var(--surface)] hover:border-[var(--accent)] transition-all p-6 sm:p-7 flex flex-col justify-between group"
                >
                  {/* Linha superior: Metadados técnicos */}
                  <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--muted)] mb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="text-[var(--accent)] font-bold">{project.number}</span>
                      <span aria-hidden="true" className="text-[var(--line)]">/</span>
                      <span className="text-[var(--ink)] font-medium">{project.year}</span>
                    </div>
                    <span className="text-[11px] tracking-wider text-[var(--muted)] bg-[var(--surface-hover)] px-2 py-0.5 rounded-card border border-[var(--line)]">
                      {project.context.split('·')[0].trim()}
                    </span>
                  </div>

                  {/* Título do Projeto */}
                  <h3 className="font-display font-bold text-[clamp(1.25rem,2.2vw,1.65rem)] text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors leading-[1.25] mb-3">
                    <Link to={`/projetos/${project.slug}`} className="hover:underline focus-visible:outline-none">
                      {project.title}
                    </Link>
                  </h3>

                  {/* Resumo Técnico */}
                  <p className="font-body text-[14px] sm:text-[15px] leading-[1.75] text-[var(--muted)] mb-5">
                    {project.summary}
                  </p>

                  {/* Preview de Dashboard (quando disponível) */}
                  {project.image && (
                    <div className="mb-5 rounded-card overflow-hidden border border-[var(--line)] bg-[var(--bg)]">
                      <Link to={`/projetos/${project.slug}`}>
                        <img
                          src={project.image}
                          alt={project.imageCaption || project.title}
                          className="w-full h-auto max-h-[260px] object-cover block opacity-90 group-hover:opacity-100 transition-opacity"
                          loading="lazy"
                        />
                      </Link>
                      {project.imageCaption && (
                        <div className="px-3 py-2 bg-[var(--surface-hover)] border-t border-[var(--line)] font-mono text-[10px] sm:text-[11px] text-[var(--muted)] truncate">
                          // {project.imageCaption}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Tags de Tecnologias em Mono */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {toolsList.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-card bg-[var(--surface-hover)] border border-[var(--line)] font-mono text-[11px] text-[var(--muted)] uppercase tracking-wider"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Ações e Links Diretos */}
                  <div className="pt-4 border-t border-[var(--line)] flex flex-wrap items-center justify-between gap-4 font-mono text-[12px] uppercase tracking-wider">
                    <Link
                      to={`/projetos/${project.slug}`}
                      className="link-underline text-[var(--accent)] hover:text-[var(--ink)] font-semibold inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>Estudo de Caso</span>
                      <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>

                    <div className="flex items-center gap-4 text-[var(--muted)]">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-underline hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1 text-[11px]"
                        >
                          <PixelIcon name="external" size={13} className="text-[var(--accent)]" />
                          <span>Portal</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-underline hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1 text-[11px]"
                        >
                          <PixelIcon name="github" size={13} className="text-[var(--accent)]" />
                          <span>Código</span>
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
