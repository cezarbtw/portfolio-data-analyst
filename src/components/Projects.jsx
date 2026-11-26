import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import PixelIcon from './PixelIcon';
import ImageLightbox from './ImageLightbox';
import NerPipelineSvg from './NerPipelineSvg';

export default function Projects() {
  const [lightboxImage, setLightboxImage] = useState(null);
  const [activeScreenIdx, setActiveScreenIdx] = useState(0);

  const featuredProject = projects[0]; // TCM-GO Portal do Cidadão
  const nerProject = projects[1]; // TCM-GO Validação da API de NER
  const biProject = projects[2]; // Dashboard Comercial e Funil de Vendas
  const compactProjects = projects.slice(3); // 3 projetos restantes em lista compacta

  const screens = featuredProject?.screens || [];
  const activeScreen = screens[activeScreenIdx] || {
    url: featuredProject?.image,
    title: featuredProject?.title,
    caption: featuredProject?.imageCaption,
  };

  return (
    <section id="projetos" className="py-12 sm:py-16 border-b border-[var(--line)]">
      <div className="max-w-[1100px] mx-auto">
        {/* ─── Cabeçalho da Seção (Largura Total) ─── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="space-y-2">
            <div className="font-body font-medium text-[15px] text-[var(--muted)]">
              Projetos
            </div>
            <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.15rem)] tracking-tight leading-[1.08] text-[var(--ink)]">
              Projetos de Dados
            </h2>
          </div>

          <p className="font-body text-[15px] sm:text-[16px] leading-[1.65] text-[var(--muted)] max-w-[46ch]">
            Casos práticos de saneamento orçamentário, auditoria automatizada e Business Intelligence.
          </p>
        </div>

        {/* ═══ 1. DESTAQUE EM LARGURA TOTAL: PORTAL DO CIDADÃO · TCM-GO ═══ */}
        {featuredProject && (
          <article className="rounded-card border border-[var(--line)] bg-[var(--surface)] overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            {/* Coluna Esquerda: Contexto, Resumo e Links */}
            <div className="lg:col-span-4 min-w-0 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-[var(--line)] flex flex-col justify-between gap-6">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4 font-mono text-[12px] text-[var(--muted)]">
                  <span className="uppercase tracking-wider">Setor Público · TCM-GO</span>
                  <span>{featuredProject.year}</span>
                </div>

                <h3 className="font-display font-bold text-[clamp(1.45rem,2.4vw,1.9rem)] tracking-tight text-[var(--ink)] hover:text-[var(--accent)] transition-colors leading-[1.18] mb-4">
                  <Link to={`/projetos/${featuredProject.slug}`} className="hover:underline focus-visible:outline-none">
                    {featuredProject.title}
                  </Link>
                </h3>

                <p className="font-body text-[15px] sm:text-[16px] leading-[1.7] text-[var(--muted)] mb-5">
                  {featuredProject.summary}
                </p>

                <p className="font-mono text-[13px] text-[var(--muted)]">
                  {featuredProject.tools.split('·').map((t) => t.trim()).join(' · ')}
                </p>
              </div>

              <div className="pt-5 border-t border-[var(--line)] flex flex-wrap items-center justify-between gap-4 font-body font-medium text-[15px]">
                <Link
                  to={`/projetos/${featuredProject.slug}`}
                  className="link-underline text-[var(--ink)] hover:text-[var(--accent)] font-semibold inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Ver Estudo de Caso</span>
                  <span aria-hidden="true">→</span>
                </Link>

                {featuredProject.demoUrl && (
                  <a
                    href={featuredProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-[var(--muted)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1.5 text-[14px]"
                  >
                    <PixelIcon name="external" size={14} />
                    <span>Portal do Cidadão</span>
                  </a>
                )}
              </div>
            </div>

            {/* Coluna Direita: Visor Interativo das 5 Telas do Painel */}
            <div className="lg:col-span-8 min-w-0 bg-[var(--bg)] flex flex-col">
              {/* Abas das 5 Dimensões (Sem numeração) */}
              <div
                className="flex overflow-x-auto border-b border-[var(--line)] bg-[var(--surface-hover)]"
                role="tablist"
                aria-label="Telas do painel Portal do Cidadão TCM-GO"
              >
                {screens.map((screen, idx) => {
                  const isActive = idx === activeScreenIdx;
                  return (
                    <button
                      key={screen.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveScreenIdx(idx)}
                      className={`px-4 sm:px-5 py-3 text-[14px] sm:text-[15px] font-body whitespace-nowrap border-r border-[var(--line)] border-b-2 transition-colors cursor-pointer focus-visible:outline-none ${isActive
                        ? 'bg-[var(--surface)] text-[var(--ink)] font-semibold border-b-[var(--accent)]'
                        : 'bg-transparent text-[var(--muted)] hover:text-[var(--ink)] font-medium border-b-transparent'
                        }`}
                    >
                      {screen.tab}
                    </button>
                  );
                })}
              </div>

              {/* Imagem Grande + Lightbox */}
              <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between gap-4">
                <button
                  type="button"
                  onClick={() =>
                    setLightboxImage({
                      url: activeScreen.url,
                      caption: `${activeScreen.title} — ${activeScreen.caption}`,
                      title: featuredProject.title,
                    })
                  }
                  className="w-full rounded-sm border border-[var(--line)] bg-[#FFFFFF] p-1 sm:p-2 overflow-hidden cursor-zoom-in block relative group/img focus-visible:outline-none"
                  aria-label={`Ampliar tela ${activeScreen.tab} do painel Power BI`}
                >
                  <img
                    src={activeScreen.url}
                    alt={`${featuredProject.title} — ${activeScreen.title}`}
                    className="w-full h-auto max-h-[480px] object-contain block mx-auto transition-transform duration-200 group-hover/img:scale-[1.01]"
                  />
                  <span className="absolute bottom-2.5 right-2.5 px-2.5 py-1 bg-[#131316]/85 backdrop-blur-sm rounded-card border border-[#FFFFFF]/20 font-body text-[12px] text-[#FFFFFF] inline-flex items-center gap-1.5 opacity-0 group-hover/img:opacity-100 transition-opacity">
                    <PixelIcon name="external" size={12} />
                    <span>Ampliar painel</span>
                  </span>
                </button>

                {/* Legenda explicando o que cada tela mostra */}
                <p className="font-body text-[15px] leading-[1.6] text-[var(--muted)]">
                  <span className="font-semibold text-[var(--ink)]">{activeScreen.title}:</span>{' '}
                  {activeScreen.caption}
                </p>
              </div>
            </div>
          </article>
        )}

        {/* ═══ 2. DOIS CASOS MÉDIOS LADO A LADO ═══ */}
        <div className="mt-12 mb-5 font-body font-medium text-[15px] text-[var(--muted)]">
          Auditoria de Dados &amp; Business Intelligence
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Caso Médio (a): Validação da API de NER + Diagrama SVG limpo sem espaço vazio acima */}
          {nerProject && (
            <article className="min-w-0 rounded-card border border-[var(--line)] bg-[var(--surface)] hover:border-[var(--accent)] transition-colors p-6 sm:p-7 flex flex-col justify-between gap-6">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4 font-mono text-[12px] text-[var(--muted)]">
                  <span className="uppercase tracking-wider">Auditoria de Dados · TCM-GO</span>
                  <span>{nerProject.year}</span>
                </div>

                {/* Diagrama SVG do Pipeline (Payload JSON -> Validador concorrente -> Consultas SQL) */}
                <div className="mb-5 rounded-sm border border-[var(--line)] bg-[var(--bg)] p-3 sm:p-4">
                  <NerPipelineSvg />
                </div>

                <h3 className="font-display font-bold text-[20px] sm:text-[22px] tracking-tight text-[var(--ink)] hover:text-[var(--accent)] transition-colors leading-[1.24] mb-3">
                  <Link to={`/projetos/${nerProject.slug}`} className="hover:underline focus-visible:outline-none">
                    {nerProject.title}
                  </Link>
                </h3>

                <p className="font-body text-[15px] sm:text-[16px] leading-[1.68] text-[var(--muted)] mb-4">
                  {nerProject.shortSummary || nerProject.summary}
                </p>

                <p className="font-mono text-[13px] text-[var(--muted)]">
                  {nerProject.tools.split('·').map((t) => t.trim()).join(' · ')}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--line)] flex items-center justify-between font-body font-medium text-[15px]">
                <Link
                  to={`/projetos/${nerProject.slug}`}
                  className="link-underline text-[var(--ink)] hover:text-[var(--accent)] inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Estudo de caso</span>
                  <span aria-hidden="true">→</span>
                </Link>
                <span className="font-mono text-[12px] text-[var(--muted)]">
                  Uso interno
                </span>
              </div>
            </article>
          )}

          {/* Caso Médio (b): Dashboard Comercial com imagem completa (KPIs visíveis, sem corte) */}
          {biProject && (
            <article className="min-w-0 rounded-card border border-[var(--line)] bg-[var(--surface)] hover:border-[var(--accent)] transition-colors p-6 sm:p-7 flex flex-col justify-between gap-6">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4 font-mono text-[12px] text-[var(--muted)]">
                  <span className="uppercase tracking-wider">Business Intelligence · Vendas</span>
                  <span>{biProject.year}</span>
                </div>

                {biProject.image && (
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxImage({
                        url: biProject.image,
                        caption: biProject.imageCaption,
                        title: biProject.title,
                      })
                    }
                    className="mb-5 w-full rounded-sm border border-[var(--line)] bg-[#FFFFFF] p-1.5 overflow-hidden cursor-zoom-in block relative group/img focus-visible:outline-none"
                    aria-label="Ampliar Dashboard de Performance Comercial"
                  >
                    <img
                      src={biProject.image}
                      alt={biProject.imageCaption || biProject.title}
                      className="w-full h-auto object-contain block mx-auto transition-transform duration-200 group-hover/img:scale-[1.01]"
                      loading="lazy"
                    />
                    <span className="absolute bottom-2 right-2 px-2 py-1 bg-[#131316]/85 backdrop-blur-sm rounded-card border border-[#FFFFFF]/20 font-body text-[12px] text-[#FFFFFF] inline-flex items-center gap-1.5 opacity-0 group-hover/img:opacity-100 transition-opacity">
                      <PixelIcon name="external" size={12} />
                      <span>Ampliar</span>
                    </span>
                  </button>
                )}

                <h3 className="font-display font-bold text-[20px] sm:text-[22px] tracking-tight text-[var(--ink)] hover:text-[var(--accent)] transition-colors leading-[1.24] mb-3">
                  <Link to={`/projetos/${biProject.slug}`} className="hover:underline focus-visible:outline-none">
                    {biProject.title}
                  </Link>
                </h3>

                <p className="font-body text-[15px] sm:text-[16px] leading-[1.68] text-[var(--muted)] mb-4">
                  {biProject.shortSummary || biProject.summary}
                </p>

                <p className="font-mono text-[13px] text-[var(--muted)]">
                  {biProject.tools.split('·').map((t) => t.trim()).join(' · ')}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--line)] flex items-center justify-between font-body font-medium text-[15px]">
                <Link
                  to={`/projetos/${biProject.slug}`}
                  className="link-underline text-[var(--ink)] hover:text-[var(--accent)] inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Estudo de caso</span>
                  <span aria-hidden="true">→</span>
                </Link>
                <button
                  type="button"
                  onClick={() =>
                    setLightboxImage({
                      url: biProject.image,
                      caption: biProject.imageCaption,
                      title: biProject.title,
                    })
                  }
                  className="link-underline text-[var(--muted)] hover:text-[var(--accent)] text-[14px] cursor-pointer transition-colors"
                >
                  Ampliar painel
                </button>
              </div>
            </article>
          )}
        </div>

        {/* ═══ 3. TRÊS PROJETOS RESTANTES EM LISTA COMPACTA (Ano, Título, 2 linhas, Ferramentas em linha e Links à esquerda) ═══ */}
        <div className="mt-12 mb-4 font-body font-medium text-[15px] text-[var(--muted)]">
          Pesquisa Aplicada &amp; Engenharia SQL
        </div>

        <div className="border-t border-[var(--line)]">
          {compactProjects.map((project) => (
            <article
              key={project.id}
              className="py-6 border-b border-[var(--line)] grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-start hover:bg-[var(--surface)]/60 md:px-3 transition-colors"
            >
              {/* Ano */}
              <div className="md:col-span-1 font-mono text-[13px] font-medium text-[var(--muted)] md:pt-1">
                {project.year}
              </div>

              {/* Título, 2 linhas de descrição, ferramentas em uma linha e links alinhados à esquerda */}
              <div className="md:col-span-11 min-w-0">
                <div className={`grid grid-cols-1 ${project.image ? 'lg:grid-cols-12 gap-5 items-start' : ''}`}>
                  <div className={project.image ? 'lg:col-span-8 min-w-0' : ''}>
                    <h4 className="font-display font-bold text-[19px] sm:text-[20px] tracking-tight text-[var(--ink)] hover:text-[var(--accent)] transition-colors leading-[1.3] mb-1.5">
                      <Link to={`/projetos/${project.slug}`} className="hover:underline focus-visible:outline-none">
                        {project.title}
                      </Link>
                    </h4>

                    <p className="font-body text-[15px] sm:text-[16px] leading-[1.65] text-[var(--muted)] max-w-[72ch]">
                      {project.shortSummary || project.summary}
                    </p>

                    {/* Ferramentas em linha única abaixo da descrição */}
                    <p className="font-mono text-[13px] text-[var(--muted)] mt-2.5">
                      {project.tools.split('·').map((t) => t.trim()).join(' · ')}
                    </p>

                    {/* Links "Estudo" e "Código" abaixo do texto, alinhados à esquerda */}
                    <div className="mt-3 flex flex-wrap items-center justify-start gap-5 font-body font-medium text-[15px]">
                      <Link
                        to={`/projetos/${project.slug}`}
                        className="link-underline text-[var(--ink)] hover:text-[var(--accent)] inline-flex items-center gap-1.5 transition-colors"
                      >
                        <span>Estudo</span>
                        <span aria-hidden="true">→</span>
                      </Link>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-underline text-[var(--muted)] hover:text-[var(--accent)] inline-flex items-center gap-1.5 transition-colors"
                        >
                          <PixelIcon name="github" size={14} />
                          <span>Código</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Espaço condicional pronto para miniatura quando houver project.image (oculto se null) */}
                  {project.image && (
                    <div className="lg:col-span-4">
                      <button
                        type="button"
                        onClick={() =>
                          setLightboxImage({
                            url: project.image,
                            caption: project.imageCaption || project.title,
                            title: project.title,
                          })
                        }
                        className="w-full rounded-sm border border-[var(--line)] bg-[#FFFFFF] p-1.5 overflow-hidden cursor-zoom-in block relative group/img focus-visible:outline-none"
                        aria-label={`Ampliar imagem de ${project.title}`}
                      >
                        <img
                          src={project.image}
                          alt={project.imageCaption || project.title}
                          className="w-full h-auto max-h-[160px] object-contain block mx-auto transition-transform duration-200 group-hover/img:scale-[1.01]"
                        />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox para ampliação dos Dashboards */}
      {lightboxImage && (
        <ImageLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
      )}
    </section>
  );
}
