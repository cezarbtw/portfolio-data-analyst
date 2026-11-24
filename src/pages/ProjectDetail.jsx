import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { projects } from '../data/projects';
import ImageLightbox from '../components/ImageLightbox';
import Footer from '../components/Footer';
import PixelIcon from '../components/PixelIcon';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState(null);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const currentScreen = project.screens ? project.screens[activeScreenIndex] : null;
  const displayImage = currentScreen
    ? { url: currentScreen.url, caption: currentScreen.caption, title: currentScreen.title }
    : project.image
    ? { url: project.image, caption: project.imageCaption, title: project.title }
    : null;

  return (
    <div className="min-h-screen flex flex-col bg-transparent text-[var(--ink)]">
      {/* ─── Cabeçalho Reduzido Fixo (56px) com bg-noise ─── */}
      <header className="fixed top-0 left-0 right-0 z-40 h-[56px] bg-noise border-b border-[var(--line)]">
        <div className="max-w-[1200px] mx-auto h-full px-6 flex items-center justify-between">
          <Link
            to="/#projetos"
            viewTransition
            className="font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--ink)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
          >
            <span aria-hidden="true" className="text-[var(--accent)]">←</span> Voltar aos projetos
          </Link>

          <span className="font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--muted)]">
            Projeto {project.number} / 06
          </span>
        </div>
      </header>

      {/* ─── Conteúdo Principal ─── */}
      <main className="flex-1 pt-[56px]">
        {/* Cabeçalho do Estudo de Caso */}
        <div className="border-b border-[var(--line)] py-16 sm:py-20 lg:py-24">
          <div className="max-w-[1200px] mx-auto px-6">
            {/* Metadados em mono */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--muted)] mb-4">
              <span className="text-[var(--accent)] font-semibold">Caso de Estudo {project.number}</span>
              <span aria-hidden="true">·</span>
              <span>{project.year}</span>
              <span aria-hidden="true">·</span>
              <span>{project.context}</span>
            </div>

            {/* Título em Instrument Serif */}
            <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] text-[var(--ink)] max-w-[900px]">
              {project.title}
            </h1>

            {/* Ferramentas em mono */}
            <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--muted)]">
              Stack: <span className="text-[var(--ink)]">{project.tools}</span>
            </p>

            {/* Resumo introdutório em Schibsted Grotesk (máx. 62ch) */}
            <p className="mt-8 font-body text-[18px] sm:text-[20px] leading-[1.6] text-[var(--ink)] max-w-[62ch]">
              {project.summary}
            </p>
          </div>
        </div>

        {/* ─── Imagem em Largura Total ou Bloco Técnico ─── */}
        <div className="border-b border-[var(--line)] py-12 lg:py-16 bg-[var(--bg)]">
          <div className="max-w-[1200px] mx-auto px-6">
            {project.screens && project.screens.length > 0 ? (
              <div>
                {/* Abas técnicas para alternar telas do painel */}
                <div className="flex flex-wrap items-center gap-2 mb-4 border-b border-[var(--line)] pb-4">
                  <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--muted)] mr-2">
                    Telas do painel:
                  </span>
                  {project.screens.map((screen, idx) => (
                    <button
                      key={screen.id}
                      type="button"
                      onClick={() => setActiveScreenIndex(idx)}
                      className={`px-3 py-1 font-mono text-[12px] uppercase tracking-[0.08em] transition-colors rounded-card ${
                        activeScreenIndex === idx
                          ? 'bg-[var(--accent)] text-[#FFFFFF] font-bold border border-[var(--accent)]'
                          : 'border border-[var(--line)] bg-[var(--surface)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--ink)]'
                      }`}
                    >
                      {screen.tab}
                    </button>
                  ))}
                </div>

                {/* Imagem em alta resolução clicável */}
                <button
                  type="button"
                  onClick={() => setLightboxImage(displayImage)}
                  className="w-full text-left group block focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
                  title="Clique para ampliar a visualização"
                >
                  <div className="rounded-card border border-[var(--line)] bg-[var(--surface)] overflow-hidden cursor-zoom-in">
                    <img
                      src={displayImage.url}
                      alt={displayImage.title}
                      className="w-full h-auto object-contain max-h-[720px] block mx-auto"
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--muted)]">
                    <span>{displayImage.caption}</span>
                    <span className="text-[var(--accent)] shrink-0 ml-4 hidden sm:inline">
                      [Clique para zoom]
                    </span>
                  </div>
                </button>
              </div>
            ) : project.image ? (
              <div>
                <button
                  type="button"
                  onClick={() => setLightboxImage(displayImage)}
                  className="w-full text-left group block focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
                  title="Clique para ampliar a visualização"
                >
                  <div className="rounded-card border border-[var(--line)] bg-[var(--surface)] overflow-hidden cursor-zoom-in">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-contain max-h-[720px] block mx-auto"
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--muted)]">
                    <span>{project.imageCaption || project.title}</span>
                    <span className="text-[var(--accent)] shrink-0 ml-4 hidden sm:inline">
                      [Clique para zoom]
                    </span>
                  </div>
                </button>
              </div>
            ) : (
              /* Placeholder técnico [IMAGEM] para projetos sem screenshot */
              <div className="rounded-card border border-[var(--line)] p-8 sm:p-12 text-center bg-[var(--surface)]">
                <span className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--accent)] font-semibold block">
                  [IMAGEM]
                </span>
                <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--muted)] mt-2">
                  Diagrama técnico e fluxo de pipeline em preparação para publicação
                </p>
              </div>
            )}
          </div>
        </div>

        {/* ─── Texto Corrido em Coluna Única (máx. 62ch) — Seções Fixas ─── */}
        <div className="py-16 sm:py-20 lg:py-24">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-[62ch]">
              {/* 1. Problema */}
              <section className="mb-14 pb-14 border-b border-[var(--line)]">
                <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--accent)] mb-2">
                  01 / Problema
                </p>
                <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.05] text-[var(--ink)] mb-4">
                  O Cenário e o Desafio Técnico
                </h2>
                <p className="font-body text-[18px] leading-[1.6] text-[var(--ink)]">
                  {project.caseStudy.problem}
                </p>
              </section>

              {/* 2. Solução */}
              <section className="mb-14 pb-14 border-b border-[var(--line)]">
                <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--accent)] mb-2">
                  02 / Solução
                </p>
                <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.05] text-[var(--ink)] mb-4">
                  Abordagem e Implementação
                </h2>
                <p className="font-body text-[18px] leading-[1.6] text-[var(--ink)]">
                  {project.caseStudy.solution}
                </p>
              </section>

              {/* 3. Arquitetura */}
              <section className="mb-14 pb-14 border-b border-[var(--line)]">
                <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--accent)] mb-2">
                  03 / Arquitetura
                </p>
                <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.05] text-[var(--ink)] mb-4">
                  Estrutura Técnica e Fluxo
                </h2>
                <p className="font-body text-[18px] leading-[1.6] text-[var(--ink)]">
                  {project.caseStudy.architecture}
                </p>
              </section>

              {/* 4. Resultados */}
              <section className="mb-14 pb-14 border-b border-[var(--line)]">
                <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--accent)] mb-2">
                  04 / Resultados
                </p>
                <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.05] text-[var(--ink)] mb-4">
                  Impacto e Indicadores
                </h2>
                <p className="font-body text-[18px] leading-[1.6] text-[var(--ink)]">
                  {project.caseStudy.results}
                </p>
              </section>

              {/* ─── Links para Repositório / Dashboard no final ─── */}
              <section className="pt-2">
                <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--muted)] mb-4">
                  Acessos &amp; Código
                </p>

                <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline font-mono text-[13px] uppercase tracking-[0.08em] text-[var(--accent)] hover:text-[var(--ink)] inline-flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-[var(--accent)] font-semibold"
                    >
                      <PixelIcon name="external" size={14} className="text-[var(--accent)]" />
                      <span>{project.demoLabel || 'Acessar Dashboard'}</span>
                      <span aria-hidden="true" className="arrow-ext text-[11px]">↗</span>
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline font-mono text-[13px] uppercase tracking-[0.08em] text-[var(--accent)] hover:text-[var(--ink)] inline-flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-[var(--accent)] font-semibold"
                    >
                      <PixelIcon name="github" size={14} className="text-[var(--accent)]" />
                      <span>Repositório no GitHub</span>
                      <span aria-hidden="true" className="arrow-ext text-[11px]">↗</span>
                    </a>
                  )}

                  {!project.demoUrl && !project.githubUrl && (
                    <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--muted)]">
                      Projeto institucional restrito · Auditoria e controle interno
                    </p>
                  )}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* Lightbox acessível */}
      <ImageLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />

      {/* Rodapé técnico */}
      <Footer />
    </div>
  );
}
