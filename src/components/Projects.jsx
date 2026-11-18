import React, { useState } from 'react';
import { featuredProject, otherProjects } from '../data/portfolioData';
import {
  NerPipelineDiagram,
  TimeSeriesDiagram,
  YoloInspectionDiagram,
  RelationalSchemaDiagram,
} from './TechnicalDiagrams';
import ImageLightbox from './ImageLightbox';

export default function Projects() {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [openCaseStudies, setOpenCaseStudies] = useState({});

  const toggleCaseStudy = (id) => {
    setOpenCaseStudies((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const currentScreen = featuredProject.screens[activeScreenIndex];

  return (
    <section
      id="projetos"
      className="py-16 sm:py-24 border-b border-[#E5E3DD] dark:border-[#282826] bg-[#F3F1EB] dark:bg-[#1A1918] transition-colors"
    >
      {/* Lightbox Modal */}
      <ImageLightbox
        image={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />

      {/* Section Header */}
      <div className="mx-auto max-w-[760px] px-5 sm:px-6 mb-12">
        <p className="text-xs font-mono uppercase tracking-wider text-[#1F4E5F] dark:text-[#6EA3B4] font-medium">
          Portfólio Técnico
        </p>
        <h2 className="mt-1 text-2xl sm:text-3xl md:text-[34px] font-serif font-medium text-[#1C1C1A] dark:text-[#EAE8E3] leading-tight">
          Projetos Selecionados
        </h2>
        <p className="mt-2 text-base text-[#444440] dark:text-[#A8A69E]">
          Relatórios executivos no Power BI, esteiras ETL e reconciliação analítica no setor público e em projetos de engenharia de dados.
        </p>
      </div>

      {/* ========================================================
          TIER 1: PROJETO PRINCIPAL (TCM-GO: PAINÉIS POWER BI)
         ======================================================== */}
      <article className="pb-16 sm:pb-20 border-b border-[#E5E3DD] dark:border-[#282826]">
        {/* Tier 1 - Narrative Header */}
        <div className="mx-auto max-w-[760px] px-5 sm:px-6">
          <div className="flex items-baseline gap-3">
            <span className="text-2xl sm:text-3xl font-mono font-medium text-[#1F4E5F] dark:text-[#6EA3B4]">
              {featuredProject.number}
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-[#444440] dark:text-[#A8A69E]">
              {featuredProject.context}
            </span>
          </div>

          <h3 className="mt-2 text-2xl sm:text-[30px] font-serif font-medium text-[#1C1C1A] dark:text-[#EAE8E3] leading-snug">
            {featuredProject.title}
          </h3>

          <p className="mt-4 text-[17px] leading-[1.68] text-[#1C1C1A] dark:text-[#EAE8E3]">
            {featuredProject.summary}
          </p>

          <p className="mt-3 text-sm font-mono text-[#444440] dark:text-[#A8A69E]">
            <span className="font-sans font-medium text-[#1C1C1A] dark:text-[#EAE8E3]">
              Ferramentas:{' '}
            </span>
            {featuredProject.tools}
          </p>

          {/* Interactive Segmented Control: 5 Dashboard Screens */}
          <div className="mt-8 pt-6 border-t border-[#E5E3DD] dark:border-[#282826]">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#444440] dark:text-[#A8A69E]">
                Telas do Painel ({activeScreenIndex + 1}/5):
              </span>
              <span className="text-xs font-mono text-[#1F4E5F] dark:text-[#6EA3B4]">
                Clique nas abas para navegar pelas dimensões
              </span>
            </div>

            <div
              role="tablist"
              aria-label="Navegação entre telas do painel Power BI"
              className="flex flex-wrap gap-1.5 p-1 bg-[#EBE8E0] dark:bg-[#20201E] rounded-none border border-[#E5E3DD] dark:border-[#282826]"
            >
              {featuredProject.screens.map((screen, idx) => {
                const isActive = activeScreenIndex === idx;
                return (
                  <button
                    key={screen.id}
                    type="button"
                    role="tab"
                    id={`tab-${screen.id}`}
                    aria-selected={isActive}
                    aria-controls={`panel-${screen.id}`}
                    onClick={() => setActiveScreenIndex(idx)}
                    className={`px-3 py-1.5 text-xs sm:text-[13px] font-sans transition-all duration-150 ${
                      isActive
                        ? 'bg-[#FAF9F6] dark:bg-[#141413] text-[#1C1C1A] dark:text-[#EAE8E3] font-medium shadow-sm border border-[#E5E3DD] dark:border-[#282826]'
                        : 'text-[#444440] dark:text-[#A8A69E] hover:text-[#1C1C1A] dark:hover:text-[#EAE8E3] hover:bg-[#FAF9F6]/50 dark:hover:bg-[#141413]/50'
                    }`}
                  >
                    {screen.tab}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tier 1 - Visual Showcase: Full-width responsive container (up to 1040px) */}
        <div className="mt-6 mx-auto max-w-[1040px] px-5 sm:px-6">
          <div
            id={`panel-${currentScreen.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${currentScreen.id}`}
            className="space-y-3"
          >
            {/* Analytical Context Callout */}
            <div className="p-3 sm:p-4 bg-[#FAF9F6] dark:bg-[#141413] border border-[#E5E3DD] dark:border-[#282826] space-y-1.5">
              <div className="text-xs font-mono text-[#1F4E5F] dark:text-[#6EA3B4] font-medium">
                PERGUNTA ANALÍTICA RESPONDIDA:
              </div>
              <p className="text-sm sm:text-[15px] font-sans text-[#1C1C1A] dark:text-[#EAE8E3] leading-relaxed">
                {currentScreen.question}
              </p>
              <div className="text-xs font-mono text-[#444440] dark:text-[#A8A69E] pt-1 border-t border-[#E5E3DD]/70 dark:border-[#282826]/70">
                <span className="font-sans font-medium text-[#1C1C1A] dark:text-[#EAE8E3]">
                  Indicadores:{' '}
                </span>
                {currentScreen.indicators}
              </div>
            </div>

            {/* High-Resolution Dashboard Image with Zoom & Lightbox trigger */}
            <div className="relative group border border-[#E5E3DD] dark:border-[#282826] bg-[#FFFFFF] dark:bg-[#1C1C1A] overflow-hidden">
              <img
                src={currentScreen.url}
                alt={`${featuredProject.title} - ${currentScreen.title}`}
                width={currentScreen.width}
                height={currentScreen.height}
                decoding="sync"
                onClick={() =>
                  setLightboxImage({
                    url: currentScreen.url,
                    title: currentScreen.title,
                    indicators: currentScreen.indicators,
                  })
                }
                className="w-full h-auto object-contain block cursor-zoom-in transition-transform duration-300 ease-out group-hover:scale-[1.015]"
              />

              {/* Click to expand pill */}
              <button
                type="button"
                onClick={() =>
                  setLightboxImage({
                    url: currentScreen.url,
                    title: currentScreen.title,
                    indicators: currentScreen.indicators,
                  })
                }
                className="absolute bottom-3 right-3 text-xs font-mono bg-[#1C1C1A]/85 text-[#FAF9F6] dark:bg-[#FAF9F6]/90 dark:text-[#1C1C1A] px-2.5 py-1 backdrop-blur-sm opacity-90 group-hover:opacity-100 transition-opacity"
              >
                Ampliar em alta resolução [↗]
              </button>
            </div>
          </div>
        </div>

        {/* Tier 1 - Links & Expandable Case Study (~760px) */}
        <div className="mt-8 mx-auto max-w-[760px] px-5 sm:px-6 space-y-5">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <a
              href={featuredProject.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="editorial-link external-link text-[#1F4E5F] dark:text-[#6EA3B4] font-medium inline-flex items-center gap-1"
            >
              <span>{featuredProject.demoLabel}</span>
              <span className="arrow-icon" aria-hidden="true">↗</span>
            </a>

            <button
              type="button"
              onClick={() => toggleCaseStudy(featuredProject.id)}
              className="editorial-link text-[#1C1C1A] dark:text-[#EAE8E3] font-medium inline-flex items-center gap-1.5"
            >
              <span>
                {openCaseStudies[featuredProject.id]
                  ? '− Ocultar estudo de caso'
                  : '+ Estudo de caso detalhado'}
              </span>
            </button>
          </div>

          {openCaseStudies[featuredProject.id] && (
            <div className="mt-5 space-y-5 text-[15px] leading-[1.68] pl-4 sm:pl-5 border-l-2 border-[#1F4E5F] dark:border-[#6EA3B4] bg-[#FAF9F6] dark:bg-[#141413] p-4 sm:p-5 border border-[#E5E3DD] dark:border-[#282826]">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#1F4E5F] dark:text-[#6EA3B4] mb-1 font-semibold">
                  Problema de Negócio & Contexto
                </h4>
                <p className="text-[#1C1C1A] dark:text-[#EAE8E3]">
                  {featuredProject.caseStudy.problem}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#1F4E5F] dark:text-[#6EA3B4] mb-1 font-semibold">
                  Solução Implementada
                </h4>
                <p className="text-[#1C1C1A] dark:text-[#EAE8E3]">
                  {featuredProject.caseStudy.solution}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#1F4E5F] dark:text-[#6EA3B4] mb-1 font-semibold">
                  Arquitetura de Dados & Engenharia
                </h4>
                <p className="text-[#1C1C1A] dark:text-[#EAE8E3]">
                  {featuredProject.caseStudy.architecture}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#1F4E5F] dark:text-[#6EA3B4] mb-1 font-semibold">
                  Resultados & Impacto
                </h4>
                <p className="text-[#1C1C1A] dark:text-[#EAE8E3]">
                  {featuredProject.caseStudy.results}
                </p>
              </div>
            </div>
          )}
        </div>
      </article>

      {/* ========================================================
          TIER 2: OUTROS PROJETOS (COMPACTO E UNIFORME: 02 - 06)
         ======================================================== */}
      <div className="pt-12 sm:pt-16">
        <div className="mx-auto max-w-[760px] px-5 sm:px-6 mb-8">
          <h3 className="text-xs font-mono uppercase tracking-wider text-[#444440] dark:text-[#A8A69E]">
            Outros Projetos de Engenharia & Análise de Dados
          </h3>
        </div>

        <div className="space-y-16">
          {otherProjects.map((project, idx) => (
            <article
              key={project.id}
              className={`pb-14 ${
                idx < otherProjects.length - 1
                  ? 'border-b border-[#E5E3DD] dark:border-[#282826]'
                  : ''
              }`}
            >
              <div className="mx-auto max-w-[760px] px-5 sm:px-6">
                {/* Header with large editorial number */}
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl sm:text-3xl font-mono font-medium text-[#1F4E5F] dark:text-[#6EA3B4]">
                    {project.number}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#444440] dark:text-[#A8A69E]">
                    {project.context}
                  </span>
                </div>

                <h4 className="mt-1 text-xl sm:text-2xl font-serif font-medium text-[#1C1C1A] dark:text-[#EAE8E3] leading-snug">
                  {project.title}
                </h4>

                <p className="mt-3 text-[16px] leading-[1.65] text-[#1C1C1A] dark:text-[#EAE8E3]">
                  {project.summary}
                </p>

                <p className="mt-2 text-sm font-mono text-[#444440] dark:text-[#A8A69E]">
                  <span className="font-sans font-medium text-[#1C1C1A] dark:text-[#EAE8E3]">
                    Ferramentas:{' '}
                  </span>
                  {project.tools}
                </p>

                {/* Technical Visual / Diagram / Real Screenshot */}
                <div className="mt-6">
                  {project.visualType === 'diagram-ner' && <NerPipelineDiagram />}

                  {project.visualType === 'diagram-timeseries' && (
                    <TimeSeriesDiagram />
                  )}

                  {project.visualType === 'diagram-yolo' && (
                    <YoloInspectionDiagram />
                  )}

                  {project.visualType === 'diagram-er' && (
                    <RelationalSchemaDiagram />
                  )}

                  {project.visualType === 'image' && project.image && (
                    <div className="border border-[#E5E3DD] dark:border-[#282826] bg-[#FFFFFF] dark:bg-[#1C1C1A] overflow-hidden group">
                      <img
                        src={project.image.url}
                        alt={project.image.caption}
                        width={project.image.width}
                        height={project.image.height}
                        decoding="sync"
                        onClick={() =>
                          setLightboxImage({
                            url: project.image.url,
                            caption: project.image.caption,
                          })
                        }
                        className="w-full h-auto object-contain block cursor-zoom-in transition-transform duration-300 ease-out group-hover:scale-[1.015]"
                      />
                      <div className="p-2 sm:p-2.5 border-t border-[#E5E3DD] dark:border-[#282826] bg-[#FAF9F6] dark:bg-[#141413] flex items-center justify-between">
                        <span className="text-xs font-mono text-[#444440] dark:text-[#A8A69E]">
                          {project.image.caption}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            setLightboxImage({
                              url: project.image.url,
                              caption: project.image.caption,
                            })
                          }
                          className="text-xs font-mono text-[#1F4E5F] dark:text-[#6EA3B4] hover:underline"
                        >
                          Ampliar [↗]
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Standardized Links Row */}
                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                  {project.caseStudy && (
                    <button
                      type="button"
                      onClick={() => toggleCaseStudy(project.id)}
                      className="editorial-link text-[#1C1C1A] dark:text-[#EAE8E3] font-medium"
                    >
                      {openCaseStudies[project.id]
                        ? '− Ocultar estudo de caso'
                        : '+ Estudo de caso'}
                    </button>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="editorial-link external-link text-[#1F4E5F] dark:text-[#6EA3B4] font-medium inline-flex items-center gap-1"
                    >
                      <span>Código no GitHub</span>
                      <span className="arrow-icon" aria-hidden="true">↗</span>
                    </a>
                  )}

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="editorial-link external-link text-[#1F4E5F] dark:text-[#6EA3B4] font-medium inline-flex items-center gap-1"
                    >
                      <span>{project.demoLabel || 'Acessar projeto'}</span>
                      <span className="arrow-icon" aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>

                {/* Expandable Case Study for Tier 2 */}
                {openCaseStudies[project.id] && project.caseStudy && (
                  <div className="mt-5 space-y-4 text-[15px] leading-[1.65] pl-4 border-l-2 border-[#1F4E5F] dark:border-[#6EA3B4] bg-[#FAF9F6] dark:bg-[#141413] p-4 border border-[#E5E3DD] dark:border-[#282826]">
                    <div>
                      <h5 className="font-mono text-xs uppercase tracking-wider text-[#1F4E5F] dark:text-[#6EA3B4] mb-1 font-semibold">
                        Problema
                      </h5>
                      <p className="text-[#1C1C1A] dark:text-[#EAE8E3]">
                        {project.caseStudy.problem}
                      </p>
                    </div>

                    <div>
                      <h5 className="font-mono text-xs uppercase tracking-wider text-[#1F4E5F] dark:text-[#6EA3B4] mb-1 font-semibold">
                        Solução
                      </h5>
                      <p className="text-[#1C1C1A] dark:text-[#EAE8E3]">
                        {project.caseStudy.solution}
                      </p>
                    </div>

                    <div>
                      <h5 className="font-mono text-xs uppercase tracking-wider text-[#1F4E5F] dark:text-[#6EA3B4] mb-1 font-semibold">
                        Arquitetura & Engenharia
                      </h5>
                      <p className="text-[#1C1C1A] dark:text-[#EAE8E3]">
                        {project.caseStudy.architecture}
                      </p>
                    </div>

                    <div>
                      <h5 className="font-mono text-xs uppercase tracking-wider text-[#1F4E5F] dark:text-[#6EA3B4] mb-1 font-semibold">
                        Resultados
                      </h5>
                      <p className="text-[#1C1C1A] dark:text-[#EAE8E3]">
                        {project.caseStudy.results}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
