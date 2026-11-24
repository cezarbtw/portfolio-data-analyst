import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import PixelIcon from './PixelIcon';
import ImageLightbox from './ImageLightbox';

export default function Projects() {
  const [lightboxImage, setLightboxImage] = useState(null);

  const featuredProject = projects[0]; // TCM-GO Painéis Power BI
  const otherProjects = projects.slice(1); // 5 projetos compactos e uniformes

  return (
    <section id="projetos" className="py-8 sm:py-14 border-b border-[var(--line)]">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
          {/* ─── Coluna 1-4: Título da Seção (Sticky Desktop: 56px header + 24px = 80px) ─── */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-[80px] space-y-3">
              <div className="font-body font-medium text-[13px] text-[var(--muted)]">
                Projetos
              </div>
              <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.25rem)] leading-[1.15] text-[var(--ink)]">
                Projetos de Dados
              </h2>
              <p className="font-body text-[14px] text-[var(--muted)] leading-[1.6]">
                Power BI · Pipelines ETL · Auditoria SQL
              </p>
              <p className="font-body text-[14px] leading-[1.7] text-[var(--muted)] pt-2 hidden lg:block max-w-[32ch]">
                Casos práticos de saneamento orçamentário, modelagem dimensional e relatórios executivos.
              </p>
            </div>
          </div>

          {/* ─── Colunas 5-12: TCM-GO em Destaque + 5 Projetos Compactos e Uniformes ─── */}
          <div className="lg:col-span-8 space-y-6">
            {/* ═══ 1. PROJETO DESTAQUE: TCM-GO (Card Maior com Imagem em Largura Total) ═══ */}
            {featuredProject && (
              <article className="rounded-card border border-[var(--line)] bg-[var(--surface)] hover:border-[var(--accent)] transition-all p-6 sm:p-8 flex flex-col justify-between group">
                {/* Linha superior: Metadados em cor secundária */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2 font-mono text-[12px] text-[var(--muted)]">
                    <span className="font-medium">{featuredProject.number}</span>
                    <span aria-hidden="true" className="text-[var(--line)]">/</span>
                    <span className="font-medium">{featuredProject.year}</span>
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--muted)]">
                    SETOR PÚBLICO · TCM-GO
                  </span>
                </div>

                {/* Título Principal */}
                <h3 className="font-display font-bold text-[clamp(1.5rem,2.8vw,2.1rem)] text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors leading-[1.2] mb-3">
                  <Link to={`/projetos/${featuredProject.slug}`} className="hover:underline focus-visible:outline-none">
                    {featuredProject.title}
                  </Link>
                </h3>

                {/* Resumo Completo com Respiro */}
                <p className="font-body text-[15px] sm:text-[16px] leading-[1.75] text-[var(--ink)] mb-6">
                  {featuredProject.summary}
                </p>

                {/* Imagem em Largura Total sem Cortes nos KPIs (object-contain + clique para Lightbox) */}
                {featuredProject.image && (
                  <div className="mb-6 rounded-card border border-[var(--line)] bg-[var(--bg)] overflow-hidden">
                    <button
                      type="button"
                      onClick={() =>
                        setLightboxImage({
                          url: featuredProject.image,
                          caption: featuredProject.imageCaption,
                          title: featuredProject.title,
                        })
                      }
                      className="w-full text-left cursor-zoom-in block relative group/img focus-visible:outline-none"
                      aria-label="Clique para ampliar o painel do Power BI em tela cheia"
                    >
                      <img
                        src={featuredProject.image}
                        alt={featuredProject.imageCaption || featuredProject.title}
                        className="w-full h-auto max-h-[460px] object-contain block mx-auto transition-transform duration-200 group-hover/img:scale-[1.01]"
                        loading="lazy"
                      />
                      <div className="absolute bottom-2 right-2 px-2 py-1 bg-[#000000]/75 backdrop-blur-sm rounded-card border border-[#FFFFFF]/20 font-body text-[11px] text-[#FFFFFF] flex items-center gap-1.5 opacity-0 group-hover/img:opacity-100 transition-opacity">
                        <PixelIcon name="external" size={12} />
                        <span>Ampliar painel</span>
                      </div>
                    </button>
                    {featuredProject.imageCaption && (
                      <div className="px-4 py-2.5 bg-[var(--surface-hover)] border-t border-[var(--line)] font-body text-[12px] text-[var(--muted)]">
                        {featuredProject.imageCaption}
                      </div>
                    )}
                  </div>
                )}

                {/* Ferramentas em Linha de Texto Simples (sem chips) */}
                <p className="font-mono text-[12px] text-[var(--muted)] mb-6">
                  {featuredProject.tools.split('·').map((t) => t.trim()).join(' · ')}
                </p>

                {/* Ações: Texto principal com sublinhado; coral só no hover */}
                <div className="pt-4 border-t border-[var(--line)] flex flex-wrap items-center justify-between gap-4 font-body font-medium text-[13px]">
                  <Link
                    to={`/projetos/${featuredProject.slug}`}
                    className="link-underline text-[var(--ink)] hover:text-[var(--accent)] font-semibold inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Ver Estudo de Caso</span>
                    <span aria-hidden="true">→</span>
                  </Link>

                  <div className="flex items-center gap-4 text-[var(--muted)]">
                    {featuredProject.demoUrl && (
                      <a
                        href={featuredProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline text-[var(--muted)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1.5 text-[13px]"
                      >
                        <PixelIcon name="external" size={14} />
                        <span>Portal do Cidadão</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            )}

            {/* ═══ 2. OUTROS 5 PROJETOS: FORMATO COMPACTO E UNIFORME (Alinhado à esquerda) ═══ */}
            <div className="space-y-4 pt-2">
              <div className="font-body font-medium text-[13px] text-[var(--muted)]">
                Outros Projetos Técnicos
              </div>

              {otherProjects.map((project) => (
                <article
                  key={project.id}
                  className="rounded-card border border-[var(--line)] bg-[var(--surface)] hover:border-[var(--accent)] transition-all p-5 sm:p-6 group"
                >
                  {/* Linha superior: Categoria em MAIÚSCULAS mono + Ano em cor secundária */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2 font-mono text-[11px] text-[var(--muted)]">
                    <span className="uppercase tracking-wider font-medium">
                      {project.context.split('·')[0].trim().toUpperCase()}
                    </span>
                    <span>{project.year}</span>
                  </div>

                  {/* Título do Projeto */}
                  <h4 className="font-display font-bold text-[18px] sm:text-[20px] text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors leading-[1.3] mb-2">
                    <Link to={`/projetos/${project.slug}`} className="hover:underline focus-visible:outline-none">
                      {project.title}
                    </Link>
                  </h4>

                  {/* 2 Linhas de Resumo Escrito Completo (sem truncamento com reticências) */}
                  <p className="font-body text-[14px] leading-[1.65] text-[var(--muted)] mb-3.5">
                    {project.shortSummary || project.summary}
                  </p>

                  {/* Ferramentas em Linha de Texto Simples (sem chips) */}
                  <p className="font-mono text-[11px] sm:text-[12px] text-[var(--muted)] mb-4">
                    {project.tools.split('·').map((t) => t.trim()).join(' · ')}
                  </p>

                  {/* Links: Cor do texto principal; coral só no hover */}
                  <div className="pt-3 border-t border-[var(--line)] flex items-center justify-between font-body font-medium text-[13px]">
                    <Link
                      to={`/projetos/${project.slug}`}
                      className="link-underline text-[var(--ink)] hover:text-[var(--accent)] inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Estudo de caso</span>
                      <span aria-hidden="true">→</span>
                    </Link>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline text-[var(--muted)] hover:text-[var(--accent)] inline-flex items-center gap-1 transition-colors"
                      >
                        <PixelIcon name="github" size={13} />
                        <span>Código</span>
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox para ampliação dos Dashboards */}
      {lightboxImage && (
        <ImageLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
      )}
    </section>
  );
}
