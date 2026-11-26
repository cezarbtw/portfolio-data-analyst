import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { projects } from '../data/projects';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageLightbox from '../components/ImageLightbox';
import PixelIcon from '../components/PixelIcon';
import NerPipelineSvg from '../components/NerPipelineSvg';

/**
 * Destaca trechos marcados com [CONFIRMAR...] para facilitar revisão factual.
 */
function renderConfirmedText(text) {
  if (!text || typeof text !== 'string') return text;
  const parts = text.split(/(\[CONFIRMAR[^\]]*\])/g);
  return parts.map((part, idx) => {
    if (part.startsWith('[CONFIRMAR')) {
      return (
        <span
          key={idx}
          className="text-[var(--accent)] font-medium"
          title="Trecho aguardando confirmação com os dados originais"
        >
          {part}
        </span>
      );
    }
    return <React.Fragment key={idx}>{part}</React.Fragment>;
  });
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projectIndex >= 0 ? projects[projectIndex] : null;

  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    setActiveScreenIndex(0);
    setLightboxImage(null);
  }, [slug]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  const currentScreen = project.screens ? project.screens[activeScreenIndex] : null;
  const displayImage = currentScreen
    ? { url: currentScreen.url, caption: currentScreen.caption, title: currentScreen.title }
    : project.image
    ? { url: project.image, caption: project.imageCaption, title: project.title }
    : null;

  const hasVisual = Boolean(
    (project.screens && project.screens.length > 0) ||
      project.image ||
      (project.hasDiagram && project.diagramType === 'ner')
  );

  const sections = [
    { title: 'Problema', content: project.caseStudy.problem },
    { title: 'O que fiz', content: project.caseStudy.solution },
    { title: 'Como funciona', content: project.caseStudy.architecture },
    { title: 'Resultado', content: project.caseStudy.results },
  ];

  const toolsFormatted = project.tools
    .split('·')
    .map((t) => t.trim())
    .join(' · ');

  return (
    <div className="min-h-screen flex flex-col bg-transparent text-[var(--ink)]">
      <Header />

      <main className="flex-1 max-w-[1100px] w-full mx-auto px-5 sm:px-8 pt-[56px] pb-12 sm:pb-16">
        <div className="pt-8 sm:pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* ─── BLOCO 1: Título e Resumo (Topo esquerdo no desktop, Topo no mobile) ─── */}
            <div className="lg:col-span-8 lg:col-start-1 lg:row-start-1 max-w-[680px] min-w-0">
              <Link
                to="/#projetos"
                className="link-underline inline-flex items-center gap-1.5 font-body font-medium text-[15px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors mb-5"
              >
                <span aria-hidden="true">←</span>
                <span>Voltar para projetos</span>
              </Link>

              <p className="font-body font-medium text-[15px] text-[var(--muted)] mb-2">
                {project.context}
              </p>

              <h1 className="font-display font-bold tracking-tight text-[clamp(1.75rem,4.2vw,2.85rem)] leading-[1.12] text-[var(--ink)] break-words">
                {project.title}
              </h1>

              <p className="mt-4 font-body text-[16px] sm:text-[17px] leading-[1.7] text-[var(--muted)]">
                {project.summary}
              </p>
            </div>

            {/* ─── BLOCO 2: Ficha Sticky à direita no desktop; logo abaixo do título no mobile ─── */}
            <aside
              aria-label="Ficha do projeto"
              className="lg:col-span-4 lg:col-start-9 lg:row-start-1 lg:row-span-2 lg:sticky lg:top-[80px] min-w-0"
            >
              <div className="rounded-card border border-[var(--line)] bg-[var(--surface)] p-5 sm:p-6">
                <h2 className="font-body font-semibold text-[15px] text-[var(--ink)] pb-3 mb-4 border-b border-[var(--line)]">
                  Ficha do projeto
                </h2>

                <dl className="space-y-4">
                  <div>
                    <dt className="font-body text-[14px] text-[var(--muted)] mb-0.5">
                      Ano
                    </dt>
                    <dd className="font-mono text-[14px] text-[var(--ink)]">
                      {project.year}
                    </dd>
                  </div>

                  <div>
                    <dt className="font-body text-[14px] text-[var(--muted)] mb-0.5">
                      Organização
                    </dt>
                    <dd className="font-body text-[15px] text-[var(--ink)] leading-[1.5]">
                      {project.organization}
                    </dd>
                  </div>

                  <div>
                    <dt className="font-body text-[14px] text-[var(--muted)] mb-0.5">
                      Meu papel
                    </dt>
                    <dd className="font-body text-[15px] text-[var(--ink)] leading-[1.5]">
                      {renderConfirmedText(project.role)}
                    </dd>
                  </div>

                  <div>
                    <dt className="font-body text-[14px] text-[var(--muted)] mb-1">
                      Ferramentas
                    </dt>
                    <dd className="font-mono text-[13px] leading-[1.6] text-[var(--ink)]">
                      {toolsFormatted}
                    </dd>
                  </div>

                  <div className="pt-3 border-t border-[var(--line)]">
                    <dt className="font-body text-[14px] text-[var(--muted)] mb-2">
                      Links
                    </dt>
                    <dd className="flex flex-col items-start gap-2.5 font-body font-medium text-[15px]">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-underline text-[var(--ink)] hover:text-[var(--accent)] inline-flex items-center gap-1.5 transition-colors"
                        >
                          <PixelIcon name="external" size={14} />
                          <span>{project.demoLabel || 'Acessar painel'}</span>
                          <span aria-hidden="true" className="arrow-ext text-[12px]">↗</span>
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-underline text-[var(--ink)] hover:text-[var(--accent)] inline-flex items-center gap-1.5 transition-colors"
                        >
                          <PixelIcon name="github" size={14} />
                          <span>Repositório no GitHub</span>
                          <span aria-hidden="true" className="arrow-ext text-[12px]">↗</span>
                        </a>
                      )}

                      {!project.demoUrl && !project.githubUrl && (
                        <span className="font-body font-normal text-[15px] text-[var(--muted)]">
                          Projeto institucional interno
                        </span>
                      )}
                    </dd>
                  </div>
                </dl>
              </div>
            </aside>

            {/* ─── BLOCO 3: Visual (quando existir) + 4 Seções + Navegação inferior ─── */}
            <div className="lg:col-span-8 lg:col-start-1 lg:row-start-2 max-w-[680px] min-w-0">
              {/* Bloco visual: Abas/Imagem ou Diagrama SVG (oculto se não houver) */}
              {hasVisual && (
                <div className="mb-10 rounded-card border border-[var(--line)] bg-[var(--surface)] overflow-hidden">
                  {project.screens && project.screens.length > 0 ? (
                    <>
                      <div
                        className="flex overflow-x-auto border-b border-[var(--line)] bg-[var(--surface-hover)]"
                        role="tablist"
                        aria-label="Telas do painel"
                      >
                        {project.screens.map((screen, idx) => {
                          const isActive = activeScreenIndex === idx;
                          return (
                            <button
                              key={screen.id}
                              type="button"
                              role="tab"
                              aria-selected={isActive}
                              onClick={() => setActiveScreenIndex(idx)}
                              className={`px-4 py-2.5 font-body text-[14px] sm:text-[15px] whitespace-nowrap border-r border-[var(--line)] border-b-2 transition-colors cursor-pointer focus-visible:outline-none ${
                                isActive
                                  ? 'bg-[var(--surface)] text-[var(--ink)] font-semibold border-b-[var(--accent)]'
                                  : 'bg-transparent text-[var(--muted)] hover:text-[var(--ink)] font-medium border-b-transparent'
                              }`}
                            >
                              {screen.tab}
                            </button>
                          );
                        })}
                      </div>

                      <div className="p-3 sm:p-5 bg-[var(--bg)]">
                        <button
                          type="button"
                          onClick={() => setLightboxImage(displayImage)}
                          className="w-full rounded-sm border border-[var(--line)] bg-[#FFFFFF] p-1.5 overflow-hidden cursor-zoom-in block relative group/img focus-visible:outline-none"
                          aria-label={`Ampliar tela ${displayImage.title}`}
                        >
                          <img
                            src={displayImage.url}
                            alt={displayImage.title}
                            className="w-full h-auto max-h-[480px] object-contain block mx-auto"
                          />
                          <span className="absolute bottom-2.5 right-2.5 px-2.5 py-1 bg-[#131316]/85 rounded-card border border-[#FFFFFF]/20 font-body text-[12px] text-[#FFFFFF] opacity-0 group-hover/img:opacity-100 transition-opacity">
                            Ampliar imagem
                          </span>
                        </button>

                        <p className="mt-3 font-body text-[15px] leading-[1.6] text-[var(--muted)]">
                          <span className="font-semibold text-[var(--ink)]">{displayImage.title}:</span>{' '}
                          {displayImage.caption}
                        </p>
                      </div>
                    </>
                  ) : project.image ? (
                    <div className="p-3 sm:p-5 bg-[var(--bg)]">
                      <button
                        type="button"
                        onClick={() => setLightboxImage(displayImage)}
                        className="w-full rounded-sm border border-[var(--line)] bg-[#FFFFFF] p-1.5 overflow-hidden cursor-zoom-in block relative group/img focus-visible:outline-none"
                        aria-label={`Ampliar imagem de ${project.title}`}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-auto max-h-[480px] object-contain block mx-auto"
                        />
                        <span className="absolute bottom-2.5 right-2.5 px-2.5 py-1 bg-[#131316]/85 rounded-card border border-[#FFFFFF]/20 font-body text-[12px] text-[#FFFFFF] opacity-0 group-hover/img:opacity-100 transition-opacity">
                          Ampliar imagem
                        </span>
                      </button>

                      {project.imageCaption && (
                        <p className="mt-3 font-body text-[15px] leading-[1.6] text-[var(--muted)]">
                          {project.imageCaption}
                        </p>
                      )}
                    </div>
                  ) : (
                    <div className="p-4 sm:p-6 bg-[var(--bg)]">
                      <p className="font-body text-[14px] text-[var(--muted)] mb-3">
                        Fluxo do pipeline de validação entre API e SQL
                      </p>
                      <NerPipelineSvg />
                    </div>
                  )}
                </div>
              )}

              {/* 4 Seções Diretas */}
              <div className="divide-y divide-[var(--line)] border-t border-b border-[var(--line)]">
                {sections.map((section) => (
                  <section key={section.title} className="py-6 sm:py-7">
                    <h2 className="font-display font-bold tracking-tight text-[22px] sm:text-[26px] leading-[1.18] text-[var(--ink)] mb-3">
                      {section.title}
                    </h2>
                    <p className="font-body text-[15px] sm:text-[16px] leading-[1.72] text-[var(--ink)]">
                      {renderConfirmedText(section.content)}
                    </p>
                  </section>
                ))}
              </div>

              {/* Navegação inferior: Projeto anterior, Próximo projeto (texto, sem cards) + Botão voltar */}
              <nav aria-label="Navegação entre estudos de caso" className="pt-8">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-8 border-b border-[var(--line)]">
                  <div className="min-w-0 sm:max-w-[46%]">
                    {prevProject && (
                      <Link to={`/projetos/${prevProject.slug}`} className="group inline-block">
                        <span className="block font-body text-[14px] text-[var(--muted)] mb-1">
                          ← Projeto anterior
                        </span>
                        <span className="link-underline font-body font-medium text-[16px] text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors">
                          {prevProject.title}
                        </span>
                      </Link>
                    )}
                  </div>

                  <div className="min-w-0 sm:max-w-[46%] sm:text-right">
                    {nextProject && (
                      <Link to={`/projetos/${nextProject.slug}`} className="group inline-block">
                        <span className="block font-body text-[14px] text-[var(--muted)] mb-1">
                          Próximo projeto →
                        </span>
                        <span className="link-underline font-body font-medium text-[16px] text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors">
                          {nextProject.title}
                        </span>
                      </Link>
                    )}
                  </div>
                </div>

                <div className="pt-6">
                  <Link
                    to="/#projetos"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-card border border-[var(--line)] bg-[var(--surface)] hover:border-[var(--accent)] hover:text-[var(--accent)] font-body font-medium text-[15px] text-[var(--ink)] transition-colors"
                  >
                    <span aria-hidden="true">←</span>
                    <span>Voltar para a lista de projetos</span>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </main>

      <ImageLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
      <Footer />
    </div>
  );
}
