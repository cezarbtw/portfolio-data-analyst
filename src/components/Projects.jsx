import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';

function ProjectBlock({ project, isLast }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showCaseStudy, setShowCaseStudy] = useState(false);

  const hasMultipleImages = project.images && project.images.length > 1;
  const currentImage = project.images && project.images.length > 0 ? project.images[activeImageIndex] : null;

  return (
    <article className={`py-12 sm:py-16 ${!isLast ? 'border-b border-[#E5E3DD] dark:border-[#282826]' : ''}`}>
      {/* Text Container: ~720px */}
      <div className="mx-auto max-w-[720px] px-6">
        <header>
          <p className="text-xs font-mono uppercase tracking-wider text-[#6B6B66] dark:text-[#96948E]">
            {project.context}
          </p>
          <h3 className="mt-1 text-2xl sm:text-[26px] font-serif font-medium text-[#1C1C1A] dark:text-[#EAE8E3] leading-snug">
            {project.title}
          </h3>
        </header>

        <p className="mt-4 text-[17px] leading-[1.65] text-[#1C1C1A] dark:text-[#EAE8E3]">
          {project.summary}
        </p>

        <p className="mt-3 text-sm font-mono text-[#6B6B66] dark:text-[#96948E]">
          <span className="font-sans font-medium text-[#1C1C1A] dark:text-[#EAE8E3]">Ferramentas: </span>
          {project.tools}
        </p>
      </div>

      {/* Visual Showcase Container: up to 1040px */}
      {project.images && project.images.length > 0 && (
        <div className="mt-8 mx-auto max-w-[1040px] px-6">
          {hasMultipleImages && (
            <div className="flex flex-wrap gap-2 mb-3 pb-2 border-b border-[#E5E3DD] dark:border-[#282826] text-xs font-mono">
              <span className="self-center mr-2 text-[#6B6B66] dark:text-[#96948E] font-sans">
                Painéis:
              </span>
              {project.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`px-2.5 py-1 transition-colors ${
                    activeImageIndex === idx
                      ? 'border-b-2 border-[#1F4E5F] dark:border-[#6EA3B4] text-[#1C1C1A] dark:text-[#EAE8E3] font-medium'
                      : 'text-[#6B6B66] dark:text-[#96948E] hover:text-[#1C1C1A] dark:hover:text-[#EAE8E3]'
                  }`}
                >
                  {idx + 1}. {img.caption.split(':')[0]}
                </button>
              ))}
            </div>
          )}

          {currentImage && (
            <figure className="space-y-2">
              <div className="border border-[#E5E3DD] dark:border-[#282826] bg-[#FFFFFF] dark:bg-[#1C1C1A] overflow-hidden">
                <img
                  src={currentImage.url}
                  alt={currentImage.caption}
                  className="w-full h-auto object-contain block"
                  loading="lazy"
                />
              </div>
              <figcaption className="text-xs font-mono text-[#6B6B66] dark:text-[#96948E] pt-1">
                {currentImage.caption}
              </figcaption>
            </figure>
          )}
        </div>
      )}

      {/* Case study & Action Links Container: ~720px */}
      <div className="mt-6 mx-auto max-w-[720px] px-6 space-y-6">
        {project.caseStudy && (
          <div>
            <button
              onClick={() => setShowCaseStudy(!showCaseStudy)}
              className="text-sm font-sans font-medium text-[#1F4E5F] dark:text-[#6EA3B4] hover:underline underline-offset-4 inline-flex items-center gap-1.5"
            >
              <span>{showCaseStudy ? '− Ocultar estudo de caso' : '+ Ver estudo de caso detalhado'}</span>
            </button>

            {showCaseStudy && (
              <div className="mt-5 space-y-5 text-[15px] leading-[1.65] pl-4 border-l-2 border-[#E5E3DD] dark:border-[#282826] text-[#1C1C1A] dark:text-[#EAE8E3]">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[#6B6B66] dark:text-[#96948E] mb-1">
                    Problema
                  </h4>
                  <p>{project.caseStudy.problem}</p>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[#6B6B66] dark:text-[#96948E] mb-1">
                    Solução Implementada
                  </h4>
                  <p>{project.caseStudy.solution}</p>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[#6B6B66] dark:text-[#96948E] mb-1">
                    Arquitetura e Engenharia
                  </h4>
                  <p>{project.caseStudy.architecture}</p>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[#6B6B66] dark:text-[#96948E] mb-1">
                    Resultados
                  </h4>
                  <p>{project.caseStudy.results}</p>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="text-[#1F4E5F] dark:text-[#6EA3B4] hover:underline underline-offset-4 font-medium inline-flex items-center gap-1"
            >
              <span>{project.demoLabel || 'Ver demonstração'}</span>
              <span aria-hidden="true">↗</span>
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-[#1F4E5F] dark:text-[#6EA3B4] hover:underline underline-offset-4 font-medium inline-flex items-center gap-1"
            >
              <span>Repositório no GitHub</span>
              <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projetos" className="py-16 sm:py-20 border-b border-[#E5E3DD] dark:border-[#282826]">
      <div className="mx-auto max-w-[720px] px-6 mb-8">
        <h2 className="text-2xl sm:text-3xl font-serif font-medium text-[#1C1C1A] dark:text-[#EAE8E3]">
          Projetos Selecionados
        </h2>
        <p className="mt-2 text-base text-[#6B6B66] dark:text-[#96948E]">
          Relatórios executivos no Power BI, esteiras de ETL e automações em Python desenvolvidos no setor público e em projetos analíticos.
        </p>
      </div>

      <div className="divide-y-0">
        {projectsData.map((project, idx) => (
          <ProjectBlock
            key={project.id}
            project={project}
            isLast={idx === projectsData.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
